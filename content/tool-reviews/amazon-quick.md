---
id: amazon-quick
title: "Amazon Quick 深度评测：电脑关机后仍在替你干活的 AI 同事"
date: "2026-09-17"
category: "AI工作台"
rating: 4.3
price: "Free $0 / Plus $20 用户·月（年付，$25 月付）/ Professional $20 + $250 账号·月 / Enterprise $40 + $250 账号·月"
subtitle: "AWS 出品的跨设备常驻 Agent，把邮件、日历、CRM 收成一条待办队列，能否成为企业影子 AI 的解药？"
url: "https://aws.amazon.com/quick/"
pros:
  - "后台常驻 Agent 跨设备接力：笔记本合上后云端 Agent 继续跑，移动端活动流只留需你拍板的事项，把通知焦虑反转成只留决策"
  - "企业级信任底座最硬：跑在 AWS IAM/VPC，HIPAA/FedRAMP/SOC 2/ISO 27001 内置，CloudWatch/CloudTrail 全审计，数据不出域且明确不训练"
  - "个人知识图谱加本地文件索引：跨邮件人脉文件自动建联且越用越懂你，本地文件夹免上传即可变成可检索的 Quick Space"
  - "Plus 档定价克制：$20 用户·月且免基础设施费、无需 AWS 账号，比 Microsoft 365 Copilot 的 $30 低约三分之一"
cons:
  - "桌面端 2026 年 9 月才 GA，产品极新（发布不到两周），缺少独立长期用户评测与第三方基准，稳定性与中文支持待观察"
  - "强绑定 AWS 与美区（首发 7 个 AWS 区域均在海外），国内访问与数据合规存疑，非 AWS 组织接入摩擦大"
  - "用量计量复杂：Professional/Enterprise 加收 $250 账号·月基础设施费，Agent 小时按秒计费（$3/$6 溢出），超额成本不透明，轻量个人用户不如单助手顺手"
alternatives:
  - { name: "Claude Cowork", slug: "claude-cowork", reason: "同样是企业级桌面 Agent、强调可审计与权限门，但绑定 Anthropic 生态、不主打知识图谱" }
  - { name: "Highlight AI", slug: "highlight-ai", reason: "想要轻量、看得见屏幕的捕获式助手且不绑大厂生态，Highlight AI 零订阅门槛更灵活" }
  - { name: "Clairvoyance", slug: "clairvoyance", reason: "偏好本地优先、数据自主的开源友好桌面 Agent，Clairvoyance 免费档慷慨且可跑本地模型" }
  - { name: "ChatGPT Work", slug: "chatgpt-work", reason: "已深度使用 ChatGPT 生态、只想要工作区版助手，ChatGPT Work 集成更熟且无 AWS 绑定" }
---

## 一句话总结

Amazon Quick 适合已经被「十几个 SaaS 加本地文件反复切换、AI 只在单一聊天框聪明」拖垮的知识型团队——它把上下文收拢成一条跨设备常驻 Agent，关机也能替你跑、只把决策留给你；不适合只想要一个聊天窗口的个人，或对国内访问与数据主权高度敏感、无法接受 AWS 海外绑定的组织。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Amazon Web Services（AWS）</td></tr>
    <tr><td>产品定位</td><td>企业级 AI 工作助手 / 跨设备常驻 Agent</td></tr>
    <tr><td>桌面端 GA</td><td>2026 年 9 月上旬（多源口径 9 月 9–11 日；前身 Quick Suite 于 2025-10-09 GA，2026-04-28 更名 Amazon Quick）</td></tr>
    <tr><td>支持平台</td><td>macOS（Apple Silicon）/ Windows 10+ x64 桌面端；iOS / Android 移动端活动流</td></tr>
    <tr><td>首发区域</td><td>7 个 AWS 区域：美东、美西、悉尼、东京、爱尔兰、伦敦、法兰克福</td></tr>
    <tr><td>定价</td><td>Free $0；Plus $20 用户·月；Professional $20 + $250 账号·月；Enterprise $40 + $250 账号·月</td></tr>
    <tr><td>合规认证</td><td>HIPAA、FedRAMP、SOC 2、ISO 27001（内置，发布即带）</td></tr>
    <tr><td>已公开客户</td><td>Southwest Airlines、3M、Jabil、DXC、Vertiv、LabCorp、PGA Tour</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 跨设备常驻 Agent 与活动信息流（评分 4.5）**
这是 Quick 最反直觉、也最像「产品」而非「功能」的能力。官方博客的原话是：你 17:30 把研究任务交给 Agent，17:31 合上笔记本，Agent 不消失——它在云端继续跑，结果流入移动端活动流。活动流把邮件、Slack、日历、CRM 的信号合并成一条按优先级排序的队列，Agent 自己解决掉的琐事直接消失，只留下「只有你能拍板」的条目。对打工人来说，这把「通知焦虑」反转成了「只留决策」。代价是治理问题：本地文件可能喂给云端任务，团队必须盘清哪些文件被索引、哪些连接器仍授权。

**2. 个人/团队知识图谱与本地文件索引（评分 4.3）**
Quick 的独门不是单次问答，而是「越用越懂你」：它跨邮件、人脉、文件自动编织关系、优先级与行为模式，并把本地文件夹免上传索引成可检索的 Quick Space。这对「信息散落在几十个 SaaS 和本地磁盘」的痛点是正解。短板是图谱质量依赖你愿意开放多少连接器，且作为 9 月才 GA 的新桌面端，中文语料与国内常用 App（微信/钉钉/飞书）的连接器覆盖还看不到明确证据。

**3. 对话即交付：文档、看板与无代码 App（评分 4.2）**
从对话直接产出 Word/Excel/PPT/图像/图表/看板，甚至用自然语言生成可上线的内部 Web App（Quick Apps），并草拟回写各工具；Microsoft 365 扩展已 GA，能在 Word/Excel/PowerPoint/Outlook 内把对话转成交付物。能力面很全，但「生成即生产就绪」的可靠性在真实企业数据上仍需试点验证，且 BI 仪表盘创建锁在 Enterprise 档。

**4. 企业级治理与合规底座（评分 4.6）**
这是 Quick 相对库内个人向桌面 Agent（OpenClaw 系、Highlight AI、Clairvoyance）最硬的差异化：跑在 AWS IAM/VPC 与既有合规认证上，HIPAA/FedRAMP/SOC 2/ISO 27001 发布即内置，全审计走 CloudWatch 与 CloudTrail，数据不出域、明确不用于训练，并支持 MDM、按用户权限、Microsoft Purview DLP 与 MCP 开放标准。对已经用 AWS 的组织几乎是零摩擦接入，也是 IT 部门能「管住」的那个 AI 入口（对抗影子 AI）。

## 价格方案

<table>
  <thead>
    <tr><th>档位</th><th>价格</th><th>基础设施费</th><th>关键能力</th><th>适合谁</th></tr>
  </thead>
  <tbody>
    <tr><td>Free</td><td>$0 用户·月</td><td>无</td><td>基础 AI 对话、深度研究、生成文档/App、Flows 自动化；无桌面端、无共享 Space、无自定义 Agent</td><td>个人尝鲜评估</td></tr>
    <tr><td>Plus</td><td>$20 用户·月（年付，$25 月付）</td><td>无，无需 AWS 账号</td><td>桌面端、共享 Space、自定义 Agent、浏览器 + M365 扩展，最多 300 人、10GB/席</td><td>小团队协同</td></tr>
    <tr><td>Professional</td><td>$20 用户·月</td><td>$250 账号·月</td><td>+ QuickSight BI 查看、RBAC/SSO、4 Agent 小时/月、25GB 索引</td><td>需治理的中型组织</td></tr>
    <tr><td>Enterprise</td><td>$40 用户·月</td><td>$250 账号·月</td><td>+ Quick Automate、自建仪表盘、8 Agent 小时/月、数据主权、资产认证、24/7 支持、50GB</td><td>大型企业</td></tr>
  </tbody>
</table>

补充说明：Agent 小时按秒计费，Professional 含 4 小时（2 Agentic + 2 Research）、Enterprise 含 8 小时（4+4），溢出 Agentic/Automate 为 $3/小时、Quick Research 为 $6/小时；索引存储超额 $5/GB·月。产品落地页另列个人高容量档 Max $100 用户·月（5 倍用量），面向重度个人用户。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Amazon Quick</th><th>Microsoft 365 Copilot</th><th>Glean</th><th>ChatGPT Work</th></tr>
  </thead>
  <tbody>
    <tr><td>厂商绑定</td><td>AWS 生态，但兼容 Slack/Teams/Outlook/Gmail/Google</td><td>强锁 Microsoft Graph</td><td>偏知识检索层</td><td>OpenAI 生态</td></tr>
    <tr><td>独立桌面端</td><td>原生 macOS/Windows + 移动活动流</td><td>嵌 Office，无独立桌面 Agent</td><td>无独立桌面</td><td>工作区网页/桌面</td></tr>
    <tr><td>常驻 Agent</td><td>云端常驻、关机续跑</td><td>无后台常驻</td><td>无</td><td>有限</td></tr>
    <tr><td>起步价</td><td>Free $0 / Plus $20（无 infra 费）</td><td>$30 用户·月</td><td>企业报价</td><td>订阅 ChatGPT</td></tr>
    <tr><td>合规底座</td><td>HIPAA/FedRAMP/SOC 2/ISO 内置</td><td>Microsoft 合规体系</td><td>企业检索合规</td><td>OpenAI 企业合规</td></tr>
  </tbody>
</table>

## 优势与短板

优势侧，Quick 把「永远在线」做成了核心卖点：跨桌面与移动的任务接力、关机后 Agent 续跑，是多数本地 Agent 做不到的；知识图谱让它从「问答工具」升级为「懂你上下文的同事」；而 AWS 级别的合规与审计，是它敢正面叫板 Microsoft 365 Copilot 的底气，也是企业采购时最看重的硬指标。Plus 档 $20 且免基础设施费、无需 AWS 账号，对中小团队相当友好。

短板同样清晰。第一，它太新——桌面端 2026 年 9 月才 GA，行业媒体（GeekWire、钛媒体、TMT Post）集中报道在 9 月 9–11 日，至今缺少 G2 这类平台的独立长期评分与第三方基准，早期口碑主要来自 AWS 博客引用的试点客户（Southwest、3M 等），需打折看待。第二，强绑定 AWS 与海外 7 区域，国内访问、数据出境与本地办公生态（飞书/钉钉/企微）接入均不明朗。第三，计费复杂：Professional/Enterprise 的 $250/账号·月基础设施费 + 按秒计费的 Agent 小时，让「真实月账单」对个人和轻量团队不友好，超额成本需要试点期实测。

## 最终推荐

**推荐使用**：已经深度使用 AWS、需要给知识员工一个「被 IT 管得住」的 AI 入口、且重视数据主权与审计的中大型企业；以及想用最低门槛（Free/Plus $20、无 AWS 账号）先试点「跨设备常驻 Agent + 知识图谱」的小团队。

**谨慎或暂缓**：只想要一个聊天窗口的个人用户——Free 档连桌面端都没有，Plus 才解锁核心体验；对国内网络与数据合规高度敏感、工作流建立在飞书/钉钉/企微上的组织——AWS 海外绑定会是现实障碍；以及希望「买完即用、账单可预测」的轻量用户——Agent 小时与基础设施费的复合计费建议先在小范围试点测算真实成本。

**结论**：Amazon Quick 是 2026 年企业 AI 助手赛道里「合规底座 + 永远在线」路线最完整的选手，方向正确、定价克制；但桌面端刚 GA、国内可用性待验证，建议把它放进试点清单而非直接全量铺开。

---

**评测声明**：本文基于 AWS 官方产品页与定价页、官方 GA 博客，以及 GeekWire、钛媒体、TMT Post、ai-bio.cn 等多源公开报道撰写，价格与功能均来自可核查的官方与独立来源。作者（及站点运营者）未亲测该产品，结论不含付费推广。
