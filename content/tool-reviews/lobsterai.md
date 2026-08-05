---
id: lobsterai
title: "LobsterAI 深度评测：网易有道 100% 开源桌面 Agent，GUI 零门槛，但一次照片分类烧掉 20 万 token"
date: "2026-08-04"
category: "AI工作台"
rating: 4.0
price: "工具端完全免费（MIT 开源）；大模型 API 费用自付，第三方实测口径约 46 元/月起（智谱 GLM Coding Plan 档位）"
subtitle: "5,761 Star、12 套岗位专家套件、11 条 IM 远程通道，把 OpenClaw 生态做成了普通打工人点两下就能装的 GUI 助理；但第三方标准化横评里它没跑完任务、估算烧掉 14-20 万 token，761 个未关闭 issue 也提醒你它还很年轻"
url: "https://lobsterai.youdao.com"
pros:
  - "国内大厂首个 100% 开源桌面 Agent：MIT 协议、代码全量可审计，GitHub 5,761 Star / 903 Fork，2026 年 7 月一个月内连发 8 个版本，迭代密度罕见"
  - "GUI + 一键安装真正把命令行门槛砍到零：下载 dmg/exe 双击即用，对比 OpenClaw 原版需要自己配环境，这是它最扎实的产品价值"
  - "11 条 IM 远程通道覆盖国内职场：微信、企微、钉钉、飞书、QQ、Telegram、Discord、网易蜜蜂、POPO 与邮件，下班路上发条消息就能唤醒家里的电脑干活"
  - "开箱即用的技能栈够厚：28 个内置技能 + 12 套岗位专家套件（工程/产品/营销/财务/HR），再经 find-skills 接入 OpenClaw 生态 5000+ 技能与 MCP 协议"
  - "数据主权做到了架构层：会话/配置/记忆全部落在本地 lobsterai.sqlite，敏感操作需用户批准并留门控记录，可选 QEMU + Alpine Linux 沙箱隔离执行"
cons:
  - "第三方标准化横评成绩不佳：8 款大厂 Agent 同题实测「10 张人物照片按性别分文件夹」，LobsterAI 未跑完且分错 1 张，估算消耗 14 万-20 万 token，同题 MaxClaw 仅花约 1 元一次成功"
  - "Token 消耗与耗时是硬伤：博主实测生成一个 PPT 耗时整整 10 分钟，Agent 后台反复试错自我修正，长期使用的隐性模型成本远高于订阅制竞品"
  - "模型生态兼容有坑：有实测者反馈同一份 Kimi API 在 OpenClaw 原版能跑通，在 LobsterAI 死活配不上，换通义千问 3.5 同样失败"
  - "工程成熟度仍是早期：GitHub 累计 761 个未关闭 issue，底层继承 OpenClaw 的稳定性问题，配置出错容易导致服务挂起"
  - "官方 Release 只提供 macOS 与 Windows 安装包，仓库虽有 dist:linux 打包脚本但未发布 Linux 正式版；视觉审美类产出也被实测者评价明显偏弱"
alternatives:
  - { name: "AutoClaw（智谱）", slug: "autoclaw", reason: "同为 OpenClaw 系一键安装发行版，走积分制付费省去配 API 的麻烦；LobsterAI 胜在完全开源与不收工具费，但要自己接模型" }
  - { name: "Kimi Work", slug: "kimi-work", reason: "对话入口 + 长文本基因，中文开箱体验更顺、无需本机常开；LobsterAI 强在 GUI 可视化管理与 11 条国内 IM 远程通道" }
  - { name: "Rowboat", slug: "rowboat", reason: "同为开源本地优先桌面 Agent，核心差异是 Rowboat 押注 Markdown 知识图谱长期记忆；LobsterAI 押注岗位专家套件与 IM 远程执行" }
  - { name: "Fellou", slug: "fellou", reason: "以浏览器为底座、擅长穿透登录态跨站深搜；LobsterAI 的浏览器自动化基于 Playwright，属通用技能之一而非产品主轴" }
---

## 一句话总结

LobsterAI（有道龙虾）是网易有道出品的 100% 开源桌面级 Agent，它真正解决的是「OpenClaw 好用但普通人装不上」这一件事——双击安装包、GUI 点两下、扫码绑定钉钉飞书，一个能碰你本机文件、终端和浏览器的数字员工就上岗了。**适合被命令行劝退、又想要 7×24 后台助理的国内职场人，尤其在意数据不出本机、代码可审计的用户；但如果你追求的是「一次就把活干对、成本可控」，它目前在第三方同题横评中的表现还撑不起这个期待——同一个照片分类任务，别家花 1 块钱一次成功，它烧掉 14 万-20 万 token 还没干完。**

## 核心数据一览

<table>
  <tr><td style="width:140px;font-weight:bold">开发商</td><td>网易有道（NYSE: DAO），CEO 周枫；2026 Q1 财报净收入 13 亿元人民币（约 1.954 亿美元），财报中明确将 LobsterAI 列为 AI Agent 矩阵扩张成果</td></tr>
  <tr><td style="font-weight:bold">产品形态</td><td>桌面级 Agent 客户端，Electron 40 + React 18 + TypeScript 构建，Redux Toolkit / TailwindCSS / Vite 技术栈</td></tr>
  <tr><td style="font-weight:bold">关键时间线</td><td>2026-02-11 开放试用申请 → 02-19 宣布开源（新华网报道）→ 03-08 v0.2.2 打通企微/QQ/钉钉/飞书 → 03 月上线技能商店并支持 MCP → 06-09 三大更新（12 套专家套件、Sites 一键建站、多语言语音输入）</td></tr>
  <tr><td style="font-weight:bold">最新版本</td><td>官网下载页 2026.7.31；GitHub 最新 Release 为 2026.7.29（2026-07-30 发布），仅提供 mac-arm64.dmg / mac-x64.dmg / win-x64.exe 三个安装包</td></tr>
  <tr><td style="font-weight:bold">开源数据</td><td>MIT 协议，仓库 netease-youdao/LobsterAI，创建于 2026-02-12；截至 2026-08-04 共 5,761 Star、903 Fork、761 个未关闭 issue，最后提交 2026-08-03</td></tr>
  <tr><td style="font-weight:bold">技能生态</td><td>28 个内置技能（配置于 SKILLs/skills.config.json）+ 12 套岗位专家套件 + MCP 协议接入 + find-skills 可拉取 OpenClaw 生态 5000+ 技能</td></tr>
  <tr><td style="font-weight:bold">IM 远程通道</td><td>11 条：微信、企业微信、钉钉、飞书/Lark、QQ、Telegram、Discord、网易 IM、网易蜜蜂、POPO、邮件</td></tr>
  <tr><td style="font-weight:bold">数据与安全</td><td>本地 SQLite（lobsterai.sqlite，存于 Electron userData）；渲染进程启用上下文隔离并禁用 Node 集成；敏感工具调用需授权且留痕；支持 QEMU + Alpine Linux 沙箱 VM 模式</td></tr>
  <tr><td style="font-weight:bold">市场表现</td><td>上线首月访问量突破 27 万次，位列 OpenClaw 生态流量榜龙虾 Agent 分类前五；北京图博会披露首批吸引超 2000 名开发者参与共建</td></tr>
</table>

## 核心功能评测

### 1. GUI 零门槛安装与桌面级执行 — 4.5/5

这是 LobsterAI 存在的理由。OpenClaw 原版的门槛在于配环境、敲命令，而 LobsterAI 把整套东西打包成 dmg 和 exe，双击安装即可获得一个带任务列表、技能面板、MCP 管理、定时任务的可视化控制台。装好之后它能直接连接本机文件、终端、浏览器与本地项目，在真实工作环境里动手，而不是把结果吐在聊天框里让你自己复制。

实测层面有正面样本：有博主让它抓取指定网页数据，结果被完整整理成 Excel 放到桌面，全程只需要在遇到登录拦截时人工扫码一次；另一个偏极限的测试是让它写一款俄罗斯方块游戏，要求包含 7 种方块的旋转移动、行消除反馈、分数计算与结束判定，产出的代码直接可运行，实际试玩未发现明显 bug。扣分项在于官方 Release 至今只发 macOS 与 Windows 包，仓库里的 `dist:linux` 脚本没有对应正式版本。

### 2. IM 手机远程指挥 — 4.5/5

这是最贴合国内职场的差异点。LobsterAI 覆盖 11 条 IM 通道，钉钉走 Stream 接口、飞书走官方 SDK，且支持多实例绑定——不同 IM 账号或频道可以挂到不同的 Agent 上。实际意义是：人在通勤路上，用飞书发一句「帮我把这份数据分析一下」，家里那台电脑上的 Agent 立刻响应执行，跑完把成果回传到聊天窗口。

对比之下，海外同类产品普遍只接 Slack 与 Telegram，在国内基本等于失效。这一项没给满分，是因为它依赖本机必须开机在线——真正的 7×24 需要你的电脑也 7×24。

### 3. 专家套件与技能生态 — 4/5

2026 年 6 月上线的「专家套件」是官方主推的能力包，把真实岗位的专业流程打包成即插即用的技能包，覆盖工程研发、产品运营、市场营销、财务核算、人力资源等领域，**总计 12 套**（官网 Demo 中可见股票助手、内容创作、备课出卷专家、内容总结助手等）。官方口径是无需提示词技巧，一键安装后最快 3 分钟上手。

底层技能数则一路在涨：3 月对外宣传是 16 种核心技能，而当前 GitHub README 明确写着内置 28 个技能，覆盖 Web 搜索、Word/Excel/PPT/PDF 文档处理、Canvas 海报、基于 Remotion 的视频生成、Playwright 网页自动化、邮件收发等。再往外，find-skills 可以一键拉取 OpenClaw 生态的 5000+ 技能与 GitHub 全量技能，MCP 协议则负责接第三方工具。同期上线的 Sites 一键建站，能把生成的报告或数据看板直接部署成带独立分享链接的网页——彼时 OpenAI 旗下 Codex 的同类 Sites 功能还只对 Business 和 Enterprise 客户预览开放。

扣分原因很直接：技能数量的宣传口径变化快，且能力上限受制于上游 OpenClaw 生态与你所选模型，装得多不等于跑得对。

### 4. 任务完成质量与 Token 成本 — 2.5/5

**这是全文最需要泼冷水的一项，也是评分从 4.3 下调到 4.0 的主因。**

一份覆盖 8 款大厂 Agent 的横评设置了统一任务：把文件夹里 10 张人物照片按性别分到男、女两个文件夹。结果如下：

<table>
  <tr><th style="background:#4a90d9;color:#fff;">产品</th><th style="background:#4a90d9;color:#fff;">是否完成</th><th style="background:#4a90d9;color:#fff;">消耗</th><th style="background:#4a90d9;color:#fff;">失败原因/做法</th></tr>
  <tr><td><strong>LobsterAI</strong></td><td>❌ 未完成</td><td>估算 14 万-20 万 token</td><td>选择写代码分类，最终有 1 张分错</td></tr>
  <tr><td>MaxClaw（MiniMax）</td><td>✅ 一次成功</td><td>121 积分（约 1 元）</td><td>直接调用视觉语言模型自写提示词识别</td></tr>
  <tr><td>AutoClaw（智谱）</td><td>❌ 未完成</td><td>603 积分（约 3.5 元）</td><td>默认模型无多模态，改用代码失败后卡住</td></tr>
  <tr><td>Kimi Claw</td><td>❌ 未完成</td><td>约 6 千-9 千 token</td><td>正确分类 2 张，其余 7 张因网络问题上传失败</td></tr>
</table>

问题的根源在于路径选择：面对一个明显该用多模态视觉识别的任务，LobsterAI 选择了写代码兜圈子。同样的现象也体现在耗时上——有实测者反馈，仅仅生成一个 PPT 就用掉了整整 10 分钟，原因是 Agent 在后台不断试错、自我测试与修正，而这个过程正是 token 的消耗大户。

另一个实打实的坑是模型兼容：同一份 Kimi 的 API 配置，在 OpenClaw 原版能顺滑运行，到了 LobsterAI 这边死活配置不成功，换成通义千问 3.5 同样失败。

### 5. 开源、数据主权与安全 — 5/5

这一项它做得毫不含糊。MIT 协议 100% 开源，每一行代码可被公众审计；所有聊天记录与配置存在本地 SQLite，不离开设备；渲染进程启用上下文隔离并禁用 Node 集成，渲染层访问主进程必须走 preload IPC；涉及数据安全的工具调用一律需要用户明确批准并记录日志；敏感操作还可以丢进 QEMU + Alpine Linux 的沙箱虚拟机里跑。对于要处理合同草案、候选人简历、财务表格的用户，这套设计比任何营销话术都有说服力。

## 价格方案

LobsterAI 的定价模型和绝大多数商业 Agent 不同：**工具本身一分钱不收，钱全花在模型上。**

<table>
  <tr><th style="background:#4a90d9;color:#fff;">成本项</th><th style="background:#4a90d9;color:#fff;">是否必需</th><th style="background:#4a90d9;color:#fff;">费用</th><th style="background:#4a90d9;color:#fff;">说明</th></tr>
  <tr><td>LobsterAI 客户端</td><td>必需</td><td><strong>0 元</strong></td><td>MIT 开源，官网与 GitHub Releases 均可免费下载，无门槛费、无积分制</td></tr>
  <tr><td>大模型 API</td><td>必需</td><td>按量自付</td><td>需自行配置 API Key；仓库明确支持 DeepSeek 与 Kimi K3 等，官网 Demo 默认展示 DeepSeek v4 pro</td></tr>
  <tr><td>包月模型套餐（可选替代）</td><td>推荐</td><td>约 46 元/月</td><td>第三方上手指南推荐搭配智谱 GLM Coding Plan 档位，用固定月费对冲 Agent 的 token 波动</td></tr>
  <tr><td>本机算力/电费</td><td>必需</td><td>隐性</td><td>桌面 Agent 需本机常开才能实现远程唤醒，7×24 场景要考虑设备损耗</td></tr>
  <tr><td>沙箱运行开销</td><td>可选</td><td>隐性</td><td>启用 QEMU + Alpine 虚拟机模式会额外占用内存与磁盘</td></tr>
</table>

需要清醒认识的是：**免费的工具费不等于低总成本。** 参考上文横评，一个照片分类任务就估算烧掉 14 万-20 万 token，若按主流模型的按量计价折算，密集使用下的月度支出完全可能超过竞品的固定订阅费。这也是同类产品中「包月养虾成为主流方案」的原因——它把不可预测的成本变成了确定的月费。

## 与竞品对比

<table>
  <tr><th style="background:#4a90d9;color:#fff;">维度</th><th style="background:#4a90d9;color:#fff;">LobsterAI</th><th style="background:#4a90d9;color:#fff;">AutoClaw（智谱）</th><th style="background:#4a90d9;color:#fff;">Rowboat</th></tr>
  <tr><td>开源协议</td><td>MIT，100% 开源</td><td>开源发行版</td><td>Apache-2.0，100% 开源</td></tr>
  <tr><td>付费模式</td><td>工具免费，模型 API 自付</td><td>积分制（横评中同题耗 603 积分约 3.5 元）</td><td>工具免费，模型 API 自付</td></tr>
  <tr><td>上手门槛</td><td>最低：GUI + 一键安装</td><td>较低：一键安装但偏开发者</td><td>中：需自行配置模型与集成</td></tr>
  <tr><td>核心差异点</td><td>12 套岗位专家套件 + 11 条国内 IM 远程通道</td><td>预置技能市场 + 官方模型打包</td><td>本地 Markdown 双向链接知识图谱长期记忆</td></tr>
  <tr><td>国内 IM 适配</td><td>✅ 微信/企微/钉钉/飞书/QQ 全覆盖</td><td>⚠️ 依赖插件</td><td>⚠️ 以 Slack / Telegram 为主</td></tr>
  <tr><td>同题横评表现</td><td>未完成，14-20 万 token</td><td>未完成，卡住</td><td>未参与该横评</td></tr>
  <tr><td>数据存储</td><td>本地 SQLite + 可选 QEMU 沙箱</td><td>依部署方式而定</td><td>本地明文 Markdown 目录</td></tr>
  <tr><td>GitHub Star</td><td>5,761</td><td>—</td><td>16,900+</td></tr>
</table>

结论很清楚：**在「零门槛 + 国内 IM 生态 + 完全开源」这三点的交集上，LobsterAI 目前没有对手。** 但如果你的诉求是任务一次跑对、成本可预测，积分制的商业 Agent 反而更省心；如果你要的是跨会话的长期记忆沉淀，Rowboat 的知识图谱路线更对症。

## 优势与短板

**优势展开：**

- **GUI 不是包装，是产品哲学。** OpenClaw 生态最大的流失点就在安装环节，LobsterAI 用一个安装包把技术门槛清零，这也是它上线首月能冲到 27 万访问、跻身生态流量榜前五的直接原因。
- **开源的诚意可验证。** 5,761 Star、903 Fork 是公开数字，2026 年 7 月单月连发 8 个版本（7.3、7.7、7.10、7.15、7.16、7.17、7.23、7.29），最后一次提交就在昨天，迭代节奏没有掉链子。
- **国内 IM 覆盖是真需求。** 11 条通道里微信、企微、钉钉、飞书、QQ 一个不落，这是海外产品短期内补不上的本地化壁垒。
- **岗位化落地方向正确。** 12 套专家套件把「会聊天」变成「会交付」，配合 Sites 一键建站，从写方案到排版、存档、生成分享链接能一次跑完。

**短板展开：**

- **执行策略不够聪明。** 横评暴露的问题不是「能力不足」，而是「路径选错」——该调视觉模型时去写代码，导致既慢又贵还错。这属于 Agent 规划层的能力，不是换个模型就能解决的。
- **成本不可预测。** 工具免费很诱人，但 token 消耗如流水，长期高频使用的账单可能远超预期，这一点在自己配 API Key 的模式下尤其危险。
- **761 个未关闭 issue。** 相对 5,761 Star 而言，这个未关闭比例说明产品仍处在快速试错期，底层继承的 OpenClaw 稳定性问题（配置出错易导致服务挂起）短期难以根除。
- **生态兼容有盲区。** Kimi、通义千问 3.5 的 API 配置失败案例，说明它对上游模型的适配还不够全面。
- **视觉审美偏弱。** 有实测者明确指出，要求生成 Q 版动漫风格的产出与预期差距明显——涉及设计美感的活儿别指望它。

## 最终推荐

**建议现在就装的人：** 被命令行彻底劝退、但确实想要一个能碰本机文件的数字员工的职场人；钉钉/飞书重度用户，需要下班后还能远程唤醒电脑跑任务；处理合同、简历、财务数据等敏感信息，要求数据绝不出本机的用户；想研究开源 Agent 架构、有二次开发意图的开发者——MIT 协议 + 清晰的 Electron/React 分层，是很好的学习样本。

**建议再等等的人：** 追求任务一次跑对、不愿意花时间纠错的效率优先型用户；对模型账单敏感、需要成本可预测的个人与小团队（更适合积分制或包月制产品）；主力做视觉设计、对产出审美有要求的创作者；使用 Linux 桌面的用户——官方还没发正式安装包。

**务实的用法：** 先用免费这一点做低成本试水，但**务必先配一个包月制的模型套餐（如约 46 元/月的档位）而不是按量付费的 API Key**，把成本天花板锁死；把它用在流程确定、重复性高的活上——定时抓资讯、整理表格、批量处理文档、网页数据采集，这些它跑得稳；而需要视觉判断、复杂决策或一次成型的任务，暂时别全权委托。

---

**评测声明**：本文数据来源包括 LobsterAI 官网（lobsterai.youdao.com）下载页与功能演示、GitHub 仓库 netease-youdao/LobsterAI 的 README 与 Releases API（Star/Fork/issue 数与版本号取自 2026-08-04 实时接口）、新华网与央广网关于产品开源及北京图博会的公开报道、网易有道 2026 年第一季度财报，以及第三方独立横评与博主实测记录（8 款大厂 Agent 同题横评、个人博主深度实测）。所有第三方实测结论均标注来源与测试条件，本文不含付费推广。
