import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const groups = [
  ["product-notes", "产品手记"],
  ["agent", "Agent 实践"],
  ["prompts", "Prompt"],
  ["skills", "Skill"],
  ["learning", "学习与复盘"],
];

const titleOf = async (path) => {
  const markdown = await readFile(path, "utf8");
  return markdown.match(/^#\s+(.+)$/m)?.[1] ?? path.split("/").at(-1).replace(/\.md$/, "");
};

const contentGroups = await Promise.all(
  groups.map(async ([directory, text], index) => {
    const files = (await readdir(directory))
      .filter((file) => file.endsWith(".md") && file !== "README.md")
      .sort((left, right) => left.localeCompare(right, "zh-CN", { numeric: true }));

    return {
      text,
      directory,
      part: index + 1,
      partLabel: `第${["一", "二", "三", "四", "五", "六"][index]}部 · ${text}`,
      items: await Promise.all(
        files.map(async (file) => ({
          title: await titleOf(resolve(directory, file)),
          link: `/${directory}/${file.replace(/\.md$/, "")}`,
        })),
      ),
    };
  }),
);

const total = contentGroups.reduce((sum, group) => sum + group.items.length, 0);
if (total === 0) throw new Error("未找到可发布的 Playbook 原文");

let chapter = 1;
for (const group of contentGroups) {
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
  .map(
    ({ chapterLabel, items, partLabel }) => `### ${partLabel}（${chapterLabel}）\n\n| 章节 | 文章 |\n| --- | --- |\n${items.map(({ chapter, title, link }) => `| 第 ${chapter} 章 | [${title}](${link.slice(1)}.md) |`).join("\n")}`,
  )
  .join("\n\n");
const readme = await readFile("README.md", "utf8");
if (!readme.includes("<!-- CONTENTS:START -->") || !readme.includes("<!-- CONTENTS:END -->")) {
  throw new Error("README.md 缺少自动目录标记");
}

await mkdir(".vitepress/generated", { recursive: true });
await writeFile(
  ".vitepress/generated/content-index.ts",
  `// 由 scripts/generate-content-index.mjs 自动生成，请勿手动编辑。\nexport const contentGroups = ${JSON.stringify(contentGroups, null, 2)} as const;\nexport const contentCount = ${total};\n`,
);
await writeFile(
  "README.md",
  readme.replace(/<!-- CONTENTS:START -->[\s\S]*<!-- CONTENTS:END -->/, `<!-- CONTENTS:START -->\n\n${catalog}\n\n<!-- CONTENTS:END -->`),
);

console.log(`已索引 ${total} 篇原文，已更新仓库总目录。`);
