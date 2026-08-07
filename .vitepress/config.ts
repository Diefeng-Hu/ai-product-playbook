import { defineConfig } from "vitepress";
import { contentGroups } from "./generated/content-index";

const directoryStateScript = `try {
  const root = document.documentElement;
  root.classList.toggle("sidebar-collapsed", localStorage.getItem("playbook-sidebar-collapsed") === "true");
  root.classList.toggle("outline-collapsed", localStorage.getItem("playbook-outline-collapsed") === "true");
} catch {}`;

export default defineConfig({
  lang: "zh-CN",
  title: "AI Product Playbook",
  description: "AI 产品经理的实践手册",
  base: "/ai-product-playbook/",
  cleanUrls: true,
  srcExclude: ["inbox/**", "README.md"],
  head: [["script", {}, directoryStateScript]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "目录", link: "/#contents" },
      { text: "GitHub", link: "https://github.com/yaowenhu-pm/ai-product-playbook" },
    ],
    sidebar: contentGroups.map(({ partLabel, items }) => ({ text: partLabel, items })),
    aside: "left",
    outline: { level: [2, 3], label: "本页目录" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    footer: { message: "MIT License", copyright: "© 2026 胡耀文" },
  },
});
