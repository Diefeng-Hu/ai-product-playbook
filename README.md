# AI Product Playbook

AI 产品经理的实践手册。

在线阅读：[《AI Product Playbook：AI 产品经理的实践手册》](https://yaowenhu-pm.github.io/ai-product-playbook/)

这是一本持续更新的公开在线书，从模型能力与边界、Agent 系统与平台、产品与应用三个层次，整理 AI 产品实践中的真实问题、判断和方法。

## 为什么写这本书

- 模型层讨论能力和边界，不把版本参数写成永恒规律。
- 平台层讨论如何把不稳定能力变成可控、可靠、可观测的系统。
- 应用层讨论用户价值、交互、采纳和责任边界。
- Prompt、Checklist 和案例不占用正文篇幅，分别进入工具箱与案例库。

## 全书目录

<!-- CONTENTS:START -->

### 第一部 · 模型能力与边界（第 1–4 章）

| 章节 | 文章 |
| --- | --- |
| 第 1 章 | [用模型的稳定能力设计产品](model/01-designing-with-model-boundaries.md) |
| 第 2 章 | [Context、检索与信息压缩](model/02-context-retrieval-compression.md) |
| 第 3 章 | [模型输出的约束与验证](model/03-uncertainty-and-validation.md) |
| 第 4 章 | [当答案越来越便宜，什么值得我们追问](model/04-when-answers-get-cheaper.md) |

### 第二部 · Agent 系统与平台（第 5–9 章）

| 章节 | 文章 |
| --- | --- |
| 第 5 章 | [组织记忆：从记录到选择](platform/01-memory-system.md) |
| 第 6 章 | [Context、人格与工具如何分层](platform/02-context-persona-tools.md) |
| 第 7 章 | [Agent 可靠性：不重、不漏、不静默](platform/03-agent-reliability.md) |
| 第 8 章 | [权限、安全与人机交接](platform/04-permissions-and-handoffs.md) |
| 第 9 章 | [延迟、成本与可观测性](platform/05-latency-cost-observability.md) |

### 第三部 · 产品与应用（第 10–13 章）

| 章节 | 文章 |
| --- | --- |
| 第 10 章 | [关系型 AI：从用户模型到有效触发](applications/01-relationship-ai.md) |
| 第 11 章 | [团队 AI：从 Bot 到团队成员](applications/02-team-ai.md) |
| 第 12 章 | [小团队内部 AI 工具的采纳度量](applications/03-adoption-metrics.md) |
| 第 13 章 | [内容产品的编辑抽象：给用户语义模型，而不是代码](applications/04-semantic-content-editor.md) |

### 工具箱（4 篇）

| 内容 |
| --- |
| [记忆筛选器 Prompt 模板](toolkit/01-memory-filter.md) |
| [第三方集成接入自检 Prompt](toolkit/02-integration-checklist.md) |
| [文件驱动的复杂任务工作流](toolkit/03-file-driven-workflow.md) |
| [视觉偏好盲测协议与 VLM 有序偏好抽取 Prompt](toolkit/04-visual-evaluation.md) |

### 案例库（2 篇）

| 内容 |
| --- |
| [案例：半公开团队大屏](cases/01-ambient-team-display.md) |
| [案例：增量镜像是持续对账](cases/02-incremental-mirroring.md) |

<!-- CONTENTS:END -->

## 更新原则

1. 先记录真实实践，再抽象方法；一次事故默认只进入案例库。
2. 能改变读者下一次决策、且跨场景成立的判断，才进入正文。
3. 平台参数、固定阈值和单次经验必须标明适用条件，不写成普遍定律。
4. Prompt 和 Checklist 作为工具维护，不为了凑章节单独成篇。
5. 所有内容都可以被后续证据推翻、合并、降级或删除。

## License

MIT
