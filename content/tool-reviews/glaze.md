---
id: glaze
title: "Glaze by Raycast 深度评测：一句话造出能住进程序坞的原生 Mac 应用"
date: "2026-09-15"
category: "AI编程开发"
rating: 4.4
price: "免费（120 积分）/ Pro $25/月（年付 $20/月）/ Team $35/席/月（年付 $30/席/月）"
subtitle: "Raycast 用 AI 把软件开发的门槛降到「说话」级别，但平台锁死在 Apple Silicon"
url: "https://www.glaze.app"
pros:
  - "生成的是真·原生 .app，不是网页套壳，可离线运行、深度集成文件系统与菜单栏"
  - "背靠 Raycast（$47.8M 融资、YC W20），产品打磨与发布节奏都属一线水准"
  - "免费档 120 积分可真实评估，公共商店浏览安装永久免费，上手零成本"
  - "对话式迭代体验顺滑，自带可视化检视器，懂代码还能直接改生成源码"
cons:
  - "硬性要求 macOS Tahoe + Apple Silicon（M 系列），Intel Mac/Windows/Linux 全部被排除"
  - "积分制（Pro 仅 200/月）对重度迭代者偏紧，复杂生产应用不在适用范围内"
  - "生成应用无法脱离 Mac 生态分发，存在平台锁定风险"
  - "产品仍早期，第三方长测与深度评测样本偏少"
alternatives:
  - { name: "Replit", slug: "replit", reason: "若你真正需要全栈 Web 应用并云端部署，Replit 的覆盖面更广，Pro 约 $25/月" }
  - { name: "Bolt.new", slug: "bolt-new", reason: "做快速 Web 原型、聊天式生成网页，Bolt 更轻更通用，约 $20/月" }
  - { name: "Cursor", slug: "cursor", reason: "想用 AI 写真实代码、要完整 IDE 与跨平台，Cursor 适配所有系统" }
  - { name: "Manus", slug: "manus", reason: "需要 Agent 自主交付完整任务而非只造桌面小工具，Manus 的通用性更强" }
---

## 一句话总结
Glaze 是 2026 年唯一一个能让你「说一句话就造出原生 Mac 应用」的 AI 工具，适合 Mac 重度用户做个人效率工具与小型内部应用；但它是 Apple Silicon 独占，需要跨平台或写生产级软件的人请绕道。

## 核心数据一览

<table>
  <thead>
    <tr><th>维度</th><th>关键信息</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Raycast（联合创始人兼 CEO Thomas Paul Mann 团队，YC W20，累计融资 $47.8M，领投方 Atomico）</td></tr>
    <tr><td>产品形态</td><td>AI 原生 Mac 应用生成器，输出真实 .app 二进制</td></tr>
    <tr><td>首发时间</td><td>2026 年 3 月进入内测，2026 年 7 月 1–3 日公开上线</td></tr>
    <tr><td>平台要求</td><td>macOS Tahoe + Apple Silicon（M 系列），Windows/Linux 仅「规划中」</td></tr>
    <tr><td>定价</td><td>免费 120 积分 / Pro $25/月（年付 $20）/ Team $35/席/月（年付 $30）</td></tr>
    <tr><td>Product Hunt</td><td>登顶日榜，公开口径 500+ upvotes（NeutralPaws 574+、AINative 589、PHunt 速览 465）</td></tr>
    <tr><td>综合评分</td><td>本评测 4.4 / 第三方 NeuralPaws 独立评测 4.0</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 自然语言 → 原生应用（评分 4.3）**
描述你要什么，Glaze 自动完成架构规划、代码生成，并通过 Xcode 编译出真实可安装的 .app，落在「应用程序」文件夹。它不是浏览器标签页、不是 Electron 壳、更不是一次性原型，而是文件系统级、可设全局快捷键、可常驻菜单栏的一等公民。对「想做个小工具但懒得开 Xcode」的 Mac 用户，这几乎是把门槛砍到地平线。

**2. 本地优先与离线运行（评分 4.5）**
生成后的应用完全本地运行，无服务器依赖、无运行时订阅，数据留在你的机器上。对比 Replit/Bolt 那种必须云端托管、靠链接分发的 Web 应用，Glaze 在隐私和可用性上天然占优——断网也能用，这正是桌面软件该有的样子。

**3. 对话式迭代与可视化检视（评分 4.0）**
不满意就继续对话让 AI 改；可重排的 Agent 队列让你排队叠加修改，可视化检视器把 UI 元素映射回源码，懂代码的用户还能随时 drop 进生成源码手动改。NeuralPaws 在易用性维度给了 4.6，迭代体验确实是它的强项。

**4. 内置应用商店与团队私有商店（评分 4.1）**
公共 Glaze Store 可发现、安装、分享社区作品；Pro 支持 unlisted 私密分享，Team 提供私有团队商店与集中计费。Raycast 官方甚至自述其客服与销售流程已跑在 Glaze 造的应用上，属于自家人先吃狗粮的强信号。

**5. 可调用 AI 与 MCP（评分 3.8）**
生成的应用能通过终端用户的 Glaze 积分调用文本生成、图像理解、图像生成等能力（带权限弹窗与每日上限）；Agent 还能在应用内直接脚手架 MCP Server。但跨应用的高级 API 调用仍偏基础，PH 用户评论也明确提到「希望未来支持更多 API」。

## 价格方案

<table>
  <thead>
    <tr><th>方案</th><th>价格</th><th>积分</th><th>核心权益</th></tr>
  </thead>
  <tbody>
    <tr><td>Free</td><td>$0</td><td>120 一次性欢迎包</td><td>浏览/安装/运行商店应用、发布到公共商店</td></tr>
    <tr><td>Pro</td><td>$25/月（年付 $20/月）</td><td>200/月</td><td>全部 Pro 功能、积分加购、unlisted 私密发布</td></tr>
    <tr><td>Team</td><td>$35/席/月（年付 $30/席/月）</td><td>200/席/月</td><td>私有团队商店、共享应用库、集中计费</td></tr>
  </tbody>
</table>

积分按 Agent 轮次（turn）消耗而非时间。官方文档称 120 欢迎包约可造 2 个落地页或数个小型工具；重度迭代者大概率一周内就需升级 Pro。Pro 与 Team 均支持 14 天试用与积分加购。横向看，Pro $25/月在同类（FlutterFlow $5、Retool $9、Tooljet $19、Voiceflow $60）中属中高位，但 Glaze 卖的是「原生桌面」而非「浏览器后台」，定价逻辑不同。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Glaze</th><th>Replit</th><th>Bolt.new</th></tr>
  </thead>
  <tbody>
    <tr><td>输出类型</td><td>原生 Mac .app</td><td>Web 应用（托管）</td><td>Web 应用（托管）</td></tr>
    <tr><td>离线可用</td><td>✅ 完全离线</td><td>❌ 云端</td><td>❌ 云端</td></tr>
    <tr><td>跨平台</td><td>❌ 仅 Mac</td><td>✅ 任意浏览器</td><td>✅ 任意浏览器</td></tr>
    <tr><td>系统级访问</td><td>✅ 文件系统/菜单栏/快捷键</td><td>❌ 浏览器沙箱</td><td>❌ 浏览器沙箱</td></tr>
    <tr><td>Pro 价格</td><td>$25/月</td><td>$25/月</td><td>$20/月</td></tr>
    <tr><td>最适合</td><td>个人 Mac 工具</td><td>全栈 Web 应用</td><td>快速 Web 原型</td></tr>
  </tbody>
</table>

结论很清晰：三款工具解决的是不同问题。Glaze 造本地原生桌面软件，Replit/Bolt 造云端 Web 应用。你要的是个人效率小工具、想脱网能用、要系统级权限，Glaze 是此对比中唯一能交付的；你要的是上线的网站，那它从根上就不对口。

## 优势与短板

**优势**：第一，它真的生成原生应用而非网页包装，离线、瞬时启动、系统级集成是 Web 工具永远给不了的组合；第二，Raycast 的产品功力体现在细节里—— Agent 队列、可视化检视、应用商店，都比「生成完给你一段代码」的竞品成熟；第三，免费档足够评估、公共商店永久免费，决策成本低；第四，你拥有应用及其代码与内容，技术用户可继续打磨。

**短板**：最致命的是平台锁——必须 macOS Tahoe + Apple Silicon，Intel Mac、Windows、Linux 用户直接被拒之门外，这排除了大量专业用户。其次是积分制对重度构建者偏紧，200/月并不宽裕。第三，生成应用无法脱离 Mac 生态分发，长期存在锁定风险。第四，产品仍早期，复杂生产级应用不在其设计目标内，第三方长测样本也还少。

## 最终推荐

**强烈推荐给**：深度生活在 Apple 生态里的 Mac 用户——独立开发者、设计师、产品经理、效率控。你想验证一个想法、做个菜单栏小工具、给团队造个内部仪表盘，又不想碰 Xcode，Glaze 是当前最顺手的选择。免费档先玩起来，真有持续需求再上 Pro。

**谨慎考虑**：需要跨平台分发、要交付生产级软件、或团队里有人用 Windows/Linux 的，现在别碰，等 Windows/Linux 支持落地再说。

**不推荐给**：纯 Web 产品创业者（用 Replit/Bolt 更对路）、追求零锁定与开源可控的（可看 Cursor 这类真 IDE）、以及只用 Intel Mac 的用户。

一句话收尾：Glaze 不是「又一个 AI 造 App」，它是第一个把软件变成「为你而生」的桌面端范式。前提是——你得在 Apple 的船上。

---

**评测声明**：本文基于作者实际调研与公开信息撰写，数据来自 Glaze 官网、ToolRadar/TopAIHubs 定价页、NeuralPaws 独立评测（4.0/5）、AINative Foundation 周报、Product Hunt 公开页及用户评论。所有价格与事实均经多源交叉核对。本文不含付费推广。
