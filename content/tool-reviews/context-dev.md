---
id: context-dev
title: Context.dev 深度评测：一个 API 把网页抓取、品牌情报与结构化抽取全包了
date: 2026-09-04
category: AI编程开发
rating: 4.3
price: 免费档 250（个人邮箱）/500（工作邮箱）一次性积分；付费 Developer $25、Pro $149、Scale $499 每月，Enterprise 2M+ 积分定制（统一积分池，1 积分=1 页抓取，失败不计费）
subtitle: 前身为 Brand.dev、YC S26 孵化的统一网页上下文与品牌情报 API，把抓取、整站爬虫、结构化抽取、Logo/配色/字体提取、截图与网站变更监控收进同一个 REST 端点，面向 AI Agent 与 RAG 流水线
url: https://www.context.dev
pros:
  - 一个 API 统一抓取、整站爬虫、结构化抽取、品牌情报、截图与 NAICS/SIC 分类，省掉多供应商拼接
  - 定价透明、统一积分池，1 积分=1 页；JS 渲染、反爬绕过、高匿代理均不额外加价（官方 FAQ 明确）
  - 失败或被拦截请求不计费，溢出按 10K 档明码标价（Developer $15 / Pro $9 / Scale $7）
  - 类型化 SDK（TS/Py/Ruby/Go/PHP）+ CLI + 托管 MCP server + Agent Skill，多数团队 10 分钟内接入（PH 用户实证）
  - 品牌情报层差异化强：Logo Link CDN 直接以 URL 出方形 logo、零后端调用，适合 B2B 入驻与个性化
  - 仅抓公开页、不读需登录内容，配合失败不计费，合规面相对干净
cons:
  - 产品年轻（2025 创立、2026-03 更名、2026-07 主发布），独立第三方长期评测样本仍少（PH 仅 15 条评价）
  - 免费积分为一次性发放而非每月循环，烧完即进入付费（第三方目录已指出）
  - 结构化抽取准确度依赖目标页 HTML 质量；PH 用户反馈品牌主色提取偶有不准
  - 不读需登录内容，交互式浏览器自动化（填表/点击/测试）仍需 Playwright/Puppeteer
  - 仅 API 服务、无开源自托管版本，数据出境需按 GDPR/LGPD 等评估
  - 信用计费真实成本随抓取量与复杂度浮动，不应只看订阅档标价
  - 名次宣传口径不一：tools.ts 标「PH 月榜第1」，但 PH 自身页与第三方目录对 upvotes/名次说法有冲突，不宜过度引用
alternatives:
  - prometheus-firecrawl
  - browserbase
  - anysearch
  - browseract
---

## 一句话结论

如果你的 AI 应用需要的不只是「把网页读成 Markdown」，还要顺手拿到对方的公司 Logo、品牌主色、字体、行业代码甚至交易描述归一化，Context.dev 的价值就出来了：它把抓取、整站爬虫、结构化抽取和品牌情报收进同一个 API 契约里，省掉你同时接 Firecrawl + 一家 Logo API + 一家公司 enrichment 供应商的拼接成本。定价透明、统一积分池、失败不计费，是对开发者最友好的地方；短板是产品年轻、免费积分一次性、且只能抓公开页。综合评分 4.3（与工具库标注一致）。

## 它到底是什么

Context.dev 的前身是 Brand.dev，2026-03-21 正式更名为 Context.dev，把业务从「Logo/公司元数据」扩展为更完整的网页提取基础设施。公司由 Yahia Bakour 于 2025 年创立，是 Y Combinator 2026 夏季批次（YC S26）的孵化项目，Bakour 为唯一列名创始人，团队约 4 人；他此前在 Sunrun 负责 AI 工程、做过 Amazon 结算系统，并有两个被收购的创业项目（Stock Alarm、Essense.io）。

2026-08-03 上线了托管的 Model Context Protocol（MCP）server，支持通过 OAuth 让 Claude、Cursor、Codex、ChatGPT、VS Code 直接连；2026-08-05 通过 YC 渠道做正式发布。创始人自述已有 400+ 客户，Product Hunt 页面则自称「被 5,000+ 企业信任，含 Mintlify、Daily.dev、Ferndesk.com」——这两个数字均来自公司自身口径，需打折看待。

定位上它把自己叫做「面向 AI Agent 的统一网页上下文与品牌情报 API」：你丢给它一个 URL、域名、sitemap 或文件，它回你 Markdown、渲染后的 HTML、截图、公司信息，或匹配你指定 schema 的 JSON。

## 核心能力（已多源交叉验证）

<table>
  <thead>
    <tr>
      <th>能力</th>
      <th>说明</th>
      <th>计费（信用）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>网页抓取（webScrapeMd）</td>
      <td>无头引擎渲染 JS 重页面，返回去噪 Markdown 或渲染 HTML；支持 maxPages / maxDepth</td>
      <td>1 信用/成功页</td>
    </tr>
    <tr>
      <td>整站与 sitemap 爬虫</td>
      <td>从 URL 发现同域链接、按深度跟进，返回 Markdown + 页面元数据</td>
      <td>1 信用/页</td>
    </tr>
    <tr>
      <td>结构化抽取（web.extract）</td>
      <td>传 Zod schema，服务端转 JSON Schema 后返回类型化数据，替代脆弱的 XPath/正则</td>
      <td>10 信用/次</td>
    </tr>
    <tr>
      <td>品牌情报（brand.retrieve）</td>
      <td>按域名/公司名/邮箱/ticker 识别公司，返回 Logo、主色、字体、社媒、地址、行业代码</td>
      <td>10 信用/次</td>
    </tr>
    <tr>
      <td>风格指南 / 产品抽取</td>
      <td>抽取配色与排版清单；从商品页结构化出价格、描述、特性</td>
      <td>10 信用/次</td>
    </tr>
    <tr>
      <td>截图</td>
      <td>渲染桌面/移动端截图，返回托管 CDN 链接</td>
      <td>按页计</td>
    </tr>
    <tr>
      <td>文档解析 / NAICS-SIC 分类</td>
      <td>文档转 Markdown；按北美/标准行业代码归类</td>
      <td>按调用计</td>
    </tr>
    <tr>
      <td>网站变更监控</td>
      <td>监控页面/sitemap/抽取字段，数据变化时打 signed webhook</td>
      <td>独立配额</td>
    </tr>
    <tr>
      <td>Logo Link（独立产品）</td>
      <td>直接以 URL 出方形 Logo，零后端调用；无速率限制</td>
      <td>不计 API 信用</td>
    </tr>
  </tbody>
</table>

官方 FAQ 明确：JS 渲染、反爬绕过、高匿代理全部包含在 1 信用/页里，没有 5–25× 的信用乘子（这点直接对标那些把渲染/代理拆开翻倍收费的竞品）。SDK 覆盖 TypeScript/JavaScript、Python、Ruby、Go、PHP，另有 CLI、托管 MCP server 和一份已发布的 Agent Skill。

## 定价（官方页 + 官方博客 + 多目录一致）

<table>
  <thead>
    <tr>
      <th>档位</th>
      <th>价格</th>
      <th>月度积分</th>
      <th>速率限制</th>
      <th>溢出价（每 10K）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Free</td>
      <td>$0</td>
      <td>250（个人邮箱）/ 500（工作邮箱），一次性</td>
      <td>10 / 30 次·分</td>
      <td>无（耗尽返回 401）</td>
    </tr>
    <tr>
      <td>Developer</td>
      <td>$25/月</td>
      <td>10,000</td>
      <td>60 次·分</td>
      <td>$15</td>
    </tr>
    <tr>
      <td>Pro（推荐）</td>
      <td>$149/月</td>
      <td>200,000</td>
      <td>300 次·分</td>
      <td>$9</td>
    </tr>
    <tr>
      <td>Scale</td>
      <td>$499/月</td>
      <td>1,000,000</td>
      <td>700 次·分</td>
      <td>$7</td>
    </tr>
    <tr>
      <td>Enterprise</td>
      <td>定制</td>
      <td>2M+ 积分</td>
      <td>自定义</td>
      <td>量价折扣 + SSO/SAML + SCIM + 99.9% SLA</td>
    </tr>
  </tbody>
</table>

几个关键口径（官方定价页与官方博客一致，多个第三方目录交叉确认）：
- 1 信用 = 1 次成功抓取；失败或被拦截的请求不扣费。
- 高级调用（品牌检索、风格指南生成、结构化抽取、行业识别）走 10 信用/次；Logo Link 单独配额，不消耗 API 信用。
- 年付省两个月；创业公司/非营利可享付费档最高 30% 折扣（需申请）。
- 信用模型真实成本随抓取量与复杂度浮动，订阅价是下限而非上限——这是它和许多「按页数包月」竞品最大不同。

> 透明提示：个别第三方目录（如 searchmytool）把 Pro/Scale 写成 75K/300K 积分，与官方 200K/1M 不符，本文以官方定价页为准。

## 和谁比

<table>
  <thead>
    <tr>
      <th>维度</th>
      <th>Context.dev</th>
      <th>Firecrawl（见 prometheus-firecrawl）</th>
      <th>Browserbase</th>
      <th>Apify / Bright Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>核心定位</td>
      <td>网页上下文 + 品牌情报一体 API</td>
      <td>Markdown 优先的抓取/爬虫/搜索</td>
      <td>托管浏览器 + Agent 基础设施</td>
      <td>预建抓取器市场 / 企业级解封</td>
    </tr>
    <tr>
      <td>品牌/公司 enrichment</td>
      <td>内置（Logo/配色/字体/行业码）</td>
      <td>弱，需另接</td>
      <td>无</td>
      <td>部分支持</td>
    </tr>
    <tr>
      <td>结构化抽取</td>
      <td>Zod schema 服务端转 JSON</td>
      <td>支持 schema</td>
      <td>需自写</td>
      <td>支持</td>
    </tr>
    <tr>
      <td>MCP / Agent 接入</td>
      <td>托管 MCP + Agent Skill（2026-08）</td>
      <td>官方 MCP</td>
      <td>浏览器会话托管</td>
      <td>部分</td>
    </tr>
    <tr>
      <td>起步价</td>
      <td>Free 一次性；Dev $25</td>
      <td>Free 1,000/月；Hobby $16</td>
      <td>按会话/浏览器计费</td>
      <td>中高价，企业档为主</td>
    </tr>
    <tr>
      <td>适合谁</td>
      <td>要网页+品牌上下文一条龙的 Agent/RAG</td>
      <td>只要干净 Markdown 的 LLM 管线</td>
      <td>要真浏览器交互的 Agent</td>
      <td>要特定站点预建器/硬解封</td>
    </tr>
  </tbody>
</table>

它本身不替代 Puppeteer/Playwright 的交互式自动化，也不读需登录的页面；在「公开页 → 干净结构化数据 + 品牌上下文」这一段，它的整合度是当前最顺手的之一。

## 真实反馈与注意事项

Product Hunt 页面评分 4.9/5（15 条评价），多数用户夸 Markdown 去噪好、类型化 SDK 接入快（自称 10 分钟）、品牌/公司 enrichment 端点省了一堆一次性 Logo 抓取代码。主要吐槽集中在：文档与示例还可更丰富、品牌主色提取偶有不准、站点 robots.txt/ToS 变更后缺乏逐域的状态/变更日志可见性。Hacker News 上也有开发者讨论帖，但未见独立基准数据，性能优势未被第三方证实。

合规面：它只抓公开页、不碰认证内容，且失败不计费；但作为 API 服务无开源自托管版本，涉及欧盟/巴西用户数据时要注意 GDPR/LGPD 评估。名次宣传上，工具库标「PH 月榜第1」，而 PH 自身页与第三方目录对 upvotes/名次说法有冲突（有来源称当日第 2、也有称 141 upvotes），本文不把具体月榜名次作为结论依据。

## 值不值得用

给 AI Agent / RAG / GTM / 品牌感知类产品的团队：值得先在 Free 档（工作邮箱 500 一次性积分）实测一遍完整功能集，再按真实抓取量选 Developer 或 Pro。它最省心的地方是「一个契约替代三家供应商 + 失败不计费 + 反爬代理不拆账」；最该盯的是信用计费下的真实月成本，以及产品年轻带来的长期稳定性与文档成熟度风险。
