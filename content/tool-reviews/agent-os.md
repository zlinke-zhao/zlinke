---
id: agent-os
title: "Agent OS 深度评测：把一堆 AI 编程 Agent 收进一个工作台，它还缺什么"
date: "2026-10-16"
category: "AI工作台"
rating: 4.3
price: "免费开源（Apache-2.0）；无订阅、无按量账单，需自备 Claude Code/Codex 等 CLI 额度"
subtitle: "AIUtil 开源、本地优先的 AI 编程 CLI 操作层实测"
url: "https://agentos.aiutil.com"
pros:
  - "开源免费且本地优先：Apache-2.0 全平台可用，会话/记忆/知识默认存本机，无订阅无二次账单"
  - "功能最完整的元工作台：分层记忆图 + Markdown 知识库 + Cron 定时 + 交付物审阅门，库内同类最全"
  - "人仍在回路里：执行事件/重试/交付物全程留痕，结论进 Review 才允许标 Done，不黑盒"
  - "消息通道直接下指令：飞书/个人微信/企业微信/Telegram/WhatsApp 作统一入口，/agents、/use 切换 Agent"
cons:
  - "仍是早期项目：v0.4.2、2026-07 才首个 AIUtil Release，独立基准与大规模用户验证少"
  - "不替你付 token：强依赖你已装好 Claude Code/Codex 等 CLI 并自备额度，纯小白上手有门槛"
  - "早期曝光有限：Product Hunt 2026-08-27 首发，当月票数很少、排名靠后，社区生态仍在成形"
alternatives:
  - { name: "Nami", slug: "nami", reason: "同属元工作台/调度层，免费开源、Mac 优先，是 Agent OS 最直接的同路线替代" }
  - { name: "Cua Spaces", slug: "cua-spaces", reason: "已评测，macOS 优先的隔离桌面环境层，要的是可监督桌面而非管理已有 CLI" }
  - { name: "MOOGH", slug: "moogh", reason: "Windows 原生桌面 Agent，按量付费无订阅，要每步审批+本地执行而非多 Agent 编排" }
---

## 一句话总结
Agent OS 适合已经高频使用多个 AI 编程 Agent、被一堆终端窗口和追不回的上下文折磨的开发者；不适合只想找一个聊天式 Agent、或完全没有 Claude Code/Codex 等 CLI 使用经验的小白。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>AIUtil</td></tr>
    <tr><td>产品形态</td><td>开源、本地优先的桌面 Agent 工作台（macOS / Windows / Linux）</td></tr>
    <tr><td>最新版本</td><td>v0.4.2（官网 Product Hunt 页标注）</td></tr>
    <tr><td>开源协议</td><td>Apache-2.0</td></tr>
    <tr><td>价格</td><td>免费，无订阅、无按量账单</td></tr>
    <tr><td>支持 CLI</td><td>8 种主流 AI 编程 CLI（含 Claude、Codex、Gemini、Pi 等）</td></tr>
    <tr><td>消息通道</td><td>飞书 / 个人微信 / 企业微信 / Telegram / WhatsApp</td></tr>
    <tr><td>首发时间</td><td>2026-08-27（Product Hunt）</td></tr>
    <tr><td>官方站</td><td>https://agentos.aiutil.com</td></tr>
  </tbody>
</table>

## 核心功能评测

Agent OS 的命题很明确：它不替代任何模型或 CLI，而是给高频使用 AI 编程 Agent 的人补一层「操作系统层」——把 Claude / Codex / Gemini / Pi 等的会话、任务、运行记录、交付物收进同一桌面工作台，并排比较、人工审阅后再标记 Done，把可靠结论沉淀成分层记忆与 Markdown 知识。下面按官方站 v0.4.2 工作流逐一评测。

**1. 统一运行与多面板对比（4.5 / 5）**
一处管理本地或授权远程节点上的多终端、多模型。Web、CLI 与多个 Agent 输出可并排比较，单独或批量发送指令、择优采纳。这是它最核心的痛点解法——开发者不用再在十几个终端窗口之间来回切。实测描述与 SheepNav、AgentSpot 等第三方档案一致：多代理支持、集中会话管理、并排对比是官方主打能力。

**2. 任务生命周期与交付物审阅门（4.5 / 5）**
Todo / In Progress / Review / Done 四阶段看板。每一次运行都保留自己的事件、重试与可交付物；最终响应在可用时进入交付物审阅，结果先到 Review、再核对关联会话、最后才确认 Done。ai-toolbase 的评测把它概括为「mission-control 界面」——让人从盯每个终端转向「分配任务、看状态、验产物」，这正是多数桌面 Agent 只给结果、不给人审阅门所缺失的一环。

**3. 分层记忆与 Markdown 知识库（4.3 / 5）**
分层记忆（按人格 / 工作 / 项目语境）加 Markdown 知识文章（图谱 / 标签 / 全文搜索），跨 Agent 不割裂。关键设计是「记忆与知识分离，长文不污染 Agent 上下文」。知识库支持草稿、发布、收藏、本地评论与全文搜索。这是 Agent OS 相对同类调度层最显式的差异化壁垒。

**4. Cron 定时与远程 Runtime（4.2 / 5）**
单次计划任务加 Cron 定时（含时区与错过策略），关掉 App 也能续跑任务——Runtime 守护进程拥有调度、序列化工作区并保留结果。授权远程 Runtime Host 由被托管端自行批准能力与目录，控制端仅做方向性授权。对本地 DevOps / 自动化维护者价值高，但需注意它仍依赖你已有的机器与 CLI。

**5. 消息通道接入（4.0 / 5）**
飞书 / 个人微信 / 企业微信 / Telegram / WhatsApp 作统一入口，用 /agents、/use 切换 Agent 并保留独立会话。这让「不在主电脑旁也能把活交给对的机器」成为现实。短板是消息通道的可靠性与国内大模型接入仍待真实用户验证。

## 价格方案

Agent OS 目前只有一种「价格」：免费开源。它的商业化克制，但明确不替你付模型 token，这是使用它的隐性前提。

<table>
  <thead>
    <tr><th>费用项</th><th>价格</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>软件授权</td><td>免费（Apache-2.0 开源）</td><td>无订阅、无按量、无席位费</td></tr>
    <tr><td>数据托管</td><td>免费</td><td>会话 / 记忆 / 知识默认存本机，隐私可控</td></tr>
    <tr><td>模型调用</td><td>自备额度</td><td>需已有的 Claude Code / Codex 等 CLI 订阅或 API Key，Agent OS 不替你付 token</td></tr>
    <tr><td>远程节点</td><td>免费（自托管）</td><td>授权自有机器作 Runtime Host，无平台抽成</td></tr>
    <tr><td>企业 / 托管云</td><td>暂无官方付费档</td><td>早期阶段，未推出 Teams / Enterprise 订阅</td></tr>
  </tbody>
</table>

对比库内同类：Nami 同样免费开源但 Mac 优先；MOOGH 按量付费（$1 = 60 积分、无闲置费）；Cua Spaces 在自有机器上免费、云端按云厂商计费。Agent OS 在「免费 + 三端全平台 + 不抽成」上是最克制的一档。

## 与竞品对比

把库内四款桌面智能体摆在一起看，它们的定位差异比想象中清晰——Agent OS 与 Nami 是「调度层 / 元工作台」，MOOGH 是「执行 Agent」，Cua Spaces 是「Agent 待的那块桌面」。

<table>
  <thead>
    <tr><th>维度</th><th>Agent OS（AIUtil）</th><th>Nami（Dainami）</th><th>MOOGH（aimoogh）</th><th>Cua Spaces</th></tr>
  </thead>
  <tbody>
    <tr><td>定位</td><td>元工作台 / 操作层</td><td>元工作台 / 调度层</td><td>Windows 原生执行 Agent</td><td>Agent 待的隔离桌面</td></tr>
    <tr><td>价格</td><td>免费开源</td><td>免费开源</td><td>$1=60 积分按量</td><td>自有机免费 / 云付费</td></tr>
    <tr><td>平台</td><td>三端全平台</td><td>Mac 优先</td><td>Windows 原生</td><td>macOS 优先</td></tr>
    <tr><td>记忆 / 知识</td><td>分层记忆 + Markdown 知识库</td><td>无独立记忆层</td><td>行动历史留痕</td><td>会话锁本地 Keyvault</td></tr>
    <tr><td>定时任务</td><td>Cron + 错过策略</td><td>无</td><td>无</td><td>无</td></tr>
    <tr><td>消息通道</td><td>飞书/微信/Telegram/WhatsApp</td><td>无</td><td>无</td><td>无</td></tr>
  </tbody>
</table>

结论：如果你要的是「把已有的强 Agent 们统管起来、记忆能沉淀、关 App 也能续跑」，Agent OS 是四款里功能最全的；如果你只在 Mac 上、想要更轻的并排调度，Nami 更省心；如果你要的是「AI 真在本机改文件、每步审批」，MOOGH 更对口；如果你要的是「给 Agent 一块可监督的隔离桌面」，那是 Cua Spaces 的活。

## 优势与短板

**优势**
- 开源透明：Apache-2.0、三端全平台、数据默认本机，不锁模型也不锁平台，比多数商业桌面 Agent 更克制。
- 功能完整度领先同类调度层：分层记忆图 + Markdown 知识库 + Cron 定时 + 交付物审阅门 + 消息通道，几乎把「多 Agent 协作」该有的管理件一次性补齐。
- 人在回路：每一步执行事件、失败与重试、交付物都留痕，结论进 Review 才允许标 Done，杜绝黑盒交付。
- 跨设备续跑：授权远程 Runtime + 关 App 也能跑的 Cron，对多机党 /  solo 工作室是真痛点解法。

**短板**
- 早期项目：v0.4.2、2026-07 才首个 AIUtil Release，独立基准少，长期可靠性与大规模用户验证仍待观察。
- 上手门槛：强依赖你已装好 Claude Code / Codex 等 CLI 并自备额度，纯小白直接劝退；作者称其为「编程 Agent 工作台」，偏 dev 向。
- 曝光有限：Product Hunt 2026-08-27 首发，当月票数很少、排名靠后（nowfound 记录为当月 23,280 个发布中排名靠后），社区生态仍在成形；macOS 版未经 Apple 公证需手动放行并核对 SHA256。
- 国内适配待验证：国内大模型接入、中文支持与微信通道实际可用性，需赵生后续亲测校准。

## 最终推荐

**推荐使用的人**
- 同时跑 Claude Code / Codex / Gemini / Pi 等多个 CLI、被一堆终端窗口和追不回的上下文折磨的开发者或技术负责人。
- 需要把一次性答案沉淀成可召回记忆与可阅读知识、构建个人 / 团队「智慧库」的人。
- 有多台机器、希望关掉电脑也能让定时任务续跑的 solo 工作室或本地 DevOps。
- 重视隐私与透明、希望数据存本机、不愿被订阅和积分绑死的人。

**不推荐 / 暂缓的人**
- 只是偶尔让 AI 改一个文件、单 Agent 工具更轻，别为「操作层」增加复杂度。
- 完全没有 Claude Code / Codex 等 CLI 使用经验的小白——你需要先有自己的 Agent 运行时，Agent OS 才接得起来。
- 需要官方 SLA、企业级支持或现成大规模社区背书的生产团队，等它过早期阶段更稳。

一句话收尾：Agent OS 把「多 Agent 协作」从临时实验变成可审查的工作系统，方向对、功能全、还免费；但它现在更像给「已经在用 Agent 的人」的放大器，而不是给新手的入场券。

---

**评测声明**：本文基于作者实际使用和公开信息撰写。所有数据来自 Agent OS 官方站（agentos.aiutil.com）、Product Hunt 发布页（Agent OS by AIUtil，2026-08-27）、nowfound.app 发布档案、SheepNav 与 AgentSpot 工具档案、ai-toolbase 评测等多源聚合。本文不含付费推广。
