---
id: luci-desktop
title: "LUCI Desktop 深度评测：给所有 AI 智能体装上「本地记忆」，永久免费"
date: "2026-10-10"
category: "AI工作台"
rating: 4.5
price: "免费（单一套餐，永久免费，无订阅、无信用卡、无用量上限）"
subtitle: "Memories.ai 出品的本地优先记忆层，让 Claude Code、Cursor、Codex 记住你屏幕与会议里发生的一切"
url: "https://luci.memories.ai"
pros:
  - "100% 本地处理：屏幕与会议全程在设备端理解、加密存储，不上传云端，隐私姿态库内最克制"
  - "永久免费：单一套餐全功能开放，无订阅无信用卡，靠本地算力零服务器成本"
  - "零连接器设计：直接读屏幕加 OCR，内部工具、私有文档、无 API 的桌面软件天然全覆盖"
  - "Agent Bridge 本地 MCP：Claude Code/Cursor/Codex/Gemini/Copilot 等即连即用，无需逐个配 OAuth"
cons:
  - "隐私文档与条款冲突：官方文档称全程本机，但服务条款默认允许上传，需用户自行核对设置"
  - "桌面-only 单用户：无移动端、无团队共享工作区、无跨设备云同步，机器即全部"
  - "商业化存疑：无付费档，长期免费可持续性与公司营收模式待观察"
  - "常开录屏占用本机算力与磁盘，需自行设置 7/30/90 天自动删除"
alternatives:
  - { name: "OpenClaw", slug: "openclaw", reason: "若你要的不是记忆而是本地直接干活的执行型 Agent，OpenClaw 是库内高频参照的本地优先选择" }
  - { name: "DeepSeek Harness", slug: "deepseek-harness", reason: "深度求索官方桌面 Agent 运行时，多 Agent 协作加轨迹回放，想要完整执行环境而非纯记忆层时更合适" }
  - { name: "Agent OS", slug: "agent-os", reason: "本地优先的桌面 Agent 工作台，带分层记忆与知识沉淀，适合想把多个 CLI Agent 统一编排的人" }
  - { name: "Cua Spaces", slug: "cua-spaces", reason: "给 Agent 一块可监督的隔离桌面环境，Teleport 免登录搬运会话，路线与 LUCI 互补" }
---

## 一句话总结
LUCI Desktop 适合被「AI 智能体上下文失忆」折磨的开发者与会议密集型工作者——它把你的屏幕与会议变成 100% 本地的可检索记忆，喂给已有的 Agent；不适合需要团队共享工作区、跨设备云同步或纯云端托管服务的人。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Memories.ai（总部旧金山；创始人 Shawn Shen、Ben Zhou，均出自 Meta Reality Labs）</td></tr>
    <tr><td>融资</td><td>2025-07-24 完成 800 万美元种子轮，Susa Ventures 领投，Samsung Next、Crane、Fusion Fund、Seedcamp、Creator Ventures 跟投</td></tr>
    <tr><td>首发</td><td>2026-09-29 登陆 Product Hunt，当日 #2 Product of the Day，357 upvotes、51 条评论</td></tr>
    <tr><td>支持平台</td><td>macOS 13 Ventura+（Apple Silicon 优化）与 Windows 10/11</td></tr>
    <tr><td>价格</td><td>永久免费（单一套餐，无订阅、无信用卡、无用量上限）</td></tr>
    <tr><td>核心技术</td><td>端侧 OCR+计算机视觉、Microsoft Foundry Local 本地语音转写、Phi/Qwen/Llama/DeepSeek 本地模型做每日蒸馏</td></tr>
    <tr><td>兼容 Agent</td><td>Claude Code、Cursor、Codex、Gemini、Copilot、Windsurf、Zed 等（经本地 MCP）</td></tr>
    <tr><td>第三方评分</td><td>AppsInsight 4.2/5、ProductCool 4.94/5（均为桌面研究，非亲测）</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 本地屏幕记忆（4.5/5）**
LUCI 周期性截取屏幕、记录活动窗口，在设备端用 OCR 与 CV 模型理解并索引文字与视觉元素，形成按时间排列、可语义检索的「电脑一天」。关键价值是零连接器：因为它读的是屏幕而非 API，内部工具、私有文档、没有接口的桌面软件天然全覆盖，区别于那些需要逐个配 OAuth 的集成派。实测反馈中已有用户用它在 Mac 上几秒找回一个忘记收藏的文档链接。短板是常开录屏要占用本机算力与磁盘，官方提供 7/30/90 天自动删除来缓解。

**2. 会议语音转录（4.3/5）**
捕获系统音频录制 Zoom、Google Meet、Teams 会议，用本地语音模型生成与每日时间线对齐的转写，且标榜「无机器人入会」——不会像 Otter 那样在会议里挂一个可见机器人。隐私上还有 zero-leak redaction，自动检测并打码密码、卡号再落盘。扣分项：多语言与中文会议场景的转写准确度仍依赖本地模型能力，库内尚未有赵生亲测校准。

**3. Agent Bridge 本地 MCP（4.6/5）**
这是 LUCI 的灵魂。它通过本地 MCP 把索引好的记忆直接暴露给已安装的 Agent（Claude Code/Cursor/Codex/Gemini/Copilot/Windsurf/Zed 等），无需逐个配置 OAuth 或 API Key。开发者可以问 Agent「一小时前我看的那段报错栈是什么」，Agent 直接检索 LUCI 返回答案。相比 OpenAI Codex Chronicle（仅 Mac、仅 Codex、每月 20 美元、烧 Codex 额度、明文存储），LUCI 在兼容性、平台、价格、加密上全面占优。

**4. 每日蒸馏 Life 文件夹（4.2/5）**
本地 LLM（Phi/Qwen/Llama 等可选项）把一天的屏幕与会议提炼成纯文本记录，存进用户自有的 Life 文件夹，可读可删，保证数据可移植与长存。设计克制：记忆是「供血」而非「抢活」，本身不替你执行任务，须配合已有 Agent 使用。

**5. 隐私与脱敏（4.4/5）**
端侧模型理解、加密存储、卡号密码自动打码、可设留存周期——是库内最克制的隐私姿态之一。但需注意一个真实风险：第三方投资分析（bestaitoolfinder）指出，当前文档说录制留本机，而服务条款默认允许上传，二者存在冲突，用户部署前应自行核对隐私设置，别默认信任。

## 价格方案

LUCI 是品类里最简单的定价：一个套餐，永久免费。下表对比来自 LUCI 官网定价页（厂商公开数据，截至 2026 年）。

<table>
  <thead>
    <tr><th>方案</th><th>价格</th><th>包含核心能力</th></tr>
  </thead>
  <tbody>
    <tr><td>Free（唯一档）</td><td>$0 永久</td><td>不限量 Agent 技能调用、上下文感知会议提醒、会议视频录制、实时辅导与行动项、不限量会议转写、不限量语音触发任务、进阶 Agent 技能与自定义工作流、100% 本地存储、无云上传</td></tr>
  </tbody>
</table>

厂商解释免费原因：所有算力跑在你自己的设备上，没有服务器成本需要转嫁。没有 Pro 档、没有试用窗口、没有信用卡。风险点在于「免费永久」的可持续性——母公司 Memories.ai 另有视觉记忆 API 业务变现，但 LUCI 自身没有已知转化路径。

## 与竞品对比

下表为 LUCI 官网定价页的横向对比（数据取自各厂商公开文档，截至 2026 年）。

<table>
  <thead>
    <tr><th>工具</th><th>价格</th><th>是否入会机器人</th><th>处理位置</th><th>屏幕记忆</th><th>状态</th></tr>
  </thead>
  <tbody>
    <tr><td>LUCI Desktop</td><td>$0 永久</td><td>否</td><td>本机</td><td>有</td><td>在售（Mac+Win）</td></tr>
    <tr><td>Granola</td><td>$14–$35/人/月</td><td>否</td><td>云端（US AWS）</td><td>仅会议</td><td>在售</td></tr>
    <tr><td>Otter</td><td>约 $17/人/月起</td><td>是（可见机器人）</td><td>云端</td><td>无</td><td>在售</td></tr>
    <tr><td>Codex Chronicle</td><td>ChatGPT Pro $200/月</td><td>否</td><td>OpenAI 服务器</td><td>仅截图</td><td>macOS 研究预览</td></tr>
    <tr><td>Rewind</td><td>已停更</td><td>否（曾本地）</td><td>曾本地</td><td>曾支持</td><td>采集已于 2025-12-19 停止</td></tr>
  </tbody>
</table>

文本补充：移动优先的 TwinMind（Pro $15/月、Max $30/月）旗舰语音模型跑在云端、且无 Windows 客户端，LUCI 在其官网对比页中 9 项里领先 6 项；开源的 Screenpipe 与 Windows 自带的 Microsoft Recall 是另一条「本地采集+MCP 检索」路线，但 Recall 仅限受支持 Windows 机型、隐私争议未消。LUCI 的差异化是把「屏幕视觉+会议语音+跨 Agent 检索」打通成首个本地一体化记忆层。

## 优势与短板

**优势展开**
第一，本地优先做到极致：屏幕理解、语音转写、每日摘要全在设备端，加密存储、无云副本，比库内多数云端记忆与笔记类更可信。第二，价格碾压——永久免费且全功能，对隐私敏感的个人用户几乎是零门槛。第三，零连接器让内部工具与私有软件天然被覆盖，不用挨个接 API。第四，Agent Bridge 把记忆「供血」给任意已装 Agent，与库内所有执行型 Agent 互补而非重叠。

**短板展开**
第一，也是最该被点名的风险：隐私文档与服务条款自相矛盾，默认上传的设置若未关，等于把「本地记忆」的立身之本打折。第二，桌面-only 单用户，没有团队共享、没有跨设备云同步，换电脑记忆不跟人。第三，无付费档，长期免费能否持续、公司靠什么养活 LUCI 仍是问号。第四，常开录屏对续航与磁盘的压力客观存在，需要用户主动管理留存周期与权限边界。

## 最终推荐

**建议立刻试用的人：**
- 重度使用 Claude Code / Cursor / Codex 的开发者，受够了每次新会话从零解释项目背景；
- 会议密集的创始人、销售负责人、投资人，希望 Agent 基于真实会议上下文被 brief；
- 拒绝云端笔记、对隐私有硬性要求的人。

**不建议的人：**
- 需要团队共享工作区或管理员管控的企业（LUCI 单用户、无后台）；
- 移动优先、想要手机端随时回忆的人（无 App）；
- 想要「托管云服务+跨设备同步」而非本地应用的人。

**使用建议**：安装后第一件事是进设置关掉任何默认上传、设好 7/30/90 天自动删除；把 LUCI 当作「记忆层」而非「执行体」，配合库内 OpenClaw、DeepSeek Harness、Agent OS 等执行型 Agent 形成「记忆供血+本地干活」的组合。赵生后续可在 Windows 11 主环境亲测其转写准确度与中文界面，校准本评测的判断。

---

**评测声明**：本文基于 LUCI 官方站（luci.memories.ai 及其定价/对比页）、Product Hunt 发布页（2026-09-29，#2、357 upvotes）、AppsInsight 与 ToolRadar 第三方评测、bestaitoolfinder 投资分析、ProductCool 档案等公开信息撰写，所有价格与功能数据均标注来源。本文不含付费推广。赵生尚未亲测该产品，文中已明确区分厂商宣称与第三方独立结论。
