---
id: yahoo-scout
title: "Yahoo Scout 深度评测：老牌门户用 Claude 重返搜索战场，凭「把链接当主角」能翻身吗？"
date: "2026-07-26"
category: "AI搜索工具"
rating: 4.1
price: "完全免费（含少量广告与购物返佣，暂无付费档）"
subtitle: "Claude 推理 + Bing 检索 + 雅虎 30 年数据，一款反其道而行、主动把用户引向原始网页的 AI 答案引擎"
url: "https://scout.yahoo.com"
pros:
  - "来源透明度赛道第一：每条答案最多展示 9 条醒目蓝色链接 + 独立来源清单，The Verge 实测同一问题链接密度明显高于 Perplexity/ChatGPT/Google AI Mode"
  - "完全免费无订阅门槛：面向约 2.5 亿美国用户开放，靠 Bing 广告与购物返佣变现，不像 ChatGPT/Perplexity 把深度能力锁在付费墙后"
  - "垂直数据是真优势：Finance 股价每 10 分钟刷新 + 分析师评级、Sports 赛事拆解、Mail 邮件摘要提取日程，均基于雅虎自有内容资产"
  - "对发布商友好：坚持行内引用并加入微软 Publisher Content Marketplace 试点，把流量还给内容创作者，是对「AI 吸干网站流量」争议的正面回应"
  - "克制不装熟：刻意不做「AI 陪聊」人设，信息优先、语气中立，适合把搜索当工具而非情感陪伴的用户"
cons:
  - "仅限美国 beta：全球（含中国、印度）暂不可用，无明确上线时间表，国内用户目前基本用不上"
  - "无公开 API、无独立 App（依附雅虎搜索 App）、无多语言选项，能力被牢牢圈在雅虎生态内"
  - "冷启动体验平庸：个性化红利只对老雅虎用户生效，新用户拿到的是一款「合格但不惊艳」的答案引擎（awesomeagents 实测 7.4/10）"
  - "三大核心组件都不自研：语言模型靠 Anthropic Claude、网页检索靠微软 Bing、变现靠微软广告，雅虎只掌握数据与分发，长期议价权存疑"
  - "官方未公布任何独立准确率基准，个性化数据优势「理论成立但未经第三方验证」，高风险话题（医疗/法律）仍需人工核验"
alternatives:
  - { name: "Perplexity AI", slug: "perplexity", reason: "需要全球可用、成熟的深度研究与多模型访问时，Perplexity 生态更完整、不限地区" }
  - { name: "秘塔AI搜索", slug: "mita-ai", reason: "中文用户首选，免费 100 次/天 + 学术模式直连知网/万方，国内网络直连稳定" }
  - { name: "Felo", slug: "felo", reason: "需要跨语言检索（尤其日/韩信源）并把结果一键转 PPT/思维导图时更合适" }
  - { name: "Consensus", slug: "consensus", reason: "科研场景需要结论溯源到同行评审论文时，Consensus 的提取式防幻觉更可靠" }
---

## 一句话总结
Yahoo Scout 是雅虎 15 年来首个自研搜索产品——最适合本就重度使用 Yahoo Finance/Sports/Mail、又厌倦了 AI 把来源藏起来的美国用户；但如果你在美国以外、需要 API 集成、多语言支持，或期待一款能碾压 Perplexity 的「杀手级」答案引擎，那 Scout 目前还不是你的菜。

## 核心数据一览

<table>
  <tr><th>项目</th><th>数据</th></tr>
  <tr><td>开发商</td><td>Yahoo（2021 年被 Apollo Global Management 以 50 亿美元收购；CEO Jim Lanzone，项目负责人 Eric Feng——前 Hulu 创始 CTO）</td></tr>
  <tr><td>上线时间</td><td>2026-01-27 美国 beta 上线（scout.yahoo.com + 雅虎搜索 App iOS/Android）</td></tr>
  <tr><td>技术栈</td><td>Anthropic Claude（推理/综合）+ 微软 Bing Grounding API（网页检索）+ 微软广告（变现）+ 雅虎自有数据</td></tr>
  <tr><td>数据体量</td><td>约 5 亿用户画像、10 亿+ 实体知识图谱、每年 18 万亿条消费行为信号；美国第三大搜索引擎，约 2.5 亿美国用户</td></tr>
  <tr><td>价格</td><td>完全免费（结果底部少量 CPC 广告 + 购物类查询返佣），暂未推出付费档</td></tr>
  <tr><td>核心特征</td><td>每条答案最多 9 条醒目蓝色来源链接；MyScout 自定义主页磁贴；保存对话与历史线程</td></tr>
  <tr><td>可用范围</td><td>仅限美国（桌面 Web + 移动 Web + 雅虎搜索 App），全球暂未开放</td></tr>
  <tr><td>第三方评价</td><td>awesomeagents 实测 7.4/10；The Verge 早期测试称答案更准、单页链接达 9 条；There's An AI For That 收录（截至评测无用户评分）</td></tr>
</table>

数据来源：The Verge 与 Search Engine Land 对 Jim Lanzone / Eric Feng 的采访、Fortune 专访、techglimmer 与 digitaltechbyte 上线报道、awesomeagents 实测评测、theresanaiforthat 工具页（均为 2026 年公开报道，本文作者未获得美国 beta 访问权限，性能描述均引用第三方实测）。

## 核心功能评测

### 1. 来源透明度与「链接优先」设计（9/10）——真正的差异化
Scout 最反直觉、也最出彩的一点：它是少数**主动希望你点击离开**的 AI 搜索。当 Google、Perplexity、ChatGPT 都在想方设法把你留在自己的答案循环里时，Scout 把醒目的蓝色超链接当作核心产品特征而非事后补丁。The Verge 早期测试中，一个关于冬季风暴的查询返回了一段摘要 + 三条行内链接，再加本地天气、预报详情和「最新新闻」模块，单页共 9 条链接；同样的搜索在 ChatGPT/Perplexity/Google AI Mode 上，来源大多被塞进灰色图标或浅色按钮里。这背后是雅虎的商业逻辑：加入微软 Publisher Content Marketplace 试点、把流量还给发布商，才能维系其赖以生存的内容合作关系。这是「产品特性」，也是对整个出版业的「和解姿态」。

### 2. Finance / 垂直场景整合（8.5/10）——数据护城河最明显的地方
金融查询是 Scout 数据优势最突出的战场。据 awesomeagents 实测，财经答案每 10 分钟刷新一次实时价格，股票报价页内嵌的「Ask Yahoo Scout」会拉取 Yahoo Finance 自有分析 + 网页来源；问一家中盘科技公司的盈利预期，Scout 会返回结构化答案，同时给出市场一致预期和带链接的分析师笔记——这类综合手动整理要花好几分钟。2026 年 6 月的 Finance 整合还能处理对比型问题（如「云计算和 AI 基础设施支出哪个增长更快」），给出带出处数字的结构化拆解。此外 Scout Intelligence Platform 已铺向 Mail（邮件摘要 + 自动加日历事件）、News（要点 + 每日音频简报）、Sports（赛事拆解）、Shopping（商品洞察 + 可购买链接）。

### 3. 通用知识问答（7.5/10）——准，但寡淡且未经基准验证
对传记、历史事件、技术解释类事实性查询，Scout 表现扎实：答案准确、有标题和要点结构、稳定附带来源链接。awesomeagents 评测者称测试期间「没抓到它出现幻觉」——Claude 经 Bing 接地的方式降低了幻觉风险，但并未消除。最大遗憾是雅虎至今未公布任何针对独立数据集的准确率基准，让系统性横评无从下手；同时它的语气「中立到寡淡」，这是特性还是缺点，取决于你想从搜索工具里得到什么。

### 4. 个性化与 MyScout（7/10）——只对老用户生效
Scout 的个性化建立在真实行为信号而非推断意图上：登录后若你在 Yahoo Finance 关注了某只股票，该自选股会出现在 Scout 答案里；若你常点 Yahoo Sports 某支球队的报道，这些偏好会影响它组织体育类回答的方式。MyScout 磁贴则允许你把关心的话题固定到主页，配合对话保存与历史线程形成一定黏性。但正如 awesomeagents 的结论：个性化数据优势「理论成立但未经独立验证」，且**红利几乎只对本就深度使用雅虎生态的老用户生效**——冷启动新用户拿到的，是一款合格但不惊艳的答案引擎。

## 价格方案

<table>
  <tr><th>方案</th><th>价格</th><th>包含内容</th></tr>
  <tr><td>Yahoo Scout</td><td>完全免费</td><td>全部搜索与答案能力、9 条来源链接、MyScout 磁贴、对话历史、垂直整合（Finance/Sports/News/Mail/Shopping）</td></tr>
  <tr><td>变现方式（对用户）</td><td>免费但含广告</td><td>结果底部少量微软广告（CPC）+ 购物类查询的联盟返佣，不影响功能可用性</td></tr>
  <tr><td>付费档</td><td>暂无</td><td>CEO Lanzone 明确「免费搜索极其重要」，但未排除未来推出付费层的可能</td></tr>
</table>

价格结论：这是 Scout 相较 ChatGPT Search（$20/月）和 Perplexity Pro（$20/月）最实在的一张牌——**深度能力不设付费墙**。雅虎的底气在于它没有需要保护的搜索广告帝国（Google 的两难），且现成广告基础设施能比风投背景的竞品更快跑通单位经济。

## 与竞品对比

<table>
  <tr><th>维度</th><th>Yahoo Scout</th><th>Perplexity</th><th>Google AI Overviews</th><th>ChatGPT Search</th></tr>
  <tr><td>底层模型</td><td>Anthropic Claude</td><td>自研 + 多家第三方</td><td>Google Gemini</td><td>OpenAI GPT 系列</td></tr>
  <tr><td>网页接地</td><td>微软 Bing API</td><td>实时网页爬取</td><td>Google 索引</td><td>实时网页</td></tr>
  <tr><td>行内引用</td><td>始终显示（最多 9 条）</td><td>有（上标小数字）</td><td>部分</td><td>有</td></tr>
  <tr><td>对话式人设</td><td>否（信息优先）</td><td>是</td><td>是</td><td>是</td></tr>
  <tr><td>发布商分成</td><td>是（微软 Marketplace 试点）</td><td>无</td><td>有限</td><td>无</td></tr>
  <tr><td>价格</td><td>免费</td><td>免费 / Pro $20/月</td><td>免费</td><td>免费 / Plus·Pro 付费</td></tr>
  <tr><td>可用范围</td><td>仅美国 beta</td><td>全球</td><td>全球</td><td>全球</td></tr>
</table>

对比结论：Scout 的差异化是「答案 + 把流量还给网页」的社会契约，以及免费 + 垂直数据。但在全球可用性、模型自研能力、深度研究成熟度上，它明显落后 Perplexity 与 Google。

## 优势与短板

**优势**在于产品哲学的清醒：在一个人人抢着把用户圈在答案循环里的市场，Scout 反向押注「透明引用 + 引流发布商」，既是对出版业的和解，也是一条 Google 因广告收入两难而不敢走的差异化路径；免费 + 雅虎垂直数据（尤其 Finance）让它对存量用户有真实价值。

**短板**同样刺眼：仅限美国 beta、无 API、无独立 App、无多语言，能力被死死圈在雅虎生态里；三大核心组件（Claude、Bing、微软广告）都不自研，雅虎实际只掌握数据和分发，长期议价权和技术自主性存疑；个性化红利只对老用户生效，冷启动体验平庸；官方拒绝公布任何独立准确率基准，让「数据优势」更多停留在营销叙事层面。

## 最终推荐

**适合用的人**：① 本就重度使用 Yahoo Finance / Sports / Mail 的美国用户——个性化红利和垂直整合能立刻见效；② 厌倦了 AI 把来源藏起来、希望一眼看到并点进原始网页做核验的研究者、记者、SEO 从业者；③ 追求零成本、不想为 AI 搜索订阅付费的务实派。

**不适合用的人**：① 美国以外用户（含中国大陆）——目前根本用不上，中文搜索请选秘塔或 Felo；② 需要 API、程序化集成或多语言能力的开发者与团队；③ 期待一款能力上碾压 Perplexity 的「杀手级」产品的人——Scout 目前是「合格且有态度」，而非「惊艳」。

一句话：Scout 是雅虎迄今最有说服力的一次翻身尝试，它的价值不在模型有多强，而在**「把链接当主角」这一克制而诚实的产品姿态**。能否从「老用户的顺手工具」长成「新用户主动选择的答案引擎」，取决于它能否走出美国 beta、补齐 API 与多语言，并拿出经得起第三方验证的准确率数据。

---

**评测声明**：本文基于公开信息与第三方实测报道撰写，作者未获得 Yahoo Scout 美国 beta 访问权限，所有性能与体验描述均引用 The Verge、awesomeagents、Search Engine Land、Fortune 等来源并已在文中标注。所有数据来自官方报道和独立评测，本文不含付费推广。
