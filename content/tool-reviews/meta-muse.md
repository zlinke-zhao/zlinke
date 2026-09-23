---
id: meta-muse
title: "Meta Muse 深度评测：住在 WhatsApp 里、会替你花钱的 AI 同事"
date: "2026-09-23"
category: "AI工作台"
rating: 4.3
price: "免费（每周最高 1 亿 tokens） / Power $20 每月 / Maximum $100 每月"
subtitle: "拆解 Meta 个人 AI 智能体的安全虚拟机架构、审批式执行与 20/100 美元定价真相"
url: "https://muse.ai"
pros:
  - "入口门槛最低：直接长在 WhatsApp 收件箱里，发消息即指挥，零安装零学习成本"
  - "独立安全虚拟机：每人一台隔离的 Muse Secure VM（Linux+完整浏览器），与本机物理隔离，靠隔离而非索取桌面权限保安全"
  - "审批式执行加 Sentinel 子代理：发邮件、付款等高风险动作必须你批准，所有操作有完整审计轨迹"
  - "真实交易能力最强：结账用 Stripe Link 一次性卡号隐藏真实卡，部分购买享 Link 赔付保障，是 AI 代理里首个敢代你花钱的"
cons:
  - "仅限美国且 18 岁以上，中国大陆与港澳暂不可用，国内读者只能看不能上手"
  - "隐私信任硬伤：训练默认退出需手动操作，对话不进广告系统的承诺被质疑耐久性，Confidential VM 尚未上线"
  - "早期可靠性不稳：内测曾静默丢任务、误拉 iCloud 私人照片，正式版仍有登录循环、价格过期等毛刺"
alternatives:
  - { name: "OpenClaw", slug: "openclaw", reason: "开源本地智能体，数据主权彻底、生态最广，但部署门槛高且有安全债" }
  - { name: "Claude Cowork", slug: "claude-cowork", reason: "工作场景 Agent，本地优先、隐私更可控，适合把 Agent 当同事用的人" }
  - { name: "ChatGPT Work", slug: "chatgpt-work", reason: "OpenAI 工作版 Agent，模型生态最广，适合已在 ChatGPT 体系里的团队" }
  - { name: "Manus", slug: "manus", reason: "通用任务 Agent，自主规划能力强，可作为不分入口的纯云端替代" }
---

## 一句话总结
Meta Muse 适合美国地区、想把订票购物填表这类跑腿活甩给 AI 的人；不适合中国大陆用户、隐私敏感者，以及需要笔记/文档/团队协作的知识工作者。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>数据</th></tr>
  </thead>
  <tbody>
    <tr><td>开发商</td><td>Meta（首席 AI 官 Alexandr Wang，AI 产品 VP Vishal Shah）</td></tr>
    <tr><td>首发时间</td><td>2026-09-08，仅美国、18 岁以上</td></tr>
    <tr><td>底层模型</td><td>Muse Spark 1.3（2026-09-02 发布，Meta 称迄今最强）</td></tr>
    <tr><td>入口形态</td><td>Muse App（iOS/Android）/ muse.ai 网页 / WhatsApp；AI 眼镜规划中</td></tr>
    <tr><td>执行环境</td><td>每人一台 Muse Secure VM（隔离 Linux 虚拟机 + 浏览器 + 存储 + 终端）</td></tr>
    <tr><td>安全机制</td><td>Sentinel 安全子代理审批所有出网动作；bug bounty 最高 30 万美元</td></tr>
    <tr><td>支付方式</td><td>Link by Stripe 一次性卡号；Shop Pay / 1Password 待上线</td></tr>
    <tr><td>公开定价</td><td>免费（每周最高 1 亿 tokens）/ Power 20 美元每月 / Maximum 100 美元每月</td></tr>
    <tr><td>开发者 API</td><td>输入 1.25 美元/百万 token，输出 4.25 美元/百万 token，100 万上下文</td></tr>
    <tr><td>生态触达</td><td>Meta 家族 36 亿日活（2026 Q2）；WhatsApp 30 亿+ 月活（2025-04）</td></tr>
  </tbody>
</table>

## 核心功能评测

**1. WhatsApp 原生入口 —— 评分 5.0**
Muse 最大的差异化不是能力，而是入口。它直接长在 WhatsApp 收件箱里，你像给朋友发消息一样写一句话，Agent 就在后台开工，不用装 App、不用学新界面。对普通用户来说，这是库内所有桌面智能体里最低的入门门槛——别人还在教你配 MCP、接权限，Muse 已经躺在你的聊天列表里了。早期评测里被反复提到的一句话是：这是第一个达到「开箱即用」水平的 OpenClaw 类消费产品。

**2. Muse Secure VM 隔离执行 —— 评分 4.5**
每个用户跑在一台独立的云端 Linux 虚拟机上，自带浏览器、存储和终端，和你的本机物理隔离。Meta 强调它看不到你的密码和支付卡号。这种「在独立安全电脑上干活」的架构，和库内其他桌面 Agent（要么在你本机跑、要么读你屏幕/无障碍权限）走的是完全不同的安全思路——它靠隔离而非索取权限来保安全。代价是它至今仍依赖云端，离线不可用，且声称的 Confidential VM（对 Meta 自身也加密）要到年底才上线。

**3. Sentinel 审批式执行 —— 评分 4.5**
一台独立的 Sentinel 子代理常驻同一台 VM，是所有出网动作的唯一权限裁决者。买东西、发邮件这类高风险步骤会停下来等你明确批准；搜索、比价这类低风险动作才自动跑。结账用 Link by Stripe 的一次性卡号，真实卡号不暴露给商家也不暴露给 Muse，部分购买还带 Link 赔付保障——这是 AI 代理里首个真正落地的「敢替你花钱」机制。但注意：内测期间曾发生 Agent 在识别生日派对玩具照片时，未经要求翻出了无关的 iCloud 私人照片，Meta 为此把春季发布推迟到 9 月以修安全。

**4. 连接你的应用并自造工具 —— 评分 4.0**
Muse 能接入邮箱、日历、Instagram、Facebook、Messenger、Google Workspace、Ticketmaster、OpenTable、Spotify、Apple Health 等，缺工具时还能自己写代码临时造一个。跨账号搜索（比如「找出上周和某人的所有往来」）是 ChatGPT 和 Claude 目前都还没补上的真实能力缺口，Muse 填上了。但连接越多、暴露面越大，隐私信任问题也随之放大。

## 价格方案

<table>
  <thead>
    <tr><th>档位</th><th>月费</th><th>额度（公开口径）</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>Free</td><td>$0</td><td>每周最高 1 亿 tokens（注册需绑卡）</td><td>日常轻量任务基本够用，是 Meta 主推的「人人可用」档</td></tr>
    <tr><td>Power</td><td>$20</td><td>约 5 亿 tokens/周（Meta 帮助中心口径）</td><td>面向高频用户，只加容量不解锁新功能</td></tr>
    <tr><td>Maximum</td><td>$100</td><td>约 30 亿 tokens/周</td><td>最高用量档，是普通 AI 订阅价的 5 倍跳涨</td></tr>
  </tbody>
</table>

一个关键事实：Meta 的定价是「按用量阶梯」而非「按功能阶梯」——付费档只提升 token 天花板，不解锁额外能力。但 Power 和 Maximum 的精确 token 上限在发布时并未被 TechCrunch/Axios 完整公布，部分媒体引用的 5 亿/30 亿每周来自 Meta 帮助中心口径，建议以官网正式定价页为准。对每天高频使用的人来说，这种「烧多少不知道」的计量方式，账单可预测性不如 flat-rate 订阅。

## 与竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Meta Muse</th><th>OpenClaw</th><th>Claude Cowork</th><th>Manus</th></tr>
  </thead>
  <tbody>
    <tr><td>形态</td><td>消费级 IM 原生 Agent</td><td>开源本地智能体</td><td>工作场景 Agent</td><td>通用任务 Agent</td></tr>
    <tr><td>执行位置</td><td>云端隔离 VM</td><td>你的本机</td><td>云端/本地混合</td><td>云端</td></tr>
    <tr><td>免费档</td><td>有（1 亿/周）</td><td>软件免费（API 另计）</td><td>有</td><td>有限</td></tr>
    <tr><td>数据归属</td><td>Meta 云端（可退训练）</td><td>完全本地</td><td>Anthropic</td><td>厂商云端</td></tr>
    <tr><td>最大差异</td><td>WhatsApp 入口 + 真能花钱</td><td>数据主权 + 生态最广</td><td>编码与办公强</td><td>通用自主规划</td></tr>
  </tbody>
</table>

横向看，Muse 的独门点是「消费级 IM 原生 + 独立安全 VM + 可交易」的组合，这在库内桌面 Agent 里没有同类。但它和 OpenClaw（数据主权彻底、可自托管）走的是两个极端：一个把所有信任压在 Meta 的安全承诺上，一个把所有控制权交给你自己。

## 优势与短板

优势很清晰：入口最低（WhatsApp 零安装）、架构最讲安全姿态（隔离 VM + Sentinel 审批 + 审计轨迹）、交易能力最实（Stripe Link 一次性卡 + 赔付保障）、生态触达最广（36 亿日活的社交图谱做上下文）。对一个普通美国人来说，这是目前离「雇个 AI 同事」最近的产品。

短板同样尖锐。第一，**地域封锁**：仅美国 18+，中国大陆与港澳完全不可用，国内读者现阶段只能当资讯看。第二，**信任硬伤**：训练默认是退出需手动（opt-out 而非 opt-in），「对话不进广告系统」的承诺被大量用户质疑「能撑多久」，而真正对 Meta 自身也加密的 Confidential VM 要到年底才上。第三，**早期不稳**：内测静默丢任务、误拉私人照片的黑历史还在，正式版用户实测仍遇到登录循环、价格过期等毛刺；对一个「会替你发邮件、会替你花钱」的 Agent，静默失败是最危险的失败模式。第四，**场景偏窄**：它没有笔记、没有文档、没有对自己资料的语义搜索，只擅长跑腿（订票、购物、填表、比价），知识工作者用不上；且纯单人产品，无团队空间、无协作、无管理员。

## 最终推荐

**建议用的人**：住在美国、想把订票/购物/填表/账单协商这类重复性跑腿活外包出去的人；已经在用 WhatsApp 且不想装新 App 的人；能容忍早期毛刺的尝鲜者——你大概率会遇到登录循环和过期价格，但只要不当成「必须 100% 可靠」的生产工具就没问题。一位 BI 记者的真实测试里，Muse 帮他同事成功向保险公司申诉了一笔医疗账单，也确实能开 Walmart 订单（只是把「只要免运费」理解得太死板、顺手加了同日达费）。

**不建议用的人**：中国大陆/港澳用户（根本用不了）；隐私敏感者（Meta 的数据归属疑虑短期无解）；知识工作者（它没有笔记/文档层， drowning in context 的人用错工具）；ADHD 或执行功能较弱的人（静默停工会是你要不起的失败模式）；需要可预测账单的人（token 计量烧多少你不知道）。

**给国内读者的结论**：Muse 是 2026 年最值得关注的 Agent 范式样本——它证明了「把会干活的 Agent 塞进人人都在用的 IM」比「再做一个桌面 App」更可能成为消费习惯。但就现在而言，它的价值是「观察」大于「使用」。等它开放更多地区、Confidential VM 上线、且独立长期评测把可靠性坐实之前，库内已有的 OpenClaw、Claude Cowork、Manus 反而对国内用户更实在。

---

**评测声明**：本文基于 Meta 官方新闻室/帮助中心公告、Reuters、TechCrunch、Axios、CNBC、CNET 等报道，以及 Trustburn、Saner.AI、Business Insider 等用户反馈聚合撰写。价格与功能数据均来自上述公开来源，部分付费档精确 token 上限以 Meta 官网正式定价页为准。本文不含付费推广。
