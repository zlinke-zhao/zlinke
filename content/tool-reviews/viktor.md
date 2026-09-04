---
id: viktor
title: Viktor 深度评测：住在 Slack/Teams 里的 AI 同事，不只是聊天机器人
date: 2026-09-04
category: AI办公效率
rating: 4.4
price: 免费档 $100 永久有效积分（免信用卡）；Team 套餐 $50/月起（20,000 积分），阶梯至 $300/月（125,000 积分），Enterprise 定制；按工作区计费、不按席位
subtitle: Zeta Labs 出品的 AI 虚拟员工，原生嵌入 Slack 与 Microsoft Teams，自带持久云电脑写代码、出 PDF/看板/网页应用，连接 3,200+ 工具，Accel 领投 $75M A 轮
url: https://viktor.com
pros:
  - 原生驻留 Slack/Teams，@提到即干活，团队零新界面学习成本，接回结果就在对话流里
  - 自带持久云电脑、真写代码跑任务，交付的是 PDF/看板/网页应用/PR，而非一段要你执行的文字
  - 3,200+ 集成全部开放在入门档，无按席位计费、无集成门槛（growthloop 式差异）
  - 发布自有 MCP server（2026-07-31，既当 server 也当 client），可让 Claude Code/Cursor 委派任务
  - 审批门 + OAuth/密钥保险库 + 管理员可断连/暂停/停任务，敏感动作默认有人把关
  - 免费 $100 积分永不过期、免信用卡，试错门槛极低；G2 约 4.8–4.9/5
cons:
  - 信用计费不透明且难预测：多个独立评测指出真实月耗常跑 $150–400，远高于 $50 招牌价
  - 积分消耗快，重复处理已讨论过的问题也会再扣积分，需要自己校准用量
  - 仅限 Slack/Teams，无独立 Web 界面，用 Google Chat/Discord 的团队无法直接采用
  - 不持 HIPAA/FedRAMP，强合规采购场景受限
  - 正面面对 Salesforce Agentforce、Microsoft Copilot 等资金更厚的平台内建竞品
  - 官方牵引力数字（50,000+ 团队、$15M ARR run-rate）均为公司自报，任务成功率/失败率未公开
alternatives:
  - claude-cowork
  - chatgpt-work
  - doubao-work
  - omniwork
---

## 一句话结论

Viktor 的卖点很直白：「不是工具，是一次招聘。」它把 AI Agent 直接塞进 Slack 和 Microsoft Teams，给你一台持久云电脑，能写代码、跑分析、出 PDF/看板/网页应用，而不是只回一段需要你动手的文字。3,200+ 集成全档开放、按工作区而非按席位计费，加上 Accel 领投的 $75M A 轮与 Slack 联合创始人天使背书，是它最硬的底气。真正要警惕的是信用计费——招牌 $50/月，真实活跃团队月耗常被独立评测记录到 $150–400。综合评分 4.4（与工具库标注一致）。

## 它到底是什么

Viktor 由 Zeta Labs 打造（团队此前做过 Jace AI 邮件助手），公司 2023 年由 Fryderyk Wiatrowski（CEO）与 Peter Albert（CTO）创立，二人都出自 Meta。产品 2026 年 2 月公开上线，2026 年 5 月宣布由 Accel 领投的 $75M A 轮，Slack 联合创始人 Stewart Butterfield 与 Cal Henderson 均在天使之列，跟投方含 Bek Ventures、Kaya VC、Inovo VC、Tenacity Capital。创始人称上线三个月内即达到 $15M 年化收入 run-rate（公司自报）。

它和「聊天助手」的核心区别：Viktor 在云端有一台持久的、带状态的电脑。你 @它一下，它读请求、连工具、写代码执行、把成稿回帖到原对话里——PDF、Excel、看板、可部署的网页应用、甚至开好的 PR 都能直接交付。它还会扫描频道、主动提议把重复职责接过去（晨间营收简报、周度广告审计、异常告警），你批一次它就持续跑。

## 核心能力（已多源交叉验证）

<table>
  <thead>
    <tr>
      <th>能力</th>
      <th>说明</th>
      <th>验证来源</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>代码执行</td>
      <td>在隔离云环境写并运行代码，构建网页应用并部署到可分享链接</td>
      <td>theaiagentindex / rywalker / smartkeys</td>
    </tr>
    <tr>
      <td>3,200+ 集成</td>
      <td>OAuth 或保险库密钥连接，含 Stripe、Meta Ads、Notion、GitHub、Salesforce、HubSpot、Google Ads、Linear、Jira、Confluence</td>
      <td>多家一致</td>
    </tr>
    <tr>
      <td>报告与数据</td>
      <td>跨源交叉引用，交付董事会级 PDF/Excel/摘要；只读 GitHub 模式（2026-05-23）、Supabase 一键集成（2026-06-10）</td>
      <td>theaiagentindex</td>
    </tr>
    <tr>
      <td>主动自动化</td>
      <td>heartbeat 观察团队工作方式并提议自动化，审批后常驻运行</td>
      <td>smartkeys / gotoolradar</td>
    </tr>
    <tr>
      <td>计划任务</td>
      <td>周期性简报/扫描/复盘，支持暂停与恢复</td>
      <td>rywalker</td>
    </tr>
    <tr>
      <td>工程与媒体</td>
      <td>读仓库、开分支、写码、开 PR、跑测试；媒体生成（TTS/转写/文生视频，2026-03 加入）</td>
      <td>rywalker</td>
    </tr>
    <tr>
      <td>MCP 双角色</td>
      <td>2026-07-31 发布自有 MCP server（既当 server 也当 client），Claude Code/Cursor 可委派任务</td>
      <td>theaiagentindex</td>
    </tr>
    <tr>
      <td>安全与管控</td>
      <td>OAuth 优先、密钥入保险库执行时注入且不进模型上下文；管理员可断连集成/暂停用户/停任务；敏感动作默认审批门</td>
      <td>neodrop / gotoolradar</td>
    </tr>
  </tbody>
</table>

Viktor 已上架 Slack App Directory（OAuth 范围与安全态势经 Slack 审核），Microsoft Teams 支持已上线。它明确不适合 Slack/Teams 之外的团队——没有独立 Web 界面，用 Google Chat 或 Discord 的团队无法直接采用。

## 定价（多目录一致，仅档位差异）

<table>
  <thead>
    <tr>
      <th>档位</th>
      <th>价格</th>
      <th>积分</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Free</td>
      <td>$0</td>
      <td>$100 永久有效积分</td>
      <td>免信用卡、免销售呼叫</td>
    </tr>
    <tr>
      <td>Team</td>
      <td>$50/月</td>
      <td>20,000</td>
      <td>入门档，全集成开放</td>
    </tr>
    <tr>
      <td>Team</td>
      <td>$75/月</td>
      <td>30,000</td>
      <td>—</td>
    </tr>
    <tr>
      <td>Team</td>
      <td>$100/月</td>
      <td>40,000</td>
      <td>多目录印证的主档</td>
    </tr>
    <tr>
      <td>Team</td>
      <td>$200/月</td>
      <td>80,000</td>
      <td>—</td>
    </tr>
    <tr>
      <td>Team</td>
      <td>$300/月</td>
      <td>125,000</td>
      <td>—</td>
    </tr>
    <tr>
      <td>Enterprise</td>
      <td>定制</td>
      <td>量价</td>
      <td>账单/DPASLA/专属上线</td>
    </tr>
  </tbody>
</table>

计费按工作区而非按席位；所有档位功能与集成完全一致，只差积分额度；非营利组织月费 9 折；未用计划积分可顺延 1 个月。信用消耗大致区间：轻量任务 100–300、复杂多工具流程 500–1,500、重项目 2,000–5,000。

> 透明提示：所谓「$50 与 $100 冲突」其实只是同一价格页上的两个档位（$50=20K、$100=40K），并非真实矛盾。真正的风险在计费模型本身——招牌价是地板不是天花板。

## 和谁比

<table>
  <thead>
    <tr>
      <th>维度</th>
      <th>Viktor</th>
      <th>Claude Cowork（见 claude-cowork）</th>
      <th>ChatGPT Work（见 chatgpt-work）</th>
      <th>豆包工作（见 doubao-work）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>主界面</td>
      <td>Slack/Teams 原生</td>
      <td>对话式协作</td>
      <td>ChatGPT 工作区</td>
      <td>飞书/独立 App</td>
    </tr>
    <tr>
      <td>执行形态</td>
      <td>持久云电脑 + 真跑代码</td>
      <td>Agent 协作</td>
      <td>工作流/Agent</td>
      <td>工作伙伴 + 云电脑</td>
    </tr>
    <tr>
      <td>集成数</td>
      <td>3,200+</td>
      <td>依生态</td>
      <td>依生态</td>
      <td>100+</td>
    </tr>
    <tr>
      <td>计费</td>
      <td>信用制、按工作区</td>
      <td>订阅/按量</td>
      <td>订阅</td>
      <td>免费/订阅</td>
    </tr>
    <tr>
      <td>适合谁</td>
      <td>已重度用 Slack/Teams 的团队</td>
      <td>Claude 生态团队</td>
      <td>OpenAI 生态团队</td>
      <td>中文/飞书团队</td>
    </tr>
  </tbody>
</table>

外部强势竞品是平台内建的 Salesforce Agentforce 与 Microsoft Copilot——它们背靠很多团队已在付钱的既有平台，是 Viktor 最现实的替代选项。若你要的是固定成本可预测，Zapier（年付 $19.99 起）、Make（年付 $9 起）这类按固定费自动化的工具也常被拿来对照。

## 真实反馈与注意事项

G2 评分约 4.8–4.9/5，多条认证评价称它真交付了工作（如「SEO 修复是原本要花几千刀外包的活，我已砍掉至少两个付费工具」）。主要吐槽集中在两处：一是信用烧得比预期快、重提已讨论的问题也再扣费；二是真实月耗常冲到 $150–400，和 $50 招牌价落差大（eesel AI、gotoolradar 均指出）。审查者普遍认可它的审批门与安全架构，但也提醒：涉及 CRM、代码库、账单系统的动作需要配套操作规程，模型选错记录或基于陈旧上下文产出「合理结果」的风险仍在。

合规面：Viktor 不持 HIPAA/FedRAMP，强监管采购需另寻。牵引力数字（50,000+ 团队、20,000+ 工作区、2,000+ 客户组织）多来自公司自报，任务成功率/失败率未公开，引用时宜打折。

## 值不值得用

已经把 Slack/Teams 当主协作场的团队：先用免费 $100 积分实测一个真实跨工具任务（比如周报自动拉 Stripe+HubSpot+Google Ads 出 PDF），再按真实信用消耗选 Team 档。它的价值在「连接 + 执行闭环」而非新聊天窗口；最大变量是信用计费下的真实月成本，以及你愿不愿意为敏感动作配一套审批操作规程。Google Chat/Discord 团队、或要 HIPAA/FedRAMP 的，直接排除。
