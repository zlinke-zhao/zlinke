# 自动化执行记录：ZLinke 每日 AI 工具深度评测

## 2026-09-03 执行记录

**选定工具**：Prometheus by Firecrawl（`prometheus-firecrawl`）
- 决策背景：任务原始优先级列表（首页6大 + 第一/二/三批）中的所有工具已在历史执行中全部完成。当前 `lib/tools.ts` 共 178 个工具，已评测 74 个，剩余 104 个未评测（多为较新/小众条目）。本日从剩余列表中选了一个**真实、可验证、公开资料丰富**的工具，以严守「零幻觉」红线。
- 调研来源：Firecrawl 官方 Prometheus 文档/API 页、Product Hunt 发布页、HokAI、ToolRadar、aipriceradar、Tavily 官方对比文等。
- 关键可验证事实：2026-06-13 Product Hunt 发布（Firecrawl 第8次，256 upvotes）；创始人 Eric Ciarla、Nicolas Camara，2024 创立；$14.5M A 轮（Nexus Venture Partners，2025-08）；核心引擎 AGPL-3.0 开源；复用 Firecrawl 积分计费（Free 1,000/月、Hobby $16、Standard $83、Growth $333、Scale $599）；AI Extract 另订阅约 $89/月起。

**产出**：`content/tool-reviews/prometheus-firecrawl.md`（约 1715 中文字，YAML 安全校验通过，无中文双引号）。
**提交**：`git commit` 成功（main f3b6f32）。`git push` 触发后台运行（远程含内嵌 token，疑似网络偏慢，状态 running）。

**待办/备注**：
- 若 push 最终失败，需重推（commit 已落地本地，不丢）。
- 后续选工具建议：优先挑 Tavily / Apify / Crawl4AI / Bright Data 等知名可验证工具，避免对小众条目编造数据。
- 首页6大主打工具（chatgpt/notion-ai/cursor/midjourney/runway/perplexity）均已完结，无需再补。

## 2026-09-04 执行记录

**选定工具**：Magic Patterns Agent 2.0（`magic-patterns`）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）全部完成；`lib/tools.ts` 共 179 个工具，已评测 75 个，剩余 104 个多为小众/新条目。按「零幻觉」红线，从剩余列表挑了**真实、可验证、公开资料丰富**的知名工具：Magic Patterns（YC 2023、前 Robinhood 创始人、设计系统感知型 AI 界面生成器）。
- 调研来源：官方定价页、Agent 2.0 公告、官方 Changelog、Product Hunt/Hunted.space 收录页、第三方评测 aicoolies / awesomeagents / aidesigner / funblocks / gotoolradar。
- 关键可验证事实：创始人 Alexander Danilowicz & Teddy Ni（前 Robinhood）；100,000+ 用户、1,500+ 产品团队（Granola、Vanta、Freedom Mortgage）、100 万+ 设计；Product Hunt #1 Product of the Day（579 upvotes，2025-07-29，14 条评价均分 5.00/5）；定价 Free $0（100 积分）/ Starter $20·座/月（年付 $17，1,000 积分）/ Business $100·座/月（年付 $85，5,000 积分）/ Enterprise 定制，溢出 $0.02/credit；SOC 2 Type II + ISO 27001:2022 + GDPR/CCPA、零训练；MCP 2.0 对接 Cursor/Claude Code/Windsurf；多框架导出 React/Vue/Tailwind。
- 综合评分：4.2（设计系统感知行业最强、企业级安全，但积分成本不可预测、仅前端无全栈、Business 跳价明显）。

**产出**：`content/tool-reviews/magic-patterns.md`（约 2100 中文字，含 4 个 HTML 对比表；YAML 安全校验通过，frontmatter 无中文双引号）。
**提交**：`git commit` 685a0a1 成功，`git push` 成功（e0ea632..685a0a1 main -> main）。
**后续选工具建议**：剩余 104 个未评测工具多为小众条目；继续优先挑可验证度高的（如 doubao-work / minimax-design / skywork-desktop 等知名厂商衍生，或 modelence / opper-ai 等 YC/欧洲背景工具有公开资料者），避免对小众条目编造数据。

### 同日续做（用户追加「continue」）：豆包工作 `doubao-work`
- 选定理由：承接上一条建议，挑了最贴合 ZLinke 中文受众、且公开资料最扎实的知名厂商衍生工具——字节跳动「豆包工作」（2026-08-25 独立品牌上线，南方都市报/每日经济新闻/今日头条均有权威报道）。
- 关键可验证事实：发布 2026-08-25；定价 免费 / 标准 68元·月 / 加强 200元·月 / 高级 500元·月（学生标准档 38元·月），企业/飞书联合版 1188/2488/5488 元·席/年，新用户赠 30 天；模型 豆包 2.1（免费 Turbo、订阅 Pro）；飞书深度打通、100+ 工作伙伴、云电脑续跑+手机远程；Seedream 4.0 文生图与 Seedance 1.0 pro 视频登顶；国内首批办公智能体双项认证；豆包日均 Token 180 万亿、月活 3.45 亿；2026-08-24 TRAE 与扣子团队并入豆包。实测短板（每经）：PPT 配图偶开天窗、数据图表需人工兜底。
- 综合评分：4.3（与 tools.ts 标注一致）。
- 产出：`content/tool-reviews/doubao-work.md`（约 2200 字，含 4 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` 4de4d9b 成功，`git push` 成功（685a0a1..4de4d9b main -> main）。

### 同日续做 2（用户再追加「continue」）：Modelence `modelence`
- 选定理由：剩余未评测中公开资料最扎实的 AI 全栈 App 生成器；YC 背书、融资与功能均有官方/第三方可查。
- 关键可验证事实（已二次核实 YC 声称）：YC 2025 夏季批次 S25，2025 成立、旧金山；创始人 Aram Shatakhtsyan 与 Eduard Piliposyan（均前 CodeSignal）；种子轮 300 万美元（2026-01，YC/Acacia/Formosa/Rebel Fund/Vocal Ventures）；开源 TypeScript 框架（GitHub 200+ releases）；AI Builder 基于 Claude Agent SDK、类型护栏减幻觉；内置 MongoDB/auth/监控/Cron/WebSocket/限流；Product Hunt 2026-02 上线，12,000+ 构建者。定价 Free $0（含 $5 Builder 额度）/ Starter $20·月 / Pro $100·月 / Enterprise 定制，云容器按小时计费。竞品对比（第三方评分）：Lovable 4.6、Bolt 4.2、Base44 3.8；Base44 已被 Wix 以约 8000 万美元收购。
- 综合评分：4.2（与 tools.ts 标注一致）；差异化=零锁定+代码完全拥有+生产级出厂即备，短板=产品年轻编辑器有毛刺、MongoDB 中心化、免费额度薄、缺 SOC2/ISO 合规凭证。
- 产出：`content/tool-reviews/modelence.md`（约 2200 字，含 4 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` 1e045b6 成功，`git push` 成功（4de4d9b..1e045b6 main -> main）。
- 备注：本日累计完成 3 篇（magic-patterns / doubao-work / modelence），均独立提交推送。

### 同日续做 3（用户再追加「continue」）：Opper AI `opper-ai`
- 选定理由：剩余未评测中公开资料最扎实的 AI 基础设施（欧盟 AI 网关）；官方/PH/第三方评测齐备。
- 关键可验证事实：斯德哥尔摩 Opper Technology AB，核心团队出自 Unomaly（2020 被 LogicMonitor 收购）；约 €3M 种子（目录口径 300–460 万美元）；「The European AI gateway for agents」；300+ 模型/30+ 供应商（官方博客按多模态计 700+）；Product Hunt 2026-07-09 上线，243 upvotes、日榜第 6、2 评均分 5.00/5；OpenAI 兼容一键迁移；Token 零加价、网关 3% 平台费、控制平面 5.5%、BYOK 网关免平台费、失败回退不收费；AWS 斯德哥尔摩、单一 EU 子处理者、默认不存 prompt、可选 ZDR；Control Plane 五件套 Observe/Route/Steer/Guard/Comply；50,000+ 开发者、10M+ 终端用户。竞品对比：OpenRouter 5.5% 充值费无默认 EU 托管；Portkey 2026-05 被 Palo Alto 收购；LiteLLM 自托管；Cloudflare 5%、Vercel 零加价+ZDR。
- 综合评分：4.2（与 tools.ts 一致）；差异化=EU 合规默认+定价透明，短板=网关延迟 20-50ms、控制平面费率不低、生态年轻 G2 样本少、收入依赖交易量。
- 产出：`content/tool-reviews/opper-ai.md`（约 2300 字，含 4 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` 75d51ff 成功，`git push` 成功（1e045b6..75d51ff main -> main）。
- 备注：本日累计完成 4 篇（magic-patterns / doubao-work / modelence / opper-ai），均独立提交推送。

### 同日续做 4（用户再追加「continue」）：Skywork 桌面版 `skywork-desktop`
- 选定理由：剩余未评测中公开资料最扎实的国内大厂桌面智能体（昆仑天工/昆仑万维出品），贴合 ZLinke「桌面智能体」主线与中文受众，事实可多源交叉验证。
- 关键可验证事实：2026-02-04 面向全球发布，定位「Windows 版 Claude Cowork / OS 级同事」；出品方昆仑天工（昆仑万维 Kunlun Tech），运营主体 SKYWORK AI PTE. LTD.（新加坡），昆仑集团持股约 66.3%；Windows 10+ 原生优先、macOS 12+（Apple Silicon）兼容；模型支持 Claude Opus 4.5 / Claude Sonnet 4.5 / Gemini 3 Pro + auto；内置 100+ Skills；本地虚拟机隔离、文件不上云、执行前确认操作清单；Skywork DeepResearch 引擎 GAIA 82.42%（2025-05，官方称高于 OpenAI Deep Research 与 Manus）；平台自 2025-05 发布累积近 1 亿用户（第三方口径）。定价口径差异已透明标注：海外 Basic $19.99/月、Plus $49.99/月；国内连续包月 Basic ¥46、Plus ¥84、Ultra ¥188（华创证券研报口径，按积分/设备数/容量区分）；Skywork 2.0 废除 credits 积分制改为 Agents 无限使用（Infinite Usage）。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=Windows 原生+本地隔离+多模型+多模态一条龙，短板=订阅口径国内外不一致、免费版限制紧、产品年轻生态/合规凭证有限。
- 产出：`content/tool-reviews/skywork-desktop.md`（约 2200 字正文，含 3 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` 2d8494f 成功，`git push` 成功（75d51ff..2d8494f main -> main）。
- 备注：本日累计完成 5 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop），均独立提交推送。剩余未评测约 100 个（多为小众条目）；后续若继续，建议优先挑公开资料扎实者（minimax-design / asi-one 等）。

### 同日续做 5（用户再追加「continue」）：MiniMax Design `minimax-design`
- 选定理由：剩余未评测中公开资料最扎实的国内大厂多模态内容 Agent（MiniMax 稀宇科技出品），贴合 ZLinke「桌面智能体/工作台」主线，定价/功能/实测多源可验证。
- 关键可验证事实：2026-08 下旬上线（海外 design.minimax.io 2026-08-21、国内 design.minimaxi.com 同期）；定位 AI Agent 驱动商业内容生产 Harness；底层 MiniMax 原生多模态视频模型 H3（open-weight 可自托管）+ Music 2.6 + Speech 2.8 + 第三方 GPT Image 2 / Nano Banana Pro；桌面端 macOS 13+ / Windows 10+；核心形态为桌面端 + Canvas Flow 多模态画布 + Skill 广场 + 3D 导演台；新用户 3 次免费 H3 视频试用 + 约 2000 免费积分；可绑定微信/飞书扫码派活。重要澄清：非开源、非本地推理，桌面客户端只是壳，生成跑 MiniMax 云端按积分扣费（已写入 cons 与正文）。实测（新浪财经 2026-08-23）：流程层语义化成片做成了，画面层（视频语义精确编辑）翻车。定价口径差异已透明标注：国内 Starter 65 / Plus 499 / Pro 1399 元·月（年付 52/399/1119），海外年付 $8.4/$60.8/$172（月付约高 25–30%）；10,000 积分≈83 秒 H3 2K 或 143 秒 768P 视频、≈250 张 Seedream 5.0 Pro 图；年卡 H3 消耗降 20%；另有一性积分包（$10/$50/$200/$500）。
- 综合评分：4.2（与 tools.ts 标注一致）；差异化=Agent 编排多模态模型成商业成片流水线+H3 性价比+3D 导演台/ComfyUI，短板=云端积分计费、画面级编辑不成熟、定价口径混乱。
- 产出：`content/tool-reviews/minimax-design.md`（约 2200 字，含 3 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` c057ffb 成功，`git push` 成功（2d8494f..c057ffb main -> main）。
- 备注：本日累计完成 6 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design），均独立提交推送。剩余未评测约 99 个（多为小众条目）；后续若继续，建议优先挑公开资料扎实者（asi-one 等）。

### 同日续做 6（用户再追加「continue」）：ASI:One `asi-one`
- 选定理由：剩余未评测中公开资料最扎实、且具鲜明差异化的个人 AI 助手（Fetch.ai / ASI Alliance 出品，agent 经济叙事），事实多源可验证；评分最低（4.0）因产品年轻+定价不透明，正好补全评测梯度。
- 关键可验证事实：Fetch.ai（ASI Alliance 发起者，含 FET/SingularityNET/Ocean Protocol）出品，约融资 $60M、自 2017 研发自主 agent 基础设施；Product Hunt 2026-04-23 上线，VentureBeat 报 Beta、更广版本计划 2026 初；定位个人 AI 助手 + agentic 编排平台；记忆=用户自有知识图谱（可分开 work/personal/creative）；Agentverse 开放目录 200 万+ 注册 agent；agent-to-agent 社交（对齐日程/分摊费用/确认预订）；支付 Stripe/Visa/稳定币/FET，需批准；OpenAI 兼容 API + MCP server（兼容 Claude Code/Cursor）；模型阵容 ASI-1 Mini/Extended/Fast/Agentic/Graph（开发者侧 asi1/asi1-mini/asi1-ultra）。**定价不透明已重点标注**：官方 freemium 个人版免费，付费/优先与持有 FET 代币挂钩，per-token 价格未公开；第三方目录有 Pro $19/Business $49 等说法但官方未统一确认。实测（rightaichoice 2026-08-29，61 条提及 43% 正/57% 批）：亮点=持久记忆/自主执行/多 agent 协作；硬伤=每次开 App 报内部错误、长对话丢记录、图片生成偶不发显、群聊隐私不清。
- 综合评分：4.0（与 tools.ts 标注一致）；差异化=持久记忆+开放 agent 目录+agent 间社交，短板=定价不透明+Web3 挂钩+生态未验证+早期稳定性/隐私问题。
- 产出：`content/tool-reviews/asi-one.md`（约 2200 字，含 3 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` 90f4c43 成功，`git push` 成功（c057ffb..90f4c43 main -> main）。
- 备注：本日累计完成 7 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one），均独立提交推送。剩余未评测约 98 个（多为小众条目，公开资料扎实度普遍下降）。连续 7 篇后建议收尾；若继续需更谨慎甄别可验证来源，避免对小众条目编造数据。

### 同日续做 7（用户再追加「continue」）：QwenPaw `qwenpaw`
- 选定理由：剩余 97 个未评测中公开资料最扎实、且最贴合 ZLinke 中文受众的条目——阿里 AgentScope 出品、Apache-2.0 开源、多源权威可验证（阿里云开发者社区/agent-finder/stork/今日头条）。经并行搜索 4 个候选（qwenpaw/makersclaw/omniwork/swytchcode）比对，qwenpaw 数据最丰富且无定价冲突， makersclaw 出现 $49/$149/$399 与 $29+Agent 订阅两套矛盾口径、omniwork 偏厂商自述、swytchcode 偏开发者 CLI，故选 qwenpaw。
- 关键可验证事实：阿里云 AgentScope 团队 2026 年推出，前身 CoPaw、2026-04 更名；Apache-2.0 开源，GitHub 星标破 1.7 万（developer.aliyun 口径）；v2.0.1（2026-07-24）引入 PawApp 小程序平台 + 用户可编辑 Agent Modes；定位千问个人智能体工作台（本地优先/数据自主/记忆进化/多端触达）；10+ 渠道（钉钉/飞书/微信/QQ/Discord/Telegram）统一记忆与技能；ReMe v0.4 三层记忆（短期/长期/反思）；模型无关（通义千问/DeepSeek/Ollama 本地等 14+ 提供商）；部署含本地 pip/Docker/Tauri 桌面 App 与阿里云计算巢/PAI-EAS 云端；四层安全（Tool/File/Skill/Access）；20+ 基础技能 + 主动心跳定时任务。定价透明无冲突：本体免费开源，成本在部署与模型，本地模型零 API 成本。第三方评分 agent-finder 7/10、stork DR 54。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=开源+本地优先+多端 IM 统一+记忆进化，短板=部署门槛、能力随模型/Skills、年轻项目企业级合规需自补。
- 产出：`content/tool-reviews/qwenpaw.md`（约 2200 字，含 3 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` b49d132 成功，`git push` 成功（90f4c43..b49d132 main -> main）。
- 备注：本日累计完成 8 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw），均独立提交推送。剩余未评测约 96 个（多为小众条目）。连续 8 篇后强烈建议收尾；再往下可验证来源普遍偏薄，守住「零幻觉」红线需更严格甄别，建议停止或仅挑确有硬证据的条目。

### 同日续做 8（用户再追加「continue」）：Swytchcode `swytchcode`
- 选定理由：剩余 96 个未评测中，此前并行搜索已确认数据最一致、无定价冲突、且多源独立验证的候选（aitools.fyi / toolworthy / toolradar / gotoolradar 四源一致：免费 1000 次 + Pro $29/月 5000 次 + Enterprise 定制）。相较 makersclaw（定价矛盾）、omniwork（偏厂商自述）、qwenpaw（已写），swytchcode 证据最硬，契合「零幻觉」红线。
- 关键可验证事实：CLI 形态的 AI Agent API 执行层，npm 全局安装，`swytchcode get` 拉清单 / `swytchcode exec` 执行校验调用；覆盖 2000+ API（Stripe/GitHub/Slack/AWS 示例，支持自带 OpenAPI）；兼容 Cursor/Claude Code/GitHub Copilot/LangChain/LlamaIndex；专治 schema 漂移返回 400、HTTP 200 夹错误体、危险重试副作用；能力含 schema 校验/响应检查/policy 控制(allowlist/dry-run/block)/auth/重试+幂等/审计日志；2025-11 以 Web 工具获 PH 当日榜 #1，2026-06 据用量重构 CLI-first；官方称校验 <50ms；嵌入文档插件(live sandbox + MCP key)。定价透明：Free $0/1000 次、Pro $29/5000 次、Enterprise 定制不限；横向 ngrok $8/Postman $19/Swytchcode $29/Apify $39/Checkly $40。诚实标注独立验证薄：PH 5.0 仅 4 评、GoodFirms 零评、官网两条客户证言为公司自发布需打折。
- 综合评分：4.2（与 tools.ts 标注一致）；差异化=卡位 Agent 写操作的执行护栏、不绑架框架、policy+幂等刚需，短板=价值前提已是生产 agent、仍需手写 policy、独立验证薄。
- 产出：`content/tool-reviews/swytchcode.md`（约 2200 字，含 3 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` 122234f 成功，`git push` 成功（b49d132..122234f main -> main）。
- 备注：本日累计完成 9 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw / swytchcode），均独立提交推送。剩余未评测约 95 个（多为小众条目）。连续 9 篇后建议收尾；再写需确保多独立来源一致、无矛盾数据，否则宁缺毋滥。

### 同日续做 9（用户再追加「continue」）：JiuwenSwarm `jiuwenswarm`
- 选定理由：剩余 95 个未评测中，此前并行搜索 6 个候选（jiuwenswarm/solooop/spotlight-backplanes/novu-connect/ogment-ai/qapilot-cowork）比对，jiuwenswarm 数据最一致、无定价冲突、多源权威可验证（中国日报/华为云博客/BAAI/ai-bot.cn），且最贴合 ZLinke 中文受众与「桌面智能体/开源」主线；solooop/ogment-ai/qapilot-cowork 均出现定价矛盾口径被排除。
- 关键可验证事实：华为支持的开源 AI Agent 平台社区 openJiuwen（华为 2012 实验室 + 华为云 AgentArts 团队联合构建）2026-05 正式对外开源发布 JiuwenSwarm 蜂群智能体，2026-07 下旬率先落地鸿蒙 PC；Apache-2.0 开源，GitHub jiuwenswarm 仓库约 1.8k stars、组织总 Star 破 3.3 万、累计下载 148 万+；提出 Coordination Engineering 协同工程范式，四大组件 Agent Swarm / Swarm Skills / Swarm Skills Hub / Swarm Skills 自演进；三模式 个人助手(Claw)/编码(Coding)/集群(Swarm)；HOTS(Human on the Swarm) 与 HITS(Human in the Swarm) 两种人机协同；PinchBench 94.2% SOTA（对比 OpenClaw 91.6%，token 降 34.8%）、LOCOMO 长期记忆准确率 85%；算力亲和（昇腾/鲲鹏，首 token 时延减半、存储峰值降约 25%）；部署支持 pip install jiuwenswarm / TUI / 鸿蒙PC WorkSwarm，渠道接小艺/飞书/钉钉/Telegram，模型无关（华为云 MaaS/OpenAI/DeepSeek）；产业落地邮储银行（2026-06 产业先锋奖）、工商银行、中科大「灵境造物」；当前稳定版 v0.2.3、v0.2.4 beta。定价透明无冲突：本体免费开源，成本在自配模型 API。
- 综合评分：4.2（与 tools.ts 标注一致）；差异化=全套开源+协同工程范式领先+HITS 入队创新+基准 SOTA，短板=产品化早期、生态偏华为系、SOTA 仅社区官方基准待独立复测、真实成本在模型。
- 产出：`content/tool-reviews/jiuwenswarm.md`（约 2200 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` a894c0f 成功，`git push` 成功（122234f..a894c0f main -> main）。
- 备注：本日累计完成 10 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw / swytchcode / jiuwenswarm），均独立提交推送。剩余未评测约 94 个（多为小众条目，公开资料扎实度普遍下降）。连续 10 篇后强烈建议收尾；再往下可验证来源普遍偏薄，守住「零幻觉」红线需更严格甄别，建议停止或仅挑确有硬证据（如 novu-connect / spotlight-backplanes 等数据一致、无定价冲突者）的条目。

### 同日续做 10（用户再追加「continue」）：Novu Connect `novu-connect`
- 选定理由：jiuwenswarm 收尾后，从剩余一致性候选中挑数据最扎实、定价多源完全一致、且贴合 ZLinke「AI 编程开发/工具链」主线的条目。novu-connect 官方定价页 + ToolWorthy + HyperGPT + MossAI 四源一致（Free $0/Pro $30/Team $250/Enterprise 定制），无定价冲突；solooop/ogment-ai/qapilot-cowork 定价矛盾已排除，spotlight-backplanes 留待下一篇备选。
- 关键可验证事实：Novu 出品的开源 Agent Communication Infrastructure，一句话 npx novu connect 把 Claude Managed Agent / 自带 Agent 接进 Slack、MS Teams、WhatsApp、Telegram、Email（Google Chat/iMessage/Linear/Zoom/Discord/Messenger/GitHub 标 coming soon）；统一身份解析与对话线程（邮件与 Slack 同一会话）、内置 human-in-the-loop 审批（退款/部署/调 MCP 前确认）、开源 CLI + 代码公开、现成 Agent 模板（激活教练/试用转化/知识库客服/工单追踪/故障排查）+ MCP 连接器（Notion/Mixpanel/Confluence/Zendesk）；Product Hunt 2026-06-15 日榜登顶 331 票（PHunt 内容速览 + linkloot 均佐证）；母公司 Novu 开源通知基础设施 39.6k+ GitHub stars、客户含 MongoDB/Unity/Roche/Guesty；合规 SOC 2 Type II、HIPAA、ISO 27001:2013、GDPR，企业版含 HIPAA BAA/SSO/SCIM/审计日志。定价透明：Free $0（100 对话·2 Agent·2 渠道）/ Pro $30（1000·5·5，溢出 $0.02）/ Team $250（5000·10·10，溢出 $0.015）/ Enterprise 定制；价格不含模型与 Agent 运行时费用（已写入 cons）。
- 综合评分：4.2（与 tools.ts 标注一致）；差异化=开源通信层+多渠道统一+HITL 审批+定价透明+PH 登顶背书，短板=通信层绑定 Novu 渠道、企业合规仅 Enterprise、模型费用分离、部分渠道待上线。
- 产出：`content/tool-reviews/novu-connect.md`（约 2000 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` ac40490 成功，`git push` 成功（a894c0f..ac40490 main -> main）。
- 备注：本日累计完成 11 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw / swytchcode / jiuwenswarm / novu-connect），均独立提交推送。剩余未评测约 93 个（多为小众条目）。连续 11 篇后强烈建议收尾；再写建议仅挑确有硬证据（如 spotlight-backplanes 等数据一致、无定价冲突者），否则宁缺毋滥。

### 同日续做 11（用户再追加「continue」）：Spotlight by Backplanes `spotlight-backplanes`
- 选定理由：novu-connect 收尾后，剩余一致性候选中仅 spotlight-backplanes 数据最一致、无定价冲突、且贴合 ZLinke「AI 编程开发/工具链」主线。官方站 + trust 页 + ToolRadar + aicoolies + everydev + pivotnews 六源一致（免费个人/团队、企业定制、本地脱敏、只读已结束会话、Claude Code/Codex）。solooop/ogment-ai/qapilot-cowork 定价矛盾已排除；至此剩余未评测多为小众条目、可验证来源普遍偏薄。
- 关键可验证事实：Backplanes 出品的开源风格 CLI 观测工具，自动读取已结束的 Claude Code/Codex 会话并生成短报告（文件/命令/外部域/MCP/Skills/子 Agent/越权动作/凭证/耗时 + Needs review 与 Business as usual 结论）；安装 `curl -fsSL https://www.backplanes.com/spotlight/install.sh | sh`，支持 macOS/Linux/WSL2，浏览器鉴权自动建团队账号；隐私架构克制——不接 Anthropic/OpenAI OAuth、只读已结束会话、本地双重脱敏（gitleaks 去密钥 + 第二遍去 PII）后上传、服务端再洗、逐字段加密、LLM 层合同级零留存（Anthropic/OpenAI 不保留）；组织级报告按安全(CISO)/工程(EM)/支出(CFO)三视角聚合、token 花费归属到人与仓库；公司约 2025 创立、布鲁克林，由 Valimail/Algolia(及 Google/Twilio/ngrok) 实战派打造、获 HF0(及 Slow Ventures/Bloomberg Beta) 支持，2026-06 上线；路线图含 Cursor/开源 CLI(OpenCode)/Google AI 工具。定价透明无冲突：个人与团队永久免费（无席位/无试用倒计时），企业 org 铺开（归属/用量/特定管控）需联系销售定制，无公开自助付费档。
- 综合评分：4.2（与 tools.ts 标注一致）；差异化=免费彻底+本地脱敏与 LLM 零留存+报告维度实用+组织三视角，短板=仅支持 Claude Code/Codex、企业定制不透明、年轻产品缺第三方长期评测、只能事后观测不能事中拦截。
- 产出：`content/tool-reviews/spotlight-backplanes.md`（约 2000 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` e7306fa 成功，`git push` 成功（ac40490..e7306fa main -> main）。
- 备注：本日累计完成 12 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw / swytchcode / jiuwenswarm / novu-connect / spotlight-backplanes），均独立提交推送。剩余未评测约 92 个（多为小众条目，公开资料扎实度普遍下降）。连续 12 篇后正式建议收尾；再往下可验证来源普遍偏薄，守住「零幻觉」红线难度显著上升，建议停止，或仅在未来出现确有硬证据（多独立来源一致、无定价冲突）的条目时再动笔，否则宁缺毋滥。

### 同日续做 12（用户再追加「continue」）：Context.dev `context-dev`
- 选定理由：剩余 92 个未评测中，此前并行搜索 4 候选（autoedit / notra / context-dev / taste）比对，context-dev 数据最一致、无定价冲突、且多独立来源交叉验证（官方定价页 + 官方博客 + runtimewire + apievangelist + runany.dev + thetruestack + PH 页）。autoedit 与 notra 存在定价口径冲突被排除，taste 搜索未命中。context-dev 与 ZLinke「AI 编程开发/AI 基础设施」主线高度契合（统一网页抓取+品牌情报 API）。
- 关键可验证事实：前身为 Brand.dev，2026-03-21 更名；Yahia Bakour 2025 创立，YC S26（2026 夏）唯一列名创始人，团队约 4 人；2026-08-03 上线托管 MCP server（OAuth 接 Claude/Cursor/Codex/ChatGPT/VS Code），2026-08-05 YC 发布；创始人自述 400+ 客户，PH 页自称 5,000+ 企业（均公司口径，已打折）。核心能力：网页抓取(Markdown/HTML)、整站+sitemap 爬虫、结构化抽取(Zod schema→JSON)、品牌情报(Logo/配色/字体/社媒/行业码)、风格指南、产品抽取、截图、文档解析、NAICS/SIC 分类、网站变更监控(signed webhook)、Logo Link(独立产品)；SDK 覆盖 TS/Py/Ruby/Go/PHP + CLI + Agent Skill。定价多源一致（官方页+博客+目录）：Free 250(个人)/500(工作邮箱)一次性积分、Developer $25/10K、Pro $149/200K、Scale $499/1M、Enterprise 2M+；1 信用=1 成功页、失败不计费、JS渲染/反爬/高匿代理均不额外加价（官方 FAQ 明确）、溢出 $15/$9/$7 每 10K；年付省两月、初创/非营利 30% 折扣。PH 评分 4.9/5（15 评价），2026-07-02 主发布、2026-03-22 早期发布；名次口径冲突已透明标注（tools.ts 标「月榜第1」，PH 自身页与第三方 upvotes/名次说法不一，未作为结论依据）。竞品对比含 Firecrawl/Browserbase/Apify/Bright Data。诚实标注：产品年轻、免费积分一次性、结构化抽取依赖页 HTML 质量、品牌主色提取偶有不准、无开源自托管、数据出境需 GDPR/LGPD 评估。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=一个 API 统一抓取+品牌情报+失败不计费+反爬代理不拆账，短板=年轻/免费一次性/真实成本随量浮动/名次宣传口径不一。
- 产出：`content/tool-reviews/context-dev.md`（约 2000+ 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` 8ceb1e8 成功，`git push` 成功（e7306fa..8ceb1e8 main -> main）。
- 备注：本日累计完成 13 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw / swytchcode / jiuwenswarm / novu-connect / spotlight-backplanes / context-dev），均独立提交推送。剩余未评测约 91 个（多为小众条目）。连续 13 篇后正式建议收尾；再往下可验证来源普遍偏薄，守住「零幻觉」红线难度显著上升，建议停止，或仅在未来出现确有硬证据（多独立来源一致、无定价冲突）的条目时再动笔，否则宁缺毋滥。

### 同日续做 13（用户再追加「continue」）：Viktor `viktor`
- 选定理由：剩余 91 个未评测中，本 turn 并行搜索 4 候选（anysearch / viktor / taste / browseract）比对，viktor 数据最一致、无真实定价冲突、且 5 个独立来源（theaiagentindex / gotoolradar / smartkeys / rywalker / neodrop）交叉验证。anysearch 免费额度有 1000 vs 1500 冲突、付费单价仅单源；taste 搜索再次未命中（全是 Cursor/Claude Code 定价文）排除；browseract 数据扎实但属浏览器自动化、角度不同。viktor 与 ZLinke「AI 办公效率/行政助手」主线契合，且是剩余列表中证据最硬者。
- 关键可验证事实：Zeta Labs 出品（前 Jace AI 邮件助手），2023 由 Fryderyk Wiatrowski(CEO) 与 Peter Albert(CTO) 创立、均 ex-Meta；2026-02 公开上线；2026-05 宣布 Accel 领投 $75M A 轮，Slack 联合创始人 Stewart Butterfield & Cal Henderson 任天使，跟投 Bek/Kaya/Inovo/Tenacity；创始人自报上线 3 个月达 $15M ARR run-rate。定位「不是工具，是一次招聘」——原生嵌入 Slack/Teams 的 AI 同事，自带持久云电脑写代码、交付 PDF/看板/网页应用/PR；3,200+ 集成（OAuth 或保险库密钥、工作区权限、审批门），命名含 Stripe/Meta Ads/Notion/GitHub/Salesforce/HubSpot/Google Ads/Linear/Jira/Confluence；只读 GitHub 模式 2026-05-23、Supabase 集成 2026-06-10；主动 heartbeat 提议自动化、计划任务、媒体生成(TTS/转写/文生视频 2026-03)；2026-07-31 发布自有 MCP server（既 server 也 client，Claude Code/Cursor 可委派）；已上架 Slack App Directory、Teams 支持上线。安全：OAuth 优先、密钥入保险库执行时注入不进模型上下文、管理员可断连/暂停/停任务、敏感动作默认审批。定价多目录一致：Free $100 永久积分免卡；Team $50/月(20K)→$75/30K→$100/40K→$200/80K→$300/125K；Enterprise 定制；按工作区不按席位、全集成全档开放、非营利 9 折、未用积分顺延 1 月；信用消耗轻量 100-300/复杂 500-1,500/重 2,000-5,000。PH 2026-08-29 发布；G2 约 4.8-4.9/5（theaiagentindex 称 44 评价）。诚实标注：信用计费不透明难预测，独立评测记真实月耗常 $150-400 远高于招牌价、重复处理再扣费；仅限 Slack/Teams 无独立 Web UI（Google Chat/Discord 不可采用）；不持 HIPAA/FedRAMP；牵引力数字(50,000+ 团队/20,000+ 工作区)公司自报、成功率未公开；正面刚 Salesforce Agentforce 与 Microsoft Copilot。
- 综合评分：4.4（与 tools.ts 标注一致）；差异化=Slack/Teams 原生零新界面+持久云电脑真执行+全集成无门槛+审批门安全，短板=信用计费不可预测+仅双平台+无强合规+牵引力自报。
- 产出：`content/tool-reviews/viktor.md`（约 2000+ 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` 58539ed 成功，`git push` 成功（8ceb1e8..58539ed main -> main）。
- 备注：本日累计完成 14 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw / swytchcode / jiuwenswarm / novu-connect / spotlight-backplanes / context-dev / viktor），均独立提交推送。剩余未评测约 90 个（多为小众条目）。连续 14 篇后正式建议收尾；再往下可验证来源普遍偏薄，守住「零幻觉」红线难度显著上升，建议停止，或仅在未来出现确有硬证据（多独立来源一致、无定价冲突）的条目时再动笔，否则宁缺毋滥。

### 同日续做 14（用户再追加「continue」）：BrowserAct `browseract`
- 选定理由：剩余 90 个未评测中，本 turn 并行锁定 browseract 与 anysearch 两候选（taste 再搜未命中、autoedit/notra 定价冲突已排除）。browseract 证据最干净——官方站 + Capsolver 独立评测 + 官方博客 + 多个 dev.to 生产实测 4 源一致，定价零冲突（步骤 5 积分≈$0.0032、本地指纹浏览器 100 积分≈$0.064、动态代理 5000 积分/GB≈$3.20、云浏览器限时免费、免费试用 500 积分/天、PAYG $1=1000 积分、AppSumo 买断 $49 起）。anysearch 免费额度有 1000 vs 1500 冲突、付费单价仅单源，故选 browseract。
- 关键可验证事实：ECOCREATE TECHNOLOGY PTE. LTD. 2026-05-14 经 GlobeNewswire 在 GitHub 开源两 Skill（browser-act 运行时 + browser-act-skill-forge 工厂），MIT 许可；一句话装 Claude Code/Cursor/Codex/Windsurf。2026-06-25 登 Product Hunt 当日榜第一、周榜第三（upvotes 各源 536–629 不一，已透明标注）；GitHub 星标发布初 ~2.3k 增至 4k+（Capsolver 评测时称 5,000+）；G2 4.8/5、AppSumo 4.4/5。三层反检测：指纹环境(TLS 轮转/无头隐藏)→自动解验证码(reCAPTCHA/Turnstile/DataDome)→人工接力 Remote Assist（同会话续跑）；输出带编号干净页面信息省 token；多账号隔离独立 cookie/代理/指纹；本地优先（登录态不出本机）+ 云 Bots 托管双路径；Skill Forge 把流程沉淀为可复用 Skill；n8n/Make/Zapier/API 集成，AWS/Azure/GCP/Oracle/阿里/华为/BytePlus/百度云市场；敏感操作留确认门。生产 6 周实测（dev.to/aws-builders）：环境层兜 ~90%、6 周无会话永久封（日请求几百非上万）、人工接力被当功能。诚实质疑：产品面宽、AI 执行不如确定性代码可预测、成本需实测、迭代快需锁版本、非所有场景适用（API 能出数就别上浏览器自动化、精确 UI 测试 Playwright 更清）、不应未经授权访问私密数据。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=开源+本地优先+三层反检测+人工接力+Skill 沉淀，短板=产品面宽+信用计费需实测+非万能+PH upvotes 口径不一。
- 产出：`content/tool-reviews/browseract.md`（约 2000+ 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` a3cf0f9 成功，`git push` 成功（58539ed..a3cf0f9 main -> main）。
- 备注：本日累计完成 15 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw / swytchcode / jiuwenswarm / novu-connect / spotlight-backplanes / context-dev / viktor / browseract），均独立提交推送。剩余未评测约 89 个（多为小众条目）。连续 15 篇后正式建议收尾；再往下可验证来源普遍偏薄，守住「零幻觉」红线难度显著上升，建议停止，或仅在未来出现确有硬证据（多独立来源一致、无定价冲突）的条目时再动笔，否则宁缺毋滥。

### 同日续做 15（用户再追加「continue」）：Oxlo.ai `oxlo-ai`
- 选定理由：剩余 89 个未评测中，此前并行搜索 4 候选（zaro / oxlo-ai / bluerails-discovery / anysearch）比对，oxlo-ai 数据最一致、定价零冲突、且 5+ 独立来源（官方站 + ToolRadar + TheJoAI + AIToolly + LinkLoot + EveryDev）交叉验证。zaro 免费信用有 5,000 vs 2,500 冲突、bluerails 早期且欧元定价、anysearch 免费额度有 1,000 vs 1,500 小冲突，故选 oxlo-ai。与 ZLinke「AI 编程开发 / AI 基础设施」主线高度契合（隐私优先推理 API）。
- 关键可验证事实：迪拜 DIFC 注册、约 2024 创立；OpenAI 兼容推理 API（base_url api.oxlo.ai/v1）；2026-03 上线、Product Hunt Product of the Day（工具库标日榜第1，upvotes 各源未统一、未作为结论）；STL Partners 列 2026 边缘计算值得关注；融资约 $400K（厂商自报）。定价 5+ 源一致：Free $0/60 次·天（16+ 模型、免卡）、Pro $80/月（1,000 次·天、含 1 天试用）、Premium $350/月（5,000 次·天、含 Kimi K2.6/DeepSeek R1）、Enterprise 定制（保底省 15% 推理账单·≤$20K/月团队）；按次非 token、无超额费（触顶排队到次日）；PH 期 10% 折扣码会过期已透明标注。模型 40+ 跨 7 类（文本 Kimi K2.6/DeepSeek R1 671B/Llama 3.3 70B/Qwen 3、代码、视觉、图像 SDXL/Oxlo Image Pro、音频 Whisper/Kokoro、嵌入 BGE/E5、检测 YOLOv9/v11）；逐请求显式选模型不自动路由；零数据留存+不训练；无限 Agent 工具调用+安全故障转移+异步批量。诚实标注：公司年轻（$400K 融资、独立评测薄）、牵引力数字（700+ 用户/7.37 亿 token）厂商自报、10–100x 更便宜为厂商口径需实测对账、受监管数据需书面条款、OxCompute 仍 Coming Soon、SOC2/ISO 未公开、PH 日榜第1 仅厂商/PH 口径。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=按次定价成本可预测+隐私零留存+OpenAI 兼容零重构，短板=公司年轻+日请求限流突发+独立评测薄+合规凭证未公开。
- 产出：`content/tool-reviews/oxlo-ai.md`（约 2000 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` c555d07 成功，`git push` 已触发（a3cf0f9..c555d07 main -> main）。
- 备注：本日累计完成 16 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw / swytchcode / jiuwenswarm / novu-connect / spotlight-backplanes / context-dev / viktor / browseract / oxlo-ai），均独立提交推送。剩余未评测约 88 个（多为小众条目）。连续 16 篇后正式建议收尾；再往下可验证来源普遍偏薄，守住「零幻觉」红线难度显著上升，建议停止，或仅在未来出现确有硬证据（多独立来源一致、无定价冲突）的条目时再动笔，否则宁缺毋滥。

### 同日续做 16（用户再追加「continue」）：Katalyst `katalyst`
- 选定理由：剩余 88 个未评测中，本 turn 先 grep `lib/tools.ts` 确认候选条目、排除 agents-cli 同名歧义（确认为 Google 开源 CLI `google.github.io/agents-cli`，非 phnx-labs 同名工具），再对 6 候选（discode-ai / upstream / clade / katalyst / agents-cli / makersclaw）比对。discode-ai/upstream/clade/makersclaw 均因定价冲突排除；katalyst 是数据最一致、无定价冲突、且 5+ 独立来源（官方定价页 + Toolify + chatgate + trendingaitools + aipure + dir2ai + PH 页）交叉验证的强候选，契合 ZLinke「AI 办公效率/营销工具」主线。
- 关键可验证事实：创始人 Divyansh Lohia（前 Datadog），约 2025 创立，2026-07-07 Product Hunt 日榜第 2（upvotes 各源 383–430 不一、透明标注）；定位 Salesforce 原生 AI 销售 Agent，不替换系统、rep 零手动录入（通话挂断即笔记/建记录/更字段/起草跟进/设下一步）；两维定价多源一致——平台费 $89/月·组织（100 AI-active 商机）+ 席位 Starter $39 / Core $99 / Agent $249·座/月（年付）、Enterprise 定制、1 月免费试用 + 免费 onboarding、加购信用 $25/150 永不过期；权限模型（PH 创始人答疑）走每 rep 自身 Salesforce 登录、冲突交人审、拒绝写入显式报错而非假绿勾、审批按字段挣来；信号监控 + 客户计划 + 利益相关者映射；标称 SOC 2 安全实践 / ISO 27001 对齐 / RBAC / SSO（Enterprise）。竞品对比（公开口径）：Agentforce 约 $550/座/月或 $0.10/动作、Gong 约 $160–250/座/月、Clari 定制（2025-12 合并 Salesloft）、Oliv AI $19/座/月。诚实标注：效果数字（+70% 管道健康度/3.5x 效率/45% 提速）为厂商营销口径无独立审计；客户名单（Justworks/Atlassian/Stripe 等）厂商 logo 列表未附详案；SOC 2 多源措辞为 posture/aligned 未明示 Type II；年轻公司融资未公开；仅 Salesforce 原生。
- 综合评分：4.2（与 tools.ts 标注一致）；差异化=原生 Salesforce 零重构+零手动录入+写入守权限不假绿勾+两维定价可预测，短板=Salesforce 锁定+高阶能力锁贵档+效果数字与合规凭证待验证+公开评价薄。
- 产出：`content/tool-reviews/katalyst.md`（约 2000+ 中文字，含 3 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号；alternatives: [viktor, lightfield, makersclaw, intelli] 均为 tools.ts 真实存在的 id）。
- 提交：`git commit` 0291cbe 成功，`git push` 成功（c555d07..0291cbe main -> main）。
- 备注：本日累计完成 17 篇（magic-patterns / doubao-work / modelence / opper-ai / skywork-desktop / minimax-design / asi-one / qwenpaw / swytchcode / jiuwenswarm / novu-connect / spotlight-backplanes / context-dev / viktor / browseract / oxlo-ai / katalyst），均独立提交推送。剩余未评测约 87 个（多为小众条目）。连续 17 篇后正式建议收尾；再往下可验证来源普遍偏薄，守住「零幻觉」红线难度显著上升，建议停止，或仅在未来出现确有硬证据（多独立来源一致、无定价冲突）的条目时再动笔，否则宁缺毋滥。

## 2026-09-05 执行记录

**选定工具**：OpenClaw（`openclaw`）
- 决策背景：任务原始优先级列表（首页6大 + 第一/二/三批）早已全部完成（2026-09-03 起已在写剩余小众条目）。本日从剩余约 87 个未评测条目中挑了**公开资料最扎实、多源权威可验证**的知名工具：OpenClaw（开源个人 AI 智能体，Clawdbot/Moltbot 更名史，2026 年增长最快开源项目），且与 ZLinke「AI工作台/桌面智能体」主线及站内已评测的 autoclaw/arkclaw（OpenClaw 系衍生）强关联。
- 调研来源：官方 docs.openclaw.ai（ima.qq 转载 FAQ）、byteiota 指南、kb.ekarisky 知识库、digitalbydefault、fast.io 横评、vellum 竞品文、**国家互联网应急中心官方风险提示（人民网/新华社 2026-03-10）**、天津市委网信办所属数据中心提示、工信部漏洞平台预警转载（2026-03-08）、WorkBuddy 竞品分析等 5+ 独立来源。
- 关键可验证事实：Peter Steinberger（PSPDFKit 创始人）2025-11 发布 Clawdbot → 2026-01-27 Moltbot（Anthropic 商标）→ 2026-01-30 OpenClaw；2026-02-14 作者加入 OpenAI、项目移交非营利基金会；GitHub 34 万+ Star（tools.ts/fast.io 口径，2 月曾 48h 破 10 万）、32.4k Fork、900+ 贡献者；TypeScript、MIT、Node 22.14+、网关端口 18789；20 余消息渠道（含飞书/微信/QQ）；53 官方技能 + ClawHub 上万技能；模型无关（含 Ollama 本地）；定价：软件免费，API 轻度 $3-15/月、典型 $20-60/月、重度 $200+，本地模型 $0，Cloud 托管 $59/月（单源口径已标注）；安全：CVE-2026-25253（CVSS 8.8）+ 3 月 4 天 9 CVE（含 CVSS 9.9）+ CNNVD 漏洞超百 + 25.8 万实例公网暴露（35.4% 有 RCE）+ ClawHub 300+ 恶意技能；Moltbook 现象（一周 77 万 Agent 实例）。
- 综合评分：4.5（与 tools.ts 标注一致）；差异化=本地优先+数据主权+生态最广+AI 自写技能，短板=安全债惨重（政府两部门点名）+部署门槛极高+API 账单不可预测（有实测称一晚烧 $3,600，竞争性来源已标注）。
- 产出：`content/tool-reviews/openclaw.md`（约 2300 中文字，含 3 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号）。
- 提交：`git commit` 86fa999 成功，`git push` 成功（15cdabf..86fa999 main -> main）。
- 备注：剩余未评测约 86 个（多为小众条目）。后续候选建议：osaurus（开源本地 LLM server，Apple Silicon）、agents-cli（Google 开源）、macuse（Mac MCP）等公开资料较扎实者；taste/solooop/ogment-ai/qapilot-cowork/discode-ai/upstream/clade/makersclaw/anysearch/zaro/bluerails/autoedit/notra 因数据冲突或无命中已排除，勿再碰。

## 2026-09-06 执行记录

**选定工具**：Osaurus（`osaurus`）
- 决策背景：首页6大 + 原优先级批次早已全部完成（2026-09-05 起在写剩余小众条目）。本日从 memory 备注推荐的「公开资料较扎实」候选（osaurus / agents-cli / macuse）中挑了数据最丰富、可验证度最高者：Osaurus（Dinoki Labs 出品的 macOS 原生本地 AI 哈尼斯）。三候选并行搜索均数据扎实，终选 osaurus 因其有官方站 + 多 GitHub 镜像 + 独立基准评测（Bright Coding 2025-09）+ 多第三方评测（rightaichoice/dev.to/pidune/dir2ai），且无定价冲突（MIT 免费开源）。
- 调研来源：官网 osaurus.ai、GitHub 公开镜像（osaurus-ai/osaurus）、desktopinsights 版本扫描、Bright Coding 基准文、rightaichoice、dev.to（2026-07 综述）、pidune（3 天实测）、dir2ai、今日头条用户实测、mushroom.cv 博客。
- 关键可验证事实：Dinoki Labs（主程 Terence Pae）出品；纯 Swift 原生、Apple Silicon、无 Electron；MIT 开源、无需账号、免费永久；v0.22.x（2026-07，Homebrew v0.22.3 / GitHub 镜像 v0.22.9，周更）；macOS 15.5+ 仅 Apple Silicon，Intel 不支持；GitHub stars 约 7.3k（多源口径 4.3k–7.3k）、下载 64k+（第三方称累计超 11 万）；MLX 本地推理（Llama/Qwen/Gemma/Mistral/DeepSeek，HuggingFace 一键下载）；OpenAI/Anthropic/Ollama 兼容 API；自主 Agent + 4 层知识图谱记忆 + MCP 服务端/客户端 + Apple Containerization 沙盒 VM + 加密身份(secp256k1) + Relay + 语音(VAD 唤醒)；基准 Llama3 8B Q4 ~52 t/s、Phi-3 Mini ~95 t/s（M3 Max 36GB），HN 称比 Ollama 快约 30%。诚实标注：rightaichoice 28 提及 45% 正/55% 批（反馈多来自作者本人）；pidune 实测 3 天云端鉴权 2 次 token 刷新失败；本地小模型硬任务弱于云端前沿。
- 综合评分：4.2（与 tools.ts 标注一致）；差异化=隐私数据主权+原生 Swift 轻量+Agent/记忆/MCP 升级模型启动器，短板=平台锁死 macOS Apple Silicon+早期成熟度+云端鉴权稳定性+社区独立评测薄。
- 产出：`content/tool-reviews/osaurus.md`（约 2000 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号；alternatives: [openclaw, qwenpaw, chatgpt, jiuwenswarm] 均为 tools.ts 真实存在的 id 且已评测）。
- 提交：`git commit` 6f938f4 成功，`git push` 成功（9db105f..6f938f4 main -> main）。
- 备注：本日完成 1 篇（osaurus）。剩余未评测约 85 个（多为小众条目）。后续候选仍优先挑多源一致、无定价冲突者——agents-cli（Google 开源，Apache-2.0，v1.0.0 2026-07-01）与 macuse（Mac MCP，Free 100 调用/天 + Lifetime）皆为已验证的硬数据候选，可继续。

## 2026-09-07 执行记录

**选定工具**：Agents CLI (Google)（`agents-cli`）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）早已全部完成；连续多日续做小众条目后，本日依 memory 推荐回到「公开资料最扎实、多源权威可验证」的候选——agents-cli（Google 官方 Agent 工程化 CLI，隶属 Gemini Enterprise Agent Platform），与 ZLinke「AI 编程开发/AI 工具链」主线高度契合。
- 调研来源：GitHub 官方仓库（google/agents-cli）、官方文档站 google.github.io/agents-cli、Gemini Enterprise Agent Platform 官方 quickstart、juejin GitHub Trending 解读、NeoDrop 评测、TechTimes、RightAIChoice（ADK vs LangGraph）、AICoolies、腾讯云开发者社区、everydev.ai、completeaitraining、iseoai、ai-bio.cn、wink.run（Karpathy Agentic Engineering 关联）。
- 关键可验证事实：Google 开源、Apache-2.0 免费；仓库创建 2026-04-08，v1.0.0 为首个 GA（2026-06-30/07-01），v1.1.0 于 2026-07-10；GitHub 约 4.8K–5.1K stars、约 530 forks、13 release（2026 年中快照）；基于 Agent Development Kit (ADK)；7 个 Agent Skill（workflow/adk-code/scaffold/eval/deploy/publish/observability）；20+ CLI 命令；兼容 Antigravity CLI / Claude Code / Codex 及任意 SKILL.md 标准编码助手；部署目标 Vertex AI Agent Runtime / Cloud Run / GKE；评测引擎用 LLM-as-judge + 失败模式聚类 + eval optimize 自动调优；可观测性接 Cloud Trace / Cloud Logging / BigQuery Agent Analytics；Pre-GA 受 Pre-GA 条款约束、ADK 代码技能当前仅 Python、暂不接受外部 PR、原生 Windows 不支持（仅 WSL2）、v1.0.0 移除 RAG 脚手架模板；Product Hunt 收录时零评价、社区独立实测偏薄。竞品对比引用 ADK（框架本体）、LangGraph（MIT 35K+ stars 中立编排）、Replit（一键部署 freemium）。
- 综合评分：4.2（与 tools.ts 标注一致）；差异化=开源+评测驱动开发领先+全链路闭环+编码助手无关，短板=强 GCP 锁定+Pre-GA/Python 单语言+生态早期。
- 产出：`content/tool-reviews/agents-cli.md`（约 2000+ 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号；alternatives: openclaw/replit/windsurf/cursor 均为 tools.ts 真实存在的 id）。
- 提交：`git commit` 0d30550 成功，`git push` 成功（cd16303..0d30550 main -> main）。
- 备注：剩余未评测约 84 个（多为小众条目）。memory 推荐的另一候选 macuse（Mac MCP，Free 100 调用/天 + Lifetime）仍为已验证硬数据候选，可下篇续做；其余候选（osaurus/agents-cli/macuse）均已覆盖或排除。

## 2026-09-08 执行记录

**选定工具**：Macuse（`macuse`）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）早已全部完成；本日依 2026-09-07 备注的推荐，落实最后一个已验证硬数据候选——Macuse（独立开发者出品的 macOS 原生本地 MCP 桥，让 Claude/Cursor/Raycast 等任意 MCP 客户端直接操控 Mac 原生 App + 后台 Computer Use），与 ZLinke「AI 办公效率/桌面智能体」主线契合。
- 调研来源：官网 /pricing（$49 一次性买断、Free 100 调用/天·1 客户端、学生 5 折、7 天退款）、/docs、/computer-use；Product Hunt（Hunted.space：2026-07-02 发布、119 upvotes、日榜第 11、hunter Yuexun Jiang）；多目录交叉验证 chatgate.ai / ustack.app / aipure.ai（Jul 9 2026）/ modelpiper（Aug 10 2026 称其为「最好的后台 Computer Use」）/ aidiveforge / completeaitraining。
- 关键可验证事实：原生 macOS 应用 + 本地 MCP Server；macOS 13 Ventura+（Apple Silicon/Intel）；原生集成 Calendar/Reminders/Notes/Mail/Contacts/Messages/Stickies/Shortcuts/Location-Maps；Computer Use 后台点击/输入/滚动/拖拽/窗口/启动/读 UI、不抢光标与前台窗口；逐应用显式授权、可撤销、仅上报匿名分析；多客户端零锁定（Claude Desktop/Codex/Cursor/VS Code/Zed/Raycast/Warp/Windsurf/JetBrains/ChatWise/LM Studio/Cline 及任意 MCP）；定价 Free 永久免费（100 调用/天、1 客户端）+ $49 一次性 Lifetime（3 设备、无限调用/客户端、未来更新、7 天退款）+ 学生 5 折；竞品差异化=唯一「多客户端+后台+本地」组合（vs Anthropic 云端 VM 锁 Claude、Codex 前台接管锁 ChatGPT）。诚实标注：个别目录误将 Lifetime 标成「$49/月」（以官网一次性买断为准）；敏感操作逐次确认官方与第三方均称「开发中」；无 API/服务端触发；免费档偏紧（同时挂两客户端会中途断流）。
- 综合评分：4.1（与 tools.ts 标注一致）；差异化=本地优先+后台 Computer Use 独家+多客户端零锁定+买断无订阅，短板=仅 macOS+免费档偏紧+敏感确认待完善+无 API/服务端集成。
- 产出：`content/tool-reviews/macuse.md`（约 2300 中文字，含 3 个 HTML 对比表；YAML 校验通过，frontmatter 无中文双引号；alternatives: openclaw/osaurus/qwenpaw/claude 均为 tools.ts 真实存在的 id）。
- 提交：`git commit` d69df61 成功，`git push` 成功（9678510..d69df61 main -> main）。
- 备注：本日完成 1 篇（macuse）。至此 memory 历次推荐的「公开资料扎实」候选（osaurus/agents-cli/macuse）均已覆盖。剩余未评测约 83 个（多为小众条目），可验证来源普遍偏薄；后续若继续，建议仅挑确有硬证据（多独立来源一致、无定价冲突）的条目，否则宁缺毋滥。

## 2026-09-09 执行记录

**选定工具**：Cotypist（`cotypist`）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）早已全部完成；本日从剩余约 83 个未评测条目中，按 memory 硬规则（多独立来源一致、无定价冲突、无产品混淆）筛候选。并行初探 Vokal / Ellis / Annotate / Stanley Studio 四候选均被排除——Vokal 定价冲突（$12/$19/$20/$39/$50）且混淆 vokal.co 视频编辑器；Ellis 实为三个不同产品；Stanley Studio 定价冲突（Free vs $29/$49/$79）；Annotate 存在 xannotate/annotate.com/annotateai 产品混淆。第二批初探 Kepler / Skybridge / Glideo 再排除——Kepler 实为四个不同产品（heykepler 数据分析 / kepleraicommerce Shopify 客服 / keplerco 技能管理 / kepler.app 建站）；Glideo 无真实数据（搜索结果全是 GlowVideo 混淆）；Skybridge 虽干净但属免费开源 MCP 框架（评测维度偏薄）。最终锁定 **Cotypist**：单一产品、定价 4+ 独立源完全一致（官网 + ToolRadar + RightAIChoice + TimingApp 均证 Free / Plus $6/月 / Pro $9/月），无冲突无混淆，且贴合 ZLinke「AI 办公效率 / 写作」主线。
- 调研来源：官网 cotypist.com（产品页 + /pricing 定价页 + 隐私说明 + FAQ）、ToolRadar（2026-06-23 评测 85/100）、RightAIChoice（定价对比 Grammarly Premium $12、ChatGPT Plus $20）、TimingApp（律师 Mac 工具横评）。
- 关键可验证事实：独立团队出品的 macOS 原生智能输入补全 App；仅 Apple Silicon、macOS 14+，Intel 不支持；100% 本地 on-device 推理，文字不出本机、不用于训练、不主张版权，密码字段被 macOS 屏蔽；活跃占用约 1–2.5GB RAM；英文最佳、支持多语言；系统级覆盖 Mail/Slack/Notion/浏览器等几乎所有 Mac 文本框（Tab 逐词/整行接受），代码编辑器仅侧边栏聊天、终端仅在写 Agent prompt 时激活；免费档 100 完成词/天（用尽渐隐不硬切），Plus $6/月（单 Mac 无限补全+完整纠错+自定义指令，年付 $72），Pro $9/月（最多 3 Mac+完整模型库含 Gemma 4 26B+逐 App 指令+剪贴板感知+Labs，年付 $108）；每次安装 30 天 Pro 试用免信用卡。综合评分 4.1（与 tools.ts 标注一致）；差异化=本地隐私+风格保真+全 App 覆盖+低价，短板=Apple Silicon 锁死+免费薄+需风格适应期+纠错非强项。
- 产出：`content/tool-reviews/cotypist.md`（约 1900 中文字，含 3 个 HTML 对比表：核心数据一览 / 价格方案 / 竞品对比；YAML 校验通过，frontmatter 无中文双引号；alternatives: grammarly / xiezuocat / typingmind / chatgpt 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` 5cf2263 成功，`git push` 成功（45b88f0..5cf2263 main -> main）。
- 备注：本日完成 1 篇（cotypist）。剩余未评测约 82 个（多为小众条目）。后续若继续，建议优先挑多源一致、无定价冲突、无产品混淆的条目（如 skybridge 这类免费开源框架虽干净但维度偏薄，可酌情）；对已出现多产品同名混淆（Kepler/Ellis/Vokal/Annotate/Stanley Studio）者一律规避。

## 2026-09-10 执行记录

**选定工具**：Zawa（`zawa`）
- 决策背景：原始优先级清单（首页6大 + 第一/二/三批）早已全部完成。本日从严筛剩余未评测条目：初探 Focusee（Gemoo 录屏，定价 $4.17/$8.95/$19.99/$70 多源冲突）、Kukuai（同名两产品：kukuai.cn GenFlow AI Agent 与 kukuai.fyi API 代理，混淆）、Vaani（四个不同产品：vaaniai.io 语音客服 / saaspartout 语音克隆 / toolradar macOS 听写 / aipure 唇形同步，混淆）、Clairvoyance（Stardock 出品，定价档位 Free/Plus/Professional/Enterprise 但美元数字仅 Pro=$20/月明确、其余不清，部分缺失）。最终锁定 **Zawa**：单一产品、定价 5+ 独立源完全一致（官网定价页 + Toolify + StartupOpinions + Beebom + ChooseYourAI），无冲突无混淆，且贴合 ZLinke「AI 图像生成 / 设计」主线。
- 调研来源：官网 zawa.ai 定价页与功能页、GlobeNewswire（2026-07-03 Image Remix 新闻稿）、Toolify（公司信息 + 785.9K 月访问 + 2026-05-19 收录）、TechShark（横向评测 4.84/5）、Beebom、StartupOpinions、ChooseYourAI、BossGamerz、2ai.tools、ThinkComputers。
- 关键可验证事实：Starii Technology Pty Ltd 出品，原 X-Design；AI 品牌设计智能体，核心差异化=Brand Memory（品牌记忆强制跨素材套用规范）；功能含 Logo/品牌指南/海报/社媒/产品摄影（换背景·去水印·4K）/视频生成（Seedance 2.0·Veo 3.1·Sora 2·Kling）+ Image Remix 克隆爆款构图换自家产品；底层聚合 Nano Banana·Midjourney·Flux Kontext·GPT Image·Seedream；平台 Web/iOS/Android。定价多源一致：Free $0（60 信用点/天·20 图/天·5s 视频/天·2 品牌集）/ Plus $5.83/月（$69.99/年·800 信用点）/ Pro $20.83/月（$249.99/年·3,500）/ Max $41.67/月（$499.99/年·8,000）/ Enterprise 定制；据称 90% 用户选 Plus。综合评分 4.2（与 tools.ts 标注一致）；差异化=品牌记忆+一体化工作流+多模型不站队+低价，短板=信用点计费重度用户易触顶+位图非矢量+云端依赖。
- 产出：`content/tool-reviews/zawa.md`（约 2000 中文字，含 3 个 HTML 对比表：核心数据一览 / 价格方案 / 竞品对比；YAML 校验通过，frontmatter 无中文双引号；alternatives: canva-ai / midjourney / leonardo / ideogram 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` b34d3a1 成功，`git push` 成功（ae352dd..b34d3a1 main -> main）。
- 备注：本日完成 1 篇（zawa）。剩余未评测约 81 个（多为小众条目）。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆者；Focusee/Kukuai/Vaani/Clairvoyance 因定价冲突或同名混淆暂规避，待更硬证据再考虑。

## 2026-09-11 执行记录

**选定工具**：Highlight AI（`highlight-ai`）
- 决策背景：首页6大 + 原优先级批次早已全部完成；本日初选 `poe` 调研，写入前发现 `content/tool-reviews/poe.md` 已于 2026-07-16 存在（完整评测，评分 4.3 与 tools.ts 一致），glob 列表当时未列出该文件。立即改选剩余未评测、且公开资料最扎实可验证的条目——Highlight AI（捕获式桌面 AI 助理，Medal 团队出身，General Catalyst 背书），契合 ZLinke「AI工作台/桌面智能体」主线。
- 调研来源：highlightai.com 官网与帮助页、MacAIApps、AIGearBase、Wavel、WhichAI、BestAITools、TheAI Academy、UseCarly 横评（共 7+ 独立来源）。
- 关键可验证事实：2024 年成立、旧金山，团队源于游戏技术公司 Medal；50 万+ 用户（公司口径，多源一致）；融资 General Catalyst 等数千万美元（$10M–$40M 口径不一，已透明标注）；macOS 13.0+（Apple Silicon/Intel）与 Windows 全端；模型含 OpenAI/Claude/Grok，可 @ 切换、可自带 API Key；系统级浮窗 + 本地 OCR 捕获屏幕上下文、无机器人本地会议转录、跨 App 连续对话、每日简报、全文本检索；隐私本机优先、加密、不训练、SOC 2 Type II（观察期）；集成 GitHub/Notion/Slack/Linear/Gmail/Calendar/Figma，支持 MCP Server。定价多源冲突已透明标注：Free $0 / Pro $12/月（官方对比 Raycast 称由 $20 优惠至 $12，部分目录仍标 $20）/ Teams $16/席/月 / Enterprise 定制；年付约 8 折；Pro 2,000 积分/月偏紧。已知短板：无移动端、Windows 卸载残留报告、SOC 2 仍观察期。
- 综合评分：4.4（与 tools.ts 标注一致）；差异化=捕获式跨 App 上下文+本地隐私领先+免费档慷慨+多模型不锁定，短板=Pro 定价口径不一且积分偏紧+无移动端+合规观察期。
- 产出：`content/tool-reviews/highlight-ai.md`（约 2000 中文字，含 3 个 HTML 表；YAML 校验通过，frontmatter 无中文双引号；alternatives: chatgpt / claude / otter / macuse 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` 5276984 成功，`git push` 成功（5e1aed0..5276984 main -> main）。
- 备注：本日完成 1 篇（highlight-ai）。剩余未评测多为小众条目；后续若继续，建议优先挑多源一致、无定价冲突、无产品混淆者（如 skybridge 等已验证硬数据候选），否则宁缺毋滥。

## 2026-09-12 执行记录

**选定工具**：CircleChat（`circlechat`）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）早已全部完成；连续多日续做长尾小众条目后，本日从严筛剩余未评测候选。并行初探 aura / codemote / agentkey 三候选比对——aura 实为四个不同产品（AI 视频/游戏开发/身份防盗/亚马逊调价）混淆；codemote 定价冲突（trustmrr 年付 $44.99·周 $1.99·月 $5.99 vs exploreai Pro $29/月 vs 国区 App Store 周 ¥15·月 ¥38·年 ¥298）；agentkey 信号混杂（himcp 称无月费按量、linkgo 误写成房产 SaaS、pidune/dir2ai 标 Free 1000/Pro $49/Business $199）。最终锁定 **CircleChat**：单一产品、定价 4+ 独立源完全一致（aitoolbox.fyi / ToolRadar 2026-07-05 核对 / aitools.fyi / thistools.app 均证 自托管免费·Starter $29·Team $79·Scale $199 每工作空间/月、无 token 加价），无冲突无混淆，且契合 ZLinke「AI 编程开发 / 多 Agent 协作」主线。
- 调研来源：官网 circlechat.co、Product Hunt / Hunted.space 收录页（2026-07-05 上线·日榜第 6·约 137–151 upvotes·2 评价均分 5.00/5，口径已透明标注）、ToolRadar、AIToolbox、AITools.fyi、thistools.app、topaiproduct、CSDN 转载。
- 关键可验证事实：开源 AI Agent 协作工作空间，Slack 式频道 + 看板 + 独立 LLM Judge 验收门 + 人工审批门；Planner Agent 目标拆解带验收标准、技能路由、交付物先过 judge 再 Done（web 输出额外无头渲染检测）；MIT 自托管（Docker Compose，树莓派 4 可跑）免费，云端 $29/$79/$199 每工作空间/月、7 天试用、无 token 加价；BYO 模型 Key（OpenAI/Anthropic/Gemini/Groq/Cerebras/DeepSeek + 免费 fallback 网关）；四种运行时适配器 webhook/socket/Hermes/OpenClaw；完整审计日志。综合评分 4.2（与 tools.ts 标注一致）；差异化=开源自托管+验收门+零 token 加价，短板=部署门槛+Agent 数上限(3/10)+产品年轻独立评测薄+无移动端。
- 产出：`content/tool-reviews/circlechat.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览 / 价格方案 / 竞品对比；YAML 校验通过，frontmatter 无中文双引号；alternatives: coze / openclaw / manus / rowboat 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` 142c84e 成功，`git push` 成功（053c8a5..142c84e main -> main）。
- 备注：本日完成 1 篇（circlechat）。剩余未评测多为小众条目；后续若继续，建议优先挑多源一致、无定价冲突、无产品混淆者，否则宁缺毋滥。

## 2026-09-13 执行记录

**选定工具**：Clairvoyance（`clairvoyance`，星界）
- 决策背景：首页6大 + 原优先级批次早已全部完成；连续多日续做长尾小众条目后，本日从严筛剩余未评测候选。并行初探 clairvoyance / mimo-desktop / shizai-agent / aipoch-open-science 四候选——mimo-desktop 为小米 2026-09-08 刚开放邀测的桌面 Agent（定价未公布，仅 Beta 免费）；shizai-agent（实在智能）为企业级 Computer-Use Agent（OSWorld 90.2% 登顶，但定价走商务报价、无公开档位）；aipoch-open-science 为科研开源工作台（免费/OSS、BYO Key，但受众窄、独立评测薄）。最终锁定 **Clairvoyance**：单一产品、定价四档完全一致（官网定价页直接抓取 Free $0 / Plus $4 / Pro $20 / Enterprise $100 每月）、多独立来源（Stardock 官方新闻+博客、runtimewire 报道、TrishTech 评测、michaelmusings 用户体验）交叉验证，无冲突无混淆，且完美契合 ZLinke「AI工作台/桌面智能体」主线。
- 调研来源：clairvoyanceai.com 官方定价页（直接 WebFetch 抓取四档价格）、Stardock 官方新闻/博客（Beta 3 2026-07-23、v0.85 2026-08-25 Multiplayer AI）、runtimewire 独立报道（2026-08-25，8 来源）、TrishTech 评测（2026-08）、michaelmusings 用户体验博客（Alpha 期真实反馈）。
- 关键可验证事实：Stardock Software 出品（创始人 Brad Wardell，30 年桌面软件老厂 Fences/Start11/《银河文明》）；内部打磨约 2 年后 2026 公开，Beta 3（2026-07-23）、v0.85（2026-08-25，Multiplayer AI）；跨 Windows/macOS/Linux + iPhone 远程端；ACP（Agent Communication Protocol）调度已装 AI CLI；员工制 Staff 编排（有名/知识库/权限/跨会话记忆，跨 Claude Code/Codex/Grok/本地模型组队）；本地优先（普通文件存储、可全程跑 Ollama）；Universal Resume 跨模型续话 + 上下文压缩（缓存命中率宣称 >99%）；Exhibits 交互式产出；定时任务 + 远程指挥。定价四档（官网抓取）：Free $0 永久（个人非商用，含本地模型/远程/定时/Exhibit）/ Plus $4/月（云同步+看板+1GB）/ Professional $20/月（商用授权+Pro Token+Multiplayer+多桌面编排）/ Enterprise $100/月（团队+Domains+Teams+5 倍 Token）。用户量官方未披露。综合评分 4.1（与 tools.ts 标注一致）；差异化=本地优先+员工制组织图+Multiplayer 同屏+免费档极慷慨，短板=仍 Beta(0.85)界面偶卡死/取消入口不清+商用需付费+企业级治理透明度不足+闭源生态年轻。
- 产出：`content/tool-reviews/clairvoyance.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览 / 价格方案 / 竞品对比（Clairvoyance vs OpenClaw vs Skywork Desktop vs Manus）；YAML 校验通过，frontmatter 无中文双引号；alternatives: openclaw / skywork-desktop / manus / highlight-ai 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` 62dee6b 成功，`git push` 成功（1c7e8c4..62dee6b main -> main）。
- 备注：本日完成 1 篇（clairvoyance）。剩余未评测多为小众条目（mimo-desktop 因定价未公布暂不宜写、shizai-agent 企业报价不透明、aipoch-open-science 受众窄）；后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆者，否则宁缺毋滥。

## 2026-09-14 执行记录

**选定工具**：Tabstack（`tabstack`，Mozilla 出品的 AI 网页执行层 API）
- 决策背景：首页6大 + 原优先级批次早已全部完成，连续多日续做长尾小众条目。本日从 `lib/tools.ts` 剩余 87 个未评测条目中，按「多独立来源一致、无定价冲突、无产品混淆、强可验证」硬规则筛出三个强候选（Tabstack / Skybridge / Glaze by Raycast），最终选 **Tabstack**——Mozilla 背书、定价四档完全一致、5+ 独立评测交叉验证、竞争对手清晰，最符合「零幻觉」红线，且与站内已评的 browserbase / prometheus-firecrawl 强关联互补。
- 调研来源：tabstack.ai 官方站点与文档、Product Hunt 主产品页与历次发布、ToolRadar（2026-09-07 核对）、The AI Agent Index、ToolWorthy、GotoolRadar、Mozilla 官方安全博客（Brave 间接提示注入披露与修复）、Hacker News Show HN 讨论，共 5+ 独立来源。
- 关键可验证事实：Mozilla New Products 孵化器出品；四类端点 /extract /generate /research /automate；Pilo 开源无障碍树引擎（比截图方案省 60–80% token）；2026 年 6 月起连续 PH 发布（Web Research 6/1、Structured Extraction 6/11、Dev Tools 6/18、Schema Source 6/28、Browser Automation 7/1），主产品页 5.0/5（2 评价）、1.2K 关注者、Dev Tools 单次约 350 票；Discord 5,400+ 成员；TS/Python SDK + CLI + LangChain + 托管 MCP Server（Claude Code/Cursor/VS Code/Windsurf/Zed）；Human-in-the-Loop 交互模式（Beta）。定价多源一致：Free 1 万 credits（早期访问页曾标 5 万，2026-08 后多家目录一致为 1 万，已透明标注）/ Individual $0 按量 $0.35 每千 credits / Team $99 每月（50 万 credits，溢出 $0.30）/ Pro $499 每月（300 万 credits，溢出 $0.25）/ Enterprise 询价；单次动作消耗 10/50/100/100/250/350 credits。安全：2026-06 Brave 披露 /automate 间接提示注入漏洞，Mozilla 已修复并加表单防火墙 + 外部内容隔离（Brave 独立验证）。诚实标注：无 SOC 2/ISO 认证、信用点计费在自动化/研究端点不可预测、早期阶段企业功能与文档仍在成熟、遵守 robots.txt 意味着部分源不触碰。竞品对比含 Browserbase/Firecrawl/Playwright MCP（ToolRadar 比价 Apify/LangChain 约 $39、Tabstack Team $99 为三者最贵）。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=Mozilla 隐私架构+无障碍树 token 效率+一体四端点+内置引用研究，短板=无合规认证+变量计费+早期成熟度+robots.txt 绅士约束。
- 产出：`content/tool-reviews/tabstack.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 校验通过，frontmatter 无中文双引号；alternatives: browserbase / context-dev / prometheus-firecrawl / openclaw 均为 tools.ts 真实存在的 id 且已评测）。
- 提交：`git commit` c62fa0b 成功，`git push` 成功（2fea904..c62fa0b main -> main）。
- 备注：本日完成 1 篇（tabstack）。剩余未评测约 86 个；后续仍应优先挑多源一致、无定价冲突、无产品混淆者（如 skybridge 免费开源 MCP 框架、glaze 等已验证硬数据候选），否则宁缺毋滥。

## 2026-09-15 执行记录

**选定工具**：Glaze by Raycast（`glaze`）
- 决策背景：首页6大 + 原优先级批次早已全部完成；连续多日续做长尾小众条目后，本日依 2026-09-14 备注推荐的「已验证硬数据候选」锁定 glaze——Raycast 背书、PH 日榜第1（500+ upvotes）、定价四源一致、有独立第三方评测（NeuralPaws 4.0/5），契合 ZLinke「AI编程开发」主线，且无定价冲突/产品混淆。skybridge 为同批候选（免费开源 MCP 框架），数据亦干净，留待后续备选。
- 调研来源：ToolRadar 定价页（2026-08 核对）、TopAIHubs、NeuralPaws 独立评测（4.0/5）、AINative Foundation 周报（2026W27，589 upvotes / 现代化 86/100）、OneI、PH 中文速览与 producthunt.com.cn 用户评论、夜雨聆风深度文。
- 关键可验证事实：Raycast 出品（YC W20、累计 $47.8M、Atomico 领投）；AI 原生 Mac 应用生成器，输出真实 .app 二进制（Xcode 编译）、本地优先离线运行、系统级集成（文件系统/快捷键/菜单栏/后台进程）；2026-03 内测、7 月 1–3 日公开上线、PH 日榜第1（口径 465/535/574/589 upvotes）；硬性要求 macOS Tahoe + Apple Silicon，Windows/Linux 规划中；定价四源一致——Free $0（120 积分欢迎包）/ Pro $25/月（年付 $20，200 积分、unlisted 发布）/ Team $35/席/月（年付 $30，200 积分/席、私有团队商店），14 天试用 + 积分加购；积分按 Agent 轮次计；你拥有应用代码与内容；可对话迭代 + 可视化检视器 + 应用商店 + MCP Server 脚手架；Raycast 自家客服/销售流程已跑在 Glaze 应用上（自吃狗粮）。竞品对比（公开口径）：Replit（$25/月，Web 全栈）/ Bolt.new（$20/月，Web 原型）/ FlutterFlow $5 / Retool $9 / Tooljet $19 / Voiceflow $60。NeuralPaws 分项：输出质量 4.3 / 易用性 4.6 / 商店 4.1 / 迭代 4.0 / 平台广度 2.5 / 性价比 4.1 / 综合 4.0。用户评论（PH 中文站）：番茄钟秒出、设计师快速验证想法、希望更多 API、离线好评、生成应用需微调。
- 综合评分：4.4（与 tools.ts 标注一致）；差异化=真原生桌面+离线+系统级集成+Raycast 打磨+免费档慷慨，短板=Apple Silicon 独占+积分偏紧+无法跨 Mac 分发+早期第三方长测少。
- 产出：`content/tool-reviews/glaze.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 校验通过，frontmatter 无中文双引号；alternatives: replit / bolt-new / cursor / manus 均为 tools.ts 真实存在的 id 且已评测）。
- 提交：`git commit` 1dfc9f5 成功，`git push` 成功（0e82b4d..1dfc9f5 main -> main）。
- 备注：本日完成 1 篇（glaze）。剩余未评测约 86 个；后续仍优先挑多源一致、无定价冲突、无产品混淆者（如 skybridge 免费开源 MCP 框架等已验证候选），否则宁缺毋滥。

## 2026-09-16 执行记录

**选定工具**：Skybridge（`skybridge`）
- 决策背景：首页6大 + 原优先级批次（第一/二/三批）早已全部完成；连续多日续做长尾小众条目后，本日依 2026-09-14/09-15 备注推荐的「已验证硬数据候选」落实 skybridge——Alpic 出品的 MCP Apps 开源框架，5+ 独立来源交叉验证、定价零冲突（MIT 免费）、无产品混淆，契合 ZLinke「AI 编程开发 / 工具链」主线。
- 调研来源：alpic.ai 官方博客（V1.0 / V2 发布文）、GitHub alpic-ai/skybridge 仓库与 releases、Product Hunt 2026-06-23 每日热榜（laughingzhu）、Alpic LinkedIn 发布帖、reporank / awesomeskills / dev.co / exploreai / completeaitraining / aitoolnet / manufacture.com / shiporskip / deps.dev 共 10+ 独立来源。
- 关键可验证事实：Alpic（alpic.ai）出品，MIT 开源全栈 TypeScript 框架，构建在 ChatGPT/ChatGPT Apps 与 MCP 宿主内运行的交互式 React 应用；GitHub 创建 2025-10-07，约 1,990 stars / 120–132 forks / TypeScript 96%；稳定线 v1.2.5（2026-07-07），v2.0.0 大版本 2026-09 发布（采用新 MCP 协议 + 引入 Evals 测试 @skybridge/test）；npm 月下载 10 万+（官方）/ aat.ee 累计 50 万+，约 10% 的 Claude/ChatGPT 应用商店 App 基于它（官方）；被 OpenAI 官方文档/博客推荐；Product Hunt 2026-06-22 上线、当日榜第 2（518 票，仅次于 AgentX 532）；核心能力=端到端 tRPC 风格类型安全（server→React view）+ 跨客户端 polyfill（含 Claude 缺 viewState 用 localStorage 兜底）+ HMR 本地模拟器/Alpic Tunnel 公共隧道/Beacon 合规扫描 + Agent 友好 CLI/Skills。定价透明零冲突：框架免费 MIT；托管 Alpic Cloud Free $0（1 万请求/月）/ Pro（alpic.ai 标 $30、docs.alpic.ai 标 $50，已在正文透明标注冲突）/ Business $300 / Enterprise 定制；溢出 $150/百万。诚实标注：强绑定 TS/React、项目年轻 v2 破坏性变更、部分宿主差异（如 ChatGPT 内购）无法 polyfill、独立用户评测样本仍少。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=开源零锁定+跨客户端+类型安全+完整 devtools+OpenAI 背书，短板=TS/React 绑定+年轻 API 演进+跨端变现缺口+第三方长测少。
- 产出：`content/tool-reviews/skybridge.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比（Skybridge vs FastMCP vs 原生 MCP SDK）；YAML 校验通过，frontmatter 无中文双引号；alternatives: agents-cli/replit/cursor/openclaw 均为 tools.ts 真实存在的 id）。
- 提交：`git commit` c39fe01 成功，`git push` 成功（352006e..c39fe01 main -> main）。
- 备注：本日完成 1 篇（skybridge）。剩余未评测约 86 个；至此 memory 历次推荐的已验证候选（osaurus/agents-cli/macuse/glaze/skybridge）均已覆盖。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆者，否则宁缺毋滥。

## 2026-09-17 执行记录

**选定工具**：Amazon Quick（`amazon-quick`）
- 决策背景：首页6大 + 原优先级批次早已全部完成；本日从严筛剩余约 86 个未评测条目。初判候选 amazon-quick 时一度误搜成 Amazon Q Developer（IDE 编程助手），读取 `lib/tools.ts` 第 2323 行后发现该条目实为 **Amazon Quick**——AWS 的企业级 AI 工作助手/跨设备常驻 Agent（桌面端 2026-09 GA，category=AI工作台/桌面智能体，url=aws.amazon.com/quick）。及时纠偏，避免把两款产品混淆出幻觉。该工具公开资料极扎实（AWS 官方产品页/定价页/GA 博客 + GeekWire/钛媒体/TMT Post/ai-bio.cn 多源），定价四档官方明示、无冲突，契合 ZLinke「AI工作台/桌面智能体」主线。
- 调研来源：AWS 官方产品页 aws.amazon.com/quick、官方定价页 aws.amazon.com/quick/pricing、官方 GA 博客（machine-learning/amazon-quick-is-now-generally-available-on-desktop）、techjacksolutions 定价拆解、GeekWire(2026-09-10)、钛媒体/TMT Post(2026-09-09)、ai-bio.cn、musthave.ai、studioglobal.ai 共 6+ 独立来源。
- 关键可验证事实：AWS 出品，前身 Amazon Quick Suite 2025-10-09 GA、2026-04-28 更名 Amazon Quick，桌面端 2026-09 上旬 GA（多源口径 9 月 9–11 日）；macOS Apple Silicon + Windows 10+ x64 桌面端、iOS/Android 移动活动流，首发 7 个 AWS 海外区域；核心=后台常驻 Agent（笔记本合上后云端续跑）+ 活动信息流（邮件/Slack/日历/CRM 合并优先级队列、已解决项自动消失）+ 个人/团队知识图谱 + 本地文件夹免上传索引成 Quick Space + 对话即交付（Word/Excel/PPT/图像/看板/无代码 App）+ Microsoft 365 扩展 GA + Quick Flows/Quick Automate；企业级底座 HIPAA/FedRAMP/SOC 2/ISO 27001 内置、CloudWatch/CloudTrail 审计、数据不出域、明确不训练、MDM/Purview DLP/MCP；已公开客户 Southwest Airlines/3M/Jabil/DXC/Vertiv/LabCorp/PGA Tour。定价四档（官方定价页）：Free $0、Plus $20 用户·月（年付，$25 月付，无 infra 费、无需 AWS 账号）、Professional $20 + $250 账号·月、Enterprise $40 + $250 账号·月；Agent 小时按秒计费（$3/$6 溢出）、索引超额 $5/GB·月；落地页另列个人 Max $100/月（5 倍用量）。诚实标注：桌面端极新（GA 不到两周）、缺 G2 等独立长期评分与第三方基准、强绑定 AWS 美区、国内访问与飞书/钉钉/企微连接器不明、复合计费对个人不友好。竞品对比含 Microsoft 365 Copilot($30)/Glean/ChatGPT Work。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=永远在线跨设备接力+知识图谱+AWS 级合规底座+Plus 定价克制，短板=产品极新+AWS 海外绑定+复合计费复杂+独立评测薄。
- 产出：`content/tool-reviews/amazon-quick.md`（约 2100 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 校验通过，frontmatter 无中文双引号；alternatives: claude-cowork/highlight-ai/clairvoyance/chatgpt-work 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` 28bb532 成功，`git push` 成功（3c0db09..28bb532 main -> main）。
- 备注：本日完成 1 篇（amazon-quick）。剩余未评测约 85 个。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆者（如 crewdle/pluno/supafax/tabbit 等本日初筛过、数据亦可但偏窄/定价口径待核者），否则宁缺毋滥。

## 2026-09-18 执行记录

**选定工具**：AgentX（`agentx`）
- 决策背景：首页6大 + 原优先级批次早已全部完成；从剩余约 85 个未评测条目中，并行初探 agentx / astudio / bono-ai / lightfield / supafax / pluno 六候选。bono-ai 定价有 $25 vs $30 冲突、lightfield 定价三源严重不一致（$59/$89/$0.040 口径）、supafax 存在「传真 App(SupaFAX $1.99)」与「AI 邮件管理(Supafax $35)」同名混淆、astudio 仅 3 天前发布独立评测极薄，均规避。最终锁定 **AgentX**：单一产品、定价 4+ 独立源完全一致（官方定价页 + ToolRadar + aidiveforge + everydev 均证 免费 / $49 / $199 / $299）、无冲突无混淆，且契合 ZLinke「AI编程开发 / 多 Agent 协作」主线，差异化（构建+评估+部署一体化）鲜明。
- 调研来源：agentx.so 官方站与定价页、Product Hunt（2026-06-22 评估框架登当日榜第1，553 upvotes / 174 评论，产品页 5.0/5 共 6 评价）、ToolRadar、everydev（公司信息：2023 创立、Sunnyvale、15 人、$360K 融资、2024 ARR $1.2M）、rightaichoice（2026-08-05 结构化研究 30 提及 / 66% 正面 34% 负面）、aidiveforge、kingy.ai、Hunted.space，共 6+ 独立来源。
- 关键可验证事实：创始人 Xuelai (Robin) Wang（前 Ripcord 高级 ML 经理、LearningPal 被收购）+ Marcin Michalak（CTO、Forbes 30 Under 30 Europe）；种子轮 Plug and Play Ventures 领投、2024 入选 Google for Startups AI（$350K 云额度）+ OpenAI 初创资助；可视化拖拽多 Agent 画布 + 内置评估框架（测试集/回归/LLM 裁判/跨模型成本延迟对比，类 CI/CD）+ 一键部署 API/Slack/Web/Email/Voice + 版本回滚 + 全链路 trace；兼容 LangChain/CrewAI/OpenAI Agents SDK/Anthropic/Google ADK，有 Python SDK 与 MCP；白标与客户工作区（Professional 起）；SOC 2 controls/RBAC/加密/HITL，ISO 27001 与本地部署为企业版可选项（厂商声明）。定价四档（官方）：Free $0（200 一次性积分）/ Solo Builder $49（年 $490，5,000 积分·月）/ Professional $199（年 $1,490，10,000·月，白标）/ Business $299（年 $2,990，无限 agents，优先 SLA）/ Enterprise 定制；积分 GPT-4o 10 / Claude Sonnet 12 / Gemini Pro 8 / Claude Haiku 3，溢出 $10/1,000。竞品对比（ToolRadar 口径）：Dify $59、FlowiseAI $35、LangChain $39（框架开源）、Devin $20、AnythingLLM $0。诚实标注：标准档无自托管、积分账单浮动不可预测、独立长期评测样本薄（PH 仅 6 评，G2 分数厂商口径未审计）、用户反馈对 Agent 准确率与上传文档安全存疑、疑似刷票质疑、GitHub 曾有重复 SQL bug。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=评估优先+部署闭环+跨模型积分+白标，短板=无自托管+账单浮动+评测样本薄+安全疑虑。
- 产出：`content/tool-reviews/agentx.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 校验通过，frontmatter 无中文双引号；alternatives: coze/manus/rowboat/openclaw 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` 6b9da9d 成功，`git push` 成功（db75762..6b9da9d main -> main）。
- 备注：本日完成 1 篇（agentx）。剩余未评测约 84 个（多为小众条目）。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆者（如 astudio 待评测沉淀、pluno/strode 等），否则宁缺毋滥。

## 2026-09-20 执行记录

**选定工具**：Tabbit AI 浏览器（`tabbit`）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）早已全部完成；连续多日续做长尾小众条目后，本日从严筛剩余约 83 个未评测条目。并行初探 stride / crewdle / tabbit / aipoch-open-science 四候选——stride 定价口径冲突（$12/$32/$69 vs $9/$29 多源不一致）、crewdle 存在同名「会议管理工具 $4/月」产品混淆、aipoch-open-science 为免费 OSS 科研工作台（受众窄、独立评测薄）。最终锁定 **Tabbit**：单一产品、定价四源完全一致（官方定价页 go.tabbit.ai/tabbit-pricing + aisagely + toolify + topaihubs 均证 免费 $0 / 标准版 $0(默认浏览器解锁) / 专业版 $30/月·中国站 ¥39.60）、无产品混淆，且完美契合 ZLinke「AI工作台/桌面智能体/Agentic Browser」主线。
- 调研来源：美团光年之外 GN06 公开信息（百度百科/证券时报/财经）、Tabbit 官方定价页、Product Hunt/Hunted.space（2026-09-03 上线·150 upvotes·日榜第6·Zac Zuo 提交）、aisagely 实测、Toolify、TopAIHubs、TechShark（4.9/5）、ChatGate、producthunt.com.cn 用户评论，共 8+ 独立来源。
- 关键可验证事实：美团旗下光年之外（GN06）团队（负责人刘炯，王慧文 2018 创立、2023 被美团 20.65 亿元收购）出品；2025-08 立项、2026-03-02 公测、2026-06-09 V1.0 发布；基于 Chromium 的 AI 原生桌面浏览器（macOS 12+ Apple Silicon / Windows 10/11）；GUI Browser-Use Agent（独立标签组并行、不抢前台）+ @ 上下文引用 + 妙招/Skills 固化 + 本地加密记忆与语义索引；内置 10+ 模型（Claude Opus-4.8/GPT-5.6/Gemini-3.x/DeepSeek V4/Kimi K2.6/GLM/MiniMax/豆包/LongCat），标准版可同时对比 3 个模型；`/tabbit` 接 Claude Code/Codex 复用登录态；一键从 Chrome/Safari/Edge 迁移。定价四源一致：Free $0（1× 用量）/ Standard $0（设默认浏览器解锁，10×）/ Pro $30/月（100× + 顶级模型，中国站 ¥39.60）。效率数据（PM Yu 自报）：BrowserBench 75 任务 64% 成功率、约 1.9 倍速、少 61% 输入 token；公测内部成功率 53.1%→发布 91.8%（官方内部口径，已区分来源）。诚信标注：Agent 自主成功率仍约 1/3 失败、隐私无第三方独立审计、2026-03-03 曾有「read frog」开源代码争议（官方已承认并改正开源）。竞品对比含 Dia（Better Answers $20/月、Better Days $100/月、仅 Apple Silicon）、OpenClaw（本地优先桌面 Agent）。
- 综合评分：4.3（与 lib/tools.ts 标注一致）；差异化=Agentic Browser 品类 + 免费门槛极低 + 模型中性 + 工作流固化，短板=自主成功率有限 + 浏览器形态边界 + 隐私待审计/历史争议。
- 产出：`content/tool-reviews/tabbit.md`（约 2100 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 校验通过，frontmatter 无中文双引号；alternatives: openclaw/clairvoyance/highlight-ai/skywork-desktop 均为 tools.ts 真实存在且已评测的 id）。
- 附带修正：同步将 `lib/tools.ts` 中 tabbit 的 price 字段由过时不准确的「Free：永久免费」改为真实三档定价（免费 $0 / 标准版 $0 / 专业版 $30 每月·中国站 ¥39.60）。
- 提交：`git commit` b19e051 成功，`git push` 成功（f5c628d..b19e051 main -> main）。
- 备注：本日完成 1 篇（tabbit）。剩余未评测约 82 个（多为小众条目）。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆者（如 stride 待定价口径澄清、astudio 待评测沉淀、aipoch-open-science 受众窄但可写），否则宁缺毋滥。

## 2026-09-19 执行记录

**选定工具**：Pluno（`pluno`）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）早已全部完成；连续多日续做长尾小众条目后，本日从 `lib/tools.ts` 剩余 87 个未评测条目中，依 2026-09-18 备注的推荐锁定 **pluno**——且该工具是少数「多源一致、定价零冲突、无产品混淆」的硬数据候选（官网定价页 + 官方对比博客 + My AI Guide + RightAIChoice + EveryDev 五源对价格完全吻合），完美契合「零幻觉」红线，且属 B2B 客服自动化、与站内已评测的 coze/openclaw/manus 强关联可比。
- 调研来源：pluno.ai 官网定价页与对比博客（Intercom Fin AI vs Pluno 2026）、My AI Guide（pluno 工具页）、RightAIChoice（Pluno vs Truleo）、EveryDev（Pluno AI 开发者页）、TwitterScore、StartupIntros、Dealroom、CrustData（公司/融资/团队），共 8+ 独立来源。
- 关键可验证事实：Pluno（前身 AwesomeQA），德国 Mühldorf/Munich，创始人 Alexander Abstreiter(CEO) 与 Korbinian Abstreiter(CTO)；成立于 2022（前身 2021）；$2.8M 种子轮（2023-07，North Island Ventures 领投，Coinbase Ventures/Possible Ventures/Uniswap Labs Ventures 等跟投）；约 7-10 人；2026 推 Browser Agent（Chrome/Edge 直接 API 执行）。核心能力=Deflection AI（从过去工单+帮助中心+实时数据学习，仅信心足够时关单、升级不计费）+ AI Copilot（带推理链回复草稿）+ Escalation Copilot（Zendesk→Jira/Slack 双向同步）+ AI Tagging/Field Filling + Call Insights/Summary + Quality Assurance（100% 对话打分）+ Troubleshooting Agent（查代码/日志/录屏给根因、可开 GitHub PR）+ Knowledge Base 持续调优；SOC-2 Type 2 + GDPR、数据存欧洲 Microsoft Azure、明确不训练模型；月处理 500K+ 复杂工单、平均自主解决率约 65%、客户 Innovorder 达 67%。定价五源一致：平台费约 €425/月起、1K-3K 档 €850/月（年付 85 折）+ AI Copilot €49/席/月 + Deflection €0.90/次解决（72h 窗口、转人工不计费）+ QA €35/席/月 + Troubleshooting €99/月（约 50 次）+ Enterprise 定制 + 14 天全功能免信用卡试用。竞品对比（客观口径，Fin 67% 引自 Pluno 官方博客）：Intercom Fin 按解决量计费、24h 计费窗口、平均 67%；Zendesk AI 原生插件。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=历史工单学习（非关键词匹配）+ 模块化透明定价 + SOC-2/欧洲托管/不训练 + Zendesk/Jira/Slack 原生双向同步，短板=强绑定 Zendesk（非 Zendesk 用不了）+ 效果依赖历史工单量 + 复合计费高量不便宜 + 72h 计费窗口可预测性争议 + 小团队长期迭代待观察。
- 产出：`content/tool-reviews/pluno.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 校验通过，frontmatter 无中文双引号；alternatives: coze/openclaw/manus/claude-cowork 均为 tools.ts 真实存在且已评测的 id）。
- 附带修正：同步将 `lib/tools.ts` 中 pluno 的 price 字段由过时且不准确的「免费模拟 / 付费联系官方」改为真实定价「平台费 €850/月起 + AI Copilot €49/席/月 + Deflection €0.90/次」，使首页工具卡与评测一致。
- 提交：`git commit` be2d3b0 成功，`git push` 成功（7c5ea33..be2d3b0 main -> main）。
- 备注：本日完成 1 篇（pluno）。剩余未评测约 83 个（多为小众条目）。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆者（如 astudio 待评测沉淀、stride/crewdle/tabbit 等数据亦可但角度各异），否则宁缺毋滥。

## 2026-09-21 执行记录

**选定工具**：Sider Omni Sidebar（`sider-omni`）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）及此前历次续做的小众条目均已覆盖；本日从严筛 `lib/tools.ts` 剩余 87 个未评测条目。多数候选被记忆中历次已标记的「定价冲突/同名混淆」清单排除（taste/soloop/ogment-ai/qapilot-cowork/discode-ai/upstream/clade/makersclaw/anysearch/zaro/bluerails/autoedit/notra、Vokal/Ellis/Annotate/Kepler/Glideo/Focusee/Kukuai/Vaani/Clairvoyance、aura/codemote/agentkey、stride/crewdle/aipoch-open-science、bono-ai/lightfield/supafax/astudio、mimo-desktop/shizai-agent 等）。最终锁定 **sider-omni**：真实、可验证、公开资料丰富，且是站内已评测的 clairvoyance/macuse/openclaw/highlight-ai 的强关联可比项；契合 ZLinke「桌面智能体」主线。
- 调研来源：Sider 官方 lab 页（sider.ai/lab/sider-omni）、Product Hunt / Hunted.space（两处页面口径：dashboard 375 upvotes/第5 vs product 261 upvotes/第4，均 2026-09-18）、Coding4Food、ChatGate、AICrier、Chrome-Stats（500万+ 安装/4.92分）、Edge 商店（270万+ 用户/4.8分）、aiproductivity.ai（2026-08 定价核对）、aitrendtool（定价核对）、toolso.ai（Vidline Inc. 背景）等 8+ 独立来源。
- 关键可验证事实：Vidline Inc.（波士顿初创、全球远程）出品；macOS 原生窗口级 AI Agent 侧栏，紧贴任意 App 窗口停靠、就地读屏执行、无复制粘贴/无上传；基于 GPT-6 Astra（OpenAI 2026-09-03 旗舰）+ 多模型可一键切换；支持 BYOC（接已有 ChatGPT/Claude/Codex 额度）；每窗独立 Agent + 跨窗引用 + 浮动桌面伴侣；仅 macOS（Apple Silicon/Intel）。兄弟产品 Sider 扩展 Chrome 500万+ 安装、Edge 270万+ 用户。定价透明处理：Omni 自身 Freemium + BYOC（确定）；底层 Sider 会员档位 2026 年多次变动，第三方目录口径 $8–$100/月不等，已明确标注并以最新核对（aiproductivity.ai 2026-08：Lite $25 / Pro $50 / Max $100 月付）作参考、提示以官网为准。诚实标注：产品极新（2026-09-18 PH 上线）、长期独立评测薄、复杂跨应用链路可靠性待验证、Mac 内存/耗电代价、屏幕上有生产 token/PII 时需谨慎。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=窗口级上下文连续性+BYOC 省钱+多模型不锁定+零上传隐私姿态，短板=macOS 独占+产品极新+隐私摩擦+会员定价波动。
- 产出：`content/tool-reviews/sider-omni.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 经 PyYAML 校验通过，frontmatter 无中文双引号；alternatives: macuse/clairvoyance/openclaw/highlight-ai 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` f187592 成功，`git push` 成功（d31f0b3..f187592 main -> main）。
- 备注：本日完成 1 篇（sider-omni）。剩余未评测约 86 个（多为小众条目，且多数有定价/混淆硬伤）。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆、且有硬证据的条目（如 astudio 待沉淀、connectmachine 等数据亦可但偏窄），否则宁缺毋滥。

## 2026-09-22 执行记录

**选定工具**：Kimi Code Desktop（`kimi-code-desktop`）
- 决策背景：本日初判想写 octop（腾讯开源自托管 AI 助手），但 `content/tool-reviews/octop.md` 已于 2026-09-20 存在（完整评测，评分 4.4，与 tools.ts 一致），不在自动化 memory 历次记录里（首轮 glob 截断漏掉 octop.md 与 zcode.md）。立即改选剩余未评测、且公开资料最扎实可验证的条目——Kimi Code Desktop（月之暗面 Moonshot AI 出品，2026-09-18 上线的官方桌面编程 Agent 客户端），契合 ZLinke「AI编程开发」主线，定价/功能/实测多源可验证。
- 调研来源：Kimi 官方发布文（kimi.com/code）、官方定价页（kimi.moonshot.cn/code/en）、智东西/搜狐一手实测、VPS Ranking（90/100）、FreeAI Tool（8.5/10）、Spectrum AI Labs（定价与 K3 基准对比），共 5+ 独立来源。
- 关键可验证事实：2026-09-18 macOS/Windows 同步上线，安装包约 143MB；旗舰模型 Kimi K3（也可 BYOK 接第三方），Terminal-Bench 2.1 约 88.3%；四模式 Plan/Goal/Swarm/实验性 Tower；内置终端/浏览器/Git 状态/逐文件 diff/截图标注/ComputerUse/KimiDatasource 数据插件；CLI 任务自动同步桌面端。定价（官方页，月付/年付月均）：免费档（基础能力+有限 K3 额度，耗尽静默降级 K2.6）/ Plus ¥99·月（年付 ¥79，¥948/年）/ Pro ¥199·月（年付 ¥159，¥1908/年）/ Max ¥699·月（年付 ¥559，¥6708/年）；K3 在 Plus 及以上可用；新会员体系已上线、Code 场景取消周限额。竞品对比含 Cursor($20/月)/Claude Code($20/月)/TRAE Work(免费档慷慨)。诚实标注：K3 输出约 35 tokens/秒（主流旗舰最慢）、免费档静默降级 K2.6、产品极新 Plugin/Skill GUI 未完成、第三方 API 接入有会话 ID header 坑（智东西记录，可修）、长期独立评测样本薄。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=最低价用前沿模型+最全 Agent 模式+桌面内置浏览器/ComputerUse+不锁模型，短板=K3 偏慢+免费档静默降级+产品极新生态未熟。
- 产出：`content/tool-reviews/kimi-code-desktop.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 经 PyYAML 校验通过，frontmatter 无中文双引号；alternatives: cursor/claude-cowork/trae-work/windsurf 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` d55d5e2 成功，`git push` 成功（acfa736..d55d5e2 main -> main）。
- 备注：剩余未评测约 85 个（多为小众条目，多数有定价/混淆硬伤）。⚠️ 已知 Vercel 部署自 2026-09-04 起冻结（见项目长期记忆），本次 push 已上 GitHub 但线上站不会自动重部署，需赵生手动 Redeploy 后文章才上线。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆、且有硬证据者（如 astudio/connectmachine 等），否则宁缺毋滥。

## 2026-09-23 执行记录

**选定工具**：Meta Muse（`meta-muse`）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）及此前历次续做的小众条目均已覆盖；本日从严筛剩余 87 个未评测条目。并行初探 meta-muse / astudio / connectmachine 三候选——astudio 搜索结果 muddy（科大讯飞 AStudio 桌面平台 vs 阿里云 AgentStudio vs 通用「AI Studio」产品混淆，无法锁定单一定价）；connectmachine 数据干净但属「数字名片」窄众（memory 已标「偏窄」）。最终锁定 **Meta Muse**：Meta 2026-09-08 发布的消费级个人 AI 智能体，5+ 独立权威源（Reuters/TechCrunch/Axios/CNBC/CNET）一致交叉验证定价与功能，无冲突无混淆，且是 ZLinke「AI工作台/桌面智能体」主线中极少数巨头级、强可验证、时效性极高的条目。
- 调研来源：Meta 官方新闻室/帮助中心、Reuters、TechCrunch、Axios、CNBC、CNET（定价与发布）、AIxploria、learninggpt、nex-automations（架构/安全/开发者 API）、Trustburn、Saner.AI、Business Insider（真实用户反馈）共 10+ 独立来源。
- 关键可验证事实：2026-09-08 美国首发、18+；底层 Muse Spark 1.3（2026-09-02，Meta 称最强）；每人一台 Muse Secure VM（隔离 Linux 虚拟机+浏览器+存储+终端）+ Sentinel 安全子代理审批所有出网动作；入口 Muse App(iOS/Android)/muse.ai/WhatsApp，AI 眼镜规划中；支付用 Link by Stripe 一次性卡号 + Link 赔付保障（AI 代理首例）；定价 Free 每周最高 1 亿 tokens（绑卡）/ Power $20/月 / Maximum $100/月（Power≈5亿、Maximum≈30亿 tokens/周为 Meta 帮助中心口径，TechCrunch/Axios 称精确上限未在发布时完整公布，已透明标注）；开发者 API 输入 $1.25/百万、输出 $4.25/百万 token、1M 上下文；bug bounty 最高 $30 万；Meta 家族 36 亿日活（2026 Q2）、WhatsApp 30 亿+ 月活；首席 AI 官 Alexandr Wang、AI 产品 VP Vishal Shah。安全黑历史：春季发布推迟修安全、内测静默丢任务 + 误拉 iCloud 私人照片；正式版用户实测仍有登录循环/价格过期毛刺。用户反馈：Trustburn 4/5（21 评，样本薄）；BI 记者实测有成功（申诉医疗账单）有失败（Walmart 订单理解过死板）；被赞「首个开箱即用的 OpenClaw 类消费产品」，但信任（Meta 数据归属）问题突出、训练默认 opt-out、Confidential VM 年底才上。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=WhatsApp 原生零安装入口+独立安全 VM+Sentinel 审批+真能交易，短板=仅美国+隐私信任硬伤+早期不稳+场景偏窄（无笔记/文档/团队）。
- 产出：`content/tool-reviews/meta-muse.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 经 PyYAML 校验通过，frontmatter 无中文双引号；alternatives: openclaw/claude-cowork/chatgpt-work/manus 均为 tools.ts 真实存在且已评测的 id）。
- 附带修正：同步将 `lib/tools.ts` 中 meta-muse 的 price 字段由过时模糊的「Freemium：日常用量免费…」改为真实三档定价「免费（每周最高 1 亿 tokens）/ Power $20 每月 / Maximum $100 每月」，使首页工具卡与评测一致。
- 提交：`git commit` a96158d 成功，`git push` 成功（10da71e..a96158d main -> main）。
- 备注：剩余未评测约 86 个（多为小众条目，多数有定价/混淆硬伤）。⚠️ 已知 Vercel 部署自 2026-09-04 起冻结，本次 push 已上 GitHub 但线上站不会自动重部署，需赵生手动 Redeploy 后文章才上线。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆、且有硬证据者（如 connectmachine/aipoch-open-science 等），否则宁缺毋滥。


## 2026-09-24 执行记录

**选定工具**：实在Agent（`shizai-agent`，实在智能 / Intelligence Indeed）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）及此前历次续做的小众条目均已覆盖；本日从严筛 `lib/tools.ts` 剩余 87 个未评测。多数候选仍被历次「定价冲突/同名混淆」清单排除。shizai-agent 此前因与字节开源 Agent TARS / UI-TARS 同名混淆被标灰，但本次确认其为真实、可验证、公开资料极丰富的企业级计算机操作智能体（厂商「实在智能 Intelligence Indeed」，2018 年成立、杭州余杭、C 轮约 2 亿元），且项目长期记忆已将其列为「2026-09-21 本周推荐 4.5 分」，遂锁定，并在文中显式做了同名辨析。
- 调研来源：实在智能官网（产品页 / 客户端 updateLog / OSWorld 登顶新闻 / 任务拆解准确率技术文 / 影刀对比文）、余杭发布（2026-08-06）、网易（2026-07）、RECATOOLS（2026-09-15）、CSDN《2026 企业级智能体自动化平台排行榜》、hqwc.cn 实测，共 8+ 独立来源。
- 关键可验证事实：最新版 v7.3.7（2026-09-03）；OSWorld 双冠 90.2%（2026-07-27，全球首个破 90% 的 Computer-Use Agent，领先第二 6.6 分，系统底层操作 24 任务 100% 满分）；任务拆解准确率 84.16%（GPT-4 同场景 74.26%）、动作映射 86.87%、综合 87.24%（DeepSeek-R1 84.72%），测试覆盖 1000+ 企业软件 / 10000+ 场景；CMMI-5、信通院可信 AI 智能体平台最高 5 级（2025-09）、TARS 完成国家网信办模型+算法双备案；全栈信创（麒麟/统信/鸿蒙 + 鲲鹏/飞腾 + 达梦/金仓）；社区版免费（注册赠 5000 资源点），企业版 SaaS 约 3-10 万/年、私有化约 8-20 万/年（按并发/部署销售定制）；华电财务共享（92 业务类型、初审替代率 66%、年处理 25 万+ 单据）等标杆案例。
- 综合评分：4.5（与 tools.ts 标注一致）；差异化 = OSWorld 双冠 + TARS/ISSUT/RPA 三位一体 + 全栈信创私有化，短板 = 定价不透明 + 独立第三方评测薄（G2/Capterra 无条目）+ 同名混淆风险 + 企业级上手门槛。
- 产出：`content/tool-reviews/shizai-agent.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览 / 价格方案 / 竞品对比；YAML 经 PyYAML 校验通过，frontmatter 无中文双引号；alternatives: kimi-work / autoclaw / qoderwork / krowork 均为 tools.ts 真实存在且已评测的 id）。
- 提交：`git commit` 57a8960 成功，`git push` 成功（1a4dd1d..57a8960 main -> main）。
- 备注：剩余未评测约 86 个（多为小众条目，多数有定价/混淆硬伤）。⚠️ 已知 Vercel 部署自 2026-09-04 起冻结，本次 push 已上 GitHub 但线上站不会自动重部署，需赵生手动 Redeploy 后文章才上线。

## 2026-09-25 执行记录

**选定工具**：Kimi（`kimi`，月之暗面 / Moonshot AI 出品，2023-10 上线的国产长文本对话助手）
- 决策背景：原优先级清单（首页6大 + 各批次）早已全部完成；续做长尾小众条目时，多数候选仍被历次「定价冲突/同名混淆」清单排除。本日从严筛 `lib/tools.ts` 剩余未评测条目，锁定 **kimi**：真实、可验证、公开资料极丰富、多源一致无冲突，且站内已有 kimi-work / kimi-code-desktop 评测可强关联交叉引流，契合 ZLinke「国产 AI 助手」主线与中文用户刚需。
- 调研来源：Kimi 官方博客/定价页（kimi.com/blog/kimi-k3、platform.kimi.com/docs/pricing/chat）、新华网（2026-07-17 K3 发布）、今日头条（2026-09-19 新套餐报道）、搜狐（2026-07-21 暂停订阅）、36氪 AI 测评（2026-09-08 真实体验）、夜雨聆风实测、奇连 AI 国产横评、ChinaBiz Insider（ARR/估值）、百度百科（公司背景）、Fello AI（API 费率参照），共 10+ 独立来源。
- 关键可验证事实：K3 于 2026-07-16 发布，2.8万亿参数（全球最大开源模型），原生视觉 + 100万 token 上下文，马斯克评「Impressive」；K2.6 为 1T MoE/32B 激活、256K 上下文。会员四档（2026-09-19 重新上线）：Go ¥39/月（¥468/年）、Plus ¥79/月（¥948/年）、Pro ¥159/月（¥1908/年）、Max ¥559/月（¥6708/年）+ 免费基础档；所有会员功能共用积分池，Chat 入口 K2.6 免费。API（官方定价页）：K3 输入¥20/百万(缓存命中¥2)、输出¥100/百万；K2.6 输入¥6.50(命中¥1.10)、输出¥27/百万。商业：2026-04 ARR 超2亿美元、2026-05 完成20亿美元D轮估值超200亿美元；但 2026-04 曾发生用户简历串号隐私泄露事件。用户反馈一致：长文本封神、免费档友好、三端同步顺；短板为逻辑/创意写作弱、无绘图、高峰期排队、扫描PDF读不懂、复杂数学易错。
- 综合评分：4.5（与 tools.ts 已标 rating 一致）；差异化=200万字超长上下文 + K3 全球最大开源模型 + 免费档长文本 + 联网带引用，短板=偏科(逻辑/创意/绘图弱) + 高峰排队 + 隐私信任硬伤 + 算力紧致致会员供给波动。
- 产出：`content/tool-reviews/kimi.md`（约 2200 中文字，含 3 个 HTML 表：核心数据一览/价格方案含API表/竞品对比；YAML 经 PyYAML 校验通过，frontmatter 无中文双引号；alternatives: doubao/deepseek/chatgpt/claude 均为 tools.ts 真实存在且已评测的 id）。
- 附带修正：同步将 `lib/tools.ts` 中 kimi 的 price 字段由过时不准确的「免费」改为真实会员口径「免费 / 会员 Go ¥39、Plus ¥79、Pro ¥159、Max ¥559 每月（年付折算）」，使首页工具卡与评测一致。
- 提交：`git commit` 87bcfd7 成功，`git push` 成功（ae83bf2..87bcfd7 main -> main）。
- 备注：本日完成 1 篇（kimi）。⚠️ 已知 Vercel 部署自 2026-09-04 起冻结（见项目长期记忆），本次 push 已上 GitHub 但线上站不会自动重部署，需赵生手动 Redeploy 后文章才上线。剩余未评测约 122 个（多为小众条目，多数有定价/混淆硬伤）。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆、且有硬证据者，否则宁缺毋滥。

## 2026-09-27 执行记录

**选定工具**：Grammarly（`grammarly`，Grammarly Inc. / 2025-10 重组为 Superhuman 品牌）
- 决策背景：首页6大 + 第一/二/三批及历次长尾续做均已覆盖；本日从严筛 `lib/tools.ts` 剩余未评测条目。原显式优先级清单中仅剩 pika/coze/grammarly/xiezuocat/replit 仍为 .draft（未发布）。最终锁定 **grammarly**：真实、可验证、公开资料极丰富、多源一致无冲突，契合 ZLinke「AI写作工具」主线与英文写作刚需受众。
- 关键更新（相对站内 2026-07-02 旧 draft，已用 2026-09 新数据重写）：母公司 2025-10 重组为 Superhuman 并 2026-06 收购 GPTZero；Premium 更名 Pro，Pro AI 提示词由 1,000/月更正为 2,000/月；新增 Humanizer / AI Detector 代理；新增 2026 Expert Review 作者身份争议（Wired/The Verge）。
- 调研来源：Grammarly 官方定价页、TechCrunch（Superhuman 重组+GPTZero 收购）、Wired/The Verge（Expert Review 争议）、AiToolLand 盲测、Guideflow 实测、ToolSura 流量与隐私核查、AISO Tools/AI ToolSpot 评测，共 10+ 独立来源。
- 关键可验证事实：40M+ 日活、50,000+ 组织、2,000 亿词/天；G2 4.7/5、Chrome 扩展 4.5/5（1,000万+ 用户）；Free $0（100 AI 提示/月）/ Pro $12·成员·月（年付 $144、$30 月付，2,000 提示/月）/ Enterprise 定制（无限成员+保密模式+DLP）；语法纠错 AiToolLand 盲测 9.4/10 品类最高；旧 Business 档已并入 Enterprise。
- 综合评分：4.5（与 tools.ts 标注一致）；差异化=语法深度+全平台覆盖+上下文感知 AI 写作，短板=仅英语+月付陷阱+无离线+2026 作者身份争议+创意写作偏保守。
- 产出：`content/tool-reviews/grammarly.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 经 PyYAML 校验通过，frontmatter 仅含 ASCII 直引号、无中文弯引号；alternatives 改用站内真实 slug：chatgpt/claude/xiezuocat/deepseek，避免引用库外 id）。
- 附带修正：同步将 `lib/tools.ts` 中 grammarly 的 price 由过时的「免费 / Premium $12/月」改为「免费 / Pro $12/月（年付）或 $30/月（月付）」，使首页工具卡与评测一致。
- 提交：`git commit` 189a257 成功，`git push` 成功（ad761ef..189a257 main -> main）。
- 备注：本日完成 1 篇（grammarly）。⚠️ 已知 Vercel 部署自 2026-09-04 起冻结（见项目长期记忆），本次 push 已上 GitHub 但线上站不会自动重部署，需赵生手动 Redeploy 后文章才上线。剩余未评测约 122 个（多为小众条目，多数有定价/混淆硬伤）。后续若继续，仍应优先挑多源一致、无定价冲突、无产品混淆、且有硬证据者（如 pika/coze/xiezuocat/replit 等 .draft 转化，或 astudio/connectmachine 等），否则宁缺毋滥。

## 2026-09-28 执行：Pika 深度评测
- 选定工具：pika。首页6大主打已全部覆盖；第一批优先级中仅 pika 仍仅 .draft，故今日补齐为正式 pika.md。
- 重大数据校正：官方定价页已改版（Free / Starter / Creator / Fancy）。旧 draft 的 Basic/Standard/Pro 命名、700/2300/6000 积分、Starter 含商业授权等均失效。采用 2026-09-28 抓取的真实数据：Starter $10/月(年付$8)=900积分、去水印但无商业授权；Creator $35/月(年付$28)=3150积分、含商业授权；Fancy $95/月=8550积分。
- 2026 新变化：Pika 已进化为多模型聚合平台（含 Google Nano Banana 2、OpenAI GPT Image 2.5、Kling、Wan 3.0、Seedance、Grok 等）。
- 评级 4.2/5（速度/特效/易用高，客服与一致性拖累）；Trustpilot 约1.6/5（86%一星，2026年4月；当前页约84%一星）已核实。
- 已 git add/commit/push（main, d6fc605）。pika.md.draft 按「AI不得擅自删除文件」规则保留，未删除，待用户处理。
- 剩余未发布优先级项：coze、xiezuocat、replit、mita-ai（均仅 .draft）。

## 2026-09-29 执行记录

**选定工具**：扣子 Coze（`coze`）
- 决策背景：首页6大 + 第一/二/三批及历次长尾续做均已覆盖；第二批优先级中仅 coze / xiezuocat / replit / mita-ai 仍仅 `.draft`（未发布）。本日锁定 **coze**：字节旗下、国内最活跃零代码Agent平台，公开资料极丰富、多源一致、契合 ZLinke「AI工作台/低代码智能体」主线。
- 调研来源：扣子官方订阅套餐页（docs.coze.cn，2026-09 核实）、coze.cn 开放文档、AITOP100（2026-06-01 3.0 全量上线报道）、ai345.info（2026-09 价格核对）、36氪 AI测评、ToolChase（4.3/5）、AIToolsAtlas（5.5/10）、navcn/jiangren/devpress（国际版 coze.com 定价）、顶级程序员微信实测（2026-08-22 桌面版）共 10+ 独立来源。
- 关键可验证事实：Coze 3.0 于 2026-06-01 全量上线；官方称超 1 亿个 Agent 在扣子运行（2026-09）；桌面端 2026-08 上线；开源组件 Coze Studio（Apache 2.0，可自托管）、Coze Loop。国内版定价（官方，2026-09）：免费（0积分）/ 进阶 ¥39.9 / 高阶 ¥99 / 旗舰 ¥199 / 尊享 ¥999 每月（积分 3万/9.9万/19.9万/99.9万）+ 团队 ¥198·¥398·¥1998起、企业 ¥980·¥8980起；国际版 coze.com Credits 制 Free $0（约10/天）/ Premium $9（100/天）/ Premium Plus $39（1000/天），两版数据隔离。核心能力：项目空间（多人多Agent、@派活、共享上下文）、coze-bridge 一键接入 Claude Code/Codex CLI/OpenClaw 本地Agent、三端协同、云Agent（云电脑/云手机）、六大行业技能包、编程/视频项目（Seedance 2.5、剪映工程导出）。真实短板（实测反馈一致）：免费版零积分、闭源SaaS限制、字节数据主权顾虑、多Agent长链路易中断。
- 综合评分：4.4（与 tools.ts 标注一致）；差异化=最低门槛+强中文生态+多Agent协作+本地Agent兼顾隐私，短板=免费版几乎不可用+闭源限制+数据主权+长链路不稳。
- 产出：`content/tool-reviews/coze.md`（约 2000 中文字，含 3 个 HTML 表：核心数据一览/价格方案/竞品对比；YAML 经 PyYAML 校验通过，frontmatter 无中文双引号；alternatives 改用站内真实 slug：chatgpt/claude-cowork/openclaw/manus，原 draft 引用的 dify/langflow 经核验不在 tools.ts 库内，已剔除）。
- 附带修正：同步将 `lib/tools.ts` 中 coze 的 price 字段由过时模糊的「免费」改为真实会员口径「免费 / 进阶版 ¥39.9·月 / 高阶版 ¥99·月 / 旗舰版 ¥199·月 / 尊享版 ¥999·月」，使首页工具卡与评测一致。
- 提交：`git commit` ebf186f 成功，`git push` 成功（796dd71..ebf186f main -> main）。
- 备注：本日完成 1 篇（coze）。⚠️ 已知 Vercel 部署自 2026-09-04 起冻结，本次 push 已上 GitHub 但线上站不会自动重部署，需赵生手动 Redeploy 后文章才上线。剩余未发布优先级项：xiezuocat、replit、mita-ai（均仅 .draft）。后续若继续，优先转化这三项，或从严筛剩余 120+ 长尾条目中选多源一致、无定价冲突、无产品混淆者，否则宁缺毋滥。

## 2026-09-30 执行记录

**选定工具**：秘塔写作猫（`xiezuocat`）
- 决策背景：原优先级清单中首页6大 + 第一/二/三批已完成；第二批仅剩 xiezuocat、replit、mita-ai（.draft）未发布。本日按优先级锁定 **xiezuocat**：秘塔科技出品、国产老牌中文写作辅助、公开资料极丰富、多源一致、零幻觉红线可控。
- 调研来源：秘塔官方 xiezuocat.com、百度百科（秘塔科技/写作猫词条）、NavXD 评测、今日头条/搜狐/网易第三方实测、sanwenge/yeyulingfeng/gongju.cn 价格核对、tahou.com（笔灵AI vs 写作猫横向对比）、chengrang/aitoolbox（火山写作）、企查查/亿欧（秘塔融资）等 12+ 独立来源。
- 关键可验证事实：开发商上海秘塔网络科技（2018-04-08 成立，创始人闵可锐前猎豹首席科学家）；2024-08 超 1 亿元 A 轮（蚂蚁集团参投）；自研 MetaLLM 于 2023-08 通过算法备案（号 310115866995701230019）；产品早期 2022-11、AI 原生 2023-08；写作平台 5.0 于 2026-03-15 发布、Android 1.0.30 / iOS 1.0.26；2025-05 入选苹果 App Store 生产力推荐。核心能力：中文校对（第一梯队）、多风格改写、AI 写作/大纲/续写、中英翻译、智能降重、智能配图、多人协作、Word/WPS+浏览器插件+小程序+桌面多端。价格口径差异已透明标注：第三方 2026 评测一致为 免费/基础¥24/高级¥48，tools.ts 标 Pro ¥59/月，另有小程序 29元月/199元年、39元月/299元年等渠道口径；官网当时系统升级未抓实时价。短板：创意生成弱于通用大模型、单篇≤6000字长文受限、付费档位命名混乱无年付优惠。
- 综合评分：4.2（介于 tools.ts 4.1 与 NavXD 4.5 之间，依据：校对质量4.6/易用4.7/多端全，但创意与长文弱、价格不透明）。
- 产出：`content/tool-reviews/xiezuocat.md`（约 2200 中文字，含 4 个 HTML 表：核心数据一览/价格方案/竞品对比/优劣势展开；frontmatter 经 PyYAML 校验通过，无中文双引号；alternatives 用站内真实 slug：doubao/kimi/deepseek/chatgpt）。
- 提交：`git commit` a7f54fb 成功，`git push` 成功（ccc00af..a7f54fb main -> main）。
- 备注：本日完成 1 篇（xiezuocat）。Vercel 部署冻结已于 2026-09-24 经 commit 1a4dd1d 修复（裸 ISO 日期 Date 对象导致 prerender 失败的根因已治本 + 治标），故本 push 预期可正常触发重部署，文章随之上线。剩余未发布优先级项：replit、mita-ai（.draft）。后续若继续，优先转化这两项。

## 2026-10-01 执行记录

**选定工具**：Replit（replit）
- 决策背景：原优先级清单（首页6大 + 第一/二/三批）均已覆盖；第二批仅剩 replit、mita-ai（.draft）未发布。本日按优先级锁定 replit：真实、可验证、公开资料极丰富、多源一致、契合 ZLinke AI编程开发主线。既有 replit.md.draft（2026-07-05）已过时——错称免费 Starter 计划仍存在（2026-09-11 已移除方案卡）、错把 Agent 4 发布定在 5 月（实际 2026-03），故以 2026-10-01 新数据重写正式 replit.md，旧 draft 按 AI不得擅自删除文件 规则保留未删。
- 调研来源：Replit 官方（blog.replit.com Agent 4 发布页/Whats changed Agent3 to 4、replit.com 定价页与首页、Agent 4 落地页）、usagepricing.com（2026-09-11 移除免费 Starter 时间线）、top50aitools（2026-08 定价核对）、automationatlas（7.8/10 + 4亿D轮/90亿估值/2016成立）、theaiselect（3.9/5）、aitoolsatlas（5.5/10）、webverdictai（Trustpilot 3.1/5、checkpoint 账单实例、SaaStr Lemkin 2025-07 删库事件 AI Incident DB #1152）、costbench（Pro 用户 6-7 月被扣约 9600 美元、auto-refill 无预警）、Reddit，共 12+ 独立来源。
- 关键可验证事实：Replit Inc. 旧金山、2016 成立；Agent 4 于 2026-03 发布（四大支柱 Design Freely/Infinite Canvas、Move Faster/并行 Agent 自动合并冲突 90%、Ship Anything/同项目多产物、Build Together/共享项目+Kanban）；Agent 3 于 2024-09 首发、2025-09 升级真实浏览器自测+200+ 分钟自主运行；2026-03 4亿D轮、90亿估值、约 1.5亿 ARR（2025-09）；定价时间线 2026-02 Pro 上线+Core 降至 20 美元+Teams 退场 -> 2026-08-18 Free Mode 上线+Core 额度收紧 20 美元 -> 2026-09-11 移除免费 Starter 卡；当前 Core 20 美元/月（年付 18）、Pro 100 美元/月（年付 90）、Enterprise 定制；按工作量 checkpoint 计费无默认硬上限，账单冲击为 2026 头号投诉（Trustpilot 3.1/5 近 1500 条负面集中于计费；webverdictai 记录月度 checkpoint 206 美元叠加订阅、用户一周 1000 美元、costbench 记 Pro 用户 6-7 月约 9600 美元）；2025-07 SaaStr 创始人 Lemkin 遭 Agent 删库伪造事件（AI Incident DB #1152），CEO 上线 dev/prod 分离+staging+只读规划模式。
- 综合评分：4.3（与 tools.ts 标注一致）；差异化=零配置全栈闭环+Agent 4 设计画布/并行+内置 PG+一键部署+教育不可替代，短板=按量计费不可预测（头号争议）+平台绑定+生产环境失稳。
- 产出：content/tool-reviews/replit.md（约 2200 中文字，含 4 个 HTML 表：核心数据一览/价格方案/竞品对比/计费时间线说明；frontmatter 经 PyYAML 校验通过，rating=4.3 float，无中文双引号；alternatives 用站内真实 slug：cursor/bolt-new/copilot/windsurf）。
- 附带修正：同步将 lib/tools.ts 中 replit 的 price 由错误模糊的 免费 / Pro 20美元/月 改为真实口径 免费 / Core 20美元/月 / Pro 100美元/月，使首页工具卡与评测一致。
- 提交：git commit f4b374f 成功，git push 成功（7359bcb..f4b374f main -> main）。
- 备注：本日完成 1 篇（replit）。Vercel 部署冻结已于 2026-09-24 修复，本 push 预期可正常触发重部署，文章随之上线。剩余未发布优先级项：mita-ai（.draft，第三批）。后续若继续，优先转化 mita-ai，或从严筛剩余长尾条目中选多源一致、无定价冲突、无产品混淆者，否则宁缺毋滥。

## 2026-10-02 执行记录

**选定工具**：秘塔AI搜索（`mita-ai`，Metaso / 上海秘塔网络科技）
- 决策背景：首页6大 + 第一/二/三批及历次长尾续做均已覆盖；原优先级清单第三批仅剩 `mita-ai` 仍仅 `.draft` 未发布。本日锁定 mita-ai：科大讯飞外的国产AI搜索头部、公开资料极丰富、多源一致、零幻觉红线可控，契合 ZLinke「AI搜索工具」主线。
- 调研来源：秘塔官网/订阅页、百度百科词条、企查查/每经网工商与融资报道、国联证券2026 AI搜索行业报告、AIBase（深度研究公测）、kun.net（API/H3计价）、王尘宇三个月实测、什么值得买社区聚合、UU AI Hub 2026横评、夜雨聆风2026排名，共 12+ 独立来源。
- 关键可验证事实（含对旧 draft 的更正）：创始人闵可锐前猎豹首席科学家、联合创立玻森数据（2015被蚂蚁收购）；2018-04-08成立；自研MetaLLM 2023过备案；2024-03上线、当月721万访问；**2024-08收知网28页侵权告知函已断开知网直连**（旧draft误称仍直连，已更正为万方/维普/PubMed/北大核心）；2025-02接DeepSeek R1、2025-07入选全球百大AI应用、2026-07深度研究公测、2026-08-05接MiniMax H3；手机版2.7.8（2026-09-10更新）；A轮超1亿（蚂蚁领投/光速光合跟投，投后约1.5亿美元）；月访问峰值670万+。
- 价格（多源一致，官方订阅页UI佐证）：免费100次/天 / 会员¥39月（500次+深度推理50次）/ 年付约¥179（¥14.91/月）；搜索API ¥0.03/次；H3视频约¥0.09/秒；iOS内购$29.99年/$5.99月。
- 综合评分：4.5（与 tools.ts 一致）；差异化=免费无广告+中文/学术强+来源可追溯，短板=英文弱+信源质量上限低+知网断开+深度研究慢。
- 产出：`content/tool-reviews/mita-ai.md`（约 2000+ 中文字，含 4 个 HTML 表：核心数据一览/价格方案/竞品对比/优劣势展开；YAML 经 PyYAML 校验通过，frontmatter 无中文双引号；alternatives 用站内真实 slug：perplexity/kimi/deepseek/xiezuocat）。旧 `mita-ai.md.draft` 按「AI不得擅自删除文件」规则保留，未删。
- 附带修正：同步将 `lib/tools.ts` 中 mita-ai 的 price 由过时的 `免费` 改为 `免费 / 会员 ¥39/月（年付 ¥179/年）`，使首页工具卡与评测一致。
- 提交：`git commit` 0bab911 成功，`git push` 成功（2e1de20..0bab911 main -> main）。Vercel 部署冻结已于 2026-09-24 修复，本 push 预期可正常触发重部署，文章随之上线。
- 备注：本日完成 1 篇（mita-ai）。自此，任务原始显式优先级清单（首页6大 + 第一/二/三批全部条目）均已正式发布完毕；后续如需继续，应从 `lib/tools.ts` 剩余 120+ 长尾未评测条目中从严筛选多源一致、无定价冲突、无产品混淆者，否则宁缺毋滥。

---
## 2026-10-03 执行记录
- 选题：首页6大+原优先级工具已全部评完（85篇已评），从 lib/tools.ts 剩余列表选高热度自主Agent「Manus」撰写深度评测。
- 产出：content/tool-reviews/manus.md（约2000字，评分4.2，HTML表格含核心数据/价格/竞品对比，frontmatter无中文双引号）。
- 数据来源：Manus官方帮助中心+定价页、App Store(4.7/3.8万评)、Product Hunt(4.4)、Reddit、aiproductivity.ai、usecarly.com、techreviewer.co、aixq.cc等（均2026-10-03检索）。
- 关键事实：1.6模型族；Free/Pro $20/$40/Pro Max $200/Team $20每席，积分不结转；Meta收购2026-04被叫停、9-01恢复独立运营；8月迁移期部分用户丢数据。
- 提交：commit 964582c「review: Manus深度评测」，已 push 至 main（0bab911..964582c）。
- 剩余未评工具：123个（manus/udio/grok-bot/xunfei-zhiwen 等），下次按热度优先。

## 2026-10-04 执行记录
- 选题：首页6大 + 第一/二/三批 + manus 均已发布（86 篇已评）；按「热度优先」从剩余 123 个未评工具中锁定 **Udio**（AI 音乐生成，Suno 最强竞品，公开资料极丰富、多源一致、零幻觉红线可控）。
- 决策要点：跳过 `grok-bot`——lib 条目描述「xAI+Cursor 持久云电脑同事」与真实 xAI Grok 产品不符、公开可验证性存疑，高幻觉风险，宁缺毋滥。
- 关键可验证事实（多源交叉核对）：Uncharted Labs（前 DeepMind 团队，David Ding/Andrew Sanchez，2023-12 成立，a16z/Redpoint/will.i.am 等投资）；2024-04-10 公开 Beta、v1.5(2024-07)、Allegro(2025-03)、Playground(2025-10)；PH 移动版 2025-05 上线 252 upvotes(#10)。价格（top50aitools/aialleyway/aitrendtool 一致）：Free $0(10积分/天+100/月) / Standard $10($8年付,2400积分) / Pro $30($24年付,6000积分)；补充包 $3/100、$25/1000，订阅积分不结转。
- ⚠️ 最关键的 2026 现状：2025-10 UMG 和解后 Udio **关闭全用户下载**（围墙花园模式），可下载授权版（Starstruck）仅计划 2026 下半年、无确定日期——此点多数旧定价页未更新，评测中已显式标注为最大短板。
- 竞品对比客观结论：音质/Inpainting/实验流派 Udio 胜，下载导出/商用交付/易用性 Suno 胜。
- 综合评分：4.3（与 lib 一致）；差异化=保真度天花板+独门 Inpainting+精细控制，短板=下载锁死+学习陡+生成慢+无 API。
- 产出：`content/tool-reviews/udio.md`（约 2100 中文字，含 4 个 HTML 表：核心数据一览/价格方案/竞品对比/优劣势；YAML 经 PyYAML 校验通过，frontmatter 无中文双引号；alternatives 用站内真实 slug：suno/elevenlabs）。
- 附带修正：同步将 `lib/tools.ts` 中 udio 的 price 由错误模糊的 `免费 / Pro $10/月` 改为真实口径 `免费 / Standard $10/月（年付 $8/月） / Pro $30/月（年付 $24/月）`，并补全 features（Inpainting/Voice-Style-Key 控制），使首页工具卡与评测一致。
- 提交：`git commit` bd710fd 成功，`git push` 成功（fbc4cd8..bd710fd main -> main）。Vercel 部署冻结已于 2026-09-24 修复，本 push 预期可正常触发重部署，文章随之上线。
- 备注：本日完成 1 篇（udio）。剩余未评 122 个（grok-bot/xunfei-zhiwen/udio 已出；下次仍按热度从严筛选多源一致、无产品混淆者）。

## 2026-10-05 执行
- 选定工具：grok-bot（Grok / xAI）。首页6大主打 + 原第1/2/3批均已评测完毕，按「热度优先」从严筛选，Grok 是未评测中热度最高、数据可多源交叉验证者。
- 关键事实（多源交叉：x.ai/news 官方发布说明 2026-09、ai-toolbox.co Grok 指南 2026-09-15、极客范 jikefan.com Grok 4.6 实测、Oracle OCI 文档）：旗舰 Grok 4.6（2026-08-12，500K 上下文，知识截止 2026-02-01；9-21 已宣布 4.7）；价格 Free / SuperGrok Lite $10 / SuperGrok $30($25年付) / Plus $100 / Heavy $300 / Business $30每席；X Premium+ $40 含 SuperGrok；API $2入/$6出每百万 token。基准 GPQA-D 87.7%、AIME2025 94.3%、MATH-500 99.0%。
- 评分：4.2/5（实时性独苗+推理第一梯队+多模态全栈；短板=主档$30贵于$20竞品、内容安全争议、质量稳定性）。
- 产出：`content/tool-reviews/grok-bot.md`（约 1800 中文字，4 个 HTML 表：核心数据一览/价格方案/竞品对比/优劣势；YAML 经 PyYAML 校验通过，rating=float 4.2，4 个 alternatives 均用站内真实 slug；frontmatter 无中文双引号）。
- 提交：`git commit` b9de9e9 成功，`git push` 成功（bd710fd..b9de9e9 main -> main）。注意：上一条备注称 grok-bot「已出」但仓库内实际无该文件（疑似早前计划未落地），本日为其真实首次入库。
- 剩余未评约 121 个（xunfei-zhiwen 等仍在列）；下次建议优先高流量且数据可验证者（如讯飞智文 xunfei-zhiwen、Genspark、Meta Muse）。

## 2026-10-06 执行
- 选定工具：xunfei-zhiwen（讯飞智文）。首页6大+第1/2/3批+manus/udio/grok-bot 均已发布；按上条建议锁定 xunfei-zhiwen（国产AI PPT，公开资料极丰富、多源一致、零幻觉红线可控）。
- 调研来源（2026-10-06 实时检索）：百度百科词条、讯飞智文官网 zhiwen.xfyun.cn、AIHub、AI工具集、量子位《AI PPT,这次是真不用返工了》(2026-05-06)、kixron、alixixi、三文阁、快搜百科、观猹、36氪AI测评、向日葵/AI智能通横评，共 12+ 独立来源。
- 关键可验证事实：科大讯飞（深交所上市，1999，合肥）出品，星火大模型V4.0；2023-11上线、2024-08 2.0、2026-05 Vision Agent(Beta)；11语种（中+10外语）；长文本≤8000字、文档≤10M、支持音视频输入；截至2025-01 数百万个人+150万+企业用户、累计2.35亿页PPT/1.01亿配图、下载率73%；2025-07入选全球百大AI应用；语音输入生成PPT为独有差异化（第三方实测识别约98%）— 全行业独一份。
- 价格（5源一致）：免费(注册+签到积分) / Pro 169元/24个月(≈¥7/月) / Ultra 549元/24个月(≈¥22.9/月，含AI虚拟人演示+声音复刻)。旧 draft 的 ¥99/月 为过时口径，已更正。
- 评分：4.2（与 lib 一致）；差异化=中文母语级+语音输入独门+价格极低+境内合规+写练演全链路；短板=模板审美偏传统/创意少+免费导出受限+配图偶不相关+登录繁琐。
- 产出：`content/tool-reviews/xunfei-zhiwen.md`（约 2100 中文字，4 个 HTML 表：核心数据一览/价格方案/竞品对比/优劣势；YAML 经 PyYAML 校验通过，rating=float 4.2，3 个 alternatives 均用站内真实 slug gamma/chatppt/kimi；frontmatter 无中文双引号）。旧 `xunfei-zhiwen.md.draft` 按「AI不得擅自删除文件」规则保留。
- 附带修正：同步将 `lib/tools.ts` 中 xunfei-zhiwen 的 url 由错误 `zw.xfyun.cn` 改为官方 `zhiwen.xfyun.cn`，price 由过时 `免费 / Pro ¥99/月` 改为真实口径 `免费 / Pro ¥169/24个月 / Ultra ¥549/24个月`，features 补全（语音输入生成/多语种/AI演示官/智能演练），使首页工具卡与评测一致。
- 提交：`git commit` 8a04049 成功（2 files changed, +227），但 `git push` 失败——环境无法连通 github.com（curl 12s 超时，Connection timed out），属网络层故障非代码问题。文章已落盘并本地提交，待网络恢复后重试 push 即可触发 Vercel 重部署上线。
- 备注：本日完成 1 篇（xunfei-zhiwen）。剩余未评约 120 个（如 Genspark、Meta Muse 等）；下次仍按热度优先、从严筛选多源一致无产品混淆者。

## 2026-10-07 执行
- 选题：首页6大+第1/2/3批+manus/udio/grok-bot/xunfei-zhiwen 均已发布（89篇已评）；从 lib/tools.ts 剩余 122 个未评工具中，按「热度优先+中文受众重叠」锁定 **chatppt**（国产AI PPT头部，与刚评完的讯飞智文直接竞品对比，编辑角度强）。仓库内已有 chatppt.md.draft（2026-08-13）但未发布，本次以 2026-10-07 实时检索数据刷新后正式发布 chatppt.md。
- 关键发现（定价冲突，已如实披露）：官方 web 会员为单一 **¥199/年**（官网博客佐证，常配买一送一/优惠券）；但 **iOS App Store 内购畸高：包周¥39 / 包月¥109 / 包年¥999**（第三方工具库 ebingou.cn 记录），且有用户投诉付费后无法使用、退款困难；第三方另记录「免费用户无法下载成品、需付费才能拿PPTX」，与官网免费生成口径冲突。评测中已显式标注，未采信厂商自陈博客的 9.9/10、4.9星、92%推荐率等营销数字。
- 调研来源（2026-10-07 实时检索）：ChatPPT 官网权益页/博客、百度百科词条、雪球（必优科技企业背景）、百度千帆2024实测、CSDN开发者实测、npspro 横评、ebingou.cn 工具库、落曦AI工具 wiki、2048ai 社区榜、ima.qq.com 教师工具指南，共 12+ 来源。
- 关键可验证事实：珠海必优科技（团队源自金山办公智能文档团队，获金山天使轮+百度Pre-A轮）；2023-03公测（早于微软Copilot约12天）；自研 Doc-AI-Agent 已通过算法备案（440402336031401-240015号），2150+ AI指令；40万+模板覆盖20+行业；五端（网页/PC/Office插件/小程序/AI眼镜）；2025-02 免费开源版+DeepSeek、2025-04 MCP Server、2025-10 英特尔AIPC版；厂商自陈注册用户超1500万/102国（2026口径，第三方流量佐证偏低）。
- 评分：4.3（与 lib 一致）；差异化=全流程闭环(写-练-演)+中文适配+多模态导入最全+Web端低价；短板=模板质不齐/AI痕迹+实时协作弱+导出保真一般+iOS高价与免费导出争议+用户量存疑。
- 产出：`content/tool-reviews/chatppt.md`（约 2200 中文字，4 个 HTML 表：核心数据一览/价格方案/竞品对比/优劣势；frontmatter 经脚本校验 0 个中文双引号、ASCII引号配平、YAML 结构完整；4 个 alternatives 均用站内真实 slug gamma/xunfei-zhiwen/canva-ai/kimi）。旧 `chatppt.md.draft` 按「AI不得擅自删除文件」规则保留。
- 附带修正：同步将 `lib/tools.ts` 中 chatppt 的 price 由过时不准确的「免费 / 年费VIP ¥199/年 / 四年SVIP ¥398（4年，买2送2）」改为已核实口径「免费 / 会员 ¥199/年（常有买一送一/优惠券）」，使首页工具卡与评测一致（移除无法在官方现行页核实的四年SVIP数字）。
- 提交：`git commit` 8c0cf2f 成功（2 files changed, +124）。`git push` 首次 attempt 卡死被杀；二次 retry 明确报错 **`fatal: Authentication failed for github.com`** —— 根因为远程 URL 内嵌的 GitHub PAT（`ghp_...LSEW`）已失效/被吊销，非网络或代码问题。重试无意义，需赵生重置个人访问令牌并更新 remote（或本地凭据管理器）后 `git push` 即可上线。文章与首页卡已本地落盘，推送成功后自动触发 Vercel 重部署。
- 备注：本日完成 1 篇（chatppt）。至此已评 90 篇；剩余未评约 121 个（Genspark、Meta Muse、openclaw 等仍在列）；后续继续按热度优先、从严筛选多源一致无产品混淆者（并警惕 chatppt 这类定价多端严重背离的坑）。
