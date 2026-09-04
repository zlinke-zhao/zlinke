---
id: qwenpaw
title: "QwenPaw 深度评测：阿里把个人智能体做成了一个开源、数据归你、记忆会进化的数字分身"
date: "2026-09-04"
category: "AI工作台"
rating: 4.3
price: "开源免费（Apache 2.0）；本地部署零成本，模型可用本地 Ollama/llama.cpp 免 API Key，云端按 ECS 规格计费"
subtitle: "前身 CoPaw、2026 年 4 月更名，本地优先 + 多端 IM 统一接入 + 知识图谱记忆，它把个人助手的主权还给了用户"
url: "https://qwenpaw.agentscope.io"
pros:
  - "数据真正归你：本地优先架构，对话/记忆/配置默认存本机，可全本地运行数据不出设备，隐私敏感场景无忧"
  - "开源可改：Apache-2.0 协议，GitHub 星标破 1.7 万，源码可读、可自部署、可二开，不是黑箱 SaaS"
  - "多端统一接入：钉钉/飞书/微信/QQ/Discord/Telegram 一个智能体全打通，各渠道共享记忆与技能，告别十个互不连通的聊天机器人"
  - "记忆进化 + 主动服务：短期/长期/反思三层记忆，从交互中沉淀偏好，主动心跳定时推送简报与待办，从被动问答升级为数字员工"
cons:
  - "上手有门槛：本地部署需配置 Python 环境或 Docker，英文文档与社区弱于中文生态，纯小白不易一键开箱"
  - "能力上限取决于模型与 Skills：复杂编码不如专用工具，效果随你接的模型质量与自写技能而定"
  - "多 Agent 协作与云端同步需一定运维经验，团队隔离配置不当易信息混淆"
  - "作为年轻开源项目，企业级 SSO/审计等硬凭证需自行在部署层补齐，开箱即用的合规保障有限"
alternatives:
  - { name: "ASI:One", slug: "asi-one", reason: "若你要的是带持久记忆的个人 AI 且接受云端/Web3 机制，ASI:One 是云侧对照；QwenPaw 胜在数据本地自主" }
  - { name: "豆包工作", slug: "doubao-work", reason: "同属国内大厂 Agent，若你要开箱即用的办公智能体、认飞书生态，豆包工作更省心" }
  - { name: "Skywork 桌面版", slug: "skywork-desktop", reason: "若诉求是 Windows 原生桌面 Agent 处理混格式文件，Skywork 更贴合；QwenPaw 强在多端 IM 与开源" }
  - { name: "Claude", slug: "claude", reason: "若只要成熟、即开即用的通用助手且不关心数据本地化，Claude 更稳更省事" }
---

## 一句话总结
QwenPaw 适合在意数据主权、想自己掌控并可持续扩展个人 AI 的开发者与隐私党，以及需要把钉钉/飞书/微信等多端沟通统一成一个有记忆的智能体的用户；不适合只想装个 App 立刻聊天的纯小白。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>信息</th></tr>
  </thead>
  <tbody>
    <tr><td>产品名</td><td>QwenPaw（原 CoPaw，2026 年 4 月更名）</td></tr>
    <tr><td>出品方</td><td>阿里云 AgentScope 团队</td></tr>
    <tr><td>定位</td><td>千问个人智能体工作台（本地优先、数据自主、记忆进化、多端触达）</td></tr>
    <tr><td>开源协议</td><td>Apache-2.0；GitHub 星标破 1.7 万（第三方口径）</td></tr>
    <tr><td>最新版本</td><td>v2.0.1（2026-07-24，引入 PawApp 小程序平台与用户可编辑 Agent Modes）</td></tr>
    <tr><td>接入渠道</td><td>钉钉、飞书、微信、QQ、Discord、Telegram 等 10+ 主流通讯工具</td></tr>
    <tr><td>部署方式</td><td>本地（pip / Docker / Tauri 桌面 App）/ 阿里云计算巢 / PAI-EAS 云端 / 魔搭</td></tr>
    <tr><td>模型支持</td><td>模型无关，支持通义千问、DeepSeek、Ollama 本地模型等 14+ 提供商</td></tr>
    <tr><td>记忆机制</td><td>ReMe v0.4 持久记忆模块（短期 + 长期 + 反思三层）</td></tr>
    <tr><td>安全</td><td>Tool Guard / File Guard / Skill Scanner / Access Policy 四层防护</td></tr>
    <tr><td>官网</td><td>qwenpaw.agentscope.io（GitHub: agentscope-ai/QwenPaw）</td></tr>
  </tbody>
</table>

## 它到底是什么
QwenPaw 是阿里云 AgentScope 团队 2026 年推出的开源个人 AI 助理，前身叫 CoPaw，2026 年 4 月更名为 QwenPaw（Qwen 取自通义千问，Paw 寓意温暖的「小爪子」）。它的定位不是问答式 ChatBot，而是一个能主动执行任务、持续学习成长的「数字分身」。

五个核心设计原则定义了它和普通 AI 工具的区别：**本地优先、数据自主**（所有交互数据/记忆/配置默认存本地，可全本地运行数据不出设备）；**身份持久化**（用 agent.md / soul.md / profile.md 三个文件定义 AI 人格、行为准则与用户画像，重启不丢身份）；**技能即插件、热加载扩展**（每个技能一个文件夹，加 skill.md 即可扩容）；**多端统一接入**（一个智能体接全部 IM，共享记忆与技能）；**记忆进化、主动服务**（长期记忆 + 反思机制，越用越懂你，主动推送简报与待办）。

## 核心能力拆解
**多端触达与统一管理**：一次部署、全端可用。通讯端无缝集成钉钉、飞书、微信、QQ、Discord、Telegram，任意渠道交互、记忆/技能/任务状态完全同步；设备端支持 Windows/macOS/Linux 本地部署，也可通过阿里云计算巢、PAI-EAS 一键云端部署，浏览器安全代理访问，7×24 在线，手机电脑平板随时调用。

**模块化技能与任务执行**：内置 20+ 基础技能，覆盖办公（文档 Word/Excel/PPT 读写、会议纪要、日程、邮件自动回复）、生活（待办/天气/新闻/购物清单）、创作（文案/润色）、技术（代码生成/脚本执行/服务器监控）。「主动心跳」机制可定时跑周期性任务（每日同步进度、每周周报、每月数据报表），无需手动触发。技能热加载，用户可自写也可共享社区技能。

**记忆进化与多模型协同**：记忆分短期（当前上下文）、长期（事实抽取沉淀偏好与任务历史）、反思（定期复盘优化逻辑）三层。模型层大小模型智能协同——轻量任务用免费开源模型，复杂推理切高性能模型，隐私数据优先本地模型，成本与性能平衡。可同时接通义千问、DeepSeek、Ollama 本地等。

**安全与可拥有**：四层防护（Tool Guard、File Guard、Skill Scanner、Access Policy）各司其职；多 Agent 记忆可隔离（工作/生活/学习独立空间）。因为 Apache-2.0 开源，个人与企业可免费使用、修改、分发。

## 成本构成（它真的免费，但成本在别处）

<table>
  <thead>
    <tr><th>方案</th><th>部署成本</th><th>模型成本</th><th>适合场景</th></tr>
  </thead>
  <tbody>
    <tr><td>本机部署</td><td>免费（笔记本即可）</td><td>本地模型免费 / API 按量</td><td>个人日常使用</td></tr>
    <tr><td>自有服务器</td><td>服务器月费</td><td>同上</td><td>小团队共享</td></tr>
    <tr><td>阿里云计算巢</td><td>按 ECS 规格计费</td><td>同上</td><td>7×24 在线需求</td></tr>
    <tr><td>AgentScope Platform</td><td>免费试用</td><td>免费模型 OAuth 尝鲜</td><td>快速体验</td></tr>
  </tbody>
</table>

> QwenPaw 本体完全免费、Apache-2.0 商用零限制。你的花费只取决于两件事：部署在哪里、用什么模型。用 QwenPaw-Flash 等本地模型跑，零 API 成本；接通义千问或 OpenAI，则按各家标准 API 计价。对预算敏感的用户，本地 Ollama + 本机部署可以做到完全零边际成本。

## 竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>QwenPaw</th><th>ASI:One</th><th>豆包工作</th><th>Claude</th></tr>
  </thead>
  <tbody>
    <tr><td>数据归属</td><td>本地优先，数据归你</td><td>云端知识图谱</td><td>云端 + 云电脑</td><td>云端（OpenAI 系对手）</td></tr>
    <tr><td>开源</td><td>Apache-2.0 开源</td><td>闭源 + FET 机制</td><td>闭源商业</td><td>闭源商业</td></tr>
    <tr><td>多端 IM</td><td>钉钉/飞书/微信/QQ/Discord/Telegram</td><td>Web/移动为主</td><td>飞书 + 微信远程</td><td>无原生 IM 聚合</td></tr>
    <tr><td>记忆机制</td><td>本地三层记忆 ReMe</td><td>用户自有知识图谱</td><td>飞书上下文</td><td>对话记忆</td></tr>
    <tr><td>上手门槛</td><td>中（需部署）</td><td>低（免费注册）</td><td>低（开箱即用）</td><td>低</td></tr>
    <tr><td>定价</td><td>免费 + 自担模型/部署</td><td>免费 + Web3 优先</td><td>68/200/500 元</td><td>$20 Pro 等</td></tr>
  </tbody>
</table>

核心差异一句话：ASI:One 把记忆押在云端 agent 经济、豆包工作押在飞书生态、Claude 是成熟闭源助手；QwenPaw 的独特卖点是「开源 + 本地优先 + 多端 IM 统一」，你拿到的是一个真正属于自己的、可改可迁的数字分身，而不是租来的助手。

## 优缺点
优点已在开头列出：数据真正归你、开源可改、多端统一接入、记忆进化主动服务。

短板同样明确：上手有部署门槛、能力上限取决于模型与自写技能、多 Agent 协作需运维经验、年轻项目的企业级合规凭证需自行补齐。

## 适合谁 / 不适合谁
- **适合**：在意数据主权与可拥有性的开发者/隐私党；需要把钉钉/飞书/微信等多端沟通统一成有记忆智能体的用户；想用 Skills 自己搭工作流、接受本地部署成本的个人或小团队。
- **不适合**：只想装 App 立即聊天的纯小白；不愿碰 Python/Docker 环境的人；需要开箱即用的企业级 SSO/审计、不愿自建运维的团队。

## 综合评分与结论
给 4.3 分（与工具目录标注一致）。QwenPaw 在「个人 AI 助手」这条赛道里选了一条少有人走的路：把主权还给用户。本地优先解决数据焦虑、Apache-2.0 解决黑箱焦虑、多端 IM 统一解决碎片化焦虑、记忆进化解决「每次都是陌生人」的痛点。它不如豆包工作开箱即用、不如 Claude 省心，但它是少数让你真正「拥有」助手而非「租用」助手的选择。对愿意花半小时部署的开发者与隐私党，它是目前国内最值得试的开源个人智能体；对纯小白，建议等社区把一键安装打磨得更顺再上车。
