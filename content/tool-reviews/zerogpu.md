---
id: zerogpu
title: "ZeroGPU 深度评测：把高流量推理从 frontier 显卡上卸载下来的边缘推理云"
date: "2026-08-20"
category: "AI编程开发"
rating: 4.1
price: "免费 agent 额度 / 按 token 计费（qwen3-30b $0.05/$0.30 每百万 token 起）"
subtitle: "专用小模型 + 全球边缘网络，标榜降本 50%+、提速 10 倍，OpenAI 兼容一行接入，但它是新玩家，你敢上生产吗"
url: "https://zerogpu.ai"
pros:
  - "价格极具侵略性：文本分类/PII 等小模型统一 $0.02/$0.05 每百万 token，qwen3-30b-a3b 仅 $0.05/$0.30，比多数 GPU 云按小时计费低一个数量级"
  - "OpenAI 兼容：仅改 base URL 并加 x-api-key/x-project-id 头，现有 OpenAI SDK 一行切换，无需重构代码"
  - "边缘加云混合架构：号称 100K+ 边缘设备、11 个全球节点，小高量任务就近执行，分类与信号提取声称提速 10 倍"
  - "Serverless 无闲置成本加 agent 免费额度：无配置、无闲置费，且给 AI agent 提供免注册免费额度，贴合 agent 经济"
cons:
  - "成立时间短、公开背景薄弱：官网未披露创始人/融资/成立时间，第三方独立评测几乎为零，可靠性与 SLA 无从验证"
  - "定位偏窄：主打专用小模型分流 routine 任务，复杂推理仍须交给 frontier 模型，GLM-5.2 在它家也要 $1.10/$3.50 每百万 token，并不便宜"
  - "支付机制偏实验性：agent 商店走 x402/MPP 加密支付，普通企业采购与合规对接路径不清晰；边缘加云回退意味着延迟有波动"
alternatives:
  - { name: "DeepSeek", slug: "deepseek", reason: "已锁定 DeepSeek 系列模型时，直接调官方 API 省去中间层，零额外路由成本" }
  - { name: "Claude", slug: "claude", reason: "当任务需要 frontier 级复杂推理或长上下文时，小模型分流方案并不适用，应交给 Claude 这类旗舰" }
  - { name: "Gemini", slug: "gemini", reason: "需要 Google 系推理与多模态能力时的 frontier 备选，补足 ZeroGPU 不擅长的重推理场景" }
  - { name: "Kimi", slug: "kimi", reason: "月之暗面开源权重模型，国内网络可直连，作为国产高量推理的对照选项" }
---

## 一句话总结
ZeroGPU 适合**已经被 frontier 模型账单压得喘不过气、且大量流量是分类/审核/抽取/路由这类结构化任务**的开发者与 Agent 团队；如果你要的是复杂推理、长上下文或可被审计的企业级 SLA，它现在还撑不住。

## 核心数据一览

<table>
  <tr><th style="background:#4a90d9;color:#fff;">项目</th><th style="background:#4a90d9;color:#fff;">内容</th></tr>
  <tr><td>产品名</td><td>ZeroGPU（zerogpu.ai）</td></tr>
  <tr><td>定位</td><td>AI 推理降本层 / 边缘推理云（AI 基础设施）</td></tr>
  <tr><td>开发商</td><td>ZeroGPU（公开资料未披露创始人、融资与成立时间）</td></tr>
  <tr><td>核心架构</td><td>专用小模型(SLM/nano) + 开源权重模型 + frontier 模型，边缘节点 + 云回退</td></tr>
  <tr><td>全球边缘节点</td><td>11 个（SF / NYC / 圣保罗 / 伦敦 / 法兰克福 / 迪拜 / 孟买 / 新加坡 / 东京 / 首尔 / 悉尼），号称 100K+ 边缘设备</td></tr>
  <tr><td>API 形态</td><td>OpenAI 兼容（/v1/chat/completions，切换 base URL + 携带 x-api-key / x-project-id 头）</td></tr>
  <tr><td>计费方式</td><td>按 token 计费、按模型定价；agent 免注册免费额度</td></tr>
  <tr><td>模型目录</td><td>ZLMs（分类 / 意图 / 审核）+ 开源权重（DeepSeek / GLM / Qwen / GPT-OSS / Llama / LiquidAI / GLiNER / DeBERTa）</td></tr>
  <tr><td>价格区间</td><td>小模型 $0.02/$0.05 每百万 token 起；GLM-5.2 达 $1.10/$3.50 每百万 token</td></tr>
  <tr><td>客户与规模</td><td>未公开（产品较新）</td></tr>
</table>

## 核心功能评测

<table>
  <tr><th style="background:#4a90d9;color:#fff;">功能</th><th style="background:#4a90d9;color:#fff;">评分</th><th style="background:#4a90d9;color:#fff;">说明</th></tr>
  <tr><td>边缘 + 云混合推理路由</td><td>4.5 / 5</td><td>按负载在边缘设备、边缘服务器与云之间智能调度，小高量任务就近跑</td></tr>
  <tr><td>OpenAI 兼容接入</td><td>4.5 / 5</td><td>仅换 base URL 加两个请求头，现有 OpenAI SDK 一行切换，迁移成本极低</td></tr>
  <tr><td>专用小模型 ZLMs 目录</td><td>4.0 / 5</td><td>自研分类 / 意图提取 / 内容审核模型，外加主流开源权重，覆盖结构化任务</td></tr>
  <tr><td>用量 / 延迟 / 省钱可视化</td><td>3.5 / 5</td><td>官方宣称提供项目级用量、延迟与节省分析，但独立复测证据较少</td></tr>
  <tr><td>Agent 商店与免费额度</td><td>4.0 / 5</td><td>免注册即可拿免费额度，agent 可自主采购，概念新颖、上手快</td></tr>
</table>

**1. 边缘 + 云混合推理路由（4.5/5）**
ZeroGPU 的核心主张是「用对的计算跑对的活」：把分类、审核、抽取、PII 检测、路由这类高量、低复杂度的任务，从昂贵的 frontier 显卡上「卸载」到专用小模型，再借由全球边缘网络就近执行，复杂推理才回退云端。官方给出 50%+ 降本、分类 / 信号提取最高 10 倍提速的数字——这些属于厂商口径，文中如实标注，独立基准尚未见公开复测。

**2. OpenAI 兼容接入（4.5/5）**
对开发者最友好的一点：它不是另起一套 SDK，而是直接兼容 OpenAI 的请求格式。把请求发往 `https://api.zerogpu.ai/v1/chat/completions`，带上 `x-api-key` 与 `x-project-id` 两个头即可，模型名换成它的目录（如 `zlm-v1-iab-classify-edge`）。对已经用 OpenAI SDK 搭好管线的团队，切换成本几乎为零。

**3. 专用小模型 ZLMs 目录（4.0/5）**
目录分两层：一是 ZeroGPU 自研的 ZLMs（内容分类、意图与信号提取、内容审核），二是主流开源权重（DeepSeek、GLM、Qwen、GPT-OSS、Llama、LiquidAI、GLiNER、DeBERTa）。前者解决「开箱即用的生产级结构化任务」，后者保证「想上大模型也有得选」。

**4. 用量 / 延迟 / 省钱可视化（3.5/5）**
官方承诺项目级用量、单请求 / 单模型延迟与成本可见性，这对成本敏感团队很有价值。但作为新平台，这些看板是否稳定、数据是否准确，尚缺第三方长期使用报告佐证。

**5. Agent 商店与免费额度（4.0/5）**
ZeroGPU 明确「sells to AI agents」：agent 商店（agents.zerogpu.ai）发布价格与支付指引，agent 可免注册、免邮箱直接拿免费额度并自主采购，支付走 x402 / MPP / 信用卡。这个设计非常贴合 Agent 经济，但对企业采购与合规来说路径偏新。

## 价格方案

按 token 计费、按模型定价，下面是官网公开目录中的代表型号（单位：美元 / 每百万 token）：

<table>
  <tr><th style="background:#4a90d9;color:#fff;">模型</th><th style="background:#4a90d9;color:#fff;">类型 / 参数</th><th style="background:#4a90d9;color:#fff;">输入 $/1M</th><th style="background:#4a90d9;color:#fff;">输出 $/1M</th></tr>
  <tr><td>zlm-v1-iab-classify-edge</td><td>文本分类 90M</td><td>0.02</td><td>0.05</td></tr>
  <tr><td>zlm-v1-moderation-edge</td><td>文本审核 86M</td><td>0.02</td><td>0.05</td></tr>
  <tr><td>gliner-multi-pii-v1</td><td>PII 检测 300M</td><td>0.02</td><td>0.05</td></tr>
  <tr><td>llama-3.1-8b-instruct-fast</td><td>摘要 8B</td><td>0.02</td><td>0.05</td></tr>
  <tr><td>qwen3-30b-a3b-fp8</td><td>生成 30B</td><td>0.05</td><td>0.30</td></tr>
  <tr><td>deepseek-v4-flash</td><td>生成 284B</td><td>0.07</td><td>0.14</td></tr>
  <tr><td>gpt-oss-120b</td><td>生成 120B</td><td>0.15</td><td>0.60</td></tr>
  <tr><td>glm-5.2</td><td>生成 753B</td><td>1.10</td><td>3.50</td></tr>
  <tr><td>LFM2.5-1.2B-Thinking</td><td>推理 1.2B</td><td>0.02</td><td>0.05</td></tr>
</table>

可以看出定价逻辑：小模型 / nano 模型统一压在 $0.02/$0.05 每百万 token，用于高量结构化任务极其便宜；真正上到 GLM-5.2 这种 753B 旗舰，价格反而逼近甚至超过一些专业推理云，所以它「降本」的前提是——你愿意把 routine 任务从小模型跑。免费额度方面，agent 端提供免注册免费 allowances，具体数值未在公开页面披露。

## 与竞品对比

<table>
  <tr><th style="background:#4a90d9;color:#fff;">维度</th><th style="background:#4a90d9;color:#fff;">ZeroGPU</th><th style="background:#4a90d9;color:#fff;">fal.ai</th><th style="background:#4a90d9;color:#fff;">Replicate</th><th style="background:#4a90d9;color:#fff;">HF Inference Providers</th></tr>
  <tr><td>定位</td><td>边缘小模型分流</td><td>生成媒体 serverless</td><td>开源模型 API 市场</td><td>45k+ 模型路由（透传）</td></tr>
  <tr><td>计费</td><td>按 token / 模型</td><td>按输出（$0.025-0.05/图）</td><td>按秒（$0.0001-0.0112/s）</td><td>透传 + 额度（Free $0.10/月）</td></tr>
  <tr><td>代表价</td><td>qwen3-30b $0.05/$0.30</td><td>Flux $0.025-0.05/图</td><td>SDXL 约 $0.0023/图</td><td>路由 Groq/Fireworks 无加价</td></tr>
  <tr><td>开发体验</td><td>OpenAI 兼容一行</td><td>Python/JS SDK</td><td>cog / API</td><td>统一 /v1 端点</td></tr>
  <tr><td>强项</td><td>高量结构化任务降本</td><td>实时图像 / 视频</td><td>模型广度</td><td>无加价 + 生态</td></tr>
  <tr><td>弱项</td><td>新、无 SLA 验证</td><td>仅媒体、非 GDPR</td><td>共享队列波动</td><td>依赖第三方供应商</td></tr>
</table>

横向看，ZeroGPU 的差异化在于「边缘 + 专用小模型」的降本叙事，而不是模型广度（这点 Replicate 最强）或生成媒体性能（这点 fal.ai 最强）。如果你已经在 Hugging Face 生态里，HF Inference Providers 的透传无加价也很有吸引力；ZeroGPU 的价值则在于它把「分流出 routine 任务」做成了开箱即用的产品化能力。

## 优势与短板

**优势（展开）**
价格端，小模型 $0.02/$0.05 每百万 token 的水平，对日志分类、评论审核、PII 脱敏、意图路由这类「一天几百万次、每次几十字」的场景，账单会比按小时租 GPU 或按次调 frontier 模型低一个数量级。工程端，OpenAI 兼容意味着你几乎不用改代码就能把一部分流量切过去做 A/B。架构端，边缘就近执行对延迟敏感型业务（实时内容审核、广告意图提取）是实打实的卖点。

**短板（展开）**
第一，它太年轻。官网没有创始人、融资、成立时间的公开信息，第三方独立评测几乎检索不到，意味着「稳定性、可用性、SLA」目前只能信厂商自述。第二，定位窄——它自己反复强调「frontier 模型负责推理，ZeroGPU 负责其它一切」，说明它很清楚自己不是通用推理底座；一旦你真要跑 GLM-5.2 这种旗舰，价格并不美丽。第三，支付走 x402 / MPP 加密方案，对需要发票、合同、合规审查的传统企业来说，采购路径还不够成熟；边缘 + 云回退的架构也意味着单次延迟会有波动，不适合对尾延迟有硬性要求的同步链路。

## 最终推荐

**值得用的人群：**
- 已被 GPT/Claude 账单压垮，且流量里大量是分类、审核、抽取、路由、摘要的团队；
- 已经基于 OpenAI SDK 搭好管线、想低成本做模型分流 A/B 的开发者；
- 做 AI Agent 产品、需要给 agent 接一个便宜推理后端、且不排斥新支付机制的团队。

**暂时不建议上生产的人群：**
- 任务本质是复杂推理、长上下文、强多模态，必须 frontier 级模型兜底的业务；
- 对 SLA、数据合规、供应商背景有硬性审计要求的企业；
- 不愿意接触 x402 加密支付、需要标准企业采购与发票流程的团队。

**实操建议**：先用 agent 免费额度把一小块「分类 / 审核」流量切过去跑两周，对比单位成本与尾延迟；确认稳定后再逐步扩大。复杂推理坚决留给 Claude / Gemini / DeepSeek 等旗舰，不要指望用小模型硬扛。

---

**评测声明**：本文基于 ZeroGPU 官方文档与公开定价页（zerogpu.ai 及 agents.zerogpu.ai 商店）撰写，所有价格与架构数据均来自一手官方来源；厂商宣称的「降本 50%+、提速 10 倍」等数字已标注为厂商口径，独立基准尚未见公开复测。本文不含付费推广，作者未以企业身份亲测其生产稳定性，相关结论以官方公开信息为准。
