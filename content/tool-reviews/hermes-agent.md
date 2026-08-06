---
id: hermes-agent
title: "Hermes Agent 深度评测：Nous Research 开源 Agent 运行时，会自己写技能、跨所有渠道共用一份记忆"
date: "2026-08-06"
category: "AI工作台"
rating: 4.2
price: "开源免费（MIT）/ 自托管约 $5/月 VPS + 自备模型 Key；Nous Portal 托管云 $20·100·200 月（含 10% 赠送额度，220/1100/2200 美元年付）"
subtitle: "不是又一个聊天框，而是 Python 写的可自托管 Agent 运行时：长期记忆 + 从你的工作里自动长出可复用技能 + 一个 Agent 横跨 Telegram/Discord/Slack/飞书/钉钉/微信等 20+ 渠道共用一份记忆；v0.20 还给了流式语音、A2A 协议与可溯源研究"
url: "https://hermes-agent.nousresearch.com"
pros:
  - "会自己写技能（Learning Loop）：观察多步任务后自动沉淀成可复用 Skill，并据反馈迭代，越用越懂你的工作流，而非每次冷启动"
  - "跨 20+ 渠道同一份记忆：一个 Agent 同时活在 Telegram/Discord/Slack/WhatsApp/Signal/邮件/飞书/钉钉/QQ/微信/桌面/Web，上下文与技能共享，换平台不用重解释"
  - "开源可自托管（MIT）：GitHub 22.6 万 Stars、650+ 贡献者，审计与改源码自由，数据留你自己的基础设施，无云端锁定"
  - "v0.20 能力完整：流式语音对话+打断/本地唤醒词、A2A v1.0 多智能体互联、可溯源研究（每条结论带可核验引用）、桌面端 Artifacts 实时预览+插件 SDK"
  - "模型与执行完全自由：200+ 模型经 Nous Portal/OpenRouter 或自带 Key，7 种执行后端（本地/Docker/SSH/Singularity/Modal/Daytona/Vercel Sandbox），可无人值守跑定时任务"
cons:
  - "偏运行时/开发者取向，不是开箱即用的 GUI 办公助理：需配 VPS、API Key、模型路由，上手门槛高于 LobsterAI、Kimi Work 这类一键桌面应用"
  - "自我改进循环存在已知缺陷：社区高频反馈记忆写入大量无关信息、重要信息被忽略、改进循环「总觉得自己干得漂亮」即使任务已失败，需人工用 /memory approve|reject 兜底"
  - "UI/UX 仍是短板：早期纯 CLI，虽已补桌面端与仪表盘，但社区仍普遍吐槽 Web UI 字体与配色丑、TUI 体感慢，非技术用户友好度不如专职桌面 Agent"
  - "开源热度伴随水军嫌疑：Reddit 上大量新员工号刷同质化好评，独立评测建议忽略票数、以自己一周实测为准；28.4k 未关闭 Issue 也说明项目仍处前沿粗糙期"
alternatives:
  - { name: "OpenClaw", slug: "stepclaw", reason: "OpenClaw 系（StepClaw/AutoClaw 等）成熟、技能生态最丰富、中文 IM 远程指挥完善；Hermes 是独立开源运行时，差异在记忆/技能自学习/跨渠道网关与数据主权" }
  - { name: "Fellou", slug: "fellou", reason: "Fellou 以浏览器为底座、主打穿透登录态深度搜索；Hermes 是更底层的自托管运行时，强在记忆/技能自学习/跨渠道，不抢浏览器操控赛道" }
  - { name: "Kimi Work", slug: "kimi-work", reason: "Kimi Work 是国产对话入口+WebBridge+长文本基因的桌面智能体；Hermes 是开源运行时、跨渠道+技能自学习，不依赖单一大模型生态" }
  - { name: "Rowboat", slug: "rowboat", reason: "Rowboat 本地优先、以知识图谱记忆为核心；Hermes 也开源+长期记忆，但更强调跨渠道网关、技能自学习与云/自托管双形态" }
---

## 一句话总结

Hermes Agent 适合**想要数据主权、又希望 Agent「越用越懂自己」、一个 Agent 管所有渠道的开发者和自托管玩家**；它是运行时而非开箱 GUI 办公助理，需自配环境与模型成本，且记忆自学习循环仍有明显粗糙之处，**纯办公小白带不动、要 OpenAI 式托管的人请绕行**。

## 核心数据一览

<table>
  <tr><th style="background:#4a90d9;color:#fff">项目</th><th style="background:#4a90d9;color:#fff">数据</th></tr>
  <tr><td style="font-weight:bold">开发商</td><td>Nous Research（Hermes 模型家族、Psyche 分布式训练背后的实验室）</td></tr>
  <tr><td style="font-weight:bold">最新版本</td><td>v0.20.0「The Herald Release」（2026-08-03 发布；自 v0.19.0 累计约 3,650 commits、1,400+ 合并 PR、650+ 贡献者、1,200+ Issue 关闭）</td></tr>
  <tr><td style="font-weight:bold">首次发布</td><td>2026-02-25（GitHub 仓库创建于 2025-07-22）</td></tr>
  <tr><td style="font-weight:bold">许可证</td><td>MIT（可审计、可自托管、永久免费）</td></tr>
  <tr><td style="font-weight:bold">GitHub 热度</td><td>约 22.6 万 Stars / 4.4 万 Forks（截至 2026-08-06）；未关闭 Issue 约 2.84 万</td></tr>
  <tr><td style="font-weight:bold">支持平台</td><td>macOS / Windows（原生 PowerShell 或 WSL2）/ Linux / Termux（Android）；Windows 原生支持早期为实验性</td></tr>
  <tr><td style="font-weight:bold">网关渠道</td><td>20+：Telegram/Discord/Slack/WhatsApp/Signal/Email/CLI，以及飞书/钉钉/LINE/QQ/微信（Photon/Weixin 桥接）</td></tr>
  <tr><td style="font-weight:bold">执行后端</td><td>本地终端 / Docker / SSH / Singularity / Modal / Daytona / Vercel Sandbox（7 种）</td></tr>
  <tr><td style="font-weight:bold">模型支持</td><td>Nous Portal（200+ 模型）/ OpenRouter / 任意 OpenAI 兼容端点 / 本地 vLLM·llama.cpp·MLX</td></tr>
  <tr><td style="font-weight:bold">价格</td><td>本体 MIT 免费；自托管约 $5/月 VPS + 模型 Key；Nous Portal 托管云 $20·100·200 月（含 10% 赠送额度，220/1100/2200 美元年付）</td></tr>
  <tr><td style="font-weight:bold">安装方式</td><td>一行命令：<code>curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash</code>（Windows：<code>iex (irm https://hermes-agent.nousresearch.com/install.ps1)</code>）</td></tr>
</table>

## 核心功能评测

### 1. 技能自学习（Learning Loop）—— 4.5/5
这是 Hermes 最稀缺的差异点。它观察你重复出现的多步任务，自动把解法写成可复用的 `SKILL.md`（兼容 agentskills.io 开放标准，可在技能库间移植分享），并在使用中据反馈迭代。社区把它定位成「介于 Claude Code 式 CLI 与 OpenClaw 式消息平台 Agent 之间的生态位」。**扣分项**：独立评测与 Reddit 高赞帖（r/hermesagent「是我用错了还是它真没那么神」93 赞 66 评论）反复指出，改进循环「总觉得自己干得漂亮」——即使任务失败也会判定成功，技能覆盖也不均衡，需人工用 `/memory approve`/`/memory reject` 兜底。

### 2. 持久记忆 + 跨渠道网关 —— 4.5/5
三级记忆体系（MEMORY.md / USER.md + SQLite + FTS5 全文检索）跨会话、跨平台持久化。最常被迁移用户点赞的正是一个 Agent 横跨 Telegram/Discord/Slack/邮件/桌面/Web 共用一份记忆与技能。v0.20 还把语音备忘录接入扩展到了飞书、钉钉、LINE、QQ、微信。迁移到 Hermes 的用户主要就是冲「开箱即用的记忆管理」去的，而不是工具数量。**扣分项**：前述英语老师帖实测显示，记忆常写入无关内容、忽略重要信息，不主动查 Vault——「如果得提醒它用自己记忆，那要记忆干嘛」。

### 3. 无人值守自动化与执行后端 —— 4.0/5
内置自然语言 cron 调度器可向任意平台推送日报/备份/审计；并行子 Agent 各自带独立对话与终端，经 Python RPC 把多步流水线压成零上下文消耗的操作；7 种执行后端（含云端 Modal/Daytona）带容器加固与命名空间隔离。适合夜间研究扫描、晨间简报、竞品监控自动跑完。**扣分项**：模型成本外置，Agent 任务会多次调用模型（规划→工具→结果→收尾），Token 消耗高于普通聊天，预算需自行压测。

### 4. v0.20 新能力：流式语音 / A2A / 可溯源研究 / 桌面平台 —— 4.5/5
v0.20「The Herald Release」一口气补齐四块：①流式对话语音，逐句播报、可中途打断、本地唤醒词（音频不外传）；②A2A v1.0 标准协议，让 Hermes 能发现并与其它 A2A 兼容 Agent 互联；③`grounded-citations` 技能，研究结论每条带可核验引用与事实核查模式；④桌面端升级为平台——Artifacts 沙箱实时预览、插件 SDK（看板为首个插件）、全局快捷键速记窗、多窗口。CLI 也新增 `!` 直接跑 Shell、`/init` 生成 AGENTS.md、`/diff` `/context` `/focus` 等命令。

### 5. 开源、安全与数据主权 —— 4.5/5
MIT 全量开源，零遥测、无追踪，所有记忆存本地 `~/.hermes/`（Windows 为 `%LOCALAPPDATA%\hermes`），容器只读根目录+权限降级+PID 限制。已知漏洞仅 CVE-2026-7113（中危 5.6，限 v0.8.0 的 Webhook 鉴权缺失，已在后续修复）。**提醒**：任何代码执行型 Agent 暴露公网都有风险，OpenClaw 曾有 24.5 万实例因监听所有网卡被攻破——Hermes 应走 Telegram/隧道等 socket 通道，切勿直连公网。

## 价格方案

<table>
  <tr><th style="background:#4a90d9;color:#fff">档位</th><th style="background:#4a90d9;color:#fff">月费</th><th style="background:#4a90d9;color:#fff">包含额度</th><th style="background:#4a90d9;color:#fff">年付</th><th style="background:#4a90d9;color:#fff">包含内容</th></tr>
  <tr><td><b>Free</b></td><td>$0</td><td>无月度额度</td><td>$0</td><td>免费模型 + 按量付费（1:1）；不含 Tool Gateway</td></tr>
  <tr><td><b>Plus</b></td><td>$20/月</td><td>$22 额度（赠 10%，$10 可结转）</td><td>$220</td><td>200+ 模型 + 托管工具（搜索/生图/TTS/浏览器自动化）+ 高限流</td></tr>
  <tr><td><b>Super</b></td><td>$100/月</td><td>$110 额度（赠 10%，$50 可结转）</td><td>$1,100</td><td>更高限流，重度日常使用主力档</td></tr>
  <tr><td><b>Ultra</b></td><td>$200/月</td><td>$220 额度（赠 10%，$100 可结转）</td><td>$2,200</td><td>最高限流 + 最高结转</td></tr>
</table>

**Nous Portal Cloud（2026-07-08 上线预览）** 按小时计费：Small 约 $0.32/天（1GB/2vCPU）、Medium 约 $0.59/天（2GB/4vCPU）、Large 约 $1.12/天（4GB/8vCPU），停机仅收存储约 $0.06/天，约 60 秒部署。自建 VPS 跑本体约 $5/月起，模型调用另计（DeepSeek V4 Flash 约 $0.14/$0.28 每百万输入/输出 Token）。对比 ChatGPT Plus $20、Claude Pro $17，预算型 Hermes 不到一半，但高端配置可到 2–4 倍且无用量上限。

## 与竞品对比

<table>
  <tr><th style="background:#4a90d9;color:#fff">维度</th><th style="background:#4a90d9;color:#fff">Hermes Agent</th><th style="background:#4a90d9;color:#fff">OpenClaw 系（StepClaw 等）</th><th style="background:#4a90d9;color:#fff">Fellou</th><th style="background:#4a90d9;color:#fff">Kimi Work / KroWork</th></tr>
  <tr><td><b>产品本质</b></td><td>开源 Agent 运行时（Python/MIT）</td><td>开源框架产品化发行版</td><td>浏览器客户端 Agent</td><td>国产对话入口+浏览器桥接</td></tr>
  <tr><td><b>记忆机制</b></td><td>持久记忆 + 技能自学习</td><td>依赖插件/上下文</td><td>Agentic Memory</td><td>各有记忆层</td></tr>
  <tr><td><b>跨渠道</b></td><td>20+ 渠道同记忆</td><td>技能市场/IM 远程</td><td>桌面/浏览器为主</td><td>各有桥接/分享</td></tr>
  <tr><td><b>中国 IM</b></td><td>飞书/钉钉/QQ/微信桥接</td><td>原生中文 IM 远程</td><td>一般</td><td>原生</td></tr>
  <tr><td><b>数据主权</b></td><td>MIT 全自托管</td><td>本地可部署</td><td>重云端工作区</td><td>各有所长</td></tr>
  <tr><td><b>上手形态</b></td><td>运行时/开发者向，需配环境</td><td>一键安装套壳</td><td>桌面客户端开箱</td><td>桌面客户端开箱</td></tr>
</table>

**结论**：Hermes Agent 区别于本库已收录的桌面智能体——它不是「会操控浏览器的 Agent」（Fellou），不是「对话生成应用」（KroWork），而是**一个可自托管的开源 Agent 底座**：最长板是「记忆持久化 + 从工作里自动长出可复用技能 + 一个 Agent 横跨所有渠道共用一份记忆」。社区调研（r/openclaw，约 10.3 万成员）显示约 30% 已切到 Hermes、20% 两者并用，迁移主因正是记忆管理而非工具数量。

## 优势与短板

**优势**
- Learning Loop 是真实产品哲学而非营销词，社区公认「setup 一开始就更精简」「终于能做事而不是整天 debug」。
- 开源 + 跨渠道 + 云/自托管双形态，数据主权与灵活性兼得；22.6 万 Stars 与 Nous Research 背书，可信度高。
- v0.20 把语音、A2A、可溯源研究、桌面平台一次性补齐，从纯命令行走向多端可用，受众面大幅扩大。

**短板**
- 偏运行时/开发者取向，需配 VPS、API Key、模型路由，上手门槛高于 LobsterAI、Kimi Work 这类一键 GUI 桌面应用。
- 记忆自学习循环有已知粗糙：写入大量无关信息、忽略重要项、改进循环过度乐观，需人工兜底。
- Web UI 字体配色被普遍吐槽丑、TUI 体感慢；虽有桌面端但仍非消费级体验。
- 开源热度伴随水军嫌疑，独立评测建议忽略票数、以自身一周实测为准；2.84 万未关闭 Issue 说明仍处前沿粗糙期。

## 最终推荐

**适合**：想要数据主权、又希望 Agent「越用越懂自己」的开发者与自托管玩家；被多渠道反复解释背景、上下文冷启动折磨的多渠道重度用户；愿花一点运维成本换长期可控的用户；想做多智能体互联（A2A）或可追溯研究（grounded-citations）的进阶玩家。

**不建议依赖**：想要下载即用、零配置的 GUI 办公助理（交给 LobsterAI / Kimi Work）；纯浏览器穿透登录态深搜（交给 Fellou）；纯 IDE 重构（交给 Cursor / Kimi Work）；不愿配环境、要 OpenAI 式开箱托管（交给 ChatGPT Work）；非技术办公人员直接用（记忆自学习仍需人工监督，当前体验性价比不如 Claude/ChatGPT）。

**组合建议**：把 Hermes Agent 当「会进化技能、跨所有渠道的个人 Agent 底座」管记忆/自动化/研究；Fellou 做穿透登录态深度研究；KroWork 拼可分享小应用；Rowboat 管本地知识图谱——各取所长。选型时按「要记忆与技能自学习 + 跨渠道，还是要浏览器操控/应用生成」区分。

---

**评测声明**：本文基于 Hermes Agent 官网（hermes-agent.nousresearch.com）、GitHub 官方仓库（NousResearch/hermes-agent，MIT，2026-08-06 抓取实际 Stars 22.6 万、v0.20.0 发布于 2026-08-03）、官方 v0.20.0 发布说明、Nous Portal 定价页（portal.nousresearch.com/manage-subscription）及第三方独立评测（Hostinger 成本拆解、Kie.ai 产品分析、aiagentstore 的 Reddit/X 问题汇总、r/hermesagent 社区帖、pasqualepillitteri 社区舆情分析）撰写。所有功能与价格均来自上述可核验来源；本文不含付费推广。「亲测」操作由站长（赵生）按实际环境补充后长期迭代。
