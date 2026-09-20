---
id: tabbit
title: "Tabbit AI 浏览器深度评测：把 Agent 直接长进浏览器这个最高频入口"
date: "2026-09-20"
category: "AI工作台"
rating: 4.3
price: "免费档 $0 / 标准版 $0（设为默认浏览器解锁）/ 专业版 $30 每月（中国站 ¥39.60 每月）"
subtitle: "美团光年之外 GN06 团队出品的 Agentic Browser，让浏览器本身变成可执行的生产力中枢"
url: "https://www.tabbit.com"
pros:
  - "真·Agentic Browser 品类：Agent 自主开页、填表、跨站汇总，浏览器即生产力中枢，而非聊天框外挂"
  - "免费门槛极低：标准版设为默认浏览器即解锁 10 倍用量，Pro 才 $30/月，比 Dia 等 AI 浏览器更慷慨"
  - "模型中性是独门：内置 10+ 模型（Claude Opus/GPT-5.6/Gemini-3.x/DeepSeek/Kimi/GLM），标准版可同时对比 3 个模型输出"
  - "工作流可固化：妙招与 Skills 把常用提示词沉淀复用，@ 引用本地文件与标签页上下文，上下文不再割裂"
cons:
  - "Agent 自主成功率仍有限：官方产品经理自报 BrowserBench 75 任务 64% 成功率、约 1.9 倍速但仍有约三分之一失败，敏感操作需全程盯防"
  - "本质是浏览器：复杂本地文件操作与系统级桌面操控弱于纯桌面 Agent（如实在 Agent/MiMo Desktop），自动化依赖网页结构、遇改版或反爬易失效"
  - "隐私与合规待独立审计：Agent 需广泛权限浏览、填表甚至代付，官方声明本地加密存储，但尚无第三方安全审计报告；另有 2026-03 代码争议需留意"
alternatives:
  - { name: "OpenClaw", slug: "openclaw", reason: "若你要的是全本地、数据主权优先的桌面智能体，OpenClaw 开源生态更广，但无浏览器入口优势" }
  - { name: "Clairvoyance 星界", slug: "clairvoyance", reason: "同属桌面智能体，本地优先 + 员工制编排，适合不想换浏览器的重桌面用户" }
  - { name: "Highlight AI", slug: "highlight-ai", reason: "捕获式浮窗 AI 助理，跨 App 取屏幕上下文，但不具备 Tabbit 的自主网页执行能力" }
  - { name: "Skywork 桌面版", slug: "skywork-desktop", reason: "昆仑天工出品的 Windows 原生桌面 Agent，擅长多模态成片，与 Tabbit 浏览器路线互补" }
---

## 一句话总结

Tabbit 不是「浏览器 + 一个聊天框」，而是把 Agent 直接长进浏览器这个你每天最高频的入口——适合长期泡在标签页、做调研/填表/跨平台汇总的研究员、PM 和开发者；不适合需要系统级桌面操控或要求 Agent 完全自主无人值守的用户。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>美团旗下光年之外（GN06）团队，负责人刘炯；海外会员站为 tabbit.ai</td></tr>
    <tr><td>立项 / 公测 / 发布</td><td>2025-08 立项 · 2026-03-02 公测 · 2026-06-09 V1.0 正式发布</td></tr>
    <tr><td>产品形态</td><td>基于 Chromium 的 AI 原生桌面浏览器（macOS 12+ Apple Silicon / Windows 10/11）</td></tr>
    <tr><td>核心引擎</td><td>GUI Browser-Use Agent，独立标签组并行执行，不抢占用户前台鼠标键盘</td></tr>
    <tr><td>模型阵容</td><td>10+ 模型：Claude Opus/Sonnet、GPT-5.6、Gemini-3.x、DeepSeek V4、Kimi K2.6、GLM、MiniMax、豆包、LongCat 等</td></tr>
    <tr><td>定价</td><td>免费 / 标准版 $0（默认浏览器解锁）/ 专业版 $30 每月（中国站 ¥39.60 每月）</td></tr>
    <tr><td>Product Hunt</td><td>2026-09-03 上线，150 upvotes，日榜第 6，由 Zac Zuo 提交</td></tr>
    <tr><td>自主成功率</td><td>公测 53.1% → 发布 91.8%（官方内部口径）；BrowserBench 75 任务 64%（产品经理自报）</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. Agent 任务模式（GUI Browser-Use Agent）—— 评分 4.0**
这是 Tabbit 的灵魂。你用自然语言描述需求（「帮我调研国内主流新能源车的市场策略并出带来源的报告」），Agent 会自动开页、跨站抓取、填表、汇总，并在独立标签组里跑，不抢你的前台。它还能通过 `/tabbit` 指令接入 Claude Code 和 Codex，复用你已有的登录态去操作网页。效率上有硬数据背书：产品经理 Yu 在 PH 透露，其引擎在 75 个 BrowserBench 任务上比对比基线快约 1.9 倍、少用 61% 输入 token。但诚实说，同口径自报成功率仅 64%——意味着复杂链路仍有约三分之一会翻车，关键步骤必须人工确认兜底。

**2. 多模型协同与横向对比 —— 评分 4.5**
模型中性是 Tabbit 的独门武器。不同于豆包、千问把用户锁死在自家模型，Tabbit 内置 10+ 主流模型，新模型往往在发布当天即可接入；标准版还支持同时调用 3 个模型横向对比输出质量，让用户用脚投票而非被厂商绑架。对需要在不同任务上挑模型的人（比如代码用 Claude、中文长文用 GLM、检索用 DeepSeek），这是实打实的效率增益。

**3. 妙招 / Skills 工作流固化 —— 评分 4.3**
「妙招」把常用提示词或流程固化复用，社区技能库（Skills）可一键安装或自建，把「每次重复输入」变成「跑一次工作流」。配合 @ 引用（标签页、截图、本地 PDF/Excel、划词），上下文直接喂给 Agent，省去在聊天框和浏览器间反复复制粘贴。对研究员、分析师这类高频重复劳动，复用机制能显著降噪。

**4. 上下文引用与本地记忆 —— 评分 4.2**
地址栏即统一命令面：URL 导航、搜索、模型选择、上下文标记合一。本地加密记忆 + 语义索引，把浏览历史、书签、聊天留在你机器上，并提供收藏全文检索。相比把资料反复贴给云端聊天机器人，这种「上下文留在它本来就在的地方」的设计更顺手，也更符合隐私直觉。

**5. 零成本迁移 —— 评分 4.4**
从 Chrome / Safari / Edge 一键迁移历史、书签、扩展与设置，完整保留 Chrome 的基础体验，降低替换门槛。对长期被 Chrome 套牢、又想试 AI 浏览器的人，这是关键的解锁动作。

## 价格方案

<table>
  <thead>
    <tr><th>版本</th><th>价格</th><th>每周 AI 用量</th><th>Agent 模式</th><th>模型权限</th><th>定时任务</th></tr>
  </thead>
  <tbody>
    <tr><td>免费 Free</td><td>$0/月</td><td>1× 基线</td><td>可试用</td><td>多模型聊天（限时免费）</td><td>无</td></tr>
    <tr><td>标准版 Standard</td><td>$0/月（设为默认浏览器解锁）</td><td>10× Free</td><td>完整</td><td>多模型聊天 + 默认模型无限</td><td>最多 1 个</td></tr>
    <tr><td>专业版 Pro</td><td>$30/月（中国站 ¥39.60/月）</td><td>100× Free</td><td>完整 + 重负载</td><td>顶级模型（Claude Opus/GPT-5.6/Gemini-3.x）</td><td>最多 3 个</td></tr>
  </tbody>
</table>

定价格局很克制：浏览器本身永久免费，把 Tabbit 设成默认浏览器就能零成本解锁 10 倍用量的标准版，只有重度 Agent 用户才需要 $30/月 的专业版。海外站以美元结算、中国站（tabbit.com）以人民币结算，区隔清晰。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Tabbit</th><th>Dia（The Browser Company）</th><th>OpenClaw（桌面智能体）</th></tr>
  </thead>
  <tbody>
    <tr><td>产品形态</td><td>AI 原生浏览器</td><td>AI 原生浏览器</td><td>本地优先桌面 Agent harness</td></tr>
    <tr><td>免费档</td><td>免费 + 标准版 $0</td><td>仅浏览无 AI，Better Answers $20/月</td><td>软件免费（模型 API 另计）</td></tr>
    <tr><td>顶档价格</td><td>Pro $30/月</td><td>Better Days $100/月</td><td>取决于所用模型 API</td></tr>
    <tr><td>平台</td><td>macOS 12+（Apple Silicon）/ Windows 10/11</td><td>仅 macOS 14+ Apple Silicon</td><td>全平台（含 Linux）</td></tr>
    <tr><td>模型选择</td><td>10+ 可切换、可对比</td><td>用户不可选底层模型</td><td>模型无关</td></tr>
    <tr><td>核心差异</td><td>Agent 长在浏览器入口 + 妙招复用</td><td>聊天侧栏 + 页面上下文</td><td>全本地、数据主权、技能生态广</td></tr>
  </tbody>
</table>

横向看，Tabbit 的独特位置是「Agentic Browser」：它比纯桌面 Agent（如 OpenClaw）更贴近你每天的开网页动作，又比 Dia 更慷慨（免费/标准版覆盖更广且支持 Windows）。代价是它仍是浏览器，系统级操控与本地文件重活不如纯桌面 Agent。

## 优势与短板

**优势**已经很清晰：品类稀缺（库内少见的 Agentic Browser）、免费门槛极低、模型中性、工作流可固化、迁移零成本。对「每天在十几个标签页间穿梭、做调研/填表/汇总」的知识工作者，它的切入点比独立聊天框自然得多。

**短板**要坦诚讲三点。一是 Agent 自主成功率仍有限：官方自报 BrowserBench 64%、约三分之一失败，公测到发布内部指标虽冲到 91.8%，但那是对自家任务口径，跨站复杂链路远未到「放手不管」。二是能力边界受浏览器形态约束，复杂本地文件操作、系统级自动化不如实在 Agent、MiMo Desktop 这类纯桌面 harness，且自动化依赖网页结构，遇反爬或改版可能失效。三是隐私与合规：Agent 需要广泛权限去浏览、填表甚至代付，官方声明本地加密存储、数据不出本机，但目前尚无第三方安全审计报告；此外 2026-03-03 曾有权限争议——一位前字节 SDE、开源沉浸式翻译插件「read frog」作者指控 Tabbit 抄袭其代码，官方回应称开发翻译插件时使用了并修改了开源项目 read frog 的代码、对开源协议调研不足，已改正并开源相关代码。这件事不影响产品可用性，但选型的合规团队应纳入评估。

## 最终推荐

**推荐这些人用：**
- 研究员 / PM / 开发者：长期泡在标签页，做竞品调研、资料汇总、跨站填表，Agent 入口能直接省下大量复制粘贴；
- 模型挑剔党：想在同一界面横向对比 Claude / GPT / Gemini / DeepSeek / Kimi 输出质量的人；
- 想零成本试水 AI 浏览器的人：免费 + 标准版 $0 足够判断 Agent 是否合你工作流，再决定是否上 Pro。

**不建议这些人用：**
- 需要系统级桌面操控、或要 Agent 完全无人值守跑本地重活的用户——纯桌面 Agent 更合适；
- 对 Agent 代付/代填敏感表单有合规顾虑、且要求有独立安全审计报告的团队——建议等第三方审计出炉；
- 仅想简单聊聊天、不愿迁移浏览器或配置模型的轻度用户——它终究是工作台，不是聊天机器人。

实操建议：先用免费档跑一个真实任务（如「把这几个竞品价格拉成表」），观察 Agent 在独立标签组的执行质量；敏感操作务必开启逐步确认，别把工资、付款、删号类任务交给第一次实验。

---

**评测声明**：本文基于作者公开信息调研与多源独立评测撰写（美团光年之外 GN06 公开信息、Tabbit 官方定价页 go.tabbit.ai/tabbit-pricing、Product Hunt / Hunted.space 收录页、aisagely 实测、Toolify、TopAIHubs、TechShark、证券时报、百度百科等）。价格与功能数据均来自 2026-09 可查的官方与第三方来源，部分口径（如内部成功率 vs BrowserBench 自报）已在文中标注来源。本文不含付费推广。
