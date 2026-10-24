---
id: openclaw
title: "OpenClaw 深度评测：39万星的开源 AI Agent 基座，真能托付吗"
date: "2026-10-24"
category: "AI工作台"
rating: 4.3
price: "软件本体免费（MIT）；模型调用自付（Claude/GPT API 按量，社区实测约 $3.5/天即 ~$100/月常见），本地 Ollama 模型零成本"
subtitle: "从聊天软件指挥你的电脑——开源、免费、模型无关，但可靠性与安全是真实门槛"
url: "https://openclaw.ai"
pros:
  - "完全开源免费（MIT），无订阅、无托管层、不发行代币，数据自托管在自己机器上"
  - "模型无关：Claude/GPT/本地 Ollama 任意切换，记忆以文件形式可随版本控制迁移，不被厂商锁定"
  - "渠道与技能生态庞大：20+ 官方聊天渠道、clawhub 61+ 技能、50+ 集成，可玩性极高"
  - "真正能「做事情」的 Agent 架构：Gateway 单进程统一调度文件/Shell/浏览器/定时任务"
cons:
  - "真实可靠性存疑：HN 与 Reddit 社区普遍反映始终有 15% 在坏，WhatsApp/Slack/Discord 渠道偶发失联"
  - "安全暴露面大：2026 年两批共 120 条安全公告，早期数万实例裸奔公网（Shodan 42665），给 LLM broad 系统权限有删库风险"
  - "上手与运维成本高：Gateway 重启、审批系统、版本升级常 Breaking，用户自嘲变成了它的 sysadmin"
  - "模型自付：用 Claude/GPT 实测每月常达 $100 量级，只有本地模型才真正免费"
alternatives:
  - { name: "ToDesk AI", slug: "todesk-ai", reason: "基于 OpenClaw 深度定制的国内桌面 Agent，自带 GUI 与远控、微信/企微/飞书接入，中文开箱即用，适合不想折腾自部署的用户" }
  - { name: "Agent OS", slug: "agent-os", reason: "同为开源本地优先 Agent 工作台（Apache-2.0），支持 8 种编程 CLI、三端全平台，轻量且免费" }
  - { name: "DeepSeek Harness", slug: "deepseek-harness", reason: "深度求索官方开源 Agent（MIT），按 token 计费、模型无关，中文生态与文档友好" }
  - { name: "Manus", slug: "manus", reason: "云端通用 Agent，零本地部署开箱即用，适合不愿运维的人，但闭源付费、数据在云端" }
---

## 一句话总结
OpenClaw 是把「聊天软件变成你电脑的遥控器」的开源 Agent 基座——懂技术、想完全掌控数据的人值得装，怕折腾和把系统权限交给 LLM 的人请绕行。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>作者 / 运营方</td><td>Peter Steinberger（PSPDFKit 创始人）/ OpenClaw Foundation（独立 501(c)(3)）</td></tr>
    <tr><td>首次发布</td><td>2025-11 以 Clawdbot 起步，2026-01-30 定名 OpenClaw（曾用名 Moltbot）</td></tr>
    <tr><td>最新稳定版</td><td>v2026.10.4（2026-10-16 发布；桌面端 macOS v2026.9.6 / Win v2026.9.4 / Linux v2026.9.5）</td></tr>
    <tr><td>开源协议</td><td>MIT（TypeScript 实现）</td></tr>
    <tr><td>GitHub Stars</td><td>约 39 万（2026-10，社区文档与多源一致；创始人公开引述 346K+）</td></tr>
    <tr><td>支持平台</td><td>macOS 15+ / Windows 10-11 / Linux；iOS、Android 节点 App</td></tr>
    <tr><td>消息渠道</td><td>20+：WhatsApp / Telegram / Discord / Slack / iMessage / Signal / Teams / Gmail / GitHub，以及飞书 / 钉钉 / QQ 等</td></tr>
    <tr><td>Product Hunt</td><td>2026-01-27 首发 820 赞、#2 当日；2.0 于 2026-09-02 获 208 赞</td></tr>
    <tr><td>媒体覆盖</td><td>TechCrunch、The Guardian、CNBC、Forbes 等均报道其爆发式增长</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. Gateway 统一执行面（评分 4.5）**
OpenClaw 的本质是一个常驻的 Gateway 进程，它把 LLM 接到你的文件系统、Shell、浏览器和消息渠道，成为会话、路由与渠道连接的单一真相源。官方示例里「用 WhatsApp 说一句总结未读邮件」「让 Telegram 帮我 Review PR #247」都不只是聊天，而是真实读文件、跑命令、调 API。这正是它区别于普通聊天机器人的地方——它真的在「做事情」。

**2. 多渠道入口 + 持久记忆（评分 4.0）**
你可以继续用已经在用的聊天软件来指挥电脑，记忆 24/7 持续。HN 上有用户把记忆存进 Obsidian/Markdown 并做版本控制，名言是「记忆不在某个厂商的围墙花园里，我随时能读能改，换更好的模型时记忆和系统提示一起带走」。这种可移植性是闭源 SaaS 给不了的。扣分点在于：渠道稳定性是社区吐槽重灾区。

**3. Skills 技能市场 clawhub（评分 4.0）**
官方技能注册表 clawhub 上有 61+ 技能、横跨 10 个类别（Git、DevOps、安全、搜索、智能家居等），一条命令安装，且每个发布版带安全审计状态（Pass/Review/Warn/Malicious），装前能看清。生态是 OpenClaw 最大的护城河。但第三方插件本质是供应链，需自行甄别。

**4. 模型无关 + 本地优先（评分 4.5）**
支持 Anthropic Claude（API 或 Claude Code 凭据）、OpenAI（OAuth 或 API Key），以及通过 Ollama 跑 Llama 等本地模型，断网可用、数据不出机。2026-04 Anthropic 一度封禁订阅 OAuth 给 OpenClaw 用，社区迅速切到 CLI 后端或直接 API Key，模型无关的设计让它扛住了这次冲击。

**5. 主动任务：cron / heartbeat（评分 4.0）**
可以设定时任务、Webhook 触发器，Agent 还能在「心跳」里主动找你（比如每天晨报、交通提醒）。这是它「24/7 私人助理」叙事的核心。但 HN 与 Reddit 反馈：cron 偶发失败、自我报告的「修复」未必真生效，非确定性明显。

## 价格方案

<table>
  <thead>
    <tr><th>项目</th><th>费用</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>软件本体</td><td>$0（永久）</td><td>MIT 开源，无订阅、无托管层、不发行代币；官方渠道仅 openclaw.ai / docs.openclaw.ai / clawhub.ai / GitHub openclaw 组织</td></tr>
    <tr><td>云端模型调用</td><td>按量自付</td><td>用 Claude/GPT 等商业模型需自备 API 或订阅；社区实测约 $3.5/天（~$100/月）属常见区间</td></tr>
    <tr><td>本地模型</td><td>$0</td><td>经 Ollama 跑本地模型完全免费，数据与推理不出机</td></tr>
    <tr><td>仿冒警示</td><td>—</td><td>搜「openclaw / 龙虾 / 官网」前排大量 .io/.cn 仿冒站，凡收费「激活码 / 会员版 / 推代币」均与官方无关，工信部 NVDB 亦建议只从官方渠道下载</td></tr>
  </tbody>
</table>

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>OpenClaw</th><th>ToDesk AI</th><th>Agent OS</th><th>DeepSeek Harness</th></tr>
  </thead>
  <tbody>
    <tr><td>开源 / 协议</td><td>MIT 开源</td><td>闭源（基于 OpenClaw 深度定制）</td><td>Apache-2.0 开源</td><td>MIT 开源</td></tr>
    <tr><td>部署方式</td><td>自托管（本机 / VPS）</td><td>桌面客户端 + 云端</td><td>本地优先（mac/Win/Linux）</td><td>本地 / 桌面</td></tr>
    <tr><td>价格</td><td>免费（模型自付）</td><td>免费档 + 会员 39.9 元/月起</td><td>免费（依赖自备 CLI 额度）</td><td>免费（按 token）</td></tr>
    <tr><td>界面 / 渠道</td><td>20+ 聊天渠道 + Web UI</td><td>桌面 GUI + 微信/企微/飞书</td><td>CLI + 消息通道</td><td>CLI + 界面</td></tr>
    <tr><td>定位</td><td>开源基座、生态最大</td><td>国内开箱即用定制版</td><td>轻量多 CLI 调度</td><td>官方编程 Agent</td></tr>
  </tbody>
</table>

## 优势与短板

**优势**：第一，自由与掌控拉满——代码公开、数据在自己机器、记忆可版本控制、模型随时可换，没有任何厂商能锁死你；第二，生态广度无人能及，20+ 渠道、61+ 技能、50+ 集成，几乎你想接的都能接；第三，架构先进，Gateway 统一执行面 + 主动任务，是当下「个人 Agent」品类的事实上标准，连 ToDesk AI、ArkClaw 等国内桌面 Agent 都直接基于它定制。

**短板**也必须坦诚讲。可靠性是最大问号：HN 那条「Ask HN: Who is using OpenClaw?」（229 赞、267 评论）里，多数技术用户认为它「始终有 15% 在坏」，渠道（WhatsApp/Slack/Discord）尤其易失联，升级一个版本就可能让 WhatsApp 罢工。安全暴露面同样真实：社区文档披露 2026 年 6-30 与 9-11 两批共 120 条安全公告，早期更有 42665 个实例裸奔在公网（Shodan 2026-02-09），给 LLM broad 系统权限意味着删库、锁机并非玩笑。最后是运维与成本：你得自己当 sysadmin，且用商业模型每月常烧到 $100 量级，只有本地模型才真免费。

## 最终推荐

**适合谁**：技术背景、重视数据主权、愿意花时间调通渠道与沙盒的人。如果你本来就在用 Claude Code / Codex，想把它们从消息软件里随时唤醒、让 Agent 自主跑测试开 PR，OpenClaw 是目前生态最成熟的选择；想完全免费就把模型换成本地 Ollama。国内用户若嫌自部署麻烦，直接上基于它定制的 ToDesk AI 会更顺。

**不适合谁**：纯小白、怕折腾、或对「把系统权限交给 LLM」有顾虑的人。这类用户要么选开箱即用的云端 Agent（如 Manus），要么至少把它关在独立 VPS / 容器里、用最小权限跑，别在自己的主力机上给全量访问。

**安全底线**：务必从官方渠道安装并跑最新稳定版；不要暴露 Gateway 到公网；敏感动作保留人工审批；本地模型优先。星标 39 万不等于开箱可用——它是强大的基座，但托付之前，请先给它划好边界。

---

**评测声明**：本文基于 OpenClaw 官方站（openclaw.ai）、官方文档（docs.openclaw.ai）、社区文档（clawdocs.org）、Product Hunt 发布页、Hacker News「Ask HN: Who is using OpenClaw?」讨论、TheAgentTimes 与 readaitime 等公开报道撰写。所有数据来自官方与独立信源，已剔除仿冒站不实信息。本文不含付费推广。
