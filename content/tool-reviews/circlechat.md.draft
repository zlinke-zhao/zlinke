---
id: circlechat
title: "CircleChat 深度评测：把一群 AI Agent 管成一家公司"
date: "2026-09-12"
category: "AI编程开发"
rating: 4.2
price: "自托管免费（MIT） / Cloud $29 起每月每工作空间，无 token 加价"
subtitle: "开源 Agent 协作工作空间：Slack 式频道加看板，再加一个 LLM 法官给每个交付物签字"
url: "https://circlechat.co"
pros:
  - "MIT 开源可自托管，数据完全自主，且自带模型 Key 不抽 token 加价"
  - "独立 LLM Judge 验证门，交付物先验收再标记完成，避免 Agent 互相盖章"
  - "部署、支付、外发邮件等风险动作强制人工审批，企业可控"
  - "按工作空间平价计费，比 Slack、Teams 的无限 Agent 方案便宜"
cons:
  - "起步需约 15 分钟配置 Docker 与 Agent、模型 Key，有工程门槛"
  - "Starter 仅 3 个 Agent、Team 仅 10 个，重度协作必须上 Scale"
  - "产品年轻，独立第三方长期评测样本薄，且无原生移动端"
alternatives:
  - { name: "Coze", slug: "coze", reason: "想低代码快速搭一个对话或工作流 Agent、不需要频道看板式协作时更省力" }
  - { name: "OpenClaw", slug: "openclaw", reason: "个人本地优先、重视数据主权、想要最广开源 Agent 生态时更合适" }
  - { name: "Manus", slug: "manus", reason: "想把完整任务丢给单一自主 Agent 端到端跑完、而非编排一支 Agent 团队时更合适" }
  - { name: "Rowboat", slug: "rowboat", reason: "若你的 Agent 协作以写代码为主、偏多 Agent 编码编排时更对口" }
---

## 一句话总结
CircleChat 适合想用「一支 AI Agent 团队」做协作、且要求每个产出都可验证的团队；不适合只想快速搭一个聊天机器人、或不愿碰 Docker 与模型 Key 的轻量用户。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>产品形态</td><td>开源 AI Agent 协作工作空间（频道 + 看板 + 审批）</td></tr>
    <tr><td>开发商</td><td>独立团队（circlechat.co，代码以 MIT 协议开源）</td></tr>
    <tr><td>许可证</td><td>MIT（自托管免费）</td></tr>
    <tr><td>首次上线</td><td>Product Hunt 2026-07-05，当日榜单第 6 名</td></tr>
    <tr><td>定价</td><td>自托管免费 / Cloud $29 至 $199 每月每工作空间</td></tr>
    <tr><td>Product Hunt 表现</td><td>约 137 至 151 upvotes（各源口径不一），2 条评价均分 5.00/5</td></tr>
    <tr><td>支持模型</td><td>OpenAI、Anthropic、Gemini、Groq、Cerebras、DeepSeek（自带 Key）</td></tr>
    <tr><td>部署方式</td><td>云托管，或 Docker Compose 自托管（官方称树莓派 4 即可）</td></tr>
  </tbody>
</table>

> 数据来源：官方站 circlechat.co、Product Hunt / Hunted.space 收录页、ToolRadar（定价核对 2026-07-05）、AIToolbox、AITools.fyi、thistools.app。用户量与融资额官方未公开，故不杜撰。

## 核心功能评测

**1. Agent 协作频道 + 看板（评分 4.5）**
每个 Agent 在工作空间里有独立 handle、头像、角色与汇报线，和人类同处一个 Slack 式频道，共享同一块看板。你设定一个目标，Planner Agent 把它拆成带负责人与验收标准的任务，Agent 自主认领、在频道里汇报进度。比起一段无限长的群聊记录，看板让「谁在做什么、做到哪了」一目了然。实测透明度是这类工具里少有的高。

**2. 独立 LLM Judge 验证门（评分 4.5）**
这是 CircleChat 最强的差异化点。任何任务在翻到 Done 之前，都由独立的 LLM Judge 拿真实交付物对照验收标准打分；web 类产出还会跑一次确定性无头渲染检查。它直接修补了多 Agent 系统「互相盖章、产出一堆空谈」的经典失败模式。PH 评论区也有人追问 judge 会不会用和 worker 不同的模型——至少产品把「验收」这一步做成了硬门，而不是可选项。

**3. 人工审批门（评分 4.3）**
部署、支付、外发邮件等风险动作会进入审批队列并暂停，带上完整上下文等人拍板。对要接生产环境的团队这是刚需。代价是纯自主工作流会被拖慢——但这是有意的安全取舍，不是 bug。

**4. 自托管 + 自带 Key 零加价（评分 4.6）**
MIT 协议自托管完全免费，数据不出本机；云端方案也只收每工作空间的固定月费，绝不按 token 抽成。你把自己的 OpenAI / Anthropic / Gemini / Groq / Cerebras / DeepSeek 密钥贴进去，或走一个免费 fallback 网关即可。对算过 Agent 账单的人来说，「不标记加价」这五个字比任何功能都实在。

**5. 运行时适配器与审计（评分 4.0）**
提供 webhook、socket、Hermes、OpenClaw 四种运行时适配器接入自定义或容器化 Agent 栈；每次运行、消息、交付物都进审计日志，可按 Agent 看吞吐量。Agent 通过 typed action 而非裸 JSON 与系统交互。短板是这套体系默认期待你懂 Docker Compose 和版本化 Agent 定义，纯小白会被劝退。

## 价格方案

<table>
  <thead>
    <tr><th>方案</th><th>价格（每工作空间/月）</th><th>Agent 数</th><th>关键权益</th></tr>
  </thead>
  <tbody>
    <tr><td>自托管（MIT）</td><td>$0</td><td>不限</td><td>Docker Compose 部署，数据不出本机，仅需自付模型 token</td></tr>
    <tr><td>Starter</td><td>$29</td><td>3</td><td>单租户专属服务器，yourname.circlechat.co 子域</td></tr>
    <tr><td>Team（最受欢迎）</td><td>$79</td><td>10</td><td>含 Starter 全部，可绑定自定义域名</td></tr>
    <tr><td>Scale</td><td>$199</td><td>不限</td><td>含 Team 全部</td></tr>
  </tbody>
</table>

> 云端各档均含 7 天免费试用；官方明确「We never mark up tokens」。按工作空间而非按席位计费，对多成员小团队友好，但重度并行协作会被 Agent 数上限卡住。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>CircleChat</th><th>Coze</th><th>OpenClaw</th><th>Manus</th></tr>
  </thead>
  <tbody>
    <tr><td>产品形态</td><td>Agent 协作工作空间（频道+看板+Judge）</td><td>低代码 Agent 搭建平台</td><td>开源本地个人智能体</td><td>单一自主 Agent 端到端交付</td></tr>
    <tr><td>开源 / 自托管</td><td>MIT，可自托管</td><td>否（云 SaaS）</td><td>MIT，可自托管</td><td>否</td></tr>
    <tr><td>计费方式</td><td>自托管免费 / Cloud $29 起，无 token 加价</td><td>免费起步，模型按用量</td><td>软件免费，成本在模型 API</td><td>订阅 + 任务信用</td></tr>
    <tr><td>最适合谁</td><td>想用 Agent 团队做协作、要可验证产出的团队</td><td>想快速搭一个对话/工作流 Agent</td><td>重视数据主权、本地优先的个人/开发者</td><td>把一整件事丢给一个 Agent 自动跑完</td></tr>
  </tbody>
</table>

> 竞品信息取自本站点已发布的对应评测（coze / openclaw / manus）。CircleChat 的差异在于「把多个 Agent 组织成一只有验收机制的公司」，而非单 Agent 或纯搭建平台。

## 优势与短板

**优势（展开）**
开源可自托管是它最硬的底牌：数据主权 + 零 token 加价，意味着你不会因为用得久而被迫迁移或被锁。LLM Judge 验证门解决了多 Agent 协作最让人不放心的「产出可信吗」问题，比单纯群聊进了一步。人工审批门让它在生产环境里「可上」。按工作空间计费对 3 到 10 人的小队很划算。

**短板（坦诚）**
第一道坎是部署与配置：官方说约 15 分钟，但前提是你会 Docker、会填模型 Key、愿意把 Agent 定义写成版本化文件。第二道坎是 Agent 数上限——Starter 3 个、Team 10 个，真要做「公司级」并行协作得直接上 $199 的 Scale。第三，产品 2026 年 7 月才上线，Product Hunt 仅 2 条评价（均分 5.00/5，样本极小），第三方长期实测偏薄，也没有原生移动端 App。

## 最终推荐

**推荐使用的人：**
- 已经用 Claude Code、Codex、OpenClaw 等 Agent，想把它们升级成「一支有看板、有验收、有审批的团队」的开发者或小团队；
- 重视数据主权、想自托管又不想自己从零写编排层的团队；
- 跑产品发布、内容生产、客服协作这类「多角色并行、要留痕」的工作流。

**不建议使用的人：**
- 只想搭一个能聊天的机器人、不想碰 Docker 与模型 Key 的轻量用户——Coze 更省事；
- 只想把一整件事丢出去自动跑完、不想做协作编排的人——Manus 更对口；
- 需要强合规凭证（SOC 2 / HIPAA）或原生移动端的场景——当前版本还不覆盖。

**购买建议：** 先用 MIT 自托管版跑通一个 demo（成本几乎为零，只需模型 token），确认 Agent 协作范式适合你的团队后再考虑 $29 起的云端托管。不要一上来买 Scale，先用 Starter 验证工作流密度。

---

**评测声明**：本文基于作者公开资料调研与多源交叉验证撰写（官方站、Product Hunt、ToolRadar、AIToolbox、AITools.fyi、thistools.app）。所有价格、功能与上线信息均来自上述可查来源，并在文中标注口径差异。本文不含付费推广。
