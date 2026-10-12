---
id: deepseek-harness
title: "DeepSeek Harness 深度评测：把「一切皆插件」做成桌面智能体的开源狠角色"
date: "2026-10-12"
category: "AI工作台"
rating: 4.4
price: "免费开源（MIT）；按 token 计费，登录 DeepSeek 账号或自带 API Key；无订阅费"
subtitle: "从命令行 runtime 到签名桌面端，DeepSeek 用 Cordis 内核重新定义 Agent 工作台的可组合性与可观测性"
url: "https://www.deepseek.com/harness/"
pros:
  - "一切皆插件（Cordis 内核）：模型/工具/沙箱/UI 全部可热替换，无特权核心，改能力不动源码"
  - "运行轨迹可回放：仅追加会话日志记录提示词/思维链/工具调用/子Agent调度，可恢复/分叉/检索/回放"
  - "四模式覆盖全场景：标准/PTC（模型写代码批量编排工具）/极简/创造，批量办公与基准测试都顺手"
  - "官方签名桌面端：Win/macOS 苹果公证原生客户端，双击安装、自带 dsh CLI，无需 Node 环境"
  - "模型无关：DeepSeek/Anthropic/OpenAI/Bedrock/Vertex/Azure 及本地开源模型均可接入"
cons:
  - "仍处开发者预览（rc 阶段），官方明言会有兼容性破坏性变更，不适合生产关键负载"
  - "预览税明显：0.1.7 起会话日志格式升到 V4 不向后读，升级前必须备份 ~/.dsh"
  - "桌面端早期偏绑定 DeepSeek 模型与账号体系，重度自定义仍需 Node 环境"
  - "安全面需自担：来自国内厂商的二进制、默认开启遥测与会话日志，敏感数据建议跑隔离环境"
alternatives:
  - { name: "Claude Code", slug: "claude", reason: "推理深度与工具可靠性天花板，但需要 $20/月 Pro 且闭源" }
  - { name: "Nami", slug: "nami", reason: "同样免费的桌面元工作台，更轻量、专注调度已有 Agent，但能力深度不及 Harness" }
  - { name: "Agent OS", slug: "agent-os", reason: "Apache-2.0 开源元工作台，补齐分层记忆与知识库，适合长上下文沉淀" }
  - { name: "ZCode", slug: "zcode", reason: "闭源桌面 ADE，围绕单一强模型家族，$12.60/月起，省心但要付费" }
---

## 一句话总结
DeepSeek Harness 是给「想自己掌控 Agent 运行时、又嫌命令行太重」的开发者与进阶用户准备的插件化桌面智能体工作台——能折腾、可审计、不要钱，但预览期别拿它扛生产。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>深度求索（杭州深度求索人工智能有限公司 / DeepSeek）</td></tr>
    <tr><td>首次开源</td><td>2026-08-13，GitHub 开发者预览（v0.1.0-rc.5），发布即冲上 GitHub Trending</td></tr>
    <tr><td>最新版本</td><td>v0.2.0-rc.2（2026-09-29，桌面 CLI 与定时问答）</td></tr>
    <tr><td>许可证</td><td>MIT（开源，可审计、可改）</td></tr>
    <tr><td>内核</td><td>Cordis v4——时空可组合插件框架（源自 Koishi 聊天机器人框架）</td></tr>
    <tr><td>支持平台</td><td>macOS（Apple 芯片，已公证）、Windows 10/11 x64、Linux（容器/云）、Web（npx）</td></tr>
    <tr><td>模型支持</td><td>DeepSeek V4-Pro / V4-Flash、Anthropic、OpenAI、Bedrock、Vertex、Azure、Codex 及任意 OpenAI 兼容端点、本地 LLM</td></tr>
    <tr><td>价格</td><td>免费开源；推理按 token 计费（DeepSeek 账号余额或自带第三方 Key）</td></tr>
    <tr><td>文档与代码</td><td>官网 deepseek.com/harness；文档站 deepseek-harness.github.io；仓库 github.com/deepseek-ai/deepseek-harness</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 一切皆插件（Cordis 内核）——评分 5/5**
Harness 的 slogan 是「Agent = Model + Harness」，而 Harness 里没有任何特权核心。模型适配器、工具注册表、会话日志、Agent 循环、沙箱、UI，全部是插件，挂在 Cordis v4 内核上、可运行时热替换。想换模型供应商？改配置即可，不用碰源码；想换工具实现？挂一个新插件到 `ctx.tools` 旁就行。这种「无特权核心、靠配置层重组」的设计在开源 Agent 框架里很少见，也意味着你能把整个运行时从黑盒变成可审计的乐高。

**2. 运行轨迹可回放（Trajectory）——评分 5/5**
这是 Harness 最被 HN 与独立评测一致点赞的能力。每一次运行都被写进**仅追加（append-only）会话日志**：系统提示词、推理过程、工具调用与结果、子 Agent 调度、每一次上下文注入，全部留痕。你可以在 Trajectory 视图里按来源检视、恢复（resume）、分叉（fork）、检索、回放——被多家媒体称为「git for agent runs」。对要debug「三步前模型为什么跑偏」的多步任务，这是降维打击级的可观测性。

**3. 四工作模式——评分 4.5/5**
- **标准模式**：完整 Coding Agent（文件编辑、Shell、搜索、子 Agent、计划、工作流），默认 Web UI 体验。
- **PTC 模式（Programmatic Tool Calling）**：让模型先写一段 TypeScript 程序，再一次性批量编排几十步工具调用，把多轮对话压成单次执行，批量办公/整理/汇总特别顺手。
- **极简模式**：只留 bash + str_replace_editor 两个工具，干净环境专门用来跑模型基准测试（DeepSeek 自家 V4-Flash 基准就在这模式里跑）。
- **创造模式**：在标准模式之上加运行时检视、内存里试插件、写自定义 preset，是造第五/第六种模式的地方。

**4. 官方签名桌面端——评分 4/5**
2026-09-25 起出现签名安装包（V0.1.7-rc.1，Apple 开发者证书发给杭州深度求索），09-28/29 的 v0.2 把官方桌面 App 做成了 macOS Apple 芯片 + Windows x64 安装器，并内置 `dsh` 命令行，普通用户不用单独装 Node/pnpm。桌面端还加了右侧预览栏（直接看文件内容与代码 diff）、一键调用本地应用编辑、自动化任务插件（定时任务关掉 App 也能后台续跑）。实测（今日头条/山东财经网）批量整理文档、代码调试都能跑通，每次写文件/跑命令前弹确认窗，全程日志可追溯。

**5. 模型无关 + 严格沙箱——评分 4.5/5**
配置层就能切 DeepSeek、Anthropic、OpenAI、Bedrock、Vertex、Azure，甚至本地多卡跑开源模型；账户模型还能免额外 Key 走网页搜索。沙箱层用 Linux Landlock / macOS Seatbelt / Windows ACL 受限令牌，分四级权限（只读→工作区受限→完全），高危动作必须人工批准。0.1.1 与 0.1.7 都修过沙箱越权/误删的硬伤，修复节奏快。

## 价格方案

<table>
  <thead>
    <tr><th>方案</th><th>价格</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>开源 runtime（GitHub / Web）</td><td>免费（MIT）</td><td><code>npx @deepseek-ai/dsh web</code> 起本地 Web UI；可接自定义/本地模型</td></tr>
    <tr><td>桌面客户端（Win / macOS）</td><td>免费</td><td>官方签名 + Apple 公证，自带 dsh CLI；登录 DeepSeek 账号或填 API Key</td></tr>
    <tr><td>推理额度</td><td>按 token 计费</td><td>走 DeepSeek 账号余额或自带第三方 Key；2026-09-29 桌面端上线新用户赠 6 元额度（限 10-06 可用）</td></tr>
    <tr><td>DeepSeek-V4-Flash 参考价</td><td>约 $0.14 / 百万输入、$0.28 / 百万输出；缓存命中约 $0.0028 / 百万</td><td>模型方计费，非 Harness 收费；agent 循环 token 消耗大，单位成本比闭源旗舰低一个量级</td></tr>
  </tbody>
</table>

> 一句话：Harness 本身不收一分钱许可费，你只为「模型跑了多少 token」买单——这也是它对比 $20/月 Claude Code 最大的成本优势。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>DeepSeek Harness</th><th>Claude Code</th><th>Nami</th><th>Agent OS</th></tr>
  </thead>
  <tbody>
    <tr><td>开源 / 闭源</td><td>开源（MIT）</td><td>闭源</td><td>开源（MIT/Apache-2.0）</td><td>开源（Apache-2.0）</td></tr>
    <tr><td>价格</td><td>免费 + 推理按 token</td><td>$20/月起（Pro）</td><td>免费（用你已有订阅）</td><td>免费（无订阅）</td></tr>
    <tr><td>架构核心</td><td>一切皆插件（Cordis）</td><td>Agent SDK + 模型</td><td>Agent 调度工作台</td><td>元工作台 + 分层记忆</td></tr>
    <tr><td>多 Agent</td><td>Agent Team / Subagent（上限 16）</td><td>子 Agent</td><td>并排多面板并行</td><td>多 CLI 并排 + 看板</td></tr>
    <tr><td>轨迹可观测</td><td>仅追加日志可回放（强）</td><td>一般</td><td>弱</td><td>中（事件/交付物审阅）</td></tr>
    <tr><td>平台</td><td>Win/macOS/Linux/Web</td><td>跨平台 CLI</td><td>macOS 优先（Win 社区版）</td><td>三端全平台</td></tr>
    <tr><td>模型绑定</td><td>模型无关</td><td>绑 Claude</td><td>调度已有 Agent</td><td>调度已有 CLI</td></tr>
    <tr><td>适合谁</td><td>想掌控运行时、重可审计的进阶用户</td><td>要最强推理、肯付费的开发者</td><td>想一屏管多个 Agent 的普通人</td><td>要沉淀记忆与知识的团队</td></tr>
  </tbody>
</table>

## 优势与短板

**优势**：①架构上「一切皆插件」是真把运行时做成可替换积木，比多数把工具写死在源码里的框架更经得起定制；②Trajectory 轨迹回放是库内桌面智能体里第一梯队的可观测性，debug 多步 Agent 不再靠猜；③四模式把「新手引导→批量办公→基准测试→造自定义 preset」一条龙打通；④官方签名桌面端把门槛从「会 Node」降到「会双击」；⑤模型无关 + 按 token 计费，单位成本碾压闭源订阅。

**短板**：①仍是 rc 开发者预览，官方明言会有破坏性变更，生产关键负载慎用；②「预览税」真实存在——0.1.7 起会话日志格式升 V4 不向后读，升级前务必备份 `~/.dsh`；③桌面端早期偏绑 DeepSeek 模型与账号体系（需实名/充值），重度自定义仍要 Node；④来自国内厂商的二进制、默认开启遥测与会话日志，HN 上有人直说只在 VM 里跑，敏感数据需自设隔离边界。

## 最终推荐

**该用的人**：
- 开发者 / AI 工程师，想自己改 Agent 运行时、换模型供应商、审计每一步工具调用——Harness 是目前开源里最「可组合 + 可回放」的选择。
- 成本敏感、要跑大量 agent 循环的人——按 token 计费 + V4-Flash 低价，单位成本比闭源旗舰低一个量级。
- 已经用 DeepSeek 生态、想要一个「双击即装、能读本地文件夹、后台定时跑任务」的桌面助手的人。

**不该用的人**：
- 要「装完就稳、永不破坏兼容」的生产环境用户——rc 阶段官方自己都提醒会有 breaking change，等稳定版。
- 只想聊天、不想碰配置的小白——它再「桌面化」本质还是 runtime，PTC/创造模式需要你理解 Agent 怎么跑。
- 对国内厂商二进制、数据出境有强合规要求的企业——默认遥测 + 会话日志，建议先跑隔离环境再评估。

**实操建议**：Windows 主环境的赵生可直接下官方签名桌面端（v0.2），工作区单独建文件夹、别选系统目录；先在标准模式跑文档批量整理/代码调试，熟悉后再碰 PTC 与创造模式；升级前一定备份 `~/.dsh`。

---

**数据来源**：DeepSeek 官网 deepseek.com/harness 与文档站 deepseek-harness.github.io；GitHub deepseek-ai/deepseek-harness（MIT）；MarkTechPost / Encorp（v0.2 桌面 App 报道，2026-10-03）；aiunderstanding.org（V0.1.7-rc.1 桌面预览，2026-09-25）；i-SCOOP、AlphaSignal、top10.dev、ZOOZ Engineering（架构与对比）；HN Distilled（社区反馈）；山东财经网/IT时代网、今日头条、ChatTools（桌面端实测）；iadecider.com（预览税与对比矩阵）。

**评测声明**：本文基于官方文档、开源仓库与独立评测/用户反馈聚合撰写，赵生尚未亲测。所有事实均来自上述可公开回溯的来源，不含付费推广。
