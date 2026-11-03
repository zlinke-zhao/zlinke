---
id: sai
title: "Sai 深度评测：Simular 的机器人秘书，让你的电脑自己点鼠标敲键盘干活"
date: "2026-11-03"
category: "AI工作台"
rating: 4.3
price: "免费档（共享云电脑 + 每日额度）；Starter/Pay-as-you-go $50、Premium $200、Pro/Unlimited $500 每席/月；Enterprise 联系销售"
subtitle: "不是聊天机器人，而是架在真实桌面 GUI 之上的自主计算机 fleet"
url: "https://www.simular.ai"
pros:
  - "真计算机使用：在 GUI 层点击、输入、读屏，能操作没有 API 的老旧桌面软件、内网门户、登录后才有的功能，不止会调接口"
  - "持久云电脑：云电脑保留下载、会话和已装应用，周五的任务能用周一的文件，关掉笔记本也能在云端接着跑"
  - "研究背书过硬：背后 Agent S 框架在 OSWorld 跑出 69.9%（接近人类 72% 基线），Sai 在 OSWorld 2.0 拿到 73.0%，胜过 Claude Opus 5 与 GPT-5.6 Sol"
  - "成本可优化：Smart Snapshot 把成功路线存成可复用技能，后续执行成本据称降 10 到 100 倍；审批式护栏让人在关键动作前把关"
cons:
  - "入门价高：Starter $50/月远高于 ChatGPT Plus $20 那档聊天订阅，定位是工作本身就是瓶颈的人群而非随便聊聊"
  - "GUI 自动化天生脆弱：应用改版、弹窗、验证码会打断流程，早期用户实测在云电脑里塞中文、过 Google 人机验证都翻车"
  - "强依赖授权与确认：长链条多应用任务在不可逆步骤仍需人工确认，想完全放手得先把审批规则配好"
  - "闭环偏托管：默认 API 限每用户每小时 60 条消息，深度使用要上 Pro/Enterprise，云端跑还会产生模型与算力账单"
alternatives:
  - { name: "OpenClaw", slug: "openclaw", reason: "想要免费开源、自己掌控数据、按 token 自付的桌面 Agent，OpenClaw 是零成本起点，代价是自行部署与调教" }
  - { name: "ChatGPT", slug: "chatgpt", reason: "只要浏览器内研究、填表、轻量网页任务，ChatGPT agent 模式 $20/月更便宜，但动不了你本机装的客户端" }
  - { name: "ToDesk AI", slug: "todesk-ai", reason: "国内开箱即用的桌面 Agent，会员 39.9 元/月起，适合中文环境与国产软件自动化，底层基于 OpenClaw 定制" }
  - { name: "Manus", slug: "manus", reason: "云端通用 Agent、交付型任务强，适合不想管云电脑的人，但同样闭源托管、按量且不易触达本机桌面应用" }
---

## 一句话总结
Sai 适合被「跨五六个互不相通的工具、重复点鼠标」耗尽时间的运营、分析、招聘、市场人群；不适合只想找个便宜聊天助手、或完全不想付订阅费与配置审批规则的纯个人玩家。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>内容</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Simular, Inc.（旧金山 / 帕罗奥图，由前 DeepMind 科学家创办）</td></tr>
    <tr><td>创始人</td><td>Ang Li（CEO，前 DeepMind）、Jiachen Yang（CTO，前 DeepMind）</td></tr>
    <tr><td>成立与融资</td><td>2023 年成立；$5M 种子轮（Basis Set 领投）+ $21.5M A 轮（2025-12-02，Felicis 领投，NVentures/NVIDIA、Basis Set、Flying Fish、South Park Commons、Lenny Rachitsky 等天使），合计约 $26.5M</td></tr>
    <tr><td>旗舰产品</td><td>Sai（robosecretary，自主计算机 fleet）</td></tr>
    <tr><td>开源研究框架</td><td>Agent S / Agent S2（ICLR 2025 Agentic AI Workshop 最佳论文；OSWorld 计算机使用基准 SOTA）</td></tr>
    <tr><td>支持平台</td><td>Windows、macOS、Linux；可跑在 Simular 的云电脑（Windows/Linux）或你自己的 Mac/Windows（BYOD）</td></tr>
    <tr><td>Product Hunt</td><td>Sai 于 2026-09-21 发布，417 赞 / 48 评论 / #3 Product of the Day；PH 评分 4.40/5（5 评）</td></tr>
    <tr><td>大厂合作</td><td>入选微软 Windows 365 for Agents 计划（Microsoft Build 2026-06-03 演示）</td></tr>
    <tr><td>媒体曝光</td><td>Wired、TechCrunch、MIT Technology Review、The Register、IBM Think、The New Stack、The Korea Herald 等</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. GUI 层计算机使用（评分 4.5）。** 这是 Sai 区别于绝大多数 Agent 的根本：它不靠 API，而是像人一样读屏、点按钮、敲表单。官方与第三方实测都强调，它能驱动没有公开接口的遗留桌面软件、内网门户、登录后才出现的功能——这些恰恰是传统 RPA 和普通 Agent 卡住的地方。早期 Product Hunt 用户就直言「我们内部工具几乎没有 API，大多数自动化产品在真正有用的环节前就停了，能自己开 App 干活的电脑正好补上这个缺口」。代价是 GUI 自动化天生怕改版：社区反复追问「App 更新导致布局偏移、或弹出意外窗口时，存好的路线会不会直接断」。

**2. 持久云电脑与 fleet 并行（评分 4.3）。** Sai 把每个任务跑在一台独立的云电脑上，下载、会话、已装应用在下一次运行之间保留，所以「周五布置、周一取结果」成立；还支持多台云电脑并行处理不同任务。这一点比只在会话里临时起一个沙盒的 ChatGPT agent 模式更「常驻」。你需要做的，只是把工作流教一次，之后它按日程无人值守地重跑，且每次更稳更便宜。

**3. 审批式护栏与人工接管（评分 4.2）。** 涉及花钱、发消息等不可逆动作，Sai 会先向你确认；运行中你也可以随时接管鼠标。密码等敏感输入被加密，底层模型看不到明文。PH 上一位用户评价其「优雅地暂停、在重大 UI 改版时请求人类输入、用分级审批建立生产环境信任」是加分项。但实际体验上，长链条任务在关键步骤仍要人盯着，想彻底放手得先把审批规则配齐。

**4. Smart Snapshot 与成本优化（评分 4.0）。** 任务成功后，Sai 把路线存成可复用「技能」，后续执行不再每次都去查完整大模型，据官方与 coding4food 实测，未来成本可降 10 到 100 倍。配合神经符号（neurosymbolic）架构——用确定性符号逻辑约束概率性模型——来抑制幻觉、提升长链条可靠性。这是 Simular 反复强调的工程账，也是它敢收 $50 起步价的底气。

## 价格方案

<table>
  <thead>
    <tr><th>方案</th><th>价格</th><th>包含</th><th>适合谁</th></tr>
  </thead>
  <tbody>
    <tr><td>Free</td><td>$0</td><td>共享云 Windows 电脑，每日额度刷新，社区支持（coding4food 记载每日约 30 分钟专属远程机时）</td><td>想零成本试水、验证 GUI 自动化的好奇用户</td></tr>
    <tr><td>Starter / Pay-as-you-go</td><td>$50/月</td><td>5 万积分（约 $50 用量），专属 Windows/Linux 云电脑仅运行时计费，最多 5 台并行，或 BYOD 跑在自己 Mac/Windows</td><td>偶尔调用、按工作量付费的个人与独立开发者</td></tr>
    <tr><td>Premium</td><td>$200/月</td><td>Starter 全部，加上常驻 Windows/Mac 云电脑、更高月额度、优先支持</td><td>需要 7x24 常驻云电脑、重度使用的人</td></tr>
    <tr><td>Pro / Unlimited</td><td>$500/月</td><td>公平使用内无限 AI 用量、团队工作流共享、完整 API 访问、最高优先级容量与支持</td><td>多工作流并行、团队运营的专业用户</td></tr>
    <tr><td>Enterprise</td><td>联系销售</td><td>托管扩容、专属客户团队、SSO/RBAC/SOC2、定制集成、SLA 保障</td><td>高体量自动化、有安全合规要求的企业</td></tr>
  </tbody>
</table>

价格口径来自 simular.ai/pricing 与 sai.work/pricing 两个官方页面（2026-11 抓取），两处对 $50/$200/$500 三档高度一致；sai.work 把 $50 档称为「Pay as you go」、把 $500 档称为「Sai Unlimited」，与 simular.ai 的 Starter/Premium/Pro 命名对应。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Sai（Simular）</th><th>OpenClaw</th><th>ChatGPT agent 模式</th><th>ToDesk AI</th></tr>
  </thead>
  <tbody>
    <tr><td>形态</td><td>托管云电脑 + 本机 BYOD</td><td>开源自部署桌面 Agent</td><td>OpenAI 云端浏览器</td><td>国内桌面 Agent（远控 + 执行）</td></tr>
    <tr><td>能否触达本机应用</td><td>能（GUI 层，含无 API 软件）</td><td>能（本机 + 服务器）</td><td>否（仅 OpenAI 云端）</td><td>能（本机 + 远控）</td></tr>
    <tr><td>免费档</td><td>有（共享云电脑 + 每日额度）</td><td>完全免费（MIT 自部署，模型 token 自付）</td><td>有（$0，但 agent 需订阅）</td><td>有（赠积分 + 每日签到）</td></tr>
    <tr><td>付费起点</td><td>$50/月</td><td>$0（模型费自付）</td><td>$20/月 Plus</td><td>39.9 元/月会员</td></tr>
    <tr><td>研究 / 基准</td><td>OSWorld 2.0 73.0%，Agent S 获 ICLR 最佳论文</td><td>社区基准少、以灵活见长</td><td>自有基准与索引</td><td>基于 OpenClaw 定制，无独立基准</td></tr>
    <tr><td>数据归属</td><td>云端托管运行</td><td>自托管可控</td><td>OpenAI 云端</td><td>国内托管</td></tr>
  </tbody>
</table>

核心洞察：Sai 与 OpenClaw 都「在桌面干活」，但一个是闭源托管、卖订阅与算力，一个是开源免费、你自备模型 token；与 ChatGPT agent 模式相比，Sai 的杀手锏是能碰本机客户端与无 API 软件，代价是更贵、更需配置；ToDesk AI 则在中文与国产软件场景更顺手，但底层仍站在 OpenClaw 肩膀上。

## 优势与短板

优势很明确：第一，它真正在 GUI 层干活，覆盖那些「没有 API 就自动化不了」的真实业务死角；第二，持久云电脑让任务跨会话保留上下文，关掉笔记本也能跑；第三，研究底子硬，Agent S 系列在 OSWorld 上多次刷新 SOTA，且拿到 ICLR 2025 最佳论文，不是套壳营销；第四，Smart Snapshot 把成功经验沉淀为可复用技能，越用越便宜，配合审批护栏兼顾安全。

短板也坦诚：入门 $50/月对随手用用的个人偏贵；GUI 自动化对界面变更、弹窗、验证码敏感，早期实测在云电脑里输入中文、过 Google 人机验证都失败过；长任务仍需人工在关键节点确认，完全放手要预配置；云端运行会持续产生模型与算力账单，默认 API 还限每用户每小时 60 条消息。此外，PH 早期一条反馈提到「只支持 macOS 时很失望，后来靠云电脑才体验到自主能力」——跨端成熟度是它要补的课。

## 最终推荐

**该用的人**：运营 / 分析 / 招聘 / 市场里，每天在五六个互不相通的工具间重复点鼠标、且工作会反复回来（周报、线索清洗、简历初筛、表单填报）的人。Sai 的「教一次、按日程重跑、越跑越便宜」正中这类痛点；也需要愿意为省下的时间付 $50 起步月费、并接受前期配置审批规则。

**不该用的人**：只想找个便宜聊天助手、$20 档 ChatGPT Plus 就够了的人；希望完全免费、自己掌控数据的人（请直接上 OpenClaw 自部署）；工作几乎都在浏览器内、不需要碰本机客户端的人（ChatGPT agent 模式更便宜）；以及中文环境、国产软件自动化为主、想要开箱即用的人（ToDesk AI 这类国内桌面 Agent 更顺手）。

**购买建议**：先走 Free 档验证你的真实工作流能不能在 GUI 层跑通，再决定要不要上 $50 的 Starter；只有确认有常驻云电脑需求或团队共享工作流，才考虑 $200/$500 档。企业用户直接走 Enterprise 拿 SSO/SOC2 与 SLA。

---

**评测声明**：本文基于作者公开信息调研与多方信源交叉核实撰写。公司背景、融资、基准数据来自 Simular 官方公告与博客、arXiv（Agent S2, 2504.00906）、Seedtable、TechCrunch、The New Stack 等；价格来自 simular.ai/pricing 与 sai.work/pricing 官方页面（2026-11 抓取）；Product Hunt 数据与用户评价来自 PH 与 hunted.space 公开档案。本文不含付费推广。
