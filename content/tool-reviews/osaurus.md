---
id: osaurus
title: "Osaurus 深度评测：把 AI 的上下文、记忆与身份留在你 Mac 上的开源哈尼斯"
date: "2026-09-06"
category: "AI对话助手"
rating: 4.2
price: "免费（开源 MIT）"
subtitle: "纯 Swift 原生、Apple Silicon 专属的本地 AI 哈尼斯，本地推理 + 云端混合 + 自主 Agent + MCP 一条龙"
url: "https://osaurus.ai"
pros:
  - "纯 Swift 原生构建，无 Electron，安装包仅 33–40MB，Apple Silicon 上启动快、占用低"
  - "本地 MLX 推理完全离线，数据不出本机，支持 Llama/Qwen/Gemma/Mistral/DeepSeek 等主流模型"
  - "内置自主 Agent、4 层知识图谱记忆、MCP 服务端 + 客户端、沙盒 VM，能力远超纯模型启动器"
  - "MIT 开源、无需账号、免费永久，并兼容 OpenAI/Anthropic/Ollama API 与 Cursor/Claude Desktop"
cons:
  - "仅支持 macOS 15.5+ 与 Apple Silicon，Intel Mac、Windows、Linux 全部被排除"
  - "产品仍早期，社区反馈多来自作者本人，部分功能（如云端鉴权）实测偶发 token 刷新失败"
  - "本地小模型在硬任务上仍落后于云端前沿模型，复杂推理需切云端并自带 API Key"
alternatives:
  - { name: "OpenClaw", slug: "openclaw", reason: "同样开源本地优先的 AI 智能体，跨平台且生态更广，适合想要更深 Agent 能力的用户" }
  - { name: "QwenPaw", slug: "qwenpaw", reason: "阿里开源的本地优先千问工作台，支持多端 IM 且跨平台，适合非纯 Mac 用户" }
  - { name: "ChatGPT", slug: "chatgpt", reason: "纯云端最强模型体验，适合不在乎本地化、只想要最好答案能力的用户" }
  - { name: "JiuwenSwarm", slug: "jiuwenswarm", reason: "华为开源蜂群智能体，免费开源且支持多 Agent 协作，适合开发者自建 Agent 集群" }
---

## 一句话总结

Osaurus 适合重视数据主权、手里是一台 Apple Silicon Mac、想把本地模型、记忆、工具和自主 Agent 打包成「自己的 AI」的进阶用户；不适合 Intel Mac / Windows / Linux 用户，以及想要开箱即用、不需折腾模型部署的纯小白。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Dinoki Labs（dinoki.ai），主程 Terence Pae</td></tr>
    <tr><td>最新版本</td><td>v0.22.x（2026-07，Homebrew 渠道 v0.22.3 / GitHub 镜像 v0.22.9，保持周更节奏）</td></tr>
    <tr><td>开源协议</td><td>MIT</td></tr>
    <tr><td>技术栈</td><td>纯 Swift 原生，Apple Silicon（MLX 推理），无 Electron</td></tr>
    <tr><td>平台要求</td><td>macOS 15.5+，Apple Silicon（M1 及以上）；不支持 Intel</td></tr>
    <tr><td>GitHub Stars</td><td>约 7,300+（2026 年中，多源口径 4.3k–7.3k）</td></tr>
    <tr><td>下载量</td><td>官网称 64k+；第三方 2026-07 报道累计下载超 11 万</td></tr>
    <tr><td>安装包体积</td><td>约 33–40MB（完整运行含依赖约 130MB+）</td></tr>
    <tr><td>定价</td><td>免费开源，无付费档</td></tr>
  </tbody>
</table>

数据来源：官网 osaurus.ai、GitHub 公开镜像（osaurus-ai/osaurus）、desktopinsights 版本扫描、dir2ai 与 rightaichoice 第三方统计（均为公开可查口径，stars/下载量不同来源统计时点不同，已注明区间）。

## 核心功能评测

**1. 本地 MLX 推理与模型管理 — 评分 4.5**
Osaurus 用 Apple 的 MLX 在 Apple Silicon 上跑本地模型，支持 Llama、Qwen、Gemma、Mistral、DeepSeek 等，模型从 HuggingFace 一键下载，并暴露 OpenAI 兼容的 `/v1/chat/completions`（流式 + tool calling）、Anthropic `/messages`（供 Claude Code）、Ollama `/chat`（NDJSON）。实测性能（Bright Coding 2025-09 在 M3 Max 36GB）：Llama 3 8B Q4 约 52 t/s、Mistral 7B MLX 约 68 t/s、Phi-3 Mini 约 95 t/s；rightaichoice 汇总 Hacker News 反馈称「比 Ollama 在 Apple Silicon 上快约 30%」。完全离线、数据不出本机是其最大卖点。

**2. 自主 Agent + 4 层记忆 — 评分 4.3**
每个 Agent 拥有独立 prompt、工具、记忆和视觉主题；Work Mode 能把一个目标拆成可追踪的 issue，并行执行、操作文件、后台运行。记忆是本地 4 层知识图谱，自动从对话抽取事实、检测矛盾、召回相关上下文，且在本地与云端模型间共享（pidune 实测：切换本地/Claude 后品牌语气上下文仍保留）。这是它区别于纯模型启动器的核心。

**3. MCP 服务端/客户端 + 沙盒 VM — 评分 4.2**
Osaurus 既是 MCP Server（一行配置接 Cursor、Claude Desktop），也能聚合 Remote MCP 的远程工具；Agent 执行代码跑在 Apple Containerization 的隔离 Linux VM 里，带完整开发环境且零风险到本机。对已经在用 Cursor/Claude 的开发者，这是直接可用的「本地工具层」。

**4. 混合云端 + 加密身份 + Relay — 评分 4.0**
可接 OpenAI、Anthropic、Gemini、xAI、Venice AI、OpenRouter、Ollama、LM Studio；每个 Agent 有 secp256k1 加密地址；Relay 用唯一 URL 免端口转发实现外网可达。但代价是早期稳定性——pidune 三天实测中云端鉴权两次出现「Token refresh failed」，需重启重建连接。

## 价格方案

<table>
  <thead>
    <tr><th>版本</th><th>价格</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>免费开源版</td><td>$0</td><td>MIT 协议，brew install --cask osaurus 或 dmg 安装，无需账号，本地模型免费跑</td></tr>
    <tr><td>云端模型</td><td>按厂商计费</td><td>接 OpenAI/Anthropic/Gemini 等需自备 API Key，费用直付对应厂商，Osaurus 不抽成</td></tr>
    <tr><td>付费档</td><td>无</td><td>官方未设订阅 / Pro / Enterprise 付费层，产品完全免费</td></tr>
  </tbody>
</table>

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Osaurus</th><th>Ollama</th><th>LM Studio</th><th>OpenClaw（本站已评测）</th></tr>
  </thead>
  <tbody>
    <tr><td>定位</td><td>本地 AI 哈尼斯 + Agent</td><td>本地模型服务（CLI）</td><td>本地模型 GUI</td><td>开源本地 AI 智能体</td></tr>
    <tr><td>界面</td><td>原生 Swift 应用</td><td>终端 / API</td><td>跨平台 GUI</td><td>终端 + 多端</td></tr>
    <tr><td>自主 Agent</td><td>✅ 内置</td><td>❌</td><td>❌</td><td>✅ 强</td></tr>
    <tr><td>MCP</td><td>服务端 + 客户端</td><td>需插件</td><td>部分支持</td><td>✅</td></tr>
    <tr><td>云端混合</td><td>✅ 原生</td><td>经兼容层</td><td>经兼容层</td><td>✅</td></tr>
    <tr><td>平台</td><td>仅 macOS Apple Silicon</td><td>全平台</td><td>全平台</td><td>全平台</td></tr>
    <tr><td>价格</td><td>免费 MIT</td><td>免费 Apache</td><td>免费（Pro 可选）</td><td>免费 MIT</td></tr>
  </tbody>
</table>

与 Ollama 比，Osaurus 多了 Agent、记忆、MCP 与云端桥接；与 OpenClaw 比，Osaurus 是纯 Mac 原生、无 Electron，但平台受限且生态规模更小。

## 优势与短板

优势很清晰：一是隐私与数据主权，本地推理 + 本地记忆 + 本地工具，敏感文件默认不出本机；二是原生 Swift 带来的轻量与系统级集成（菜单栏聊天、全局热键语音转录、Computer Use 式能力）；三是开源免费且 API 兼容，迁移成本极低；四是 Agent + 记忆 + MCP 把「模型启动器」升级成「可自主干活的哈尼斯」。

短板同样实在：第一，平台锁死 macOS 15.5+ 与 Apple Silicon，把大量用户挡在门外；第二，产品仍早期，rightaichoice 统计 28 条社区提及中 45% 正面、55% 批评，且反馈多来自作者本人，独立第三方评测偏薄；第三，云端鉴权等早期功能稳定性待打磨；第四，本地小模型在硬推理任务上仍弱于云端前沿模型，真要质量还得切云端并自带 Key。

## 最终推荐

**建议使用的三类人：**
- 数据敏感型 macOS 用户：处理客户名单、供应商报价、内部研究等不能出网的资料，本地推理 + 本地记忆是刚需。
- 已有 Cursor / Claude Desktop 的开发者：一行 MCP 配置就能把 Osaurus 的本地工具层接进现有工作流。
- 想「拥有自己 AI 栈」的折腾派：MIT 开源、可 fork、可自托管，长期复利在记忆与身份这一层。

**不建议使用的两类人：**
- Intel Mac / Windows / Linux 用户：直接换 Ollama、LM Studio 或本站已评测的 OpenClaw、QwenPaw。
- 想要开箱即用的纯小白：模型部署、路径配置、云端 Key 仍有门槛，pidune 实测结论也是「设置摩擦会劝退 casual 用户」。

综合评分 4.2：隐私与本地化能力是其护城河，平台限制与早期成熟度是主要扣分项，与 tools.ts 官方标注一致。

---

**评测声明**：本文基于作者实际使用和公开信息撰写。所有数据来自官方文档、GitHub 公开仓库及独立评测（Bright Coding、rightaichoice、dev.to、pidune、dir2ai 等）。价格、版本、stars/下载量为公开可查口径，不同来源统计时点不同已注明区间。本文不含付费推广。
