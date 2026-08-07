# AI Product Playbook

AI 产品经理的实践手册。

在线阅读：[《AI Product Playbook：AI 产品经理的实践手册》](https://yaowenhu-pm.github.io/ai-product-playbook/)

这是一本持续更新的公开在线书，记录 AI 产品、Agent 系统与 AI Native 协作中的真实问题、判断和方法。

## 为什么写这本书

- 不追逐模型新闻，只保留能影响产品判断的实践。
- 不把 AI 当作单一能力，而是放进任务、协作与责任边界中讨论。
- 用可持续更新的章节，而不是一次性教程，沉淀长期作品集。

## 全书目录

<!-- CONTENTS:START -->

### 第一部 · 产品手记（第 1–5 章）

| 章节 | 文章 |
| --- | --- |
| 第 1 章 | [任务型 AI 与关系型 AI](product-notes/01-task-ai-vs-relationship-ai.md) |
| 第 2 章 | [关系型 AI 的记忆时机与经济模型](product-notes/06-relationship-ai-memory-economics.md) |
| 第 3 章 | [把模型的短板设计成交互特性](product-notes/07-designing-around-model-limits.md) |
| 第 4 章 | [个人 AI 的第一性原理：为检索而生的数字分身](product-notes/08-personal-ai-first-principles.md) |
| 第 5 章 | [内容型产品的编辑抽象：给业主语义模型，而不是代码](product-notes/09-content-editing-semantic-model.md) |

### 第二部 · Agent 实践（第 6–19 章）

| 章节 | 文章 |
| --- | --- |
| 第 6 章 | [Team Memory 系统设计：压缩比记录更难](agent/04-team-memory-compression.md) |
| 第 7 章 | [长期在线 Agent 自动化的工程手记](agent/05-always-on-agent-ops.md) |
| 第 8 章 | [团队 IM 里的 AI 伙伴：把 Bot 做成成员，而不是工具](agent/06-team-chat-agent-design.md) |
| 第 9 章 | [自动化的权限边界与最后一公里](agent/07-automation-permission-last-mile.md) |
| 第 10 章 | [半公开大屏：展示为主的团队状态可视化](agent/08-ambient-team-display.md) |
| 第 11 章 | [知识推送的注意力路由：从摘要到点名](agent/09-attention-routing-push.md) |
| 第 12 章 | [团队 Bot 的必回复工程](agent/10-bot-reply-guarantee.md) |
| 第 13 章 | [把 Agent 代码纳入版本管理：代码、状态、用户数据、凭证的四层分离](agent/12-versioning-agent-code-data-hygiene.md) |
| 第 14 章 | [声明交接点还不够：Agent 驱动 UI 时，不可逆操作要有执行防线](agent/13-enforcing-agent-handoff-gates.md) |
| 第 15 章 | [用嘴编程会腐烂：把 AI 编码变成有护栏的工程](agent/14-structured-vibe-coding.md) |
| 第 16 章 | [小团队内部 AI 工具的采纳度量：覆盖率优先于频次](agent/17-adoption-metrics-small-team.md) |
| 第 17 章 | [长连接假活与漏事件对账：把"无解"的断连间隙变成可补偿的](agent/21-connection-false-alive-reconciliation.md) |
| 第 18 章 | [常驻 AI 问答服务的延迟预算：内存检索、分档模型、禁工具、流式回执](agent/23-always-on-latency-budget.md) |
| 第 19 章 | [无官方 API 数据源的增量镜像：断点续传、resume 去重、删除传播](agent/24-incremental-mirroring-no-api.md) |

### 第三部 · Prompt（第 20–23 章）

| 章节 | 文章 |
| --- | --- |
| 第 20 章 | [记忆筛选器 Prompt 模板](prompts/02-memory-filter-prompt.md) |
| 第 21 章 | [第三方集成接入自检 Prompt](prompts/04-third-party-integration-checklist.md) |
| 第 22 章 | [结构化编码的四段式 Prompt 与生成编排的元 Prompt](prompts/05-spec-driven-coding-prompts.md) |
| 第 23 章 | [视觉偏好盲测协议与 VLM 有序偏好抽取 Prompt](prompts/07-visual-blind-test-and-extraction.md) |

### 第四部 · Skill（第 24 章）

| 章节 | 文章 |
| --- | --- |
| 第 24 章 | [什么时候把任务沉淀成 Skill](skills/02-when-to-build-a-skill.md) |

### 第五部 · 学习与复盘（第 25 章）

| 章节 | 文章 |
| --- | --- |
| 第 25 章 | [用 AI 写万字长文：先对齐，再动笔](learning/03-long-doc-alignment-before-writing.md) |

<!-- CONTENTS:END -->

## 更新原则

1. 先记录真实实践，再抽象方法。
2. 同一主题至少经历一次使用、一次复盘、一次改写，才沉淀为 Playbook。
3. 不追热点清单，只保留能影响产品判断和工作流的内容。
4. 所有内容都可以被后续版本推翻、合并或重写。

## License

MIT
