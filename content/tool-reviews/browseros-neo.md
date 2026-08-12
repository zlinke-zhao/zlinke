---
id: browseros-neo
title: "BrowserOS neo 深度评测：给 Agent 当「手」的本地浏览器，到底值不值得装"
date: "2026-08-12"
category: "AI工作台"
rating: 4.0
price: "完全免费、开源（AGPL-3.0）；软件本身不收费，模型侧沿用你自带的 API Key 或订阅，费用由所选模型厂商计"
subtitle: "不是又一个 AI 浏览器，而是让你已有的 Claude Code、Codex 真正点得动登录态网页的那双「手」"
url: "https://www.browseros.com/neo"
pros:
  - "刻意不含 Agent：定位是给你已有的 Agent 当浏览器「手」，通过 MCP 被 Claude Code、Codex、Cursor 等一键接管"
  - "一键导入 Chrome 登录态：Agent 以你已登录的 Gmail、GitHub、X 等真实账号办事，绕开公开 API 够不到的登录墙"
  - "驾驶舱实时可见 + 会话可回放：每个 Agent 在哪个站点、走到第几步都看得到，出错能倒带定位"
  - "完全免费、AGPL-3.0 开源、本机运行：数据不出本机，可审计可 fork，对比闭源 AI 浏览器是稀缺品"
cons:
  - "登录态共享是设计而非疏漏：Agent 共用你的真实账号，被提示词注入时理论能碰网银邮箱，per-agent 隔离仍在路线图"
  - "MCP 端点即控制权：任何能访问该本地 URL 的人都能操控浏览器，官方明确警告切勿公网暴露"
  - "太年轻且仅 macOS / Windows：2026-08-07 才上线，neo 版无 Linux，长期稳定性与 Chromium 分支维护风险未经验证"
alternatives:
  - { name: "Fellou", slug: "fellou", reason: "想要一个自己会干活的代理式浏览器而非给自有 Agent 配「手」，Fellou 开箱即用更省心" }
  - { name: "AgentSky", slug: "agentsky", reason: "要的是 Agent 不掉线、跨设备常驻（卖寿命），与 neo 卖本机「手」互补而非竞争" }
  - { name: "Claude Cowork", slug: "claude-cowork", reason: "已用 Claude Cowork 的人，其隔离 VM 没有浏览器出口，配 neo 才能让它真正碰网页" }
  - { name: "Manus", slug: "manus", reason: "想要开箱即用的全能 Agent、不愿自己搭 harness，Manus 自带云端浏览器执行更合适" }
---

## 一句话总结

BrowserOS neo 适合已经用 Claude Code、Codex、Cursor 等 Agent、却总被「这一步得上网点一下」卡住的人；它不适合想要一个开箱即用、自带大脑会思考的 AI 助手的人，也不适合需要 7×24 无人值守或只用 Linux 的人。

## 核心数据一览

<table>
  <thead>
    <tr>
      <th style="background:#4a90d9;color:#fff;">项目</th>
      <th style="background:#4a90d9;color:#fff;">数据</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Felafax, Inc.（旧金山，官方标注 Backed by Y Combinator）</td></tr>
    <tr><td>创始人</td><td>Nikhil Sonti 与 Nithin Sonti（双胞胎兄弟，Product Hunt 发布者）</td></tr>
    <tr><td>首发</td><td>2026-08-07 于 Product Hunt，当选当日 Product of the Day</td></tr>
    <tr><td>开源协议</td><td>AGPL-3.0，源码 github.com/browseros-ai/BrowserOS</td></tr>
    <tr><td>GitHub 热度</td><td>12,000+ stars · 3,472 commits（最近提交 2026-08-08，开发极活跃）</td></tr>
    <tr><td>支持平台</td><td>macOS / Windows；neo 版 Linux 规划中（完整版 BrowserOS 已支持 Linux）</td></tr>
    <tr><td>价格</td><td>完全免费、开源；模型费用由你自带的 API Key 或订阅另行计算</td></tr>
    <tr><td>一句话定位</td><td>刻意不含 Agent 的本地浏览器，通过 MCP 被你已有的 Agent 驱动</td></tr>
  </tbody>
</table>

> 产品原名 BrowserClaw，因 SEO 问题于发布前改为 BrowserOS neo（创始人 Nikhil 在 PH 自述）；GitHub 仓库名、MCP server 名、本地目录 `~/.browserclaw/` 仍是旧名，官方 FAQ 承认「有几处还没改过来」，搜索资料时两个名字都得试。

## 核心功能评测

库内已有二十多款 AI 工作台，绝大多数在回答「谁来干活」；BrowserOS neo 回答的是另一个问题：**你已经有 Agent 了，它凭什么点得动网页？** 云浏览器（如 browser-use）跑在数据中心，登录你的账号很痛苦、且 Twitter、LinkedIn 会按数据中心 IP 直接封；无头浏览器（如 agent-browser）又让你看不见 Agent 在干嘛。neo 的做法是做一个刻意不含 Agent 的浏览器：本机运行、带着你真实的登录态、用 MCP 被你的 Agent 接管。

<table>
  <thead>
    <tr>
      <th style="background:#4a90d9;color:#fff;">功能</th>
      <th style="background:#4a90d9;color:#fff;">评分</th>
      <th style="background:#4a90d9;color:#fff;">真实体验 / 依据</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>一键导入 Chrome 登录态</td><td>4.5 / 5</td><td>pidune.com 72 小时实测：安装到跑通首个任务约 15 分钟、无需 Docker、无需命令行；Chrome 登录态「一次点击成功」，含 Shopify 后台与 Google Workspace 会话</td></tr>
    <tr><td>MCP 一键接管（6 家 harness）</td><td>4.5 / 5</td><td>官方列出 Claude Code、Cursor、Codex、VS Code、Zed、GitHub Copilot 一键连接，其余（如 OpenClaw、Hermes）通过可复制的 MCP URL 接入；装好 Claude Code 后 neo 会自动识别并提示连接</td></tr>
    <tr><td>驾驶舱 + 会话可回放</td><td>4.5 / 5</td><td>新标签页实时显示每个 Agent 在哪个站点、用哪个工具、走到第几步；每次会话存成可拖进度条的录像。pidune 评测者靠回放发现 Agent 点错 Shopify 订单页下拉框，避免一批脏数据</td></tr>
    <tr><td>并行 Agent + 标签页隔离</td><td>4.0 / 5</td><td>每个 Agent 在各自标签页组工作，动不了你正在写的文档；多 Agent 并行建议 16GB+ 内存，16GB MacBook Pro 跑 4 个 Agent 有明显卡顿（官方建议单 Agent 8GB 起）</td></tr>
    <tr><td>省 token 的页面快照</td><td>4.0 / 5</td><td>传精简页面快照而非截图，官方称比 Claude 的 Chrome 扩展更省 token；幅度依赖任务，需自测对比，暂无统一基准数字</td></tr>
    <tr><td>安全与权限隔离</td><td>2.5 / 5</td><td>登录态共享是设计重点，per-agent 配置隔离仅在路线图；MCP 端点即控制权，官方警告勿公网暴露。这是评分被压低的主因</td></tr>
  </tbody>
</table>

补充一点信任信号：neo 把网页内容包进显式的「不可信内容边界」，并指示 Agent 把它当数据、不当指令，创始人称在 Claude Code、Codex 等前沿 harness 上未复现提示词注入失败——但 PH 评论区用户 asadmalik901 仍追问「在已登录站点遇到改状态的请求，neo 会不会拦一下」，官方未给出硬拦截承诺，只说靠边界 + 你盯着。

## 价格方案

BrowserOS neo 本身不收费，也不卖额度。你唯一可能花钱的地方，是驱动它的模型。

<table>
  <thead>
    <tr>
      <th style="background:#4a90d9;color:#fff;">费用项</th>
      <th style="background:#4a90d9;color:#fff;">价格</th>
      <th style="background:#4a90d9;color:#fff;">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>BrowserOS neo 软件</td><td>免费（AGPL-3.0）</td><td>本机运行，无订阅、无额度、无隐藏计费</td></tr>
    <tr><td>你自带的模型</td><td>按所选厂商计费</td><td>支持 Claude、OpenAI、Gemini、Azure OpenAI、AWS Bedrock、OpenRouter，或本地 Ollama、LM Studio；本地模型官方说更适合聊天，复杂 Agent 任务仍需云端强模型</td></tr>
    <tr><td>默认内置模型</td><td>有限免费额度</td><td>官方提供默认模型含使用上限，完整体验建议自带 API Key</td></tr>
    <tr><td>完整版 BrowserOS（人用版）</td><td>免费、开源</td><td>含内置 Agent、53 项浏览器工具、40+ MCP 集成，是 neo 的「兄弟产品」，可并存</td></tr>
  </tbody>
</table>

这一定价在 Agent 浏览器里很克制：对比闭源的 ChatGPT Atlas、Perplexity Comet、Dia 把浏览器能力绑进订阅，neo 把「浏览器」免费 open 出来，只赚你本来就要付的模型费。toolworthy.ai 与 chatgate.ai 均将其标为 100% Free。

## 与竞品对比

<table>
  <thead>
    <tr>
      <th style="background:#4a90d9;color:#fff;">维度</th>
      <th style="background:#4a90d9;color:#fff;">BrowserOS neo</th>
      <th style="background:#4a90d9;color:#fff;">Fellou</th>
      <th style="background:#4a90d9;color:#fff;">AgentSky</th>
      <th style="background:#4a90d9;color:#fff;">Browserbase</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>核心角色</td><td>给已有 Agent 当浏览器「手」</td><td>自带 Agent 的代理浏览器</td><td>云端托管 Agent 运行时</td><td>开发者云端浏览器 API</td></tr>
    <tr><td>是否含 Agent</td><td>否（刻意）</td><td>是</td><td>是</td><td>否（纯浏览器）</td></tr>
    <tr><td>运行位置</td><td>本机</td><td>本机 / 云端</td><td>云端</td><td>云端数据中心</td></tr>
    <tr><td>登录态</td><td>复用你的真实 Chrome 登录</td><td>自有账号体系</td><td>无你的登录态</td><td>无你的真实登录态</td></tr>
    <tr><td>可观测性</td><td>驾驶舱 + 可回放</td><td>有</td><td>云端 SSE 流</td><td>无界面 / 黑盒</td></tr>
    <tr><td>价格</td><td>免费开源</td><td>订阅制</td><td>算力 + 模型计费</td><td>API 按量</td></tr>
  </tbody>
</table>

一句话区分：库内二十多款在卷「谁来干活」，AgentSky 卷「活能干多久」，BrowserOS neo 卷「活干得到不」——它和 AgentSky、Claude Cowork 是互补关系，而非抢同一块蛋糕。

## 优势与短板

**优势**

- **定位稀缺且精准**：它是目前少有的「不内卷 Agent 大脑、只补浏览器手脚」的开源工具。如果你已经被「Claude Code 推理很强但碰网页就撞墙」折磨过，neo 是恰好补洞的那块。
- **真登录态 + 真可见**：复用你的 Chrome 登录，Agent 能进仪表盘、后台、内部系统干真活；驾驶舱和回放又解决了无头浏览器「黑盒」的老毛病。pidune 的回放抓错案例很说明问题。
- **免费、开源、本机**：AGPL-3.0、Chromium 分支、代码全公开，数据不出本机。在闭源 AI 浏览器当道的当下，可审计、可 fork、可自托管的属性对开发者与隐私党很香。
- **MCP 生态顺滑**：6 家主流 harness 一键连接，其余给 URL 即可，和库内 OpenClaw、Hermes 等都能接。

**短板**

- **登录态共享是把双刃剑**：官方 FAQ 原话「Agent 共用你的登录态，这正是重点」。意味着一个被注入的 Agent 理论上能碰你的网银、邮箱；per-agent 隔离仍在路线图，今天没有。这是它不能替你做高风险操作的根本原因。
- **MCP 端点即控制权**：chatgate.ai 引用官方文档提醒，任何能访问该 MCP URL 的人都能操控这个浏览器，切勿在公网暴露远程访问。
- **太年轻、平台受限**：2026-08-07 才上线，长期稳定性未经检验；neo 仅 macOS / Windows，Linux 用户暂时用不了（讽刺的是完整版 BrowserOS 反而支持 Linux）。
- **AGPL-3.0 的商用顾虑**：toolworthy.ai 明确点出，商业再分发或嵌入前需要法务过一遍许可。
- **Chromium 分支的维护风险**：若维护跟不上上游，安全补丁与兼容性会滞后（toolworthy 提出）。
- **效果强依赖你选的模型**：neo 只是手，脑子是你自带的；本地小模型跑 Agent 模式官方自己说不够用。

## 最终推荐

**值得装的人**：已经在用 Claude Code / Codex / Cursor / Claude Cowork，且经常被「这一步得上网点一下」卡住的人；需要在登录后台里做重复性取数、改状态、填表的运营与电商从业者；在意数据不出本机、且愿意盯着 Agent 干活的人。pidune 给分 4.2/5，结论正面。

**先别装的人**：想要一个开箱即用、自己会思考的 AI 助手的人（neo 没有大脑，你得自带）；需要 7×24 无人值守全自动的场景（pidune 明确不推荐）；Linux 用户；对 AGPL 有商用顾虑的团队。

**上手建议**：从低风险任务开始——让 Agent 帮你清收件箱、拉一份已登录后台的报表、在 X/LinkedIn 发草稿。盯着驾驶舱，把购买、发消息、改账号、不可逆提交留给你自己审批。确认你的 harness 支持 MCP，再考虑是否把它接进生产流程。

> 评测口径说明：本文基于官网、GitHub 仓库、Product Hunt 发布贴与 toolworthy.ai / pidune.com / chatgate.ai 三家独立评测撰写，关键数据均标注来源。站长未亲自安装实测，凡涉及「实测」的结论均转引具名第三方；Product Hunt 热度各聚合页读数分歧较大（hunted.space 2026-08-12 实时为 127 赞 / 6 评论 / 当日第 6，CSDN 2026-08-08 热榜记 195 票 / 第 5），文中以「Product of the Day、当日榜单前列」表述，不取单一可能失准数字。

---

**评测声明**：本文基于公开信息与独立评测撰写，所有数据来自官方文档和第三方评测，已在文中标注来源。本文不含付费推广。
