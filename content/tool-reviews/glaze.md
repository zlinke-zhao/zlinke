---
id: glaze
title: "Glaze by Raycast 深度评测：用一句话聊出能离线运行的原生 Mac 应用"
date: "2026-10-19"
category: "AI编程开发"
rating: 4.4
price: "免费(120一次性积分) / Pro $20/月 / Team $30/席/月"
subtitle: "AI 应用构建器里的少数派，不做网页套壳，只造真正的 .app"
url: "https://www.glaze.app"
pros:
  - "真正原生 Mac 应用，非网页套壳，离线可用且拥有文件/快捷键/菜单栏/后台等 OS 级权限"
  - "背靠 Raycast 六年 Mac 软件打磨功底，UI 精致、默认美观、设计一致性高"
  - "内置应用商店加团队私有商店，分发复用 remix 形成闭环，从个人玩具变团队工具"
  - "生成的应用代码内容归你所有，技术用户可深入源码、可一键搭建 MCP 服务器"
cons:
  - "平台锁定严重，仅支持 macOS Tahoe 加 Apple Silicon，Intel Mac 与 Windows Linux 全被排除"
  - "积分制且免费档不续期，120 一次性积分用尽即停，重度用户月内易触顶需额外补购"
  - "安全与透明度存争议，AI 生成具系统级权限的桌面应用，权限模型与底层技术栈披露不清"
alternatives:
  - { name: "Bolt.new", slug: "bolt-new", reason: "需要跨平台 Web 应用而非桌面原生应用时，Bolt 浏览器端生成托管 Web 应用更合适" }
  - { name: "Replit", slug: "replit", reason: "想要云端全栈 Web 应用与协作开发环境，Replit 覆盖更通用" }
  - { name: "Cursor", slug: "cursor", reason: "开发者想完全掌控架构与代码，直接用 Cursor 加 Claude 写原生 Mac 应用更自由" }
  - { name: "Claude", slug: "claude", reason: "若目标只是写代码而非打包分发，Claude 加 Claude Code 即可产出可 own 的原生项目" }
---

## 一句话总结
Glaze 适合已经泡在苹果生态里、想用聊天方式造出能用能离线的桌面小工具的 Mac 重度用户；不适合需要跨平台、需要生产级复杂应用，或对安全透明度敏感的企业合规场景。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th><th>来源</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Raycast（Mac 启动器背后公司，CEO Thomas Mann）</td><td>官方 / aidailypost</td></tr>
    <tr><td>公司融资</td><td>累计约 4780 万美元（YC W20，Atomico 领投）</td><td>NeuralPaws / ToolDirectory</td></tr>
    <tr><td>上线时间</td><td>2026 年 3 月内测，7 月 1 日公开，7 月 3 日 Product Hunt 发布</td><td>onei.ai / byteiota / PH</td></tr>
    <tr><td>Product Hunt</td><td>48 小时内登顶日榜第一，500+ 票（官方列表 535，第三方统计 574+）</td><td>PH / wpnews / NeuralPaws</td></tr>
    <tr><td>底层模型</td><td>Claude Code 与 OpenAI Codex</td><td>tooldirectory / byteiota / aidailypost</td></tr>
    <tr><td>平台要求</td><td>macOS Tahoe + Apple Silicon（M 系列），Intel 不支持</td><td>官方 / 多家评测</td></tr>
    <tr><td>定价模式</td><td>积分制，免费 120 一次性积分，Pro $20/月，Team $30/席/月</td><td>glaze.app / ToolRadar / ampm</td></tr>
    <tr><td>综合口碑</td><td>ToolDirectory 4.85/5（118 评）、NeuralPaws 4.0/5、PH 5.0（1 评）</td><td>各评测站</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 自然语言生成原生 Mac 应用（评分 4.5/5）**
你用大白话描述想要的应用，背后的 AI 代理（Claude Code 或 OpenAI Codex）写 Swift 代码、通过 Xcode 命令行工具编译、把真正的 .app 装进 Applications 文件夹。简单应用一次构建约 60–90 秒，迭代就在同一个聊天线程里继续。它不是生成一段要你自己部署的代码，而是直接交付一个能进 Dock、能离线跑的二进制。这个"产出物是 app 而不是仓库"的定位，是 Glaze 和其它 vibe coding 工具最本质的区别。

**2. 本地优先与离线运行（评分 5.0/5）**
这是 Glaze 最硬核的卖点。生成的应用跑在你自己的 Mac 上，没有后端服务器，建好后离线也能用，运行你的应用不再需要续费任何云端订阅。文件、快捷键、菜单栏常驻、后台进程、本地 CLI 与 MCP 服务器都能直接调用。对比之下，Lovable、Bolt、v0 这类工具产出的都是活在别人服务器上的 Web 应用，永远离不了浏览器和网络。

**3. 深度 macOS 系统集成（评分 4.5/5）**
应用能读写文件系统、注册全局快捷键、常驻菜单栏、跑后台进程，还能直接调 Calendar、Contacts、Reminders 的原生 API。一个 Web 应用永远没法注册全局热键，也没法盯着你的本地 git 仓库在菜单栏显示脏分支状态——Glaze 应用可以。系统级权限是把双刃剑，但论"像 Mac 软件"这个维度，它确实做到了。

**4. 应用商店与团队分发（评分 4.3/5）**
Glaze 自带公开商店和私有团队商店。公开目录里已经有实时比分追踪、特斯拉太阳能监控、并行跑 AI Agent 的极简终端、甚至一个完整合成器。你可以直接装别人的应用再对话改造，也可以把自己的小工具发布出去。Pro 支持 unlisted 私密链接分享，Team 则提供组织内可见的私有商店加集中计费。这套分发层把 Glaze 从"个人玩具"抬成了"团队工具"。

**5. 可深入代码与技术透明（评分 4.0/5）**
底层用 Claude Code 和 Codex，技术上不黑箱。它提供可编辑的代理队列、把界面元素映射回代码的视觉检查器，技术用户随时能钻进生成源码。应用内部还能一键搭 MCP 服务器；生成的应用调用文本生成、流式、图像理解/生成时，走的是终端用户自己的 Glaze 积分（带权限弹窗与每日上限），不用你单独配 API Key。Raycast 自己也说"如果你被迫看底层代码，就是我们做错了"——对小白友好，对开发者也留了后门。

## 价格方案

<table>
  <thead>
    <tr><th>版本</th><th>价格</th><th>积分</th><th>关键差异</th></tr>
  </thead>
  <tbody>
    <tr><td>Free</td><td>$0</td><td>120 一次性欢迎积分（不续期）</td><td>可建应用、浏览/安装/运行商店应用免费；不能 unlisted 分享、不能补购积分</td></tr>
    <tr><td>Pro</td><td>$20/月（原价 $25/月，发布促销价）</td><td>200/月，可结转最多 2 个月</td><td>月度续费积分、unlisted 私密分享、可补购积分、优先生成</td></tr>
    <tr><td>Team</td><td>$30/席/月（原价 $35/席/月）</td><td>200/席/月</td><td>私有团队商店、统一集中计费、共享应用库</td></tr>
  </tbody>
</table>

积分按"一次构建或一次改动的实际工作量"消耗，官方没有公布逐项价目表。免费档的 120 积分约能建两到四个简单应用，重度用户第一周就可能触顶。需要提醒：Glaze 价格 2026 年内多次调整，macfolio 曾称 10 月 Pro 降至 $10/月，但截至 10 月 18 日的多源定价核验仍显示 $20/月，本文以官方实时口径为准，订阅前请核对 glaze.app/pricing。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Glaze</th><th>Bolt.new</th><th>Replit</th><th>Cursor</th></tr>
  </thead>
  <tbody>
    <tr><td>产出形态</td><td>原生 Mac .app</td><td>托管 Web 应用</td><td>托管 Web 应用</td><td>代码项目（你自行编译）</td></tr>
    <tr><td>离线运行</td><td>完全支持</td><td>不支持（云端）</td><td>不支持（云端）</td><td>取决于你的实现</td></tr>
    <tr><td>跨平台</td><td>仅 Mac</td><td>任意浏览器</td><td>任意浏览器</td><td>全平台</td></tr>
    <tr><td>OS 级权限</td><td>完整（文件/快捷键/菜单栏）</td><td>浏览器沙箱</td><td>浏览器沙箱</td><td>完整（你写代码）</td></tr>
    <tr><td>免费档</td><td>120 一次性积分</td><td>有限额度</td><td>有限额度</td><td>免费可用</td></tr>
    <tr><td>付费起步</td><td>Pro $20/月</td><td>约 $20/月</td><td>Core 约 $20/月</td><td>Pro $20/月</td></tr>
  </tbody>
</table>

这几款解决的是本质不同的问题：Bolt 和 Replit 造的是浏览器里跑、部署到云的 Web 应用；Cursor 是给你一个写代码的智能体，产出仍是工程仓库；Glaze 唯一交付"从 Dock 启动、离线可用、有系统级权限"的桌面软件。要 Web 应用选 Bolt/Replit，要完全掌控架构选 Cursor，要个人桌面小工具选 Glaze。

## 优势与短板

优势很集中：第一，它真的造原生应用而非网页套壳，离线、OS 级权限这两点是浏览器派工具物理上做不到的；第二，Raycast 做了六年 Mac 软件，图标、打包、权限、设计默认值都当产品假设处理好，小白不用踩坑；第三，应用商店加团队私有商店把"造"和"分发"闭环，越用越值；第四，代码内容归你，技术用户能下钻源码、搭 MCP，不存在被锁死在黑箱里。

短板同样尖锐。最致命的是平台锁定——只认 macOS Tahoe 加 Apple Silicon，Intel Mac 直接出局，Windows 和 Linux 只在路线图、无时间表，这等于把绝大多数专业用户挡在门外。其次是积分制加免费档不续期，120 一次性积分用光就停，重度构建者月内易触顶需补购。最后是安全与透明度争议：HN 社区普遍担心，给一个能任意执行代码、握有系统级权限的桌面应用"信任"，权限模型和底层到底是原生还是 Electron 都披露不清，对非技术用户尤其不友好。

## 最终推荐

**强烈推荐这类人用**：已经活在苹果生态里的 Mac 重度用户；运营或创始人需要围绕自己技术栈做内部小工具；支持团队想跑评审工作流类应用；设计师或创作者想要一个菜单栏小工具却不想雇开发者。这类场景，Glaze 把"学 Swift、开 Xcode、搞部署"的整道门槛直接删掉。

**不建议这类人用**：需要用 Windows 或 Linux、或还在用 Intel Mac 的人——直接出局；需要生产级、复杂、需合规审计的应用的企业——权限透明度与安全模型当前不足以支撑；想要一次构建跨平台分发的团队——Glaze 现在就是 Mac 单平台。这类需求，老老实实用 Cursor 加 Claude 写原生项目，或用 Bolt/Replit 做 Web 应用更稳妥。

一句话收尾：Glaze 是目前唯一把"聊天造 app"做成真正原生桌面软件的选手，完成度与 pedigree 都高，但平台锁定和早期安全疑虑让它更适合苹果生态里的个人与小团队尝鲜，而非企业级铺开。

---

**评测声明**：本文基于作者实际使用和公开信息撰写。所有数据来自 Raycast 官方文档与定价页、Product Hunt 发布页、ToolRadar、NeuralPaws、ToolDirectory、byteiota、macfolio、HN Distilled 及多家独立评测（均标注于正文来源列）。本文不含付费推广。
