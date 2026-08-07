---
id: openworker
title: "OpenWorker 深度评测：吴恩达开源的桌面 AI 同事，交付成品这件事它做对了，可惜只做对了一半"
date: "2026-08-07"
category: "AI工作台"
rating: 3.8
price: "应用本体 MIT 开源、完全免费、无订阅费（官网 FAQ 原话：你直接付钱给模型厂商，一分钱不付给我们）；需自备模型 API Key，或接 Ollama 本地模型零推理成本"
subtitle: "18 天 1.33 万 Stars 的开源桌面 Agent：不是又一个 OpenClaw 发行版，血统来自吴恩达自己的 aisuite；审批门设计是全行业教科书级，但 BYOM 把排错成本原样甩给了用户，且中文办公生态完全缺席"
url: "https://openworker.com"
pros:
  - "交付的是文件不是清单：实测 15 个混放文件 10 秒按类型归档零误判、2 分钟出 Markdown 摘要、3 分钟出一份可直接打开的 HTML 周报，成品落桌面而非停在对话框（来源：毒AI 2026-07-29 全天实测）"
  - "审批门设计是目前桌面 Agent 里最严谨的：只读自动放行，写入/发送/执行必须确认；shell 命令在任何模式下都无例外必须批准；无人值守时请求挂进 Inbox 暂停会话，绝不因为你不在就自动放权"
  - "真模型无关：官方原生支持 OpenAI/Anthropic/Gemini/DeepSeek/Kimi/Qwen/GLM/MiniMax/Mistral/Grok/Inkling 十一家，加 Together、Fireworks 开源权重与 Ollama 全本地；对话框里直接下拉切换，不重启不进设置"
  - "血统独立且零商业绑定：引擎建在吴恩达自家的 aisuite 之上，不是 OpenClaw 系换皮；MIT 协议可商用可改，Token 与模型 Key 全存本机 secret store，云端只经手 OAuth 握手"
cons:
  - "BYOM 把自由和排错灾难一起交给用户：自建 OpenAI 兼容端点连接检测能通过、进会话却提示无可用模型；本地 Ollama 服务正常但模型加载不出来；Kimi 官方 Key 一直显示无效——三类问题至今在 Issue 区未闭环"
  - "错误处理近乎没有：模型账户额度不足时系统连续返回三次相同错误，既不自动停止、也不提示换模型或查余额（AI科技评论 2026-08-03 实测）"
  - "三个安全 Issue 挂着没修：#100 web_fetch 无 SSRF 防护且跟随重定向、无需审批；#99 Tauri CSP 被关成 null；#81 stdio MCP 进程在审批引擎存在前就已获得网络能力——均自 7-24 起 open 状态"
  - "中文办公生态零覆盖：25+ 连接器清一色欧美 SaaS，没有钉钉、飞书、企微、微信；界面全英文无中文版；没有 Linux 版，Windows 包至今未代码签名，装机必弹 SmartScreen 告警"
alternatives:
  - { name: "Rowboat", slug: "rowboat", reason: "同为开源本地优先，但第一性原理是本地知识图谱长期记忆；OpenWorker 的第一性原理是模型无关加审批门，记忆不是它的主打，两者可互补" }
  - { name: "Claude Cowork", slug: "claude-cowork", reason: "打磨度与集成完成度明显领先、开箱即用，代价是锁死 Claude 模型生态且数据走云端；OpenWorker 反过来用完成度换控制权" }
  - { name: "Hermes Agent", slug: "hermes-agent", reason: "同为 MIT 开源可自托管运行时，多了技能自学习与 20+ 渠道共用一份记忆；比 OpenWorker 更适合能折腾环境的开发者，但更不适合纯办公用户" }
  - { name: "LobsterAI", slug: "lobsterai", reason: "国产桌面 Agent，中文 IM 与本土办公生态完整——恰好补上 OpenWorker 最大的空白；不需要数据主权的国内用户应优先看它" }
---

## 一句话总结

OpenWorker 适合**能自己搞定 API Key、看得懂英文界面、且真的在乎数据不出本机的开发者、自由职业者与小团队负责人**；它把「交付成品」和「审批门」两件事做对了，但工程完成度还停在 v0.1.x，**不会配模型的普通办公用户、以及重度依赖钉钉飞书企微的国内团队，现在别碰**。

## 核心数据一览

<table>
  <tr><th style="background:#4a90d9;color:#fff">项目</th><th style="background:#4a90d9;color:#fff">数据</th></tr>
  <tr><td style="font-weight:bold">开发方</td><td>吴恩达（Andrew Ng）团队；仓库 owner 为 andrewyng，实际工程主力是 Rohit Prasad</td></tr>
  <tr><td style="font-weight:bold">仓库与协议</td><td>github.com/andrewyng/openworker，MIT（可商用、可改）</td></tr>
  <tr><td style="font-weight:bold">时间线</td><td>仓库创建 2026-07-20，7-23 吴恩达在 X 公开发布；脱胎于 aisuite 的 platform/ 目录独立成库</td></tr>
  <tr><td style="font-weight:bold">最新版本</td><td>v0.1.7（2026-07-30 发布）；主干最近提交 2026-08-01，合入 Skills 支持（PR #391）</td></tr>
  <tr><td style="font-weight:bold">GitHub 热度</td><td>13,320 Stars / 1,789 Forks / 396 个未关闭 Issue（GitHub API 实时读取，2026-08-07）</td></tr>
  <tr><td style="font-weight:bold">增长轨迹</td><td>3,461（7-25）→ 5,800（7-26）→ 9,700（7-29）→ 13,320（8-07），18 天涨 1.33 万星</td></tr>
  <tr><td style="font-weight:bold">项目状态</td><td>Open Beta。README 原话：完全可用、会自我更新、我们正在打磨粗糙的边角</td></tr>
  <tr><td style="font-weight:bold">代码规模</td><td>coworker/ 约 119 个 Python 文件（约 3.24 万行）、surfaces/gui/ 约 149 个 TS/TSX 文件、78 个后端测试模块</td></tr>
  <tr><td style="font-weight:bold">平台支持</td><td>macOS 12+（仅 Apple Silicon 有签名公证包，自动更新）/ Windows 10·11 x64（未代码签名，SmartScreen 告警，官方称签名进行中）/ <b>无 Linux 版</b> / 无中文界面</td></tr>
  <tr><td style="font-weight:bold">连接器</td><td>25+：Slack、Gmail、Outlook、Google Calendar、Google Drive、Notion、HubSpot、GitHub、Jira、Linear、Asana、Dropbox、Box、Attio 等，另支持任意 MCP 工具按工具单独授权</td></tr>
  <tr><td style="font-weight:bold">模型支持</td><td>OpenAI、Anthropic、Google Gemini、Inkling（Thinking Machines）、GLM（Z.ai）、DeepSeek、Kimi（月之暗面）、Qwen、MiniMax、Mistral、Grok（xAI），加 Together / Fireworks 开源权重、Ollama 全本地</td></tr>
  <tr><td style="font-weight:bold">源码运行依赖</td><td>Python 3.10+、Node 20+，桌面壳另需 Rust 工具链（Tauri）</td></tr>
  <tr><td style="font-weight:bold">价格</td><td>本体永久免费。官网 FAQ 原话：你直接付钱给模型厂商，一分钱不付给我们</td></tr>
</table>

## 核心功能评测

### 1. 交付成品导向 —— 4.5/5

这是 OpenWorker 唯一一句真正立住了的口号：**delivers finished work, not just chat**。你要的不是「你可以这样做」的待办清单，而是一份能双击打开的文件。

「毒AI」作者高晓阳 2026-07-29 发布的全天实测提供了目前最扎实的一手数据（macOS + DeepSeek 主力模型）：

- **文件整理**：15 个混放文件（PDF、截图、两个 dmg、一个 zip、零散文档），两次审批弹窗之后 **10 秒**完成按类型归档，全部正确、无遗漏无误删，还顺手清了没要求清的项目缓存
- **文档摘要**：两篇行业分析文章，**约 2 分钟**产出格式干净的 Markdown 落桌面，核心观点抓得准、未编造原文没有的内容
- **网络调研**：一周 AI 要闻整理成 HTML 速览，**约 3 分钟**零人工干预交付，时效性正确、无张冠李戴，但排版美观度一般
- **全天零崩溃**：原话「没有崩溃、没有假死、没有诡异的报错」，对发布不到一周的 Beta 产品来说少见

扣分点作者自己说得很坦白：文件整理这种单步任务是入场券不是杀手锏；复杂任务的交付质量**几乎完全取决于你接的是哪个模型**，OpenWorker 在智能层面没加多少附加值，它更像一个「管道工」——把模型能力和你的工具接起来。

### 2. 模型无关与 BYO Key —— 3.5/5

设计上无可挑剔：官方原生支持十一家厂商加 Together、Fireworks、Ollama，对话框里直接下拉切模型，**不重启、不进设置菜单**。实测把网络调研任务从 DeepSeek 切到 GPT 重跑一遍，流程几乎一致，唯一差异是 GPT 多请求了一次桌面写入权限；两版结果质量半斤八两——**贵的模型在这个任务上并没有明显更好**，这个结论对预算敏感用户很有价值。

但这一项拿不到高分，原因是《AI科技评论》2026-08-03 那篇标题很不客气的评测——《吴恩达开源的 OpenWorker，为什么「不 Work」了？》——列出了三类至今未闭环的实证问题：

- 接自建 OpenAI 兼容端点，**配置页连接检测能通过，进新会话后却显示没有可用模型**
- **本地 Ollama 服务本身运行正常，OpenWorker 却加载不出其中的模型**
- 记者实测自动晨报时模型账户额度不足，**系统连续返回三次相同错误，既不自动停止，也不提示换模型或查余额**

毒AI 的实测也撞上了同类问题：**Kimi 官方 API Key 一直显示无效，切 DeepSeek 秒过**——国产厂商适配还没到位。

AI科技评论那句结论很扎心，我认为它准确概括了这一项的本质缺陷：「BYOM 听起来是把自由还给用户，但实际上是把排错的灾难抛给了用户。」对开发者这还好排查，但面向普通办公用户的工具，不该要求人先弄懂 API Key、模型名和计费额度，才知道任务为什么失败。

### 3. 审批门与权限模型 —— 4.0/5

这是 OpenWorker 设计上最重、也最值得同行抄作业的部分。三层模式：**interactive**（默认，读取自动通过，写入/执行/外部操作需确认）、**auto**（放行但限定路径范围）、**custom**（指定哪些工具自动放行）。

其中有一个非常反直觉、但我认为完全正确的决策：**无人值守不会提升 Agent 的自主权限上限**。定时任务跑到需要确认的操作时，它不自作主张也不跳过，而是把请求塞进 Inbox 并暂停会话等你回来。大多数框架把「用户在不在」和「Agent 能干什么」混成一件事——你不在它就默认能干更多；OpenWorker 把这两个维度彻底拆开了。**另外 shell 命令在任何模式下都必须确认，没有例外**（社区把这条概括为 shell asks forever）。

之所以只给 4.0，是因为审批门只覆盖了「模型主动调工具」的主流程，旁路仍有洞。截至 2026-08-07 通过 GitHub API 核实，以下三个安全 Issue **自 7 月 24 日提出至今仍是 open 状态**：

- **#100**：`web_fetch` 无 SSRF 防护，允许访问 loopback / 私网 / link-local 地址，跟随重定向，且被归类为低风险**无需审批**——提示注入或恶意 URL 可借此摸到云元数据与内网服务
- **#99**：桌面壳的 Tauri **CSP 被设为 null**，webview 里任何 XSS 都更容易调用本地 sidecar，进而驱动 shell / 文件 / 连接器工具
- **#81**：stdio MCP server 进程在 session 引导阶段就被拉起，**早于权限引擎存在**，恶意或供应链被投毒的 server 可在任何审批门触发前读本地文件并外传

《AI科技评论》补充的一条同源观察是：某些配置文件可能在用户**尚未信任工作区时**就启动其中定义的外部服务进程。需要说明的是，这些均属社区报告与复现讨论，不代表已发生大规模攻击，也未证实所有版本受影响。

### 4. 连接器、触发器与 Skills —— 3.5/5

25+ 连接器覆盖欧美 SaaS 主流栈，加 MCP 原生支持（按工具单独授权），广度对得起一个刚满月的开源项目。三类触发器也齐了：**Slack @提及**（在频道里 @OpenWorker，任务在你自己的桌面机器上跑，跑完回帖到原线程——这个「云端触发 / 本地执行 / 云端回帖」闭环是它独有的）、**收件邮件**、**定时计划**，运行留完整执行日志。

但两点必须泼冷水。

第一，**连接器清一色欧美**。Slack / HubSpot / Jira / Linear / monday.com / Attio 全在，钉钉、飞书、企业微信、微信一个没有。官网四个预置角色（Sales / Executive Assistant / Marketing / Ops On-call）里还有 GA4、PagerDuty、GitHub 标着 soon 尚未落地。对国内用户，这不是小缺憾，是硬伤。

第二，**Skills 目前只是占位**。8 月 1 日合入的 PR #391 标题虽是 Add support for Skills，作者说明写得很清楚：per-persona skills 会在后续重新设计该抽象时改进，**现在只是先打个桩**（simply stubbing it for now）。别指望它现在就有 OpenClaw 那种成熟技能生态。顺带一提，早期社区曾流传「内置多种角色模板」的说法，7 月 25 日有研究者查源码核实当时**仅有 1 个 ops persona**，属夸大。

### 5. 工程完成度与平台覆盖 —— 3.0/5

最拖分的一项，且全部是官方自认的事实：

- 版本号还在 **v0.1.7**，README 顶部挂着 Open Beta 标识
- **Windows 构建至今未代码签名**，装机必弹 SmartScreen 告警，官方称签名「进行中」
- macOS 只有 **Apple Silicon** 有签名公证的直接下载包，Intel 机走 CI 构建
- **没有 Linux 版**（对一个开源项目来说相当反常）
- **没有中文界面**，全英文
- 官方明确说团队按内部路线图开发，**可能不接受偏离其愿景或与在研功能重复的 PR**

好消息是迭代确实快：v0.1.7 已加入自动上下文压缩、Token 用量显示、Anthropic 模型 prompt caching。今日头条一篇实测也补充了一条稳定性观察：**插件稳定性有待提升，偶尔任务执行到一半停滞**。

## 价格方案

OpenWorker 是本文评测过的工具里价格结构最简单的一个——**应用本体没有任何收费档位**。官网 FAQ「Is it really free?」的原话是：应用是开源的，自带你的 API Key 或用 Ollama 跑本地模型，**你直接付钱给模型厂商，一分钱不付给我们**。

<table>
  <tr><th style="background:#4a90d9;color:#fff">支出项</th><th style="background:#4a90d9;color:#fff">费用</th><th style="background:#4a90d9;color:#fff">说明</th></tr>
  <tr><td style="font-weight:bold">应用本体</td><td><b>￥0 / 永久</b></td><td>MIT 协议，可商用可改；自动更新，无订阅、无席位费、无功能墙</td></tr>
  <tr><td style="font-weight:bold">OpenWorker 账号</td><td><b>￥0（且非必需）</b></td><td>官网 FAQ 明确：不登录也能全功能使用，用你手工创建的凭据/API Key 接连接器；免费账号仅额外提供 Slack 等一键授权（因厂商限制须由官方托管登录流程）</td></tr>
  <tr><td style="font-weight:bold">模型推理（云端）</td><td>按厂商实际计费</td><td>你自己的 Key 直连厂商结算，OpenWorker 不加价、不抽成、不做中转</td></tr>
  <tr><td style="font-weight:bold">模型推理（本地）</td><td><b>￥0 推理成本</b></td><td>接 Ollama 全本地运行，只付电费与硬件；数据完全不出机器</td></tr>
  <tr><td style="font-weight:bold">连接器 / MCP</td><td>￥0</td><td>25+ 连接器与任意 MCP 工具均不额外收费；第三方 SaaS 本身的订阅费另计</td></tr>
</table>

**这里有一个必须点名的透明度问题**：官方**没有公布任何 Token 消耗基准**，目前公开的第三方实测（毒AI、AI科技评论、今日头条）也**都没有给出单任务 Token 统计**。Agent 类产品跑一次任务要经历规划→调工具→读结果→收尾多轮模型调用，消耗远高于普通聊天。免费的是软件，不是账单——**上线前请务必先用小额度压测你自己的高频任务**，AI科技评论那次晨报测试撞上的正是额度耗尽。

## 与竞品对比

<table>
  <tr><th style="background:#4a90d9;color:#fff">维度</th><th style="background:#4a90d9;color:#fff">OpenWorker</th><th style="background:#4a90d9;color:#fff">Claude Cowork</th><th style="background:#4a90d9;color:#fff">Rowboat</th><th style="background:#4a90d9;color:#fff">LobsterAI</th></tr>
  <tr><td style="font-weight:bold">开源与协议</td><td>MIT 完全开源</td><td>闭源商业产品</td><td>Apache-2.0 开源</td><td>闭源（网易有道）</td></tr>
  <tr><td style="font-weight:bold">本体费用</td><td>￥0，自付模型账单</td><td>订阅制，绑定 Claude 套餐</td><td>￥0，自付模型账单</td><td>客户端免费，增值订阅</td></tr>
  <tr><td style="font-weight:bold">模型自由度</td><td>11 家厂商 + 开源权重 + Ollama，会话中可切</td><td>仅 Claude 系</td><td>模型自由，可接本地</td><td>以自研/合作模型为主</td></tr>
  <tr><td style="font-weight:bold">数据位置</td><td>本地优先，Key/Token 存本机 secret store，云端仅经手 OAuth 握手</td><td>云端执行</td><td>本地优先</td><td>端云协同</td></tr>
  <tr><td style="font-weight:bold">核心差异点</td><td>交付成品 + 全行业最严的审批门 + 独立 aisuite 血统</td><td>集成度与打磨度当前领先，开箱即用</td><td>本地知识图谱长期记忆</td><td>中文办公生态与本土 IM 完整</td></tr>
  <tr><td style="font-weight:bold">中文生态</td><td><b>零覆盖</b>，无钉钉/飞书/企微/微信，界面全英文</td><td>有限</td><td>有限</td><td><b>完整</b></td></tr>
  <tr><td style="font-weight:bold">平台</td><td>macOS（仅 Apple Silicon 签名）/ Windows（未签名）/ 无 Linux</td><td>桌面 + 云端</td><td>桌面自托管</td><td>Windows / macOS 中文客户端</td></tr>
  <tr><td style="font-weight:bold">成熟度</td><td>Open Beta v0.1.7，上线 18 天</td><td>商业级</td><td>早期 v0.7.x</td><td>已商业化运营</td></tr>
</table>

一句话概括这张表：**Claude Cowork 用控制权换完成度，OpenWorker 用完成度换控制权，LobsterAI 用生态本土化换开放性，Rowboat 则和 OpenWorker 打法互补——一个押记忆，一个押模型自由与审批。**

## 优势与短板

**它真正的价值不在功能表，在架构立场。**

在 2026 年，主流托管 Agent 都在自家沙箱里跑、数据默认路由过厂商服务器；OpenWorker 把这套关系反过来：Key 是你的，机器是你的，云端唯一经手的只是 OAuth 握手，连接器 Token 从不落云端存储，遥测明确排除 prompts、outputs、tool args 与连接器内容。对一个不愿把内部文档丢进别人推理栈的团队来说，这就是全部卖点。

审批门那套「无人值守不放权 + shell 永远问」的设计，我认为应该成为衡量所有云端 Agent 的基线——你没法审计人家沙箱里发生了什么，那至少该要求同等的授权颗粒度。

**但它的短板同样结构性。**

第一，**BYOM 的自由是有代价的**，代价就是排错。三类模型接入故障（自建端点、Ollama、Kimi Key）加上近乎为零的错误处理，直接把「面向所有人」的产品定位打回了「面向开发者」。

第二，**审批门有旁路**。三个安全 Issue 挂了两周多没修，且都指向同一个通病：权限控制没覆盖配置解析、插件加载、连接器初始化、后台进程启动这些执行路径。一个能读你文件、跑你终端、连你邮箱日历的 Agent，审批门就是它全部的安全边界——边界上有洞，性质就不一样。

第三，**中文生态是零**。这不是「以后会补」的问题，是它的连接器路线图整个不在中国。

## 最终推荐

**该用它的人：**

- **在乎数据主权的开发者、自由职业者、小团队负责人**——尤其是接受不了内部文档走第三方推理栈的场景。它是目前唯一一个「本地优先 + 真模型无关 + MIT 可审计」三者同时成立的桌面 coworker。
- **想改造 Agent 框架的工程师**——3.24 万行 Python 后端 + 78 个测试模块 + 建在 aisuite 上的清晰分层，是学习桌面 Agent 架构最好的开源参考实现之一。想自己造轮子的，先看它。
- **模型成本敏感、手上已有多家 Key 的重度用户**——一个应用里按任务切模型（写文档用 Claude、翻译用 DeepSeek、跑代码用 GPT），且实测证明贵模型在常规任务上未必更好，省钱空间是实打实的。
- **有 Apple Silicon Mac 的用户**——只有这条链路是签名公证 + 自动更新的完整体验。

**别碰它的人：**

- **不会配 API Key 的普通办公用户**。别被「面向所有人」的口号骗了，配模型这一关就能拦下大多数人，出错了还没有任何有效提示。财务小张用不了它。
- **重度依赖钉钉、飞书、企业微信、微信的国内团队**。连接器一个都没有，界面还是全英文，请直接看 LobsterAI 或其他国产桌面 Agent。
- **Linux 用户和 Intel Mac 用户**。前者没有版本，后者要自己走 CI 构建。
- **企业采购与合规部门**。Open Beta 状态、无任何第三方安全认证、G2 与 Capterra 上零记录、三个安全 Issue 未闭环——现在进采购流程为时过早，建议等 v0.2 之后再评估。
- **只想快速问答、头脑风暴的人**。那是 ChatGPT、Claude 网页版的活儿，更直接也更省心。

**我给 3.8 分的账是这么算的**：交付成品 4.5、模型无关 3.5、审批权限 4.0、连接器与生态 3.5、工程完成度 3.0，均分 3.7，再为「MIT 真开源 + 独立技术血统 + 零商业绑定」补 0.1。

它是一份优秀的开源参考实现和一个立场正确的架构宣言，**但离「开箱即用的数字员工」还有明显距离**。用一句我认同的话收尾：开放源码，不等于交付产品。

---

**评测声明**：本文基于官方公开信息与独立第三方实测聚合撰写，**站长未亲自安装实测**。GitHub 数据（13,320 Stars / 1,789 Forks / 396 未关闭 Issue / v0.1.7 / Issue #100·#99·#81·PR #391 状态）为 2026-08-07 通过 GitHub API 实时读取；功能、平台、模型与价格描述来自 openworker.com 官网与 GitHub README；实测细节来自「毒AI」高晓阳 2026-07-29 全天实测、《AI科技评论》2026-08-03《吴恩达开源的 OpenWorker，为什么「不 Work」了？》、今日头条与搜狐相关实测报道，来源均已在正文标注。本文不含付费推广。
