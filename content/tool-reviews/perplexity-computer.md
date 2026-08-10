---
id: perplexity-computer
title: "Perplexity Personal Computer 深度评测：20 个模型给你干活，账单也按 20 个模型的胃口来"
date: "2026-08-10"
category: "AI工作台"
rating: 3.7
price: "Free $0，无 Computer；Pro $20/月（年付 $200 折合约 $17/月），含 500 Computer 额度/月，但不含桌面版 Personal Computer；Max $200/月（年付 $2,000 折合约 $167/月），含 10,000 额度/月，是解锁 Mac / Windows 桌面 Agent 的最低档；Enterprise Pro $40/席/月（年付 $400/席）；Enterprise Max $325/席/月（年付 $3,250/席），含桌面 Agent。额度当月清零不结转，自动续费默认关闭，默认月度加购上限 $200、可上调至 $2,000"
subtitle: "唯一一个默认拿竞争对手旗舰模型当主编排器的桌面 Agent，研究类任务确实打得过单模型对手；但额度烧起来没有每任务上限、没有中途估价，Trustpilot 707 条评价里 82% 是一星，几乎全在骂计费"
url: "https://www.perplexity.ai/computer"
pros:
  - "多模型元路由是真差异化而非营销话术：首发编排 19 个前沿模型，到 3 月扩到 20+，按子任务自动分派——Claude Opus 系做核心推理、Gemini 3 Pro 做深度调研、GPT-5.2 吃长上下文、Grok 接轻量快任务、GPT-5.3-Codex 写代码，默认主编排器是竞对的 Claude Opus 4.7，可手动切 GPT-5.4 或 Claude Sonnet 4.6（来源：Perplexity 4 月 changelog，TechTimes / digitalapplied / techjacksolutions 多方转引）"
  - "研究类工作流是它唯一无可替代的场景：七路并行搜索读整页而非摘要片段，Gemini 先铺宽来源、Opus 再去重排序。一家独立评测站跑了一周后抽检五份报告约 100 条引用，87 条准确、9 条部分正确、4 条编造——不是零幻觉，但明显好过单模型加联网插件（来源：ai-tools-hub 2026 实测）"
  - "长时运行的隔夜交付能力被多方复现：设好任务关掉页面，几小时后回来拿成品。Perplexity 员工用它一夜生成 4,000 行表格，独立评测记录竞品调研 10 家公司出结构化报告耗时 38 分钟、Streamlit 看板 1 小时 12 分。隔离 Linux 沙箱给到 2 vCPU / 8GB 内存，预装 Python、Node.js、ffmpeg，Agent 是真能跑代码而不只是生成代码"
  - "本地文件加 400+ 连接器加网页三层上下文合流，库内独一份：Windows / Mac 原生应用在授权文件夹里直接读写，往上接 Word、Excel、PowerPoint、Outlook、OneDrive、Teams、Salesforce、Snowflake、HubSpot，Snowflake 还有自动生成 Data Map 把自然语言转 SQL，企业可通过 MCP 自带连接器接入"
cons:
  - "额度失控是压倒性的头号差评：没有每任务额度上限，也没有任务中途的费用估算。根因是复合回馈循环——npm install 这类静默失败发生后，Agent 会不停派生子 Agent 重试，不给用户任何失败信号。Builder.io 的评测里建一个基础网页遇上部署问题就吃掉 10,000+ 额度，也就是 Max 的整月配额；Reddit 上重度日用者估算月度实付 $300–500，有 Max 用户留下两个月烧掉 7 万额度的记录"
  - "Trustpilot 707 条评价 1.5 分、82% 是一星，且几乎全部集中在计费与退款争议；同期 Google Play 是 4.6 分 203 万评分带编辑推荐。两面镜子都真实——免费用户满意，付过钱又撞上限额的人极度不满，而买 $200 档的正是后一群人"
  - "云脑本地手，数据必须出机器：本地应用只负责碰文件，推理与任务分解全在 Perplexity 云端跑。厂商声明不拿企业数据训练，但消费级 Max 需手动退出、只有 Enterprise Max 是合同默认禁止，金融、法律、医疗类客户在采购环节大概率过不去"
  - "工程完成度与信任背景都还欠账：宣传的 400+ 连接器早期采用者反馈脆弱，Vercel OAuth 令牌每会话过期，有评测者因整合持续静默失败烧掉 10,000 额度推了坏构建；Zapier 实测自主网页导航脆弱且比人慢，大量站点的 Cloudflare 与反爬把 Agent 限流甚至困住。安全侧 LayerX 研究员 Paloma Perlov 称 Comet 在企业基准下比 Chrome 易受钓鱼与网页攻击的程度最高高出 85%，而 Comet 恰是这套架构里负责网页自动化的那一层"
alternatives:
  - { name: "Claude Cowork", slug: "claude-cowork", reason: "十分之一的价格覆盖约八成重叠能力，本机执行、可观测、计费透明，SOC 2 与管理控制也更成熟。除非你确实反复撞上单模型天花板，否则应该先从它开始" }
  - { name: "ChatGPT Work", slug: "chatgpt-work", reason: "同为闭源大厂桌面 Agent，走自家 GPT 全栈路线。稳定性与生态一致性更好，代价是没有跨厂商模型路由这个卖点" }
  - { name: "Microsoft Copilot", slug: "copilot", reason: "约 $30/席/月、原生握有 Microsoft Graph 与身份审计层，AP 报道其付费席位在 4–6 月季度已破 3000 万。如果贵司整套跑在 M365 上，这是摩擦最小的路径" }
  - { name: "Manus", slug: "manus", reason: "纯云端沙箱 VM 路线，够不着本机文件，但不需要在本地装一个能读你文件夹的常驻程序。介意本地权限暴露面的人可以拿它做对照" }
---

## 一句话总结

Perplexity Personal Computer 适合**每天要做多源交叉调研、且时间成本明显高于每小时 $40 的分析师、投研、竞品情报与快速原型型创业者**——多模型元路由加隔夜长任务这两件事，目前确实没有第二家做到同样水位；但**软件开发者、预算敏感的个人用户，以及任何受监管行业的采购**都应该绕开：沙箱不可观测让它在严肃开发里是黑箱，额度机制让 $200 只是入场券而非总价，上下文必须出境这件事会在合规评审的第一轮就被拦下。

## 核心数据一览

<table>
  <tr><th style="background:#4a90d9;color:#fff">项目</th><th style="background:#4a90d9;color:#fff">数据</th></tr>
  <tr><td style="font-weight:bold">开发方</td><td>Perplexity AI，CEO Aravind Srinivas；以 AI 搜索起家，2025 年推出 Comet 浏览器</td></tr>
  <tr><td style="font-weight:bold">官方定位</td><td>local agent harness（本地 Agent 工作台）；Srinivas 的说法是「传统操作系统接受指令，AI 操作系统接受目标」</td></tr>
  <tr><td style="font-weight:bold">云端版 Computer 上线</td><td>2026-02-25，首发编排 19 个模型；据报道上线首个周末即有 100+ 企业客户申请使用</td></tr>
  <tr><td style="font-weight:bold">桌面版 Personal Computer</td><td>2026-03-11 宣布（Mac mini 常驻变体，候补名单，仅 Max）；4 月落地 macOS；<b>2026-07-28 补齐 Windows 10/11 原生应用</b></td></tr>
  <tr><td style="font-weight:bold">模型阵容</td><td>2 月首发 19 个，3 月起 20+；默认主编排器 <b>Claude Opus 4.7</b>，可切 GPT-5.4 / Claude Sonnet 4.6</td></tr>
  <tr><td style="font-weight:bold">连接器</td><td>400+，含 Microsoft 365 全家桶、Salesforce、Snowflake、HubSpot、Box、Vercel、GitHub；支持通过 MCP 自带连接器</td></tr>
  <tr><td style="font-weight:bold">沙箱规格</td><td>隔离 Linux 环境，2 vCPU / 8GB 内存，预装 Python、Node.js、ffmpeg 与标准 Unix 工具</td></tr>
  <tr><td style="font-weight:bold">桌面版门槛</td><td>Max（$200/月）与 Enterprise Max（$325/席/月），其余档位一律无桌面 Agent，官方未公布下放时间表</td></tr>
  <tr><td style="font-weight:bold">用户口碑分裂</td><td>Google Play 4.6 分 / 203 万评分 / 编辑推荐；Trustpilot 1.5 分 / 707 条 / 82% 一星</td></tr>
</table>

## 先把两个同名产品分清楚

这是本文最想先说的一件事，因为中英文报道在这里普遍混为一谈，直接导致了「到底 $20 能不能用」的口径打架。

**Computer** 是 2026 年 2 月 25 日上线的**云端** Agent 平台：你给一个高层目标，它拆成子任务树，分派给不同模型的子 Agent，全程跑在 Perplexity 托管的云沙箱里，够不着你本机任何文件。这个东西 3 月起已经下放到 Pro 档，**$20/月带 500 额度/月**。

**Personal Computer** 是它的**桌面常驻变体**：装在你的 Mac 或 Windows 上，能在你明确授权的文件夹里读写文件、操作原生应用。3 月 11 日先以 Mac mini 常驻形态宣布并开候补名单，4 月上 macOS，7 月 28 日补齐 Windows。**这一层至今只对 Max / Enterprise Max 开放。**

所以正确的说法是：**$20 能用云端 Computer 的一小口（500 额度），但碰不到你电脑里任何一个文件；想让它动你本机的 Excel，起步价 $200。**

顺带说一句时间线上的分歧：Personal Computer 究竟哪个月上的 Mac，各家口径不一，连 digitalapplied 自己都在文中承认「sources disagree on the exact month」；M365 侧边栏与 Teams 集成有 5 月与 7 月两种说法，The Verge 一系报道倾向 5 月。这类日期我不做拍板，只如实标注。

## 核心功能评测

### 多模型元路由（4.5/5）

这是它唯一无法被单模型工具复制的东西。元路由器对每个子任务评估三个信号：任务类型（调研走 Gemini、代码走 Claude Opus、出图走 Nano Banana）、复杂度（简单格式化走 Grok、复杂分析走 Opus）、延迟要求（即时响应走快模型、隔夜构建走深模型）。

更实在的是**子 Agent 会自动管理依赖**——分析 Agent 若需要调研 Agent 尚未返回的数据，它会排队等待，而不是拿假设数据往下编。这一点与单模型 Agent 遇到数据缺口就捏造中间结果的行为有本质差异，也是它引用准确率能拉开身位的技术原因。

扣分点：**你无法选模型，只能选主编排器**。对需要精确控制成本与行为的用户，这是自动化换来的失控。

### 研究与交付（4.5/5）

一家独立评测站用一周时间跑真实工作负载，给出的数字是目前最具体的公开参考：竞品调研 10 家公司出结构化报告 38 分钟、耗掉月度额度约 4%；三来源综合的 ICP 分析 22 分钟、约 2.5%；2,500 字带来源的长文 17 分钟、约 1.5%；30 标签页市场扫描导出 Notion 51 分钟、约 5%。

同一份评测抽检了五份报告里约 100 条引用：**87 条准确、9 条部分正确、4 条编造**。这个数字要辩证看——它明显优于单模型加联网插件，但 4% 的编造率意味着任何要交给客户或老板的内容仍然必须逐条核。

### 本地文件与 Office 渗透（4.0/5）

Windows 版落地后，典型链路是：从 Outlook 拉客户背景 → 读本机那份报价 Excel → 查网页最新行情 → 回头改 PowerPoint。Perplexity 的铺法很有章法：先进 Word / Excel / PowerPoint / Outlook 侧边栏，再进 Teams，最后才用原生应用把本地文件系统这一环闭合。

厂商声明的护栏包括：发邮件、删文件这类敏感或难以逆转的操作需显式批准；每会话生成审计轨迹；提供暂停 Agent 的终止开关；不用企业数据训练。这些是 The Verge 等多家转引的官方口径，不是我实测的结论。

扣分点：细粒度控制的公开信息严重不足——操作能否回滚、是否自动备份原文件、不同连接器的数据保留规则各是什么，公开材料全部语焉不详。

### 成本可预测性（2.0/5）

这是把整体评分从 4 分档拽下来的那一项，详见下一节。

## 价格方案

<table>
  <tr><th style="background:#4a90d9;color:#fff">档位</th><th style="background:#4a90d9;color:#fff">月付</th><th style="background:#4a90d9;color:#fff">年付</th><th style="background:#4a90d9;color:#fff">Computer 额度</th><th style="background:#4a90d9;color:#fff">桌面 Personal Computer</th></tr>
  <tr><td style="font-weight:bold">Free</td><td>$0</td><td>$0</td><td>无</td><td>❌</td></tr>
  <tr><td style="font-weight:bold">Pro</td><td>$20</td><td>$200（页面显示约 $17/月）</td><td>500/月</td><td>❌</td></tr>
  <tr><td style="font-weight:bold">Max</td><td><b>$200</b></td><td>$2,000（页面显示约 $167/月）</td><td><b>10,000/月</b></td><td>✅</td></tr>
  <tr><td style="font-weight:bold">Enterprise Pro</td><td>$40/席</td><td>$400/席</td><td>按合同</td><td>❌</td></tr>
  <tr><td style="font-weight:bold">Enterprise Max</td><td>$325/席</td><td>$3,250/席</td><td>10,000/月</td><td>✅</td></tr>
</table>

另有两条容易被忽略的规则：**未用完的额度当月清零、不结转**；自动续费默认关闭，开启后默认月度加购上限 $200，也就是默认设置下最大月支出是订阅 $200 加加购 $200 等于 **$400**，该上限可手动上调至 $2,000。上线期曾发放一次性 20,000 奖励额度（30 天后过期），另有 35,000 的限时促销，现均已结束。

## 额度到底怎么烧

<table>
  <tr><th style="background:#4a90d9;color:#fff">工作负载</th><th style="background:#4a90d9;color:#fff">额度消耗</th><th style="background:#4a90d9;color:#fff">来源</th></tr>
  <tr><td>生成一段 alt-text</td><td>约 30 额度</td><td>sentisight 汇总</td></tr>
  <tr><td>简单调研加报告</td><td>数百额度</td><td>多位评测者</td></tr>
  <tr><td>两个微应用 + 4 个研究包 + 1 个自动化</td><td>在 10,000 月额度内</td><td>Substack 评测</td></tr>
  <tr><td><b>建一个基础网页（遇部署问题）</b></td><td><b>10,000+ 额度，整月配额</b></td><td>Builder.io 评测</td></tr>
  <tr><td>高强度日常使用</td><td>月度实付 $300–500+</td><td>Reddit 估算</td></tr>
</table>

Perplexity 自己也承认了两条限制：长时 Agent 任务实时消耗额度、可能变贵（为此加了实时额度计数器）；长对话会退化，系统会主动提议压缩并重启上下文。

真正的问题不是贵，而是**贵得不可预测**。没有公开的每任务额度换算表、没有每任务上限、没有中途估价，而失败是静默的。一位评测者因为整合持续静默失败、Agent 不停重试，烧掉 10,000 额度只推出去一个坏构建。实用的止损建议是：先关掉自动续费，从研究类工作流起步，早期躲开涉及 Vercel、npm 这类外部服务的部署任务，用内置的 Computer Skills 而不是开放式提示，并且主动杀掉长时间没有进展的任务。

## 与竞品对比

<table>
  <tr><th style="background:#4a90d9;color:#fff">维度</th><th style="background:#4a90d9;color:#fff">Perplexity Personal Computer</th><th style="background:#4a90d9;color:#fff">Claude Cowork</th><th style="background:#4a90d9;color:#fff">Microsoft Copilot</th></tr>
  <tr><td style="font-weight:bold">价格</td><td>$200/月起 + 额度</td><td>$20/月档</td><td>约 $30/席/月</td></tr>
  <tr><td style="font-weight:bold">模型</td><td>20+ 模型自动路由，默认 Claude Opus 4.7</td><td>单一 Claude 系</td><td>微软选定模型栈</td></tr>
  <tr><td style="font-weight:bold">执行位置</td><td>本机碰文件 + 云端推理 + 云端沙箱</td><td>本机执行、本机沙箱</td><td>M365 应用与云文件内</td></tr>
  <tr><td style="font-weight:bold">数据流向</td><td>上下文经 Perplexity 云</td><td>留在你的电脑上</td><td>微软自有策略与 Graph</td></tr>
  <tr><td style="font-weight:bold">可观测性</td><td>云沙箱不可检视中间态</td><td>可调试、文件级可控</td><td>企业审计与管理控制</td></tr>
  <tr><td style="font-weight:bold">企业合规</td><td>2026-03 才起步，Enterprise Max 起有 SSO 与合规</td><td>SOC 2、管理控制、OpenTelemetry</td><td>身份、审计、采购关系全握</td></tr>
  <tr><td style="font-weight:bold">最适合</td><td>多源调研、隔夜构建、原型</td><td>开发、合规、日常知识工作</td><td>整套跑在 M365 上的组织</td></tr>
</table>

一个绕不开的反讽：Perplexity 在 2026 年 1 月与微软 Azure 签下三年 7.5 亿美元 GPU 容量承诺——这个正面挑战 Copilot 的产品，跑在微软的云上。而 Copilot 那边，AP 报道其付费用户在 4 至 6 月季度已突破 3000 万，微软把分发能力转化成付费席位的速度并不慢。

## 优势与短板

优势侧，多模型元路由是它唯一别人抄不走的东西，而且不只是模型多——子 Agent 的依赖编排让它在数据缺口处选择等待而不是编造，这是引用准确率能到 87% 的技术原因。研究类工作流是投入产出比最高的场景，$200/月对应的回本线大约是每月省下 5 至 10 小时，研究密集型岗位第一周就能达标。本地文件加 400+ 连接器加网页三层上下文合流，在同类桌面 Agent 里确实独一份。

短板侧最刺眼的是那两面镜子：Google Play 4.6 分 203 万评分，Trustpilot 1.5 分 707 条里 82% 是一星，且几乎全部集中在计费与退款。免费用户喜欢这个产品，付过钱并且撞上限额的人极度不满——而 $200 档的目标客群，恰好全在后一群里。

信任背景也需要企业买家自己掂量：亚马逊 2026 年 3 月 10 日拿到法院禁令，阻止 Comet 抓取亚马逊数据；Cloudflare 记录了其隐形爬虫规避禁抓指令的行为；Reddit 与 Forbes 的诉讼仍在进行；Doe v. Perplexity AI（No. 3:26-cv-02803, N.D. Cal.）2026-03-31 提交、05-01 无偏见撤诉，指控嵌入第三方跟踪器传输对话数据，Perplexity 否认；旧金山一场 AI 活动上，300 多位创始人把 Perplexity 评为 AI 独角兽中最可能失败的那个。这些不构成对产品能力的否定，但摆在采购评审桌上就是实打实的减分项。

最后是护城河问题：Windows 原生权限、Office 深层 API、企业身份与审计，微软天然更强。一旦微软把深度代理文件访问拉进 Copilot 的捆绑价，$200 与 $30 之间的六倍差价会变得非常难解释。

## 最终推荐

**应该买的三类人。** 第一类是分析师、投研与竞品情报岗，每天需要多源交叉综合，Computer 的调研深度在第一周就能证明费用合理性，这是唯一别的工具真的替不了的场景。第二类是做快速原型的创业者，你会在失败实验上烧掉一些额度，但隔夜构建能力是真实的，一个月的 Computer 可以替掉数周的人工调研与初稿。第三类是已经在付 $200 给 ChatGPT Pro 或 Claude Max、且明确需要跨厂商模型路由的重度用户。

**不该买的四类人。** 软件开发者别碰——云沙箱不可观测在严肃开发里是致命伤，Claude Cowork 用十分之一的价格给你本机执行、调试可见性和文件级控制。预算敏感的个人用户别碰——先用 $20 档的 500 额度摸清自己的消耗曲线，能覆盖八成需求就没必要往上跳。受监管行业别碰——上下文必须出境这一条，在银行、律所、医疗机构的合规评审第一轮就会被拦下，等 Perplexity 把合规认证补齐再说。中国区用户要额外注意——400+ 连接器基本是欧美 SaaS，企微、钉钉、飞书大概率一个都没有，Comet 云端浏览器在国内网络下的可达性也是未知数。

**已经买了的人，做三件事。** 关掉自动续费；月付而不要年付（几乎所有愤怒的帖子都是预付年费之后撞上中途限额调整）；第一周就用你的真实工作负载把额度表跑一遍，你观察到的数字才是你买到的产品。

---

**评测声明**：本文基于官方公告、Perplexity changelog、官网定价页与多家独立评测聚合撰写，关键数据均在文中标注出处。需要特别说明三点：一、站长未订阅 Max 档位，**文中所有实测数字均转引自具名的第三方评测**，不含任何虚构的亲测细节；二、四层架构细节系独立研究者 Ajit Singh 2026 年 3 月逆向工程归因、经 TechTimes 引用，**非厂商正式确认**；三、本文引用的评测站点中，部分为聚合型内容站，对其单方面数据我已尽量做多源交叉，无法交叉的（如具体额度百分比）已标注来源单位。价格与额度政策变动频繁，**下单前请以 perplexity.ai 官网当日页面为准**。本文不含付费推广。
