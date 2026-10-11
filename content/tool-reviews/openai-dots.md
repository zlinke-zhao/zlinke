---
id: openai-dots
title: "OpenAI Dots 深度评测：100美元一个月的常驻AI同事，是真未来还是赶工半成品"
date: "2026-10-11"
category: "AI工作台"
rating: 4.0
price: "首个Dot随ChatGPT Pro（100/200/500美元每月）或Business Premium（100美元每用户每月，年付；月付125美元）免费包含，不单独售卖；Free/Go/Plus不可用"
subtitle: "基于GPT-6 Astra的常驻智能体，自带云电脑、连4000+应用，但上线头10天可靠性翻车"
url: "https://openai.com/index/introducing-dots/"
pros:
  - "底层模型业界第一梯队：GPT-6 Astra驱动，多位一线测评者认可其Agent推理与跨应用协调能力"
  - "架构理念先进：每个Dot独立云电脑+浏览器，24/7常驻，关掉笔记本也能续跑，跨ChatGPT/Slack/Teams共用记忆"
  - "权限与审批设计到位：Custom Rules可设自动/需批准/禁止，涉及账户的动作用auto-review兜底，改密码永远留给人"
  - "首个Dot不额外收费：已付Pro/Business Premium就不必再掏钱，且对话不计ChatGPT用量额度"
cons:
  - "上线即翻车：The Register报道任务失败、连接掉线、云连接故障、Dot凭空消失，官网演示Dottie被当场静音"
  - "实测核心功能失灵：电话呼叫按钮不响应、生成图片打不开、简单头像渲染耗时20-30分钟、订位要5分钟"
  - "价格门槛高且仅限高端档：必须Pro起（最低100美元每月），Free/Go/Plus全 excluded，EEA/瑞士/英国个人Pro暂时拿不到"
  - "隐私与记忆不透明：无法查看/编辑/删除Dot为你形成的个人记忆，云端TLS可被OpenAI检视流量，锁定风险明显"
alternatives:
  - { name: "Grok Bot", slug: "grok-bot", reason: "自带云电脑体验更顺滑、响应更快，且可路由到Claude/Midjourney/Suno等多后端，不卡在100美元档" }
  - { name: "Cua Spaces", slug: "cua-spaces", reason: "跑在你自己的机器上、本地/自有机器免费，开生态开源，不被Pro订阅和区域政策卡脖子" }
  - { name: "LUCI Desktop", slug: "luci-desktop", reason: "本地优先的记忆层智能体，端侧OCR+本地模型，永久免费，隐私可控不把数据交给云" }
  - { name: "Manus", slug: "manus", reason: "成熟的全自主通用Agent，适合一次性复杂任务交付，无需常驻订阅即可拿到成品" }
---

## 一句话总结
OpenAI Dots 适合已经每月花100美元以上订阅 ChatGPT Pro、且有一堆跨应用琐事想甩出去的知识工作者；不适合预算敏感用户、欧盟区个人用户，以及今天就想把它当可靠员工使的人——它现在的稳定性还配不上它的野心。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th><th>来源</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>OpenAI（美国旧金山）</td><td>DevDay 2026 发布会 / 多家媒体</td></tr>
    <tr><td>发布时间</td><td>2026年9月29日，DevDay 开发者大会（现场2500+开发者）</td><td>Anadolu/Bernama、aiincontext</td></tr>
    <tr><td>底层模型</td><td>GPT-6 Astra（旗舰模型）</td><td>OpenAI 官方公告、Futurepedia</td></tr>
    <tr><td>运行形态</td><td>每个Dot独立云电脑+浏览器（Linux沙箱工作区）</td><td>OpenAI 公告、HN Distilled</td></tr>
    <tr><td>应用连接</td><td>通过ChatGPT插件生态连4000+应用</td><td>OpenAI 公告、DevX</td></tr>
    <tr><td>接入渠道</td><td>ChatGPT（桌面/网页/移动）、Slack、Microsoft Teams；短信后续支持</td><td>OpenAI 公告、Bernama</td></tr>
    <tr><td>价格门槛</td><td>需ChatGPT Pro（100/200/500美元每月）或Business Premium（100美元每用户每月）；Free/Go/Plus不可用</td><td>DevX、Futurepedia</td></tr>
    <tr><td>区域限制</td><td>上线时个人Pro在EEA、瑞士、英国被排除；企业/教育/医疗可经管理员启用Beta</td><td>DevX、Futurepedia、HN Distilled</td></tr>
    <tr><td>用户规模</td><td>OpenAI称ChatGPT周活12亿；Dot为新增层，非独立DAU口径</td><td>Bernama（OpenAI披露）</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. 常驻云电脑与跨应用执行（评分 4.2/5）**
Dot 的本质是「住在自己云电脑里的员工」：它有独立 Linux 工作区、内置浏览器，通过你明确授权的插件接入 Gmail、Google Drive、Slack、日历等 4000+ 应用。实测中有人让它更新 HubSpot 文章、清理 Outlook 草稿、搭站点审计和关键词追踪，确实跑通了（Anthony Luna 多日真实任务）。但代价是慢——有测评者记录订一张餐厅位花了约 5 分钟，且它会先打开餐厅条款页再动手；一个简单研究任务云电脑启动就要约 2 分钟。能力是真的，节奏是磨人的。

**2. 主动研究与记忆（评分 4.0/5）**
空闲时 Dot 用只读权限扫描已连应用，主动梳理待办、排查遗漏，整理后等审批，不擅自发消息或改内容。Dan Shipper 的 Dot「Boo」曾主动提醒他一个重订航班与周三录音冲突、却没进日历的坑。它还会随使用学习偏好。但硬伤是：你目前无法查看、编辑或删除它为你形成的记忆（DevX 明确指出这是真实缺口），加上云端 TLS 由 OpenAI 签发、可检视流量，隐私控制并不彻底。

**3. 多渠道对话与语音呼叫（评分 3.0/5）**
宣传里「打电话给 Dot」是头牌功能，但上线实测翻得最难看：aisuccesslab 的测评中呼叫按钮根本不响应；DevDay 直播演示 Dottie 呼叫时卡顿，被当场静音，观众在 r/codex 吐槽「这产品把她所有请求都搞砸了」。语音延迟本身尚可（Nate Herk 称不差），但「叫它不动」对主打功能而言是硬伤。

**4. 用户掌控与安全防护（评分 4.3/5）**
这是 OpenAI 做得最实的部分。Custom Rules 可把动作分级为自动/需批准/禁止；任何可能影响共享或敏感数据的操作都过 auto-review；改密码等敏感动作永远留给人；可一键 Take over 接管。WIRED 测试中 Dot 遇到 TikTok Shop 订阅取消的 CAPTCHA 直接放弃并让你来，OpenAI 称在用户明确批准时可偶尔过 CAPTCHA 但有滥用防护。安全框架值得给分，只是别把它当免检章——OpenAI 自己也提醒「仍会犯错，重要工作要复核」。

## 价格方案

<table>
  <thead>
    <tr><th>方案</th><th>价格</th><th>Dots 包含情况</th><th>备注</th></tr>
  </thead>
  <tbody>
    <tr><td>ChatGPT Free / Go / Plus</td><td>0 ~ 20美元每月</td><td>不包含</td><td>Plus 用户被明确排除</td></tr>
    <tr><td>ChatGPT Pro（基础）</td><td>100美元每月</td><td>首个Dot免费含</td><td>个人Pro在EEA/瑞士/英国暂不可用</td></tr>
    <tr><td>ChatGPT Pro 200</td><td>200美元每月</td><td>首个Dot免费含</td><td>新订阅者用量额度被下调（20x降至10x）</td></tr>
    <tr><td>ChatGPT Pro 500</td><td>500美元每月</td><td>首个Dot免费含</td><td>最高额度=25倍Plus；含GPT-6 Astra Ultrafast，Codex最快8倍</td></tr>
    <tr><td>Business Premium</td><td>100美元每用户每月（年付）；月付125美元</td><td>首个Dot免费含</td><td>企业/教育/医疗经管理员启用Beta</td></tr>
  </tbody>
</table>

关键提示：与 Dot 的对话不计入 ChatGPT 用量上限；但通过 Codex 或 ChatGPT Work 启动的任务仍走各自额度。Dot 不单卖，所以「为它从 Plus 升 Pro」是一笔 100 美元每月起的决策，而非加几块钱。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>OpenAI Dots</th><th>Meta Muse</th><th>Grok Bot</th><th>OpenClaw（开源）</th></tr>
  </thead>
  <tbody>
    <tr><td>价格</td><td>需Pro 100美元每月起（首个免费含）</td><td>免费起，付费20-100美元每月</td><td>可路由多后端，门槛更低</td><td>开源免费，自托管</td></tr>
    <tr><td>常驻/自主</td><td>24/7云电脑，主动研究（只读）</td><td>免费档，always-on未确认</td><td>自有计算机，体验更顺滑</td><td>本地/自托管，控制最强</td></tr>
    <tr><td>应用连接</td><td>4000+（插件生态）</td><td>自有生态</td><td>多后端调度</td><td>靠社区连接器</td></tr>
    <tr><td>最大短板</td><td>上线可靠性翻车、区域限制</td><td>广告补贴、商业模式存疑</td><td>依赖X生态</td><td>需自己部署运维</td></tr>
  </tbody>
</table>

Dots 与 Meta Muse 是这波「常驻个人Agent」最直接的对标：Muse 免费、广告补贴，Dots 锁在 100 美元每月档。多位测评者（aisuccesslab、AGI Hunt）认为就当下完成度而言，Grok Bot、Claude 浏览器使用、Hermes、甚至几个月前的 Manus 都比 Dots 更顺手——Dots 最像「被OpenAI一手捧为头等公民、却仍显生涩的 OpenClaw」。

## 优势与短板

**优势说得出口的部分：**
- 模型底子硬。Matt Shumer 评价其底层 AI 是「业内最佳之一，有潜力成全球最强 Agent 产品」，只是 UX 还需打磨；Ethan Mollick 初步印象「相当好」。这是 Dots 最值钱的内核。
- 架构方向对。把 Agent 从「等提示的聊天框」变成「替你盯着目标、关电脑也续跑的同事」，并给出 Take over、auto-review、Custom Rules 这套可控框架，比纯黑盒自动化负责任。
- 不二次收费。已付 Pro/Business Premium 就不必再为 Dot 掏钱，且它不吞你的 ChatGPT 对话额度。

**短板必须摊开讲：**
- 上线即事故。The Register（10月7日）汇总了任务失败、连接掉线、云连接故障、Dot 消失的用户投诉；官方演示翻车更伤公信。上线头 10 天暴露的是可靠性，不是边角 bug。
- 实测核心功能掉链子。电话不接、图片打不开、头像渲染半小时、订位五分钟——这些是「今天付 100 美元能用什么」层面的问题。
- 价格与区域双重门槛。最低 100 美元每月、Free/Go/Plus 全排除、欧盟等区个人用户暂时拿不到，直接把大众市场挡在门外（Altman 自己也暗示未来会有「面向数十亿人的大众版」）。
- 隐私与锁定。不能删记忆、云端可检视流量、深度接入 Gmail/财务账户，叠加「卖模型→卖个人Agent层」的vendor策略，锁定与 surveillance 风险被 HN 社区集中质疑。

## 最终推荐

**值得现在上手的人：**
- 已经在用 ChatGPT Pro / Business Premium，且有大量跨应用机械活（邮件跟进、日程核对、反馈分诊、研究盯盘）愿意甩出去的人。既然钱已经付了，Dot 当「研究小弟」比不用强，且风险可控——只授权任务真正需要的应用即可。
- 企业/团队侧：若你们的workspace管理员能开 Beta，专家 Dot（采购/客服/合同）的预览方向值得试点，配合微软 Agent 365 治理层更稳。

**建议再等等的人：**
- 预算敏感或个人用户：为 Dots 从 Plus 升 Pro 是 100 美元每月起的决定，而当下完成度还不如免费/低价竞品，不划算。
- 欧盟/英国/瑞士个人 Pro 用户：上线即被排除，且 OpenAI 没说禁多久，别干等。
- 想要「可靠员工」的人：头 10 天的任务失败、假完成（声称「已接受offer」实则邮件还在草稿）、电话失灵，说明它今天更像「需要你兜底的实习生」。重要动作务必自己复核再放行。

**替代路线：** 想要类似能力又不想被 100 美元档和区域政策卡住，可看 Grok Bot（云电脑更顺）、Cua Spaces / LUCI Desktop（跑在自己机器、免费、隐私可控）、Manus（一次性复杂任务直接交付成品）。Dots 代表的是正确方向，但 2026 年 10 月的它，买的是「未来期票」而非「现货」。

---

**评测声明**：本文基于 OpenAI 官方公告（introducing-dots）及 Futurepedia、DevX、Anadolu/Bernama、The Register、WIRED（经 ai2day 转述）、AGI Hunt、HN Distilled、Preuve、aisuccesslab 等公开报道与用户实测撰写，所有数据与结论均可回溯至上述来源。本文不含付费推广。
