---
id: fellou
title: "Fellou 深度评测：全球首款 Agentic Browser，把浏览器变成会自己干活的智能体"
date: "2026-07-31"
category: "AI工作台"
rating: 4.2
price: "免费(1000 Sparks新手包) / Plus $19月 / Pro $39.9月 / Ultra $199.9月"
subtitle: "Authing 创始人谢扬二次创业：Deep Action 跨站执行 + 穿透登录态深搜 + Computer Use 本地操控，但稳定性与积分黑箱是硬伤"
url: "https://fellou.ai"
pros:
  - "Agentic Browser 品类开创者：不是聊天框套壳，而是完整 Chromium 浏览器客户端，先出可审阅执行计划再自动跑完跨站任务"
  - "Deep Search 穿透登录态：能操作已登录的 X / Reddit / LinkedIn / 小红书等站点抓数据，生成带可溯源引用的深度报告，纯 API 工具做不到"
  - "Computer Use 系统级操控：授权后可操作本地 App 与文件，官方自测 49 任务平均 3.7 分钟，远快于 Manus 18.6 分钟（官方口径）"
  - "Eko 2.0 开源框架：自然语言 + JavaScript 自定义 Agent，2.0 版本任务成功率从 31% 提升至 80%（官方数据）"
  - "免费档可完整试用：1000 Sparks 新手包约够 4 个任务 + 2 个定时任务，无需信用卡"
cons:
  - "稳定性是最大硬伤：CE 版用户反馈任务执行中无故失败且不自动纠错、速度比旧版慢约一倍，复杂页面元素定位常出错"
  - "Sparks 积分黑箱：官方明示消耗随任务复杂度浮动，Plus 档 2000 Sparks 仅约 8 个任务，重度使用成本难预估"
  - "每次调研默认生成炫酷网页报告，实用性存疑还多耗积分，用户反馈希望改为可选项"
  - "安全与隐私门槛：登录态授权 + 提示注入攻击风险（安全报告已点名 AI 浏览器类产品），敏感账号需用小号先测"
alternatives:
  - { name: "Kimi Work", slug: "kimi-work", reason: "同为桌面智能体，Kimi 以对话入口+WebBridge 为主，256K 长文本基因强；Fellou 以浏览器为整个产品形态，穿透登录态深搜更彻底" }
  - { name: "KroWork", slug: "krowork", reason: "国产桌面 Agent，对话生成可分享应用，本地化更彻底；Fellou 面向全球市场，跨站自动化更强" }
  - { name: "Manus", slug: "manus", reason: "云端虚拟机路线的通用 Agent 标杆，难题深度更强；Fellou 本地浏览器路线速度更快、登录心理负担更低" }
  - { name: "Genspark", slug: "genspark", reason: "70+模型编排层打法，多媒体产出快；Fellou 胜在浏览器原生操作真实网页与本地 App" }
---

## 一句话总结

Fellou 是「把浏览器本身变成智能体」的品类开创者——不是又一个聊天框，而是 **Agentic Browser**：先用 Deep Action 把目标拆成可审阅的执行计划，再跨 App（含已登录的 X / Reddit / 小红书 / 电商平台）自动跑完，还能用 Computer Use 操控本地应用与文件。**适合每天做竞品分析、深度调研、跨平台信息搬运的分析师与运营；但任务稳定性不足、Sparks 积分消耗黑箱、复杂流程拆解能力有限，目前更像给爱折腾的高级用户准备的「游乐场」，而非能托付主力工作的日常浏览器。**

## 核心数据一览

<table>
  <tr><td style="width:140px;font-weight:bold">开发商</td><td>ASI X Inc.（旧金山），中国团队为蒸汽记忆（无锡）科技有限公司</td></tr>
  <tr><td style="font-weight:bold">创始人</td><td>谢扬（95后连续创业者，Authing 身份云创始人，Authing 曾服务 700+ 企业客户）</td></tr>
  <tr><td style="font-weight:bold">发布时间</td><td>2025 年 4 月全球内测；2025 年 6 月发布 2.0；后推出 CE 版（含 Windows 与中文界面）</td></tr>
  <tr><td style="font-weight:bold">融资</td><td>三轮累计超 3000 万美元（浙江科技报 2026-01），everydev.ai 收录口径为 4040 万美元+</td></tr>
  <tr><td style="font-weight:bold">用户规模</td><td>注册用户突破 100 万（2026-01 官方披露）</td></tr>
  <tr><td style="font-weight:bold">产品形态</td><td>Agentic Browser（基于 Chromium 的完整浏览器客户端，兼容 Chrome 扩展）</td></tr>
  <tr><td style="font-weight:bold">支持平台</td><td>macOS / Windows（无 Linux 与移动端）</td></tr>
  <tr><td style="font-weight:bold">第三方评分</td><td>BestAIFor.me 4.1/5；buildfastwithai 4.4/5（本文综合评 4.2）</td></tr>
</table>

## 核心功能评测

### 1. Deep Action 跨站自动执行 ⭐⭐⭐⭐☆

Fellou 的招牌能力：输入一句目标（如「做一份折叠屏手机选购测评报告」），它先生成逐步执行计划供你审阅、编辑、批准，然后自动打开京东、天猫、科技媒体等多个站点抓取价格、参数、口碑，最后汇成报告。前支付宝体验技术负责人玉伯的公开实测：同一个「生成 3D Minecraft 游乐场场景」任务，ChatGPT Agent 花了 11 分钟，Fellou 不到 2 分半；他还实测了「BOSS 直聘自动找岗位 + 发送 10 次自我介绍」全程顺利执行。但另一面：海外 KOL Linus Ekenstam 实测「X 上搜索并关注 15 个领域博主」耗时 15 分钟以上；快搜聚合的用户长评直言其任务拆解能力「面对稍复杂的操作流程往往无法准确分解为可执行步骤」，评价为「勉强可用」。**简单、明确、可验证的任务表现惊艳；复杂多层级页面就容易翻车。**

### 2. Deep Search 穿透登录态深搜 ⭐⭐⭐⭐⭐

这是 Fellou 相对 Perplexity 类「搜索优化型 AI 浏览器」的根本差异：它跑在你本地的浏览器登录态之上，能进 X、Reddit、LinkedIn、小红书、Salesforce 等需要账号的封闭平台抓取数据，产出带可验证来源的报告。官方拉了 50 名用户对报告做五维度盲评（准确性/清晰度/深度广度/可读性），自报综合分高于 OpenAI Deep Research、Manus 与 Perplexity——注意这是官方口径，但「能搜到登录墙后面的内容」这一点确实是纯云端工具的能力盲区，属于稀缺差异化。

### 3. Computer Use 本地系统操控 ⭐⭐⭐☆☆

授权后 Fellou 可以操作本地 App 与文件，从「AI 给建议」升级为「AI 直接办事」。但用户实测反馈：涉及本地应用的重复性操作（如翻页复制数据到 Excel）效率偏低，「光打开 Excel 就花很长时间」，与影刀等成熟 RPA 相比在简单重复操作的丝滑度上仍有差距。方向对，火候欠。

### 4. Agentic Memory + Eko 2.0 开源框架 ⭐⭐⭐⭐☆

Agentic Memory 从浏览历史和笔记中学习上下文，问一句就能召回过往工作。开发者可用 Eko 框架以自然语言 + JavaScript 编写自定义 Agent 并发布到 Agent Store。官方披露 2.0 版本将任务成功率从 31% 拉到 80%、平均任务耗时约 3.7 分钟、单次任务执行成本约 0.3-3 元人民币——成功率数字侧面印证了 1.x 时代的不可用，也说明当前约两成任务仍会失败。

### 5. 执行可控性 ⭐⭐⭐⭐☆

Fellou 不搞黑箱：每个任务先展示完整分步计划，执行中可随时编辑、批准、介入，遇到验证码/二次认证会请求人工接管。这套「先规划后执行 + 实时可干预」的交互是它比无头 Agent 更让人放心的地方，也被多位用户点名好评。

## 价格方案

<table>
  <tr><th style="background:#4a90d9;color:#fff;">档位</th><th style="background:#4a90d9;color:#fff;">价格</th><th style="background:#4a90d9;color:#fff;">Sparks 积分</th><th style="background:#4a90d9;color:#fff;">大约可跑任务</th><th style="background:#4a90d9;color:#fff;">定时任务</th></tr>
  <tr><td>Free</td><td>$0</td><td>1000（新手一次性）</td><td>约 4 个</td><td>2 个</td></tr>
  <tr><td>Plus</td><td>$19/月</td><td>2000/月</td><td>约 8 个</td><td>3 个</td></tr>
  <tr><td>Pro</td><td>$39.9/月</td><td>5000/月</td><td>约 20 个</td><td>5 个</td></tr>
  <tr><td>Ultra</td><td>$199.9/月</td><td>限时不限量</td><td>不限</td><td>不限</td></tr>
</table>

数据来自 flowtools.co / everydev.ai / bestaifor.me 三方收录的定价页信息（2026-07 交叉核验一致），年付有折扣。注意两点：**① 官方明示 Sparks 消耗随任务复杂度浮动**，「约 X 个任务」只是理想值，复杂调研单次可能烧掉数倍积分；**② Plus 档 $19 每月只够约 8 个任务**，折合单任务约 $2.4，重度自动化用户实际成本会快速逼近 Pro 甚至 Ultra。

## 与竞品对比

<table>
  <tr><th style="background:#4a90d9;color:#fff;">维度</th><th style="background:#4a90d9;color:#fff;">Fellou</th><th style="background:#4a90d9;color:#fff;">Manus</th><th style="background:#4a90d9;color:#fff;">Kimi Work / KroWork</th></tr>
  <tr><td style="font-weight:bold">产品形态</td><td>完整 Agentic 浏览器客户端</td><td>云端虚拟机沙箱 Agent</td><td>对话入口 + 浏览器桥接</td></tr>
  <tr><td style="font-weight:bold">登录态数据</td><td>本地浏览器原生登录态，心理负担最低</td><td>可在虚拟机内扫码登录，但账号交给云端</td><td>桥接本地浏览器，能力有限</td></tr>
  <tr><td style="font-weight:bold">执行速度</td><td>官方自测 49 任务平均 3.7 分钟</td><td>同基准 18.6 分钟（Fellou 官方口径）</td><td>无公开可比基准</td></tr>
  <tr><td style="font-weight:bold">难题深度</td><td>复杂流程拆解易翻车</td><td>社区共识：难题深度更强</td><td>偏轻量应用生成</td></tr>
  <tr><td style="font-weight:bold">定价</td><td>$19-199.9/月，积分随复杂度浮动</td><td>免费300积分/日起，Pro $20-40/月</td><td>免费/积分制</td></tr>
  <tr><td style="font-weight:bold">自定义扩展</td><td>Eko 2.0 开源框架（NL+JS）</td><td>无开放框架</td><td>技能生态早期</td></tr>
</table>

一个值得记录的用户视角（数字营销从业者 Shaw 的公开评论）：Fellou 主打「本地浏览器 vs 云端虚拟机」的两大好处——上下文和登录心理负担——但他实际体感中前者与 Manus 差别不大，后者「反正 Manus 要登录小红书我也痛快扫码」；而**单纯作为浏览器，Fellou 还没给出足以让人从 Chrome 迁移过来的理由**。这是 Fellou 最尖锐的灵魂拷问：用户到底是把它当主力浏览器，还是只当一个偶尔打开的 Agent 工具？

## 优势与短板

**优势**：品类开创者的完整闭环——规划 → 执行 → 报告 → 记忆在单产品内跑通；穿透登录态的深搜是纯云端工具做不到的稀缺能力；执行计划全透明 + 随时可介入，黑箱焦虑最低；Eko 开源框架给了开发者自定义空间；基于 Chromium 兼容 Chrome 扩展，迁移成本理论上低。

**短板**：① **稳定性**——CE 版用户集中反馈任务无故失败且不自动纠错、执行速度比旧版慢约一倍；② **复杂任务拆解弱**——多层级页面找不到「详情」按钮这类问题常见，只能靠二次交互人工纠偏；③ **积分黑箱**——消耗随复杂度浮动、每次调研默认生成网页报告额外耗积分；④ **资源占用**——类 Electron 架构 + 本地推理，内存 CPU 占用明显高于 Chrome；⑤ **安全风险**——安全研究已点名 AI 浏览器类产品面临提示注入攻击（网页藏恶意指令诱导越权操作），处理重要账号前必须用小号充分测试。另外官网「3.1x faster than OpenAI」「crushed them」等表述均为营销话术+自建基准，本文仅作记录不作背书。

## 最终推荐

**建议上手（先用免费档）**：每天做竞品分析、行业调研、跨平台信息搬运的分析师/运营/研究者；需要抓取登录墙后数据（社媒、电商、招聘平台）的增长与 HR 情报岗；愿意折腾、能接受两成任务失败率的尝鲜派开发者（Eko 框架加分）。

**不建议**：期待开箱即用、零学习成本的普通用户——出错时的提示不清晰，需要耐心调试；预算敏感且任务量大的重度自动化用户——积分浮动消耗下成本难以预估，不如评估影刀类 RPA；涉及支付、主力社交账号等敏感操作的场景——提示注入风险真实存在，至少等安全机制更成熟。

**组合建议**：把 Fellou 当「会自己上网干活的第二浏览器」做研究与搬运，主力浏览仍留在 Chrome；难题深度研究交给 Manus，本地长文档分析用 Kimi Work，IDE 内重构用 Cursor——各司其职。

---

**评测声明**：本文基于 Fellou 官网（fellou.ai）公开信息、flowtools.co / everydev.ai / bestaifor.me 收录的定价与产品资料、浙江科技报与腾讯新闻等媒体报道，以及玉伯、Linus Ekenstam、Shaw 等用户的公开实测评论聚合撰写，官方自报数据（速度基准、成功率）均已标注口径。本文不含付费推广。
