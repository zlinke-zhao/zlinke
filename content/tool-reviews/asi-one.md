---
id: asi-one
title: "ASI:One 深度评测：Fetch.ai 想做 agent 世界的 Google，先给你一个会记事的个人 AI"
date: "2026-09-04"
category: "AI对话助手"
rating: 4.0
price: "个人版免费可用（freemium）；付费/优先访问与持有 FET 代币挂钩，具体 per-token 价格官方未统一公开"
subtitle: "持久知识图谱记忆 + Agentverse 两百万 agent 目录 + agent-to-agent 社交，它把个人助手押注在 agent 经济而非单次聊天上"
url: "https://asi1.ai"
pros:
  - "持久记忆用用户自有知识图谱实现，跨会话积累偏好/日程/预算，不是每次对话从零开始，是少数真把记忆当产品的助手"
  - "Agentverse 开放目录接入 200 万+ 专用 agent，@agent 语法可在对话中即插即用领域能力，扩展性远超封闭助手"
  - "agent-to-agent 社交是真差异点：你的 AI 能和朋友/同事的 AI 对齐日程、分摊费用、确认预订，像 24 小时数字代表"
  - "OpenAI 兼容 API + MCP server（兼容 Claude Code/Cursor），开发者可把它当 agentic 模型端点直接集成"
cons:
  - "定价不透明：per-token 成本未公开，付费与优先访问和持有 FET 代币挂钩，Web3 机制对主流用户陌生且有门槛"
  - "Agentverse 质量社区驱动且未经验证，自主执行真实世界动作时可能踩到坏 agent，可靠性随生态波动"
  - "实测反馈有硬伤：部分用户每次打开 App 报内部错误、长对话后聊天记录丢失、图片生成偶不发显、群聊隐私处理不清晰"
  - "产品年轻、仍偏 early access，记忆与 agent 协作价值依赖对方也用 ASI:One，冷启动网络效应明显"
alternatives:
  - { name: "Claude", slug: "claude", reason: "若你要的是成熟、定价透明、上下文强的通用助手与工作场景，Claude 比押注 agent 经济的早期产品更稳" }
  - { name: "Manus", slug: "manus", reason: "若核心是跨 Web 端到端跑复杂调研与执行任务、要可靠自主 agent，Manus 覆盖更广" }
  - { name: "Notion AI", slug: "notion-ai", reason: "若诉求是知识管理 + 内容生成、且已在 Notion 工作区，知识库型助手更直接" }
  - { name: "豆包工作", slug: "doubao-work", reason: "若你要的是国内可落地的办公智能体、强调飞书生态与本地执行，豆包工作更对路" }
---

## 一句话总结
ASI:One 适合想提前押注「agent 经济」、看重持久记忆与多 AI 协作、且能接受 Web3 机制与早期产品粗糙度的探索型用户；不适合只想要一个定价透明、稳定可靠的日常聊天助手的人。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>信息</th></tr>
  </thead>
  <tbody>
    <tr><td>产品名</td><td>ASI:One</td></tr>
    <tr><td>出品方</td><td>Fetch.ai（Artificial Superintelligence Alliance 发起者，联盟含 FET / SingularityNET / Ocean Protocol）</td></tr>
    <tr><td>融资与背景</td><td>约融资 6,000 万美元；自 2017 年起研发自主 agent 基础设施</td></tr>
    <tr><td>发布时间</td><td>Product Hunt 于 2026-04-23 上线；VentureBeat 报道 Beta 发布、更广版本计划 2026 年初</td></tr>
    <tr><td>产品定位</td><td>个人 AI 助手 + agentic 编排平台（记忆 + agent 发现 + 真实行动）</td></tr>
    <tr><td>记忆机制</td><td>用户自有知识图谱（user-owned knowledge graphs），可分开 work/personal/creative 多图</td></tr>
    <tr><td>Agent 生态</td><td>Agentverse 开放目录，200 万+ 注册专用 agent（第三方口径）</td></tr>
    <tr><td>模型阵容</td><td>ASI-1 Mini / Extended / Fast / Agentic / Graph 多档变体；开发者侧 API 常见 asi1 / asi1-mini / asi1-ultra</td></tr>
    <tr><td>多模态</td><td>支持图/文/语音输入，可生成图片</td></tr>
    <tr><td>支付/行动</td><td>Stripe、Visa、稳定币、FET token 生态；支付与预订需用户批准</td></tr>
    <tr><td>兼容</td><td>OpenAI 兼容 Chat Completions API；MCP server 兼容 Claude Code / Cursor</td></tr>
    <tr><td>官网</td><td>asi1.ai（iOS / Android / Web）</td></tr>
  </tbody>
</table>

## 它到底是什么
ASI:One 是 Fetch.ai 面向消费者的个人 AI 助手，但它想做的不是「又一个聊天窗口」，而是一层 agent 编排与记忆基础设施。核心理念有三：记忆（记住你是谁、你的偏好与目标）、agent 发现（需要时调用专业 agent）、行动（替你执行真实世界任务）。

Fetch.ai 自 2017 年就在做自主 agent 底层，并联合 SingularityNET、Ocean Protocol 发起 Artificial Superintelligence Alliance（ASI Alliance）。ASI:One 是这套企业级基础设施的消费者入口——你用它聊天，底层把它接到 Agentverse 上两百万个专用 agent 去完成单模型做不了的事。VentureBeat 把 Agentverse 类比为「agent 的 DNS / Google」，解决的是「90% 的 agent 因没有发现层而从未被使用」的问题。

## 核心能力拆解
**持久记忆（知识图谱）**：不是临时上下文窗口，而是把每次分享的结构化成可查询的记忆节点，存你的偏好、日历、饮食、预算、忠诚度计划与历史决策。可维护工作、个人、创作多张独立知识图谱，AI 智能切换。

**Agentverse 路由**：开放目录里有 200 万+ 专用 agent（旅行、零售、娱乐、餐饮、企业等）。你用自然语言提需求，ASI:One 自动检索并路由到合适 agent；对话中输入 `@agent flights` 或 `@agent recipe` 可直接把某个领域 agent 拉进会话。

**agent-to-agent 社交**：你的 AI 能直接和朋友、家人、同事的 AI 通信，对齐日程、找场地、分摊费用、确认预订。它像 24 小时替你运作的数字代表。还支持离线时朋友和你的 AI 聊、多用户群聊（参与者与人机同线程）。

**真实行动与支付**：通过 Stripe、Visa、稳定币与 FET token 生态代你执行支付；涉及支付、预订或外部承诺时，AI 会先征求批准。可连接 Google Calendar、Gmail 处理日程与跟进，并运行周期性后台任务（周报、价格追踪、社群监控）。

**开发者面**：OpenAI 兼容 API（`https://api.asi1.ai/v1/chat/completions`），可作为 agentic 模型端点；提供 MCP server，兼容 Claude Code、Cursor 等客户端；可构建并变现自定义 agent。

## 实测反馈（rightaichoice 2026-08-29 研究综述）
跨 YouTube、Product Hunt、App Store、Stack Overflow 共 61 条提及，43% 正面、57% 批评。正面集中在持久记忆、自主执行（「说目标它就跑步骤」）、多 agent 协作、自然语言简化复杂流程。批评也很具体：部分用户每次打开 App 持续报内部错误；长对话后聊天记录丢失，极其挫败；图片生成有时不显示提示；群聊隐私处理不清晰；Agentverse agent 的验证与策展尚未被证明可靠。结论倾向：记忆与协作是真实亮点，但产品仍 early access、可靠性随生态波动。

## 定价（口径必须看清）

<table>
  <thead>
    <tr><th>方案</th><th>口径</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>免费版</td><td>官方 freemium</td><td>个人账户免费可用，记忆 / Agentverse / 多模态均可使用</td></tr>
    <tr><td>Pro</td><td>第三方目录 $19/月</td><td>官方未统一确认</td></tr>
    <tr><td>Business</td><td>第三方目录 $49/月</td><td>官方未统一确认</td></tr>
    <tr><td>Enterprise</td><td>定制</td><td>联系官方</td></tr>
    <tr><td>Web3 优先</td><td>持有 FET 代币</td><td>premium 与优先访问与持币挂钩，per-token 价格未公开</td></tr>
  </tbody>
</table>

> 诚实提示：ASI:One 采用 freemium，个人版免费可用，但**具体 per-token 成本与付费档权益官方未统一披露**；多个第三方目录给出 Pro $19 / Business $49 等数字，亦有来源称 premium 与优先访问和持有 FET 代币挂钩。决策前以官网 asi1.ai 结算页或官方文档为准，勿把第三方口径当官方定价。

## 竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>ASI:One</th><th>Claude</th><th>Notion AI</th><th>Manus</th></tr>
  </thead>
  <tbody>
    <tr><td>记忆机制</td><td>用户自有知识图谱，跨会话持久</td><td>对话记忆（逐步增强）</td><td>工作区知识库</td><td>任务内上下文</td></tr>
    <tr><td>Agent 生态</td><td>Agentverse 200 万+ 开放目录</td><td>工具 / 集成</td><td>模板 / 数据库</td><td>通用自主</td></tr>
    <tr><td>多 agent 协作</td><td>agent-to-agent 社交</td><td>无</td><td>弱</td><td>单 agent 多步</td></tr>
    <tr><td>真实行动/支付</td><td>Stripe/Visa/稳定币/FET，需批准</td><td>较弱</td><td>无</td><td>有（浏览器/终端）</td></tr>
    <tr><td>定价透明度</td><td>低（per-token 未公开，Web3 挂钩）</td><td>高（$20 Pro 等）</td><td>高（附加订阅）</td><td>中（按量）</td></tr>
  </tbody>
</table>

核心差异一句话：Claude 成熟透明、Notion AI 强知识管理、Manus 覆盖通用自主执行；ASI:One 的独特性在于把「持久记忆 + 开放 agent 目录 + agent 间社交」绑成一套面向 agent 经济的早期基础设施——赌对了是范式，赌错了是过于超前的实验。

## 优缺点
优点已在开头列出：真把记忆当产品、Agentverse 即插即用、agent-to-agent 社交独特、OpenAI 兼容 + MCP 利于开发者。

短板同样明显：定价不透明且 Web3 挂钩、Agentverse 质量未验证、实测有稳定性与隐私硬伤、产品年轻冷启动依赖对方也用 ASI:One。

## 适合谁 / 不适合谁
- **适合**：想提前押注 agent 经济、看重持久记忆与多 AI 协作的探索者；认可 Web3 机制、能容忍早期产品粗糙度的开发者与去中心化项目方。
- **不适合**：只想要定价透明、稳定可靠的日常助手；对数据主权与群聊隐私高度敏感、不愿任何持久记忆上云；厌倦「区块链联盟」叙事、需要即开即用的主流用户。

## 综合评分与结论
给 4.0 分（与工具目录标注一致）。ASI:One 的想象力是真实的：它把个人助手的竞争从「谁模型强」拉到「谁能记住你、并找到对的 agent 替你把事办了」，@agent 语法和 Agentverse 是诚实且成体系的架构 bet。但它的短板也是结构性的——定价不透明、生态质量未验证、早期稳定性与隐私问题、以及冷启动网络效应。对普通用户，今天它不如 ChatGPT/Claude 成熟；对 agent 开发者与去中心化信仰者，它值得认真研究。如果你愿意当「agent 经济」的早期居民，它是最好的入场券之一；如果你只想让 AI 老实回答问题，先别上车。
