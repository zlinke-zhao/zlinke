---
id: katalyst
title: Katalyst 深度评测：把 Salesforce 管道变成 24/7 自动驾驶的 AI 销售同事
date: 2026-09-04
category: AI办公效率
rating: 4.2
price: 免费试用；平台费 $89/月（100 AI-active 商机）+ 席位 Starter $39 / Core $99 / Agent $249·座/月（年付）；Enterprise 定制
subtitle: 专为 Salesforce 团队打造的 AI 销售 Agent，自动总结通话、更新客户字段、起草跟进、推送交易信号并生成客户计划，SOC 2 安全实践与 ISO 27001 对齐控制，Product Hunt 2026-07-07 日榜第 2。
url: https://www.joinkatalyst.com
pros:
  - 原生构建于 Salesforce 之上，不替换系统、不改工作流，rep 无需学新工具
  - 通话挂断即完成笔记、建记录、更字段、起草跟进、设下一步，零手动录入
  - 写入走每个 rep 自身 Salesforce 登录，遵守权限、冲突交人审、拒绝写入显式报错而非假绿勾
  - 两维定价（按管道规模 + 按席位），比 Gong+Clari 堆叠更可预测
  - 信号监控 + 客户计划 + 利益相关者映射，把外勤情报沉淀进管道
  - 标称企业级安全（SOC 2 安全实践 / ISO 27001 对齐 / RBAC / SSO），1 个月免费试用 + 免费 onboarding
cons:
  - 仅 Salesforce 原生，HubSpot / Pipedrive 等团队上线即不支持
  - 高级能力（交易情报、风险评分、自主阶段流转）锁在 Core/Agent 高价档
  - 70% 管道健康度提升、3.5x 效率、45% 提速等均为厂商营销口径，无独立审计
  - 公开客户评价稀少，官网背书多为厂商自发布，Stripe/Atlassian 等客户名单未附详细案例
  - SOC 2 多源措辞为 posture/aligned，未明示是否已通过 Type II 审计，企业采购前需索证
  - 年轻公司（约 2025 创立、创始人 ex-Datadog），融资未公开披露，长期存续与路线图待观察
alternatives: [viktor, lightfield, makersclaw, intelli]
---

## 一、它解决的是哪个真问题

销售 rep 真正花在「卖」上的时间有多少？Katalyst 采用业界常被引用的数据：约 28%，其余 72% 淹没在 CRM 录入、会议准备、邮件归档和重建上下文里。Katalyst 的创始人 Divyansh Lohia（前 Datadog）在 Product Hunt 上的原话很直接：「rep 不讨厌卖，他们讨厌每周丢在喂 CRM 上的那些小时。」

Katalyst 的答案是：做一个 24/7 常驻的 AI 销售 Agent，坐在每场会议里、读每封邮件、盯每个账户，通话一挂就自动把 Salesforce 更新好——笔记、记录、字段、跟进草稿、下一步，全部就位。它 2026-07-07 登上 Product Hunt 日榜第 2（upvotes 各源 383–430 不一，未作为结论依据），由 German Merlo 牵线 hunt。

关键定位：它**不是**另一个要 rep 主动打开的 ChatGPT，也不是重写的 CRM。Salesforce 仍是系统真相源（system of record），Katalyst 在它之上 quietly 做重活。正如 PH 上 hunter 的点评：「Salesforce 变成数据湖，rep 继续用原来的方式工作，只不过后台有人替你把脏活干了。」

## 二、它到底做什么

工作流程很线性：连 Salesforce → 连邮箱与日历 → 选要覆盖的商机 → 会议/邮件/信号进来 → AI 总结、更新字段、起草跟进、提示风险。

核心能力四件套（发布即有的能力，多源一致）：

- **会议记录 + 自动 CRM 更新**：加入通话、实时转写、总结，建 Salesforce 笔记、更新阶段/关闭日/下一步/联系人，挂断前起草跟进邮件。
- **卫生分（Hygiene Score）**：给每条商机的 CRM 数据完整度与新鲜度打分，在漏洞变成管道问题前暴露缺口。
- **交易模式识别**：识别行为信号——邮件回复变慢、错过跟进窗口、阶段停滞——在交易变冷前报警。
- **AI Resolution 持续情报层**：在每个账户上持续浮现「此刻该看对的哪条信息」。

更高阶的能力在付费档：信号监控（高管变动、招聘、新闻、10-K、网站活动）、客户计划与利益相关者映射、交易风险评分、预测、以及 Agent 档的「自主阶段流转」。

## 三、定价（多源一致，无冲突）

官方定价页、Toolify、chatgate、trendingaitools 四源口径一致。Katalyst 用**两维定价**：一个按管道规模（组织平台费）+ 一个按席位（功能档）。

<table>
  <thead>
    <tr>
      <th>档位</th>
      <th>价格（年付）</th>
      <th>适用规模</th>
      <th>包含要点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>平台费 Pipeline Coverage</td>
      <td>$89 / 月·组织</td>
      <td>100 个 AI-active 商机（关联账户/联系人无限）</td>
      <td>按管道复杂度而非人头计费</td>
    </tr>
    <tr>
      <td>Starter</td>
      <td>$39 / 座·月</td>
      <td>1–3 人</td>
      <td>邮件/日历同步、30 次会议录制、基础 AI 对话、200 信用/座、管道看板与卫生分、应用内信号提醒</td>
    </tr>
    <tr>
      <td>Core（最受欢迎）</td>
      <td>$99 / 座·月</td>
      <td>3–15 人</td>
      <td>Pro AI 对话（带 Resolution）、自动起草邮件、自动建记录、全信号套件、500 信用/座、Slack+邮件提醒、自定义信号、LinkedIn 追踪</td>
    </tr>
    <tr>
      <td>Agent</td>
      <td>$249 / 座·月</td>
      <td>10–50 人</td>
      <td>无限 AI 对话、交易情报、利益相关者映射、风险评分、预测、自主阶段流转、2000 信用/座</td>
    </tr>
    <tr>
      <td>Enterprise</td>
      <td>定制</td>
      <td>50+ 人</td>
      <td>无限一切、全 API/Webhook、SSO/SAML、专属 CSM、SLA 保障</td>
    </tr>
  </tbody>
</table>

补充：所有档 1 个月免费试用 + 免费 onboarding（官方帮你建 AI 知识图谱、配 Salesforce 同步）；信用池用完后加购 $25 / 150 信用且永不过期；年付比月付省约 20%。换算示例——10 人 Core 团队覆盖 100 商机：约 $89 + 10×$99 = **$1,079/月**。

## 四、能力 × 档位对照

<table>
  <thead>
    <tr>
      <th>能力</th>
      <th>Starter</th>
      <th>Core</th>
      <th>Agent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>会议录制 + 自动 CRM 更新</td>
      <td>30 次/月</td>
      <td>无限</td>
      <td>无限</td>
    </tr>
    <tr>
      <td>AI 对话（问 agent）</td>
      <td>基础（5 条/会话）</td>
      <td>Pro + Resolution</td>
      <td>无限</td>
    </tr>
    <tr>
      <td>自动起草跟进邮件</td>
      <td>✗</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>自动建记录 / 全信号套件</td>
      <td>✗</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>利益相关者映射 + 风险评分</td>
      <td>✗</td>
      <td>✗</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>预测 + 自主阶段流转</td>
      <td>✗</td>
      <td>✗</td>
      <td>✓</td>
    </tr>
  </tbody>
</table>

注意：早期评测（如 GotoolRadar 首发文）曾称「定价未公开」，但当前官方定价页已清晰列出全部档位，该说法已过时——本文以最新官方页为准。

## 五、安全与权限：最该细看的一段

销售 AI 自动写回 CRM，最怕两件事：越权写入、假绿勾（以为存了其实被 Salesforce 规则拒了）。Katalyst 在 PH 答疑里被开发者逼问，创始人回应值得记录：

- **权限模型**：Katalyst **不走**超级管理员服务账号后门，而是走每个 rep 自己的 Salesforce 登录。它只能改该 rep 被授权改的东西，每次动作都记在 rep 名下。两个 rep 对同一交易输入冲突信息时，AI 不静默覆盖，而是标记交人审。
- **拒绝写入**：一次写入在 Salesforce 确认前不算「完成」。如果验证规则或必填字段把它弹回，rep 看到的是「因规则 X 未保存」，**绝不会**假绿勾；且它**不**偷偷猜测 payload 重试，而是把阻塞原样暴露出来——避免「通过验证但其实是坏数据」。

审批机制是「按字段挣来的」：早期每个写入都先问并展示推理，rep 批准后；当某字段被证明准确，你可放开该字段自动写，同时把高利害字段留在审批。这对上手体验很关键。

## 六、竞品对比

<table>
  <thead>
    <tr>
      <th>工具</th>
      <th>定位</th>
      <th>起步价（公开口径）</th>
      <th>与 Katalyst 差异</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Katalyst</td>
      <td>Salesforce 原生 AI 销售 Agent，自动写回 + 信号 + 客户计划</td>
      <td>平台 $89 + $39/$99/$249 座/月</td>
      <td>聚焦「自动维护管道」，不替换 Salesforce</td>
    </tr>
    <tr>
      <td>Salesforce Agentforce</td>
      <td>Salesforce 原生自主 Agent（原 Einstein）</td>
      <td>约 $550/座/月（年付，2026-07）或按动作约 $0.10/次</td>
      <td>能力更强但贵且需配置；已在其生态内</td>
    </tr>
    <tr>
      <td>Gong</td>
      <td>会话情报 + 教练标杆</td>
      <td>约 $160–250/座/月（报价制）</td>
      <td>强在「听懂通话」，CRM 写回弱于 Katalyst</td>
    </tr>
    <tr>
      <td>Clari</td>
      <td>预测 + 管道巡检（2025-12 合并 Salesloft）</td>
      <td>定制，第三方估算约 $100+/座/月</td>
      <td>强在预测准确度，自动写回非其主轴</td>
    </tr>
    <tr>
      <td>Oliv AI</td>
      <td>第三代 agentic 多 Agent 平台</td>
      <td>$19/座/月</td>
      <td>更便宜、跨 CRM，但成熟度与生态较新</td>
    </tr>
  </tbody>
</table>

横向看，Katalyst 的卡位是「Salesforce 团队的管道自动驾驶」——比 Gong/Clari 更聚焦写回、比 Agentforce 便宜且轻。代价是锁定 Salesforce。

## 七、谁该用，谁该等等

**适合**：已深度使用 Salesforce 的 B2B 团队，尤其是 AE、销售管理、RevOps；管道脏、跟进漏、rep 不爱填 CRM 是真实营收痛点的组织。免费试用覆盖会议录制 + 自动更新，几天就能验证它是否真能把通话内容填对字段。

**暂不适合**：用 HubSpot / Pipedrive 的团队（无原生支持）；需要独立审计过的 SOC 2 Type II 报告才敢上线的强监管行业（当前措辞为 posture/aligned，采购前索证）；想先看大量真实客户案例再决策的买家（公开评价仍少，官网 Stripe/Atlassian/Atlassian 等名单未附详细用例）。

## 八、诚实标注

- 效果数字（+70% 管道健康度、3.5x 自动化效率、45% 提速）来自定价页与营销材料，**无独立审计**，作参考而非结论。
- 客户名单（Justworks、Rapid AI、Aniai、Atlassian、Stripe、Ginesys 等）为厂商口径 logo 列表，未见逐案深度评测。
- 公司约 2025 创立、创始人 ex-Datadog，融资未公开披露；年轻产品的长期存续、路线图与独立第三方评测密度待观察。
- PH 日榜第 2 是热度证据，不是业务影响证明；早期评测也提醒「多数产品表现声称来自厂商或发布参与者」，建议小范围试点后再扩。

## 结论

Katalyst 是 2026 年面向 Salesforce 团队架构最正确的 AI 销售 Agent 之一：它不动系统真相源、零手动录入、写入守权限且拒绝假绿勾，定价也比 Gong+Clari 堆叠更可预测。短板是 Salesforce 锁定、高阶能力在贵档、效果数字与合规凭证仍需采购前验证。综合评 **4.2**（与 tools.ts 标注一致）——对 Salesforce 销售团队，它是值得在下次预测会前先试点一把的工具。
