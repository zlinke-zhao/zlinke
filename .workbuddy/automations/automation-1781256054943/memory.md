# ZLinke 每日工具评测 - 执行记录

## 2026-08-12: BrowserOS neo 深度评测（草稿转正）
- **工具**: BrowserOS neo（browseros.com/neo；Felafax, Inc. 旧金山、YC 背书；原名 BrowserClaw 因 SEO 改名；创始人 Nikhil Sonti & Nithin Sonti 双胞胎兄弟）
- **评级**: 4.0/5.0（与 tools.ts 现有 rating 一致，未改）。分项：定位稀缺性 4.5 / 登录态复用+可观测 4.5 / 免费开源本机 4.5 / 并行与隔离 4.0 / 省 token 快照 4.0 / **安全与权限隔离 2.5**（登录态共享是设计 + per-agent 隔离仅路线图 + MCP 端点即控制权）
- **文件**: content/tool-reviews/browseros-neo.md（中文约 2000 字，4 个 HTML 表格 / 13 处蓝底白字 th；PyYAML 解析 OK，0 中文弯引号 / 0 NBSP / 0 U+FFFD / 0 Markdown 表格残留；4 个 alternatives slug 均存在：fellou / agentsky / claude-cowork / manus）
- **tools.ts 同步**: 未改（rating 4.0、price、features 已准确）；无需重跑 tsc
- **Git 提交**: 待 push；git rm 删除 browseros-neo.md.draft
- **草稿转正关键处理**: 旧草稿是「体验笔记」格式、含「待站长亲测清单」占位符与「草稿」标题，转正时整体删除占位、改写为标准 frontmatter + 4 表格结构；文末声明站长未亲测、实测结论均转引具名第三方

### 🔑 关键事实源（2026-08-12 重新核验；草稿写于 8-09，部分数据需复核）
- **官方**: browseros.com/neo（四大能力、FAQ、对比表、平台支持、改名说明）；完整版 browseros.com（YC 背书、13 家模型商、53 项浏览器工具、40+ MCP 集成）；GitHub browseros-ai/BrowserOS（AGPL-3.0、© Felafax、3,472 commits、最近提交 2026-08-08）
- **GitHub Stars**: 12,000+（官网与多家评测一致口径；neo 与完整版共仓）
- **价格**: 完全免费、开源（AGPL-3.0）；模型费由自带 Key/订阅另计（toolworthy / chatgate 均标 100% Free）
- **功能（官方 FAQ + PH 发布贴交叉）**: 一键导入 Chrome 登录态；MCP 6 家一键（Claude Code/Cursor/Codex/VS Code/Zed/GitHub Copilot）+ 其余 URL；驾驶舱实时 + 会话可回放（可拖进度条录像）；并行 Agent 各自标签页；传精简快照非截图省 token；本机运行数据不出本机
- **独立评测**: toolworthy.ai（免费、AGPL 商用提示、Chromium 分支维护风险）；pidune.com（72h 实测 4.2/5、安装到跑通约 15 分钟、16GB Mac 跑 4 Agent 卡顿、回放抓 Shopify 下拉框错、不推荐 7×24 无人值守）；chatgate.ai（MCP 端点安全边界、隐私政策辨析、Linux 规划）
- **⚠️ Product Hunt 票数分歧（重要，勿取单一数字）**: hunted.space 2026-08-12 实时 = 127 赞 / 6 评论 / 当日第 6；CSDN 2026-08-08 热榜记 195 票 / 第 5；旧草稿曾记 209 赞 / 16 评论 / 第 5（疑似早期快照）。文中以「Product of the Day、当日榜单前列」表述，不写死单一票数

### 下一步建议
- 剩余草稿按完整度：**dumate(6.2KB) > aipy(4.7KB) > jiuwenswarm(4.2KB) > skywork-desktop(4.0KB) > qwenpaw(3.7KB) > minimax-agent(3.5KB)**（browseros-neo 已转正）
- 选题机会：BrowserOS neo（本机浏览器复用登录态）+ Perplexity Personal Computer（云端 Comet 浏览器）+ AgentSky（云端托管寿命）可组「Agent 上网的两条路 / 该住在谁的机器上」横评
- 流程注意：草稿「待站长亲测清单」占位符转正必须整体删除；`.md.draft` 是被 git 跟踪的，转正 `git rm`；临时校验脚本用完 PowerShell `Remove-Item -LiteralPath` 清理

## 2026-08-11: AgentSky 深度评测
- **工具**: AgentSky（agentsky.dev；定位 managed agent as a service，托管式 Agent 运行时，不生产 Agent 只出租 Agent 寿命）
- **评级**: 3.6/5.0（由 tools.ts 的 3.9 下调）。分项：Harness/模型自由度 4.5 / 开发者工程完成度 4.5 / 定价透明度 4.5 / 持久运行时与恢复 4.0 / sky clone 迁移 3.0 / 全渠道与跨渠道身份 3.0 / 数据主权与合规 2.5 / 可观测性与故障告警 2.0 / 成熟度与公开证据 2.0 → 均分约 3.4，因「库内唯一把 harness 当可替换耗材 + CLI/API 做到 fly.io 水位」上调约 0.2
- **文件**: content/tool-reviews/agentsky.md（中文正文 3130 字，22.8KB；4 个 HTML 表格 / 14 处蓝底白字 th；PyYAML OK，0 中文弯引号 / 0 NBSP / 0 U+FFFD / 0 Markdown 表格残留；4 个 alternatives slug 均存在：hermes-agent / openworker / manus / qwenpaw）
- **tools.ts 同步**: rating 3.9→3.6；price 改写为完整两条计量线 + 估算器结论；features 12 条全面重写（补入默认 harness、Kimi K3 兼容边界、clone 边界、best-effort 恢复、无存活告警、connect chatgpt 需上传 Codex 登录态、CLI/API 细节、中文生态零覆盖）；`npx tsc --noEmit` 通过
- **Git 提交**: 1bcca96（已 push 至 main）；git rm 删除 agentsky.md.draft

### 🔑 本次三处实质纠错（草稿写错，勿再沿用）
1. **sky clone 不是整体搬家**：官方 CLI reference 原文 `clones instructions, model, secretless MCP servers — never secrets or history`，且标注 Claude Code first。历史一条不过去、密钥须 `sky secrets set` 重设。第三方 aitoolly 独立记录「Local secrets and API keys are not synced during cloud cloning」与官方互为印证
2. **快照幂等问题厂商已回应**：AgentSky maker 在 PH 讨论区明说 state restoration is best-effort、无法排除竞态，快照不应被当作外部副作用的 exactly-once 保护（chatgate.ai 转述 PH 讨论）。草稿写的「官网未作说明」已作废
3. **默认 harness 是 hermes 而非 Claude Code**（agent.toml `type` 默认值）；且官网顶栏公告 Kimi K3 仅在 Hermes 与 OpenClaw 可用，模型与 harness 非全矩阵兼容

### 关键事实源（均已核验，2026-08-11 读取）
- **官方一手**：agentsky.dev 首页（7 渠道、内置能力供应商清单、10k+ sessions for Tycoon/Webjourney、ZDR、Self-evolving coming soon）；/pricing（11 款模型输入输出单价 + 1/2/4GB 算力三档 + 内嵌估算器）；/docs 开发者快速上手；/docs/agent-toml；/docs/cli
- **定价硬数字**：算力 1GB $0.021/h·$0.51/24h·$15.24/月，2GB $0.038·$0.91·$27.16，4GB 默认 $0.071·$1.70·$51.01；挂起/停放 $0，按秒计、不足一分钟不计。模型：Claude Fable 5 $15/$75，Opus 5 $7.50/$37.50，Sonnet 4.6 $4.50/$22.50，GPT-5.6 Sol $7.50/$45，Terra $3/$18，Luna $0.30/$1.80，Gemini 3.5 Flash $1.13/$6.75，GLM-5.2 $2.10/$6.60，Kimi K3 $4.50/$22.50，DeepSeek V4 Pro $0.65/$1.31，Flash $0.21/$0.42
- **估算器**：Claude Fable 5 + 4GB + 20 轮/天 + 唤醒 2h/天 = **$121.25/月（$117 模型 + $4.25 算力）**，假设单轮约 8k 输入 + 1k 输出 → 首页「Starts at $3/mo」只描述了账单约 3.5%
- **docs 细节**：`npm i -g @agentsky/sky`；`sky launch` 脚手架 agent.toml；API 统一 `/api/v1`，发消息返回裸 202、输出走常驻 SSE，漏事件从 events 端点重放并按 event id 去重，终点看 `turn.status_idle` 的 `stop_reason`；agent.toml 只有 name 必填，vcpus 1|2|4|8、memory_mb 每 vCPU 256–2048MB（**但定价页只公布到 4GB，8 vCPU 机型价格未公开**）；skills 支持 registry|git|package|archive；secrets 写入不可读回、静态加密；文件不过网（CLI 客户端校验并内联）
- **BYO 通道**：`sky auth connect claude` 调起 `claude setup-token`；`sky auth connect chatgpt` 需**上传本地 Codex 登录态**（信任成本）；disconnect 后该订阅上的 Agent 会失败直到切回 Platform
- **PH 数据口径分歧（已在文中并列标注）**：hunted.space 最新 469 赞/60 评论、早期快照 376/48；ustack 441；aitoolly 438；launly 371/40。均为 #1 Product of the Day，hunter 是 PH 现任 CEO Rajiv Ayyangar。**PH 上仅 1 条评价 5.00/5**
- **渠道口径分歧（已并列标注）**：官网首页只列 7 项无 Discord；chatgate.ai 与 aitoolly 均写含 Discord
- **PH 评论区两条尖锐质疑（hunted.space 原文）**：①停放免费抹掉故障信号——死掉的 Agent 和便宜的月份在账单上长得一样，建议启动时声明预期 cadence 由平台告警；②快照 + 外部副作用的幂等问题（恢复到发 WhatsApp 前无法知道消息发没发）。另有多人追问跨渠道身份归并规则，官方至今未公开
- **独立评测**：VibeWatch 归类为 cloud agent hosting，明确 flag 公开证据薄弱 + 托管让出控制权

### 下一步建议
- 剩余草稿按完整度：**browseros-neo(8.7KB) > dumate(6.2KB) > aipy(4.7KB) > jiuwenswarm(4.2KB) > skywork-desktop(4.0KB) > qwenpaw(3.7KB) > minimax-agent(3.5KB)**
- 选题机会：AgentSky（云端托管、放弃数据主权换寿命）+ BrowserOS neo（本机执行、复用登录态）+ QwenPaw（本地部署 IM 远程指挥）可组一篇「Agent 该住在谁的机器上」三方横评
- 流程注意：草稿里凡「官网未作说明」「待站长亲测清单」类表述，转正前必须重新检索一次——本次三处纠错全部出在这类占位说法上；临时校验脚本写进 scripts/ 后用 PowerShell `Remove-Item -LiteralPath` 清理（本次已清）

## 2026-08-10: Perplexity Personal Computer 深度评测
- **工具**: Perplexity Personal Computer（perplexity.ai/computer；官方定语 local agent harness）
- **评级**: 3.7/5.0（由 tools.ts 的 3.9 下调）。分项：多模型元路由 4.5 / 研究与交付 4.5 / 本地文件与 Office 渗透 4.0 / 长时运行交付 4.0 / **成本可预测性 2.0** / 工程完成度与可观测性 2.5 / 信任与合规 2.5 → 均分 3.43，因「多模型元路由 + 本地文件读写 + 400+ 连接器」三合一在库内独一份且长时运行能力被多方独立复现，上调 0.27
- **文件**: content/tool-reviews/perplexity-computer.md（正文中文 3086 字，19.9KB；4 个 HTML 表格 / 14 处蓝底白字 th；PyYAML 解析 OK，0 中文弯引号 / 0 NBSP / 0 U+FFFD / 0 Markdown 表格残留；4 个 alternatives slug 均存在）
- **tools.ts 同步**: rating 3.9→3.7；price 改写为五档全价目 + 额度规则；features 新增「两个同名产品必须分清」「沙箱规格」「额度机制头号差评源」「独立实测数据」「独立评测短板」「口碑两面镜」「信任背景」七条；`npx tsc --noEmit` 通过
- **Git 提交**: 420910d（已 push 至 main）；git rm 删除 perplexity-computer.md.draft

### 🔑 本次最大增量：厘清了两个同名产品（此前草稿与多家中文报道全部混淆）
- **Computer** = 2026-02-25 上线的**云端** Agent 平台，跑在托管云沙箱，**够不着本机文件**；2026-03 起已下放 Pro 档，$20/月带 **500 额度/月**
- **Personal Computer** = **桌面常驻变体**，2026-03-11 以 Mac mini 形态宣布并开候补 → 04 月上 macOS → **07-28 补齐 Windows 10/11**；**至今仅 Max / Enterprise Max**
- 结论：草稿里「zhichai 称 Pro 也能用 vs 英文源称仅 Max，口径冲突」**不是冲突，是两个产品**。$20 能用云端 Computer 一小口，想动本机文件起步 $200

### 关键事实源（均已多源交叉）
- **五档全价目**（sentisight + aitoolsatlas + felloai + staxly 交叉一致）：Free $0 无 Computer / Pro $20 月・$200 年（页面显示约 $17/月）含 500 额度 / **Max $200 月・$2,000 年（约 $167/月）含 10,000 额度 + 桌面 Agent** / Enterprise Pro $40 席月・$400 席年 / Enterprise Max $325 席月・$3,250 席年 含桌面 Agent。另有 Education Pro $10/月、Comet Plus $5/月
- **额度规则**：当月清零不结转；自动续费**默认关闭**，默认月度加购上限 $200（默认最大月支出 $400），可上调至 $2,000；上线期一次性 20,000 奖励额度（30 天过期）+ 35,000 限时促销，均已结束；额度耗尽时任务**暂停不取消**，补额后自动续跑
- **额度实际消耗**：alt-text 约 30 额度 / 简单调研加报告数百 / **建一个基础网页遇部署问题 10,000+（Max 整月配额，Builder.io）** / 重度日用月度实付 $300-500（Reddit）/ 有 Max 用户「两个月烧掉 7 万额度」
- **ai-tools-hub 一周实测**：竞品调研 10 家 38 分钟耗月额度约 4%；ICP 分析 22 分钟约 2.5%；Streamlit 看板 1 小时 12 分约 6%；2500 字长文 17 分钟约 1.5%；30 标签页市场扫描 51 分钟约 5%。**抽检 5 份报告约 100 条引用：87 准确 / 9 部分正确 / 4 编造**
- **模型**：2 月首发 19 个 → 3 月 20+；默认主编排器 **Claude Opus 4.7**（Perplexity 4 月 changelog），可切 GPT-5.4 / Claude Sonnet 4.6；分工 Opus 核心推理 / Gemini 3 Pro 深研 / GPT-5.2 长上下文 / Grok 轻任务 / GPT-5.3-Codex 代码 / Nano Banana 图 / Veo 3.1 视频
- **沙箱**：隔离 Linux 2 vCPU / 8GB 内存，预装 Python、Node.js、ffmpeg；单任务可跑数小时
- **厂商自陈两条限制**（techjacksolutions 标注为 Vendor）：长任务实时烧额度（已加实时额度计数器）；长对话会退化、系统会提议压缩重启上下文
- **独立评测短板**：Zapier——自主网页导航脆弱且比人慢，Cloudflare/反爬限流甚至困住 Agent，AI 音频 not ready for prime-time；Dania Accounting——会计税务等细分议题产出不均需人工复核；Vercel OAuth 令牌每会话过期，有评测者因静默失败烧 10,000 额度推坏构建
- **口碑两面镜**（okaneland 1,024 帖研究）：Google Play 4.6 分 / 203 万评分 / 编辑推荐 vs **Trustpilot 1.5 分 / 707 条 / 82% 一星，几乎全为计费退款争议**
- **安全**：LayerX 研究员 Paloma Perlov 称 Comet 比 Chrome 易受钓鱼/网页攻击**最高高出 85%**（TechTimes 2026-06）；研究者 Stav Cohen 记录「意图冲突 intent collision」
- **法律信任**：亚马逊 2026-03-10 获禁令阻止 Comet 抓取；Cloudflare 记录隐形爬虫规避禁抓；Reddit / Forbes 诉讼进行中；Doe v. Perplexity AI（3:26-cv-02803, N.D. Cal.）03-31 提交、05-01 无偏见撤诉；旧金山 AI 活动 300+ 创始人评其为独角兽中「最可能失败」
- **竞争面**：MS 365 Copilot 约 $30/席/月，AP 报道 4-6 月季度付费席位破 3000 万；Perplexity 2026-01 与 Azure 签三年 7.5 亿美元 GPU 承诺（挑战 Copilot 却跑在微软云上）
- **企业版**：2026-03 Ask 2026 大会推出，Slack 频道内 @computer、Snowflake（自动 Data Map 自然语言转 SQL）/ Salesforce / HubSpot 连接器、SSO、合规；支持通过 MCP 自带连接器

### ⚠️ 已剔除/降权的说法（勿再沿用）
1. byteiota 称「2026-06 引入混合本地-云端推理编排器，本地小模型分流敏感数据，支持 Intel Core Ultra Series 3 与 NVIDIA RTX Spark」——**与其余全部信源的「推理全在云端」直接矛盾**，且该文模型清单陈旧、Operator OSWorld 38.1% 疑为旧数，本次未采用
2. 草稿称「订阅档位口径媒体间打架，以官网为准」——已查明是两个产品之别，本次写清
3. 时间线分歧如实标注不拍板：Mac 版具体月份各源不一（digitalapplied 自陈 sources disagree）；M365 侧边栏与 Teams 有 5 月与 7 月两说，The Verge 一系倾向 5 月
4. 四层架构系独立研究者 **Ajit Singh** 2026-03 逆向、TechTimes 引用，**非厂商确认**，文中已标注
5. 本文引用的 bycrawl / ai-tools-hub / sentisight / digitalapplied / techjacksolutions / okaneland 多为聚合型内容站，已尽量多源交叉，无法交叉的（如具体额度百分比）在文中标注来源单位；文末声明站长未订阅 Max、所有实测数字均转引具名第三方

### 下一步建议
- 剩余草稿按完整度：**agentsky(10.5KB) > browseros-neo(8.7KB) > dumate(6.2KB) > aipy(4.7KB) > jiuwenswarm(4.2KB) > skywork-desktop(4.0KB) > qwenpaw(3.7KB) > minimax-agent(3.5KB)**
- 选题机会仍在：BrowserOS neo（本机浏览器复用登录态）+ Perplexity Personal Computer（云端 Comet 浏览器）路线正相反，可组一篇「Agent 上网的两条路」横评
- 流程注意：`.md.draft` **是被 git 跟踪的**，转正时必须 `git rm`（不是 PowerShell 删）；临时脚本写进 workspace 后用 PowerShell `Remove-Item -LiteralPath` 清理；bash 里 `/tmp` 会被解析成 `E:\tmp`，临时脚本请直接写到工作区
- 校验四件套固定跑：PyYAML 解析（managed python 无 pyyaml，用 `D:/anaconda3/python.exe`）、0 中文弯引号/NBSP/U+FFFD、0 Markdown 表格残留、所有 `<th>` 带 `#4a90d9`+`#fff`

## 2026-08-09: 灵犀专业版（金山办公）深度评测
- **工具**: 灵犀专业版（金山办公 A股688111，www.lingxi.cn，Web 版 lingxi.kdocs.cn；2026-07-15 上海「2026 AI 生产力大会」发布，内测期名为 WPS 灵犀 Claw）
- **评级**: 4.0/5.0（由 tools.ts 的 4.1 下调）。分项：Office原生交付 5.0 / 记忆与上下文 4.5 / Pro模式性价比 4.0 / 平台与插件兑现 3.0 / 模型透明度 3.0 / **计费机制成熟度 2.5** → 均分 3.67，因「Office 原生交付」是办公 Agent 第一性能力且它是目前唯一做透的一家，上调 0.33
- **文件**: content/tool-reviews/lingxi-pro.md（中文 3963 字，4 个 HTML 表格 / 17 处蓝底白字 th；PyYAML 解析 OK，0 中文弯引号 / 0 NBSP / 0 U+FFFD / 0 Markdown 表格残留；4 个 alternatives slug 均存在）
- **tools.ts 同步**: rating 4.1→4.0；price 补全四档灵点数+首月加赠+加量包+「WPS大会员不打通」；features 补入 SpreadsheetBench 成绩、自动做梦、1.2.27、多维表 API 边界、定时任务上限、统信 UOS 不支持；`tsc --noEmit` 通过
- **Git 提交**: dd1d7fd（已 push 至 main）；git rm 删除 lingxi-pro.md.draft

### 关键事实源（均已核验）
- **官网实时读取（8-09）**：桌面端 **1.2.27**（下载链接含版本号）；Office 插件 / Chrome 插件 / 微软 Office 版**全部仍标「即将上线」**；产品形态页只有桌面客户端 + Web 端，**无独立移动 App**；四层记忆架构、同花顺/国家统计局/arXiv 数据源为官网原文
- **定价（2026-08-03 起，官网 lingxi.kdocs.cn/cashier + bbs.wps.cn/topic/93940 + topic/93529 三方交叉一致）**：体验版免费 800 灵点；标准版 ¥48/5,000（首月加赠 5,000，约 104 灵点/元）；进阶版 ¥128/14,000；旗舰版 ¥398/48,000；加量包 ¥25/2,000（80 灵点/元、1 年有效、**限标准版以上**）。**灵点有效期仅 1 个月、过期作废**
- **SpreadsheetBench**：2026-07-11 **WPS AI 表格 Agent**（注意：不是「灵犀专业版」本名）98.25% 登顶 Verified 400 专家精标榜；6 月 Full 912 全量榜 73.46% 首超人类专家基线。极目新闻/新湖南/北方网/搜狐多家独立报道
- **灵点横评（bbs.wps.cn/topic/93635，同任务同日）**：灵犀 Pro 10 灵点 / Max 167 灵点（**差 16 倍**）/ TraeWork Auto 130.12 积分 / WorkBuddy Auto 184.99 积分；版本 灵犀1.2.27、WorkBuddy5.3.8、TraeWork0.1.43
- **AirScript 实测（topic/93650）**：脚本生成一次 80–90 灵点、固化后执行零消耗；10 分钟批量建 103 个客户视图（人工 600+ 步 1 小时以上）。边界：多维表 API 仅支持创建视图，筛选条件需 WebSocket 二进制协议，无法自动设置
- **差评源（WPS 官方论坛原声）**：topic/91709「灵点归零才弹追赠入口、人工审批不确定、大会员半点额度都没有」；home.wps.cn/topics/node/23「暂不支持统信 UOS」「定时任务最多 15 天 / 最多同时运行 5 个」；topic/88568 官方灵点 FAQ（任务失败不扣费、支持自定义模型）
- **正面实测**：腾讯新闻雷科技罗超 2026-07-29（项目制记忆、展会统筹）、网易 L20F32SV（PPTX 标准母版可编辑、原文件上改稿不乱）、甲子光年 WAIC 现场（三层上下文、公式可核验）、bbs 用户「月度经营分析 4 小时→52 分钟」
- **金山三产品必须区分**：WPS AI（嵌 Office 组件、含大会员权益）/ 灵犀专业版（独立个人 Agent、单独灵点计费）/ WPS Comate（企业 AI 中台、随 WPS 365）。三者会员体系互不打通

### ⚠️ 已修正 8-06 旧草稿的错误（勿再沿用）
1. 草稿称「不能自定义模型」→ 官方 FAQ 明确**客户端支持添加自定义模型**，只是用户反馈外接模型仍扣灵点
2. 草稿称「SpreadsheetBench 属官方口径、未见第三方复测」→ 实为**公开国际基准榜单**，多家媒体独立报道，可放心引用（须注明主体是 WPS AI 表格 Agent 而非灵犀）
3. 草稿称「发布初期需邀请码，现状待确认」→ 已确认**正式发布后不再需要邀请码**
4. 草稿「待站长亲测清单」为占位符，转正时整体删除，改为文末明确声明站长未安装实测
5. 草稿称「无直接充值渠道」→ 8-03 加量包上线已部分修复，但限标准版以上，免费用户仍只能干等
6. 草稿引的「今日头条自媒体称 15 元/月、学生免费」来源仍判定不可信（其对比表出现「竞品A/竞品B」「飞书智脑」等生造内容），本次未采用

### 下一步建议
- 剩余草稿按完整度：**agentsky(10.5KB) > browseros-neo(8.7KB，今日新收) > dumate(6.2KB) > aipy(4.7KB) > jiuwenswarm(4.2KB) > skywork-desktop(4.0KB) > qwenpaw(3.7KB) > minimax-agent(3.5KB)**
- 选题机会：BrowserOS neo + AgentSky + Claude Cowork 可组一篇「Agent 的脑、手、寿命」横评
- 流程注意：工作区 `rm` 会被 safe-delete 沙箱拦截，删未跟踪文件用 PowerShell `Remove-Item -LiteralPath`，跟踪文件用 `git rm`；收尾务必确认 `git status` 中 content/ 与 lib/ 干净（本次已确认）

## 2026-08-07: OpenWorker（吴恩达开源桌面 AI 同事）深度评测
- **工具**: OpenWorker（Andrew Ng 团队，openworker.com；github.com/andrewyng/openworker，MIT；引擎建在自家 aisuite 上，非 OpenClaw 系）
- **评级**: 3.8/5.0（由 tools.ts 的 3.9 下调）。分项：交付成品 4.5 / 模型无关 3.5 / 审批权限 4.0 / 连接器与生态 3.5 / 工程完成度 3.0 → 均分 3.7，为「MIT 真开源+独立技术血统+零商业绑定」补 0.1
- **文件**: content/tool-reviews/openworker.md（中文 3872 字，3 个 HTML 表格 / 10 处蓝底白字 th；PyYAML 解析 OK，0 中文弯引号 / 0 NBSP / 0 U+FFFD / 0 Markdown 表格残留）
- **tools.ts 同步**: rating 3.9→3.8；price 补官网 FAQ 原话；模型清单补 Inkling/Together/Fireworks；平台项补「仅 Apple Silicon 有签名包 / 无中文界面」；新增 Beta v0.1.7 与 Skills 占位现状；`tsc --noEmit` 通过
- **Git 提交**: e77b499（已 push 至 main）；顺带 git rm 清理三个已转正草稿：openworker / hermes-agent / lobsterai

### 关键事实源（均已核验）
- **GitHub API 实时读取（2026-08-07）**：13,320 Stars / 1,789 Forks / 396 未关闭 Issue；仓库创建 2026-07-20，7-23 吴恩达在 X 公开发布
- **版本**：最新 release v0.1.7（2026-07-30），另有 v0.1.6(7-23)/v0.1.5/v0.1.4；主干最近提交 2026-08-01
- **Skills 真相**：PR #391 于 2026-08-01 合入，标题是 Add support for Skills，但作者 body 原文说明 per-persona skills 后续重设计、**现在只是先打个桩（simply stubbing it for now）**，不可宣传为成熟技能生态
- **三个安全 Issue 自 7-24 起仍 open**（API 核实）：#100 web_fetch 无 SSRF 防护、跟随重定向、被判低风险免审批；#99 Tauri CSP 被设 null；#81 stdio MCP server 在权限引擎存在前已获网络能力
- **官方 README/官网**：Open Beta；macOS 12+ 仅 Apple Silicon 签名公证；Windows 10/11 未代码签名（SmartScreen 告警，签名进行中）；无 Linux；25+ 连接器全欧美 SaaS；11 家模型厂商 + Together/Fireworks + Ollama；FAQ 原话「你直接付钱给模型厂商，一分钱不付给我们」+「不需要账号，登出状态全功能可用」
- **实测源**：毒AI 高晓阳 2026-07-29 全天实测（15 文件 10 秒归档零误判 / 摘要 2 分钟 / HTML 调研 3 分钟 / 全天零崩溃 / **Kimi 官方 Key 一直显示无效，DeepSeek 秒过** / 模型切换不重启）；AI科技评论 2026-08-03《吴恩达开源的 OpenWorker，为什么「不 Work」了？》（自建 OpenAI 兼容端点检测通过却提示无可用模型、本地 Ollama 加载不出模型、**额度不足时连返三次同错误不停止不提示**）；搜狐（代码规模 119 个 py 约 3.24 万行 / 149 个 TS / 78 测试模块、三层审批模式、shell asks forever）
- **Star 增长轨迹**（多源交叉）：3,461(7-25) → 5,800(7-26) → 9,700(7-29) → 13,320(8-07)

### ⚠️ 已剔除的错误说法（勿再沿用）
1. CSDN 标题「3.7 万个星标」有误——其正文实为「24 小时 3700 星」，真实值以 GitHub API 为准
2. 早期传闻「内置多种角色模板」属夸大——7-25 有研究者查源码核实当时**仅 1 个 ops persona**
3. 草稿里「待站长亲测清单」属占位符，转正时已整体删除，改为文末明确声明「站长未亲自安装实测」

### 下一步建议
- 剩余草稿按完整度：**lingxi-pro(9.4KB，金山灵犀专业版，已在 tools.ts 收录 rating 4.1)** > dumate(6.2KB) > aipy(4.7KB) > jiuwenswarm(4.2KB) > skywork-desktop(4.0KB) > qwenpaw(3.7KB) > minimax-agent(3.5KB)
- 每次运行结束确认 `git status` 中 content/ 与 lib/ 干净（本次已确认）
- 注意：工作区 `rm` 会被 safe-delete 沙箱拦截并 fail-closed，删未跟踪文件请改用 PowerShell `Remove-Item -LiteralPath`，跟踪文件用 `git rm`

## 2026-08-06: Hermes Agent（Nous Research）深度评测
- **工具**: Hermes Agent（Nous Research 出品，hermes-agent.nousresearch.com；开源 Agent 运行时，MIT，GitHub 22.6 万 Stars / 4.4 万 Forks；首版 2026-02-25，最新 v0.20.0「The Herald Release」2026-08-03）
- **评级**: 4.2/5.0（由旧草稿 4.3 下调）。依据：v0.20 能力完整（流式语音+A2A+可溯源研究+桌面平台 4.5/5）+ 技能自学习/跨渠道记忆（4.5/5）；扣分：偏开发者向需自配环境（4.0）+ 记忆自学习循环已知粗糙/水军嫌疑（4.2）
- **文件**: content/tool-reviews/hermes-agent.md（中文 2742 字，3 个 HTML 表格含蓝底白字 th；YAML 解析 OK，0 中文弯引号/0 NBSP/0 U+FFFD/0 Markdown 表格残留）；删除 hermes-agent.md.draft
- **tools.ts 同步**: rating 4.3→4.2；url 由 hermes-agent.ai 改为 hermes-agent.nousresearch.com；price 由杜撰的「FlyHermes $49/月」改为真实 Nous Portal 三档（$20·100·200 月，含 10% 赠送）；features 更新为 v0.20 能力
- **Git 提交**: 36f0bbb（已 push 至 main）
- ⚠️ **纠正旧草稿三处硬伤（勿再沿用）**：①版本号 v0.16→实际 **v0.20.0**；②Stars「10k+」→实际 **22.6 万**；③官网域名 hermes-agent.ai→实际 **hermes-agent.nousresearch.com**；④价格「FlyHermes $49/月」纯属杜撰→实际为 **Nous Portal**（$20/100/200 月）
- **关键事实源（均已核验）**：GitHub API（Stars/forks/版本/发布时间）、v0.20.0 官方 release notes、Nous Portal 定价页（portal.nousresearch.com/manage-subscription）、Hostinger 成本拆解、Kie.ai 产品分析、aiagentstore 的 Reddit/X 20 大问题汇总、r/hermesagent 社区帖（「是我用错了还是它真没那么神」93 赞）、pasqualepillitteri 社区舆情分析（r/openclaw 10.3 万成员：约 30% 切到 Hermes、20% 并用）
- **下一步建议**：剩余草稿按完整度：openworker(7.9KB，吴恩达开源桌面 Agent) > dumate(6.2KB) > aipy(4.7KB) > jiuwenswarm(4.2KB) > minimax-agent(3.5KB) > qwenpaw(3.7KB) > skywork-desktop(4.0KB)；注：lobsterai.md.draft 仍残留在工作区（正文 lobsterai.md 已于 0f6a603 提交，该 draft 应删）

## 2026-08-05: StepClaw（阶跃龙虾）深度评测 + 补交 LobsterAI
- **工具**: StepClaw（上海阶跃星辰，stepfun.com/download；OpenClaw 深度优化的桌面级 Agent，端云协同）
- **评级**: 4.1/5.0（由 tools.ts 的 4.3 下调）。分项：零门槛安装 5/5、水产市场生态 4.5/5、五端IM远程 4.5/5、个性化养成 4.5/5、**编程与复杂任务执行 2.5/5**
- **文件**: content/tool-reviews/stepclaw.md（中文 4812 字，3 个 HTML 表格 / 12 处蓝底白字 th；校验全过：0 中文弯引号 / 0 NBSP / 0 U+FFFD / 0 Markdown 表格；PyYAML 解析 OK）；git rm 删除 stepclaw.md.draft
- **tools.ts 同步**: rating 4.3→4.1；price 由「免费 / StepPlan ¥25–49 月（开发者半价）」改为「客户端免费 / Step Plan ¥49·99·199·699 月（年付低至 ¥38/月）」
- **Git 提交**: ba0f123（已 push 至 main）

### ⚠️ 修正了 7-22 旧草稿的三处错误（重要，勿再沿用旧稿说法）
1. **信通院认证时间**: 旧稿写「2026.5 首批过信通院」→ 实为 **2026-06-17** 由信通院 AIIA 安全治理委员会在「智能体时代AI安全治理研讨会」颁发首轮证书；且**同批共 7 家**（华为/百度/智谱/阶跃/MiniMax/浩鲸等），非独家差异化，文中已做祛魅
2. **定价体系已换代**: 旧稿「¥49 起 + 开发者半价 ¥25」中的 ¥25 是 3/22 发布期限时促销。新版 Step Plan 已**取消「每5小时N次Prompt」滑动窗口限流，改为月度 Credits 池**：Mini ¥49/400M、Plus ¥99/1600M、Pro ¥199/8000M、Max ¥699/40000M（季付 129/269/539/1889，年付 456/936/1860/6666，年付最高省 ¥1722，Studio 额外 40% 额度）
3. **剔除未核实来源**: 旧稿的「InfoQ 实测编程弱」「IT时报实测日历接入繁琐」两处搜索无法证实，已删；CSDN devpress 页（疑 AI 生成内容农场）称「Electron 内存占用 22.3GB」数值荒谬，已弃用

### 关键事实源（均已核验）
- 官方：platform.stepfun.com/step-plan 实时价格页、stepfun.com/download 功能页
- 权威媒体：中国日报财经 2026-03-19（水产市场 5000+创作者/5000+资源/五类资产）、21世纪经济报道+证券时报（近25亿美元融资、估值50-60亿美元、股改拆红筹冲港股）、新民晚报/头条（Step Plan 4档发布、起步价49元）
- 信通院：10100.com 首轮评测结果解读（6/17 颁证、7家、六大观察）、yeyulingfeng 参评产品介绍（云端规格双核/4GB/40GB）
- 第三方实测（构成 cons 依据）：SegmentFault 三款国产Claw横评（StepClaw 缺点栏原文「编程能力弱」）、腾讯新闻 20260331A03YJ700（**单次定时日报对话消耗百万级token**）、头条 7663107795687883305（Windows偶发任务卡住、技能质量参差、微信「小龙虾」联系人）、neican.ai（长路径任务逻辑偏移）

### 🔴 顺带修复：补交昨日遗留
- 8-04 那次运行生成了 content/tool-reviews/lobsterai.md（18.8KB）但**未 commit、也未写 memory**，本次已核验质量合格后补交为 0f6a603 并删除 lobsterai.md.draft
- **教训**：每次运行结束务必确认 `git status` 干净 + memory 已写，避免成果悬空

### 下一步建议
- 剩余草稿按完整度：hermes-agent(11.7KB，Nous Research 开源运行时) > dumate(6.2KB) > aipy(4.7KB) > jiuwenswarm(4.2KB) > skywork-desktop(4.0KB) > qwenpaw(3.7KB) > minimax-agent(3.5KB)
- 注意：hermes/stepclaw 旧草稿里都有一条 cons「亲测步骤需站长补入」属于占位符，转正时必须删除

## 2026-08-03: 千问办公（QwenWork）深度评测
- **工具**: 千问办公 QwenWork（阿里，qwenwork.cn；钉钉新任CEO陈宇森负责，6/11接任→7/27上线仅46天；整合 QoderWork+悟空+MuleRun 三条产品线）
- **评级**: 4.0/5.0（Office产物生成5/5 — 实测7分钟出12页Alphabet财报PPT且核心数据与官方财报逐条对得上；企业IM 4/5；网页生成3/5 — 两家媒体独立实测均耗时63-68分钟且卡在配图；模型/成本3/5 — 官方无积分消耗表）
- **文件**: content/tool-reviews/qwenwork.md（25KB，中文6051字，4个HTML表格含蓝底白字th；YAML解析通过：0中文弯引号/0 NBSP/0 U+FFFD/0 Markdown表格残留）；git rm 删除 qwenwork.md.draft
- **tools.ts同步**: rating 4.2→4.0，price 补全连续包月8折档位（78/158元）
- **Git提交**: 6fc2f0f（已push至main）

### 关键事实源（均已核验）
- 官网 pricing 页个人版/企业版全档位、download 页系统要求、阿里云帮助文档 qw-model-selection-desktop（三档模型+官方原话「建议先完整执行一次工作流来了解成本」）
- 实测：腾讯新闻 20260727A0BZHH00（财报PPT 7分钟/飞书乱码/电商网页68分钟/约1000积分）、网易 L2UU7K2P05566Y1D（Word 29分08秒/PPT 14分钟/网站63分钟/按钮无反应/约600积分）、腾讯新闻 20260729A0BK1K00（基础模型8积分 vs 旗舰模型吃掉1/4额度）
- 市场：易观2026Q2报告（17款6月合计6000万次，WorkBuddy 2097万居首）
- ⚠️ 已剔除草稿中未经核实的说法：官网FAQ并无「千问三兄弟品牌混淆」条目，实际FAQ仅6条（会员能做什么/积分是什么/积分用尽/月付vs连续包月/能否升级/如何反馈）

### 下一步建议
- 优先 lobsterai 完稿（草稿10.4KB最完整，网易有道国产桌面Agent）
- 其余草稿：hermes-agent(11.7KB)、stepclaw(12.3KB) 亦较完整，可优先转正

## 2026-08-02: Rowboat 深度评测 + 首页Bug修复
- **工具**: Rowboat (Rowboat Labs, YC S24 孵化; Apache-2.0 开源本地优先 AI 同事; GitHub 16.7K Stars 全球#2767)
- **评级**: 4.2/5.0（知识图谱记忆5/5 + 模型自由度5/5 + 隐私主权5/5；扣分：早期阶段v0.7.x打磨不一3/5 + 集成数量有限3/5 + 本地优先被云依赖削弱）
- **文件**: content/tool-reviews/rowboat.md（约2400字中文，4个HTML表格含蓝底白字th；YAML校验通过：0中文弯引号）；删除 rowboat.md.draft
- **Git提交**: 89aab72（已push至main）

### 🔴 首页 Bug 修复（用户反馈触发）
- **问题**: 首页「最新文章」只显示 content/articles/（20篇，最新07-07），完全忽略 content/tool-reviews/（61篇）
- **修复**: page.tsx 合并双数据源 + ArticleCard.tsx 支持 href prop
- **Git提交**: cd9333a（已push至main）
- **效果**: 首页最新3篇 → Rowboat(08-02) / Fellou(07-31) / ChatGPT Work(07-30)
- **注意**: Next.js export 被 safe-delete 沙箱拦截，需手动从 .next/server/app/ 复制 HTML 到 out/

### 下一步建议
- 优先 lobsterai 完稿（草稿10.4KB较完整，网易有道出品国产桌面Agent）
- 其余分类补位同前

## 2026-07-31: Fellou 深度评测
- **工具**: Fellou (fellou.ai, ASI X Inc. 旧金山/蒸汽记忆(无锡)科技，创始人谢扬95后、Authing身份云创始人；2025-04全球内测、2025-06发布2.0、后推CE版含Windows+中文；三轮融资累计超$3000万(浙江科技报2026-01)/everydev口径$4040万+；注册用户破100万)
- **评级**: 4.2/5.0（由 lib/tools.ts 的 4.4 下调至 4.2，依据 BestAIFor.me 4.1/5 + buildfastwithai 4.4/5 + 中文社区实测口碑分裂——玉伯/CookieDAO好评 vs CE版稳定性差评「勉强可用」；同步 tools.ts：rating 4.4→4.2、price 补全四档含Ultra）
- **文件**: content/tool-reviews/fellou.md（12.7KB，3个HTML表格含蓝底白字th；YAML校验通过：0中文弯引号/0 NBSP/0 U+FFFD）；删除 fellou.md.draft，顺带清掉遗留的 chatgpt-work.md.draft
- **Git提交**: e53ba83（已push至main）
