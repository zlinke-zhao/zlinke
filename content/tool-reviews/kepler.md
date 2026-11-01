---
id: kepler
title: "Kepler 深度评测：GitKraken 的 Agent 编排台，把多个 AI 编程 Agent 从 Issue 一路管到 Merged"
date: "2026-11-01"
category: "AI编程开发"
rating: 4.3
price: "免费起步（Community 含 Kepler ADE）；Pro $10、Advanced $14、Business $18 每席/月（年付），首年促销约 $4-6"
subtitle: "不是又一个 AI IDE，而是架在 Agent、Git 与 Issue 跟踪器之上的交付控制平面"
url: "https://www.gitkraken.com/kepler"
pros:
  - "模型与 Agent 完全中立：原生支持 Claude Code、Codex、Copilot、Cursor、OpenCode、Gemini、Augment，按任务随时换模型不重建工作流"
  - "真正的多仓库编排：一个 Task 跨多个仓库，每个仓库自动建独立 worktree 隔离，共享上下文只写一次"
  - "从 Issue 到 Merged 的完整闭环：直拉 Jira/Linear/GitHub Issues，Agent 干完活还能在 Kepler 里审 diff、提交、开 PR"
  - "跨平台加远程可控：Win/Mac/Linux 桌面端，支持 SSH/WSL 远程与手机远程查看，团队治理有 SOC 2/SSO"
cons:
  - "本体仍是预览期产品（2026-06-15 才进公开预览），任务间通信、容器内运行、自动清理等工作流还在路线图"
  - "免费 Community 仅限公开仓库，要用 Agent 操作私有仓库必须从 Pro 起（约 $10/席/月）"
  - "偏向编排层而非编码层：Kepler 不写代码也不替代 IDE，深度改代码还得回 GitKraken Desktop 或编辑器"
  - "重度依赖外部 Agent 订阅：Kepler 本身不收模型费，但 Claude Code/Codex 等 API 成本由你承担，并发越多越贵"
alternatives:
  - { name: "Cursor", slug: "cursor", reason: "若你想要一个内嵌 Agent 的 IDE、单仓库深度编码，Cursor 的一体化体验更直接" }
  - { name: "Claude Code", slug: "claude", reason: "纯终端 Agent、subagent 委派、按 token 计费，适合已经在 CLI 里干活、不想切 GUI 的开发者" }
  - { name: "GitHub Copilot", slug: "copilot", reason: "预算敏感、只要 IDE 内补全与 Agent 模式，Copilot $10/月最便宜" }
  - { name: "DeepSeek Harness", slug: "deepseek-harness", reason: "想要开源免费、本地优先的编码 Agent 搭配可视化 GUI，可用它做 Kepler 背后的执行引擎" }
---

## 一句话总结
Kepler 适合已经在用 Claude Code / Codex / Copilot 等多个编程 Agent、且苦于「Agent 跑了一堆却没人合并」的团队与个人；不适合只想找个 IDE 替自己写代码、或完全不想付订阅费的纯个人玩家。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>内容</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Axosoft, LLC（品牌 GitKraken）</td></tr>
    <tr><td>产品形态</td><td>桌面端 Agentic Development Environment（ADE，智能体开发环境）</td></tr>
    <tr><td>公开预览首发</td><td>2026-06-15（WebDeveloper 报道为 6 月 15 日 shipped；官网博客称进入 public preview）</td></tr>
    <tr><td>支持平台</td><td>Windows 10+（x64 / ARM64）、macOS 12+（Apple Silicon / Intel）、Linux（x64 / ARM，deb/rpm/AppImage/Flatpak/AUR）</td></tr>
    <tr><td>支持 Agent</td><td>Claude Code、Codex、Copilot、Cursor、OpenCode、Gemini、Augment（Augie），均经 Agent Client Protocol（ACP）</td></tr>
    <tr><td>价格</td><td>Community 免费；Pro $10、Advanced $14、Business $18 每席/月（年付）；Kepler ADE 已包含在所有套餐</td></tr>
    <tr><td>合规与治理</td><td>SOC 2 Type II、SAML 2.0 SSO、集中式 AI 供应商治理（Advanced 起）</td></tr>
    <tr><td>用户规模（官方口径）</td><td>宣称 5000 万+ 开发者、10 万+ 组织使用 GitKraken 全家桶</td></tr>
    <tr><td>第三方评分参考</td><td>Challenging Voice 评 GitKraken 全家桶 4.2/5（2026-10 复核）</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. Task 多仓库编排（评分 4.5/5）**
Kepler 的核心抽象是 Task：一个任务可以跨多个仓库，每个仓库自动克隆并建独立 worktree 隔离，共享指令只写一次就继承到所有仓库。官方举例「数据库迁移同时动 API、worker、前端」是同一个 Task，而不是三条互不相关的分支等你手工对账。实测理念非常贴合并行 Agent 的真问题——比在三个终端标签页里各跑一个 Agent 强太多。扣 0.5 分是因为 Task 之间还不能互相通信（官方 Q&A 确认「Not yet」），跨 Task 协作仍需靠人脑串联。

**2. Agent Graph 实时可视化（评分 4.3/5）**
每个 Task、session、tool call、subagent 都在一张实时图里画出来，点任意节点能看到状态、输入和最近一次动作。这是 ADE 区别于「一堆终端」的关键：你能在小错误滚成烂摊子之前把 Agent 拽回来。对并发 5-20 个 Agent 的团队尤其有用。扣分给「实时图好看但还不能从图里直接干预执行」，编辑能力仍停留在「开终端 / 回 Desktop」。

**3. Issue / PR 直连闭环（评分 4.4/5）**
Kepler 直连 Jira、Linear、Trello、GitHub Issues、GitLab Issues、Azure DevOps，也能从 PR 反向拉 Agent 来逐行处理 review 反馈或预先自审。Agent 干完活，你在 Kepler 里开 worktree、看 diff、暂存、写 commit、开 PR，一镜到底。GitLens 19.3（2026-10-01 发布）还能从 IDE 里一键把 issue/PR 甩给 Kepler。这是它和纯 Agent 工具最大的差异化：覆盖「生成代码」到「合并代码」的最后一公里。

**4. 模型/ Agent 中立与远程（评分 4.5/5）**
任何支持 ACP 的 Agent 都能接，换模型不换工作流；支持 SSH / WSL 远程执行，也支持手机或浏览器远程查看进度、回答问题。对比 JetBrains Air（仅 macOS）和 Conductor（仅 macOS）这类 ADE，Kepler 三端全覆盖是明显优势。代价是本体不内置任何模型，模型费另算。

## 价格方案

<table>
  <thead>
    <tr><th>套餐</th><th>价格（每席/月，年付）</th><th>席位上限</th><th>关键差异</th></tr>
  </thead>
  <tbody>
    <tr><td>Community</td><td>$0</td><td>个人</td><td>含 Kepler ADE，但仅本地仓库与公开远程（公开仓库）</td></tr>
    <tr><td>Pro</td><td>$10（首年促销约 $4-6）</td><td>2</td><td>私有仓库、Jira Cloud/Trello、100 万 AI 积分/周、冲突检测</td></tr>
    <tr><td>Advanced</td><td>$14</td><td>10</td><td>自托管 Git、单域 SSO、200 万 AI 积分/周、AI 安全治理</td></tr>
    <tr><td>Business</td><td>$18</td><td>100</td><td>多域 SSO、客户成功经理、300 万 AI 积分/周、GitKraken Insights</td></tr>
    <tr><td>Enterprise</td><td>联系销售</td><td>20+</td><td>自定义安全问卷、SLA、400 万 AI 积分/周、审计日志</td></tr>
  </tbody>
</table>

价格口径来自 GitKraken 官方定价页，并由 WebCodingCenter（2026-09-25 抓取）、Outmano（2026-09-19 核验）、Challenging Voice（2026-10 复核）三处独立第三方交叉确认，标准档位一致为 $10 / $14 / $18。注意：Kepler ADE 本身已包含在免费 Community 套餐，你只需一个（免费）GitKraken 账号即可在预览期使用；只有操作私有仓库才需要升到 Pro。

## 与竞品对比

<table>
  <thead>
    <tr><th>工具</th><th>定位</th><th>多仓库并行 Agent</th><th>模型中立</th><th>价格（个人）</th><th>平台</th></tr>
  </thead>
  <tbody>
    <tr><td>Kepler</td><td>ADE 编排控制平面</td><td>原生（Task 跨仓库 + worktree 隔离）</td><td>是（7+ Agent 经 ACP）</td><td>免费起 / Pro $10 月</td><td>Win/Mac/Linux</td></tr>
    <tr><td>Cursor</td><td>内嵌 Agent 的 AI IDE</td><td>弱（单仓库为主）</td><td>部分（绑定自家 Agent + 多模型）</td><td>$20/月</td><td>Win/Mac/Linux</td></tr>
    <tr><td>Claude Code</td><td>终端 Agent</td><td>subagent 委派（同仓库）</td><td>否（Claude 系）</td><td>$20/月 + API</td><td>终端/跨平台</td></tr>
    <tr><td>GitHub Copilot</td><td>IDE 插件 Agent 模式</td><td>弱</td><td>否（OpenAI/自家模型）</td><td>$10/月</td><td>IDE 插件</td></tr>
  </tbody>
</table>

横向看，Kepler 的差异化在「编排 + 交付」而非「生成」：Cursor / Copilot 解决的是「谁来写代码」，Kepler 解决的是「一堆 Agent 写完之后谁把它们合并上线」。JetBrains Air、Conductor 等同为 ADE 的竞品目前都卡在 macOS，Kepler 的全平台与 GitKraken 十年 Git 底层是它最硬的护城河。

## 优势与短板

**优势：**
- 真·模型中立。不绑定任何一家模型厂，Claude Code / Codex / Copilot / Cursor / OpenCode / Gemini / Augment 随便换，今天这家额度不够就切那家，工作流配置不丢。
- 交付闭环最完整。从 Issue 拉需求、Agent 写码、审 diff、提交到开 PR 全在一张台面上，官方 Q&A 明确目标是「从 backlog 到 merged PR」。
- 可视化与可控性强。Agent Graph + Kanban + 控制台三视图，远程 SSH/WSL、手机查看都支持，SOC 2 / SSO 让它进了企业采购的合规门槛。
- 免费门槛低。预览期一个免费账号就能跑，私有仓库才需付费，试错成本几乎为零。

**短板：**
- 仍是预览期。官方文档多处标注 preview，任务间通信、容器内运行（Dev Containers）、自动清理 worktree、基础文件编辑都还在路线图或仅部分可用。
- 免费版只认公开仓库。要拿 Agent 碰私有代码必须 Pro 起，对纯个人开源玩家友好、对闭源个人开发者有门槛。
- 不替代编码 IDE。它自己不写代码、也不做深度编辑（diff overlay 只读），真要改还得回 GitKraken Desktop 或你的编辑器。
- 隐性模型成本高。Kepler 不收模型费，但并发 Agent 越多，背后 Claude Code / Codex 的 API 账单越厚，规模化前得先算清楚 token 账。

## 最终推荐

**建议用的人：**
- 已经在日常里同时跑 2 个以上编程 Agent（比如 Claude Code 改后端、Copilot 改前端）的开发者，Kepler 能立刻消除「谁合并了谁的改动」的混乱。
- 用 Jira / Linear 管需求、希望把 issue 直接变成 Agent 任务的团队，闭环体验是它最大的卖点。
- 需要跨仓库协调变更（微服务、monorepo 多包、前后端联动）的工程师，一个 Task 跨仓库是刚需级能力。

**不建议用的人：**
- 只想装一个能替自己写代码的 IDE、不想折腾编排层的人——直接上 Cursor 或 Copilot 更顺手。
- 完全拒绝任何订阅、只用纯开源免费方案的人——Kepler 私有仓库场景要付费，且本体非开源。
- 只在单一 macOS 环境、想要带 Docker 隔离的「完整 Agent 操作系统」的人——可以等等 JetBrains Air 的 Windows/Linux 版，或 Conductor。

**上手建议：** 先用免费 Community 账号连一个 GitHub Issue、挑 Claude Code 跑一个跨两仓库的小 Task，亲眼看 Agent Graph 把两个 worktree 的变化画出来，再决定要不要为私有仓库升 Pro。把它当「Agent 的交付控制台」而不是「下一个 IDE」，预期最准。

---

**评测声明**：本文基于作者公开信息调研与官方文档撰写。价格来自 GitKraken 官方定价页，并由 WebCodingCenter、Outmano、Challenging Voice 三处独立第三方交叉核验；功能与发布时间来自 GitKraken 官网博客、帮助中心与 WebDeveloper 报道；用户评价引用官方 Kepler 页面公开署名证言。本文不含付费推广。
