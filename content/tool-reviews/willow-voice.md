---
id: willow-voice
title: "Willow Voice 深度评测：YC天才少年做的语音听写，真能取代键盘吗"
date: "2026-10-23"
category: "AI音乐音频"
rating: 4.0
price: "免费版2000词/周；Individual Pro $15/月（年付约$12/月即$144/年）；Team Pro $12/用户/月（≥3席）；Enterprise 定制"
subtitle: "从YC X25到5万用户，实测这款200ms延迟的跨端语音听写是否值得每天用"
url: "https://willowvoice.com"
pros:
  - "延迟约200ms，是主流竞品里最快的，说话不卡顿、不丢思路"
  - "98%+准确率，独立横评99.1%登顶，比苹果自带听写少约3倍错误"
  - "跨Mac/Windows/iOS三端，任意文本框一键出字，无需为每款App单独配置"
  - "Willow Scribe意图写作加风格记忆，说个大意直接生成成品邮件与消息"
  - "SOC 2 Type II加HIPAA加零数据留存，合规与隐私到位，企业可签BAA"
cons:
  - "免费版限2000词/周且用较弱的Frontier Mini模型，重度用户必须付费"
  - "暂不支持Android，移动端只有iOS；隐私设置不会跨设备同步"
  - "闭源产品，无终身买断档，5年订阅累计约$720，重隐私用户更爱本地方案"
  - "非英语听写偶发被切回英文；无法关闭的闲置提醒被用户反复吐槽"
alternatives:
  - { name: "Wispr Flow", slug: "wispr-flow", reason: "同价位的云听写直接竞品，多安卓端加屏幕语义，但Trustpilot口碑偏低" }
  - { name: "VoiceInk", slug: "voiceink", reason: "Mac端100%本地离线、一次性$29买断，重隐私与买断用户首选" }
  - { name: "苹果自带听写", slug: "apple-dictation", reason: "免费、设备端、零设置，但无自定义词典与上下文格式化" }
  - { name: "Dragon Professional", slug: "dragon-professional", reason: "Windows端深度语音命令老牌方案，但$699.99一次性且缺AI格式化层" }
---

## 一句话总结
Willow Voice 适合每天要在邮件、Slack、文档和 ChatGPT/Claude 里大量敲字、又想要最快最准语音输入的知识工作者；它不适合追求一次性买断、必须安卓端、或要求开源可审计的重度隐私用户。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th><th>来源</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商 / 团队</td><td>Willow（YC X25 孵化，加拿大背景）</td><td>enstarz、getvoibe</td></tr>
    <tr><td>创始人</td><td>Allan Guo（CEO，斯坦福退学，18岁进 YC）与 Lawrence Liu（联合创始人）</td><td>enstarz、westca</td></tr>
    <tr><td>孵化 / 上线</td><td>YC X25（2025年春）；Product Hunt 首发 2025-03-13</td><td>getvoibe、Product Hunt</td></tr>
    <tr><td>融资</td><td>2025 年 $4.2M 轮（BoxGroup 领投，Goodwater、Burst、Liquid 2 跟投），累计约 $4.5M</td><td>enstarz</td></tr>
    <tr><td>用户量</td><td>官方宣称 50,000+ 用户；已披露企业客户含 Uber、Heidi Health、Zego</td><td>willowvoice.com、getvoibe（引 TechCrunch）</td></tr>
    <tr><td>支持平台</td><td>macOS、Windows、iOS、iPad；Android 官方标注即将上线</td><td>willowvoice.com、帮助中心</td></tr>
    <tr><td>核心模型</td><td>Frontier Pro（付费最强）/ Frontier Mini（免费较弱）</td><td>帮助中心、PH 发布记录</td></tr>
    <tr><td>延迟</td><td>约 200ms（官方 2026-09 基准）</td><td>willowvoice.com 延迟基准</td></tr>
    <tr><td>准确率</td><td>官方 98%+；独立横评 voice-list 99.1% 居首（5款同音频测试）</td><td>官方、voice-list.com</td></tr>
    <tr><td>语言</td><td>100+ 语言</td><td>willowvoice.com</td></tr>
    <tr><td>合规</td><td>SOC 2 Type II、HIPAA、零数据留存、端到端加密</td><td>帮助中心、官网</td></tr>
    <tr><td>付费起点</td><td>Individual Pro $15/月（年付等效 $12/月）</td><td>官方帮助中心</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 系统级语音听写（评分 4.5/5）**
按热键（Mac 是 Fn、Windows 是 Alt+Space）即可在任意文本框出字，覆盖 ChatGPT、Claude、Gemini、Notion、Google Docs、Scrivener、Ulysses、Slack、Gmail 等。官方 2026 年 9 月基准给出约 200ms 延迟，明显快于 Wispr Flow 的约 900ms 与 superwhisper 的 1–2 秒——这个差距足够决定语音输入能否形成习惯。准确率官方标称 98%+，比苹果自带听写少约 3 倍错误；独立机构 voice-list 在同音频测试里给到 99.1%，5 款里排第一。

**2. Willow Scribe 意图写作（评分 4.0/5）**
说几个关键词，Scribe 直接扩写成一封成品邮件或消息。这是 Willow 和纯听写工具拉开差距的地方，对 inbox 清理、Slack 草稿很顺手。代价是它更像「代写」而非「记录」，不想让 AI 替你措辞的用户用不上，也拉高了 Pro 档的必要性。

**3. 风格记忆与自学词典（评分 4.5/5）**
会随使用学习你的语气与写作习惯，并自动记住人名、产品术语、缩写，技术词汇和专有名词识别明显更稳。对开发者在 Cursor 里口述 prompt、对团队统一术语都很有用。企业版还能把共享词典一键推到全组，这点比多数竞品更「组织级」。

**4. 隐私与离线（评分 4.5/5）**
SOC 2 Type II、HIPAA、零数据留存、端到端加密都写进所有档位；Pro 及以上支持本机离线听写。唯一要提醒的是默认仍是云优先，离线是「可选项」而非默认——对法律、医疗等强合规场景，得主动打开离线模式或上 Enterprise 签 BAA。

**5. 跨端与多语（评分 3.5/5）**
Mac/Windows/iOS 三端一致体验是卖点，但 Android 仍「即将上线」，且隐私设置不会从桌面同步到 iOS，跨设备用户要手动配两次。多语支持 100+ 语言，不过用户反馈非英语口述偶尔会被切回英文，官方称已在修。

## 价格方案

<table>
  <thead>
    <tr><th>版本</th><th>价格</th><th>关键差异</th><th>适合谁</th></tr>
  </thead>
  <tbody>
    <tr><td>Free</td><td>$0</td><td>Frontier Mini 较弱模型、约 2000 词/周、单次 5 分钟、个人词典与风格匹配、隐私模式、三端可用</td><td>轻度试用、想先感受一下的人</td></tr>
    <tr><td>Individual Pro</td><td>$15/月（年付等效 $12/月，约 $144/年）</td><td>无限字数、单次 8 分钟、离线听写、更快更准的转写、智能记忆、新功能抢先、优先支持</td><td>每天大量敲字的个人用户</td></tr>
    <tr><td>Team Pro</td><td>$12/用户/月（最低 3 席，年付约 $9.6/用户/月）</td><td>含 Individual Pro 全部，加集中计费、团队共享词典、共享快捷指令、团队管理后台</td><td>3 人以上的团队 / 部门</td></tr>
    <tr><td>Enterprise</td><td>按席位数定制</td><td>含 Team Pro 全部，加 SOC 2、HIPAA、强制隐私模式、零数据留存、SSO/SAML、MSA/DPA、专属支持、批量折扣</td><td>50+ 席或强合规企业</td></tr>
  </tbody>
</table>

注：免费版在官方帮助中心明确标「每周 2000 词上限」，与部分营销文案写的「无限听写」口径不完全一致，重度用户请以付费档为准。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Willow Voice</th><th>Wispr Flow</th><th>VoiceInk</th><th>苹果自带听写</th></tr>
  </thead>
  <tbody>
    <tr><td>起步价</td><td>免费 / Pro $15月</td><td>$15月 或 $144年</td><td>$29 一次性买断</td><td>免费（设备自带）</td></tr>
    <tr><td>延迟</td><td>约 200ms</td><td>约 900ms</td><td>本地推理，快</td><td>约 500ms+</td></tr>
    <tr><td>准确率</td><td>98%+（横评 99.1%）</td><td>约 95%（自报）</td><td>85%+（自报）</td><td>偏弱、无上下文</td></tr>
    <tr><td>平台</td><td>Mac/Win/iOS</td><td>Mac/Win/iOS/安卓</td><td>仅 macOS</td><td>Mac/iOS</td></tr>
    <tr><td>离线</td><td>Pro 起支持</td><td>支持</td><td>100% 本地</td><td>设备端</td></tr>
    <tr><td>合规</td><td>SOC2+HIPAA</td><td>SOC2+HIPAA（部分档）</td><td>本地、无云端</td><td>苹果标准隐私</td></tr>
    <tr><td>买断档</td><td>无</td><td>无</td><td>有（$29）</td><td>免费</td></tr>
    <tr><td>定位</td><td>跨端云听写+团队合规</td><td>云听写+屏幕语义</td><td>Mac 本地隐私</td><td>轻量免费</td></tr>
  </tbody>
</table>

横向看，Willow 在「速度 + 跨端 + 企业合规」三角上最均衡；Wispr Flow 多一个安卓端和屏幕语义但口碑两极；VoiceInk 是想要本地离线、一次性买断的 Mac 用户首选；苹果自带听写免费但无自定义词典和上下文格式化，只适合偶尔短句。

## 优势与短板

优势很硬：200ms 延迟是真快，98%+ 准确率和独立横评第一给的是实打实的数据；三端一致的「任意文本框出字」体验，配合 Scribe 和风格记忆，对天天和文字打交道的人提效明显；合规资质（SOC 2 Type II、HIPAA、零数据留存）让它敢进企业采购清单，这在听写品类里不多见。创始人背景也加分——18 岁进 YC、斯坦福退学的 Allan Guo，加上 $4.5M 融资和 TechCrunch 报道的 50% 月环比增长，说明不是昙花一现。

短板同样实在：免费版 2000 词/周基本只够试两天，重度用户绕不开付费；Android 缺席、隐私设置不跨设备同步，跨端党会别扭；闭源、无终身买断，5 年算下来约 $720，对偏好本地和买断的用户不友好；非英语偶发切回英文、那个关不掉的闲置提醒，是被用户点名吐槽的两个小刺。闭源也意味着无法像 VoiceInk 那样自己审计代码。

## 最终推荐

**建议直接用（强烈推荐）**：每天要写大量邮件、Slack、文档，且主要在 Mac/Windows/iOS 三端之一工作的知识工作者、创始人、开发者。尤其如果你已经在用 ChatGPT/Claude 写东西，用 Willow 口述 prompt 能把输入速度从 40 词/分提到 150 词/分，回本很快。先免费版试两天，确认习惯后再上 Individual Pro（年付 $144 最划算）。

**建议团队用**：3 人以上的客服、运营、销售团队，Team Pro $12/用户/月能统一术语词典和后台管理，IT 也能直接过合规。

**不建议用**：必须安卓端的人（等官方上线）；要求开源可审计或一次性买断的重度隐私用户（去看 VoiceInk）；只想偶尔说两句短句、对准确率要求不高的轻度用户（苹果自带听写就够了，别花钱）。

一句话：它目前是云听写品类里「又快又准又能进企业」的最稳选择，唯一要权衡的是订阅制价格和安卓/开源的缺席。

---

**评测声明**：本文基于 Willow 官方站点与帮助中心、YC/创始团队公开报道（enstarz、westca）、TechCrunch 与 Product Hunt 公开数据、以及 voice-list.com 等独立横评撰写。价格、延迟、准确率、合规资质均来自上述可公开核验的来源；本文不含任何付费推广。
