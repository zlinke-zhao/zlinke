---
id: clairvoyance
title: "Clairvoyance（星界）深度评测：把 AI Agent 当员工常驻你电脑的桌面工作台"
date: "2026-09-13"
category: "AI工作台"
rating: 4.1
price: "本体免费 / Plus $4/月 / Pro $20/月 / Enterprise $100/月"
subtitle: "本地优先 + 员工制 Agent 编排 + Multiplayer 同屏，Stardock 用 30 年桌面软件经验重做 AI 工作台"
url: "https://clairvoyanceai.com/"
pros:
  - "本地优先与数据主权：笔记、项目、Agent 记忆都是你硬盘上的普通文件，敏感任务可全程跑本地模型(Ollama)，不烧云端 token"
  - "员工制隐喻最彻底：每个 Agent 有名字、独立知识库、权限与跨会话记忆，可跨 Claude/Codex/Grok/本地模型组队，像小公司组织图"
  - "免费档极慷慨：个人非商用永久 $0，含本地模型、远程指挥、定时任务、报告与 Exhibit 生成，零门槛跑全套"
  - "Multiplayer AI 独门能力：多人可进同一台本机上的实时会话协作，文件与执行留在宿主机器而非搬到云端"
  - "跨模型 Universal Resume + 上下文压缩：Claude 会话可无缝续到 Grok/Cursor，缓存命中率宣称超 99%，长任务成本可控"
cons:
  - "仍是 Beta(0.85)：独立体验者反馈界面偶发卡死、是否仍在运行提示不清、子 Agent 卡住时缺明显取消入口"
  - "商用需付费：个人非商用免费，但商业/专业用途必须上 Pro $20/月，团队协作要 Enterprise $100/月"
  - "企业级治理待补：官方未披露独立安全审计，多人协作的认证流与细粒度权限、审计日志文档不全"
  - "本体不含模型额度：免费档需自带 API Key，Pro 仅送 Pro Token 包，重度云模型用户账单并不低"
  - "生态年轻：闭源、Skills/插件生态刚起步，第三方独立评测样本少，迭代快需锁版本"
alternatives:
  - { name: "OpenClaw", slug: "openclaw", reason: "同为本地优先 Agent，但开源(MIT)、生态与技能市场最广，适合爱折腾、要源码与自托管的人" }
  - { name: "Skywork Desktop", slug: "skywork-desktop", reason: "Windows 原生云端 Agent，多模型一体加本地隔离，适合想要开箱即用桌面同事的人" }
  - { name: "Manus", slug: "manus", reason: "纯云端通用 Agent，零安装即可交付成果，适合不愿装本机软件、只想要结果的人" }
  - { name: "Highlight AI", slug: "highlight-ai", reason: "捕获式桌面 AI 助理，跨 App 屏幕上下文加本地隐私，适合要轻量跨应用助手的 Mac/Win 用户" }
---

## 一句话总结

Clairvoyance 适合想要「一个常驻本机、会读你文件、能跨模型组队」的 AI 工作台、又不愿把数据搬上云端的个人用户；不适合需要开箱即用的企业级治理、或不想自己管 API Key 与本地模型的小白。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>信息</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Stardock Software（创始人 Brad Wardell，30 年 Windows 桌面软件老厂，出品 Fences/Start11/WindowBlinds 及《银河文明》《战星》系列）</td></tr>
    <tr><td>产品定位</td><td>本地优先的桌面 AI 员工（Staff）工作台，把 Claude Code/Codex/Cursor 等 Agent 当常驻「员工」用</td></tr>
    <tr><td>首发与版本</td><td>内部打磨约 2 年，2026 年公开；Beta 3 于 2026-07-23 发布，v0.85 于 2026-08-25 加入 Multiplayer AI</td></tr>
    <tr><td>支持平台</td><td>Windows / macOS / Linux 桌面端，外加 iPhone 远程指挥端</td></tr>
    <tr><td>核心协议</td><td>ACP（Agent Communication Protocol），把已安装的 AI CLI 当作平台通过 API 调度</td></tr>
    <tr><td>价格</td><td>免费 / Plus $4/月 / Professional $20/月 / Enterprise $100/月（详见价格方案表）</td></tr>
    <tr><td>开源情况</td><td>闭源；官方未披露外部融资、投资方与估值</td></tr>
    <tr><td>用户规模</td><td>官方仅称「增长中、已有早期付费订阅」，未披露具体用户/订阅/营收数字</td></tr>
  </tbody>
</table>

数据来源：Stardock 官方新闻与博客（2026-07 至 2026-08）、官方定价页 clairvoyanceai.com/pricing、runtimewire 独立报道（2026-08-25）、TrishTech 评测（2026-08）。

## 核心功能评测

**1. AI Staff 员工制编排（评分 4.3）**
这是 Clairvoyance 最差异化的点。你不是开一个聊天框，而是「招」一个个有名有姓的 Staff（Agent）：给名字、分配工作区、选 AI 提供方（Claude Code / Codex / Gemini / GitHub Copilot / Cursor / Grok Build / 本地模型），再设权限边界。Staff 会往本地知识库记笔记，跨会话积累记忆，越用越懂你的项目。多个 Staff 还能互相交接、临时招募帮手。相比库内多数单助手式本地 Agent，它更像一张「小公司组织图」。实测派生的 Exhibit（交互式仪表盘、小游戏、PPT）和看板体验，对知识工作者比纯终端式 Agent 友好得多。

**2. 本地优先与隐私（评分 4.5）**
笔记、项目、Agent 记忆都是你硬盘上的普通 Markdown / 标准格式文件，不锁在专有数据库里。敏感活儿可全程跑本地模型（Ollama 一键下拉），推理不出本机；只有当某个 Staff 被指定用云端模型时，那段请求才走对应厂商。TrishTech 评价其「everything stays local by design」是最大卖点之一。对在意数据主权、又已经在用 Claude Code 等工具的人，这是零摩擦上车的理由。

**3. Multiplayer AI 多人同屏（评分 4.2）**
v0.85 的独门能力：同事可以「走进」你本机上的同一个实时会话，和同一批 Agent 对话、补充资料、增派 Agent。大文件读取与工具输出走机器间 P2P，不经过 Clairvoyance 服务器，文件与执行留在宿主机器。这是相比「云端共享空间」式协作（如 Coshell、Relevance AI）的真正差异点。但 runtimewire 也指出：官方 changelog 把权限/认证流标为「草案」，未披露细粒度权限与审计记录，企业采用前需自行验证信任边界。

**4. Exhibits 富媒体产出（评分 4.0）**
Clairvoyance 把 Agent 的交付物做成可交互的 Exhibit——演示稿、原型、仪表盘、甚至小游戏，都能在会话内直接预览、点击、继续改，版本可回退。官方演示过把 X.com 开源算法变成交互 Exhibit、用 C++ 代码库审计生成内存预算 treemap。能力很强，但当前模板与成熟度仍处 Beta，复杂 Exhibit 的排版偶有需要人工兜底。

**5. 定时任务与远程指挥（评分 4.2）**
可以给 Staff 排「每天早上发一份舆情简报」「夜里跑数据清洗」之类的常驻任务，结果以 Markdown 或交互 Exhibit 落地。人不在电脑前，也能用网页或 iPhone 远程指挥本机 Agent 去查文件、启动构建。对「让 AI 替我值班」的场景很实用，也是本地优先架构的天然优势。

## 价格方案

<table>
  <thead>
    <tr><th>版本</th><th>价格</th><th>适用对象</th><th>关键权益</th></tr>
  </thead>
  <tbody>
    <tr><td>Free</td><td>$0 永久</td><td>个人 / 非商用</td><td>本地 AI Staff、自带 API Key（Claude Code/Codex/Cursor 等）、远程指挥、本地模型、笔记与知识库、Markdown/画布/模板、Binders、定时任务、报告与 Exhibit 生成、Constellation 关系图、Agent 编排</td></tr>
    <tr><td>Plus</td><td>$4/月</td><td>个人 / 非商用（官方标 Most Popular）</td><td>Free 全部 + 云同步（笔记/报告/画布/Exhibit）+ 无限分享链接 + 抢先体验新功能 + 看板 + 数据库视图 + 1GB 云存储</td></tr>
    <tr><td>Professional</td><td>$20/月</td><td>商用 / 专业授权</td><td>Plus 全部 + Pro Token 包 + Multiplayer AI + 多桌面编排 + Todos + 图片云同步 + 无限代码补全 + AI 托管 Sprint + Missions + 直接控制 + 云保险库</td></tr>
    <tr><td>Enterprise</td><td>$100/月</td><td>团队 / 组织</td><td>Professional 全部 + 5 倍 Pro Token 包 + Domains + Teams + 项目看板 + 私密论坛与聊天 + 实时团队文档 + 共享 HomeDesk</td></tr>
  </tbody>
</table>

说明：上述档位与美元金额均来自官方定价页（clairvoyanceai.com/pricing）直接抓取，截至 2026-09-13 有效。本体「免费」指软件免费，调用云端模型仍需你自己的 API Key 或 Pro 赠送的 Token 包；Object Desktop 老用户此前可走 Plus 早期权益，现已统一为上述四档。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Clairvoyance</th><th>OpenClaw</th><th>Skywork Desktop</th><th>Manus</th></tr>
  </thead>
  <tbody>
    <tr><td>部署形态</td><td>本机桌面 App（Win/Mac/Linux）</td><td>本机 / 自托管（开源）</td><td>Windows 原生 + 云端</td><td>纯云端</td></tr>
    <tr><td>是否开源</td><td>否（闭源）</td><td>是（MIT）</td><td>否</td><td>否</td></tr>
    <tr><td>模型来源</td><td>自带 Key + 本地 + Clairvoyance AI</td><td>模型无关（含本地）</td><td>Claude/Gemini 等云端</td><td>云端多模型</td></tr>
    <tr><td>独门差异</td><td>员工制组织图 + Multiplayer 同屏</td><td>生态最广、技能市场最大</td><td>Windows 原生 + 本地隔离</td><td>零安装通用 Agent</td></tr>
    <tr><td>免费档</td><td>个人永久免费</td><td>软件免费（API 另计）</td><td>免费档偏紧</td><td>有免费额度</td></tr>
    <tr><td>本评测评分</td><td>4.1</td><td>4.5</td><td>4.3</td><td>4.1</td></tr>
  </tbody>
</table>

横向看，Clairvoyance 卡在「本机优先」和「组织化编排」的交叉点：比 OpenClaw 更易用、比 Manus 更私密、比 Skywork 更强调你自己的机器与文件。代价是闭源、企业级治理能力不如老牌协作产品，且商用要付费。

## 优势与短板

**优势（展开）**
- 数据主权是真金白银的：普通文件存储意味着你的笔记能被任意编辑器/备份工具接续，Agent 记忆不锁死在厂商云端，符合「AI 该听用户的」直觉。
- 员工制隐喻降低了多 Agent 协作的认知负担——不用记哪个模型擅长什么，把任务交给一个 Staff，它自己组队。
- 免费档慷慨到反常：个人用户 $0 就能用本地模型 + 远程 + 定时 + Exhibit，Stardock 靠 Plus/Pro/Enterprise 的云同步、团队与 Token 变现，而非把核心能力阉割进付费墙。
- Multiplayer AI 在目前桌面 Agent 里少见，对「师徒带教」「跨人协作同一工作区」是真需求。

**短板（坦诚）**
- 版本仍标 Beta/0.85，早期体验者（michaelmusings 等）明确提到：界面偶发卡死、是否「还在跑」提示不清、子 Agent 卡住时找不到明显取消入口；好在其 Alpha 阶段已标注「软件仍有毛刺」，编码场景表现稳定。
- 商用授权是硬门槛：个人非商用免费，但凡拿来做生意就得 Pro $20/月，团队要 Enterprise $100/月。
- 安全与合规透明度不足：官方称本地笔记存本机、同步信息存云端、AI 功能数据可能被第三方模型处理，但未给独立安全审计、细粒度权限与审计日志，多人协作的认证细节文档不全——组织采用需自行评估。
- 本体不含模型额度，重度云模型用户账单照旧；且闭源意味着你无法像 OpenClaw 那样自己改、自己审。

## 最终推荐

**建议使用的三类人**
1. 已经在用 Claude Code / Codex / Cursor，想把它们「升格」为常驻本机、会读项目文件、能定时干活的员工的人——Clairvoyance 是低成本（免费）的编排层。
2. 在意数据不出本机、又要多模型灵活性的个人研究者 / 开发者 / 内容生产者——本地模型 + 普通文件存储正中下怀。
3. 需要「师徒同屏」或跨人协作同一工作区的团队——Multiplayer AI 是当前少有的本机同屏方案。

**不建议使用的两类人**
1. 想要开箱即用的企业级治理（SSO/审计/合规凭证）的采购方——官方透明度还不够，建议等独立安全评估与更完整的权限文档。
2. 完全不想管 API Key、不想碰本地模型安装的小白——免费档虽大，但「自带 Key / 本地模型」的前提会劝退一部分人；这类用户更该看 Manus 这类零安装云端 Agent。

**购买建议**：个人先从 Free 档上手，确认工作流跑得通再按需升 Plus（$4）做云同步；只有真要商用或多人同屏才上 Pro（$20）。团队先小范围试点 Enterprise，别一上来全量铺开。

---

**评测声明**：本文基于 Stardock 官方新闻/博客/定价页、runtimewire 与 TrishTech 独立报道，以及公开用户体验博客（michaelmusings 等）聚合撰写，所有价格与版本号均可溯源至上述公开页面。Clairvoyance 仍处 Beta，功能与定价可能变动，请以官网为准。本文不含付费推广，评分依据公开可验证信息独立给出。
