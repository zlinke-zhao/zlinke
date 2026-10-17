---
id: moogh
title: "MOOGH 深度评测：Windows 原生的审批式桌面 AI 智能体，按量付费不绑订阅"
date: "2026-10-17"
category: "AI工作台"
rating: 4.3
price: "开放测试中无订阅：按量付费，1 美元=60 积分，充值 $1-$100，无闲置费、无隐藏费"
subtitle: "个人开发者的 Windows 桌面 Agent 工作台，规划-审批-执行-可还原，本地数据不出机"
url: "https://www.aimoogh.com/"
pros:
  - "Windows 原生客户端，对 Windows 用户零适配成本，无需 Mac 或虚拟机（库内多数桌面 Agent 是 Mac 优先，这点是稀缺差异）"
  - "审批式执行加全程留痕：规划到审批到执行到核验到可还原，改前出 diff，彻底告别黑盒，安全可控"
  - "按量付费无订阅、无闲置费，1 美元等于 60 积分、充值 $1-$100，轻量用户几乎零成本起步"
  - "本地文件夹边界加数据留本机，仅任务上下文上云，隐私姿态克制透明，Skills/Plugins/MCP 可扩展能力"
cons:
  - "仍是开放测试早期，由个人开发者 youlemei2022 出品，长期可靠性、大规模用户验证与企业级治理能力待观察"
  - "定价口径不一：第三方评测曾列 $20/$40/$90 月费档，当前官网改回无订阅按量，模型变动中需以官网实时为准"
  - "模型走 API 或积分调用，重度任务持续消耗积分；国内可用性、中文支持与 Windows 实际体验需赵生后续亲测校准"
alternatives:
  - { name: "ToDesk AI", slug: "todesk-ai", reason: "同为 Windows 原生、执行透明（实时流程卡片），但远控加执行融合、需 ToDesk 账号积分，对比 MOOGH 纯本机按量" }
  - { name: "OpenClaw", slug: "openclaw", reason: "开源 Computer-Use Agent，Windows 可跑、免费，适合能自部署、不想被计费绑定的用户" }
  - { name: "DeepSeek Harness", slug: "deepseek-harness", reason: "深度求索官方开源桌面智能体，多平台、按 token 计费、模型无关，开发者自托管首选" }
  - { name: "Nami", slug: "nami", reason: "多 Agent 工作台思路相近，但仅 macOS、免费开源，适合 Mac 用户做调度层而非本机执行" }
---

## 一句话总结

MOOGH 适合想让 AI 真在自己 Windows 电脑上干活、又怕它乱改文件、还不想被月费绑死的普通办公和开发者人群；不适合追求企业级治理、需要无人值守定时任务或坚持完全自托管的开源原教旨用户。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>产品名</td><td>MOOGH（AI Agent Desktop Workspace）</td></tr>
    <tr><td>官方站</td><td>aimoogh.com（含 en/es/de 多语言页），下载页 agent.aimoogh.com/download</td></tr>
    <tr><td>开发商</td><td>个人开发者 youlemei2022（GitHub：youlemei2022-web/moogh-desktop-agent），品牌站 aimoogh.com</td></tr>
    <tr><td>当前版本</td><td>v2026.10.12-2（官网多语言页标注，2026-10-12 构建）</td></tr>
    <tr><td>支持平台</td><td>Windows 10 / 11（x64）原生桌面客户端</td></tr>
    <tr><td>首次公开</td><td>Product Hunt 发布于 2026 年 9 月（约 1 个月前），标签 Developer Tools / Artificial Intelligence</td></tr>
    <tr><td>开源状态</td><td>公开 GitHub 仓库（含 README 与 docs 文档），产品本身为开放测试期商业客户端</td></tr>
    <tr><td>计费方式</td><td>开放测试无订阅，按量付费，1 美元=60 积分，充值 $1-$100，无闲置费</td></tr>
    <tr><td>联系方式</td><td>support@aimoogh.com，Telegram 支持</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 任务规划与逐步审批（评分 4.5 / 5）**
MOOGH 的招牌姿态是「先出计划、再等批准」。你用大白话描述任务（整理这个文件夹、修复失败的测试、总结这批文档），Agent 会先展示它打算动哪些文件、跑哪些命令，等你点头才执行。官方站与 GitHub README 口径一致，都强调 permission-based execution 与 review the plan before the agent acts。把「改前出 diff、改后可还原」做成产品级默认，而不是大多数 Agent 只给最终结果——这正是它敢称 workbench 而非 chatbot 的底气。扣 0.5 是因为公开文档未明确说明「计划」的颗粒度上限与复杂多步任务的拆解深度。

**2. 本地文件作用域与终端代跑（评分 4.3 / 5）**
MOOGH 仅访问你指定的项目或文件夹，终端命令由它在你批准后代跑，并在回报前核验执行结果。nav-ai.net 的独立评测确认了 scoped folder access 与 command verification 两点，并指出这种「审批前置」适合已有本地代码库、命令行工作流的开发者。短板是：公开材料没有证实它支持 scheduling 或无人值守执行，所谓「可重复例行任务」应理解为「审批后重跑」，而非后台自动跑。

**3. 透明行动历史（评分 4.4 / 5）**
官方多语言站统一描述 full action history——Agent 的所有读、改、命令都留痕，你可以查看改了什么、调整或还原特定操作，nothing happens invisibly。对一款能碰本地项目的桌面 Agent 而言，可审计性几乎是信任的底线，MOOGH 把这个能力做成了默认姿态，与库内少数「过程可视化」派（如 ToDesk AI 的实时流程卡片）同脉，但比多数只给结果的黑盒 Agent 更让人放心。

**4. 项目级上下文 + Skills/Plugins/MCP 扩展（评分 4.0 / 5）**
GitHub README 写明 MOOGH 把 chat、projects、files、code、tools、Skills、Plugins 与 MCP 收进同一工作区，文件/任务/状态跨会话保留，并通过 Skills、Plugins、MCP 扩展任务专属能力。这意味着它不是一次性问答，而是能围绕一个项目持续干活。保守给 4.0 是因为公开文档对具体 Skill 市场与生态成熟度着墨不多，扩展能力的实际丰富度有待赵生亲测。

## 价格方案

<table>
  <thead>
    <tr><th>方案</th><th>价格</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>开放测试（当前官方口径）</td><td>无订阅</td><td>按量付费，1 美元=60 积分，充值区间 $1-$100，无闲置费、无隐藏费、无锁定（lock-in）；只为真实用量付费</td></tr>
    <tr><td>历史第三方记录档（已非当前）</td><td>Basic $20/月、Pro $40/月、Business $90/月</td><td>nav-ai.net 评测曾列出月度档，但当前官网与 GitHub README 均改回「无订阅按量」，疑似早期内测档；以官网实时页面为准</td></tr>
  </tbody>
</table>

需要提醒：MOOGH 处于开放测试期，定价口径在第三方评测与官方当前页面之间存在不一致。写稿时（2026-10-17）官网 aimoogh.com 与 GitHub 仓库均明确「no subscription，top up points，1 USD = 60 points」，因此本文以官方当前口径为准。充值后积分按实际任务消耗，轻量整理文件、跑一次构建这类低频用途成本极低；重度自动化会持续吃积分，属于典型按量产品的天花板。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>MOOGH</th><th>ToDesk AI</th><th>OpenClaw</th><th>DeepSeek Harness</th></tr>
  </thead>
  <tbody>
    <tr><td>平台</td><td>Windows 10/11 原生</td><td>Windows/macOS/移动端</td><td>跨平台（含 Windows）</td><td>Windows/macOS（多平台）</td></tr>
    <tr><td>执行方式</td><td>本机规划-审批-执行</td><td>远控+执行融合，手机远程派活</td><td>开源 Computer-Use，自行部署</td><td>本地桌面 Agent，多模式</td></tr>
    <tr><td>计费</td><td>按量，1 美元=60 积分</td><td>积分+会员混合</td><td>免费（自备算力/API）</td><td>按 token 计费</td></tr>
    <tr><td>透明度</td><td>审批+diff+全程留痕</td><td>实时流程卡片可视化</td><td>依赖配置，看部署</td><td>Trajectory 日志可回放</td></tr>
    <tr><td>开源</td><td>公开仓库，产品闭源</td><td>基于 OpenClaw 封装</td><td>开源</td><td>开源（MIT）</td></tr>
  </tbody>
</table>

横向看，MOOGH 在库内桌面 Agent 里的最大差异是「Windows 原生 + 纯本机按量」组合。ToDesk AI 同样 Windows 可用，但走远控+执行路线、需 ToDesk 账号与积分体系；OpenClaw 免费可自托管但部署门槛高；DeepSeek Harness 开源多平台、按 token，更适合开发者。若你在 Mac 上，思路最接近的调度层是 Nami（免费开源、多 Agent 并排），但它不在中国 Windows 用户的直接可用范围内。

## 优势与短板

**优势展开**
第一，Windows 原生是实打实的稀缺性。库内 28+ 款桌面智能体里 macOS 优先的偏多，赵生这台 Windows 笔记本能直接装、不用开虚拟机，适配成本为零。第二，审批式执行把「安全」从口号变成默认流程——改之前你能看到计划，改之后能还原，对本地项目这种一旦改错就麻烦的场景尤其重要。第三，按量付费对低频用户极度友好，没有月费沉没成本；第四，本地文件夹边界 + 仅上下文上云，隐私姿态比一堆默认把文件传云的工具有克制感。

**短板展开**
第一，它是个人开发者的开放测试产品（GitHub 用户 youlemei2022），没有大厂背书，长期维护与企业级权限/审计尚未被大规模验证。第二，定价口径反复（第三方曾记月费档、官网现改按量），说明商业模型仍在摸索，用户需自己盯官网实时价。第三，模型走 API/积分，重度任务会持续消耗；国内网络可用性、中文界面与 Windows 真实体验，现有公开资料覆盖不足，需要赵生后续亲测校准后再下定论。

## 最终推荐

**推荐这几类人直接用**：①Windows 用户、想要一个「在我电脑上真干活」的助手，但不想折腾 Mac/虚拟机；②对 AI 乱改文件有顾虑、必须「先看计划再批准」的谨慎型用户；③低频使用者，按量付费比月费更划算；④想在本机保留数据、只把任务上下文上云、在意隐私的人。

**不建议这几类人**：①需要企业级治理、细粒度权限与合规审计的团队，MOOGH 目前是早期个人项目，撑不住；②想要无人值守定时任务/后台自动跑的，公开资料未证实它支持 scheduling；③坚持完全自托管、零外部服务的开源原教旨用户，MOOGH 是闭源客户端；④重度自动化用户，按量积分在高频场景下成本会快速累积，不如 OpenClaw/DeepSeek Harness 这类自备算力的方案。

**上手建议**：从官网 agent.aimoogh.com/download 取 Windows 安装包，先拿「整理一个本地文件夹」「跑一次项目构建」这类低风险任务试水，重点观察它的审批提示是否清晰、diff 是否准确、还原是否真的可用——这三件事过关，再考虑把它接进日常工作流。

---

**评测声明**：本文基于作者实际调研与公开信息撰写。核心事实来自 MOOGH 官方站 aimoogh.com（含 en/es/de 多语言页，标注版本 v2026.10.12-2）、GitHub 仓库 youlemei2022-web/moogh-desktop-agent（README 与 docs）、Product Hunt 产品页，以及 nav-ai.net 独立评测的多源交叉验证。价格以 2026-10-17 官网与 GitHub 实时口径为准。本文不含付费推广。
