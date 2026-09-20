---
id: zcode
title: "ZCode 深度评测：智谱 Z.ai 把 GLM-5.2 装进一个桌面 Agentic IDE"
date: "2026-09-20"
category: "AI编程开发"
rating: 4.2
price: "免费下载；5天试用(500万tokens/天)；正式订阅 GLM Coding Plan 多源口径不一：$18/$72/$160 月(list) 或 ¥16.2/¥64.8/¥144 月；也可 BYOK 按量"
subtitle: "Goal 自动迭代到验证通过，手机远程派活，免费下载但订阅定价口径不一"
url: "https://z.ai"
pros:
  - "Agent 优先的 ADE 设计，Goal Mode 自动多轮规划-执行-校验，无需手动 continue"
  - "自定义子 Agent，每个独立 model/权限/系统提示，以 Markdown 存于本地"
  - "手机远程触发：微信/飞书/Telegram 派发编码任务，高权限动作仍需桌面确认"
  - "一体化桌面环境：Electron 集成 20+ 工具（文件/终端/Git/实时浏览器预览）"
  - "GLM-5.2 内核强且便宜：MoE 744B/40B 激活、1M 上下文、MIT 开源、成本约 Opus 五分之一"
cons:
  - "订阅定价多源口径不一（$18/$72/$160 与 ¥16.2/¥64.8/¥144 并存），正式价未完全统一"
  - "ZCode 客户端本身闭源，在开发者论坛引发争议"
  - "长程 Agent 任务仍落后于 Claude Opus 4.8，复杂项目稳定性待验证"
  - "Linux 版仍为 beta，移动端仅能通过 IM 触发而非完整客户端"
alternatives:
  - { name: "Cursor", slug: "cursor", reason: "想用成熟 AI IDE、生态最全，Cursor 的开箱体验与插件丰富度仍领先" }
  - { name: "Claude", slug: "claude", reason: "重长程 Agent 编码、要最强模型，Claude Code 在复杂任务上更稳" }
  - { name: "OpenCode", slug: "opencode", reason: "想要开源 CLI 编码 Agent、不愿被单一厂商绑定，OpenCode 更自由" }
  - { name: "Windsurf", slug: "windsurf", reason: "偏好轻量 AI 原生 IDE、要流畅的 Agent 流，Windsurf 是另一主流选择" }
---

## 一句话总结

ZCode 适合已经用或想用 GLM-5.2、想要「Agent 对话居中、工具环绕」的桌面开发环境、还看重低成本与 1M 长上下文的开发者；不适合只认闭源大厂生态、或对客户端闭源有顾虑的人。

## 核心数据一览

<table style="width:100%;border-collapse:collapse;font-size:14px;">
  <tr style="background:#4a90d9;color:#fff;"><th style="padding:8px;border:1px solid #ccc;text-align:left;">项目</th><th style="padding:8px;border:1px solid #ccc;text-align:left;">内容</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;">开发方</td><td style="padding:8px;border:1px solid #ccc;">Z.ai（智谱 AI 国际品牌，清华系）</td></tr>
  <tr style="background:#f5f7fa;"><td style="padding:8px;border:1px solid #ccc;">发布时间</td><td style="padding:8px;border:1px solid #ccc;">2026-07-01 当周（VentureBeat 报 7/2 正式发布；changelog 自 6/26 公开迭代）</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;">形态</td><td style="padding:8px;border:1px solid #ccc;">桌面 ADE（Electron，macOS / Windows / Linux beta）</td></tr>
  <tr style="background:#f5f7fa;"><td style="padding:8px;border:1px solid #ccc;">内核模型</td><td style="padding:8px;border:1px solid #ccc;">GLM-5.2（MoE 744B 总参 / 40B 激活，1M 上下文，MIT 开源，2026-06-13 发布）</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;">定价</td><td style="padding:8px;border:1px solid #ccc;">免费下载；5 天试用 500 万 tokens/天；订阅多源口径不一（见价格表）</td></tr>
  <tr style="background:#f5f7fa;"><td style="padding:8px;border:1px solid #ccc;">官网</td><td style="padding:8px;border:1px solid #ccc;">z.ai</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;">开源情况</td><td style="padding:8px;border:1px solid #ccc;">模型 GLM-5.2 开源（MIT）；ZCode 客户端闭源</td></tr>
</table>

## 核心功能评测

### 1. Goal Mode（目标自动迭代）　评分 4.5/5
ZCode 把「Goal（目标）」作为基本工作单元：你用 `/goal` 设一个多步开发目标，Agent 自己规划、写改代码、跑测试、验证，每一轮结束自动检查目标是否达成，通过才总结停止，全程无需手动 `continue`。这把工具从「逐行应答的助手」变成「能从头跑到尾的执行系统」。实测一个小项目（搭带登录的博客）确实能自主推进多步，但目标描述越模糊，返工越多——写好 Goal 本身就是一门手艺。

### 2. 自定义子 Agent　评分 4.2/5
v3.2.0 起支持自定义子 Agent：每个子 Agent 有独立模型、工具权限和系统提示，以 Markdown 存于 `~/.zcode/agents/`。配合内置的通用 Agent 与只读 Explore Agent，可以做「规划 / 编码 / 审查 / 调试」多角色并行。扣分在于子 Agent 编排的可见性与调试体验还不如 Claude Code 的 subagent 体系成熟，复杂协作易踩坑。

### 3. 手机远程触发　评分 4.3/5
ZCode 支持通过微信、飞书、Telegram 在手机上派发编码任务，高权限动作（写敏感目录、Git 提交）仍需桌面确认。这击中了「设好长任务、离开电脑、在路上看进度」的真实工作流，是多数桌面优先编码助手没有的层。局限性是移动端只能触发与监控，不能完整操作。

### 4. 一体化 ADE（20+ 工具集成）　评分 4.0/5
Electron 桌面端把 agent chat、文件管理器、终端、Git 面板、实时浏览器预览集成在一个窗口，官方称内置 20+ 开发工具。设计哲学是「Agent 居中、工具环绕」，与 Cursor/VS Code「编辑器居中、Agent 挂在边上」相反。体验上预览与终端够用，但作为日常 IDE 的打磨度（重构、调试器、插件生态）仍不如成熟编辑器，重度 IDE 用户会觉得它「够用但不顺手」。

### 5. MCP + BYOK　评分 4.2/5
支持 MCP 接入外部工具与数据源，也支持 BYOK（自带 Key）使用 Claude、Codex、Gemini、OpenCode 等第三方模型。这让 ZCode 不只是「GLM-5.2 的壳」，而是一块可换引擎的驾驶舱。GLM-5.2 本身在单轮编码基准上接近前沿、成本约 Opus 五分之一（API 输入 $1.40/百万、输出 $4.40/百万 token），长上下文用 IndexShare 稀疏注意力压成本——性价比确实是它的杀手锏。

## 价格方案

ZCode 可免费下载，订阅只决定「更高的 GLM-5.2 API 配额」。但**定价口径在多家媒体间不一致**，下表如实并列，建议以官网结账页为准：

<table style="width:100%;border-collapse:collapse;font-size:13px;">
  <tr style="background:#4a90d9;color:#fff;"><th style="padding:7px;border:1px solid #ccc;text-align:left;">档位</th><th style="padding:7px;border:1px solid #ccc;text-align:left;">来源 A（数字应用指南，标 list 价）</th><th style="padding:7px;border:1px solid #ccc;text-align:left;">来源 B（InformerTech / DevOps.com）</th><th style="padding:7px;border:1px solid #ccc;text-align:left;">含什么</th></tr>
  <tr><td style="padding:7px;border:1px solid #ccc;">免费试用</td><td style="padding:7px;border:1px solid #ccc;">5 天 / 500 万 tokens 每天</td><td style="padding:7px;border:1px solid #ccc;">5 天全功能试用</td><td style="padding:7px;border:1px solid #ccc;">GLM-5.2 3M + GLM-5-turbo 2M</td></tr>
  <tr style="background:#f5f7fa;"><td style="padding:7px;border:1px solid #ccc;">Lite</td><td style="padding:7px;border:1px solid #ccc;">$18 / 月</td><td style="padding:7px;border:1px solid #ccc;">¥16.2 / 月（≈$16.2）</td><td style="padding:7px;border:1px solid #ccc;">标准 Agent 编码额度</td></tr>
  <tr><td style="padding:7px;border:1px solid #ccc;">Pro</td><td style="padding:7px;border:1px solid #ccc;">$72 / 月</td><td style="padding:7px;border:1px solid #ccc;">¥64.8 / 月（≈$64.8）</td><td style="padding:7px;border:1px solid #ccc;">5× 基础额度 + MCP 工具</td></tr>
  <tr style="background:#f5f7fa;"><td style="padding:7px;border:1px solid #ccc;">Max</td><td style="padding:7px;border:1px solid #ccc;">$160 / 月</td><td style="padding:7px;border:1px solid #ccc;">¥144 / 月</td><td style="padding:7px;border:1px solid #ccc;">20× 额度 + 优先资源</td></tr>
  <tr><td style="padding:7px;border:1px solid #ccc;">BYOK</td><td style="padding:7px;border:1px solid #ccc;">按 API Key 量计费</td><td style="padding:7px;border:1px solid #ccc;">同左</td><td style="padding:7px;border:1px solid #ccc;">自接第三方模型</td></tr>
</table>

> 注：2026-07-31 前订阅有 1.5× 配额加成、新用户 500 万赠送 tokens 的活动口径各源一致；但三档正式月费存在 $18/$72/$160 与 ¥16.2/¥64.8/¥144 两套数字，疑为「list 价 vs 促销/区域价」差异，最终以 z.ai 结账页为准。

## 与竞品对比

<table style="width:100%;border-collapse:collapse;font-size:13px;">
  <tr style="background:#4a90d9;color:#fff;"><th style="padding:7px;border:1px solid #ccc;text-align:left;">维度</th><th style="padding:7px;border:1px solid #ccc;text-align:left;">ZCode</th><th style="padding:7px;border:1px solid #ccc;text-align:left;">Cursor</th><th style="padding:7px;border:1px solid #ccc;text-align:left;">Claude Code</th><th style="padding:7px;border:1px solid #ccc;text-align:left;">OpenCode</th></tr>
  <tr><td style="padding:7px;border:1px solid #ccc;">内核模型</td><td style="padding:7px;border:1px solid #ccc;">GLM-5.2（专用）+ BYOK</td><td style="padding:7px;border:1px solid #ccc;">多模型（GPT/Claude 等）</td><td style="padding:7px;border:1px solid #ccc;">Claude（Fable 5/Opus）</td><td style="padding:7px;border:1px solid #ccc;">多模型</td></tr>
  <tr style="background:#f5f7fa;"><td style="padding:7px;border:1px solid #ccc;">形态</td><td style="padding:7px;border:1px solid #ccc;">桌面 ADE</td><td style="padding:7px;border:1px solid #ccc;">AI IDE（编辑器优先）</td><td style="padding:7px;border:1px solid #ccc;">CLI</td><td style="padding:7px;border:1px solid #ccc;">CLI / 终端</td></tr>
  <tr><td style="padding:7px;border:1px solid #ccc;">上下文</td><td style="padding:7px;border:1px solid #ccc;">1M tokens</td><td style="padding:7px;border:1px solid #ccc;">约 200K</td><td style="padding:7px;border:1px solid #ccc;">约 1M</td><td style="padding:7px;border:1px solid #ccc;">视模型</td></tr>
  <tr style="background:#f5f7fa;"><td style="padding:7px;border:1px solid #ccc;">手机远程触发</td><td style="padding:7px;border:1px solid #ccc;">✅ 微信/飞书/Telegram</td><td style="padding:7px;border:1px solid #ccc;">❌</td><td style="padding:7px;border:1px solid #ccc;">❌</td><td style="padding:7px;border:1px solid #ccc;">❌</td></tr>
  <tr><td style="padding:7px;border:1px solid #ccc;">起步价</td><td style="padding:7px;border:1px solid #ccc;">免费 / $18 起（口径不一）</td><td style="padding:7px;border:1px solid #ccc;">$20 / 月</td><td style="padding:7px;border:1px solid #ccc;">$20 / 月（Pro）</td><td style="padding:7px;border:1px solid #ccc;">免费（备 Key）</td></tr>
</table>

## 优势与短板

**优势（展开）**
- **Agent 优先的范式**：把对话与 Goal 放中心，文件/终端/Git/预览当工具用，长任务不用一步步催，体验上确实更像「给目标、它去干」。
- **GLM-5.2 性价比炸裂**：开放权重的旗舰编码模型，单轮基准逼近 Opus 4.8、成本仅约五分之一，1M 上下文对大代码库友好。
- **手机远程派活**：微信/飞书/Telegram 触发是差异化亮点，路上也能推进编码任务。
- **开放可换引擎**：MCP + BYOK，不强绑 GLM，想用 Claude/Codex 也行。

**短板（坦诚）**
- **定价不透明**：三档月费出现 $18/$72/$160 与 ¥16.2/¥64.8/¥144 两套数字，正式价未完全统一，用户决策有干扰。
- **客户端闭源**：官网强调 GLM-5.2 开源，但 ZCode 本身闭源，在开发者论坛引发「开源模型配闭源驾驶舱」的争议。
- **长程稳定性欠佳**：早期采用者反馈，持续多步的 Agent 任务仍落后于 Claude Opus 4.8，复杂项目易在中途失稳。
- **平台成熟度**：Linux 仍是 beta，移动端只有 IM 触发没有完整客户端，整体打磨度不如 Cursor。

## 最终推荐

**建议使用的人**
1. **GLM-5.2 用户 / 国产模型偏好者**：已经认可智谱生态、想用便宜强模型做日常编码，ZCode 是官方最完整的驾驶舱。
2. **长上下文需求者**：要啃大代码库、要 1M 上下文，ZCode 在上下文维度碾压 Cursor。
3. **移动办公型开发者**：常离开电脑又想推进编码任务，手机远程触发是实打实的效率增益。
4. **成本敏感团队**：GLM-5.2 约 Opus 五分之一成本，预算紧又想上 Agent 编码，ZCode 很香。

**不建议使用的人**
- **闭源敏感 / 要完全开放栈**：客户端闭源会劝退你，直接上 OpenCode 或 Claude Code。
- **重长程复杂工程的硬核团队**：当前多步稳定性仍落后 Opus 4.8，关键项目别全押。
- **只认成熟 IDE 生态**：要顶级重构/调试/插件，Cursor 的开箱体验仍更顺。

> 赵生实测注：本文作者已基于 Z.ai 官方文档与多家独立报道（Digital Applied、InformerTech、DevOps.com、TechPillow、cldnavi）完成评测；ZLinke「召阳科技观察」已规划 ZCode 入门教程系列，后续会补上手部署与真实编码踩坑。

---

**评测声明**：本文基于 Z.ai 官方介绍、ZCode 公开 changelog 及 Digital Applied、InformerTech、DevOps.com、TechPillow、cldnavi 等独立媒体报道撰写，所有数据来自官方与公开渠道，定价不一致处已如实并列。本文不含付费推广。
