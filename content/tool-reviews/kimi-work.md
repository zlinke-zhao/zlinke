---
id: kimi-work
title: "Kimi Work 深度评测：把 Kimi 装进桌面，WebBridge 让 AI 自己逛网页"
date: "2026-07-17"
category: "AI工作台"
rating: 4.3
price: "免费 / 与 Kimi 会员体系打通（Agent 集群需 Allegretto ¥199/月起）"
subtitle: "月之暗面桌面智能体实测：本地文件 + 浏览器自主操控 + 300 子 Agent 集群"
url: "https://kimi.com/work"
pros:
  - "WebBridge 让 Agent 直接操控本地浏览器，打开网页、点击、填表、抓数据一气呵成，且继承你的登录态"
  - "本地运行 + 长文本基因：Kimi 的 256K 上下文直接用于桌面文档分析，20 万字一口吞"
  - "Agent 集群原生并行：测试版即支持最多 300 个子 Agent，调研类任务会自主拆解分发"
  - "内置专业金融数据源（同花顺 / 天眼查 / 世界银行），金融人士开箱即用"
  - "与 Kimi 账号 / 会员体系打通，已有 Kimi 用户零迁移成本上手"
cons:
  - "桌面端入口仍在演进中，kimi.com/work 当前会回跳官网，独立下载地址需以官方最新页为准"
  - "公开实测反馈复杂多步任务会卡壳，多 Agent 协作超过约 10 个开始出现任务丢失"
  - "生态相比 OpenClaw 系的 Skill 商店仍偏早期，可复用技能数量有限"
  - "重度 Agent 场景走会员计费，Agent 集群需 ¥199/月档位，成本门槛不低"
alternatives:
  - { name: "KroWork", slug: "krowork", reason: "国产桌面 Agent，对话生成可分享应用 + 应用固化，本地化更彻底、成本更可控" }
  - { name: "AutoClaw（澳龙）", slug: "autoclaw", reason: "智谱一键安装版 OpenClaw，50+ 预置技能 + AutoGLM 浏览器自动化" }
  - { name: "ArkClaw", slug: "arkclaw", reason: "火山引擎云端托管版，7×24 在线免部署，飞书深度集成" }
  - { name: "QoderWork", slug: "qoderwork", reason: "阿里系桌面助手，本地文件操作 + Skill 市场，Mac/Win 双端" }
---

## 一句话总结

Kimi Work 是月之暗面把「对话式 Kimi」搬上桌面的尝试——核心不是又一个聊天框，而是 **WebBridge**：让 Agent 真正打开你的浏览器去办事。**适合每天和长文档、网页信息流打交道的分析师 / 运营 / 研究者；但桌面端入口与技能生态还在早期，复杂任务稳定性有待打磨，建议把它当成「能自己上网的 Kimi」，而不是全自动数字员工。**

> **评测说明**：本文基于 Kimi 官方帮助文档（Kimi Help Center、Kimi Work 官方介绍页、WebBridge 产品页）与多家媒体公开实测（今日头条、新浪科技、腾讯新闻、x-techcon 等）整理。站长赵生已实际安装体验，确认产品可正常运行；文中「实测反馈」均引自上述公开来源，具体功能与定价以 Kimi 官方最新页面为准。

## 核心数据一览

<table>
  <tr><td style="width:140px;font-weight:bold">开发商</td><td>月之暗面（Moonshot AI）</td></tr>
  <tr><td style="font-weight:bold">产品形态</td><td>桌面 AI 智能体（本地运行，macOS / Windows）</td></tr>
  <tr><td style="font-weight:bold">底层模型</td><td>Kimi K2.6（256K 上下文，长文本国产最强）</td></tr>
  <tr><td style="font-weight:bold">核心能力</td><td>WebBridge 浏览器自主操控 + 本地文件处理 + 长文本分析 + Agent 集群</td></tr>
  <tr><td style="font-weight:bold">账号体系</td><td>与 Kimi 网页 / App 账号、会员打通（微信扫码 / 手机号登录）</td></tr>
  <tr><td style="font-weight:bold">Agent 集群</td><td>测试版支持最多 300 个子 Agent 并行（需付费档位）</td></tr>
  <tr><td style="font-weight:bold">内置数据源</td><td>同花顺、天眼查、世界银行经济数据库等</td></tr>
  <tr><td style="font-weight:bold">同生态竞品</td><td>KimiClaw（浏览器原生版，零安装）、OpenClaw 系（AutoClaw / ArkClaw 等）</td></tr>
</table>

## 核心功能评测

### 1. 本地文件与命令执行 ⭐⭐⭐⭐⭐（5/5）

Kimi Work 沿用了 Coding Agent 的核心思路——把 Harness 搬到你的电脑上。它能读写本地文件、运行命令、操作本地文件夹 / 电子表格 / 报告，数据保留在设备端（官方介绍页明确「在云端生成、在本地运行 Python 和 shell，数据保留在设备端」）。

公开实测反馈很有说服力：一位评测者把含 3 个 Sheet、合计 200 多行数据的 Excel 丢给它，说「做个汇总分析 PPT」，它自己识别每个 Sheet 内容，约 5 分钟后带图表的 PPT 出现在桌面（今日头条实测，2026-06-07）。另一位用本地选题文件夹测试，Kimi Work「几乎没有停顿」完成检索、分类并输出结构清晰的结果（新浪科技 5 场景测试，2026-06-04）。

**差异化长板**：相比 AutoClaw / ArkClaw 等「Claw 系」拼技能数量，Kimi 拼的是长文本理解——别人读不懂的长材料，它能。

### 2. WebBridge 浏览器操控 ⭐⭐⭐⭐（4/5）

这是 Kimi Work 区别于普通「AI + 浏览器插件」的关键。根据官方文档，WebBridge 由**本地服务 + 浏览器扩展**组成：Agent 把命令发给本地服务，本地服务通过 Chrome DevTools Protocol 在你的 Chrome / Edge 里导航、点击、截图、读页，**全程本地运行，登录态和页面内容不出设备**。

三个特性值得说：
- **登录态继承**：复用你已登录的 Cookie，处理需要登录的页面（如公众号后台、微博）无需重新配账号。
- **后台静默操作**：Agent 在独立标签页工作，不抢你的鼠标键盘。
- **可固化工作流**：固定流程可创建专用 CLI 工具，后续调用不消耗大模型 Token。

公开实测中，WebBridge 被用来「打开公众号后台抓取过去 30 天阅读数据并导出」「带着登录态发一条微博」——都跑通了（今日头条、新浪科技）。**但稳定性有短板**：复杂跨天任务会中途卡住报错，多 Agent 协作超过约 10 个开始出现任务丢失（今日头条 7 天实测）。

### 3. Agent 集群并行 ⭐⭐⭐⭐（4/5）

Kimi Work 测试版上线即支持 Agent 集群，最多自主创建 300 个分身。它不是「开关式」的噱头，而是默认工作方式：新浪科技的 5 场景测试里，一个「整理 2025 年以来新能源汽车融资事件」的调研任务，Kimi Work 直接派出 4 个「研究员」子 Agent 并行搜集，完成后又自动创建「数据清洗」「Excel 制作」两个专职 Agent，全程无需人工拆解分工。

**代价**：集群能力需氪金。公开内测结论明确把「Agent 集群」列为「需氪金」项，免费档基本用不了规模化并行（x-techcon 内测结论，2026-06）。

### 4. 内置金融数据源 ⭐⭐⭐⭐（4/5）

出厂自带同花顺、天眼查、世界银行经济数据库等权威环境，金融人士无需自己购买和配置各种 API，开箱即用。在某评测的股价 + 资产负债表分析场景中，Kimi Work 调用 Bash 工具后直接生成带图表的详细报告（今日头条「树先生」实测，2026-06-26）。这是国内桌面 Agent 里比较独到的卖点。

### 5. 上手与生态 ⭐⭐⭐（3/5）

安装简单（官网下载、微信扫码 / 手机号登录），比国外 Codex / Claude Code 方便。输入框输入「/」可快速调用技能，左侧「+」可加文件 / 图片 / 技能 / 专业数据库。但**插件市场仍不够丰富**——评测者直言「作为一款国内 Agent 软件，Kimi Work 的插件市场还不够丰富」（今日头条，2026-06-26）。可复用技能数量与社区规模，相比 AutoClaw 的 50+ 预置技能、KroWork 的应用固化生态，还有差距。

## 价格方案

Kimi Work 与 Kimi 主站会员体系打通，Agent 能力随会员档位解锁。参考 Kimi 2026 年 6 月五档会员（以音乐速度术语命名）：

<table>
  <tr><th>套餐</th><th>月付</th><th>Agent 用量</th><th>与 Work 相关的核心权益</th></tr>
  <tr><td>Adagio（免费）</td><td>¥0</td><td>约 6 个 / 月</td><td>基础模型、有限次数、标准速度</td></tr>
  <tr><td>Andante</td><td>¥49 / 月</td><td>约 30 个 / 月</td><td>4 倍速优先队列、Office 处理、深度研究</td></tr>
  <tr><td>Moderato</td><td>¥99 / 月</td><td>约 60 个 / 月</td><td>2 并行 Agent、专业数据库 2000 次</td></tr>
  <tr><td>Allegretto</td><td>¥199 / 月</td><td>约 150 个 / 月</td><td>Agent 集群 50 次、Kimi Claw 部署</td></tr>
  <tr><td>Allegro</td><td>¥699 / 月</td><td>约 360 个 / 月</td><td>4 并行 Agent、Agent 集群 120 次</td></tr>
</table>

WebBridge 本地守护程序本身免费安装；真正贵的不是浏览器操控，而是**规模化 Agent 集群**（需 Allegretto 起）。

## 与同生态桌面 Agent 对比

<table>
  <tr><th>维度</th><th>Kimi Work</th><th>KroWork</th><th>AutoClaw（澳龙）</th><th>ArkClaw</th><th>QoderWork</th></tr>
  <tr><td>厂商</td><td>月之暗面</td><td>快手</td><td>智谱 AI</td><td>火山引擎（字节）</td><td>Qoder（阿里系）</td></tr>
  <tr><td>形态</td><td>桌面 Agent</td><td>桌面 Agent</td><td>本地一键安装</td><td>云端托管</td><td>桌面 Agent</td></tr>
  <tr><td>浏览器操控</td><td>WebBridge</td><td>Kro Browser Bridge</td><td>AutoGLM</td><td>Skill Hub</td><td>内置浏览器自动化</td></tr>
  <tr><td>长文本</td><td>⭐⭐⭐⭐⭐ 256K</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
  <tr><td>技能 / 应用</td><td>技能市场早期</td><td>应用固化 + 20+ Skills</td><td>50+ 预置</td><td>Skill Hub</td><td>Skill 市场</td></tr>
  <tr><td>最大卖点</td><td>长文本 + 上网</td><td>应用可分享复用</td><td>一键部署</td><td>7×24 在线</td><td>本地文件 + 规划</td></tr>
  <tr><td>集群并行</td><td>最多 300 子 Agent</td><td>支持</td><td>支持</td><td>云端天然并行</td><td>支持</td></tr>
</table>

## 优势与短板

### 优势

**WebBridge 把「上网」变成 Agent 的原生能力。** 不像传统方案要先接爬虫 API，Kimi Work 直接复用你已登录的浏览器会话，省去鉴权摩擦，适合处理需要登录态的页面。

**长文本基因是护城河。** 桌面 Agent 都在拼「会不会干活」，Kimi 额外拼「读不读得懂长材料」。对分析师 / 法务 / 研究者，这是独一份的组合价值。

**内置金融数据源开箱即用。** 同花顺 / 天眼查 / 世界银行，金融人士省去自行配置 API 的麻烦，国内桌面 Agent 里少见。

**零迁移成本。** 已有 Kimi 账号与会员直接可用，不用重新注册、不用重新充值。

### 短板

**桌面端入口仍早期。** kimi.com/work 当前会回跳官网首页，独立下载 / 安装地址要以官方最新页面为准——评测与收录链接都需持续校准。

**复杂任务稳定性待打磨。** 公开实测明确踩到：跨天长任务卡壳、多 Agent 协作 >10 个丢任务、无独显电脑跑得比官方演示慢。距离「全自动数字员工」还有距离。

**技能生态偏早期。** 插件市场不够丰富，可复用技能数量与社区规模落后 AutoClaw / KroWork。

**重度场景成本不低。** Agent 集群需 ¥199/月档位，对轻度用户不友好。

## 最终推荐

### 强烈推荐给

- **研究员 / 分析师 / 运营**：每天和长文档 + 网页信息流打交道，需要「读得懂材料、还能自己上网取数」的助手
- **金融从业者**：内置同花顺 / 天眼查，调研报告、舆情分析开箱即用
- **已有 Kimi 重度用户**：账号 / 会员打通，边际上手成本最低

### 谨慎考虑

- **追求全自动数字员工**：复杂任务稳定性仍早期，别指望它完全替代人工
- **对数据合规极敏感**：首次授权需仔细核对文件 / 浏览器权限范围
- **成本敏感**：重度 Agent 场景计费模型偏贵，先小范围试用

### 一句话建议

**Kimi Work 不是「又一个桌面 Agent」，而是「能自己上网的 Kimi」。** 它的差异化不在技能数量，而在 256K 长文本 + WebBridge 上网的组合。把它放在「长材料分析 + 网页取数」的工作流里最香；要全自动执行，等技能生态和稳定性成熟再说。

---

**评测声明**：本文基于 Kimi 官方帮助文档（Kimi Help Center、Kimi Work 官方介绍页、WebBridge 产品页）与公开媒体评测（今日头条 2026-06-07 / 2026-06-26、新浪科技 / 腾讯新闻 2026-06-04、x-techcon 内测结论）整理。站长赵生已实际安装体验，确认产品可正常运行。文中「实测反馈」均引自上述公开来源，未编造任何个人操作细节。功能与定价以 Kimi 官方最新页面为准。本文不含付费推广。
