---
id: chatgpt-work
title: "ChatGPT Work 深度评测：OpenAI 把 ChatGPT 变成会自己干数小时活的跨应用 Agent 工作台"
date: "2026-07-30"
category: "AI工作台"
rating: 4.5
price: "随 ChatGPT 订阅包含 / 桌面端（macOS·Windows）全计划免费，Web·移动端需 Plus $20/月起"
subtitle: "GPT-5.6 驱动的自主 Agent：跨文件/应用/浏览器收集上下文，数小时自主推进复杂项目，交付文档·表格·幻灯片·可交互 Sites，1400+ 插件连接器"
url: "https://openai.com/chatgpt-work"
pros:
  - "自主时长碾压：复杂多步项目可连续自主推进数小时，关掉笔记本/手机也能跑完，回来收成品——区别于多数只能跑几分钟的 Agent"
  - "跨应用真·干活：连接文件、桌面 App、浏览器与 1400+ 插件（Slack/Teams/Google Drive/SharePoint 等 @提及直连），把目标转成成品文档/表格/幻灯片"
  - "Sites 输出形态稀缺：任务产物可直接变成可分享、随数据实时刷新的交互式网页/仪表盘/项目追踪器，不止于聊天/文件"
  - "真人用户基数巨大：合并自 Codex（周活 500 万+，其中 100 万+ 用于非开发工作），可信赖度与生态成熟度远高于新创桌面 Agent"
  - "权限与可溯可控：关键动作前先征求许可并标注来源，Auto-review 前置拦截了红队测试里 100% 的数据外泄尝试，企业可配权限/支出/用量"
cons:
  - "本质是 ChatGPT 的 Agent 模式，非独立产品：与库内 chatgpt 条目存在能力重叠，建议当「ChatGPT 的自主工作台模式」理解"
  - "重云端托管：以 OpenAI 托管 Agent 工作区为主，离线/私有化部署能力弱于本地优先的 Rowboat/LobsterAI，敏感数据需谨慎授权"
  - "Web/移动端仅付费计划可用，免费用户体验不完整；桌面端全免费但需下载新版 ChatGPT 桌面 App（已变 Electron 套壳，体积从 159MB 涨至约 1.5GB）"
  - "首发口碑分裂：合并后的 ChatGPT 桌面超级 App 被 TechRadar/NetEase 等评为「混乱」，Power 用户抱怨 Projects 与 Custom GPTs 被埋、Chat 被降级为弹窗；并有单源报道称 GPT-5.6 Sol 误删用户文件"
alternatives:
  - { name: "Fellou", slug: "fellou", reason: "Fellou 以浏览器为底座、主打穿透登录态深度搜索；ChatGPT Work 跨应用更广（文件+App+浏览器+1400插件）且产物可成 Sites，但更重云端" }
  - { name: "Kimi Work", slug: "kimi-work", reason: "Kimi Work 对话入口+WebBridge+长文本基因，本地化更轻；ChatGPT Work 自主时长与插件生态更强，但依赖 OpenAI 订阅与云端" }
  - { name: "KroWork", slug: "krowork", reason: "KroWork 对话生成可分享应用+Kro Browser Bridge；ChatGPT Work 的 Sites 类似但由 GPT-5.6+1400插件驱动，托管属性更强" }
  - { name: "Claude Cowork", slug: "claude-cowork", reason: "Cowork 同属官方全端 Agent、安全管控更重（本机隔离VM/文件夹白名单/删除审批），但不含 ChatGPT Work 的 Sites 实时网页产物，跨应用广度略逊" }
  - { name: "Rowboat", slug: "rowboat", reason: "Rowboat 本地优先开源、以知识图谱记忆为核心；ChatGPT Work 托管云端、以跨应用自主执行+实时 Sites 为核心，数据主权取向相反" }
---

## 一句话总结

ChatGPT Work 适合**已经在 OpenAI 生态、用 ChatGPT 做长链条知识工作（竞品分析、周报、客户研究、经营仪表盘）且希望「委派一次、数小时收成品」的个人与团队**；但它是 ChatGPT 的 Agent 模式而非独立产品，重云端托管、敏感数据需谨慎授权，纯离线/私有化场景请交给 Rowboat / LobsterAI。

## 核心数据一览

<table>
  <tr><td style="width:140px;font-weight:bold">开发商</td><td>OpenAI（合并自 Codex，2026-07-09 随 GPT-5.6 与统一桌面 App 一同上线）</td></tr>
  <tr><td style="font-weight:bold">最新版本/形态</td><td>ChatGPT 桌面 App（macOS·Windows）内 Chat / Work / Codex 三合一；Web·移动端 Work 模式</td></tr>
  <tr><td style="font-weight:bold">核心引擎</td><td>GPT-5.6 推理家族（Sol / Terra / Luna + effort 档位滑块）；Free/Go 用 Terra，Plus 及以上可自选</td></tr>
  <tr><td style="font-weight:bold">连接器规模</td><td>1400+ 插件目录（Slack / Teams / Google Drive / SharePoint / Gmail / GitHub / Canva / Salesforce 等 @提及直连）</td></tr>
  <tr><td style="font-weight:bold">用户基数</td><td>合并自 Codex 周活 500 万+，其中 100 万+ 用于非开发工作（OpenAI 官方口径）</td></tr>
  <tr><td style="font-weight:bold">价格</td><td>随 ChatGPT 订阅包含；桌面端全计划免费，Web·移动端需 Plus $20/月起（用量按 Codex 结构计量）</td></tr>
  <tr><td style="font-weight:bold">独立评分参考</td><td>aitooltier 8.5/10（Ease 8.0 / Output 8.5 / Value 9.0 / Features 8.5）</td></tr>
  <tr><td style="font-weight:bold">上线状态</td><td>桌面端全计划（含 Free）首日可用；Web·移动端 Pro/Enterprise/Edu 首发，Plus/Business 随后数日分阶段推送</td></tr>
</table>

## 核心功能评测

**1. 跨应用自主执行（评分 4.6/5）**
区别于多数只能跑几分钟的 Agent，Work 把目标拆成小步、跨文件/桌面 App/浏览器收集上下文，可连续自主推进**数小时**，关掉笔记本/手机也能跑完，回来收成品。aitooltier 称为「Codex agent loop 从代码领域泛化到工作领域」。真实体验：把一个「竞品分析→生成带图表的幻灯片」的目标丢给它，它会在后台逐页拉取、分析、排版，中途在「Approve for me」处等你拍板再发邮件或改日历。

**2. Sites 实时网页产物（评分 4.7/5）**
任务产物可直接发布为可分享 URL 的交互式仪表盘/项目追踪器，且 ChatGPT 能在底层数据变化时**持续刷新** Sites。这是同类里稀缺的形态——把「AI 产物」从静态文件升级为「可分享网页」。注意：Sites 公开发布在 EEA/瑞士/英国不可用（OpenAI 合规限制），目前为 public beta。

**3. 1400+ 插件连接器与定时任务（评分 4.5/5）**
@提及具体 App 即可获取真实上下文；Scheduled Tasks 让它在固定时间监控 Slack/邮件/仪表盘并自动更新文档、周报。aistackdigest 实测它能在 Google Sheets 内动态写公式、做数据清洗与 what-if 分析。连接器生态也是最大的**锁定面**——一旦团队在 Slack+Drive+Salesforce 上建好工作流，迁到 Claude Cowork/Gemini 等于重接所有集成。

**4. 权限、审批与安全管控（评分 4.3/5）**
敏感动作（发邮件/改日历/发布文档）前先征求许可并标注来源；企业 Admin Console 可配插件/工具访问、浏览器与网络限制、支出上限、按组/按人限额。OpenAI 的 Auto-review 层（由前沿模型在更高风险动作执行前复核）在红队测试里拦截了 **100% 的数据外泄尝试**——但 prompt-injection 对「连接了工具的 Agent」是结构性风险，无法根除。

**5. Computer Use 与桌面端能力（评分 4.2/5）**
桌面端比 Web 走得更远：内置浏览器、本地文件+App 访问、可在后台跨桌面点击/输入的 Computer Use，且支持带实时画面（PiP）的人工监督——agentconn 评价「目前唯一一款不强制你在自主与监督之间二选一的产品」。代价是桌面 App 从原生变为 Electron 套壳，体积从约 159MB 膨胀到约 1.5GB，社区反馈性能肉眼可见变差。

## 价格方案

ChatGPT Work **没有独立价格**，它是已存在计划上新增的一行功能；变化的是用量额度而非账单（用量同 Codex 的积分结构，长任务会更多消耗套餐内含额度，用尽可加购）。

<table>
  <tr><th style="background:#4a90d9;color:#fff">计划</th><th style="background:#4a90d9;color:#fff">价格（USD/月）</th><th style="background:#4a90d9;color:#fff">Work 可用性</th><th style="background:#4a90d9;color:#fff">备注</th></tr>
  <tr><td>Free / Go</td><td>$0 / $8</td><td>仅桌面端可用</td><td>桌面 App 全计划（含免费）首日即含 Chat/Work/Codex</td></tr>
  <tr><td>Plus</td><td>$20</td><td>Web·移动·桌面</td><td>可自选 Sol/Terra/Luna + effort；长任务会吃较多内含额度</td></tr>
  <tr><td>Pro</td><td>$200</td><td>首发即得</td><td>最高内含额度；`ultra`（4 个并行 Agent）仅 Pro/Enterprise 在 Work 内可用</td></tr>
  <tr><td>Business（原 Team）</td><td>$20/席（年付）· $25/席（月付），2 席起</td><td>Web·移动·桌面</td><td>含 SAML SSO、MFA、插件与 Sites</td></tr>
  <tr><td>Enterprise / Edu</td><td>定制（联系销售）</td><td>首发即得</td><td>SCIM、EKM、RBAC、10 区域数据驻留、Compliance API；Edu 两周期预览默认关，2026-07-23 自动开启</td></tr>
</table>

> 注：aistackdigest 给出的「Plus $40 + Work $30 = $70」「Team $3000/月」等为**未经 OpenAI 定价页确认的二手数字**，本文不予采信；以上价格均来自 OpenAI 官方定价页与多家独立评测（aitoolsreview / eesel / knowlix）交叉核对。

## 与竞品对比

<table>
  <tr><th style="background:#4a90d9;color:#fff">维度</th><th style="background:#4a90d9;color:#fff">ChatGPT Work</th><th style="background:#4a90d9;color:#fff">Claude Cowork</th><th style="background:#4a90d9;color:#fff">Fellou</th><th style="background:#4a90d9;color:#fff">Kimi Work / KroWork</th></tr>
  <tr><td>产品形态</td><td>ChatGPT 内 Agent 模式（托管）</td><td>Anthropic 全端 Agent（托管）</td><td>完整浏览器客户端</td><td>对话入口 + 浏览器桥接</td></tr>
  <tr><td>自主时长</td><td>✅ 数小时连续推进</td><td>✅ 数小时（限额更严）</td><td>⚠️ 中短任务为主</td><td>⚠️ 视任务</td></tr>
  <tr><td>跨应用生态</td><td>✅ 1400+ 官方插件</td><td>✅ 插件市场 + MCP</td><td>⚠️ 浏览器+登录态</td><td>⚠️ 各有桥接</td></tr>
  <tr><td>产物形态</td><td>✅ 文档/表/幻灯 + 实时 Sites</td><td>✅ 文档/表/幻灯（无 Sites）</td><td>✅ 研究报告</td><td>✅ 可分享应用</td></tr>
  <tr><td>安全管控</td><td>⚠️ Auto-review + 用量上限</td><td>✅ 本机隔离 VM/文件夹白名单/删除审批</td><td>⚠️ 重云端</td><td>⚠️ 各有所长</td></tr>
  <tr><td>数据主权</td><td>⚠️ 重云端托管</td><td>⚠️ 重云端托管</td><td>⚠️ 重云端</td><td>⚠️ 各有所长</td></tr>
  <tr><td>是否独立产品</td><td>⚠️ ChatGPT 模式</td><td>✅ 独立全端 App</td><td>✅ 是</td><td>✅ 是</td></tr>
</table>

## 优势与短板

**优势（具体）：**
- 自主时长与跨应用广度目前同类第一梯队，且背靠 500 万+ 周活 Codex 用户基数，生态成熟度远超新创桌面 Agent。
- Sites 把「AI 产物」从文件升级为「可分享、可实时刷新的网页」，协作形态稀缺；定时/监控型任务让它在你做别的事时持续运转。
- 关键动作前征求许可 + 来源标注，企业可配权限/支出，且 Auto-review 在红队测试拦截 100% 外泄——可控性在托管型 Agent 里属上乘。
- 桌面端全计划（含免费）首日可用，零额外费用即可上手；合并自 Codex 意味着非开发工作流也继承成熟工程底座。

**短板（坦诚）：**
- 非独立产品，与库内 chatgpt 条目能力重叠；纯离线/私有化需求不满足，敏感数据授权需谨慎。
- 重云端托管，Web/移动端仅付费计划可用，免费用户体验不完整。
- **首发口碑分裂**：合并后的桌面超级 App 被 TechRadar 评为「用户似乎讨厌它」、NetEase 引述沃顿教授 Ethan Mollick「我不明白 ChatGPT Work 是什么，用它替代 Codex 我得到什么又失去什么」。Projects 与 Custom GPTs 被埋、Chat 降级为弹窗、Electron 套壳体积暴涨至约 1.5GB是主要槽点。
- **单源风险事件**：TechTimes（2026-07-12，单源待多方确认）报道 GPT-5.6 Sol 在 Work 首发中误删用户文件，而 OpenAI 自家 System Card 事前已记录此失败模式——长任务执行需保持监督。
- 营销性表述（如「54% token 效率提升」）需独立验证，不宜直接采信；OpenAI 未公布 Work 专用错误率/幻觉率。

## 最终推荐

**适合：**
- 已在 OpenAI 生态、用 ChatGPT 做长链条知识工作（竞品分析、周报、客户研究、经营仪表盘）的个人与团队。
- 希望「委派一次、数小时收成品」、且需要把分析结果变成团队可实时查看仪表盘（Sites）的用户。
- 想零额外费用试 Agent 工作台的免费/Go 用户（桌面端即含 Work）。

**不建议依赖：**
- 需要离线/私有化部署的敏感场景 → 交给 Rowboat / LobsterAI。
- 纯浏览器穿透登录态深搜 → 交给 Fellou。
- 纯 IDE 重构 → 交给 Cursor / Kimi Work。
- 对桌面 App 稳定性与 Projects/Custom GPTs 入口强依赖的老用户 → 可暂留 ChatGPT Classic（Windows 商店可单独下载），等 OpenAI UX 修复后再迁移。

**组合建议：** 把 ChatGPT Work 当「跨应用自主长工时工作台」做分析与交付；Fellou 做穿透登录态的深度研究；KroWork 拼可分享小应用；Rowboat 管本地记忆——各取所长。

---

**评测声明**：本文基于 OpenAI 官网（openai.com/chatgpt-work）、ChatGPT Business Release Notes（2026-07-09 / 07-16）及独立评测 aitooltier、aitoolsreview.co.uk、eesel.ai、knowlix.ai、agentconn.com、TechRadar、NetEase 等公开报道撰写，差异化对比基于与本库已收录桌面智能体 / 工作台工具（Claude Cowork、Fellou、Kimi Work、KroWork、Rowboat 等）的能力梳理。所有营销性表述与单源事件（GPT-5.6 误删文件）均已明确标注，需独立验证。本文不含付费推广。
