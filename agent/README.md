# Agent

这里记录 Agent、Memory、Context 等 AI 原生工作流实践。每篇都来自真实系统的搭建、事故和复盘。

## 已收录

| # | 主题 | 说明 |
| --- | --- | --- |
| 1 | [Team Memory 系统设计：压缩比记录更难](04-team-memory-compression.md) | 三层决策模型、接受率毕业机制、静默原则与推拉时间结构 |
| 2 | [长期在线 Agent 自动化的工程手记](05-always-on-agent-ops.md) | 单机部署、告警、降级纪律、三层兜底、headless 认证、静默分支审计与本地→云端迁移 |
| 3 | [团队 IM 里的 AI 伙伴](06-team-chat-agent-design.md) | 人设、Context 分层、能力-安全边界与延迟四个产品变量 |
| 4 | [自动化的权限边界与最后一公里](07-automation-permission-last-mile.md) | UI 权限 ≠ API 权限：写入探测前置、降级梯度与失败不丢产物 |
| 5 | [半公开大屏：展示为主的团队状态可视化](08-ambient-team-display.md) | 环境信息屏的用户模型、自动轮播导演、信息量定拍长与"真人只说真话"隐私红线 |
| 6 | [知识推送的注意力路由：从摘要到点名](09-attention-routing-push.md) | 三行路由卡模板、Prompt 约束+代码守门、画像质量决定路由上限与静候期 |
| 7 | [团队 Bot 的必回复工程](10-bot-reply-guarantee.md) | "没回复"的五种故障分类、非文本兜底、Bot 自知边界、只救死不换血与合成事件验证 |
| 8 | [把 Agent 代码纳入版本管理：代码、状态、用户数据、凭证的四层分离](12-versioning-agent-code-data-hygiene.md) | 工作目录是隐私高危区、白名单拷贝而非原地 gitignore、推送前密钥扫描与依赖只声明不打包 |
| 9 | [声明交接点还不够：Agent 驱动 UI 时，不可逆操作要有执行防线](13-enforcing-agent-handoff-gates.md) | 声明的交接点≠被机制守住的交接点、三条执行层防线、越界后如实交代的信任校准 |
| 10 | [用嘴编程会腐烂：把 AI 编码变成有护栏的工程](14-structured-vibe-coding.md) | 文档即上下文、四步流程、监工-子 Agent 分层、每行代码配单测与类型检查 |
| 11 | [小团队内部 AI 工具的采纳度量：覆盖率优先于频次](17-adoption-metrics-small-team.md) | 覆盖率 N/M（谁没用过）优先于频次、<50% 先降摩擦、永久事件账 + 卡内实时计数、剔除 owner |
| 12 | [长连接假活与漏事件对账](21-connection-false-alive-reconciliation.md) | 连接"在线"≠事件在送达、独立于连接状态的对账补偿、静默降级为 0 掩盖采集故障 |
| 13 | [常驻 AI 问答服务的延迟预算](23-always-on-latency-budget.md) | 内存检索取代自主盲搜、按置信度分档模型、禁工具与流式回执 |
| 14 | [无官方 API 数据源的增量镜像](24-incremental-mirroring-no-api.md) | 断点续传、resume 去重、删除传播与显式跳过清单 |
