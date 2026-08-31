import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const groups = [
  { directory: "model", text: "模型能力与边界", part: 1, partLabel: "第一部 · 模型能力与边界", kicker: "第一部", numbered: true },
  { directory: "platform", text: "Agent 系统与平台", part: 2, partLabel: "第二部 · Agent 系统与平台", kicker: "第二部", numbered: true },
  { directory: "applications", text: "产品与应用", part: 3, partLabel: "第三部 · 产品与应用", kicker: "第三部", numbered: true },
  { directory: "toolkit", text: "工具箱", part: null, partLabel: "工具箱", kicker: "附录", numbered: false },
  { directory: "cases", text: "案例库", part: null, partLabel: "案例库", kicker: "案例", numbered: false },
];

const titleOf = async (path) => {
  const markdown = await readFile(path, "utf8");
  return markdown.match(/^#\s+(.+)$/m)?.[1] ?? path.split("/").at(-1).replace(/\.md$/, "");
};

const contentGroups = await Promise.all(
  groups.map(async (group) => {
    const files = (await readdir(group.directory))
      .filter((file) => file.endsWith(".md") && file !== "README.md")
      .sort((left, right) => left.localeCompare(right, "zh-CN", { numeric: true }));

    return {
      ...group,
      items: await Promise.all(
        files.map(async (file) => ({
          title: await titleOf(resolve(group.directory, file)),
          link: `/${group.directory}/${file.replace(/\.md$/, "")}`,
        })),
      ),
    };
  }),
);

const contentCount = contentGroups
  .filter((group) => group.numbered)
  .reduce((sum, group) => sum + group.items.length, 0);
const supplementaryCount = contentGroups
  .filter((group) => !group.numbered)
  .reduce((sum, group) => sum + group.items.length, 0);

if (contentCount === 0) throw new Error("未找到可发布的 Playbook 正文");

let chapter = 1;
for (const group of contentGroups) {
  if (!group.numbered) {
    group.chapterRange = null;
    group.chapterLabel = `${group.items.length} 篇`;
    group.items = group.items.map((item) => ({ ...item, chapter: null, text: item.title }));
    continue;
  }

  group.chapterRange = [chapter, chapter + group.items.length - 1];
  group.chapterLabel = group.chapterRange[0] === group.chapterRange[1]
    ? `第 ${group.chapterRange[0]} 章`
    : `第 ${group.chapterRange[0]}–${group.chapterRange[1]} 章`;
  group.items = group.items.map((item) => ({
    ...item,
    chapter: chapter++,
    text: `第 ${chapter - 1} 章 · ${item.title}`,
  }));
}

const catalog = contentGroups
  .map(({ chapterLabel, items, partLabel, numbered }) => {
    if (!numbered) {
      return `### ${partLabel}（${chapterLabel}）\n\n| 内容 |\n| --- |\n${items.map(({ title, link }) => `| [${title}](${link.slice(1)}.md) |`).join("\n")}`;
    }

    return `### ${partLabel}（${chapterLabel}）\n\n| 章节 | 文章 |\n| --- | --- |\n${items.map(({ chapter: itemChapter, title, link }) => `| 第 ${itemChapter} 章 | [${title}](${link.slice(1)}.md) |`).join("\n")}`;
  })
  .join("\n\n");

const readme = await readFile("README.md", "utf8");
if (!readme.includes("<!-- CONTENTS:START -->") || !readme.includes("<!-- CONTENTS:END -->")) {
  throw new Error("README.md 缺少自动目录标记");
}

await mkdir(".vitepress/generated", { recursive: true });
await writeFile(
  ".vitepress/generated/content-index.ts",
  `// 由 scripts/generate-content-index.mjs 自动生成，请勿手动编辑。\nexport const contentGroups = ${JSON.stringify(contentGroups, null, 2)} as const;\nexport const contentCount = ${contentCount};\nexport const supplementaryCount = ${supplementaryCount};\n`,
);
await writeFile(
  "README.md",
  readme.replace(/<!-- CONTENTS:START -->[\s\S]*<!-- CONTENTS:END -->/, `<!-- CONTENTS:START -->\n\n${catalog}\n\n<!-- CONTENTS:END -->`),
);

console.log(`已索引 ${contentCount} 章正文与 ${supplementaryCount} 篇工具/案例，已更新仓库总目录。`);
