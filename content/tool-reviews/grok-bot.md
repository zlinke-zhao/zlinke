---
id: grok-bot
title: "Grok 深度评测：马斯克的叛逆AI助手，实时联网真有那么神"
date: "2026-10-05"
category: "AI对话助手"
rating: 4.2
price: "免费起步；SuperGrok $30/月（年付等效$25/月），Heavy档$300/月"
subtitle: "从 Grok 4.6 旗舰模型、实时 X 数据到 SuperGrok 全系价格，看 xAI 能否撼动 ChatGPT 与 Claude"
url: "https://grok.com"
pros:
  - "实时联网+原生 X 数据：答案直接嵌入一手帖文与互动量，突发新闻与舆论追踪几乎无敌"
  - "旗舰 Grok 4.6 推理硬实力第一梯队：GPQA Diamond 87.7%、AIME 2025 达94.3%、MATH-500 99.0%"
  - "多模态全栈同框：文本/图像/语音/视频/文件一处搞定，Grok Build 还能生成网站与并行 Agent 工作流"
  - "价格阶梯清晰：免费档可用，SuperGrok $30/月对标全功能，X Premium+ $40 打包社交权益"
cons:
  - "主付费档 $30 高于 ChatGPT/Claude/Gemini 的 $20 档，纯性价比处于劣势"
  - "生态与工具链仍小于 OpenAI/Anthropic，企业集成较晚，Grok 4.5 曾因欧盟 AI 法案在27国延期上线"
  - "内容安全争议缠身：图像生成引发诉讼、美国国会质询及欧盟/英国/加拿大监管调查，少过滤风格不适合合规敏感场景"
  - "质量稳定性不如头部对手，长文与精细创作偶有翻车；知识截止 2026-02-01，离网信息全靠实时检索"
alternatives:
  - { name: "ChatGPT", slug: "chatgpt", reason: "综合生态最完整、插件与 GPTs 丰富，$20 起步性价比更高" }
  - { name: "Claude", slug: "claude", reason: "长文、代码与 agentic 工作最稳，适合严肃生产场景" }
  - { name: "Gemini", slug: "gemini", reason: "1M+ 上下文且打通 Google 生态，同等价位上下文更大" }
  - { name: "Perplexity", slug: "perplexity", reason: "纯实时搜索与研究场景更专注，引用溯源更干净" }
---

## 一句话总结

如果你重度使用 X（推特）、需要追突发新闻和实时舆论，或者就喜欢一个「不那么无聊、敢说真话」的助手，Grok 是目前独一档的选择；但如果你要的是最稳的代码/长文生产力和最好的性价比，ChatGPT、Claude 仍然更省心。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>情况</th></tr>
  </thead>
  <tbody>
    <tr><td>开发方</td><td>xAI（埃隆·马斯克，2023年7月创立）</td></tr>
    <tr><td>最新模型</td><td>Grok 4.6（2026-08-12 发布；2026-09-21 已宣布更强的 Grok 4.7）</td></tr>
    <tr><td>上下文窗口</td><td>500K token（Grok 4.6 / 4.5）；Grok 4.3 / 4.20 达 1M token</td></tr>
    <tr><td>知识截止</td><td>2026-02-01（离网信息靠实时检索）</td></tr>
    <tr><td>价格区间</td><td>免费 ~ $300/月（SuperGrok Heavy）</td></tr>
    <tr><td>支持平台</td><td>Web、iOS、Android、X 内置、Microsoft Office 与 Google Workspace 插件</td></tr>
    <tr><td>用户口碑</td><td>App Store 类页面显示约 5000万+ 下载、270万次评分（4.8/5）；第三方榜单 4.7/5</td></tr>
    <tr><td>API 定价</td><td>Grok 4.6：$2/百万输入 token、$6/百万输出 token、缓存命中 $0.5/百万</td></tr>
  </tbody>
</table>

数据来源：xAI 官方模型页与发布说明（x.ai/news，2026-09）、ai-toolbox.co Grok 模型与价格指南（2026-09-15 校验）、极客范 Grok 4.6 实测（jikefan.com）、Oracle OCI 文档。

## 核心功能评测

**1. 实时 X + 网页检索（评分 5/5）**
Grok 最大的差异化就是「活数据」。它同时扫网页和 X 全量信息流，答案里直接把相关帖文、互动数据嵌进来，你可以顺着这条线继续追问。问一个正在发生的事，它给的不是上一年训练数据里的陈词，而是一手来源。对媒体、投研、舆情监控这类「要快、要新」的场景，这一点目前没有对手能平替。

**2. 旗舰模型 Grok 4.6 推理（评分 4.5/5）**
Grok 4.6 于 2026-08-12 发布，定位「为代码和一切而生」，上下文 500K token，重点强化了长程 Agent 和交互式视觉工作。基准上：GPQA Diamond 87.7%、AIME 2025 最高 94.3%、MATH-500 99.0%、LiveCodeBench 81.9%——STEM 与代码硬实力稳居第一梯队。9 月宣布的 Grok 4.7 进一步主打编码与知识工作「速度翻倍、价格减半」。扣分点在于质量稳定性，长文和精细创作偶有翻车。

**3. 多模态与 Grok Build（评分 4/5）**
文本、图像、语音、视频、文件（PDF/表格/代码/音频）都能在同一个对话框里处理。图像生成走 Imagine Image 2.0，视频走 Imagine Video 1.5（最高 1080p、支持文/图/语音参考）。更关键的是 Grok Build：一个面向编码与自动化的智能体，能生成网站、App、游戏和交互式看板，还能把任务分发到数百个并行 Agent 跑工作流。开发者侧通过 xAI API 控制台对接官方 SDK 即可。能力很全，但工作流编排的成熟度仍在新陈代谢期。

**4. 语音与跨端集成（评分 4/5）**
语音往返压到亚秒级、可中途插话打断；Voice Transcribe 2.0、Voice Think Fast 2.0 已上线。集成侧进展很快：已落地 Microsoft Word/PowerPoint/Excel 插件、Google Workspace 插件、GitHub Copilot、Cursor（全档）、Amazon Bedrock、Microsoft Foundry、Gemini Enterprise Agent Platform，以及 OpenRouter/Vercel/Cloudflare 等网关。这意味着 Grok 正从「聊天机器人」变成「嵌进你工作流里的智能体」。

## 价格方案

<table>
  <thead>
    <tr><th>方案</th><th>月费</th><th>年费（等效月费）</th><th>关键权益</th></tr>
  </thead>
  <tbody>
    <tr><td>Free</td><td>$0</td><td>—</td><td>Grok 4.6、图像生成、语音模式、Grok Build、连接器、限额联网检索</td></tr>
    <tr><td>SuperGrok Lite</td><td>$10</td><td>$100（$8.33）</td><td>专家模式、2倍对话长度、图像/视频生成尝鲜、提额</td></tr>
    <tr><td>SuperGrok</td><td>$30</td><td>$300（$25）</td><td>Grok Bot、5倍对话长度、720p 视频最长30秒、更长语音、更快回复</td></tr>
    <tr><td>SuperGrok Plus</td><td>$100</td><td>$1000（$83.33）</td><td>1080p 视频、全模块更高额度、高峰优先、抢先体验新功能</td></tr>
    <tr><td>SuperGrok Heavy</td><td>$300</td><td>$3000（$250）</td><td>最大额度与最快速度、更多并行 Agent、含 X Premium+、专属支持</td></tr>
    <tr><td>SuperGrok Business</td><td>$30/席</td><td>$300/席（$25）</td><td>团队共享、集中计费、席位管理、默认退出训练</td></tr>
    <tr><td>X Premium+</td><td>$40</td><td>$395</td><td>含 SuperGrok + X 平台权益（蓝标、减广告、创作者变现）</td></tr>
    <tr><td>X Premium</td><td>$8</td><td>$84</td><td>含 Grok 4（X 内使用）</td></tr>
  </tbody>
</table>

API 另按 token 计费：Grok 4.6 输入 $2/百万、输出 $6/百万、缓存命中 $0.5/百万（来源：jikefan.com Grok 4.6 速查、ai-toolbox.co 价格指南）。年付相当于「买十送二」，SuperGrok 年付省 $60、Heavy 年付省 $600。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Grok（SuperGrok $30）</th><th>ChatGPT Plus（$20）</th><th>Claude Pro（$20）</th><th>Gemini Advanced（$19.99）</th></tr>
  </thead>
  <tbody>
    <tr><td>实时 X/社媒数据</td><td>原生强</td><td>弱</td><td>无</td><td>部分</td></tr>
    <tr><td>上下文窗口</td><td>500K</td><td>256K–1M</td><td>200K–1M</td><td>1M+</td></tr>
    <tr><td>主付费档价格</td><td>$30</td><td>$20</td><td>$20</td><td>$19.99</td></tr>
    <tr><td>代码/STEM 硬实力</td><td>第一梯队</td><td>强</td><td>强</td><td>强</td></tr>
    <tr><td>内容过滤风格</td><td>少过滤（有争议）</td><td>中等</td><td>中–高</td><td>中等</td></tr>
    <tr><td>生态/工具链</td><td>成长中</td><td>最完整</td><td>完整</td><td>完整（Google）</td></tr>
  </tbody>
</table>

客观说：Grok 在「实时性」上是独苗，在「推理硬指标」上已追平头部，但在「价格」和「生态成熟度」上仍落后。主档 $30 比三家的 $20 档贵了 50%，这是它最常被诟病的一点。

## 优势与短板

**优势**
- 实时性是真护城河。对做舆情、投研、媒体和「追热点写稿」的人，Grok 把 X 活数据直接喂进答案，效率和一手程度远超靠检索增强的对手。
- 模型不虚。Grok 4.6 的 STEM/代码基准已进第一梯队，4.7 又在追编码与知识工作，长期使用不用担心「智商掉队」。
- 形态进化快。从聊天到 Grok Bot 常驻智能体、Grok Build 工作流、再到 Office/Workspace 插件，xAI 明显在把 Grok 做成「工作流里的同事」而非「对话框里的工具」。

**短板**
- 贵。主档 $30、Heavy $300，对只想日常聊两句和写写稿的用户不划算。
- 合规风险。图像生成引发的诉讼与多国监管调查，加上「少过滤」的默认风格，让它在企业合规、儿童、品牌内容等敏感场景需要谨慎。
- 稳定性与生态。精细长文创作偶有翻车，第三方集成虽在补齐但总体晚于 OpenAI/Anthropic；欧盟上线曾受阻也提示其合规节奏偏慢。

## 最终推荐

**这些人该用 Grok：**
- X/社媒重度用户、自媒体运营、投研与舆情监控者——实时 X 数据是无可替代的刚需。
- 想要「不那么无聊、敢说真话」、又要有硬推理的助手的人，Grok 的个性 + 实力组合很对味。
- 已经在用 X Premium+（$40）的人，等于白送 SuperGrok，没有理由不用。

**这些人先别急着掏钱：**
- 只需要稳定写代码、写长文、跑 agentic 工作流的生产力用户——Claude、ChatGPT 在 $20 档更稳更省。
- 企业合规/品牌内容场景——内容安全争议是现实风险，建议等监管落地、策略明确后再评估。
- 预算敏感的个人用户——免费档额度偏紧，付费档又比主流贵一截，先用竞品 $20 档更划算。

**怎么选档：** 大多数个人选 SuperGrok $30/月（年付 $25）就够全功能；只在 X 上顺手用、要蓝标和减广告就 X Premium+ $40；真要做长程 Agent、要最高额度再考虑 Heavy $300。开发者按 API token 计费更灵活，Grok 4.6 $2 输入 / $6 输出在旗舰模型里价格并不离谱。

---

**评测声明**：本文基于作者实际使用和公开信息撰写。价格与模型规格来自 xAI 官方页面（x.ai/news、grok.com/plans、docs.x.ai）、ai-toolbox.co Grok 指南（2026-09-15 校验）、极客范 Grok 4.6 实测及 Oracle OCI 文档；评分为作者根据实时性、推理基准、多模态完整度、价格与生态成熟度综合给出的主观评价。本文不含付费推广。
