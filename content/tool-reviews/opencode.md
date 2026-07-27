---
id: opencode
title: "OpenCode 深度评测：把 AI 编程的控制权交还给你"
date: "2026-07-24"
category: "AI编程开发"
rating: 4.6
price: "免费开源 / Go $10月 / Zen 按量付费 / Black 暂停招募"
subtitle: "开源终端 AI 编程代理，75+ 模型随意切换，模型自由与隐私优先的终极形态"
url: "https://opencode.ai"
pros:
  - "模型完全自由：75+ 提供商 + 自带 API Key + 本地模型，一个工具切换所有模型"
  - "MIT 开源可审计、可自托管，不存储任何代码与上下文，隐私与合规首选"
  - "LSP 原生代码理解，Agent 读的是真实类型图谱而非纯文本，补丁一次编译通过率高"
  - "多 Session 并行 Agent + Build/Plan 双模式 + 会话分享，复杂项目可拆轨道同时推进"
cons:
  - "无行内 Tab 补全，纯 Agent 模式，对依赖实时补全的开发者体验不如 Cursor"
  - "实测比 Claude Code 慢约 78%，上下文在约 5 万行代码后明显退化"
  - "发布节奏过快，版本间偶有功能回退；企业合规缺 SOC 2 / HIPAA 认证"
alternatives:
  - name: "Cursor"
    slug: "cursor"
    reason: "要最强行内补全 + 完整 GUI IDE + Cloud Agents，且预算 $20/月、网络顺畅"
  - name: "Claude Code"
    slug: "claude"
    reason: "认准 Claude 模型、要最快单 Agent 执行速度和最稳体验"
  - name: "GitHub Copilot"
    slug: "copilot"
    reason: "不想换终端工作流、要原生 PR 审查与 CI/CD 集成、最低 $10/月"
  - name: "Windsurf"
    slug: "windsurf"
    reason: "想要本地 Cascade Agent 加云端 Devin 代理的本地规划加云端执行闭环"
---

## 一句话总结

OpenCode 适合住在终端里、想把模型选择权和控制权攥在自己手里的开发者；不适合依赖行内补全、追求最快单 Agent 速度、或需要企业级合规认证的团队。

## 核心数据一览

<table>
  <thead>
    <tr><th>维度</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Anomaly（原 SST / Serverless Stack，terminal.shop 团队，YC W2021，多伦多，约 8 人远程）</td></tr>
    <tr><td>最新版本</td><td>v1.18.3（2026-07-16，Desktop v2 迁移完成）</td></tr>
    <tr><td>GitHub Stars</td><td>175K–188K（2026 年中，theaiagentindex / blog.imseankim 等多源；官网首页 26K 文案已严重过时）</td></tr>
    <tr><td>月活开发者</td><td>官方称 20 万+；第三方估算 500 万–750 万</td></tr>
    <tr><td>贡献者 / 提交</td><td>约 900 名贡献者、13,000+ 次提交、824+ 次发布</td></tr>
    <tr><td>许可证</td><td>MIT 开源，可审计、可 fork、可自托管</td></tr>
    <tr><td>模型支持</td><td>75+ 提供商（Claude / GPT / Gemini / 本地），经 Models.dev 接入</td></tr>
    <tr><td>价格</td><td>免费（BYOK）/ Go $10 月 / Zen 按量 / Black 暂停招募</td></tr>
    <tr><td>行业地位</td><td>LogRocket 2026 年 6 月 AI 开发工具实力榜 #1；2026-03-20 Hacker News 日榜 #1（1,099 分）</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 模型无关架构（评分 5/5）**
OpenCode 的护城河就是一句话：模型是可替换组件。它经 Models.dev 接入 75+ 提供商，Claude、GPT、Gemini、Qwen、DeepSeek、本地 Ollama 都能用，且可在同一界面按任务或按 Session 切换。你不再被单一厂商锁定——别人一次调价你就得重建肌肉记忆，OpenCode 让你换模型不换工具。对国内用户尤其友好：火山方舟、阿里百炼、月之暗面等国内 API 直连，无需翻墙。这是 2026 年 AI 编程赛道里最彻底的控制权释放。

**2. LSP 原生代码理解（评分 4.5/5）**
不同于把代码当纯文本的 Agent，OpenCode 自动加载对应语言的 LSP（TypeScript / Pylance / Pyright 等），让模型读的是真实类型图、导入关系和诊断信息。实测：让它重构一段 Go 函数，它基于类型理解给出首次编译即通过的改动；交付一个约 15 文件的 REST API，约 80% 代码零修改。这把「看起来对、编不过」的幻觉率压低了一截。

**3. 多 Session 并行 Agent（评分 4.5/5）**
同一项目可同时开多个独立上下文的 Agent：一个跑测试迁移、一个写文档、一个查 flaky bug，互不阻塞。Agent 越来越自主后，瓶颈从「单个模型多快」变成「你能监督几条并行轨道」——终端原生设计让开新 Session 的成本极低。这是 Claude Code 单 Session 模式给不了的能力。

**4. Build / Plan 双模式 + 会话分享（评分 4.5/5）**
Tab 键在 Build（可写文件、跑命令）和 Plan（只读分析、默认拒绝文件改动）间切换。任何非平凡任务先 Plan 看方案、再 Build 执行，避免误改。配合 `/share` 生成可分享链接，异步 code review 和结对调试不用再截图终端。客户端/服务端架构还能在一台机器跑、另一台（甚至手机）驱动。

**5. 隐私优先 / 开源可审计（评分 5/5）**
官方明确不存储任何代码或上下文数据，支持完全离线、air-gapped 运行，是受监管行业和敏感代码库的首选。MIT 许可证意味着每一行改进都保持开放——这也解释了它「被自己社区审计」的著名事件：曾有开发者用 mitmproxy 发现旧版 v1.2.x 默认把会话标题发给 Grok 免费档（即便只配了本地模型），问题在 v1.2.23 即被修复。black box 工具出了同类问题，你永远看不到。

## 价格方案

<table>
  <thead>
    <tr><th>方案</th><th>价格</th><th>包含内容</th><th>适合谁</th></tr>
  </thead>
  <tbody>
    <tr><td>Open Source（免费）</td><td>$0（MIT）</td><td>完整 CLI / TUI / 桌面 / IDE 扩展；自带任意 API Key；本地模型；多 Session；LSP；MCP；可自托管</td><td>自带 Key 或跑本地模型的终端党</td></tr>
    <tr><td>Go</td><td>首月 $5，之后 $10/月</td><td>精选开源编码模型（GLM-5.2、Qwen3.7 Max、Kimi K2.7 Code、DeepSeek V4 Pro/Flash、MiniMax M3、MiMo-V2.5-Pro）；全球多区托管；按窗口/周/月限流</td><td>不想管 Key、要廉价托管模型</td></tr>
    <tr><td>Zen（按量）</td><td>$20 预充值，零加价</td><td>Anomaly 实测基准化的模型；余额低于 $5 自动续充；可用于任意 Agent，不仅限于 OpenCode</td><td>多工具通用、要稳定模型质量</td></tr>
    <tr><td>Black</td><td>$20 / $100 / $200 月（暂停招募）</td><td>经企业 API 网关平价接入 Claude / GPT / Gemini + 开源权重</td><td>原需 flat-rate 大团队（现已暂停）</td></tr>
    <tr><td>Claude Pro/Max 登录</td><td>原 $20（已移除）</td><td>复用现有 Claude 订阅；2026-01-09 Anthropic 撤销 OAuth 后下线</td><td>—（历史功能）</td></tr>
  </tbody>
</table>

典型 BYOK 月成本：Claude Sonnet 约 $10–30、GPT 约 $5–20、Gemini 约 $3–15；本地模型 $0（仅硬件电费）。软件本身始终免费。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>OpenCode</th><th>Cursor</th><th>Claude Code</th></tr>
  </thead>
  <tbody>
    <tr><td>授权 / 价格</td><td>MIT 免费 + BYOK；Go $10/月</td><td>专有，$20/月 Pro 起</td><td>专有，$20/月 Pro、$100/月 Max</td></tr>
    <tr><td>主界面</td><td>终端 TUI + 桌面 Beta + IDE 扩展</td><td>AI 原生 GUI IDE（VS Code Fork）</td><td>终端 Agent</td></tr>
    <tr><td>模型</td><td>75+ 提供商 + 本地</td><td>精选主流模型</td><td>仅 Claude</td></tr>
    <tr><td>行内 Tab 补全</td><td>无</td><td>有（无限，Pro）</td><td>无</td></tr>
    <tr><td>多 Session 并行</td><td>有</td><td>无（单 Session）</td><td>无</td></tr>
    <tr><td>Cloud Agents</td><td>无</td><td>有（Pro+ / Ultra）</td><td>有</td></tr>
    <tr><td>执行速度</td><td>较 Claude Code 慢约 78%（Builder.io 实测）</td><td>快</td><td>最快</td></tr>
    <tr><td>国内直连</td><td>友好（8.8/10）</td><td>需代理（4/10）</td><td>需代理</td></tr>
    <tr><td>编程能力评分</td><td>7.5/10（CodePick 2026-04）</td><td>9.5/10</td><td>≈9.5/10</td></tr>
  </tbody>
</table>

注：OpenCode 编程上限取决于你接入的模型——接 Claude Opus 4.6 或 GPT-5，输出质量显著提升；它缺的是专属行内补全和自研优化模型。

## 优势与短板

**优势**
- **控制权**：模型、机器、终端、规则全在你手里，可完全离线运行，是合规敏感团队的硬需求。
- **经济性**：软件零成本，轻度使用接本地模型月费可压到 $0；即便接 API，也比单供应商订阅灵活，且可中途换提供商避开限流。
- **生态势能**：175K–188K Stars、约 900 贡献者、824+ 次发布，LogRocket 2026 年 6 月实力榜登顶，社区动量真实。
- **LSP + 多 Session**：结构化代码理解 + 并行轨道，是复杂项目的生产力倍增器。

**短板**
- **无行内补全**：纯 Agent 模式，靠 Cmd/Ctrl+K 触发，实时补全体验不如 Cursor 的 Tab 超级补全。
- **速度落差**：Builder.io 同任务实测 OpenCode 比 Claude Code 慢约 78%；它多写 21 个测试、多抓边界 case，但赶 deadline 时慢就是慢。
- **上下文退化**：约 5 万行代码后上下文质量明显下滑，超大单体仓库吃力。
- **稳定性与合规**：发布节奏过快，版本间偶有功能回退；无 SOC 2 / HIPAA，企业采购硬约束。2026-01-09 Anthropic 撤销 OAuth 后 Claude Pro/Max 登录下线，是「供应商依赖」风险的活教材。

## 最终推荐

**以下人群直接用 OpenCode：**
- 终端党，习惯 TUI / shell / 远程主机工作流，不想迁移到新 IDE；
- 预算敏感或想以最低门槛体验 AI Agent，本地模型月费可压到 $0；
- 在中国大陆需要无代理直连主流模型（方舟 / 百炼 / 月之暗面）；
- 要同时开多个 AI Session 并行处理不同任务，或有自己心仪的编辑器；
- 受监管行业 / 敏感代码库，要求可审计、可自托管、不落云端。

**以下人群另选他工具：**
- 追求最强行内补全和「开箱即用」GUI 体验 → Cursor（$20/月，Tab 超级补全 + Cloud Agents）；
- 只认 Claude、要最快单 Agent 执行 → Claude Code（$20/月 Pro）；
- 要原生 PR 审查、CI/CD、团队 SSO → GitHub Copilot（$10/月）；
- 要本地规划 + 云端执行闭环 → Windsurf（Cascade + Devin 代理）。

**组合建议**：OpenCode 不是 Cursor 的替代品，二者互补。把它当作「模型自由的终端执行层」，搭配你已有的 IDE；重度生产交给 Cursor/Claude Code，探索性、隐私敏感、多轨道并行任务交给 OpenCode。唯一前提：你得愿意自己管 API Key、接受略慢但更可控的节奏。

---

**评测声明**：本文基于官方文档（opencode.ai、GitHub Releases / Changelog）、第三方独立评测（LogRocket 2026-06 实力榜、CodePick 2026-04 对比、Builder.io 速度实测、theaiagentindex / AgentConn / dev.to 多篇评测）与公开 HN 讨论撰写。所有数据来自官方与独立来源，未作付费推广。文中 GitHub Stars、月活等动态指标以 2026 年中多源收敛值为准，请以官网最新数据核对。
