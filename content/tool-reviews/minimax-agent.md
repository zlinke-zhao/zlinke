---
id: minimax-agent
title: "MiniMax Agent 2.0 深度评测：把本地文件和行业 SOP 打包成专家分身，交付闭环是真能打的"
date: "2026-08-19"
category: "AI工作台"
rating: 4.1
price: "免费版 1000 积分（含每日 200 积分刷新）；基础版 ¥39/月（5000 积分/月，约 30-45 个专业模式任务）；专业版 ¥119/月（16000 积分/月，约 120-150 个任务）；Ultra 约 ¥219/月（40000 积分）；另有入门包¥59/增强包¥109/超级包¥149 积分包；Token Plan（平台 API+多模态）Plus ¥49/月、Max ¥119/月、Ultra ¥469/月 为独立订阅"
subtitle: "MiniMax 把 Agent 2.0 定义为 AI 原生工作台：桌面端负责动手（读写本地文件+网页自动化），Expert Agents 负责内行（把私有知识+SOP 固化成专家分身）；Supabase 后端能力让它能真建网站而非网页，但积分消耗和长任务稳定性是硬伤"
url: "https://agent.minimaxi.com"
pros:
  - "桌面端真正读写本地文件：选定工作目录后 Agent 直接批量分析、处理该目录下文件，把单次投喂升级为持续上下文边界，这是工作台而非聊天框的核心差异"
  - "Expert Agents 专家分身是独门武器：把私有知识库和行业 SOP 封装进专家，官方称通用多智能体 70 分可拉升到 95-100 分，且支持 skill 共享与私域，上手门槛低"
  - "全栈交付能力稀缺：内置 Supabase 后端，能生成带鉴权、数据库、Serverless 的真实可部署应用，而不只是静态网页，通用 Agent 里独一份"
  - "模型底座持续进化且多模态：M2.7（2026-03）SWE-Bench Verified 80.2%、较 M2.5 胜率 88%；M3（2026-06）支持 100 万 token 上下文与原生多模态输入"
  - "国内原生可用、迭代快：无需特殊网络，Win/Mac 双端；多位用户反馈产品经理迭代快、小 bug 用着用着就没了"
cons:
  - "积分消耗不可预测且偏贵：有用户实测搭建一个完整网站烧掉 5600+ 积分（免费额度+19 美元套餐），官方也明确声明消费量无法预测或保证"
  - "免费额度偏少：1000 积分（含每日 200 刷新）往往一个完整任务都跑不完，想认真用必须付费"
  - "长任务可靠性有坑：待机时间长时任务会自己崩掉需从头来；多轮修改/优化类任务第二轮起效果明显下降，持续修不好 bug"
  - "数据合规存疑：MiniMax 为中国公司，数据处理可能存于境内并受中国法律保护，截至评测时无公开可查的 SOC 2 / ISO 27001 认证，敏感行业慎用"
  - "基准成绩落后于头部：AgentIF-OneDay（2025-12）评测 MiniMax 0.562，低于 Manus 0.645、Genspark 0.635、ChatGPT-Agent 0.626，且单任务时延最高（1416 秒）"
alternatives:
  - { name: "Manus", slug: "manus", reason: "通用 Agent 基准领头羊（AgentIF-OneDay 0.645），浏览器顺序任务更顺滑、本地文件系统访问更直接；但需特殊网络、国内用户门槛高，且同样积分不可预测" }
  - { name: "Kimi Work", slug: "kimi-work", reason: "国产桌面 Agent，WebBridge 真操控本地浏览器+长文本基因+最多 300 子 Agent 集群；缺 Expert Agents 式 SOP 封装，复杂多步稳定性待打磨" }
  - { name: "QwenWork（千问办公）", slug: "qwenwork", reason: "阿里系办公智能体，钉钉侧边栏直接调用、Office 产物生成强；偏办公交付、全栈后端能力弱于 MiniMax，且积分消耗同样不透明" }
  - { name: "StepClaw（阶跃龙虾）", slug: "stepclaw", reason: "国产桌面 Agent 里零门槛与技能生态最厚（水产市场 5000+ 技能），五端 IM 远程指挥；编程能力是公认短板，与 MiniMax 走不同路线" }
---

## 一句话总结

MiniMax Agent 2.0 是 MiniMax 把「会聊天的 AI」升级成「能干活的工作台」的旗舰产品——**桌面端负责动手（读写本地文件、跑网页自动化），Expert Agents 负责内行（把你的行业 SOP 固化成专家分身）**。**适合想让 AI 真正接管本地文件处理、资料调研、建站建应用的国内办公人群和独立开发者；但如果你对账单极度敏感、或要做长链路无人值守任务，它的积分消耗不可预测和长任务稳定性问题会让你踩坑。**

## 核心数据一览

<table>
  <tr><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px; width:150px">项目</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">信息</th></tr>
  <tr><td style="font-weight:bold">开发商</td><td>MiniMax（稀宇科技，上海，2021 年成立，阿里系投资，2026 年 1 月登陆港股）</td></tr>
  <tr><td style="font-weight:bold">产品形态</td><td>云端 Agent + 桌面端（Windows / macOS），2026-01-20 发布 Agent 2.0</td></tr>
  <tr><td style="font-weight:bold">底层模型</td><td>MiniMax M2.x → M2.7（2026-03，SWE-Bench Verified 80.2%，较 M2.5 胜率 88%）→ M3（2026-06，100 万 token 上下文，原生多模态）</td></tr>
  <tr><td style="font-weight:bold">核心能力</td><td>本地文件操作 + 网页自动化 + Expert Agents 专家分身 + MaxClaw 云端助手 + MCP 集成</td></tr>
  <tr><td style="font-weight:bold">定价区间</td><td>免费 1000 积分 / 基础版 ¥39 / 专业版 ¥119 / Ultra 约 ¥219 每月</td></tr>
  <tr><td style="font-weight:bold">竞品基准</td><td>AgentIF-OneDay（2025-12）：MiniMax 0.562，落后 Manus 0.645、Genspark 0.635、ChatGPT-Agent 0.626</td></tr>
  <tr><td style="font-weight:bold">Product Hunt</td><td>M2.7 模型 2026-03-19 登 #2 Product of the Day，约 347-394 赞，3 条评价均 5.00/5</td></tr>
</table>

## 核心功能评测

<table>
  <tr><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px; width:160px">功能</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px; width:70px">评分</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">真实使用体验</th></tr>
  <tr><td style="font-weight:bold">桌面端本地文件操作</td><td>4.5/5</td><td>选定工作目录后 Agent 直接读取、分析、批量处理目录下文件，并启动内置浏览器做网页自动化（不占你主浏览器）。多源实测：让它「整理桌面」数十秒分好图片/文档/视频/压缩包，遇文件名含空格移动失败会自主检测修复继续；处理 Excel 时用 Python 读写、串并联混合检索控并发再写回原表，数字几乎无出入（GPT 复核）。这是它从聊天框升级为工作台的关键。</td></tr>
  <tr><td style="font-weight:bold">Expert Agents 专家分身</td><td>4.5/5</td><td>把私有知识库+行业 SOP 封装成可复用的专家。官方称 1.0 时代的通用多专家只到 70 分，Expert Agents 可拉到 95-100 分。实测上传《经济学人风格指南》约 10 分钟建好专家模型，产出趋近目标风格（仍有轻微模板感）。用户可把三年积累的行业 know-how 打包成 zip 拖进去几秒配置好，skill 支持共享与私域，上手门槛低，是独门差异点。</td></tr>
  <tr><td style="font-weight:bold">全栈交付（Supabase 后端）</td><td>4.3/5</td><td>能生成带鉴权、数据库、Serverless 函数并可部署上线的真实应用，而非静态网页。多位用户反馈「需求理解准、生成网站审美好、改 bug/改页面顺畅、具备后端开发能力，真正解决了可用性问题」。Supabase 后端能力在通用 Agent 里独一份，但也有技术小白卡在获取 API Key 的「次元壁」。</td></tr>
  <tr><td style="font-weight:bold">多模态与 MCP 扩展</td><td>4.0/5</td><td>原生支持文本/图像/语音/视频理解与生成（底层 MiniMax Hub、Hailuo、Audio 全家桶）。MCP 可接 GitHub、Figma、Slack、Google Maps 及自定义端点；MaxClaw 云端助手基于 OpenClaw 架构，支持并发任务、单任务上限 200 万 token。短板是英文文档与社区生态仍弱于西方成熟平台。</td></tr>
</table>

## 价格方案

MiniMax Agent 的计费以「积分」为核心单位，且官方明确声明**积分消耗不可预测**——一个复杂任务（全栈应用、多源深度报告）可能远超单任务平均值。以下为 Agent 产品本身定价（与平台 Token Plan 相互独立）：

<table>
  <tr><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">套餐</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">价格</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">积分/月</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">约合任务数</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">核心权益</th></tr>
  <tr><td style="font-weight:bold">免费版</td><td>¥0</td><td>1000（含每日 200 刷新）</td><td>约 3-5 轻任务</td><td>基础对话 + 轻量 Agent，无专业权益</td></tr>
  <tr><td style="font-weight:bold">基础版</td><td>¥39/月（原价 ¥133）</td><td>5000</td><td>约 30-45</td><td>高峰优先、去水印、自定义域名、MaxClaw 部署</td></tr>
  <tr><td style="font-weight:bold">专业版</td><td>¥119/月（原价 ¥483）</td><td>16000</td><td>约 120-150</td><td>基础版全权益 + 更多并发/部署额度</td></tr>
  <tr><td style="font-weight:bold">Ultra</td><td>约 ¥219/月</td><td>40000</td><td>约 240</td><td>最高优先级、最大额度</td></tr>
  <tr><td style="font-weight:bold">增值包</td><td>¥59 / ¥109 / ¥149</td><td>5000 / 10000 / 15000（1 年有效）</td><td>-</td><td>叠加充值，不与月包清零冲突</td></tr>
  <tr><td style="font-weight:bold">Token Plan<br>（独立）</td><td>Plus ¥49 / Max ¥119 / Ultra ¥469 每月</td><td>按 Agent 数计</td><td>3-4 / 4-5 / 6-7 个 Agent</td><td>平台 API+多模态统一额度，与 Agent 订阅分开</td></tr>
</table>

> 价格口径说明：Agent 产品 RMB 档位（¥39/¥119）来自华泰证券 2026 行业报告与 AI工具集（ai-bot.cn）交叉一致；Ultra ¥219 与 Token Plan 取自 aimultiple 与 MiniMax 开放平台 FAQ。2026 年内该产品的定价与命名历经多次调整，订阅前请以 agent.minimaxi.com 实时页面为准。

## 与竞品对比

<table>
  <tr><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">维度</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">MiniMax Agent 2.0</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">Manus</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">Kimi Work</th><th style="background: #4a90d9; color: #fff; text-align:left; padding:8px">QwenWork</th></tr>
  <tr><td style="font-weight:bold">本地文件操作</td><td>✅ 桌面端直接读写</td><td>⚠️ 主要云端</td><td>✅ WebBridge 浏览器</td><td>✅ 钉钉侧边栏</td></tr>
  <tr><td style="font-weight:bold">专家/SOP 封装</td><td>✅ Expert Agents</td><td>❌</td><td>❌</td><td>❌</td></tr>
  <tr><td style="font-weight:bold">后端/全栈交付</td><td>✅ Supabase 后端</td><td>✅</td><td>⚠️ 弱</td><td>⚠️ 网页为主</td></tr>
  <tr><td style="font-weight:bold">国内可用性</td><td>✅ 原生</td><td>❌ 需特殊网络</td><td>✅</td><td>✅</td></tr>
  <tr><td style="font-weight:bold">免费额度</td><td>1000 积分偏少</td><td>有限</td><td>免费可用</td><td>免费版 2000 积分</td></tr>
  <tr><td style="font-weight:bold">基准成绩</td><td>0.562</td><td>0.645</td><td>未公开</td><td>未公开</td></tr>
</table>

## 优势与短板

**优势（为什么值得一试）**
- **真·工作台而非聊天框**：本地文件持续上下文 + 网页自动化，把「复制粘贴+窗口切换」的低价值劳动交给 Agent，多位用户称其横向对比下是「最满意的通用 Agent」。
- **Expert Agents 把行业 know-how 变成资产**：你花三年积累的规范、对照表、评分标准，打包 zip 拖进去几秒就是一个可复用专家，新人也能快速上手、自己还能批量复用——这是把「人」的能力产品化的稀缺设计。
- **交付闭环最完整**：从调研、PPT、文档到带后端的真实应用一站交付，Supabase 后端让它能「建站」而非「建网页」，对非技术用户尤其友好。
- **模型底座持续进化**：M2.7 代码能力已达 SOTA 区间（SWE-Bench Verified 80.2%），M3 进一步补上百万级上下文与原生多模态。

**短板（别踩的坑）**
- **账单是头号劝退点**：积分消耗不可预测，一个网站实测烧掉 5600+ 积分，免费额度往往一个任务都跑不完。预算敏感者务必先在小任务上探清自己的消耗曲线。
- **长任务稳定性**：待机过久会崩、需重跑；多轮修改类任务第二轮起质量明显下滑。不适合全权委托关键链路。
- **数据合规**：中国公司、数据可能存境内、无公开 SOC2/ISO，医疗/金融/法务等受监管行业勿在未经批准下接入敏感数据。
- **基准落后头部**：在 AgentIF-OneDay 评测中落后于 Manus/Genspark/ChatGPT-Agent，且时延最高（1416 秒/任务），重质不重速。

## 最终推荐

**推荐给谁：**
- 想让 AI 接管本地文件整理、资料调研、批量处理的国内办公人群；
- 有可复用行业 SOP、想把专家经验产品化的团队/个人（Expert Agents 正解）；
- 不会写代码但想真做出带后端应用的独立开发者/小团队（Supabase 后端是真价值）；
- 需要中文原生、不依赖特殊网络环境的通用 Agent 用户。

**不推荐给谁：**
- 对账单极度敏感、希望成本可预测的人（积分不透明，先从小额探路）；
- 要做长链路、无人值守、关键业务全流程托管的企业（稳定性+合规都存疑）；
- 处理医疗/金融/法务等受监管敏感数据的团队（无公开合规认证）；
- 追求最低时延的人（单任务时延在主流 Agent 中偏高）。

**选购建议**：先用免费版 1000 积分跑 2-3 个小任务摸清消耗；若每月专业模式任务在 30 个以内，¥39 基础版够用；高频使用者直接 ¥119 专业版。需要把私有 SOP 固化成专家分身的，重点体验 Expert Agents——这是它和 Manus/Kimi Work 拉开差异的核心。

---

**评测声明**：本文基于 MiniMax 官方文档（agent.minimaxi.com、MiniMax 开放平台 FAQ）、公开基准（AgentIF-OneDay / arxiv 2601.20613、六大 Agent 横评）、Product Hunt 数据及多位用户实测反馈（chatdlm.com、donews、chooseai.net、qq.com 等）整理。站长未对每个任务逐一亲测，文中所有价格、积分、基准数字均标注来源；MiniMax Agent 在 2026 年定价与命名多次调整，具体功能与计费请以官方最新页面为准。本文不含付费推广。
