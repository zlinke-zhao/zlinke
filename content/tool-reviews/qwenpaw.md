---
id: qwenpaw
title: "QwenPaw 深度评测：阿里开源的 AI 小爪子，能否做你的常驻数字分身"
date: "2026-11-04"
category: "AI工作台"
rating: 4.3
price: "开源免费（Apache 2.0），仅模型 API 计费；本地模型零成本"
subtitle: "从 CoPaw 到 QwenPaw，AgentScope 团队用自进化记忆加全渠道接入，做一个数据完全归你所有的个人智能体工作台"
url: "https://qwenpaw.agentscope.io"
pros:
  - "完全开源免费（Apache 2.0），本地模型可做到零 API Key、零成本运行"
  - "自进化记忆（ReMe）是同类最严谨的设计：可读可改的 Markdown 知识库，不丢上下文"
  - "全渠道接入最全：钉钉/飞书/微信/QQ/Telegram/Discord/iMessage 一个后端多前端"
  - "安全护栏内建而非补丁：命令拦截加文件访问控制加技能扫描加四级治理"
cons:
  - "迭代太快，2.0 是彻底重写，老教程与旧插件极易失效"
  - "常驻服务意味着真实运维成本：端口、自启、备份、升级都要自己管"
  - "定位个人而非团队：无多租户、SSO、审计，企业落地需另寻方案"
  - "桌面端仍为 beta，默认安装会静默接受匿名遥测，隐私敏感用户需手动关闭"
alternatives:
  - { name: "OpenClaw", slug: "openclaw", reason: "同样开源自托管、跨设备常驻、社区最活跃；但记忆与安全治理不如 QwenPaw 系统化" }
  - { name: "扣子 Coze", slug: "coze", reason: "国内渠道生态最成熟、上手最快；但托管优先，数据与扩展自由度受限" }
  - { name: "Manus", slug: "manus", reason: "云端通用 Agent，复杂任务开箱即用；但不开源、数据在云端、按任务计费" }
  - { name: "DeepSeek Harness", slug: "deepseek-harness", reason: "本地优先编码智能体，零成本跑本地模型；但偏开发场景，渠道与记忆能力弱于 QwenPaw" }
---

## 一句话总结

如果你想要一个**数据完全归自己、能驻在微信/钉钉群里主动干活、还能用本地模型做到零成本**的个人 AI 助手，QwenPaw 目前是开源阵营里完成度最高、记忆设计最严谨的选择；但它不是开箱即用的 SaaS，需要你愿意承担「常驻服务」的运维与学习成本。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th><th>来源</th></tr>
  </thead>
  <tbody>
    <tr><td>开发方</td><td>阿里巴巴通义实验室 AgentScope 团队（agentscope-ai）</td><td>GitHub / 阿里云开发者社区</td></tr>
    <tr><td>前身与更名</td><td>2026-02-24 以 CoPaw 发布；2026-04-12 更名为 QwenPaw（Qwen Personal Agent Workstation）</td><td>官方 README / 多家评测</td></tr>
    <tr><td>开源协议</td><td>Apache 2.0，完全免费，无付费档</td><td>GitHub LICENSE</td></tr>
    <tr><td>GitHub 热度</td><td>约 37,300 Stars / 3,258 Forks / 265 Contributors（2026-11-03 实测）</td><td>gitnova.dev 实时统计</td></tr>
    <tr><td>最新版本</td><td>v2.3.0-beta.2（2026-11-02），累计 127 个 release</td><td>GitHub Releases</td></tr>
    <tr><td>关键版本</td><td>v2.0.0（2026-07-10 基于 AgentScope 2.0 彻底重写）；v2.1.0（2026-08-13 加入 Browser-use / Computer-use / Codex·Qoder 集成）</td><td>ra0.cn / 官方日志</td></tr>
    <tr><td>支持平台</td><td>Windows / macOS / Linux；桌面端为 Tauri（beta）；Python 3.11–3.13</td><td>GitHub / vibeleaderboard</td></tr>
    <tr><td>接入渠道</td><td>钉钉、飞书、微信、QQ、Telegram、Discord、iMessage、腾讯元宝、Web 控制台、桌面端</td><td>官方文档 / zhichai 评测</td></tr>
  </tbody>
</table>

> 注：星标数随抓取时间变动较大——6 月约 1.74 万、8 月约 3.4 万、11 月初约 3.73 万，9 个月内增长迅猛，但「年轻冲得快」也意味着稳定性仍需时间检验。

## 核心功能评测

**1. 自进化记忆（ReMe）—— 4.6/5**
QwenPaw 最被第三方一致认可的是它的记忆架构。基于 AgentScope + AgentScope Runtime + ReMe 模块，agent 会把长期经验与用户偏好沉淀为**可读、可改的 Markdown 知识库**（agent.md 定义人格、soul.md 定义行为准则、profile.md 定义用户画像），而不是把上下文压缩进一个不透明的向量库。重启后身份与记忆不丢失，还能通过 Heartbeat 主动自检、按规律（如每天早 8 点推新闻）主动服务。UgliAI 的评价是「这个品类里最严肃的记忆设计，没有任何东西被悄悄总结掉」。

**2. 全渠道接入 —— 4.5/5**
一个后端、多个前端：钉钉、飞书、微信、QQ、Telegram、Discord、iMessage、腾讯元宝都能接进来，你在哪个 App 里 @它 都能响应。对国内用户尤其友好——钉钉排在第一位，直接嵌入企业沟通流；微信/QQ 也能用。这是它相对 OpenClaw（主要靠 Discord/Telegram）最大的本地化优势。

**3. 安全护栏 —— 4.4/5**
安全是设计进 DNA 而非事后打补丁：四层防护 = 工具保护（语义级拦截 `rm -rf /`、fork 炸弹、反弹 shell）+ 文件访问守卫（屏蔽 `~/.ssh`、系统目录）+ 技能扫描（安装前审计）+ Web 鉴权；再叠加 allow/deny/ask/sandbox 四级治理。clawpk.net 给「安全可靠」打了 8.0/10，在开源个人助手里属于上游。

**4. Skills 与多 Agent 协作 —— 4.2/5**
技能是热加载的：把带 skill.md 的文件夹丢进目录即可生效，无需审核、无需应用商店。内置定时任务、PDF/Office 处理、资讯摘要、联网搜索。v1.1.10 起支持 `spawn_subagent`，主 Agent 可动态派生带独立上下文和权限的子 Agent，把复杂任务拆成规划/执行/验证/整合四段分工——类似 AutoGen 的 Group Chat，但包装成了给普通人用的形态。短板是技能市场目前还是「GitHub + 手动下载」，尚未真正建成。

**5. 部署与本地模型 —— 4.3/5**
六条部署路径：pip、一键脚本（macOS/Linux/Windows CMD+PowerShell）、Docker、阿里云 ECS、魔搭 Space、桌面端（beta）。模型侧默认走通义千问，但支持 OpenAI、Gemini、DeepSeek、本地后端（llama.cpp / Ollama / LM Studio），还有专为 Agent 微调的 QwenPaw-Flash 2B/4B/9B 小模型，配合本地运行时可做到**完全离线、零 API Key**。这对隐私敏感用户是硬核卖点。

## 价格方案

<table>
  <thead>
    <tr><th>版本</th><th>价格</th><th>包含内容</th><th>适合人群</th></tr>
  </thead>
  <tbody>
    <tr><td>软件本体</td><td>免费（Apache 2.0）</td><td>全部功能，含 Skills / 多 Agent / 渠道接入 / 安全治理</td><td>所有人</td></tr>
    <tr><td>本地模型</td><td>¥0</td><td>Ollama / llama.cpp / LM Studio / QwenPaw-Flash 2B-9B，离线运行无 Key</td><td>隐私敏感 / 零成本党</td></tr>
    <tr><td>云端模型 API</td><td>按用量</td><td>DashScope·通义 / OpenAI / Anthropic / Gemini / DeepSeek / Kimi / OpenRouter，自备 Key</td><td>追求能力的进阶用户</td></tr>
    <tr><td>阿里云百炼补贴</td><td>新客 1 亿 Token 免费（资格审核）；首月模型额度 ¥20→¥10 或 ¥50→¥25；标准版 ¥150/月含 25,000 额度</td><td>绑定阿里云百炼 Token Plan / Coding Plan / 按量付费</td><td>国内合规 / 企业轻量</td></tr>
    <tr><td>AgentScope Platform</td><td>公测期免费托管</td><td>绑定 GitHub 一键部署云端实例，关机任务照跑，可接微信/QQ</td><td>不想运维的新手</td></tr>
  </tbody>
</table>

> 结论：对绝大多数个人用户，QwenPaw 的「价格」就是电费+模型费。本地模型方案可做到零成本，这是它对比 Coze、Manus 等按量/订阅收费产品的根本差异。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>QwenPaw</th><th>OpenClaw</th><th>扣子 Coze</th><th>Manus</th></tr>
  </thead>
  <tbody>
    <tr><td>开源/协议</td><td>Apache 2.0 开源</td><td>MIT 开源</td><td>闭源托管</td><td>闭源云端</td></tr>
    <tr><td>部署</td><td>本地 + 云（6 种方式）</td><td>本地自部署为主</td><td>纯云端</td><td>纯云端</td></tr>
    <tr><td>记忆设计</td><td>ReMe 自进化、可读 Markdown</td><td>会话+记忆但系统性较弱</td><td>平台托管知识库</td><td>任务内上下文</td></tr>
    <tr><td>国内渠道</td><td>钉钉/飞书/微信/QQ 原生</td><td>飞书/钉钉/QQ 支持</td><td>微信/抖音/飞书齐全</td><td>弱（网页为主）</td></tr>
    <tr><td>数据安全</td><td>本地优先、可全离线</td><td>本地优先</td><td>数据在平台</td><td>数据在平台</td></tr>
    <tr><td>团队能力</td><td>偏个人，无 SSO/审计</td><td>偏个人</td><td>有团队/企业版</td><td>有企业方案</td></tr>
    <tr><td>成本</td><td>免费+模型费（本地零）</td><td>免费+Token 自付</td><td>订阅/按量</td><td>按任务计费</td></tr>
  </tbody>
</table>

## 优势与短板

**优势展开：**
开源免费是地基，但真正让它脱颖而出的是三点——**记忆最严谨**（不丢上下文、可读可改）、**渠道最本地化**（钉钉/微信原生接入，国内办公党直接受益）、**安全内建**（命令拦截/文件守卫/技能扫描/四级治理一套组合拳，比「裸跑 Agent」稳得多）。再叠加 9 个月 3.7 万星的社区势能和阿里通义背书，长期生命力有保障。

**短板坦诚说：**
第一，**迭代太快是双刃剑**——v2.0 是彻底重写，老教程和旧插件极易失效，跟着学要确认版本号；第二，**常驻服务有真实运维成本**，端口、自启、备份、升级都得自己管，不是「装完就忘」；第三，**定位个人而非团队**，没有多租户/SSO/审计，企业想规模化用得另找 Dify 之类；第四，**桌面端仍 beta**，且 `qwenpaw init --defaults` 会默认接受匿名遥测，隐私敏感用户务必交互式安装并手动关闭。

## 最终推荐

**推荐这些人用：**
- 隐私敏感型用户：不想把对话数据交给 ChatGPT/Coze 等平台，想本地优先、数据不出设备；
- 多平台办公党：钉钉/飞书/微信来回切，想要一个统一入口的常驻助手；
- 爱折腾的开发者/极客：想用 Skills 自定义能力、用本地模型跑零成本 Agent；
- 小团队/个人创业者：需要内部 AI 工具但不想买 SaaS。

**不推荐这些人：**
- 纯小白、想要「注册即用、零运维」的：QwenPaw 需要你装环境、管服务，门槛高于 Coze；
- 企业级多租户/合规需求方：它无 SSO、审计、多租户，规模化管理应选 Dify 或商业方案；
- 追求「开箱即用生产力」而非「可塑性」的用户：Manus 这类云端通用 Agent 上手更快。

**上手建议：** 先用 `pip install qwenpaw` + `qwenpaw init`（交互式、关掉遥测）+ `qwenpaw app`，接一个频道（建议 Telegram 或控制台）和一个本地模型（Ollama + QwenPaw-Flash）跑通闭环，再逐步加 Skills 和微信/钉钉。别一上来就接高权限账号和生产系统——它目前有 8,000+ 开放 Issue/PR，更适合小范围试用。

---

**评测声明**：本文基于作者公开信息调研与多源交叉验证撰写。核心事实来自 QwenPaw 官方站（qwenpaw.agentscope.io）、阿里云帮助中心、GitHub 仓库（agentscope-ai/QwenPaw）及 rywalker、UgliAI、zhichai、gitnova、clawpk 等第三方评测，发布时间跨 2026-02 至 2026-11。所有数据均可在上述来源回溯。本文不含付费推广。
