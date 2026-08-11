---
id: agentsky
title: "AgentSky 深度评测：把 Claude Code 搬上云端长跑，$3/月起是话术，$121/月才是账单"
date: "2026-08-11"
category: "AI工作台"
rating: 3.6
price: "无订阅费、无席位费，注册赠 $3 额度且无需信用卡。预付额度按两条计量线扣：模型 token 按各厂商公开价计（Claude Fable 5 输入 $15 / 输出 $75 每百万 token，DeepSeek V4 Flash 低至 $0.21 / $0.42），算力按机器唤醒秒数计（1GB $0.021/小时、2GB $0.038/小时、4GB 默认机 $0.071/小时，对应常亮月上限 $15.24 / $27.16 / $51.01）。挂起与停放的 Agent 零费用，不足一分钟的碎片不计。官方估算器：Claude Fable 5 + 4GB + 每天 20 轮 + 每天唤醒 2 小时 = 月 $121.25，其中 $117 是模型、$4.25 是算力。绑定自有 Claude Pro/Max 或 ChatGPT 订阅后，符合条件的 Agent 模型侧按 $0 计"
subtitle: "库内 24 款 AI 工作台里唯一不卖 Agent、只卖 Agent 寿命的一款。CLI 与 API 的工程完成度是 fly.io 水位，但官方自己承认快照恢复是 best-effort、停放免费又抹掉了故障信号——它死了你未必知道"
url: "https://agentsky.dev"
pros:
  - "Harness 与模型彻底解耦，且换了不丢历史：hermes / claude_code / codex / openclaw 四选一，harness 软件本身免费，事后可换；模型侧 11 款逐条明码标价，从 Claude Fable 5 到 DeepSeek V4 Flash 跨两个数量级任选。这在库内 23 款绑死自家引擎的桌面 Agent 里是独一份（来源：官网 pricing 页与 docs/agent-toml 字段 type 与 llm）"
  - "开发者面是真做完了，不是营销页：npm i -g @agentsky/sky 装 CLI，sky launch 直接脚手架出 agent.toml，声明式字段覆盖 prompt、instructions、skills、customInstalls、customData；API 一个命名空间 /api/v1，发消息是裸 202、输出不走该响应，改由一条常驻 SSE 流承载，漏掉的事件可从 events 端点重放并按 event id 去重。官方原话是 CLI 只说公开 API，凡 CLI 能做的裸 API 都能做（来源：AgentSky 开发者快速上手与 CLI reference）"
  - "定价透明度在同类产品里罕见：11 款模型的输入输出单价逐条列出，算力按 1GB / 2GB / 4GB 三档给出每小时、每 24 小时与常亮月上限三个数，页面还内嵌成本估算器并标明假设是单轮约 8k 输入 + 1k 输出。同类云 Agent 平台多数只写联系销售（来源：agentsky.dev/pricing，2026-08-11 读取）"
  - "自带订阅通道才是真正的省钱路径：sky auth connect claude 会调起 claude setup-token 绑定 Claude Pro/Max，connect chatgpt 则导入本地 Codex 登录态，绑定后符合条件的 Agent 模型侧按 $0 计——也就是把账单里占 96% 的那一块直接抹平，只剩每月几美元算力（来源：CLI reference auth 章节 + pricing 页）"
cons:
  - "sky clone 不是整体搬家，官方文档写得很清楚：克隆带走 instructions、model 与不含密钥的 MCP server，never secrets or history。也就是说本地攒了半年的对话历史一条都过不去，密钥要靠 sky secrets set 重设一遍，且文档标注 Claude Code first，其余 harness 的克隆成熟度未承诺。宣传口径里的一键搬家，实际是一键搬配置"
  - "停放免费这件事顺手抹掉了故障信号，且官方尚无补救：Product Hunt 评论区原话——如果停放免费、只在工作时计费，那么一个已经悄悄停止工作的 Agent 也不花钱，而一个死掉的 Agent 和一个便宜的月份在账单上长得一模一样。挂起的、跑完的、崩了没恢复的三种 Agent 从外部看完全同构：没活动、没费用、渠道里一片安静。官网未见任何存活监测或预期节奏告警机制"
  - "快照恢复的幂等问题是厂商自己承认的：有评论者追问，若快照恰好拍在发出 WhatsApp 消息的前一刻，恢复后的 Agent 无法知道消息究竟发没发，重发和跳过都是错的，而且只有重发那种错误对收信人可见。AgentSky 的 maker 在讨论区回应说状态恢复是 best-effort、无法排除竞态，快照不应被当成外部副作用的 exactly-once 保护（来源：hunted.space 汇总的 PH 评论区原文 + chatgate.ai 对 maker 回应的转述）"
  - "公开证据极薄，且中文生态为零：截至本文发稿距发布仅 8 天，Product Hunt 上只有 1 条评价，独立评测站 VibeWatch 明确把它标为公开证据不足；渠道清单全是欧美 IM 栈，无微信、钉钉、飞书、企业微信接入。另有一处必须自行掂量的信任成本——绑定 ChatGPT 通道需要把本地 Codex 登录态上传给这家 8 天新公司"
alternatives:
  - { name: "Hermes Agent", slug: "hermes-agent", reason: "AgentSky 的默认 harness 就是它，而它本身是 Nous Research 的开源运行时。你完全可以自己找台机器部署，省掉托管这一层，代价是快照、恢复、渠道机器人全得自己维护" }
  - { name: "OpenWorker", slug: "openworker", reason: "吴恩达团队的 MIT 开源桌面 Agent，路线正相反：云触发、本地执行、强制审批，数据不出本机。如果你的顾虑是数据落在别人机器上，先看它" }
  - { name: "Manus", slug: "manus", reason: "同样是云端沙箱长跑，但 Agent 是平台自研的、你只能用它那一个。想要开箱即用完整体验而非自己拼 harness 的人，Manus 的摩擦更小" }
  - { name: "QwenPaw", slug: "qwenpaw", reason: "阿里开源的 IM 远程指挥方案，同样多渠道触达但本地部署、数据不出门，且原生支持国内 IM。国内团队要的是这个组合，不是 WhatsApp 加 iMessage" }
---

## 一句话总结

AgentSky 适合**已经在本地重度使用 Claude Code、Codex 或 OpenClaw、被合盖即断折磨过、且手上有 Claude Pro/Max 或 ChatGPT 订阅可走自带通道的技术用户**——它把一件很窄的事做得相当干净：让你的 Agent 不掉线、不失忆、随处可达。但**非技术岗、需要中文办公生态、对数据出境敏感、或指望它是一个开箱即用完整办公 Agent 的人应当绕开**：它根本不生产 Agent 能力，它只出租 Agent 的寿命，而且这份寿命目前还没有心跳监测。

## 核心数据一览

<table>
  <thead>
    <tr>
      <th style="background: #4a90d9; color: #fff;">项目</th>
      <th style="background: #4a90d9; color: #fff;">信息</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>产品定位</td><td>Managed agent as a service，托管式 Agent 运行时（不是又一个 Agent）</td></tr>
    <tr><td>官网</td><td>agentsky.dev；文档 agentsky.dev/docs；API 命名空间 agentsky.dev/api/v1</td></tr>
    <tr><td>发布时间</td><td>2026-08-03 登陆 Product Hunt，当日第一（#1 Product of the Day）</td></tr>
    <tr><td>PH 数据</td><td>各站抓取时点不同：hunted.space 最新快照 469 赞 / 60 评论，早期快照 376 赞 / 48 评论；ustack 记 441、aitoolly 记 438、launly 记 371 赞 / 40 评论。评价数仅 1 条，5.00/5</td></tr>
    <tr><td>提名人</td><td>Rajiv Ayyangar（Product Hunt 现任 CEO 亲自 hunt）</td></tr>
    <tr><td>支持 harness</td><td>hermes（默认）/ claude_code / codex / openclaw，harness 软件免费，事后可换不丢历史</td></tr>
    <tr><td>支持模型</td><td>11 款：Claude Fable 5 / Opus 5 / Sonnet 4.6，GPT-5.6 Sol / Terra / Luna，Gemini 3.5 Flash，DeepSeek V4 Pro / Flash，GLM-5.2，Kimi K3</td></tr>
    <tr><td>触达渠道</td><td>官网列 7 项：WhatsApp、iMessage、Telegram、Slack、Web、A2A 协议、CLI（第三方站 chatgate 与 aitoolly 另称含 Discord，官网首页未列，口径存疑）</td></tr>
    <tr><td>机器规格</td><td>agent.toml 可声明 vcpus = 1 / 2 / 4 / 8，memory_mb 按 256MB 步进、每 vCPU 256–2048MB；但定价页只公布到 4GB</td></tr>
    <tr><td>官方用量口径</td><td>首页称已为 Tycoon、Webjourney 两家产品支撑 10k+ agent sessions（官方口径，未经独立验证）</td></tr>
    <tr><td>数据合规</td><td>官网称支持 Zero Data Retention（ZDR）；secrets 写入后不可读回、静态加密</td></tr>
    <tr><td>未上线功能</td><td>Self-evolving（自进化）官网标注 coming soon</td></tr>
  </tbody>
</table>

## 核心功能评测

### 1. 持久运行时与故障恢复 —— 4.0/5

这是整个产品的立身之本。每个 Agent 跑成一个 managed worker，官方承诺无限长连续历史、完整时间线、快照、备份与自动恢复，沙箱秒级启动且只挂载你显式附加的工具。对长任务而言，这确实解决了社区里最土的那个办法——买台 Mac mini 挂家里当 Agent 服务器。

扣分点非常具体：**恢复的语义是 best-effort，这是厂商自己在 Product Hunt 讨论区确认的**。快照恰好拍在外部副作用执行到一半时会发生什么，官方没有承诺解决，只承诺尽力。对于会发消息、会改 CRM、会提交代码的 Agent 来说，这意味着恢复本身就是一个需要你在业务侧做幂等设计的风险点，而不是平台替你兜住的能力。

### 2. Harness 与模型自由组合 —— 4.5/5

在 `agent.toml` 里，harness 就是一个字段：`type = "hermes"`，可选 `hermes | claude_code | codex | openclaw`；模型是另一个字段：`llm = "deepseek-v4-flash"`，唯一约束是必须与 type 兼容。官网明说 no lock-in，换 harness 或换模型都不丢历史。

这个设计是它与库内其他 23 款工作台的根本分野。Claude Cowork 绑 Claude、ChatGPT Work 绑 GPT、千问办公绑通义、灵犀专业版绑 WPS 内核——它们卖的是自家模型加自家引擎的组合拳；AgentSky 把这两样都当可替换耗材，自己只守三件事：不掉线、不失忆、随处可达。

小提醒：兼容性不是全矩阵。官网首页顶栏的上新公告明写 **Kimi K3 只在 Hermes 与 OpenClaw 上可用**，所以选型时要先确认 harness 与模型的交集，别照着 11 款模型的清单想当然。

### 3. CLI、agent.toml 与 REST API —— 4.5/5

这一项是全篇最扎实的部分，而且不需要我替它吹，文档本身写得足够具体：

```bash
npm i -g @agentsky/sky
sky auth login          # 无浏览器环境用 --no-browser；CI 直接给 SKY_API_TOKEN
cd my-project
sky launch              # 自动脚手架 ./agent.toml，建 spec + 第一个 session
sky agent message my-agent "Summarize today's signups"
sky secrets set my-agent NOTION_TOKEN=secret_xxx
```

设计上有几处能看出团队真踩过分布式的坑：发消息的 `POST /api/v1/sessions/{id}/messages` 返回的是**裸 202，输出绝不搭这趟响应的车**，全部走一条常驻 SSE 流；漏掉的事件从 `GET /events` 重放，明确要求按 event `id` 去重；一轮问答的终点是读到 `turn.status_idle` 并检查 `stop_reason`。此外 `sky session interrupt` 可以中断进行中的一轮，`sky session logs -f --since 1h` 直接跟 pod 日志，`sky universe` 提供分组边界，`archive` 与 `destroy` 需要 admin scope。

`agent.toml` 的字段设计也克制：只有 `name` 必填，`type` 默认 hermes，长 markdown 可以内联三引号也可以 `prompt_file =` 指向同级文件，`[[skills]]` 支持 registry / git / package / archive 四种来源，`[[customInstalls]]` 允许跑 `pip install yfinance` 这类装包命令并单独声明 `timeoutSeconds` 与 `allowNetwork`。官方还特意说明：**这个文件从不过网，CLI 在客户端校验并内联后才调 API**。

对开发者来说，这是全篇最值得掏钱的部分。对非技术岗来说，这也是最劝退的部分——它的定位写得明明白白是 developers、engineering teams、technical founders。

### 4. 全渠道触达与跨渠道身份 —— 3.0/5

官网的承诺是 history, tools, and state follow it across every connected channel。能力清单没问题，问题是**身份归并规则从未公开**。

Product Hunt 评论区连着几位追问同一件事：用户今天在 Discord 提技术问题、明天在私聊里跟进同一件事，Agent 怎么知道是同一个人、同一件事？历史是在 Agent 层统一，还是每个平台各自维护？截至发稿，官网与文档都未给出答案。对个人自用影响不大，对想拿它做社区支持机器人的团队，这是个必须先自测的空白。

顺带一提，渠道清单本身就存在口径分歧：官网首页只列 7 项、没有 Discord，而 chatgate.ai 与 aitoolly 的产品页都把 Discord 写了进去。我以官网为准，同时把差异摆在这里。

### 5. sky clone 本地迁移 —— 3.0/5

这是营销与文档落差最大的一项。首页给人的印象是一句提示词把本机 Agent 整体搬上云，而 CLI 文档的原文是：克隆 instructions、model、**secretless MCP servers —— never secrets or history**。

翻译成人话：

- 你的 `CLAUDE.md`、指令文件、模型选择、不含密钥的 MCP server 配置，会过去；
- 你的**对话历史一条都不过去**；
- 所有密钥要在云端用 `sky secrets set` 重设一遍（写入即不可读回）；
- 文档标注 Claude Code first，其余 harness 的克隆成熟度官方没做承诺。

第三方站 aitoolly 独立记录的 Local secrets and API keys are not synced during cloud cloning，与官方 CLI 文档互为印证。这个取舍从安全角度看完全正确——密钥不该跨机器裸奔；但既然如此，宣传语就不该让人以为是无缝搬家。

## 价格方案

先看两条计量线。**模型侧**按各厂商公开单价逐轮计费（数据取自 agentsky.dev/pricing，2026-08-11 读取）：

<table>
  <thead>
    <tr>
      <th style="background: #4a90d9; color: #fff;">模型</th>
      <th style="background: #4a90d9; color: #fff;">输入 / 百万 token</th>
      <th style="background: #4a90d9; color: #fff;">输出 / 百万 token</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Claude Fable 5</td><td>$15.00</td><td>$75.00</td></tr>
    <tr><td>Claude Opus 5</td><td>$7.50</td><td>$37.50</td></tr>
    <tr><td>Claude Sonnet 4.6</td><td>$4.50</td><td>$22.50</td></tr>
    <tr><td>GPT-5.6 Sol</td><td>$7.50</td><td>$45.00</td></tr>
    <tr><td>GPT-5.6 Terra</td><td>$3.00</td><td>$18.00</td></tr>
    <tr><td>GPT-5.6 Luna</td><td>$0.30</td><td>$1.80</td></tr>
    <tr><td>Gemini 3.5 Flash</td><td>$1.13</td><td>$6.75</td></tr>
    <tr><td>GLM-5.2</td><td>$2.10</td><td>$6.60</td></tr>
    <tr><td>Kimi K3</td><td>$4.50</td><td>$22.50</td></tr>
    <tr><td>DeepSeek V4 Pro</td><td>$0.65</td><td>$1.31</td></tr>
    <tr><td>DeepSeek V4 Flash</td><td>$0.21</td><td>$0.42</td></tr>
  </tbody>
</table>

**算力侧**按机器唤醒的秒数计，闲置自动挂起、下一条消息唤醒：

<table>
  <thead>
    <tr>
      <th style="background: #4a90d9; color: #fff;">机器</th>
      <th style="background: #4a90d9; color: #fff;">每唤醒小时</th>
      <th style="background: #4a90d9; color: #fff;">连续唤醒 24 小时</th>
      <th style="background: #4a90d9; color: #fff;">常亮一整月（上限）</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1 GB</td><td>$0.021</td><td>$0.51</td><td>$15.24</td></tr>
    <tr><td>2 GB</td><td>$0.038</td><td>$0.91</td><td>$27.16</td></tr>
    <tr><td>4 GB（默认）</td><td>$0.071</td><td>$1.70</td><td>$51.01</td></tr>
    <tr><td>挂起 / 停放</td><td colspan="3">$0 —— 闲置自动挂起，停放的 Agent 永久免费</td></tr>
  </tbody>
</table>

官方还补了两句关键说明：**按秒计费、不足一分钟的碎片不计**；常亮那一列是天花板不是常态，多数 Agent 一天里大部分时间在睡觉。

现在拆首页那句 Starts at $3/mo。用官方自己的估算器算一笔：Claude Fable 5 + 4GB 机器 + 每天 20 轮 + 每天唤醒 2 小时（假设单轮约 8k 输入 + 1k 输出），得出**月成本 $121.25，其中 $117 是模型 token，只有 $4.25 是算力**。

也就是说，$3 那个数字只描述了这份账单里约 3.5% 的部分。真实成本几乎完全取决于你选哪个模型、跑多少轮。压成本只有两条路：

1. **换便宜模型**。同样 20 轮 / 天，DeepSeek V4 Flash 的输入单价是 Claude Fable 5 的 1/71、输出是 1/178，模型侧账单会从三位数掉到个位数。
2. **走自带订阅通道**。`sky auth connect claude` 绑 Claude Pro/Max，或 `sky auth connect chatgpt` 导入本地 Codex 登录态，符合条件的 Agent 模型侧按 $0 计——账单只剩算力那几美元。**这才是这个产品真正的性价比路径**，但官网把它埋在功能区中段，没当主卖点讲。

要注意第二条的两个附带条件：`connect chatgpt` 需要**上传你本地的 Codex 登录态**（文档标注 with consent），这是实打实的信任成本；另外 CLI 文档写明，一旦 `sky auth disconnect`，跑在该订阅上的 Agent 会直接失败，直到你手动切回 Platform 计费。

另外，定价页只公布到 4GB，而 `agent.toml` 允许声明 8 vCPU 与每 vCPU 最高 2048MB 内存的机器——**更大规格的价格未公开**，重负载场景需要先问销售。

## 与竞品对比

<table>
  <thead>
    <tr>
      <th style="background: #4a90d9; color: #fff;">维度</th>
      <th style="background: #4a90d9; color: #fff;">AgentSky</th>
      <th style="background: #4a90d9; color: #fff;">Hermes Agent（自部署）</th>
      <th style="background: #4a90d9; color: #fff;">Manus（云端沙箱）</th>
      <th style="background: #4a90d9; color: #fff;">OpenWorker（本地执行）</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Agent 从哪来</td><td>你自己带（4 种 harness 任选）</td><td>就是它自己，开源运行时</td><td>平台自研，只此一款</td><td>平台自带，本机跑</td></tr>
    <tr><td>执行位置</td><td>云端隔离沙箱</td><td>你自己的机器或服务器</td><td>云端沙箱</td><td>你的本机</td></tr>
    <tr><td>合盖会不会断</td><td>不会</td><td>看你部署在哪</td><td>不会</td><td>会</td></tr>
    <tr><td>模型自由度</td><td>11 款明码标价，随时换</td><td>完全自由，自己接</td><td>平台指定</td><td>模型无关，自带 Key</td></tr>
    <tr><td>数据主权</td><td>在平台机器上（称支持 ZDR）</td><td>完全自己掌握</td><td>在平台机器上</td><td>不出本机</td></tr>
    <tr><td>运维负担</td><td>平台兜底</td><td>快照、恢复、渠道全自己做</td><td>平台兜底</td><td>无需服务器，但要开着电脑</td></tr>
    <tr><td>软件成本</td><td>harness 免费，按 token + 秒计</td><td>开源免费</td><td>订阅制</td><td>MIT 开源免费</td></tr>
    <tr><td>中文 IM 生态</td><td>零覆盖</td><td>自己接，理论可行</td><td>部分</td><td>零覆盖</td></tr>
  </tbody>
</table>

一句话概括这张表：**Hermes 是自己造轮子，OpenWorker 是不出门，Manus 是全托管全代办，AgentSky 是自带轮子找人代驾。**

## 优势与短板

值得信任的信号有三处。其一，Product Hunt 提名人是现任 CEO Rajiv Ayyangar 本人，在 PH 生态里这是相当强的质量背书，而且当日拿下第一（各站抓取到的票数在 371–469 之间，差异来自抓取时点）。其二，定价页的透明度在同类产品里罕见，逐模型单价加逐档算力单价加内嵌估算器，敢把成本结构完全摊开的公司通常心里有底。其三，文档质量诚实得反常——`sky clone` 那句 never secrets or history、maker 在评论区承认恢复是 best-effort，都是完全可以含糊过去却选择写清楚的地方。

短板同样清楚。**最大的一处不是功能缺失，而是可观测性缺失**：停放免费这个定价设计，顺手把长任务最古老的健康信号——账单——给消掉了。评论区那位提出的补救方案其实很朴素：让长跑 Agent 在启动时声明一个预期节奏，平台据此提示这个本该醒了却没醒。目前官网没有任何存活监测或异常告警的说明，也没看到官方承诺要做。

其次是**证据薄**。发稿时距发布 8 天，PH 上仅 1 条评价，独立评测站 VibeWatch 直接把公开证据不足写进结论。10k+ agent sessions 是官方口径，未经第三方验证。所有想把关键长跑任务托付给它的人，现在还只能靠自己实测。

第三是**中文场景基本用不上**。渠道全是欧美 IM 栈，没有微信、钉钉、飞书、企业微信；内置能力里虽有 MiniMax 图生视频这种国产供应商，但那是能力侧不是协作侧。国内团队协作场景请直接看库内的千问办公、灵犀专业版或 QwenPaw。

## 最终推荐

**该用的人**：本地重度使用 Claude Code、Codex 或 OpenClaw，被合盖即断折磨过，手上有 Claude Pro/Max 或 ChatGPT 订阅（走自带通道后月成本可压到只剩几美元算力），且具备把 Agent 当基础设施来运维的工程能力——你看得懂 SSE、知道要按 event id 去重、也知道外部副作用要自己做幂等。对这群人，它是给现有工具加一层地基，不是又一个要重新学的工具。

**可以试但要设边界的人**：想拿它做社区支持或客服机器人的团队。跨渠道身份归并规则未公开这一点，必须先用真实用户在两个渠道上自测一遍再决定，别直接上生产。

**不该用的人**：非技术岗（定位就写着 developers）；需要中文办公生态的国内团队（零覆盖）；对数据出境敏感或受监管行业（云端托管是硬前提，ZDR 是承诺不是审计报告）；以及指望开箱即用完整办公 Agent 的用户——它压根不生产 Agent 能力，你带什么进去就是什么水平。

**掏钱前请先做三件事**：第一，把 $3 注册额度花在一个真实的窄任务上，看它够跑几轮；第二，主动跑到一半强杀一次，验证恢复到底丢不丢线索；第三，也是最重要的——想清楚它静默死掉的那天，你会通过什么渠道知道。在平台补上心跳告警之前，这个答案得由你自己提供。

---

**评测声明**：本文基于公开信息与官方文档撰写，站长尚未开通付费实测，文中所有价格与字段均取自 agentsky.dev 官网、pricing 页、docs 开发者快速上手、agent.toml reference 与 CLI reference（2026-08-11 读取），Product Hunt 数据与评论区原文经 hunted.space 汇总，maker 回应转引自 chatgate.ai 对 PH 讨论的记录，另参考 ustack.app、onei.ai、aat.ee、aitoolly.com、launly.com 的独立收录页。凡官方口径与第三方口径不一致处（如 Discord 渠道、PH 票数）已在文中并列标注。本文不含付费推广。
