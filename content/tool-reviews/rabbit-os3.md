---
id: rabbit-os3
title: "Rabbit OS3 深度评测：免费编排层加自带模型密钥，把AI Agent装进你已有的电脑"
date: "2026-10-14"
category: "AI工作台"
rating: 4.3
price: "免费（编排层不收月费）；BYOK 自带模型密钥，按 token 计费给模型方；r1 硬件 199 美元售完即止，无 R2"
subtitle: "从卖159美元橙色盒子到做纯软件，Rabbit 这次的反转是真诚意还是又一次画饼"
url: "https://rabbit.tech"
pros:
  - "编排层永久免费、BYOK 不被厂商锁定，重 agentic 任务反而比订阅更省、轻量近乎零成本"
  - "单一连续对话加跨设备跨通道记忆，手机 Telegram 就能指挥家里电脑干活，库内体验稀缺"
  - "不替代任何模型或硬件，你已有的 Claude/Codex/OpenRouter/本地 Ollama 都能接，对话中换模型不丢记忆与技能"
  - "公开技能 URL 即装即用，零命令行门槛，普通人也能给控制电脑的 Agent 扩展能力"
cons:
  - "仍是 beta/技术预览（版本号约 0.1.0），条款明写 experimental、probabilistic，重要工作暂不宜托付"
  - "隐私面偏大：对话与记忆存 Rabbit 服务器，任务 prompt 经 Rabbit 转发给模型方，合同文本等于同时过两家公司"
  - "品牌信任待重建：R1 当年被 Wired 打 3/10，且敏感动作边界未公开、技能 URL 即装有供应链风险"
alternatives:
  - { name: "OpenAI Dots", slug: "openai-dots", reason: "想要最强模型 GPT-6 Astra 且愿付月费、要常驻云电脑跨 4000+ 应用的选 Dots" }
  - { name: "Nami", slug: "nami", reason: "想完全免费开源、只用你已有 CLI 额度、不在意厂商编排费的选 Nami" }
  - { name: "Agent OS", slug: "agent-os", reason: "想要最完整本地元工作台（分层记忆加知识库加 Cron 续跑加消息通道）且信任开源的选 Agent OS" }
  - { name: "ToDesk AI", slug: "todesk-ai", reason: "想远控加执行融合、微信/企微/飞书远程指挥电脑、国内可用且零门槛的选 ToDesk AI" }
---

## 一句话总结
Rabbit OS3 适合「已有模型 API Key、厌恶月费、想用手机远程指挥电脑干琐事」的人；不适合把重要或敏感工作托付给第三方服务器的企业用户。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Rabbit Inc.（圣莫尼卡；创始人兼 CEO Jesse Lyu，YC 校友、前 Raven/Baidu）</td></tr>
    <tr><td>公司体量</td><td>累计融资约 6000 万美元，团队约 15 人；R1 累计出货 10 万+ 台、退货率低于 5%、硬件毛利约 45%–50%（据 TechSpot 对 Lyu 的采访）</td></tr>
    <tr><td>正式发布</td><td>2026-09-22 全面开放（GA），此前为邀请制 Beta</td></tr>
    <tr><td>当前版本状态</td><td>技术预览 / beta；官方条款标注 experimental、probabilistic；TheAI 标注版本号约 0.1.0</td></tr>
    <tr><td>价格模式</td><td>免费，编排层不收月费；BYOK 按 token 自费给模型方；无企业版 / 用量包档</td></tr>
    <tr><td>支持平台</td><td>Windows / macOS / Linux 桌面 Agent 加云端编排；r1 硬件为可选入口</td></tr>
    <tr><td>设备上限</td><td>单账号最多 5 台节点（个人电脑 / 云虚拟机 / r1）</td></tr>
    <tr><td>接入通道</td><td>Web 工作台、Telegram、iMessage / RCS / SMS、r1</td></tr>
    <tr><td>模型接入</td><td>Anthropic、OpenAI、OpenRouter、Ollama、Z.ai（TheAI 另列 Gemini / Grok / DeepSeek / Mistral）</td></tr>
    <tr><td>第三方评分</td><td>U365 CI-First Review 给 4.5/5 并首发光 Humics-Risky 徽章；TheAI 编辑实测「可以玩，先别托付重要工作」</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 云端编排 + 本机执行（评分 4.2）**
OS3 的架构很清晰：Rabbit 云负责编排与记忆，每台被控机器装一个本地 rabbit agent 负责读文件、跑终端、操控应用，文件不出本机。你对着聊天说目标，云决定哪台设备执行。据 Help Net Security 与 Bytevyte 的拆解，这套「云脑 + 本机手脚」的分工确实落到了产品里，不是 PPT 概念。

**2. 单一连续对话 + 跨设备记忆（评分 4.3）**
这是 OS3 最打动人的点。网页、Telegram、iMessage、RCS、SMS、r1 共用同一条带长期记忆的对话线程——在浏览器开的头，用手机短信能续上。Lyu 给 Wired 的例子很具象：供应商每周发来 Excel，他直接在手机 Telegram 上让 Agent 把数据合并进家里的主表。TechDogs 也澄清：各通道是独立线程，但共享同一份 OS3 记忆与上下文。

**3. BYOK 换模型不掉记忆（评分 4.5）**
这是 OS3 相对订阅制 Agent 的杀手锏。你自带前沿模型 / 云路由 / 本地开源模型的 API Key，对话中切换模型不丢记忆、技能与设备连接。等于把「用哪个模型」从平台承诺降格成运行时设置，彻底不被厂商锁定。University-365 与 Progressiverobot 都确认了这一点。

**4. DLAM 直接操控界面（评分 4.0）**
继承 Rabbit 的 LAM 血统，OS3 用 DLAM 读取屏幕、模拟键鼠去点没有 API 的应用。敏感动作需你确认，权限分三层：Ask Every Time / Full Access / Ask for New Permissions。但 Help Net Security 指出，Rabbit 至今没公开「哪些动作算敏感」「默认会碰到什么」，这是必须自己设边界的地方。

**5. 通用技能 URL 即装（评分 4.2）**
把任意公开技能的 URL 粘进对话，OS3 自动安装，无需命令行、无配置文件。门槛极低，但 University-365 与 Help Net Security 都提醒：这种「即装即用」跳过了你审代码的环节，对一台能控制电脑的 Agent 而言是实打实的供应链风险。

## 价格方案

<table>
  <thead>
    <tr><th>费用形态</th><th>谁付推理账单</th><th>成本可预测性</th><th>厂商锁定</th></tr>
  </thead>
  <tbody>
    <tr><td>传统月订阅（如 OpenAI Dots 100–500 美元每月）</td><td>厂商吸收（封顶）</td><td>高</td><td>高</td></tr>
    <tr><td>积分 / 任务包（如 MOOGH 1 美元=60 积分）</td><td>用户预付</td><td>中</td><td>高</td></tr>
    <tr><td><b>Rabbit OS3 BYOK</b></td><td>用户按 token 直付模型方</td><td>低（重任务可能超订阅）</td><td>无</td></tr>
    <tr><td>本地开源模型（Ollama 等）</td><td>用户出硬件与电费</td><td>购后高</td><td>无</td></tr>
  </tbody>
</table>

一句话：OS3 自己不收月费，靠「拒绝进入推理供应链」来避免封顶式节流——重 agentic 负载可能比订阅贵，轻量则近乎零成本。另有 r1 硬件 199 美元售完即止，无 R2；下一代 Cyberdeck（面向 vibe coding）数月内发布，将预装 OS3。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Rabbit OS3</th><th>OpenAI Dots</th><th>Nami</th><th>Agent OS</th></tr>
  </thead>
  <tbody>
    <tr><td>形态</td><td>云端编排 + 本机 Agent</td><td>常驻独立云电脑</td><td>本地 Agent 调度层</td><td>本地优先元工作台</td></tr>
    <tr><td>价格</td><td>免费编排，BYOK 自费</td><td>100–500 美元每月</td><td>免费开源（MIT/Apache）</td><td>开源免费（Apache-2.0）</td></tr>
    <tr><td>记忆归属</td><td>Rabbit 服务器</td><td>OpenAI 云端</td><td>本机</td><td>本机</td></tr>
    <tr><td>设备 / 模型</td><td>最多 5 台，换模型不丢记忆</td><td>独立云电脑跨 4000+ 应用</td><td>你已有 CLI 额度</td><td>8 种 CLI 跨设备</td></tr>
    <tr><td>最大差异</td><td>不收月费加 URL 即装技能</td><td>GPT-6 Astra 最强模型</td><td>不生产 Agent 只编排</td><td>分层记忆加知识库加 Cron 续跑</td></tr>
  </tbody>
</table>

## 优势与短板

**优势**已在 pros 列明，核心是「免费编排 + 不被锁定 + 跨设备记忆 + 零配置扩展」四件套，对预算敏感又想尝鲜 agentic OS 的人几乎零门槛。尤其「手机远程指挥电脑干琐事」这件事，库内同类里能做到的完整度少见。

**短板**要坦诚说三点。第一，它仍是 beta：条款明写 experimental、probabilistic，可能产出非预期结果，不应用于无人值守、安全关键或生产环境。第二，隐私面偏大——对话与记忆存 Rabbit 服务器（账号级、不可在 OS3 内开关），任务 prompt 还会经 Rabbit 转发给模型方，等于一份要 summarizes 的本地合同文本同时暴露在两家公司面前。第三，品牌信任要靠时间重建：R1 当年被 Wired 打 3/10，加上「敏感动作边界未公开」「技能 URL 即装绕过审查」两处安全隐患，谨慎是必要的。

## 最终推荐

**这些人该用**：高频使用 AI Agent、手里有模型 API Key、厌恶月费的人；需要手机远程让电脑干零碎重复活（整理下载目录、按规则改名归档、合并多张表格、跨站采集整理）的人；想先低成本的价体验「agentic OS」概念的人。

**这些人先别用**：要把重要或敏感工作托付给 Agent 的企业用户；对「记忆存第三方服务器、prompt 经第三方转发」零容忍的隐私严苛者；期待开箱即稳定、不想踩 beta 坑的普通用户。

**上手建议**：先用 Web 版免安装试水，只在「指定文件夹」授权、敏感动作设成 Ask Every Time；别急着把技能 URL 一股脑装进去，先看清来源；真要长期用，本地 Ollama 是兼顾隐私与零边际成本的最佳搭配。

---

**评测声明**：本文基于作者实际使用和公开信息撰写。事实来源包括 Rabbit 官网与 OS3 支持页、PR Newswire 官方通稿（2026-09-22）、Wired / The Verge / TechSpot / Help Net Security / AsumeTech / Bytevyte / Progressiverobot / AIinContext / University-365 / TheAI 等多家独立报道与评测。所有数据来自官方文档和独立评测。本文不含付费推广。
