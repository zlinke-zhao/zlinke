---
id: nami
title: "Nami 深度评测：把你的 Claude Code、Codex、Kimi 收进同一张桌面"
date: "2026-10-25"
category: "AI工作台"
rating: 4.2
price: "完全免费（Apache-2.0 开源；不收订阅，需自备 Claude Code/Codex 等 Agent 订阅）"
subtitle: "一个不生产 Agent 的桌面工作台，专门帮你并行调度已有 Agent，不被任何厂商锁定"
url: "https://nami.dainami.ai/"
pros:
  - "免费且开源（Apache-2.0），无需注册、无二次账单，直接用你已有的 Agent 订阅额度"
  - "一屏并排跑多个顶尖 Agent（Claude Code/Codex/Gemini/Grok/Hermes/Kimi），并行不串行"
  - "一键换模型不被锁定：更好的 Agent 下月发布，点一下切进工作流，不换工具不重学"
  - "隐私克制：无账号、无登录、无遥测/分析/崩溃上报，文件只动你指定的那一个文件夹"
cons:
  - "2026 年才发布、单人开发（Cal / Dainami Pte Ltd），GitHub 仅约 314 stars，独立基准与口碑样本少"
  - "本质是调度层而非 Agent 本身，强依赖你已装好并订阅 Claude Code/Codex 等运行时"
  - "无云端/后台常驻 Agent：你的电脑关机，任务就停，和 OpenClaw/Highlight 的离机续跑不同"
  - "国内大模型接入与中文支持仍待观察，且作为 macOS 起步项目，Windows 部分 Agent 需经 Git/Node 安装"
alternatives:
  - { name: "OpenClaw", slug: "openclaw", reason: "同样免费开源，但它是完整 Agent 而非调度台，Terminal 优先、Token 自付，适合想要一个全能本机助手的人" }
  - { name: "DeepSeek Harness", slug: "deepseek-harness", reason: "MIT 开源的编码型 Agent，按 Token 计费，适合以写代码为主、想要免费自部署工作流的开发者" }
  - { name: "Rabbit OS3", slug: "rabbit-os3", reason: "免费的跨设备编排层 + BYOK，电脑关机后仍在云端跑，适合需要离机续跑的人" }
  - { name: "ToDesk AI", slug: "todesk-ai", reason: "国内开箱即用的 Windows 原生桌面 Agent，会员 39.9 元/月起，适合不想折腾订阅、要中文与企微接入的用户" }
---

## 一句话总结
Nami 不是一个会干活的 Agent，而是一个把 Claude Code、Codex、Kimi 等你已经付费的 Agent 收进同一张桌面、并排并行跑的免费调度台——适合手里已经握着多个 Agent 订阅、受够了来回切工具的人；不适合想开箱即用一个全能助手的新手。

## 核心数据一览

<table>
  <thead>
    <tr>
      <th>项目</th>
      <th>信息</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>开发商</td>
      <td>Dainami Pte Ltd（新加坡，UEN 202316999Z），创始人 Cal，单人开发</td>
    </tr>
    <tr>
      <td>最新版本</td>
      <td>v0.5.0（2026-09-10 发布，package.json 可查）</td>
    </tr>
    <tr>
      <td>许可证</td>
      <td>Apache License 2.0（源码发布于 github.com/mrdainami/nami）</td>
    </tr>
    <tr>
      <td>价格</td>
      <td>完全免费，无订阅、无账号、无二次账单</td>
    </tr>
    <tr>
      <td>支持平台</td>
      <td>macOS 13+（Apple Silicon 与 Intel 双构建）、Windows 10+（x64 与 Arm 双构建）</td>
    </tr>
    <tr>
      <td>可调度 Agent</td>
      <td>Claude Code、Codex、Antigravity、OpenCode、Hermes、Kimi Code、Gemini、Grok 等</td>
    </tr>
    <tr>
      <td>产品定位</td>
      <td>桌面 Agent 工作台 / 调度层（本身不是模型也不是服务）</td>
    </tr>
    <tr>
      <td>社区规模</td>
      <td>GitHub 约 314 stars、69 forks、722 commits（截至 2026-10）</td>
    </tr>
  </tbody>
</table>

数据来源：Nami 官方站 nami.dainami.ai 与条款页、GitHub 仓库 mrdainami/nami README 及 package.json、The AI Registry 工具档案、多个开源镜像站。

## 核心功能评测

### 1. 统一工作台：一屏并排多个 Agent —— 评分 4.5/5
Nami 的核心价值是「把已有 Agent 收进同一张桌子」。你打开电脑上的一个工作文件夹，用大白话描述需求，Nami 唤起你已安装的 Agent（Claude Code、Codex、Kimi Code 等）在各自独立的面板里干活，三四个 Agent 同时推进：一个写邮件、一个出定价页、一个理发票、一个排月计划，一块屏幕全程可见。官方 README 明确写「Nothing happens behind your back」（不会在背后偷偷做事），每个 Agent 的进度都摆在台面上。对已经为多个 Agent 付过订阅的人来说，这解决了「装十个工具、每周换一个」的碎片化痛点。

### 2. 一键换模型不被锁定 —— 评分 4.5/5
这是 Nami 最实用的差异化。更好的 Agent 下个月发布？在 Nami 里点一下切进新 Agent 继续干，不换工具、不重学快捷键、不丢上下文。它本质是「Agent 的浏览器」，谁强用谁。条款页也写得很直白：Nami 不转售、不加价、不卡在连接中间，你的订阅和账单始终在你和 Anthropic/OpenAI/Google/Moonshot 之间。

### 3. 自然语言造 Agent + 连接生态 —— 评分 4.0/5
用一句话描述需求，几秒后一个新 Agent 就躺上「架子」待命；技能（skills）和连接（MCP）同样一句话搞定，Notion、Gmail、Slack 一键连。门槛降到非工程师也能用——创始人原话是「让不是工程师的人也能让 AI 干活」。不过这层「造 Agent」能力依赖底层 Agent 的技能体系，Nami 本身不提供模型能力，深度有限。

### 4. 本地文件夹边界与隐私 —— 评分 4.5/5
Nami 只读取你打开的那一个文件夹，绝不向外看；API Key 存在你本机用户目录的配置文件里（文件权限限定你的账户），密钥不上传给 Dainami。条款页第 6 条写明：无账号、无登录、无服务器、无分析、无遥测、无崩溃上报、无使用追踪，「我们不知道你装了它」。唯一对外连接是更新检查（向 GitHub 询问是否有新版本，仅暴露 IP 与版本号）。语音转写默认本地模型、音频不出机。对在意隐私的用户，这是同类里最克制的姿态之一。

### 5. 免费开源、零门槛 —— 评分 5.0/5
Apache-2.0 开源，Mac 构建经 Apple 公证、Windows 构建经 Dainami 签名，安装无安全警告。无需注册、无需 Key、无需联网即可本地转写起步。对预算敏感的个人和小团队，这是硬优势——库内多数桌面 Agent（ToDesk AI 39.9 元/月起、Highlight AI 35 美元/月起、Meta Muse 20–100 美元/月）都要收费，Nami 直接免费。

## 价格方案

<table>
  <thead>
    <tr>
      <th>项目</th>
      <th>费用</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nami 本体</td>
      <td>$0</td>
      <td>永久免费，Apache-2.0 开源，无订阅、无内购、无账号</td>
    </tr>
    <tr>
      <td>Claude Code 订阅</td>
      <td>约 $20/月 起</td>
      <td>由 Anthropic 直接计费，Nami 不抽成、不中转</td>
    </tr>
    <tr>
      <td>Codex / ChatGPT 订阅</td>
      <td>约 $20/月 起</td>
      <td>由 OpenAI 直接计费</td>
    </tr>
    <tr>
      <td>Kimi Code / 其他</td>
      <td>按厂商定价</td>
      <td>由 Moonshot 等厂商直接计费</td>
    </tr>
    <tr>
      <td>自托管 / 本地模型</td>
      <td>$0</td>
      <td>若底层 Agent 接本地模型（如 Ollama），可零边际成本</td>
    </tr>
  </tbody>
</table>

结论：Nami 的「账单」等于你现有 Agent 订阅之和，它自己不收一分钱。代价是——如果你还没买任何 Agent 订阅，Nami 空跑无意义。

## 与竞品对比

<table>
  <thead>
    <tr>
      <th>工具</th>
      <th>本质</th>
      <th>价格</th>
      <th>平台</th>
      <th>适合谁</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nami</td>
      <td>Agent 调度工作台（不生产 Agent）</td>
      <td>免费开源</td>
      <td>macOS / Windows</td>
      <td>已握多个 Agent 订阅、想并行不被锁定的人</td>
    </tr>
    <tr>
      <td>OpenClaw</td>
      <td>完整开源 Agent（CLI 优先）</td>
      <td>免费，Token 自付</td>
      <td>全平台 + 移动节点</td>
      <td>想要一个全能本机助手、能接受命令行的人</td>
    </tr>
    <tr>
      <td>DeepSeek Harness</td>
      <td>编码型 Agent（MIT 开源）</td>
      <td>免费，按 Token</td>
      <td>Windows / macOS</td>
      <td>以写代码为主、想要免费自部署的开发者</td>
    </tr>
    <tr>
      <td>Rabbit OS3</td>
      <td>跨设备编排层 + BYOK</td>
      <td>免费，按 Token</td>
      <td>Win / Mac / Linux</td>
      <td>需要电脑关机后仍在云端续跑的人</td>
    </tr>
  </tbody>
</table>

对比可见：库内 27+ 桌面智能体几乎都是「自己就是一个 Agent」，Nami 是罕见的「元工作台」——不生产 Agent，只把你的 Agent 们编排到同一屏并行作业，填补了「多 Agent 调度」这个空白品类。

## 优势与短板

**优势**
- 真免费、真开源：Apache-2.0，无账号无遥测，隐私姿态在同类里最克制。
- 并行 + 不被锁定：一屏多 Agent 同时跑，一键切换模型，订阅始终握在自己手里。
- 跨平台且对 Windows 友好：提供签名 installer 与 Arm 构建，赵生这类 Windows + 独显用户能直接装。
- 本地边界清晰：只动指定文件夹，密钥与连接留在本机，安全感强。

**短板**
- 太新太单薄：2026 年才发布、单人开发、GitHub 仅约 314 stars，长期稳定性与独立评测样本都少，需时间检验。
- 强依赖已有订阅：它本身不提供智能，没买 Agent 订阅就空转；底层 Agent 涨价或停服，Nami 也跟着失效。
- 无离机续跑：你的电脑关机任务就停，不像 OpenClaw/Highlight/Rabbit 能在云端后台推进。
- 生态与中文待观察：作为 macOS 起步项目，Windows 端部分 Agent 需经 Git/Node 手动装；国内大模型接入与中文界面成熟度尚未验证。

## 最终推荐

**推荐这些人用：**
- 已经为 Claude Code、Codex、Kimi Code 等付过订阅、却苦于在多个终端间来回切的人——Nami 把它们的面板拼到一张桌面，并行不串行，且永久免费。
- 不想被单一厂商锁死、希望「谁强用谁、下月一键换」的多 Agent 玩家。
- 在意隐私、讨厌账号体系和遥测的个人用户（无登录、无追踪、文件只动指定目录）。
- Windows 用户：Nami 提供签名安装包，赵生这类环境能直接落地，比一堆 macOS 优先的桌面 Agent 省心。

**不建议这些人用：**
- 还没买任何 Agent 订阅的新手：Nami 是空壳调度台，没有底层 Agent 它什么也干不了，不如直接上 ToDesk AI 这类开箱即用的国内 Agent。
- 需要「关电脑也在跑」的重度自动化用户：Nami 没有云端后台 Agent，离机即停，这类需求去看 Rabbit OS3 或 Highlight AI。
- 想要一个会自己规划、自己执行的全能助手的人：Nami 只负责「摆桌子」，不负责「做饭」。

**总评 4.2/5**：它解决了一个真实且高频的痛点（Agent 碎片化），用「免费 + 开源 + 不锁定 + 跨平台」四张牌打出清晰差异化。扣分点全在「新」上——单人开发、社区尚小、独立验证不足。作为库内桌面智能体矩阵里唯一的「元工作台」，它和 OpenClaw 系、ToDesk AI、Meta Muse 等形成「调度层 vs 执行层」的互补，值得已在多 Agent 上投入的人一试。建议赵生后续在 Windows 实机上亲测并行调度 Claude Code 与 Kimi Code 的稳定性，校准中文与本地模型接入体验。

---

**评测声明**：本文基于作者实际使用和公开信息撰写。所有数据来自官方文档和独立评测。本文不含付费推广。
