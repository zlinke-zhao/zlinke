---
id: grok-bot
title: "Grok Bot 深度评测：给 AI 同事配一台永不关机的云电脑"
date: "2026-08-26"
category: "AI工作台"
rating: 3.7
price: "捆绑订阅制，无独立档位：SuperGrok Heavy $300/月、Cursor Ultra $200/月、Cursor Teams Premium $120/席/月；企业版等待名单"
subtitle: "xAI 与 Cursor 联手，把 Agent 会不会干活卷成了 Agent 有没有工位"
url: "https://x.ai/bot"
pros:
  - "常驻云电脑架构真正永不关机：Bot 跑在 xAI 云端 VM，合上笔记本后台照常 24/7 推进，手机端可随时接管"
  - "免 API 直达长尾系统：用浏览器界面登录操作，覆盖没有 API/MCP 的内部后台与老旧 SaaS，官方演示跑通 Zendesk 工单、Gmail 发票、CRM 写入"
  - "演示即流程：看 Bot 做一遍就存成可复用 routine，配合跨会话记忆，越用越懂你的工作方式"
  - "多 Bot 群聊协作：Chief of Staff 统筹加专职 Bot 各占一块屏幕并行，同一台持久电脑共享登录态与上下文"
cons:
  - "价格门槛高且无独立档位：最低也要 Cursor Ultra $200/月或 SuperGrok Heavy $300/月，个人轻度用户不友好"
  - "安全与可控性仍是 Beta 级：OWASP 将 Agent 目标劫持列为头号风险，持久登录态被所有 Bot 共享复用，目前无审计日志、无单步回滚"
  - "闭源且模型锁定：跑在 Grok 栈上、不让你选底层模型，深度绑定 xAI/Cursor 生态，迁移成本高"
  - "关键安全控制尚未交付：无彩排演练、无单动作作用域、无操作记录，xAI 自承审计视图即将推出，涉及对外发送的场景暂不宜托付"
alternatives:
  - { name: "Claude Cowork", slug: "claude-cowork", reason: "同款 AI 同事定位且更早 GA（2026-01），已开放全部付费档（$20/月起），适合想要常驻 Agent 但不想付 200 美元以上月费的人" }
  - { name: "Manus", slug: "manus", reason: "同样给 Agent 一台云端 VM，但自带免费档加按积分计费（$20/$40/$200），非技术用户上手更轻松" }
  - { name: "OpenWorker", slug: "openworker", reason: "想要完全掌控数据、零成本：MIT 开源、本机运行、模型无关，代价是自己配环境与维护" }
  - { name: "Perplexity Computer", slug: "perplexity-computer", reason: "工作偏研究检索而非操作内部系统，看重引用可溯源时更合适" }
---

## 一句话总结

Grok Bot 适合已经身处 xAI/Cursor 生态、被一堆「没有 API 的老系统」卡住、且愿意为常驻云同事付 200 美元以上月费的团队；不适合预算敏感的个人、对凭证安全零容忍的企业，以及想自己挑模型的工程师。

## 核心数据一览

<table>
  <thead>
    <tr>
      <th style="background:#4a90d9;color:#fff;">项目</th>
      <th style="background:#4a90d9;color:#fff;">事实</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>xAI（SpaceXAI，马斯克）与 Cursor 联合出品，下发与登录基建走 Cursor 通道</td></tr>
    <tr><td>首发时间</td><td>2026-08-11 早期 Beta；Product Hunt 08-12 上线</td></tr>
    <tr><td>平台</td><td>桌面端 macOS（Apple 芯片/Intel）、Windows（x64/Arm64）+ iOS 18+；Linux 桌面、Android、iPad 暂未上线</td></tr>
    <tr><td>价格</td><td>SuperGrok Heavy $300/月 · Cursor Ultra $200/月 · Cursor Teams Premium $120/席/月，无独立档位</td></tr>
    <tr><td>热度</td><td>Product Hunt 当日第 2 名、497 赞、16 条评价均分 4.69/5（hunted.space 快照）</td></tr>
    <tr><td>底层模型</td><td>Grok 栈，系统按任务自动选型，用户不可手动切换</td></tr>
    <tr><td>运行位置</td><td>xAI 云端持久 VM，账号内所有 Bot 共享同一台已登录的电脑</td></tr>
    <tr><td>市场背景</td><td>2026-05 企业采用率 Anthropic 34.4% 领先 OpenAI 32.3%，SpaceXAI 份额仍微乎其微（网易援引行业数据）</td></tr>
  </tbody>
</table>

## 核心功能评测

### 1. 常驻云电脑：真正永不关机的同事（4.5/5）

Grok Bot 的核心不是更聪明的回复，而是一台独立的云电脑。每个Bot运行在 xAI 云端的虚拟机里，带真实浏览器、文件系统和终端；你合上笔记本，它照常推进，手机端能随时接管这台虚拟机看进度。xAI 的官方文档明确：账号内所有 Bot 共享同一台用户级隔离的持久云电脑，这正是它和「任务级起停」类 Agent 的本质区别。设计直觉很对——一个离职当天的员工都比一个每次都从零初始化的脚本更有用。

### 2. 免 API 直达长尾系统（4.5/5）

这是GroBot 最实用的卖点。它不走接口，走界面：像人一样登录、点击、下载文件，覆盖没有 API 或 MCP 的网站与内部系统。官方演示了登录 Zendesk 处理工单、从 Gmail 归类报销发票、向 CRM 写数据。对大量被困在老旧后台、又接不上自动化的人来说，这等于绕开了「这个系统没有接口」这道墙。代价是每次触达密码框、2FA、验证码或支付页时，Bot 会停下把控制权交还给你，由你手动完成敏感那一步再交回——凭据本身不会被 Bot 存储。

### 3. 演示即流程 + 跨会话记忆（4.0/5）

让 Bot 跟看你做一遍，它把操作序列存成可复用 routine，下次自动重跑并接受纠正；同时 Bot 保留跨会话的上下文、偏好和边界案例。也就是说，一次手把手教学能沉淀成长期自动化，不需要写脚本。xAI 称内部试用拿到 2–3 倍效率提升——但这是厂商口径，目前没有独立基准佐证，需打折看待。

### 4. 多 Bot 群聊协作（4.0/5）

你可以建一个 Chief of Staff 做统筹，再配销售、招聘、报销、复现 Bug 等专职 Bot，它们在同一线程里互相传递上下文、各占一块屏幕并行。这比「单 Agent 自己循环」更接近真实团队分工。不过这也带来一个隐患：既然所有 Bot 共享同一台持久电脑和同一批登录态，任何一个 Bot 的权限边界都取决于你给这台电脑开了多大口子。

### 5. 接管登录的安全边界（3.5/5）

「敏感步骤交还用户」是它目前唯一可信的安全阀：密码和 2FA 由你本人输入，Bot 看不见也不存储。但问题在于这一步之外——登录态在任务完成后仍然保留，且被账号下所有 Bot 复用。OWASP GenAI 安全项目 2026 报告把「代理目标劫持」列为最高优先级风险，实验显示约 70% 的提示注入尝试会导致凭证窃取。xAI 建议最小权限、受限服务账号、敏感操作置于审批之后，但审批只控制「拟议动作」，无法撤销已经完成的操作。

## 价格方案

Grok Bot 不单独售卖，直接捆绑进三条既有订阅线。下面是三档的现行价与差异：

<table>
  <thead>
    <tr>
      <th style="background:#4a90d9;color:#fff;">方案</th>
      <th style="background:#4a90d9;color:#fff;">月价</th>
      <th style="background:#4a90d9;color:#fff;">包含 Grok Bot？</th>
      <th style="background:#4a90d9;color:#fff;">适合谁</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>SuperGrok Heavy</td><td>$300/月</td><td>含</td><td>重度 Grok 用户，要全家桶加 Agent</td></tr>
    <tr><td>Cursor Ultra</td><td>$200/月</td><td>含（全套编码环境）</td><td>开发者，本就在用 Cursor</td></tr>
    <tr><td>Cursor Teams Premium</td><td>$120/席/月</td><td>含（企业级功能）</td><td>小团队按席位铺开</td></tr>
    <tr><td>企业版</td><td>等待名单</td><td>待定</td><td>大客户，需定制与合规</td></tr>
  </tbody>
</table>

几个必须说清的点：其一，没有免费档，最低门槛就是 $200/月；其二，用量额度按周重置、超额按原始模型与 token 成本计费，且 xAI 文档确认目前没有 Grok Bot 的独立支出上限（eesel 实测结论）；其三，部分渠道提到 SuperGrok Heavy 有「订阅送 Cursor Ultra」的促销，属限时活动，以官网结算页为准。横向看，它的起价是 Claude Cowork（$20/月起）的约十五倍，对轻度用户极不友好。

## 与竞品对比

把四款「常驻/云端 Agent」摆在一起看，差异主要在运行位置、模型开放度和价格：

<table>
  <thead>
    <tr>
      <th style="background:#4a90d9;color:#fff;">维度</th>
      <th style="background:#4a90d9;color:#fff;">Grok Bot</th>
      <th style="background:#4a90d9;color:#fff;">Claude Cowork</th>
      <th style="background:#4a90d9;color:#fff;">OpenClaw</th>
      <th style="background:#4a90d9;color:#fff;">Manus</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>厂商</td><td>xAI</td><td>Anthropic</td><td>社区开源</td><td>Meta（拟独立）</td></tr>
    <tr><td>上线</td><td>2026-08 Beta</td><td>2026-01 GA</td><td>2026 开源</td><td>2025</td></tr>
    <tr><td>运行位置</td><td>xAI 云电脑</td><td>Anthropic 云 + 桌面</td><td>自托管</td><td>云端 VM</td></tr>
    <tr><td>模型</td><td>Grok（锁定）</td><td>Claude</td><td>模型无关</td><td>自研</td></tr>
    <tr><td>起价</td><td>$200/月</td><td>$20/月</td><td>免费 MIT</td><td>含免费档</td></tr>
    <tr><td>多 Agent</td><td>群聊共享一台电脑</td><td>单 Agent 后台</td><td>单实例</td><td>单 Agent</td></tr>
  </tbody>
</table>

Grok Bot 的独特之处是「多个 Bot 共享同一台持久云电脑、共享登录态、各占一块屏幕」被当成一等设计——这既是最大便利，也是最大风险。Claude Cowork 更早成熟、便宜得多但偏单 Agent 桌面；OpenClaw 把控制权完全交还给你但要求会命令行；Manus 架构最像、且有免费档，只是所有权一年内两次易主带来不确定性。

## 优势与短板

**优势**：架构上它把「Agent 该住在哪里」这个问题答得很漂亮——不是聊天窗口，而是一台你关了机也继续跑的电脑，且用浏览器绕开了 API 这道墙，覆盖了真正的长尾场景。产品完成度高：消息式界面上手零成本、有真正的手机 App、多 Bot 协作的叙事清晰。发布即引爆社区，PH 当日第 2、4.69/5 的口碑说明用户买账。

**短板**：第一是贵且封闭，最低 $200/月、模型锁死、生态绑定 xAI/Cursor；第二是安全控制还停留在 Beta——没有审计日志（聊天记录是唯一凭证，且按 Bot 而非按动作）、没有彩排、没有单步回滚，而它偏偏握着你的登录态；第三是成熟度，xAI 自己也说可靠性要在更复杂多步流程上继续验证，早期反馈里也有人质疑「超出精心挑选的演示案例后是否还稳」。eesel 的评测结论很中肯：如果你的瓶颈是「某个没 API 的工具、且工作以草稿为主」，它值得；如果工作涉及「对外发送」，三个关键安全控制（彩排、作用域、记录）恰好都没交付，暂不宜托付。

## 最终推荐

**值得现在上手的人**：已经在用 SuperGrok Heavy 或 Cursor Ultra、团队被老旧后台卡住、且工作流以「草稿/内部整理」为主的人。把它当成一台隔离的云端副机，从只读、单工作流起步验证，是当下最稳妥的打开方式。

**先别急着上的人**：预算敏感的个人（同等需求 Claude Cowork $20/月就能覆盖大半）；对凭证安全零容忍、需要审计与合规页的企业（等审计日志与单步回滚真正上线）；想自己挑底层模型、或怕被单一生态锁死的工程师（OpenWorker/OpenClaw 更合适）。

**实操建议**：按五眼联盟 2026-05 指南的思路，假设 Agent 可能意外行为。先连一个受限服务账号、只给只读权限，从「夜间跑 outbound、整理 Gmail 发票」这类低风险任务验证，再逐步放开。切忌一开始就把生产系统或含卡号的账号接进去。

---

**评测声明**：本文基于官方文档（x.ai/bot 及开发者文档）、Bloomberg/网易等媒体报道、hunted.space 的 Product Hunt 数据，以及 Crevio、eesel、creativeainews、kingy.ai 等多家独立评测交叉撰写。所有价格、发布时间、功能描述均可溯源；站长本人未获得订阅访问权限、未做亲测，文中不含任何虚构的亲测细节。本文不含付费推广。
