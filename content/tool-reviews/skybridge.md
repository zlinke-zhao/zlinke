---
id: skybridge
title: "Skybridge 深度评测：用 React 一次编写，把应用装进 Claude 和 ChatGPT"
date: "2026-09-16"
category: "AI编程开发"
rating: 4.3
price: "框架免费开源（MIT）；托管平台 Alpic Cloud 免费档 $0 / Pro 约 $30-50 月 / Business $300 月"
subtitle: "AI 助手正变成新 App Store，Skybridge 是给开发者造店面的开源框架"
url: "https://www.skybridge.tech"
pros:
  - "端到端类型安全：tRPC 风格从 MCP 服务器 tool 定义直驱 React 视图，server 端 schema 改动编译期即暴露，杜绝运行期 UI 崩溃"
  - "真正跨客户端：一套代码跑 Claude、ChatGPT（Apps SDK）、VS Code、Cursor 等任意 MCP 兼容宿主，自动 polyfill 各端差异"
  - "开发者体验拉满：HMR 本地模拟器 + 一键公共隧道（Alpic Tunnel）+ Beacon 合规扫描，把改代码到测 UI 的慢循环压到秒级"
  - "零锁定 MIT 开源：框架免费可自托管，仅部署可选 Alpic Cloud，且被 OpenAI 官方文档推荐"
cons:
  - "强绑定 TypeScript 与 React：非 JS 技术栈团队需自建适配层，纯后端无 UI 的简单 tool 用原生 SDK 更轻"
  - "项目年轻（2025-10 创建），API 仍在演进，v2 带来破坏性变更需跟随迁移；独立第三方长期实测与社区排障资源仍在积累"
  - "部分宿主差异无法 polyfill，如 ChatGPT 内购支付流，跨端变现存在缺口；且整体依赖 MCP 协议本身的稳定性"
alternatives:
  - { name: "Google Agents CLI", slug: "agents-cli", reason: "同样面向 Agent 工程化，但偏评测驱动的全链路 CLI，适合想把 Agent 接进 GCP 的团队" }
  - { name: "Replit", slug: "replit", reason: "想把 AI 应用直接部署成可分享的 Web 全栈项目时，Replit 的托管与协作更顺手" }
  - { name: "Cursor", slug: "cursor", reason: "实际用 Skybridge 写 MCP App 时，Cursor 这类 AI 编码 IDE 是最高效的开发前端" }
  - { name: "OpenClaw", slug: "openclaw", reason: "想做本地优先的个人智能体运行时而非上架应用商店，OpenClaw 是另一条开源路线" }
---

## 一句话总结

Skybridge 是面向 React / TypeScript 开发者的开源 MCP App 框架，把「一次编写、跨 Claude / ChatGPT / VS Code 运行」变成现实，适合想抢占 AI 助手新分发渠道的团队；不适合非 JS 技术栈、或只需裸 tool 的极简场景。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Alpic（alpic.ai）</td></tr>
    <tr><td>首次开源</td><td>2025 年 10 月（GitHub 仓库创建于 2025-10-07）</td></tr>
    <tr><td>许可证</td><td>MIT（免费、可商用、可自托管）</td></tr>
    <tr><td>代码仓库</td><td>github.com/alpic-ai/skybridge</td></tr>
    <tr><td>GitHub Star</td><td>约 1,990（reporank 1,995 / awesomeskills 1,926 / dev.co 1.9k）</td></tr>
    <tr><td>Fork</td><td>约 120–132</td></tr>
    <tr><td>最新版本</td><td>v1.2.5（2026-07-07）；v2.0.0 大版本于 2026-09 发布（采用新 MCP 协议 + 引入 Evals 测试）</td></tr>
    <tr><td>npm 月下载</td><td>10 万+（Alpic 官方口径）；aat.ee 称累计 50 万+</td></tr>
    <tr><td>市场占比</td><td>约 10% 的 Claude / ChatGPT 应用商店 App 基于它（Alpic 官方）</td></tr>
    <tr><td>Product Hunt</td><td>2026-06-22 上线，当日榜第 2（518 票，仅次于 AgentX 的 532）</td></tr>
    <tr><td>主要语言</td><td>TypeScript（仓库中占比约 96%）</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 跨客户端兼容与交互式视图渲染（评分 4.5 / 5）**
MCP App 的本质，是在 ChatGPT、Claude 这类助手对话里直接渲染可交互的 React 组件（航班卡片、购物车、仪表盘），而不是吐一大段文字。Skybridge 把 MCP 服务器逻辑与 React 视图打包进同一个运行时，并自动 polyfill 各宿主的差异——比如 Claude 原生缺少 ChatGPT 提供的 viewState 原语，Skybridge 会用 localStorage 兜底。实测新建项目后，devtools 面板会自动出现本地沙箱，点一下 tunnel 按钮就能把本机应用接到真实助手会话里看效果。这是它最核心、也最难被替代的能力。

**2. 端到端类型安全（评分 4.5 / 5）**
Skybridge 的招牌是 tRPC 风格的推断：从 `server.registerTool` 的 Zod inputSchema，一路推导到 React 视图里 `useToolInfo` 的取值类型。好处是 server 端 schema 一旦改动，前端引用处编译期就报错，而不是等运行期 UI 静默崩。v2 还把校验器抽象成 Standard Schema，除了 Zod 也可用 Valibot、ArkType，且把 Zod 降为 peer dependency（要求 4.2+）。对用 Agent 写代码的人来说，类型护栏能显著减少「小改动引发大翻车」的隐患。

**3. 本地开发环境：HMR + 模拟器 + 隧道 + Beacon（评分 4.3 / 5）**
过去写一个 MCP App，循环是：改代码 → 重启本地服务 → 重连 Claude/ChatGPT → 测 UI，每次微调都极慢。Skybridge 的 devtools 把这套压到秒级：Vite 热更新、本地模拟器、一键公共 HTTPS 隧道（Alpic Tunnel，取代 ngrok/cloudflared），外加 Beacon 合规扫描——自动对照 Claude Connector Directory 和 ChatGPT App Store 的规范，抓 CSP 配置错误、缺失 tool 描述、宿主特定坑，提交商店前先过一遍。这套工具链是它相对裸 SDK 最大的体验增值。

**4. Agent 友好与 v2 Evals（评分 4.2 / 5）**
Skybridge 自带 CLI、编程式 devtool API，以及给编码 Agent 用的 Skill（`npx skills add alpic-ai/skybridge`），让 Claude Code / Codex 能端到端脚手架、迁移、加视图。v2 进一步推出 `@skybridge/tests` 与 Evals：进程内 fetch 直连 app、无需 HTTP 端口与 fixture，提供 `toNeverHaveCalledTool` / `toHaveFailedToolCall` / `toHaveSaid` 等类型化 matcher，authInfo 还能模拟登录态断言权限门。这对「Agent 自己测试 Agent 产物」是刚需，但 v2 作为大版本有破坏性变更，迁移需 `tsc --noEmit` + `skybridge build` + `skybridge start` 三步验证。

## 价格方案

<table>
  <thead>
    <tr><th>版本</th><th>价格</th><th>额度 / 能力</th><th>适合谁</th></tr>
  </thead>
  <tbody>
    <tr><td>Skybridge 框架本体</td><td>免费（MIT 开源）</td><td>全功能、可任意 Node 平台自托管；Beacon 可审计任意公开 MCP 服务</td><td>所有开发者</td></tr>
    <tr><td>Alpic Cloud Free</td><td>$0 / 月</td><td>1 万请求 / 月、1 用户、1 项目、7 天分析留存</td><td>个人试用、小流量</td></tr>
    <tr><td>Alpic Cloud Pro</td><td>约 $30–50 / 月（两处官方口径不一：alpic.ai/pricing 标 $30，docs.alpic.ai/plans 标 $50）</td><td>20 万请求 / 月、3 用户、30 天分析、自定义域名、OAuth DCR 代理</td><td>小团队快速上线</td></tr>
    <tr><td>Alpic Cloud Business</td><td>$300 / 月</td><td>200 万请求 / 月、1 年分析、SLA + Slack Connect、托管提交</td><td>企业</td></tr>
    <tr><td>Alpic Cloud Enterprise</td><td>定制</td><td>无限分析、专属支持、BYO Cloud、OIDC/SAML/SCIM、静态 IP、IP 过滤</td><td>大规模 / 合规场景</td></tr>
  </tbody>
</table>

需要诚实标注：框架本身完全免费、没有付费墙，Alpic Cloud 只是「可选托管 + 分发」路径，且 Pro 档价格在 Alpic 的两个官方页面之间存在 $30 与 $50 的差异，建议在签约前以账单页为准。额外请求按 $150 / 百万计费（Pro 档）。

## 与竞品对比

<table>
  <thead>
    <tr><th>对比维度</th><th>Skybridge</th><th>FastMCP（Python）</th><th>原生 MCP TypeScript SDK</th></tr>
  </thead>
  <tbody>
    <tr><td>语言栈</td><td>TypeScript + React</td><td>Python + Prefab UI</td><td>TypeScript（裸 SDK）</td></tr>
    <tr><td>UI 渲染方式</td><td>React 组件 + 类型安全钩子</td><td>Prefab 组件树（JSON 序列化，无前端构建）</td><td>需自行实现（裸 HTML 字符串）</td></tr>
    <tr><td>类型安全</td><td>端到端 tRPC 风格推断</td><td>中（Pydantic schema）</td><td>弱（手写）</td></tr>
    <tr><td>跨客户端抽象</td><td>自动 polyfill 多宿主差异</td><td>主要覆盖 MCP，UI 受 Prefab 调色板约束</td><td>无，需逐宿主适配</td></tr>
    <tr><td>开发体验</td><td>HMR + 模拟器 + 隧道 + Beacon</td><td>偏服务端，UI 调试弱</td><td>全手动</td></tr>
    <tr><td>部署</td><td>Alpic 云 / 任意 Node 平台自托管</td><td>任意 Python 平台</td><td>任意平台</td></tr>
    <tr><td>最佳场景</td><td>交互式、多客户端 MCP App</td><td>Python 团队快速出 UI</td><td>单一 tool、极致可控</td></tr>
  </tbody>
</table>

横向看，Skybridge 的差异化是「React 一等公民 + 类型安全 + 跨端 polyfill + 完整 devtools」，适合要把交互界面铺到多个助手的团队；FastMCP 对 Python 阵营更友好但 UI 表达受限；原生 SDK 则胜在零抽象、完全可控，但每个宿主的坑都得自己踩。另外 manufacture.com 的实测还把 xmcp（文件路由 + Rspack）、tmcp（schema 无关）、mcp-use 等列为同类，Skybridge 的取舍是「重前端栈换取开发体验」，若团队本就活在 React/Vite 生态里，迁移成本最低。

## 优势与短板

**优势展开**：第一，它踩中了一个真实且正在放大的痛点——AI 助手正在变成新的 App 分发渠道（Anastasia Kundush 在 PH 发布视频里直言「像移动时代的 App Store」），而各宿主的 UI 协议各有怪癖，Skybridge 把基础设施层吃掉。第二，被 OpenAI 官方文档与开发者博客推荐，加上 10 万+ 月下载、约 10% 商店 App 市占，已经被验证不是玩具。第三，MIT 开源 + 可自托管，没有「用框架就被云绑定」的陷阱，Alpic Cloud 只是选项之一。

**短板展开**：第一，强绑定 TS/React，对 Python/Go 团队是摩擦源，纯后端无 UI 的简单 tool 用原生 SDK 反而更轻。第二，项目 2025-10 才创建，API 仍在动，v2 的破坏性变更要求开发者跟随迁移（官方把迁移写成 Skill 而非清单，编译器能抓大部分，但仍有少数需人工）。第三，并非所有宿主差异都能 polyfill——例如 ChatGPT 的内购支付流在其它宿主只能优雅降级，跨端变现存在缺口；且它整体建立在 MCP 协议本身稳定之上，协议演进会带来连锁影响。第四，第三方独立用户评测样本仍偏少（exploreai 等聚合页显示 0 条用户评分），长期生产稳定性有待更多公开案例背书。

## 最终推荐

**值得用的人群**：
- React / TypeScript 团队，想把内部工具或产品能力做成「在 Claude、ChatGPT 里直接可用的交互卡片」，且不希望为每个助手维护一套代码；
- 正在做 AI 助手生态分发的创业者，需要快速把 MCP 服务上架、并借 Beacon 过审；
- 用 Claude Code / Codex 写代码的团队，Agent 友好的 Skill 与 v2 Evals 能直接融入现有工作流。

**建议观望或替代的人群**：
- 非 JS 技术栈（尤其 Python）团队：优先看 FastMCP，或裸 SDK + Prefab；
- 只需要一两个无 UI 的后端 tool：原生 MCP SDK 更轻，没必要引入 Vite/React 运行时；
- 对「零风险、多年稳定 API」有硬要求的企业：Skybridge 仍年轻，建议先在小流量场景验证再放大。

**上手路径**：框架免费，直接 `npm create skybridge@latest my-app` 起项目，或给编码 Agent 装 `npx skills add alpic-ai/skybridge`；想省运维再按需开 Alpic Cloud（Free 档足够个人试用）。若担心 v2 迁移成本，新项目直接 `npm create skybridge@latest` 已默认脚手架 v2。

---

**评测声明**：本文基于作者公开信息调研与交叉验证撰写，数据来自 Alpic 官方博客 / 定价页、GitHub 仓库（alpic-ai/skybridge）、Product Hunt 榜单（2026-06-23 每日热榜）、reporank / awesomeskills / dev.co / exploreai / completeaitraining / aitoolnet / manufacture.com 等独立来源。价格与版本口径存在官方页面差异处已在文中透明标注。本文不含付费推广。
