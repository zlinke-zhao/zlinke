---
id: browseract
title: BrowserAct 深度评测：给 AI Agent 配一个能趟平 Cloudflare 和验证码的浏览器执行层
date: 2026-09-04
category: AI编程开发
rating: 4.3
price: 免费试用 500 积分/天；按量 $1=1,000 积分（首购 5 折）；订阅档官方标「即将上线」，AppSumo 买断 $49 起
subtitle: 开源的 AI Agent 浏览器自动化 CLI/Skill，三层反检测（指纹环境+自动解验证码+人工接力）让 Agent 真正打开网页、操作登录态、跑通长任务，并把流程沉淀为可复用 Skill
url: https://www.browseract.com
pros:
  - 开源 Skills（MIT 许可），Claude Code/Cursor/Codex/Windsurf 一句话装，零新界面学习成本
  - 三层反检测：指纹环境（TLS 轮转/无头隐藏）→ 自动解验证码（reCAPTCHA/Turnstile/DataDome）→ 人工接力，单层退化其他层兜底
  - 输出是带编号的干净页面信息而非原始 HTML，省 token、推理更稳；远程协助让人工 2FA 后 Agent 同会话续跑
  - 多账号隔离：每个 browser 独立 cookie/代理/指纹，并行任务不串号
  - 本地优先：跑在你自己机器上，登录态不出本机，敏感团队可控；云端 Bots 另作托管选项
  - Skill Forge 把跑通的流程沉淀成可复用 Skill，把一次性脚本变成版本化工作流
cons:
  - 产品面很宽（Cloud Bots/Agent CLI/Skills/Skill Forge/浏览器档案/步骤/代理积分），概念比单一抓取 API 多
  - AI 驱动的浏览器执行不如确定性代码可预测，关键动作仍需校验与显式停止条件
  - 成本预测需实测：积分横跨步骤+档案+代理流量，单价低不等于一个完整任务的真实花费
  - 迭代快，需锁 CLI/Skill 版本并审变更后再上生产；GitHub 星标高不等于已过安全审计
  - 非所有抓取/测试场景都适用：API 能稳定出数就别上浏览器自动化；要精确断言的 UI 测试 Playwright 更清楚
  - 不应在未经授权下访问私密/受限数据；PH upvotes 各源记录 536–629 不一
alternatives:
  - browserbase
  - prometheus-firecrawl
  - context-dev
  - anysearch
---

## 一句话结论

BrowserAct 解决的是 Agent 落地最无聊也最关键的问题：模型想得再好，一进真实网页就卡在登录过期、Cloudflare 弹窗、验证码、多账号串线上。它把浏览器做成 Agent 的一层「执行能力」——模型负责思考，BrowserAct 负责进网页、操作、处理登录、抓数据、把任务跑完，还能把跑通的流程沉淀成可复用 Skill。开源、本地优先、三层反检测是它最硬的底气；短板是产品面宽、信用计费需实测、且不是所有场景都该上浏览器自动化。综合评分 4.3（与工具库标注一致）。

## 它到底是什么

2026-05-14，ECOCREATE TECHNOLOGY PTE. LTD. 通过 GlobeNewswire 宣布在 GitHub 开源两个 Skill：browser-act（运行时）与 browser-act-skill-forge（工厂），均 MIT 许可。一句「Give your agent the power to use the web」点明定位。它和传统 Playwright/Puppeteer 的区别不在「能不能写脚本」，而在「模型自己能不能理解页面、自己执行动作」——它不把整页 DOM 丢给模型，而是返回带编号的干净页面信息（当前有什么、哪能点、哪能填、下一步做什么、成没成功）。

2026-06-25 登上 Product Hunt 当日榜第一、周榜第三（upvotes 各来源记录 536–629 不等）；GitHub 星标从发布初约 2.3k 增长至 4k+（Capsolver 评测时称 5,000+）。G2 4.8/5、AppSumo 4.4/5。

## 核心能力（已多源交叉验证）

<table>
  <thead>
    <tr>
      <th>能力层</th>
      <th>说明</th>
      <th>验证来源</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>三层反检测</td>
      <td>指纹环境（TLS 轮转/导航器补丁/无头隐藏）→ 自动解验证码（reCAPTCHA/Turnstile/DataDome）→ 人工接力兜底</td>
      <td>dev.to/aws-builders（生产 6 周实测）</td>
    </tr>
    <tr>
      <td>人工接力 Remote Assist</td>
      <td>Agent 卡住生成 URL，人在手机完成 2FA 后同会话同 cookie 续跑，无需重来</td>
      <td>dev.to/aws-builders / 中文实测</td>
    </tr>
    <tr>
      <td>多账号隔离</td>
      <td>每 browser 独立 cookie/代理/指纹，并行任务不串号</td>
      <td>官方站 / 中文实测</td>
    </tr>
    <tr>
      <td>Agent 友好输出</td>
      <td>返回带编号的页面元素而非原始 HTML，省 token、推理更稳</td>
      <td>dev.to/aws-builders</td>
    </tr>
    <tr>
      <td>Skill Forge</td>
      <td>把跑通的流程沉淀为可复用 Skill（SKILL.md + 脚本），一次探索多次执行</td>
      <td>zread / 官方站</td>
    </tr>
    <tr>
      <td>两种路径</td>
      <td>托管 Cloud Bots（24/7 运行）或本地 Agent CLI 控制浏览，不混为一谈</td>
      <td>capsolver 评测</td>
    </tr>
    <tr>
      <td>本地优先</td>
      <td>跑在你机器上，登录态不出本机；云端 Bots 另作托管选项</td>
      <td>dev.to/aws-builders</td>
    </tr>
    <tr>
      <td>集成与云</td>
      <td>n8n/Make/Zapier/API；AWS/Azure/GCP/Oracle/阿里/华为/BytePlus/百度云市场</td>
      <td>dev.to/tekmag</td>
    </tr>
  </tbody>
</table>

三种使用模式界限清楚：复用本地 Chrome 登录态（适合需登录的后台/导出）、隐私浏览器（每次新环境，适合公开采集）、固定身份（绑定账号长期运营多店铺/多社媒）。登录、支付、发布、删除这类敏感操作都留了确认门。云市场已有一批 Skill Forge 方案（如 x-tweet-by-handle、webcrawler-deep-crawl、google-maps-contact-extract）。

## 定价（官方站 + Capsolver 评测 + 官方博客一致）

<table>
  <thead>
    <tr>
      <th>项目</th>
      <th>计费</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>免费试用</td>
      <td>500 积分/天</td>
      <td>免注册可用核心 stealth-extract/state/click/screenshot</td>
    </tr>
    <tr>
      <td>按量 PAYG</td>
      <td>$1 = 1,000 积分</td>
      <td>首购积分 5 折</td>
    </tr>
    <tr>
      <td>工作流步骤</td>
      <td>5 积分/步（约 $0.0032）</td>
      <td>AI 任务执行与远程浏览器调度</td>
    </tr>
    <tr>
      <td>本地指纹浏览器</td>
      <td>100 积分/个（约 $0.064）</td>
      <td>带代理分配的隔离档案</td>
    </tr>
    <tr>
      <td>动态代理</td>
      <td>5,000 积分/GB（约 $3.20/GB）</td>
      <td>国家定向轮转/固定代理流量</td>
    </tr>
    <tr>
      <td>云浏览器</td>
      <td>限时免费</td>
      <td>托管后台浏览器执行</td>
    </tr>
    <tr>
      <td>订阅档</td>
      <td>官方标「即将上线」</td>
      <td>AppSumo 买断 $49 起（lifetime，4.4/5）</td>
    </tr>
  </tbody>
</table>

> 透明提示：订阅制档位官方站仍写「coming soon」，当前实际可用的是免费试用 + 按量积分 + AppSumo 买断。成本预测必须按真实任务回放（步骤数、浏览器档案数、代理流量、重试与计划频率）来算，低单价不等于一个完整业务的花费。

## 和谁比

<table>
  <thead>
    <tr>
      <th>维度</th>
      <th>BrowserAct</th>
      <th>Browserbase（见 browserbase）</th>
      <th>Firecrawl（见 prometheus-firecrawl）</th>
      <th>Playwright</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>核心定位</td>
      <td>Agent 浏览器执行层 + Skill 沉淀</td>
      <td>托管浏览器会话基础设施</td>
      <td>网页内容提取 API</td>
      <td>确定性浏览器测试库</td>
    </tr>
    <tr>
      <td>反检测/解验证码</td>
      <td>三层内置</td>
      <td>会话托管为主</td>
      <td>不涉交互</td>
      <td>需自写</td>
    </tr>
    <tr>
      <td>本地/云</td>
      <td>本地优先 + 云 Bots</td>
      <td>云端托管</td>
      <td>API 云端</td>
      <td>本地</td>
    </tr>
    <tr>
      <td>人工接力</td>
      <td>Remote Assist 内置</td>
      <td>无等价物</td>
      <td>无</td>
      <td>无</td>
    </tr>
    <tr>
      <td>开源</td>
      <td>Skills MIT 开源</td>
      <td>闭源服务</td>
      <td>核心 AGPL 开源</td>
      <td>开源</td>
    </tr>
    <tr>
      <td>适合谁</td>
      <td>要交互式工作流+多账号隔离+Agent 接管</td>
      <td>要托管浏览器原语</td>
      <td>只要干净网页数据</td>
      <td>要确定性 UI 测试</td>
    </tr>
  </tbody>
</table>

BrowserAct 不是所有爬虫/测试套件的自动替代。若 API 能稳定给出所需数据，通常比浏览器自动化更简单；若流程需要精确断言与可复现 UI 测试，Playwright 控制更清晰。当导航、改页面状态、会话隔离、Agent 决策成为核心时，它才真正有说服力。

## 真实反馈与注意事项

生产跑过 6 周的云架构师在 dev.to 写：环境层兜住约 90% 情况，验证码解算层补位，6 周没出现会话被永久封（前提是日请求几百而非上万，规模上去表现会不同）；人工接力被当成「功能」而非失败——Agent 主动求援比静默崩溃实用。中文实测也验证了飞书登录态失效触发人机接力、多账号隔离不串线。

需注意：产品迭代快（GitHub 提交活跃），生产应锁 CLI/Skill 版本并审变更；AI 执行不如确定性代码可预测，关键动作要校验与显式停止条件；信用成本需实测；不应在未经授权下访问私密数据。PH upvotes 各源记录 536–629 不一，引用时以「登顶当日榜第一、周榜第三」为准即可。

## 值不值得用

已经在用 Claude Code/Cursor 跑网页任务的团队：先装开源 Skill，用免费 500 积分/天实测一个真实带登录态的长任务（比如每天进同一后台导出报表），再按真实步骤/代理消耗选按量或 AppSumo 买断。它最值钱的是「连接 + 执行闭环 + 流程沉淀」，最大变量是信用计费的真实成本与你对敏感动作的审批规程。只要抓公开数据、API 能搞定，就别上浏览器自动化。
