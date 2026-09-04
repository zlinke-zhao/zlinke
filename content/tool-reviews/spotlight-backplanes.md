---
id: spotlight-backplanes
title: Spotlight by Backplanes 深度评测：给你的 Claude Code/Codex 装一个「黑盒透视仪」
date: 2026-09-04
category: AI编程开发
rating: 4.2
price: 个人与团队永久免费（无席位计数、无试用倒计时）；企业级 org 铺开（归属/用量/特定管控）需联系销售定制，无公开自助付费档
subtitle: Backplanes 出品的开源风格 CLI 观测工具，自动读取已结束的 Claude Code/Codex 会话并生成报告，本地脱敏 PII 与凭证后再上传，面向安全/工程/支出三类角色提供组织级视图
url: https://www.backplanes.com
pros:
  - 一句话 CLI 安装（curl 脚本），macOS/Linux/WSL2 通用，浏览器鉴权自动建团队账号
  - 只读取已结束的会话、不接入 Anthropic/OpenAI OAuth，隐私架构克制，不挡在 Agent 运行中间
  - 本地双重脱敏（gitleaks 规则去密钥 + 第二遍去 PII）后才上传，服务端再洗一遍并逐字段加密
  - LLM 层合同级零留存（Anthropic/OpenAI 均配置不保留），敏感团队可用的防御纵深
  - 报告维度实用：文件/命令/外部域/MCP/越权动作/凭证访问/耗时，并给 Needs review 与 Business as usual 结论
  - 组织级报告按安全(CISO)/工程(EM)/支出(CFO)三视角聚合，归属 token 花费到人与仓库
cons:
  - 当前仅支持 Claude Code 与 Codex，Cursor/开源 CLI 等仍在路线图，覆盖面受限
  - 企业级归属/用量/特定管控需联系销售定制，暂无公开自助付费档，规模化成本不透明
  - 产品年轻（2026-06 上线，公司约 2025 创立），独立第三方部署样本与长期评测尚少
  - 定位是会话后观测而非实时拦截，无法在 Agent 跑的过程中阻断危险操作，只能事后复盘
  - 业务部署涉及 agent/开发者工具信息与客户数据协议，敏感团队投产前应逐条审数据路径
alternatives:
  - swytchcode
  - novu-connect
  - context-dev
  - taste
---

## 一句话结论

Spotlight by Backplanes 解决的是 AI 编程 Agent 落地后最尴尬的现实：**你的 Agent 跑起来像黑盒**——它改了哪些文件、调了哪些外部域、有没有越权读 `/etc/passwd`、花了多少 token，你基本一无所知。Spotlight 给 Claude Code 和 Codex 装了一个「黑盒透视仪」：会话一结束，CLI 自动读档生成短报告，告诉你是该复查还是一切正常。它的隐私架构相当克制（只读已结束会话、本地先脱敏、LLM 零留存），对个人和团队**永久免费**。对已经在用这两类终端 Agent、想要轻量安全与支出复盘、又不想自己搭可观测平台的团队，它是目前证据最硬的开源风格选择；代价是覆盖面暂时只有两家、企业级管控要谈定制、且只能事后看不能事中拦。

## 它是什么：Agent 的「空管」，从写代码的开始

Backplanes 把自己定位成「AI Agent 的空中交通管制」(air traffic control for AI agents)，Spotlight 是「move one」——第一步，先让你看见自己代码 Agent 干了什么。它不拦截、不重放、不介入运行，只是**在会话结束后读取本地会话数据，生成结构化报告**。

安装极简：一行 `curl -fsSL https://www.backplanes.com/spotlight/install.sh | sh`，支持 macOS、Linux、WSL 2；浏览器鉴权后自动建团队账号，会话一结束就开始捕获。关键隐私边界：
- **不接入 Anthropic/OpenAI 的 OAuth**，CLI 只读取已结束的会话，不坐在你的 Agent 运行中间；
- 数据先在你的笔记本上做本地脱敏，才离开机器。

团队背景也加分：由 Valimail、Algolia（及 Google、Twilio、ngrok 从业者）的负责人与实战派打造，获 HF0（及 Slow Ventures、Bloomberg Beta）支持，公司约 2025 年创立、布鲁克林。

## 单会话报告揭示什么

<table>
  <thead>
    <tr>
      <th>维度</th>
      <th>报告揭示的内容</th>
      <th>为什么有用</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>文件与命令</strong></td>
      <td>Agent 动了哪些文件、跑了多少命令</td>
      <td>快速定位改动面，复盘影响范围</td>
    </tr>
    <tr>
      <td><strong>外部访问</strong></td>
      <td>触达的新外部域与 API（如 api.resend.com）</td>
      <td>发现未申报的数据外传与影子集成</td>
    </tr>
    <tr>
      <td><strong>MCP / Skills / 子 Agent</strong></td>
      <td>加载了哪些 MCP server、工具、技能、子 Agent</td>
      <td>摸清 Agent 实际能力边界与来源</td>
    </tr>
    <tr>
      <td><strong>越权与凭证</strong></td>
      <td>是否超出任务范围读敏感文件（如 /etc/passwd）、碰凭证</td>
      <td>安全告警，标记 Needs review</td>
    </tr>
    <tr>
      <td><strong>耗时与结论</strong></td>
      <td>时长拆解、verdict、下一步改进建议</td>
      <td>判断是否值得复查、下次怎么省时间</td>
    </tr>
  </tbody>
</table>

报告会分成 **Needs review**（如 Agent 越权读敏感文件）与 **Business as usual**（如干净刷新、签名已验证）两类，让你一眼知道今天该看哪份、哪些可以划过。

## 隐私架构：防御纵深五步

这是 Spotlight 最值得写的一笔，也是它敢于让企业考虑的底气。官方 trust 页把数据路径讲得很透：

<table>
  <thead>
    <tr>
      <th>步骤</th>
      <th>发生地</th>
      <th>动作</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01 会话结束</td>
      <td>本机</td>
      <td>Agent 跑完，数据尚未离开机器</td>
    </tr>
    <tr>
      <td>02 本地脱敏</td>
      <td>本机</td>
      <td>gitleaks 规则去密钥，第二遍去 PII，本地日志可查</td>
    </tr>
    <tr>
      <td>03 TLS 上传</td>
      <td>传输中</td>
      <td>仅脱敏后内容过线，传输加密</td>
    </tr>
    <tr>
      <td>04 服务端再洗</td>
      <td>服务端</td>
      <td>不单信客户端，再洗一遍</td>
    </tr>
    <tr>
      <td>05 逐字段加密</td>
      <td>存储</td>
      <td>密钥绑定 org/session/event，静态加密</td>
    </tr>
  </tbody>
</table>

额外两点对企业很关键：**LLM 层合同级零留存**——Spotlight 用 Anthropic/OpenAI 做分析时，供应商合约配置为不保留任何会话内容；**你的数据不卖、不与广告或 AI 实验室共享**，删除即彻底清除（法律要求保留除外）。

## 定价：免费起步，企业谈定制

<table>
  <thead>
    <tr>
      <th>档位</th>
      <th>价格</th>
      <th>覆盖范围</th>
      <th>关键说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Free</strong></td>
      <td>$0</td>
      <td>个人开发者与所在团队</td>
      <td>无席位计数、无试用倒计时；Claude Code/Codex 会话报告、本地脱敏、外部域与 MCP 追踪</td>
    </tr>
    <tr>
      <td><strong>Enterprise</strong></td>
      <td>定制（联系销售）</td>
      <td>全组织铺开</td>
      <td>归属(attribution)、用量(volume)、特定策略管控；org 级安全/工程/支出视图</td>
    </tr>
  </tbody>
</table>

⚠️ 注意：Spotlight **没有公开的自助付费档**——核心功能对个人和团队永久免费，企业级能力（归属、用量、特定管控）走联系销售定制。规模化成本不透明，是它对比有明码标价竞品的一个短板。

## 横向：Agent 基础设施的分层

把 Spotlight 放进「Agent 基础设施分层」里看，能清楚它补的是哪块：

<table>
  <thead>
    <tr>
      <th>工具</th>
      <th>卡位层级</th>
      <th>核心解决</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Spotlight</strong></td>
      <td>Agent 会话可观测层</td>
      <td>会话后读档、安全/工程/支出复盘</td>
    </tr>
    <tr>
      <td><strong>Swytchcode</strong></td>
      <td>Agent→API 执行层</td>
      <td>2000+ API 的 schema 校验/幂等/重试护栏</td>
    </tr>
    <tr>
      <td><strong>Novu Connect</strong></td>
      <td>Agent→人 通信层</td>
      <td>多渠道接入、身份/线程、HITL 审批</td>
    </tr>
    <tr>
      <td><strong>Context.dev</strong></td>
      <td>Agent 数据获取层</td>
      <td>URL 转 LLM 就绪 Markdown/结构化数据</td>
    </tr>
    <tr>
      <td><strong>Taste</strong></td>
      <td>Agent 设计上下文层</td>
      <td>网页设计语言提取为品味配置同步编码工具</td>
    </tr>
  </tbody>
</table>

> 注：上表按各自官方定位归纳「卡位层级」，非逐项实测对比。趋势上 Agent 正从实验工具走向生产系统，观测、执行、通信、取数、设计上下文是配套基础设施的五个分层。

## 值不值得上手：适合谁，不适合谁

**适合**：日常重度使用 Claude Code / Codex、想看懂 Agent 到底改了什么、碰了哪些外部域的开发者；需要轻量安全复盘（越权/凭证/数据外传告警）又不想上重型 APM 的团队；CFO/EM/CISO 想按人与仓库归属 token 支出的组织；在意数据路径、要求本地脱敏与 LLM 零留存的合规敏感场景。

**不适合**：主力用 Cursor、Windsurf 等尚未支持的 Agent（路线图有但当前没有）；需要**实时拦截**危险操作而非事后复盘的强管控场景；希望有明码标价企业档、不愿走销售定制的采购流程；想要跨 IDE/跨框架统一观测、且等不及 Backplanes 扩平台。

## 总结

Spotlight 把「Agent 跑完之后我到底该看什么」做成了免费、一行命令、隐私克制、维度实用的工程交付。它的硬伤不在理念，而在覆盖面暂时只有 Claude Code/Codex、企业级管控要走定制、且定位是事后观测而非事中拦截。如果你认同「Agent 不透明是真实运营摩擦、迟早要像调试器一样成为标配」，它值得现在就装；如果想要更广覆盖或实时护栏，得等它扩平台或自己拼 Swytchcode 这类执行层。

**综合评分 4.2**：免费彻底 + 本地脱敏与 LLM 零留存 + 报告维度实用 + 组织三视角，扣在覆盖面窄、企业定制不透明、年轻产品缺第三方长期评测、只能事后看不能事中拦。
