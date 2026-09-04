---
id: skywork-desktop
title: "Skywork 桌面版 深度评测：昆仑天工把 Windows 办公桌变成了一个会干活的 AI 同事"
date: "2026-09-04"
category: "AI工作台"
rating: 4.3
price: "海外 Basic $19.99/月、Plus $49.99/月；国内连续包月 Basic ¥46、Plus ¥84、Ultra ¥188（Skywork 2.0 改为无限使用）"
subtitle: "原生支持 Windows、本地虚拟机隔离、100+ Skills、Claude 与 Gemini 自由切换，它把桌面 Agent 的战场从 Mac 拉回了大多数人的电脑"
url: "https://skywork.ai/desktop"
pros:
  - "Windows 原生优先，全球桌面 Agent 里少有的真·开箱即用 Windows 客户端，不用换系统也不用折腾部署"
  - "本地虚拟机隔离执行，文件不上传云端，对数据主权和隐私敏感的企业/职场场景友好"
  - "100+ 精选 Skills 加 Claude Opus 4.5 / Sonnet 4.5 / Gemini 3 Pro 多模型切换与 auto 推荐，跨格式办公与多模态内容一把抓"
  - "执行前展示计划与操作清单、过程中实时进度、需确认时征求同意，可控性明显强于纯黑箱 Agent"
cons:
  - "国内外订阅币种与档位命名口径不一致，积分/设备数/容量差异大，购买前必须看清结算页而非媒体转载数字"
  - "视觉生成质量虽强但高度依赖所接模型与 Skills，复杂品牌物料仍需人工把关风格一致性"
  - "免费版限制很紧（单项目 5 文件、图片分析终身 5 次），重度用户几乎必然要上付费档"
  - "产品仍年轻、桌面端生态与第三方集成广度不如老牌办公套件，企业级合规凭证披露有限"
alternatives:
  - { name: "豆包工作", slug: "doubao-work", reason: "同属国内大厂桌面/办公智能体，若你已在飞书生态、要的是企业上下文红利，豆包工作更对路" }
  - { name: "Kimi Work", slug: "kimi-work", reason: "若核心诉求是长文本与知识工作流的桌面 Agent、且偏好国产模型体验，Kimi Work 是平行选择" }
  - { name: "MiniMax Design", slug: "minimax-design", reason: "若工作重心是 AI Agent 驱动的商业视频/多模态内容生产，MiniMax Design 更聚焦" }
  - { name: "Claude", slug: "claude", reason: "Claude Cowork 是其最直接对标物，macOS 用户且认 Claude 生态时值得对比" }
---

## 一句话总结
Skywork 桌面版适合用 Windows、手头文件杂（图/视频/表格/PPT/文档混在一起）、想把整理归纳和初稿产出交给本地 Agent 的职场人与内容创作者；不适合只认单一云工作流、或对订阅口径透明度要求极高、拒绝任何本地客户端安装的团队。

## 核心数据一览

<table>
  <thead>
    <tr><th>项目</th><th>信息</th></tr>
  </thead>
  <tbody>
    <tr><td>产品名</td><td>天工 Skywork 桌面版（Skywork Desktop）</td></tr>
    <tr><td>出品方</td><td>昆仑天工 / 昆仑万维（Kunlun Tech）；运营主体 SKYWORK AI PTE. LTD.（新加坡注册），昆仑集团持股约 66.3%</td></tr>
    <tr><td>发布时间</td><td>桌面版 2026-02-04 面向全球发布；网页版 Skywork Super Agents 于 2025-05-22 发布</td></tr>
    <tr><td>核心定位</td><td>Windows 原生桌面 Agent，媒体称「Windows 版 Claude Cowork」「OS 级同事」</td></tr>
    <tr><td>支持系统</td><td>Windows 10+ 优先；macOS 12+（Apple Silicon）兼容</td></tr>
    <tr><td>模型支持</td><td>Claude Opus 4.5 / Claude Sonnet 4.5 / Gemini 3 Pro + auto 智能推荐模式</td></tr>
    <tr><td>内置 Skills</td><td>100+，覆盖 Office 三件套生成、网页制作、图片/视频生成等</td></tr>
    <tr><td>安全机制</td><td>本地虚拟机隔离，文件不上传云端，执行前确认操作清单</td></tr>
    <tr><td>平台级成绩</td><td>Skywork DeepResearch 引擎 GAIA 基准 82.42%（2025-05，官方称高于 OpenAI Deep Research 与 Manus）</td></tr>
    <tr><td>用户规模</td><td>Skywork 平台自 2025-05 发布以来累积近 1 亿用户（第三方口径）</td></tr>
  </tbody>
</table>

## 它到底是什么
Skywork 桌面版是昆仑天工在 2026-02-04 面向全球推出的桌面端 AI Agent，定位很直白：直接在你的 Windows 电脑上干活，而不是把文件传到某个云端对话框里聊两句。它和 2025 年 5 月发布的网页版 Skywork Super Agents（文档/幻灯片/表格/网站/播客/通用六大 Super Agent）共享同一套能力，但桌面版把执行场从浏览器搬到了本地文件系统——读取图片、视频、表格、PPT、各类文档后，在统一语义层下理解、归类、生成新产物，并支持多任务并行。

媒体把它比作「Windows 版的 Claude Cowork」，这个类比很准：Anthropic 的 Cowork 只支持 macOS，而 Windows 占了绝大多数职场电脑。Skywork 桌面版选择 Windows 原生优先，本身就是一次对「macOS-first Agent 生态」的逆向填补。

## 核心能力拆解
**本地执行、数据不跑路。** 所有操作在本地虚拟机隔离环境中完成，文件不上传云端。这既降低泄露风险，又通过虚拟化隔离保护原始文件，避免误删损坏。第三方实测反馈其具备自纠错机制。

**100+ Skills 加多模型路由。** 内置 100 余个精选 Skills，覆盖 Office 文档生成、网页制作、图片/视频生成等；系统按任务自动筛选并推荐最合适的 Skills 与模型组合，也支持手动指定。模型层可切换 Claude Opus 4.5、Claude Sonnet 4.5、Gemini 3 Pro，或由 auto 模式按任务复杂度动态选模——借助 Gemini 时任务处理速度明显优于同场景竞品。

**可控而非黑箱。** 执行任务前先展示计划与操作清单，过程中保持进度更新，需确认时征求用户意见。你看得见 to-do list 和完成进度，而不是把电脑交给一个看不见的自动化。

## 实测场景（第三方公开测评汇总）
- **文件夹整理**：授权一个杂乱下载文件夹后，它自动按图片/视频/音频/文档/压缩包/代码归类，并支持批量重命名（如把 Logo 文件夹图片统一命名、去后缀）。
- **一键生成可交互网站**：基于一份会议议程 Word、两张现场照、一张概念海报，2 分钟内产出可直接预览的本地 HTML 网站，含导航、议程、购票、合作伙伴招募页。
- **多模态品牌内容**：给定品牌理念文档，产出风格一致的概念海报与 10 秒宣传短片，画面构图、配色、音乐节奏贴合语义。
- **图片文件夹生成 PPT**：识别行星图片对应天体，嵌入通俗介绍生成图文并茂、可直接用于教学的科普 PPT。

这些场景共同说明：它不只是聊天机器人，而是以「本地文件→理解→产出可编辑文件」为闭环的生产力工具。

## 定价（口径需看清）

<table>
  <thead>
    <tr><th>档位</th><th>海外官网（USD/月）</th><th>国内连续包月（研报口径）</th><th>关键权益</th></tr>
  </thead>
  <tbody>
    <tr><td>免费版</td><td>—</td><td>单项目限 5 文件、图片分析终身 5 次</td><td>轻度体验</td></tr>
    <tr><td>Basic</td><td>$19.99</td><td>¥46（10,000 积分 / 3 设备 / 50GB）</td><td>个人入门</td></tr>
    <tr><td>Plus</td><td>$49.99</td><td>¥84（20,000 积分 / 4 设备 / 1TB / 专属 SkyClaw / 并行多 Agent）</td><td>专业与团队</td></tr>
    <tr><td>Ultra</td><td>—</td><td>¥188（50,000 积分 / 8 设备 / 3TB）</td><td>企业级</td></tr>
  </tbody>
</table>

> 注意：Skywork 2.0 废除了原有 credits 积分制，改为面向 Skywork Agents 的无限使用（Infinite Usage）。海外官网明确 Basic $19.99/月、Plus $49.99/月；国内订阅按人民币连续包月（华创证券研报口径 Basic ¥46、Plus ¥84、Ultra ¥188），按积分、设备数、容量区分档位。国内外币种与命名存在差异，且不同媒体转载数字不一，最终以官网结算页为准。

## 竞品对比

<table>
  <thead>
    <tr><th>维度</th><th>Skywork 桌面版</th><th>Claude Cowork</th><th>Gamma</th><th>Manus</th><th>豆包工作</th></tr>
  </thead>
  <tbody>
    <tr><td>主系统</td><td>Windows 原生</td><td>仅 macOS</td><td>跨平台 Web</td><td>跨平台云</td><td>Windows / 飞书</td></tr>
    <tr><td>模型</td><td>Claude + Gemini + auto</td><td>仅 Claude</td><td>自有</td><td>多模型</td><td>豆包系列</td></tr>
    <tr><td>本地文件</td><td>本地虚拟机隔离，不上云</td><td>偏云</td><td>不上传</td><td>云执行</td><td>本地 + 云电脑</td></tr>
    <tr><td>研究溯源</td><td>DeepResearch 含引用</td><td>强推理</td><td>无实时溯源</td><td>有</td><td>有</td></tr>
    <tr><td>视觉生成</td><td>强（图/视频）</td><td>偏弱</td><td>模板美</td><td>中</td><td>强（Seedream / Seedance）</td></tr>
    <tr><td>定价起点</td><td>$19.99 / ¥46</td><td>较高分层</td><td>$8–20</td><td>按量</td><td>68 / 200 / 500 元</td></tr>
  </tbody>
</table>

核心差异一句话：Claude Cowork 推理强但只认 Mac、视觉弱；Gamma 模板美速度快但无研究深度与实时溯源；Manus 通用但每格式不专精；豆包工作强在飞书生态上下文。Skywork 桌面版的独特卖点是 Windows 原生 + 本地隔离 + 多模型 + 多模态一条龙。

## 优缺点
优点已在开头列出：Windows 原生开箱即用、本地隔离保隐私、100+ Skills 与多模型路由、执行前向用户确认可控性强。

短板同样明显：订阅口径国内外不一致、购买前需逐字看清结算页；视觉生成质量依赖所接模型与 Skills，品牌级物料仍需人工把关；免费版限制苛刻，重度用户几乎必上付费档；产品年轻、桌面端第三方集成广度与企业级合规凭证披露有限。

## 适合谁 / 不适合谁
- **适合**：Windows 职场人、内容创作者、需要处理本地混格式文件（图/视频/表格/PPT/文档）并产出可编辑成果的用户；对数据不出本地有要求的隐私敏感场景。
- **不适合**：只认单一云工作流、拒绝本地客户端的团队；对订阅透明度与企业级合规凭证要求极高、需 SOC2/ISO 等硬凭证才敢采购的用户；纯 Mac 且已深度绑定 Claude 生态的人（那种情况 Cowork 更直接）。

## 综合评分与结论
给 4.3 分（与工具目录标注一致）。它的护城河不在某个炫技点，而在于把「本地文件理解 + 多模型路由 + 100+ Skills + 可控执行」整合进一个 Windows 原生客户端，切中了绝大多数职场电脑的真实工作流。对国内 Windows 用户而言，它是目前少有的、不需要换系统或折腾部署就能落地的桌面 Agent。短板集中在定价透明度与产品年轻化带来的生态/合规空白——这两点会在后续版本迭代中持续被放大检验。如果你手头文件杂乱、又不想把资料交给云端，Skywork 桌面版值得作为桌面 Agent 的第一站试用。
