---
id: highlight-ai
title: "Highlight AI 深度评测：把「协调税」交给桌面 AI 操作层"
date: "2026-10-13"
category: "AI工作台"
rating: 4.4
price: "Lite $35/月，Pro $60/月，Max $200/月；Lite/Pro 含 14 天试用，无长期免费档"
subtitle: "从 Medal 分拆、40M A 轮、50 万用户的跨应用捕获式桌面 AI，到底值不值得装"
url: "https://highlightai.com"
pros:
  - "捕获式体验独一份：系统级浮窗本地读取任意窗口，不用写提示词就能就屏幕内容发问"
  - "无机器人会议记录：本地转录系统音频，不向 Zoom/Teams/Meet 派发可见参会者"
  - "产出直接回写真实工具：邮件/Slack/Notion/GitHub/Linear 草拟，你批准才发，不是另开聊天框"
  - "隐私姿态克制：本地 OCR、屏幕数据不常驻云端、加密、SOC 2 Type II、明确不用于训练"
cons:
  - "价格 2026 年内多次变动且偏高：当前 Lite $35 起，早期免费档已收紧，轻量用户成本上升"
  - "Windows 端有用户吐槽：Pro 额度与卸载体验被点名，跨平台成熟度不如 macOS"
  - "实时屏幕理解仍偏早期：当前主要靠已连应用历史加本地会议转录，移动端缺失"
alternatives:
  - { name: "OpenClaw", slug: "openclaw", reason: "想要开源本地优先、模型与数据完全归自己、不被厂商锁定的用户" }
  - { name: "LUCI Desktop", slug: "luci-desktop", reason: "想要纯本地记忆层、OCR/转写完全端侧、不把上下文送云的用户" }
  - { name: "ChatGPT", slug: "chatgpt", reason: "已用 ChatGPT、只需要免费截图问答与 GPT 视觉质量的人" }
  - { name: "Claude", slug: "claude", reason: "追求最强直觉图表与手写视觉质量、且接受切回 Claude 桌面端的人" }
---

## 一句话总结
Highlight AI 适合被「跨工具复制粘贴、会议记不住、跟进靠手搓」折磨的知识工作者与团队；不适合只想找一个免费轻量截图问答、或对常驻屏幕捕获有强隐私洁癖的用户。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th><th>来源</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Highlight AI Inc.（2024 从游戏剪辑公司 Medal Inc. 分拆；创始人 Pim de Witte、Josh Lipson、Haris Butt）</td><td>SiliconANGLE / Startup Intros</td></tr>
    <tr><td>总部 / 成立</td><td>美国旧金山 / 2024 年</td><td>StartupHub.ai</td></tr>
    <tr><td>融资</td><td>种子轮 $10M（2024-10）；A 轮 $40M（2026-03-24，Khosla Ventures 领投，General Catalyst、Valor、359 Capital 等跟投）；累计 $50M</td><td>TechCrunch / Business Wire / Startup Intros</td></tr>
    <tr><td>CEO</td><td>Sergei Sorokin（前 Discord 产品 VP，2026-03 加入，曾把 Discord 从约 500 万做到近 3 亿 MAU）</td><td>Business Wire</td></tr>
    <tr><td>用户规模</td><td>50 万+（含 Google、DoorDash 员工）</td><td>SiliconANGLE / Startup Intros</td></tr>
    <tr><td>合规认证</td><td>SOC 2 Type II</td><td>官方隐私页 / aicloudbase</td></tr>
    <tr><td>平台</td><td>macOS、Windows（x64 桌面端）</td><td>官方产品页 / opentools</td></tr>
    <tr><td>模型策略</td><td>多模型路由（GPT / Claude / Gemini / Grok），Pro 可自带 API Key</td><td>aicloudbase / 官方</td></tr>
    <tr><td>技术栈</td><td>Next.js / Tailwind / React / TypeScript + Python 后端，调用 Anthropic API，Cloudflare / Vercel 托管</td><td>StartupHub.ai 技术探测</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 捕获式跨应用上下文（评分 4.6/5）**
Highlight 的核心不是「又会聊天的机器人」，而是常驻桌面的系统级浮窗。它在本地用 OCR 加无障碍树读取你当前的活动窗口——浏览器、文档、代码编辑器、通讯工具——你不用写提示词，直接就屏幕内容发问，它在一个对话里把多应用的上下文并在一起引用。对比库内常见的「目的地 App」型助手（先截图再切到 ChatGPT/Claude 里问），Highlight 的「持续捕获、就地问答」形态更顺手。这是它差异化最大的卖点，也是评分最高的一项。

**2. 无机器人会议记录（评分 4.5/5）**
本地转录系统音频，自动覆盖 Zoom、Microsoft Teams、Google Meet，会议里不派发任何可见的 bot 参会者。开完会自动产出纪要、决策与行动项，并自动识别会议起止。对「最烦会议里多个 AI 机器人冒出来」的用户这是刚需级差异点。语音识别在免费/低档走本地处理，付费档可用云端音频处理，原始音频转写后即丢弃。

**3. 起草回写真实工具（评分 4.3/5）**
Highlight 把下一步直接草拟进 Gmail、Slack、Notion、GitHub、Linear 等，需你点头才发出，不会擅自行动。它把「AI 生成」接回「工作发生的地方」，而不是另开一个聊天框让你自己复制回去。Skills（技能）是把邮件跟进、Notion 文档、Slack 消息这类下一步自动跑出来等你审——这是把协调税真正往下压的一步。扣 0.7 分的原因：当前回写以「草拟+批准」为主，真正的跨应用自动执行（agentic）仍是 Teams/路线图功能，成熟度不及宣传图那么满。

**4. 每日简报与收尾（评分 4.2/5）**
早上出当日优先级简报，晚上汇总待办与后续；Pro 起有 Daily Recaps，Max 进一步给白手套支持。承诺与决策沉淀为可检索的团队记忆。对会议密集的招聘负责人、PM、创始人、客户-facing 律师很对症。

**5. 多模型路由与隐私底座（评分 4.4/5）**
按任务自动选最优模型，或 @ 指定 Claude / GPT / Gemini / Perplexity；Pro 可自带 Key。隐私上姿态克制：捕获全本地、屏幕数据不常驻云端、加密、SOC 2 Type II、明确不用于训练，可随时排除指定 App/窗口。官方隐私页描述：本地转录副本加加密数据库副本，笔记/聊天加密存 Supabase，上下文存 Google Cloud 对象存储。对比把上下文持续送云的产品，这是它的信任锚点。

## 价格方案

<table>
  <thead>
    <tr><th>套餐</th><th>月价</th><th>会议转写时长</th><th>Chat/Skills 额度</th><th>关键差异</th></tr>
  </thead>
  <tbody>
    <tr><td>Lite</td><td>$35</td><td>20 小时</td><td>500 credits</td><td>会前简报、会议摘要、每日简报、每周回顾、提醒、基础 Chat</td></tr>
    <tr><td>Pro（最受欢迎）</td><td>$60</td><td>50 小时</td><td>3,000 credits</td><td>每日收尾、内置 Skills、更高额度</td></tr>
    <tr><td>Max</td><td>$200</td><td>80 小时</td><td>8,000 credits</td><td>自定义 Skills、Beta 功能、白手套支持</td></tr>
  </tbody>
</table>

说明：Lite 与 Pro 均含 14 天免费试用；官方定价页（2026-10 抓取）已无长期免费档。需要提醒的是，Highlight 的价格在 2026 年波动明显——早期评测（aicloudbase 5 月、getjarvis 5 月）还记录有免费档与 $15–20/月的 Plus/Premium，到 9–10 月已收紧为 Lite $35 起的三档制。订阅前请以官网实时页为准。Pro 还可自带 API Key 绕开额度天花板。

## 与竞品对比

下表取自 2026 年屏幕感知（screen-aware）助手横向评测与各家官方信息，维度对齐「形态 / 价格 / 捕获方式 / 跨应用动作 / 平台」：

<table>
  <thead>
    <tr><th>工具</th><th>形态</th><th>价格（2026）</th><th>屏幕捕获方式</th><th>跨应用动作</th><th>平台</th></tr>
  </thead>
  <tbody>
    <tr><td>Highlight AI</td><td>常驻捕获层（浮窗）</td><td>Lite $35 起</td><td>持续捕获（非逐次）</td><td>只读为主 + 草拟回写需批准</td><td>macOS + Windows</td></tr>
    <tr><td>ChatGPT Desktop</td><td>目的地 App</td><td>Plus $20</td><td>快捷键截图（Cmd+Shift+K）</td><td>无（切回 ChatGPT 后问答）</td><td>macOS + Windows</td></tr>
    <tr><td>Clicky</td><td>语音优先光标伙伴</td><td>免费 + Pro $20</td><td>按住热键语音问屏</td><td>语音代理可起草 Gmail/日历/Linear</td><td>macOS（仅）</td></tr>
    <tr><td>Cluely</td><td>实时会议叠加层</td><td>$20 起</td><td>实时会议叠答案</td><td>受限（定位有争议）</td><td>macOS + Windows</td></tr>
  </tbody>
</table>

横向看，Highlight 的独门是「持续上下文 + 无机器人会议 + 起草回写」三件套，定位在「个人跨 App 协调层」而非「单任务执行器」。相较库内同属桌面智能体的 OpenClaw（开源本地优先、模型数据归你）与 LUCI Desktop（纯本地记忆层、OCR/转写全端侧），Highlight 更偏「云编排 + 本地捕获」的混合姿态，便利性与隐私取舍正好反过来。

## 优势与短板

优势再强调三点：一是捕获式体验确实省掉了「把屏幕内容翻译成提示词」这一步，对每天泡在多个窗口的人黏性很强；二是无机器人会议记录既体面又合规，企业会议室不会弹出奇怪的 AI 头像；三是回写真实工具把 AI 产出接回了工作流，而不是停在聊天框里等你搬运。资金与用户基数也扎实——$50M 融资、Khosla 领投、前 Discord 产品 VP 掌舵、50 万+ 用户，不是空壳 Demo。

短板也要说透：第一，价格 2026 年多次上调且当前门槛不低，早期免费档已收紧，轻度用户每月白掏 $35 不划算；第二，Windows 端有真实吐槽——Pro 额度与卸载体验被第三方评测点名，跨平台成熟度落后 macOS；第三，实时屏幕理解官方仍标 Early / Coming Soon，当前主要靠已连应用历史加本地会议转录，移动端缺失，中文生态与微信/钉钉/飞书接入暂无。常驻捕获本身也会让部分对隐私极其敏感的用户天然抵触。

## 最终推荐

**值得装的人：**
- 会议密集、跨工具协调多的角色——招聘负责人、PM、创始人、客户-facing 律师、销售，Highlight 的会前简报 + 会后草拟能直接省下每周数小时协调税。
- 已用 Google Workspace / Slack / Notion / Linear / GitHub 栈、希望 AI 帮手就在工作发生地的人。
- 接受「本地捕获 + 云端编排」混合隐私模型、看重 SOC 2 与不训练承诺的团队。

**不建议的人：**
- 只想找个免费轻量截图问答的——ChatGPT/Claude 桌面端免费档更合适，Highlight 当前已无长期免费档。
- 对常驻屏幕捕获有强隐私洁癖、要求 100% 端侧的——去看 OpenClaw 或 LUCI Desktop 这类纯本地方案。
- 主力在 Windows 且容不下早期打磨瑕疵的——建议等 Windows 端额度与卸载体验口碑稳住再上车。

**购买建议：** 先用 Lite 的 14 天试用跑一轮真实工作流（连日历+邮件+会议），确认起草回写频率对得起 $35/月再决定；重度用户直接 Pro（$60）解锁每日收尾与 Skills，自带 API Key 还能进一步摊薄额度成本。Max（$200）只建议「工作完全跑在 Highlight 上」的重度个体或需要自定义自动化/白手套支持的团队。

---

**评测声明**：本文基于作者实际使用和公开信息撰写。事实来源包括 Highlight AI 官方站与定价页（2026-10 抓取）、Business Wire（2026-03-24 A 轮通稿）、TechCrunch（2024-10 种子轮）、SiliconANGLE / StartupHub.ai / Startup Intros（融资与用户数据）、aicloudbase（2026-05 评测）、getjarvis（2026-05 屏幕感知助手横评）、opentools（2026-09 定价复核）。所有数据来自官方文档和独立评测。本文不含付费推广。
