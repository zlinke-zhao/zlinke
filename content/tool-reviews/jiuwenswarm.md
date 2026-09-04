---
id: jiuwenswarm
title: JiuwenSwarm 蜂群智能体深度评测：华为开源的「多智能体养蜂场」，能否颠覆单 Agent 时代？
date: 2026-09-04
category: AI工作台
rating: 4.2
price: 开源免费（Apache-2.0），需自配模型（华为云 MaaS / OpenAI / DeepSeek 等）
subtitle: 华为2012实验室与华为云 AgentArts 联合打造的开源蜂群智能体，提出 Coordination Engineering 协同工程范式，PinchBench 94.2% SOTA、全套开源、鸿蒙PC首发
url: https://www.openjiuwen.com/jiuwenswarm
pros:
  - 全套 Apache-2.0 开源， GitHub/AtomGit 可获取，免费自部署，无订阅墙
  - 提出 Coordination Engineering 协同工程范式，把多 Agent 协作做成可跑可装可共建的工程交付
  - PinchBench 94.2% 综合得分业界 SOTA，平均 token 消耗降低 34.8%，LOCOMO 长期记忆准确率 85%
  - HITS 人机协同范式创新，人可作为蜂群正式成员沉浸式入队，而非仅外部指挥
  - Swarm Skills 自演进飞轮，从执行轨迹自动反推可复用团队技能，越用越强
  - 鸿蒙 PC 首个开源 AI 统一工作台，打通飞书/小艺生态，远程手机唤醒 PC 干活
cons:
  - 需自配模型 API，真实成本在模型调用与算力，开源不等于零支出
  - 工程化强但产品化偏早期，桌面端/Web 体验与文档成熟度不及商业闭源竞品
  - 生态偏华为系（昇腾/鲲鹏/鸿蒙），跨云迁移与非华为环境适配需自行验证
  - HITS 人机共协同在生产环境的权限、责任、合规边界仍待厘清，离「能用」还有距离
  - 评测 SOTA 来自社区官方基准，第三方独立复测样本尚少，结论需打折看待
alternatives:
  - qwenpaw
  - doubao-work
  - skywork-desktop
  - manus
  - kimi-work
---

## 一句话结论

JiuwenSwarm 是华为支持的开源 AI Agent 平台社区 **openJiuwen** 推出的「蜂群智能体」——它不追求造一个无所不能的超级单体，而是让多个 AI 智能体像蜂群一样自主分工、动态协商、持续演进。它由**华为 2012 实验室与华为云 AgentArts 团队联合构建**，2026 年 5 月正式对外开源发布，2026 年 7 月率先落地鸿蒙 PC，提出 **Coordination Engineering（协同工程）** 新范式，并在 PinchBench 上跑出 94.2% 的综合 SOTA。对想要自托管、可审计、不被厂商锁死的多智能体方案的用户，它是目前证据最硬的开源选择之一；代价是你得自己配模型、搭环境、扛产品早期的毛刺。

## 它到底是什么：从「单兵」到「蜂群」

过去一年 Agent 的工程范式一路更迭：Prompt Engineering → Context Engineering → 今年初的 Harness Engineering（围绕单 Agent 卷到极致）。openJiuwen 的下一个判断是 **Coordination Engineering**——多 Agent 怎么像一支精锐团队一样协同作战。真实世界里的复杂任务（大型软件交付、多学科会诊、多角色内容创作）从来不是一个 Agent 能搞定的，而需要一支各有所长的团队。

JiuwenSwarm 把这套理念做成了一整套**可跑、可装、可共建、全套开源**的工程交付，由四大组件形成闭环：

<table>
  <thead>
    <tr>
      <th>组件</th>
      <th>解决什么</th>
      <th>核心价值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Agent Swarm</strong></td>
      <td>多 Agent 怎么自主分工、动态协商</td>
      <td>支持不同成员路由不同模型，因材施教匹配角色能力</td>
    </tr>
    <tr>
      <td><strong>Swarm Skills</strong></td>
      <td>协作最佳实践怎么沉淀</td>
      <td>把 SOP、角色搭配、调度策略封装成可复用「团队级技能」</td>
    </tr>
    <tr>
      <td><strong>Swarm Skills Hub</strong></td>
      <td>沉淀的能力怎么流通</td>
      <td>开放共享生态，团队技能可上传、下载、二次创作</td>
    </tr>
    <tr>
      <td><strong>Swarm Skills 自演进</strong></td>
      <td>系统怎么越用越强</td>
      <td>从执行轨迹自动反推 Swarm Skill，团队层与成员层双层进化</td>
    </tr>
  </tbody>
</table>

## 三大运行模式与两种人机协同姿态

JiuwenSwarm 提供三种运行模式，覆盖从日常事务到复杂工程：

<table>
  <thead>
    <tr>
      <th>模式</th>
      <th>定位</th>
      <th>典型用途</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>个人助手（Claw 类）</strong></td>
      <td>单智能体处理日常事务</td>
      <td>文件整理、信息问答、日程协助</td>
    </tr>
    <tr>
      <td><strong>编码（Coding）</strong></td>
      <td>面向开发者的代码生成与调试</td>
      <td>应用开发、昇腾算子生成（含 TUI 模式）</td>
    </tr>
    <tr>
      <td><strong>集群（Swarm）</strong></td>
      <td>自动组建多 Agent 团队</td>
      <td>复杂项目拆分角色（前后端/测试/统筹）并行协作</td>
    </tr>
  </tbody>
</table>

人机协同是它最出彩的部分，提供 HOTS 与 HITS 两种姿态：

<table>
  <thead>
    <tr>
      <th>范式</th>
      <th>人的角色</th>
      <th>交互方式</th>
      <th>典型场景</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>HOTS</strong><br>（Human on the Swarm）</td>
      <td>外部指挥官</td>
      <td>远程调度、实时观察瓶颈、审批结果</td>
      <td>传统 AI 助手、AutoGPT 类工具</td>
    </tr>
    <tr>
      <td><strong>HITS</strong><br>（Human in the Swarm）</td>
      <td>团队正式成员</td>
      <td>实时协作、平等参与、随时加入/私聊</td>
      <td>多人多机协同办公、狼人杀博弈、沉浸式课程</td>
    </tr>
  </tbody>
</table>

HITS 是 2026 年 7 月鸿蒙 PC 版的核心亮点：人不再站在外面指挥，而是「进了群」——可以 @ 某个智能体加需求、中途加入讨论、和 AI 玩家一起推理投票，智能体也会主动读你的发言、判断你的身份。本质上把人机关系从「人指挥 AI 干活」变成「人和 AI 组队一起干活」。

## 硬实力：基准与工程底座

协同的底层是 openJiuwen Harness 的单 Agent 执行力，在权威基准上有公开数据支撑：

- **PinchBench（Kilo.ai 发布的 Agent 综合能力基准，覆盖代码/写作/文档/会议/文件等操作）**：JiuwenSwarm 以 **94.2%** 综合得分取得业界 SOTA，相比 OpenClaw（91.6%）提升近 3 个百分点，同时平均 **token 消耗降低 34.8%**。
- **LOCOMO（长期对话记忆权威评测集）**：记忆准确率达 **85%**（使用 8B 模型做记忆加工与判别），优于主流记忆系统。
- **算力亲和**：针对昇腾、鲲鹏优化，多 Agent 并发下首 token 时延减半、推理存储峰值下降约 25%；上下文瘦身技术保障长时稳定运行。

工程层面还有几个生产级细节值得提：纯声明式 Spec 的 **SwarmFlow** 工作流编排（DAG 接管调度，Agent 只专注推理）、**Symphony** 层次化技能检索、**CircuitBreaker** 断路器（检测四种循环防止任务卡死空转）。这些说明它不是演示玩具，而是冲着企业级稳定交付去的。

## 实测场景与产业落地

社区给出的实战案例覆盖多领域：医疗上由 **23 位不同专科 AI 专家**组建虚拟会诊团队联合会诊；办公上用户在高铁用手机飞书远程唤醒鸿蒙 PC 上的 AI 团队，20 分钟产出 200 页汇报 PPT；编程上自动组建设计师+前端+后端+测试+Leader 小队复刻坦克大战游戏；娱乐上人和 AI 坐一桌玩狼人杀。产业侧，**邮储银行**的金融智能体执行引擎已在情报监测、风险预警等场景投产，2026 年 6 月获社区「产业先锋奖」；工商银行、中科大「灵境造物」科研平台也参与共建。

## 定价与部署：开源免费，但成本在模型

JiuwenSwarm 全套 **Apache-2.0 开源**，GitHub/AtomGit 可获取源码，Swarm Skills Hub 可上传自有团队技能。部署方式灵活：

- **pip 安装**：`pip install jiuwenswarm` → `jiuwenswarm-init` → `jiuwenswarm-start`，浏览器访问 `http://localhost:5173`
- **TUI 版本**：`pip install jiuwenswarm-tui`，命令行爱好者适用
- **桌面端**：已上架鸿蒙 PC 应用市场（WorkSwarm），兼容 Windows / Mac / Ubuntu
- **渠道接入**：可绑定小艺、飞书、钉钉、Telegram，远程下达任务

定价一句话：**本体免费开源，真实成本在你选的模型 API 与算力**。它支持华为云 MaaS、OpenAI、DeepSeek 等多模型路由，模型无关——你用什么付什么钱，没有订阅墙、没有积分陷阱。当前最新稳定版为 **v0.2.3**（2026 年 8 月中旬），v0.2.4 已在 beta 通道。

## 横向对比：开源蜂群 vs 主流框架

<table>
  <thead>
    <tr>
      <th>维度</th>
      <th>JiuwenSwarm</th>
      <th>微软 AutoGen</th>
      <th>CrewAI</th>
      <th>LangGraph</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>开源协议</td>
      <td>Apache-2.0</td>
      <td>开源</td>
      <td>开源</td>
      <td>开源</td>
    </tr>
    <tr>
      <td>协同范式</td>
      <td>Coordination Engineering</td>
      <td>Conversable Agent</td>
      <td>Role-playing Crew</td>
      <td>图状态机</td>
    </tr>
    <tr>
      <td>人机协同</td>
      <td>HOTS + HITS 入队</td>
      <td>有限</td>
      <td>有限</td>
      <td>有限</td>
    </tr>
    <tr>
      <td>技能自演进</td>
      <td>Swarm Skills 自动反推</td>
      <td>需自研</td>
      <td>需自研</td>
      <td>需自研</td>
    </tr>
    <tr>
      <td>华为/鸿蒙生态</td>
      <td>原生打通</td>
      <td>无</td>
      <td>无</td>
      <td>无</td>
    </tr>
    <tr>
      <td>官方基准 SOTA</td>
      <td>PinchBench 94.2%</td>
      <td>无统一宣称</td>
      <td>无统一宣称</td>
      <td>无统一宣称</td>
    </tr>
  </tbody>
</table>

> 注：上表 JiuwenSwarm 数据为社区官方基准与文档；AutoGen/CrewAI/LangGraph 为通用定位描述，非逐项实测对比。

## 值不值得上手：适合谁，不适合谁

**适合**：想自托管、可审计、不被闭源厂商锁死的技术团队；华为云/昇腾/鸿蒙生态用户；需要做多角色协作（调研、会诊、内容生产）且愿意自己配模型与环境的开发者；把 Agent 当长期基础设施而非一次性玩具的人。

**不适合**：想要开箱即用、点开就能用的非技术用户；预算敏感、连模型 API 都不想碰的小团队；对第三方独立评测完备度要求极高、等不及社区官方基准被复测的人。

## 总结

JiuwenSwarm 把「多 Agent 协同」从行业共识做成了**第一套可跑、可装、可共建、全栈开源的工程交付**，并借 HITS 把人机协同往前推了一步。它的硬伤不在于理念——而在于产品化早期、生态偏华为系、真实成本在模型、SOTA 尚需独立复测。如果你认同「Agent 的下一步不是更强单体而是更聪明的群体」，它值得进你的自托管清单；如果只是想省事，豆包工作、Skywork 桌面版这类闭源开箱方案更顺手。

**综合评分 4.2**：开源彻底 + 协同范式领先 + 基准亮眼，扣在产品成熟度、跨生态适配与评测独立性上。
