---
title: "Claude Fable 5 深度实测：2小时写出完整Obsidian插件，但$50/百万token到底值不值？"
date: "2026-06-17"
category: "深度"
tags: ["Claude Fable 5", "Anthropic", "AI编程", "Mythos", "实测", "API对比"]
description: "Anthropic估值$9650亿的秘密武器Claude Fable 5终于公测。我们在编程、写作、安全三个维度深度实测，发现它在2小时写出完整Obsidian插件的同时，token消耗速度也吓人——值不值那$50/百万token，这篇文章给你答案。"
affiliates:
  - name: "ANTHROPIC API 官网"
    url: "https://console.anthropic.com"
---

# Claude Fable 5 深度实测：2小时写出完整Obsidian插件，但$50/百万token到底值不值？

> "它仿佛是一个经验老道的程序员，对着实习生写的代码一顿分析。"
>
> —— 某开发者使用 Fable 5 后的真实评价

## 引子：一个 $9650 亿的赌注

2026 年 6 月 9 日深夜，Anthropic 扔出了一颗深水炸弹。

两款 Mythos 级模型——**Claude Fable 5** 和 Claude Mythos 5 同时发布。这不仅是 Anthropic 把"神话级"能力首次对公众开放，更是一个清晰的信号：这家估值冲到 **$9650 亿**、刚刚提交 IPO 申请的 AI 公司，赌的就是"不计成本地把 AI 做到极致"。

但问题来了——Fable 5 到底多强？值不值那 $50/百万 token 的输出价格？和 GPT-5.5、Kimi K2.7 比优势在哪？以及最重要的：**普通开发者，什么时候该用它、什么时候不该？**

带着这些问题，我做了 4 个维度的深度实测。先说结论，再讲细节。

## 📌 TL;DR

| 维度 | 评价 | 一句话 |
|------|------|--------|
| 编程能力 | ⭐⭐⭐⭐⭐ | 当前最强，2h 完成完整插件开发 |
| Token 消耗 | ⚠️⚠️⚠️ | 极其恐怖，简单任务也不手软 |
| 性价比 | ⭐⭐ | $50/M output，日常用它=烧钱 |
| 安全限制 | 🛡️🛡️🛡️ | 漏洞/攻击类直接拒绝 |
| 适合场景 | 🎯 精准 | 复杂长任务 > 日常问答 |

> **核心建议**：别把 Fable 5 当日常工具。它是一把「牛刀」——只有真正需要杀牛的复杂任务，才值得祭出来。

---

## 一、Claude Fable 5 是什么？

### 模型定位

Claude Fable 5 是 Anthropic 的新旗舰，也是首个向公众开放的 **Mythos 级**模型。在此之前，Mythos 是 Anthropic 内部等级最高的模型代号，从未对外发布。

值得注意：**Fable 5 和 Mythos 5 是同一个模型**。区别在于：
- **Fable 5**：加了安全护栏，通过 API 和 Claude 应用公开可用
- **Mythos 5**：移除安全护栏的"原版"，仅通过 Project Glasswing 项目提供给少数基础设施供应商和经审查的网络安全研究员

简单说：**你拿到的 Fable 5，是一个被"封印"了的神话。**

### 核心规格

| 参数 | 数值 |
|------|------|
| 上下文窗口 | 1,000,000 tokens |
| 最大输出 | 128,000 tokens/次 |
| API ID | `claude-fable-5` |
| 输入价格 | $10 / 百万 tokens |
| 输出价格 | $50 / 百万 tokens |
| 免费期 | 6月9日-22日（付费订阅用户可用） |

> 价格为 Claude Opus 4.8 的 **整整 2 倍**。

### 可用平台

- Claude API（`claude-fable-5`）
- Amazon Bedrock
- Azure AI
- Snowflake
- GitHub Copilot
- Claude 应用（Web/Desktop）

---

## 二、基准测试：碾压级领先

先上硬数据。以下是第三方独立测试结果：

| 基准测试 | Fable 5 | Opus 4.8 | GPT-5.5 | Gemini 3.1 Pro |
|---------|---------|----------|---------|---------------|
| **SWE-Bench Pro** | **80.3%** | 69.2% | 58.6% | 54.2% |
| **Terminal-Bench 2.1** | **88.0%** | — | 83.4% | — |
| **FrontierCode Diamond** | **29.3%** | ~14% | — | — |
| **Humanity's Last Exam** (无工具) | 59.0% | — | 52.2% | — |
| **Humanity's Last Exam** (带工具) | **64.5%** | — | — | — |

有几个数字值得特别关注：

**SWE-Bench Pro 80.3%**：比 Opus 4.8 高 11 个百分点，比 GPT-5.5 高 **近 22 个百分点**。这不是挤牙膏，是拉开了一个代差。

**Terminal-Bench 88.0%**：这个评测 AI 在终端环境下的操作能力——敲命令、修配置、部署服务。Fable 5 在这方面是独一档。

**FrontierCode Diamond 29.3%**：这个超难编程基准里，Fable 5 的得分是 Opus 4.8 的 **两倍**。

> ⚠️ 注意：SWE-Bench Pro 的分数不是每位开发者都能复现的。它评测的是在理想 prompt 和工具链配置下的**上限**。实际使用体验取决于你如何调 prompt。

---

## 三、实测场景一：编程——真的能"独立干活"

### 任务：开发一个 Obsidian 插件

这是社区里流传最广的实测案例。开发者苍何把 Fable 5 接入自己的项目，让它开发一个集成 Claude Code / Codex / OpenCode 多 CLI 的 Obsidian 插件。

**结果**：Fable 5 在约 **2 小时**内几乎一次性完成了插件开发——包括：
- 检测本地安装的 AI 编程 CLI
- 自动同步配置到 Obsidian
- 支持自定义第三方模型
- 在 Obsidian 内实现 All-in-one 的 AI 编程体验

"几乎一次完成"意味着什么？意味着你不需要反复改 prompt、不需要纠错、不需要手动补代码。它自己理解需求、设计方案、写出代码、甚至处理了边缘情况。

### 任务：WeSight 项目 Bug 修复

同一个开发者让 Fable 5 分析 WeSight 引擎的代码。Fable 5 不但定位了功能性 Bug，还指出了 UI 交互层面的设计问题。作者评价：

> "仿佛是一个经验老道的程序员，对着实习生写的代码，一顿分析。"

### Agent 能力：社区疯传的极限测试

除了这两项直接测试，社区还流传着 Fable 5 的极限 Agent 表现：
- **50 分钟通关《精灵宝可梦火红》**：完全自主探索游戏世界
- **一个 prompt 复刻"Minecraft"场景**：从 3D 渲染到物理碰撞全搞定
- **自主搭建 Windows 操作系统**：构建完整的 OS 引导和交互系统

这些案例虽然来自社区，未经完全验证，但指向同一个趋势：**AI 编程已经从"辅助"进入了"主力"阶段。**

---

## 四、实测场景二：速度与 Token 消耗——烧钱机器

### TPS 表现

Fable 5 的速度说实话**没有惊艳到**。对比数据：

| 模型 | 大致 TPS | 体感 |
|------|---------|------|
| GLM-5.1-highspeed | 300-400 tsp | 极快 |
| Kimi K2.7 Code (6倍速) | ~200 tsp | 很快 |
| GPT-5.5 | ~80-120 tsp | 正常 |
| **Claude Fable 5** | **~40-60 tsp** | 偏慢 |

速度不是 Fable 5 的长项。它的设计哲学是"给你最好的答案，而不是最快的答案"。

### Token 消耗：最容易被忽略的坑

这才是真实的痛点。

实测数据显示，让 Fable 5 做一件"找 Bug + 给修改建议"这样的中等任务，**几分钟就能烧掉 $50 的 Claude Pro 月度额度**。作者苍何吐槽：

> "几个简单任务，Token 就哗哗的用。分析项目改了几个 Bug，5 小时额度直接干完了。"

来算一笔账：

| 场景 | 预估消耗 | 约合费用 |
|------|---------|---------|
| 简单问答（500 token 输出） | ~500 tokens | ~$0.025 |
| 代码审查（5000 token 输出） | ~5000 tokens | ~$0.25 |
| 完整功能开发（50000 token 输出） | ~50000 tokens | ~$2.50 |
| 复杂 Agent 任务（200000 token 输出） | ~200000 tokens | ~$10.00 |

看起来不贵？那是因为你忘了**上下文消费**。Fable 5 的 1M 上下文窗口是双刃剑——它能处理超长对话，但每次调用都会把整段上下文重新计算一遍。一个 200K token 上下文 + 5000 token 输出的调用，实际算下来是：

```
200,000 × $10/1M + 5,000 × $50/1M = $2.00 + $0.25 = $2.25
```

而你一天调用 10 次？那就是 **$22.5 / 天**，月费轻松破 $500。

---

## 五、实测场景三：写作与安全——惊喜与限制并存

### 写作质量

如果你之前用 Claude 4.x 系列（Sonnet/Opus）写过文章，可能会觉得 4.7/4.8 的写作"有点干"。Fable 5 在这方面回归了——社区评测认为：

> "写作比 4.7、4.8 要好不少，有 4.6 那味了。"

Claude 4.6 曾是公认的"文笔最好的 Claude"。Fable 5 在保持了编程能力突破的同时，找回了那部分被牺牲掉的文学性。

### 安全限制

Fable 5 的安全策略是 Anthropic 有史以来最严格的：

1. **敏感查询重路由**：网络安全攻击、生化武器、模型蒸馏等查询会被拦截，重定向到更安全的 Opus 4.8 处理
2. **漏洞探测被拒**：实测中，试图让 Fable 5 找项目漏洞的请求被直接拒绝
3. **30 天数据保留**：API 流量强制保留 30 天，不用于训练但会存档
4. **红队测试**：超过 1000 小时的红队测试 + 漏洞赏金，未发现通用越狱

这在实测中是个双刃剑。如果你是写安全工具的开发者，Fable 5 可能直接拒绝帮你。但如果你是企业场景，这意味着 Anthropic 替你扛住了一部分合规风险。

---

## 六、横向对比：什么时候用谁？

| 场景 | 推荐模型 | 理由 |
|------|---------|------|
| 日常代码问答 | Claude Opus 4.8 / GPT-5.5 | Fable 5 太贵，性价比低 |
| 复杂 Bug 调试 | **Claude Fable 5** | 推理深度独一档 |
| 完整功能/插件开发 | **Claude Fable 5** | 自主性最强，能独立干活 |
| 高吞吐 Agent 循环 | Gemini 3.5 Flash | 便宜 + 快，适合循环调用 |
| 中文编程辅助 | Kimi K2.7 Code | 6倍速 + 1.3元/M token，超值 |
| 长文档写作 | **Claude Fable 5** | 1M 上下文 + 写作质量回归 |
| 安全/漏洞场景 | Opus 4.8 / 其他 | Fable 5 会直接拒绝 |
| 预算敏感的项目 | DeepSeek V4 Pro | 降价 75%，极致性价比 |

### Fable 5 使用决策树

```
你的任务需要长时间自主运行（>1小时）？
├── 是 → 用 Fable 5 ✅
├── 否 → Opus 4.8 搞不定？
│   ├── 是 → 用 Fable 5 ✅
│   └── 否 → 用 Opus 4.8 / GPT-5.5 💰
```

---

## 七、手把手：用 Fable 5 API 跑你的第一个任务

### 环境准备

```bash
pip install anthropic
```

### 基础调用

```python
from anthropic import Anthropic

client = Anthropic()  # 需要设置 ANTHROPIC_API_KEY 环境变量

response = client.messages.create(
    model="claude-fable-5",
    max_tokens=8192,
    messages=[
        {
            "role": "user",
            "content": "分析这个项目中可能存在哪些性能瓶颈，并给出优化方案。"
        }
    ]
)

print(response.content[0].text)
```

### 实际使用技巧

1. **用 system prompt 约束开销**
   ```
   "请尽量简洁地回答问题，避免冗长的解释。如在500字内能说明，就不要写5000字。"
   ```

2. **控制 max_tokens**
   ```python
   # 简单任务设低点
   max_tokens=1024   # 问答
   max_tokens=8192   # 中等任务
   max_tokens=32768  # 复杂开发
   ```

3. **分段处理长上下文**
   ```python
   # ❌ 不好：把整个仓库塞进去
   response = client.messages.create(
       model="claude-fable-5",
       messages=[{"role": "user", "content": f"这是整个项目代码：{entire_repo}"}]
   )
   
   # ✅ 好：给关键文件 + 明确问题
   response = client.messages.create(
       model="claude-fable-5",
       messages=[{
           "role": "user",
           "content": "我上传了 src/ 下 3 个核心文件，请只看 user_auth.py 的登录流程优化（关注 token 刷新逻辑）。"
       }]
   )
   ```

4. **利用 prompt caching（如果支持）**
   重复的上下文部分可以缓存，大幅降低输入费用。把静态内容（如系统指令、代码库上下文）放在消息列表前面。

---

## 八、Anthropic 的野心与 AI 编程的未来

Fable 5 发布后不到一周，Anthropic 提交了 IPO 申请，估值 **$9650 亿**。

这个数字放在 AI 圈是天花板级别的——比 OpenAI 最新估值高了近 **2 倍**。Anthropic 凭什么？

回头看 Fable 5 的产品逻辑就很清楚：

1. **不卷低价**：$10/$50 的价格直接告诉市场——"我们不做性价比，我们做最强的那个"
2. **安全是护城河**：Mythos 5 只给少数人用，Fable 5 的敏感查询被自动拦截。"我们有最强的模型，但我们选择不让它乱跑"——这是最能说服监管者的叙事
3. **AI 编程是主战场**：SWE-Bench Pro 80.3% 不是偶然。Anthropic 把 Agent 编码作为 Fable 5 的核心卖点，赌的就是企业愿意为"能干活"的 AI 付高价

对开发者来说，这意味着什么？

**2026 下半年，AI 编程工具会继续两极分化**：
- 一侧是「极致品质」：Claude Fable 5、未来的 Mythos 6——为复杂任务买单
- 一侧是「极致性价比」：Kimi K2.7 Code（1.3元/M token）、DeepSeek V4 Pro（降价 75%）——日常开发必备

**聪明的策略不是只用一个，而是组合使用。**

---

## 结语：一把牛刀，别拿去切豆腐

Fable 5 是目前最强的编程 AI，不用怀疑。

但它也是最贵的之一。如果你每天用它回答"这段代码哪里写错了"这种问题，那就像开着法拉利送外卖——很酷，但毫无意义。

**Fable 5 的正确用法**：
- 用它做 Opus 4.8 搞不定的任务
- 用它做需要自主运行数小时的 Agent 工作流
- 用它写完整的功能模块，而不是改一行代码

**日常开发**：Kimi K2.7 Code（中文友好 + 6倍速）+ DeepSeek V4 Pro（极致便宜）足够了。

---

> *"AI 离'神'只差最后一步，连 Anthropic 自己都不敢迈。"*
>
> 但在它迈出那一步之前，先想好：**你打算让它帮你做什么？**

---

**本文提及的链接**：
- Anthropic API：https://console.anthropic.com
- Claude 应用：https://claude.ai
- Anthropic 官方博客：https://www.anthropic.com/research

**相关阅读**：
- [TRAE SOLO 实测：4分钟搭出全栈项目](/articles/trae-solo-practical-test-20260615)
- [AI Agent 入门实战指南：从零搭建你的第一个智能体](/articles/ai-agent-practical-guide-20260613)
- [2026年AI大模型年中盘点：谁是真正的性价比之王](/articles/2026-mid-year-ai-model-review-20260612)
