---
id: macro
title: "Macro 深度评测：开源版 Superhuman+Notion+Linear 合一，AI 共享记忆是真是假"
date: "2026-10-28"
category: "AI办公效率"
rating: 4.3
price: "免费（个人）/ Pro $40/座/月 / Max $200/座/月"
subtitle: "一个 Rust 写的开源一体化工作空间，想把邮件、聊天、文档、任务、CRM 和 AI Agent 全部塞进一个 App，用共享记忆消灭信息孤岛"
url: "https://macro.com"
pros:
  - "真正的统一对象图谱：邮件/聊天/文档/任务/CRM/通话共享一套数据模型，@链接任意对象即共享其完整上下文，而非简单缝合多个 App"
  - "完全开源 AGPLv3（2026-05 起）且可自托管，Rust+SolidJS+CRDT+Cloudflare Durable Objects 是真实基础设施而非 prompt 包装"
  - "免费个人版永久可用（$0），键盘优先邮件体验对标 Superhuman/Linear，重度邮件处理极快"
  - "AI Agent 能力突出：团队级记忆每晚从工作空间重建、能主动扫邮件/聊天更新 CRM、coding agent 可直接接 Claude/ChatGPT/Cursor/Gemini 跟到 PR"
  - "合规扎实且获大厂背书：托管版 SOC 2 Type II / ISO 27001 / CASA Tier 2，Google Cloud 案例披露 125k+ 活跃用户、周环比约 20% 增长"
cons:
  - "邮件只接 Gmail/Google Workspace，Outlook 与自定义 IMAP/SMTP 仍是 coming soon，用 Microsoft 365 的团队无法作为入口"
  - "免费版限制偏紧：仅 2 个邮箱账户、5GB 存储、外发邮件带 Sent with Macro 页脚、AI 受限，更像试用；团队功能必须从 $40/座起，无免费团队档"
  - "一体式定位的固有代价：单模块（邮件/文档/任务/CRM）各自略逊于领域头部单品（Superhuman/Notion/Linear/HubSpot），复杂流程仍要回专业工具"
  - "对国内用户不友好：无中文界面、无微信/钉钉接入、服务器在海外，访问与数据合规未明，移动端/iOS 仍偏早期"
alternatives:
  - { name: "Notion AI", slug: "notion-ai", reason: "若你只需要文档/知识库+AI，Notion 生态更成熟、国内可用，但缺邮件与团队级共享记忆" }
  - { name: "豆包工作", slug: "doubao-work", reason: "国内团队替代首选，飞书原生打通、中文与国内合规更好，共享记忆基于飞书上下文" }
  - { name: "Genspark", slug: "genspark", reason: "若你想让 Agent 替你跑完整个工作流而非统一收件箱，Genspark 的超级 Agent 更直接" }
  - { name: "扣子", slug: "coze", reason: "若核心是搭自己的 AI Agent/工作流并接入业务系统，扣子的可视化编排更灵活" }
---

## 一句话总结
Macro 适合想用**一个开源 App 收编 Slack+Notion+Linear+Superhuman+Zoom** 的海外小团队，但用 Microsoft 365、或需要中文/国内合规的团队应先绕行。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Macro Inc.（纽约；创始人 Jacob Beckerman，UPenn Jerome Fisher M&amp;T，前 a16z Scout；联合创始人 Lev Breydo）</td></tr>
    <tr><td>发展脉络</td><td>2020 年以 PDF 编辑器（原 CoParse）起步，2024 转向工程师统一工作空间，2026 升级为「工作操作系统」</td></tr>
    <tr><td>融资</td><td>$9.3M 种子轮（2023-02，a16z 领投，Craft Ventures/BoxGroup 参投）+ $12M（2024-11，a16z 领投），累计约 $21.3M</td></tr>
    <tr><td>技术栈</td><td>Rust + SolidJS；CRDT 文档；Cloudflare Durable Objects；底层由 Google Gemini 2.5 Pro 驱动</td></tr>
    <tr><td>开源协议</td><td>AGPLv3（2026-05-31 起，此前为 BSL），仓库 github.com/macro-inc/macro</td></tr>
    <tr><td>用户规模</td><td>125k+ 活跃用户，周环比约 20% 增长（Google Cloud 客户案例，2026）</td></tr>
    <tr><td>合规</td><td>托管版 SOC 2 Type II / ISO 27001 / CASA Tier 2</td></tr>
    <tr><td>平台</td><td>macOS / Windows 桌面端 + Web；iOS App 早期；支持自托管</td></tr>
    <tr><td>Product Hunt</td><td>2026-07-02 发布，189 赞、40 评论，日榜第 5 名（由 Ben Lang 提交）</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 统一收件箱 + 键盘优先邮件 — 4.5/5**
Macro Mail 是速度标杆，J/K/E 快捷键、Signal/Noise 双频道分流，体验明显对标 Superhuman。实测中用户反馈「像 StarCraft 选手一样导航 Gmail」。短板是只接 Gmail/Google Workspace，Outlook 与自定义 IMAP 仍是 coming soon，企业微信/钉钉更无从谈起。

**2. 团队级共享 AI 记忆 — 4.5/5**
这是 Macro 的灵魂。所有模块写入同一套对象图谱，Agent 每晚从邮件、文档、任务、通话重建团队记忆。在频道里 @提及一份文档或邮件线程，即把其底层对象权限一并授予，因此「共享文档=共享它引用的全部工作」。Google Cloud 案例披露 80% 用户更倾向让 AI 直接代执行而非手动操作。

**3. CRDT 文档与频道聊天 — 4.2/5**
文档基于 CRDT，离线可编辑、后台自动合并、多人实时协同无冲突；聊天把对话当作可标记完成的收件项。相比 Notion 的 Markdown 堆叠，Macro 的对象级关联更利于 Agent 检索，但纯文档体验仍不及 Notion 生态成熟。

**4. AI Agent + 自动 CRM — 4.3/5**
Agent 能主动扫描邮件/聊天自动更新 CRM 商机阶段、会前生成摘要；更特别的是支持把 Claude/ChatGPT/Cursor/Gemini 的订阅接入频道，读 diff、跟任务直到开 PR。这对工程团队是加分项，但 CRM 深度远不及 HubSpot。

**5. 开源 + 自托管 + 透明基建 — 4.4/5**
2026-05-31 从 BSL 转为 AGPLv3 完全开源，可自托管；官方工程博客公开讲解 CRDT 编辑、Macro 文件系统与轻量 GraphQL 缓存，是真基建而非套壳。合规层面托管版具备 SOC 2 Type II / ISO 27001 / CASA Tier 2。

## 价格方案

<table>
  <thead>
    <tr><th>版本</th><th>价格</th><th>存储</th><th>AI 能力</th><th>适合人群</th></tr>
  </thead>
  <tbody>
    <tr><td>Free</td><td>$0 / 座 / 月（永久免费）</td><td>5 GB</td><td>受限：仅 2 个邮箱账户、外发带 Sent with Macro 页脚</td><td>个人尝鲜、单邮箱轻量使用</td></tr>
    <tr><td>Pro</td><td>$40 / 座 / 月（30 天免费试用）</td><td>100 GB</td><td>完整 AI Agent + 共享记忆、去除页脚</td><td>小团队主力协作</td></tr>
    <tr><td>Max</td><td>$200 / 座 / 月</td><td>1 TB</td><td>10× Pro AI 用量 + 优先支持</td><td>重度 / 企业高频调用</td></tr>
  </tbody>
</table>

注：自托管免费（AGPLv3），但缺失部分托管专属功能（如 iOS App、AWS 托管、第三方登录）；Outlook/IMAP 支持官方列为 coming soon。

## 与竞品对比

<table>
  <thead>
    <tr><th>工具</th><th>统一收件箱/邮件</th><th>共享 AI 记忆</th><th>开源 / 自托管</th><th>国内可及性</th><th>起步价</th></tr>
  </thead>
  <tbody>
    <tr><td>Macro</td><td>✅ 仅 Gmail/Workspace</td><td>✅ 团队级，每晚重建</td><td>✅ AGPLv3 可自托管</td><td>❌ 海外服务器、无中文</td><td>免费 / $40 座/月</td></tr>
    <tr><td>Notion AI</td><td>❌</td><td>⚠️ 页面级上下文</td><td>❌</td><td>✅ 国内可用</td><td>约 $10/月</td></tr>
    <tr><td>豆包工作</td><td>⚠️ 接飞书邮件</td><td>✅ 飞书上下文</td><td>❌</td><td>✅ 国内原生</td><td>免费 / ¥68 月</td></tr>
    <tr><td>Genspark</td><td>❌</td><td>⚠️ Agent 上下文</td><td>❌</td><td>✅</td><td>免费 / $24.99 月</td></tr>
  </tbody>
</table>

## 优势与短板

Macro 最大的胜点是**「统一对象图谱 + 共享记忆」这套设计是真的**，而非把 Slack/Notion/Linear 拼在一起。@链接任意对象即共享其上下文，Agent 检索的是同一份底层数据，这是缝合怪做不到的；再加上完全开源、Rust 真实基建、Google Cloud 与 a16z 双重背书，可信度高于多数同类「All-in-One」PPT。免费个人版也让尝鲜零成本。

但它的问题同样清晰：邮件入口被锁死在 Gmail/Workspace，Outlook 与 IMAP 迟迟不来，让大量企业无法直接作为主入口；免费版的 2 邮箱 / 5GB / 外发页脚限制更像试用；而一体式的宿命是每个单模块都略逊头部单品——邮件不如 Superhuman、文档不如 Notion、任务不如 Linear、CRM 不如 HubSpot。对国内用户更要命的是无中文、无微信/钉钉、服务器在海外，合规与访问都成疑问。

## 最终推荐

**推荐给：**
- 海外小团队 / 独立开发者，已重度使用 Gmail 且想用一套开源工具收编邮件+文档+任务+CRM；
- 重视数据自主权、愿意自托管、想读源码改工作流的工程团队；
- 预算敏感的个人用户（Free 档长期可用）。

**不推荐给：**
- 使用 Microsoft 365 / Outlook 为主的企业——Macro 当前无法作为邮件入口；
- 需要中文界面、微信/钉钉集成或国内数据合规的团队——直接看豆包工作、飞书等；
- 追求单点极致体验（顶级邮件/顶级文档/顶级 CRM）的团队——各自领域头部单品仍更强。

**上手建议**：先用 Free 档连 1 个 Gmail + 少量文档，问 Agent「上周客户 X 关于交付周期的邮件说了什么」，若记忆检索准确且快，再考虑 $40/座 的 Pro 档铺开小团队。

---

**评测声明**：本文基于 Macro 官方文档与定价页、Google Cloud 客户案例、Product Hunt 发布页、a16z/everydev.ai/rightaichoice/aitools.fyi 等多源公开信息撰写，关键数据（融资、用户量、价格、开源协议、PH 数据）均来自上述可核查来源。本文不含付费推广。
