---
id: cua-spaces
title: "Cua Spaces 深度评测：给 AI Agent 一块你能随时接管的隔离桌面，免登录墙与权限弹窗"
date: "2026-10-09"
category: "AI工作台"
rating: 4.3
price: "本地/自有机器免费（source-available，FSL-1.1-MIT）；Pro/Teams 团队版即将推出，自有云按云厂商计费"
subtitle: "从 Cua 官方文档、GitHub 仓库与多家科技媒体实测出发，拆解这款 2026-10-02 发布的 Agent 桌面基础设施的真实能力与边界"
url: "https://spaces.cua.ai"
pros:
  - "Teleport 免登录搬运：把已登录 App 会话（标签/资料/登录态）经你审批加 Touch ID 搬进 Space，SHA-256 校验加端到端密封，Agent 跳过重复登录直接干活"
  - "人 Agent 双光标实时监督：RCDP 协议（基于 QUIC）让你与每个 Agent 在同一桌面各有独立光标，随时介入选座填表再交还，可审计可接管"
  - "Agent-ready 起步：每个 Space 预授权加预装工具，Agent 不再卡在权限弹窗；经 Cua MCP 接 Claude Code/Codex/Cursor/Gemini CLI/Cline/Kiro/OpenClaw"
  - "开源底座加本地密钥库：Cua Driver（MIT，28.3K 星）驱动真实 App 点击键入与无障碍树；Teleport 会话锁在本地 Keyvault，连 Cua 中转都看不到内容"
cons:
  - "仅 macOS 首发：要求 Apple Silicon 加 macOS 26 起，Linux 走容器、云可用；Windows 用户（含赵生主环境）暂时装不上"
  - "仍处 early access：Pro/Teams 团队版未出、无公开价格，团队机器/会话交接/Keyvault 同步/管理员控制均为路线图承诺"
  - "FSL-1.1-MIT 非纯 MIT：发布两年内禁做竞品、两年后才转 MIT，企业二次开发需注意许可边界"
  - "Teleport 进来的会话本质是活的登录态，共享或委托 Space 时需严守只 teleport 自己拥有的机器，否则等于交出账户 foothold"
alternatives:
  - { name: "Rabbit OS3", slug: "rabbit-os3", reason: "同样免费编排层，但走云端跨设备（最多 5 台、BYOK），想要 Windows/Linux/r1 多端而非只 Mac 桌面时更合适" }
  - { name: "OpenAI Dots", slug: "openai-dots", reason: "想要常驻云电脑加主动值守研究，且可接受 Pro/Business Premium 订阅（首个 Dot 随套餐免费）的用户" }
  - { name: "ToDesk AI", slug: "todesk-ai", reason: "Windows 主环境或中文生态（微信/企微/飞书远程指挥电脑）用户，Cua 暂不支持 Windows 时的现实替代" }
  - { name: "Nami", slug: "nami", reason: "想要免费开源的 Agent 工作台、并排调度已有 Claude Code/Codex 等，而非给 Agent 一块独立桌面时" }
---

## 一句话总结

如果你用的是 Mac、且受够了 computer-use Agent 卡在权限弹窗和登录墙，Cua Spaces 是 2026 年把「Agent 待的那块桌面」做得最干净、最可监督的开源方案；但 Windows 用户和等团队功能的公司，现在还只能远观。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th><th>出处</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Cua（旧金山初创；创始人 Francesco Bonacci，前微软研究员；研究负责人 Dillon DuPont；2025-03 创立，YC X25 batch）</td><td>RuntimeWire / GenZ NewZ 报道</td></tr>
    <tr><td>产品形态</td><td>macOS 原生 App（Apple Silicon 加 macOS 26 起）；Linux 走 Docker/Podman 容器；自有云可用</td><td>Cua 文档 / Complete AI Training</td></tr>
    <tr><td>开源协议</td><td>Source-available FSL-1.1-MIT（发布两年后转 MIT）；Cua Driver 保持 MIT</td><td>仓库许可说明 / GenZ NewZ</td></tr>
    <tr><td>首发时间</td><td>2026-10-02 官方 X 发布，当日科技媒体集中报道</td><td>@trycua / RuntimeWire</td></tr>
    <tr><td>底层仓库</td><td>GitHub trycua/cua（Cua Driver 约 28.3K 星），被 Hermes/Clicky/H Company/Factory Droid 采用</td><td>GitHub / tools.ts 收录</td></tr>
    <tr><td>价格</td><td>本地与自有机器免费；托管中转 early access 免费；自有云按云厂商计费；Pro/Teams 未出价</td><td>Cua 发布说明 / Complete AI Training</td></tr>
    <tr><td>Agent 接入</td><td>Claude Code / Codex / Cursor / Gemini CLI / Cline / Kiro / OpenClaw，经 Cua MCP Server</td><td>Cua 文档 / Complete AI Training</td></tr>
    <tr><td>官网</td><td>https://spaces.cua.ai（产品站）；https://cua.ai（公司站）</td><td>官方</td></tr>
  </tbody>
</table>

## 核心功能评测

### 1. Teleport 会话搬运 — 4.5/5
Computer-use Agent 最痛的墙之一是「登录墙」：让 Agent 自己从头登录一个 App，要么卡在验证码，要么要你贴密码。Cua 的解法是 Teleport——把应用的整段会话（打开的标签、资料、登录态）打包成 session bundle，经你在同意屏逐项审批、macOS 弹 Touch ID 或密码后搬进 Space。搬进来前 Space 会校验 bundle 的 SHA-256 哈希，且每个 bundle 用该 Space 自己的密钥端到端密封，连 Cua 的中转服务器都读不到内容。实测思路上，这比让 Agent 反复 OAuth 干净太多，也避免了把明文密码交给 Agent。扣 0.5 分是因为：转移进来的会话本质是一个「活的登录态」，一旦 Space 被共享或委托给他人，就等于交出账户 foothold——Cua 文档也明确警告「只 teleport 自己拥有的机器」。

### 2. 人 Agent 双光标实时监督 — 4.6/5
这是 Cua 最像「同屏协作」而非「后台黑盒」的设计。它用自研的 RCDP（Remote Desktop Protocol，基于 QUIC）把每个 Space 串流给你，你和每一个连进来的 Agent 在同一桌面上各有独立光标。Agent 在填一个订票网站的座位时，你随时可以用自己的光标插进去选座，再把手交还给它。这种「Supervisor 在房间里」的姿态，比多数桌面 Agent 只给结果、或只给浮窗截图（如 Highlight AI）更贴近真实监督。扣分项微小：早期版本串流延迟与多 Agent 同屏的调度细节，公开实测样本还不多，稳定性需更多真实负载验证。

### 3. 跨电脑统一桌面面板 — 4.2/5
一个 Space 可以跑在三处：本机用 Lume 起的 macOS 虚拟机、你自有的一台 Mac mini 或 Linux 盒、或你自己的云账号。所有连上的机器出现在同一个列表里，实时低延迟串流（同网络或能直连时走 QUIC）。这对「我的主力笔记本合盖了，但 Agent 在我那台常开的 Mac mini 上继续干活」的场景很实用。扣 0.8 分主要因为：macOS 首发、且要求 Apple Silicon 加 macOS 26，等于把 Windows 用户（赵生的主环境）和较老 Mac 直接挡在门外；Linux 仅容器、云需自备账号，对个人小白仍有门槛。

### 4. Agent-ready 预授权加 MCP 集成 — 4.3/5
每个 Space 起步时权限已预先授予、工具已预装，Agent 不再在任务中途被系统权限弹窗打断——这正是企业 Agent 落地最烦的「卡弹窗」问题的正面解法。接入侧，Cua 提供 MCP Server，Claude Code / Codex / Cursor / Gemini CLI / Cline / Kiro / OpenClaw 都能连，安装器还能自动把配置写进各自客户端。扣分项：它不做 Agent 本身，只是「Agent 待的桌面」，你得先有自己的模型运行时（Claude Code 等）才会变好用；纯小白如果连 Claude Code 都没装，Cua 单独价值有限。

### 5. 本地 Keyvault 与隐私姿态 — 4.4/5
Teleport 进来的会话默认锁在本地 Keyvault，按项审批、端到端密封。Cua 的遥测默认开、但官方明确「永不收集屏幕内容、文件名、URL、Cookie、登录态、Teleport bundle 内容与提示词」，可用 `cua telemetry off` 或 `DO_NOT_TRACK=1` 关闭。整体隐私姿态在 computer-use 赛道里偏克制。扣 0.6 分是因为：会话记忆与编排仍过 Cua 的中转（尽管读不到密封内容），对要求 100% 端到端的用户，不如纯本机方案（如 LUCI Desktop）彻底。

## 价格方案

Cua Spaces 的定价结构很特别：它卖的是「桌面基础设施」，不收编排月费。下表现有公开事实：

<table>
  <thead>
    <tr><th>方案</th><th>价格</th><th>包含 / 说明</th><th>适合人群</th></tr>
  </thead>
  <tbody>
    <tr><td>Spaces on your Mac / 自有机器</td><td>免费</td><td>本地 Mac 或你拥有的 Mac mini / Linux 盒，无账号也可本地使用</td><td>个人开发者、Mac 用户</td></tr>
    <tr><td>托管中转（Relay）</td><td>early access 免费</td><td>免端口转发让设备互达；正式计价未公布</td><td>需要跨网访问的用户</td></tr>
    <tr><td>自有云 Space</td><td>按云厂商计费</td><td>在你自己的云账号里跑，Cua 不抽成</td><td>已有云资源的团队</td></tr>
    <tr><td>Pro / Teams（即将推出）</td><td>未公布</td><td>共享团队机器、会话交接、Keyvault 同步、管理员控制</td><td>企业 / 团队（待发布）</td></tr>
  </tbody>
</table>

> 数据来源：Cua 2026-10-02 发布说明、RuntimeWire 与 Complete AI Training 的计费段落均确认「本地/自有机器免费、Pro/Teams 为路线图、无公开席位价」。预算团队版落地前，建议把它当个人/早期试点工具，别把关键流程押在尚未定价的团队功能上。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Cua Spaces</th><th>Rabbit OS3</th><th>OpenAI Dots</th></tr>
  </thead>
  <tbody>
    <tr><td>定位</td><td>Agent 待的隔离桌面（基础设施层）</td><td>云端跨设备智能体 OS（编排层）</td><td>常驻云电脑（独立 Agent）</td></tr>
    <tr><td>平台首发</td><td>macOS（Apple Silicon 加 macOS 26）</td><td>Win / Mac / Linux / r1</td><td>云端，跨 ChatGPT/Slack/Teams</td></tr>
    <tr><td>价格</td><td>本地/自有机器免费；团队版未出</td><td>编排层免费、BYOK 按 token 计费</td><td>首个 Dot 随 Pro/Business Premium 免费含</td></tr>
    <tr><td>权限/登录解法</td><td>Teleport 搬登录态加双光标监督</td><td>DLAM 直接操控加本地 agent 执行</td><td>Custom Rules 加 auto-review 审批</td></tr>
    <tr><td>是否开源</td><td>是（FSL-1.1-MIT，两年转 MIT）</td><td>否（云编排闭源）</td><td>否</td></tr>
    <tr><td>监督方式</td><td>同屏双光标实时接管</td><td>单一连续对话线程</td><td>主动研究只读加 Take over</td></tr>
  </tbody>
</table>

数据来源：Cua 官方文档与发布报道、Rabbit OS3 产品页与 PR Newswire 通稿（2026-09-22）、OpenAI 官方博客 introducing-dots。

**结论**：三者不重叠——Cua 是「Agent 的桌面」，Rabbit 是「跨设备的编排」，Dots 是「云上的员工」。要可监督的隔离桌面选 Cua；要 Windows/Linux 多端统一调度选 Rabbit OS3；要常驻云电脑加主动值守选 OpenAI Dots。

## 优势与短板

**优势**
- **真解决了两道墙**：权限弹窗与登录墙是 computer-use 落地最现实的阻塞，Teleport 加预授权从根上绕开，比让 Agent 自己 OAuth 稳得多。
- **监督而非黑盒**：双光标 RCDP 让你随时接管，安全敏感场景（选座、填支付信息）人机协作顺滑，可审计。
- **开源可查、本地优先**：FSL-1.1-MIT 源码可读、底座 Cua Driver 是纯 MIT，Keyvault 端到端密封，隐私姿态在赛道里偏克制。
- **零许可计费**：本地与自有机器免费、不收编排月费，重度 Agent 工作负载成本由你自己的云或模型方决定，不会被厂商限流。

**短板**
- **macOS 首发把 Windows 挡在门外**：要求 Apple Silicon 加 macOS 26，赵生这类 Windows 主环境用户目前只能看；Linux 仅容器、云需自备账号。
- **团队功能全是路线图**：Pro/Teams 的共享机器、会话交接、Keyvault 同步、管理员控制均未出价未出功能，企业落地要等。
- **FSL 许可有约束**：发布两年内禁止做竞品、两年后才转纯 MIT，二次开发分发的法务边界需留意。
- **Teleport 的信任边界要靠人守**：搬进来的会话是活的登录态，共享或委托 Space 时一旦 lax，等于把账户 foothold 交出去。

## 最终推荐

**强烈推荐给：**
- Mac（Apple Silicon 加 macOS 26）用户、尤其是已经用 Claude Code/Codex/Cursor 等、想让 Agent 在真实 GUI App 里干活又怕卡弹窗的人——Cua 是目前把「桌面基础设施」做得最干净的开源选择。
- 需要可监督自动化的个人或小团队试点：客服、HR 入职、内部工具自动化，先在本机或自有机器上免费跑通，再等团队版。

**谨慎或暂不建议：**
- Windows 主环境用户（赵生即此类）——现在装不上，现实替代是 ToDesk AI（微信/企微/飞书远程指挥）或 Nami（开源 Agent 工作台）。
- 等团队/管理员功能的公司——Pro/Teams 还是路线图、无价格，别把关键流程押在未定价功能上。
- 要求 100% 端到端本地、连中转都不想过的用户——LUCI Desktop 这类纯本机记忆层更彻底。

**上手建议**：第一步在你那台 Apple Silicon Mac 上从 spaces.cua.ai 下载签名版，本地起一个 Lume 虚拟机 Space；第二步用 `cua-driver mcp-config --client claude`（或 cursor/codex）把已有 Agent 接进来；第三步只在自己拥有的机器上 Teleport 已登录会话，且把 Keyvault 设为按项审批。做到这三点，Cua Spaces 会是 2026 年 computer-use 赛道里最被低估的「Agent 桌面」。

---

**评测声明**：本文基于公开信息撰写。核心事实来自 Cua 官方文档（spaces.cua.ai、cua.ai）、GitHub 仓库 trycua/cua、Cua 2026-10-02 发布说明，以及 RuntimeWire、GenZ NewZ、Complete AI Training、ExplainX、HeadsUpAI 等第三方报道与实测聚合。所有价格、版本、平台要求与功能描述均标注出处，可供回溯核验。本文不含任何付费推广。
