---
id: rowboat
title: "Rowboat 深度评测：开源本地AI同事，用知识图谱让邮件会议变成可复用记忆"
date: "2026-08-02"
category: "AI工作台"
rating: 4.2
price: "免费开源（Apache-2.0）/ 本地模型零成本 / 云端API自备Key按量付费"
subtitle: "不是又一个聊天框，而是把你的工作沉淀成一张长期演进的知识图谱：邮件自动起草、会议实时纪要、后台Agent按事件定时跑、代码模式并行Agent"
url: "https://www.rowboatlabs.com"
pros:
  - "记忆机制独树一帜：邮件/会议/Slack被蒸馏成Obsidian式双向链接Markdown知识图谱，上下文随工作累积而非每次冷启动"
  - "完全本地优先+开源Apache-2.0：数据全在本地明文Markdown，可读可改可备份无锁定；Ollama/LM Studio本地模型可完全离线零成本运行"
  - "模型彻底自由：支持Claude/OpenAI/Gemini/DeepSeek等任何API Key，可按任务难度路由到本地或云端模型"
  - "HN社区验证扎实：Show HN 208赞87评论登首页，GitHub 16.7K Stars全球排名#2767，YC S24孵化"
cons:
  - "早期阶段v0.7.x：界面打磨不一，部分Surface成熟度差距大，集成仍需手动配置各API Key"
  - "本地优先被云依赖削弱：语音转写依赖Deepgram云端、部分集成需在线，纯离线体验打折扣"
  - "知识图谱需主动维护：不清理会变 cluttered 垃圾场，缺乏自动衰减/归档机制"
  - "单用户桌面定位：无多用户同步/共享图谱/冲突解决，团队协作场景不适用"
alternatives:
  - { name: "Claude Cowork", slug: "claude-cowork", reason: "要Anthropic最强模型+零配置安全管控+企业合规(SOC2/HIPAA)，接受Claude-only和云端托管" }
  - { name: "Manus", slug: "manus", reason: "要云端自主Agent过夜跑长任务(浏览器+终端+文件系统)，接受积分制和云端沙箱" }
  - { name: "Fellou", slug: "fellou", reason: "要穿透登录态的浏览器深度搜索(X/Reddit/LinkedIn)，Fellou的Agentic Browser是独门能力" }
  - { name: "Genspark", slug: "genspark", reason: "要编排层协调70+模型+80+工具组装成品，Genspark的Claw AI员工有独占云VM" }
---

## 一句话总结

Rowboat 是「把你的工作变成一张会自己长大的知识图谱」的本地优先开源 AI 同事——它不是又一个聊天框套壳，而是把邮件、会议、Slack 持续蒸馏成 Obsidian 式双向链接的 Markdown 笔记（人/项目/决策成为图谱节点），并基于这张图谱帮你起草邮件、做会议简报、跑后台 Agent、甚至并行编码。**适合被「反复喂背景、上下文冷启动」折磨的知识工作者与隐私敏感用户；但它在 v0.7.x 早期阶段，界面打磨参差不齐，且单用户桌面定位不适合团队协作场景。**

## 核心数据一览

<table>
<tr><td style="width:140px;font-weight:bold;background:#f0f4f8;">开发商</td><td>Rowboat Labs（Y Combinator S24 孵化）</td></tr>
<tr><td style="font-weight:bold;background:#f0f4f8;">最新版本</td><td>v0.7.7（2026-07-20 发布）；v0.6.8→v0.7.1 四版本于 2026-07-07 日内密集发布</td></tr>
<tr><td style="font-weight:bold;background:#f0f4f8;">开源协议</td><td>Apache-2.0（OSI 认可，允许商用）</td></tr>
<tr><td style="font-weight:bold;background:#f0f4f8;">GitHub</td><td>16.7K Stars / 1.7K Forks / 全球排名 #2767（2026-07-22）</td></tr>
<tr><td style="font-weight:bold;background:#f0f4f8;">技术栈</td><>TypeScript + Electron 桌面应用 + OpenAI Agents SDK</td></tr>
<tr><td style="font-weight:bold;background:#f0f4f8;">支持平台</td><td>macOS / Windows / Linux 三平台安装包</td></tr>
<tr><td style="font-weight:bold;background:#f0f4f8;">社区热度</td><td>Hacker News Show HN 208 赞 87 评论（2026-07-07）；Product Hunt #26 日榜 86 赞（2026-04-21）</td></tr>
</table>

## 核心功能评测

### 1. 知识图谱记忆系统 ⭐⭐⭐⭐⭐（5/5）

这是 Rowboat 的灵魂，也是它与所有竞品最本质的区别。

大多数 AI 助手是**无状态**的——每次对话从零开始，需要你反复喂背景。Rowboat 的哲学完全相反：它把你的 Gmail 邮件、Google Calendar 事件、Slack 消息、会议录音全部索引，提取出人名、项目、决策、承诺等实体，写成带双向链接的 Markdown 文件存到你本地磁盘。结果是一个 **Obsidian 兼容的知识库**——你 literally 可以用 Obsidian 直接打开 Rowboat 的数据目录浏览和编辑。

CreativeAINews 的评测精准概括了这个差异：「Most assistants reconstruct context on demand, pulling a few documents into a prompt for one answer and discarding the connections afterward. Rowboat instead indexes your work into a durable, backlinked graph.」

实际价值？想象你每天开 8 个会、收 200 封邮件。Rowboat 的「Day-Prep Briefing」功能会在每个会议前 15 分钟给你三句话：「这个人上次问了什么、你承诺了什么、还有哪些 open action item」。Skila 的评测称这是「the killer feature」——听起来 trivial，但对高频会议者来说**仅此一项就值回票价**。

**扣分项**：图谱不会自动清理。如果你不定期手动整理，节点会越来越杂乱变成「知识坟场」。目前缺少自动衰减/归档机制。

### 2. 多工作面（Work Surfaces）⭐⭐⭐⭐（4/5）

Rowboat 不是单一聊天窗口，而是多个专用「表面」：

| 工作面 | 功能 | 成熟度 |
|--------|------|--------|
| Email | 自动分诊重要性、学习你的写作风格后起草回复 | 较成熟 |
| Meeting Notes | 本地 Granola 式笔记——麦克风实时转写→Markdown 纪要→回写图谱 | 较成熟 |
| Browser | 隔离环境中的 Agent 浏览器，可执行网页任务 | 中等 |
| Code Mode | 基于 Claude Code/Codex 的并行编码 Agent | 较成熟 |
| Notes | Obsidian 式笔记+图视图+语音笔记 | 较成熟 |
| Background Agents | 事件触发（新邮件到达）/ 定时触发（每日简报） | 中等 |
| App Builder | 自然语言描述即生成住在本地的小应用（CRM/追踪器） | 早期 |

每个 Surface 都读写同一个共享知识图谱，这意味着邮件里提到的承诺会出现在会议简报里，代码讨论中的决策会沉淀为图谱节点。这种**跨 Surface 的上下文流动**是 Rowboat 最硬的护城河。

**扣分项**：各 Surface 打磨程度不一致。Email 和 Notes 相对成熟，Browser 和 App Builder 仍偏实验性。RightAIChoice 的社区反馈指出「polish varies significantly across surfaces」。

### 3. 模型自由度 ⭐⭐⭐⭐⭐（5/5）

Rowboat 在模型选择上做到了真正的「BYOK」（Bring Your Own Key）：

- **本地模型**：通过 Ollama 或 LM Studio 运行 DeepSeek/Qwen/Llama 等 8B-14B 模型，**完全离线、零成本**
- **云端 API**：Claude / OpenAI / Gemini / DeepSeek / Moonshot 等，按任务难度灵活切换
- **智能路由**：简单邮件起草走本地小模型省成本，复杂推理走 Claude Opus 保质量

对比 Claude Cowork（只能用 Claude）和 ChatGPT Work（只能用 OpenAI），Rowboat 的模型自由度是**结构性优势**。对同时持有多个 API Key 的重度用户来说，这意味著不被任何一家供应商锁定。

**隐性成本提醒**：本体软件免费，但云端 API 费用和本地算力成本由用户承担。RightAIChoice 指出 Pro 版 $49/月主要解除配额限制，模型/API 费另计。

### 4. 集成与扩展 ⭐⭐⭐（3/5）

当前原生集成：
- ✅ Gmail / Google Calendar / Google Drive（Google OAuth）
- ✅ Slack
- ⏳ Outlook（计划中）
- 🔄 MCP 协议支持：Linear / Jira / GitHub / X（Twitter）/ Exa 搜索 / Composio 工具链 / Deepgram 语音 / ElevenLabs 语音合成

MCP（Model Context Protocol）支持是关键——理论上任何 MCP Server 都能接入，生态扩展潜力大。但现实是**每个集成都需要手动配置 API Key**，没有统一的凭据管理面板。对非技术用户来说，配置 Gmail OAuth + Deepgram + ElevenLabs 一套下来可能要 30-60 分钟。

**扣分项**：集成数量仍有限，Granola 同步等曾被报告断裂后未明确修复。中文生态（微信/飞书/钉钉）无原生支持。

### 5. 隐私与数据主权 ⭐⭐⭐⭐⭐（5/5）

这是 Rowboat 最无可争议的强项：

- 所有数据存储为**本地明文 Markdown 文件**（路径 `~/.rowboat/` 目录下 JSON 配置 + Markdown vault）
- 配置文件也是纯 JSON，可审计可版本管理
- 用本地模型时**数据完全不出机器**
- 即使公司倒闭，你的知识库仍然是一个普通的文件夹

但要注意一个微妙之处：**「本地优先」不等于「100% 离线」**。语音转写依赖 Deepgram 云端、邮件同步需要联网、部分工具调用要走外部 API。Hacker News 社区有人指出「local-first claim is partially undone by cloud transcription and voice dependencies」。严格气隙环境需要仔细审查每条数据通路。

## 价格方案

<table>
<tr>
  <th style="background:#4a90d9;color:#fff;">方案</th>
  <th style="background:#4a90d9;color:#fff;">价格</th>
  <th style="background:#4a90d9;color:#fff;">包含内容</th>
</tr>
<tr>
  <td><strong>Free 开源版</strong></td>
  <td>$0（永久免费）</td>
  <td>完整桌面应用 + 全部 Work Surfaces + 知识图谱 + 本地模型支持；有基础配额限制</td>
</tr>
<tr>
  <td><strong>Pro</strong></td>
  <td>~$49/月（RightAIChoice 报价）</td>
  <td>解除配额限制 + 高级功能；早期访问价曾报 $20-30/user/月</td>
</tr>
<tr>
  <td><strong>Enterprise</strong></td>
  <td>定制报价</td>
  <td>团队部署 + 专属支持</td>
</tr>
<tr>
  <td colspan="3" style="background:#f8f8f8;color:#666;"><em>注：以上价格不含 LLM API 费用。使用 Ollama 本地模型可实现零成本运行；调用 Claude/OpenAI 等云端 API 按各家定价另行计费。</em></td>
</tr>
</table>

**成本对比视角**：Rowboat Free + Ollama 本地 DeepSeek = **$0/月**。对比 Claude Cowork 最低 $20/月（Pro）、Manus Pro $20/月、ChatGPT Plus $20/月——Rowboat 对预算敏感用户极其友好。但若重度使用 Claude Opus 级云端模型，API 费用可能超过直接订阅竞品。

## 与竞品对比

<table>
<tr>
  <th style="background:#4a90d9;color:#fff;">维度</th>
  <th style="background:#4a90d9;color:#fff;">Rowboat</th>
  <th style="background:#4a90d9;color:#fff;">Claude Cowork</th>
  <th style="background:#4a90d9;color:#fff;">Manus</th>
</tr>
<tr>
  <td><strong>许可协议</strong></td>
  <td>Apache-2.0 开源</td>
  <td>专有（Anthropic）</td>
  <td>专有</td>
</tr>
<tr>
  <td><strong>数据位置</strong></td>
  <td>本地 Markdown 文件</td>
  <td>Anthropic 云端</td>
  <td>云端沙箱 VM</td>
</tr>
<tr>
  <td><strong>模型选择</strong></td>
  <td>任意（Ollama/本地/API Key）</td>
  <td>Claude only</td>
  <td>Manus 自研模型</td>
</tr>
<tr>
  <td><strong>核心差异化</strong></td>
  <td>持久知识图谱记忆</td>
  <td>安全管控+企业合规</td>
  <td>云端自主长任务</td>
</tr>
<tr>
  <td><strong>工作面</strong></td>
  <td>邮件/会议/浏览器/代码/笔记</td>
  <td>多 Surface+MCP 连接器</td>
  <td>浏览器+终端+文件系统</td>
</tr>
<tr>
  <td><strong>离线能力</strong></td>
  <td>✅ 完全支持（本地模型）</td>
  <td>❌ 不支持</td>
  <td>❌ 不支持</td>
</tr>
<tr>
  <td><strong>价格起点</strong></td>
  <td>$0（+可选 API 费）</td>
  <td>$20/月（含 Claude）</td>
  <td>$0（+积分制）</td>
</tr>
<tr>
  <td><strong>适合场景</strong></td>
  <td>知识密集型个人生产力</td>
  <td>已订阅 Claude 的专业开发者</td>
  <td>委托式自主研究/构建</td>
</tr>
</table>

## 优势与短板展开

### 优势

**1. 知识图谱是真实的产品哲学，不是营销词**

多数 AI 工具的「记忆」只是延长上下文窗口。Rowboat 做的是**结构化的长期记忆**——人、项目、决策成为显式节点，关系是双向链接，数据是你能直接打开编辑的 Markdown。HN 社区多条高赞评论确认了这一点的稀缺性：「memory + actual work surfaces around it is exactly what I've been looking for」「the knowledge graph compounds over time」。

**2. 数据主权做到极致**

本地 Markdown = 可读可改可备份可 Git 管理。即使 Rowboat 项目明天停止维护，你的知识库仍然是完整的。这对隐私敏感行业（法律/医疗/金融）和独立创作者来说是决定性优势。

**3. 模型自由度带来成本优化空间**

简单任务走本地 8B 模型（几乎零成本），复杂推理走 Claude Opus。这种**按任务难度分级路由**的能力，是所有单一模型竞品无法复制的。

**4. HN/GitHub 社区验证扎实**

16.7K Stars + YC 孵化 + Show HN 首页热议，说明开发者社区认可其技术方向。日均多版本迭代表明项目活跃度高，非 dead project。

### 短板

**1. 早期阶段的代价**

v0.7.x 意味着功能仍在快速变化中——今天能用的 workflow 下个版本可能行为不同。RightAIChoice 社区扫描显示 78 条反馈中 73% 为批评意见，集中在「setup complexity」「integration gaps」「inconsistent polish」。非技术用户上手门槛显著高于 Claude Cowork 或 ChatGPT Work。

**2. 「本地优先」的宣传与现实有 gap**

语音转写绑 Deepgram 云端、邮件同步需 Google OAuth、MCP 工具调用走外部 API——真正 100% 离线的只有纯文本对话+本地模型这条路径。对气隙安全要求严格的用户需要逐条审核数据通路。

**3. 单用户定位限制团队场景**

无多用户同步、无共享图谱、无并发编辑冲突解决。对一个追求「institutional memory」的工具来说，这是明显的天花板——团队知识无法汇聚。

**4. 知识图谱维护负担**

图谱只增不减时会退化成 noise。目前缺少自动权重衰减、节点归档、重复合并等治理机制。重度使用几周后可能需要花时间手动清理。

## 最终推荐

### 该用 Rowboat 的人

- **每天 8+ 会议的管理者/咨询师/投资人**：Day-Prep Briefing 单项功能就值回配置时间
- **隐私敏感的专业人士**（律师/医生/记者）：本地 Markdown 数据存储满足合规刚需
- **已有多个 API Key 的重度 AI 用户**：模型自由度让你不被单一供应商绑定
- **Obsidian/Notion 重度用户**：知识图谱理念与你现有工作流天然契合
- **开发者和技术爱好者**：开源 Apache-2.0 意味着可以深度定制和贡献

### 不该用 Rowboat 的人

- **追求开箱即用的非技术用户**：配置 Gmail OAuth + Ollama + 各 API Key 的流程劝退小白
- **需要团队协作的场景**：无多用户同步，团队知识无法汇聚
- **主要需求是浏览器操控/深度搜索**：Fellou 的 Agentic Browser 更对口
- **需要企业级合规认证**：Claude Cowork 的 SOC 2 / ISO 27001 / HIPAA 是 Rowboat 目前没有的
- **想委托式丢给 Agent 过夜跑长任务**：Manus 的云端沙箱更适合

### 组合策略建议

把 Rowboat 当**「带记忆的第二大脑」**管邮件/会议/知识沉淀（$0 + 本地模型），搭配 Fellou 做穿透登录态研究、Manus 做云端自主长任务——三者覆盖的记忆/搜索/执行三角是目前桌面 Agent 领域最完整的组合拳之一。

---

**评测声明**：本文基于 Rowboat 官网（rowboatlabs.com）、GitHub 仓库（rowboatlabs/rowboat，Apache-2.0）、Hacker News 社区讨论、Product Hunt 页面及 RightAIChoice/Skila/CreativeAINews 等第三方独立评测撰写。所有功能描述均来自可验证的公开信息，本文不含付费推广。
