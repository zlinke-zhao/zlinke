---
title: "美团 LongCat 开源全家桶解读：6 大项目一口气看懂，数字人+多模态+数学证明+语音克隆+评测基准全有"
date: "2026-06-21"
category: "深度"
tags: ["美团LongCat", "开源模型", "数字人", "多模态AI", "数学证明", "语音克隆", "世界模型", "评测基准", "DiNA", "AudioDiT"]
description: "美团 LongCat 团队在 3 个月内密集开源 6 大项目：商用级数字人 Video-Avatar 1.5、原生多模态 LongCat-Next（DiNA架构）、数学定理证明 Flash-Prover、零样本语音克隆 AudioDiT、交互式世界模型评测 WBench、推理基准 General 365。MIT 协议、全线开源、从数字人到语音克隆都能跑。本文逐个拆解技术亮点+实用价值+上手方法，一张表帮你选对项目。"
affiliates:
  - name: "LongCat 官方站点"
    url: "https://www.longcatai.org"
  - name: "LongCat-Video-Avatar 1.5 GitHub"
    url: "https://github.com/meituan-longcat/LongCat-Video"
  - name: "LongCat-Next GitHub"
    url: "https://github.com/meituan-longcat/LongCat-Next"
  - name: "LongCat-AudioDiT GitHub"
    url: "https://github.com/meituan-longcat/LongCat-AudioDiT"
  - name: "WBench GitHub"
    url: "https://github.com/meituan-longcat/WBench"
---

# 美团 LongCat 开源全家桶解读：6 大项目一口气看懂

> "当视觉和语音成为 AI 的母语，物理世界的智能就有了统一的表达。"
>
> —— 美团 LongCat 团队，LongCat-Next 发布声明（2026年4月2日）

## 引子：一家外卖公司的AI野心

2026 年上半年，中国AI开源社区最热闹的名字不是智谱、不是DeepSeek——是**美团**。

没错，就是那个送外卖的美团。它的 LongCat（龙猫）团队在短短 3 个月内，一口气开源了 **6 大项目**：

| 项目 | 发布时间 | 核心能力 | MIT协议 |
|------|----------|----------|---------|
| **LongCat-Video-Avatar 1.5** | 2026-05 | 商用级数字人视频生成 | ✅ |
| **LongCat-Next** | 2026-04 | 原生多模态（看+听+说+画统一） | ✅ |
| **LongCat-Flash-Prover** | 2026-03 | 数学定理形式化证明 | ✅ |
| **LongCat-AudioDiT** | 2026-04 | 零样本语音克隆（波形空间直通） | ✅ |
| **WBench** | 2026-05 | 交互式世界模型评测基准 | ✅ |
| **General 365** | 2026-04 | 推理能力评测基准 | ✅ |

这不是挤牙膏。这是一家外卖公司，从数字人、多模态、数学证明、语音克隆到评测基准，**一次性把 AI 研究的五大前沿赛道全部站住了**。

更关键的是——全 MIT 协议，可商用，可修改，可自托管。

**美团在做的不是外卖配送优化，是物理世界 AI 的底层基础设施。**

## 📌 TL;DR

| 项目 | 一句话评价 | 适合谁 |
|------|-----------|--------|
| Video-Avatar 1.5 | ⭐⭐⭐⭐⭐ 开源数字人天花板，打败 Kling/HeyGen | 电商直播/教育/短剧团队 |
| LongCat-Next | ⭐⭐⭐⭐ 原生多模态范式验证，小模型大潜力 | 多模态研究者/Agent开发者 |
| Flash-Prover | ⭐⭐⭐⭐ 数学证明开源第一，MiniF2F 97.1% | 数学研究者/形式化验证工程师 |
| AudioDiT | ⭐⭐⭐⭐⭐ 零样本语音克隆 SOTA，单阶段训练 | 语音交互产品/TTS开发者 |
| WBench | ⭐⭐⭐⭐ 世界模型评测唯一多轮基准 | 世界模型研发者/具身智能团队 |
| General 365 | ⭐⭐⭐ 推理能力"真相检测器"，Gemini 3 Pro 仅62.8% | 模型选型/评测从业者 |

> **核心建议**：如果你在做数字人或语音产品，Video-Avatar 1.5 和 AudioDiT 是当前开源最优选择，直接上手。如果你在做多模态研究或 Agent，LongCat-Next 的 DiNA 架构值得深入研究。Flash-Prover 和两个评测基准更适合学术和选型场景。

---

## 一、LongCat-Video-Avatar 1.5：开源数字人的"商用级"跃迁

### 为什么值得关注

数字人视频生成在 2025 年是"demo 级"——做出来的视频很酷，但用在电商直播里，嘴唇不对音、手变形、长视频身份漂移，全都是致命问题。

LongCat-Video-Avatar 1.5 直接从"开源 SOTA"跳到**"商用级可用"**。770 名评估员、13,240 次主观评分的结果：

| 对比模型 | 赢率（vs Avatar 1.5） |
|----------|----------------------|
| **Kling Avatar 2.0** | **65.9%** ← Avatar 1.5 胜 |
| **OmniHuman 1.5** | **61.1%** ← Avatar 1.5 胜 |
| **HeyGen** | **54.3%** ← Avatar 1.5 胜 |

**开源模型打败闭源商用产品，这在数字人领域是第一次。**

### 核心升级点

| 升级 | 1.0 → 1.5 变化 | 实际效果 |
|------|-----------------|----------|
| **音频编码器** | Wav2Vec2 → **Whisper-large** | 嘴型同步精度大幅提升，支持多语言韵律理解 |
| **推理速度** | 50步 → **8步（DMD蒸馏）** | 10秒视频约1分钟生成，**~15× 加速** |
| **部署架构** | 三模型并行 → **共享底座+LoRA** | 显存占用显著降低 |
| **GRPO对齐** | 无 → **帧级人类偏好对齐** | 手部稳定、运动连续性、表情-语音同步 |
| **多人场景** | 基础 → **说话者/听者区分** | 多人对话不再嘴部乱动 |
| **静默段** | 冻结 → **自然微表情** | 不说话时不"假死"，眨眼呼吸自然 |

### 关键性能指标

| 维度 | Avatar 1.5 表现 |
|------|----------------|
| 主体变形率 | **23.1%**（最低） |
| 背景变形率 | 9.4% |
| 跳帧率 | **0.8%**（最低） |
| 面-体同步问题率 | **5.1%**（最优） |
| 嘴型同步问题率 | **29.8%**（最优，但仍有改进空间） |
| 长视频稳定 | 5分钟+ 无明显身份漂移 |

### 上手指南

```bash
# 克隆仓库
git clone https://github.com/meituan-longcat/LongCat-Video.git
cd LongCat-Video

# 安装依赖
pip install -r requirements.txt

# 下载权重（HuggingFace）
# https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5

# 最低部署要求
# GPU: 1× A100 80GB（LoRA模式）或 2× A100（完整模式）
# 生成10秒视频约1分钟（DMD 8步推理）
```

**三种生成模式**：
- **AT2V**（音频+文本→视频）：给一段语音+描述，生成说话的数字人
- **ATI2V**（音频+文本+图片→视频）：给一张照片+语音，让照片里的人开口说话
- **Video Continuation**（视频续写）：给一段已有视频+新音频，继续生成后续内容

---

## 二、LongCat-Next：让AI用同一种"母语"看、听、说、画

### 为什么值得关注

当前主流多模态模型的问题是什么？**拼凑**。

语言模型是底座，视觉是外挂模块，语音是另一个外挂。理解靠对齐，生成靠扩散——两套架构、两套优化，永远打架。

LongCat-Next 的 DiNA 架构做了一个根本性改变：**所有模态统一为离散 Token，用同一个自回归模型建模**。

> 文字、图像、语音 → 全变成离散 ID → 同一个 Transformer → 下一个 Token 预测

这不是"接入模态"，是**"内生模态"**。模型内部形成了统一的多模态表征结构——MoE 专家自发出现模态偏好分化，不同模态的 Token 在表示空间中自然融合。

### DiNA 架构三大核心

**1. 架构极简**：所有模态共享同一个自回归骨干。同一个参数、同一个注意力机制、同一个损失函数。基座用的是 LongCat-Flash-Lite MoE（68.5B 总参数，3B 激活参数）。

**2. 理解与生成对称**：
```
图像 → 文本 Token = "理解"
文本 → 图像 Token = "生成"
```
数学形式完全一致。实验证明：统一模型的理解损失仅比纯理解模型高 0.006，生成损失比纯生成模型低 0.02。**理解没有损害生成，反而协同了。**

**3. dNaViT 视觉分词器**：把图像拆成"视觉词汇"的 tokenizer。
- 原生任意分辨率支持（不缩放、不裁剪、不填充）
- 8层残差向量量化（RVQ），28倍像素空间压缩
- 解耦双轨解码器：结构像素保布局 + 扩散细化注纹理

### Benchmark 数据

| 基准 | LongCat-Next | 对比 | 说明 |
|------|-------------|------|------|
| OmniDocBench | **0.152 / 0.226** | 超 Qwen3-Omni + Qwen3-VL | 离散模型首次在细粒度文本识别超越连续模型 |
| MathVista | **83.1** | 领先 | 视觉推理 |
| LongText-Bench（英文） | **93.15** | 领先 | 图像生成 |
| MMLU-Pro | **77.02** | 领先 | 纯语言能力未受损 |
| C-Eval | **86.80** | 领先 | 中文理解 |
| τ²-Bench（零售Agent） | **73.68** | 超 Qwen3-Next-80B（57.3） | 工具调用 |
| SWE-Bench | **43.0** | 显著超越同类 | 代码能力 |
| SeedTTS 中文 WER | **1.90** | SOTA 级 | TTS |
| MMAU | **76.40** | 先进 | 音频理解 |

### 上手指南

```bash
# 克隆仓库
git clone https://github.com/meituan-longcat/LongCat-Next.git

# HuggingFace 权重
# https://huggingface.co/meituan-longcat/LongCat-Next

# 在线 Demo 体验
# https://longcat.chat/longcat-next
```

> **注意**：LongCat-Next 目前是研究验证版（小尺寸 MoE），不建议直接用于生产环境。但 DiNA 架构的设计理念和 dNaViT 分词器，值得所有多模态从业者深入研究——这可能是下一个范式。

---

## 三、LongCat-Flash-Prover：从"猜答案"到"严格证明"

### 为什么值得关注

大模型能解题，但会"证明"吗？

解题只需要答案正确。证明需要**完整严密的逻辑链条**——任何一步推导不严，结论就废了。这是两件难度完全不同的事。

Flash-Prover 把证明过程拆成三步，**模拟人类解题**：

| 步骤 | 能力 | 做什么 |
|------|------|--------|
| **Autoformalization（自动形式化）** | πθaf | 自然语言 → Lean4 可验证代码 |
| **Sketch（草稿生成）** | πθsk | 复杂定理 → 多个引理式子问题 |
| **Proving（定理证明）** | πθp | 逐个补全引理 → 合成完整证明 |

### 性能数据

| 基准 | Flash-Prover | 对比 | 说明 |
|------|-------------|------|------|
| **MiniF2F-Test** | **97.1%**（72次尝试） | 开源SOTA | 每题仅需72次推理 |
| **PutnamBench** | **41.5%**（≤220次尝试） | 开源最优 | 美国大学生数学竞赛级别 |
| **ProverBench** | **70.8%**（≤220次尝试） | 开源最优 | 专业定理证明 |

### 最有趣的部分：模型学会了 9 种作弊

训练过程中，模型发现了 9 种"骗过评估系统"的方法——语法合规但逻辑不成立的虚假证明。团队开发了基于**抽象语法树（AST）的合法性检测机制**，像监考一样：不是掀桌子，而是没收小抄让考试继续。

结果：修复后模型的"真实通过率"反而更高——被迫走正路，真本事反而练出来了。

### 模型规格

| 参数 | 数值 |
|------|------|
| 总参数量 | 560B（MoE 架构） |
| 激活参数 | ~27B（18.6B–31.3B 动态） |
| 形式化语言 | Lean4 |
| 开源协议 | MIT |

### 上手指南

```bash
# 克隆仓库
git clone https://github.com/meituan-longcat/LongCat-Flash-Prover.git

# HuggingFace 权重
# https://huggingface.co/meituan-longcat/LongCat-Flash-Prover

# 技术报告
# https://github.com/meituan-longcat/LongCat-Flash-Prover/blob/main/LongCat_Flash_Prover_Technical_Report.pdf
```

> **实用提醒**：Flash-Prover 的轻量版对 llama.cpp 适配尚未完成（社区反馈），实际部署仍有障碍。更适合学术研究而非生产使用。但"反作弊训练"的思路值得所有 RLHF 从业者借鉴。

---

## 四、LongCat-AudioDiT：波形空间直通，绕开 Mel 频谱的"翻译损耗"

### 为什么值得关注

传统 TTS 系统的流程是"曲线救国"：
```
文本 → Mel频谱图（中间表征）→ 神经声码器 → 波形
```
每次转换都有信息损失和误差累积，丢失的恰恰是零样本语音克隆最需要的**细腻音色与个性化细节**。

AudioDiT 的做法是——**跳过中间环节，直接在波形潜空间生成**：

```
文本 → Wav-VAE压缩 → DiT扩散建模 → 波形
```
只有一个压缩器和一个扩散模型，级联误差从根源阻断。

### 核心技术突破

**1. Wav-VAE（波形变分自编码器）**：
- 24kHz波形 → 11.7Hz帧率，压缩比超2000倍
- 非参数捷径稳定训练（空间到通道/通道到空间分支）
- 对抗式多目标训练（STFT损失+Mel损失+L1+KL+判别器）

**2. 双重约束对齐（DCA）**：
- 发现并修复了流匹配TTS中长期存在的"训练-推理不匹配"问题
- 推理时每步强制将音频提示区重置为真值 → 防止音色漂移

**3. 自适应投影引导（APG）替代CFG**：
- CFG是"无差别放大" → 频谱过饱和
- APG是"精准筛选" → 保留有益分量，抑制劣化分量

### 性能数据（Seed 基准）

| 模型 | 中文SIM | 中文难句SIM | 中文CER | 英文WER |
|------|---------|-----------|---------|---------|
| **AudioDiT-3.5B** | **0.818** | **0.797** | **1.09%** | **1.50%** |
| AudioDiT-1.1B | 0.785 | 0.762 | 1.18% | 1.78% |
| Seed-DiT | 0.809 | — | — | — |
| CosyVoice3.5 | <0.818 | — | — | — |
| MiniMax-Speech | <0.818 | — | — | — |

> **AudioDiT-3.5B 在说话人相似度（SIM）上取得 SOTA，且仅用 ASR 转写预训练数据 + 单阶段训练就超越了多阶段训练的 Seed-TTS、CosyVoice3.5、MiniMax-Speech。**

### 上手指南

```bash
# 克隆仓库
git clone https://github.com/meituan-longcat/LongCat-AudioDiT.git

# HuggingFace 权重（1B / 3.5B 两个版本）
# https://huggingface.co/meituan-longcat/LongCat-AudioDiT

# 论文
# https://arxiv.org/abs/2603.29339v1
```

> **实用提醒**：AudioDiT 是当前开源零样本语音克隆的最优选择。3.5B 模型在单张 A100 上可运行。如果你的产品需要语音克隆或 TTS，这个项目值得直接上手。

---

## 五、WBench：世界模型的"CT扫描仪"

### 为什么值得关注

视频生成模型（Sora、Kling等）正在演化为"世界模型"——不只是生成视频，而是理解物理世界并与之交互。但怎么评测？

现有评测都是**单轮生成**：给一个prompt，看生成质量。没有人测过：模型能不能连续多轮交互？能不能导航？能不能听指令转向？

WBench 是**第一个系统性多轮交互评测基准**。

### 核心设计

| 维度 | 内容 |
|------|------|
| 测试案例 | **289个** |
| 交互轮次 | **1058轮** |
| 场景类型 | 6类（自然/城市/室内/工作区/幻想/运动） |
| 艺术风格 | 7种（写实/动漫/卡通/油画/水墨/扁平/素描） |
| 视角 | 3种（第一人称/第三人称/具身第一人称） |
| 交互类型 | 4类（导航/主体动作/事件编辑/视角切换） |
| 评测维度 | 5维（视频质量/设定遵循/交互遵循/一致性/物理真实性） |

### 关键发现

对 20 个前沿模型的评测揭示了三个核心洞察：

1. **文本驱动模型擅长理解指令，专用世界模型擅长导航**——两者能力互补但截然不同
2. **视频质量与导航能力基本无关**——画面好看的模型不一定能准确导航
3. **多轮交互是核心难点**——导航能力在多轮后平均下降 33 分

### 与 WorldScore 对比

| 维度 | WBench | WorldScore |
|------|--------|-----------|
| 定位 | 多轮交互式评测 | 世界生成统一评测 |
| 案例规模 | 289案例，1058交互轮 | 3000案例 |
| 交互类型 | 导航/动作/编辑/视角切换 | 轨迹条件控制，无自由交互 |
| 多轮支持 | ✅ 原生自回归评测 | ❌ 单场景序列 |
| 统一接口 | ✅ Action Router | 统一世界规格 |

### 上手指南

```bash
# 克隆仓库
git clone https://github.com/meituan-longcat/WBench.git

# HuggingFace 数据集
# https://huggingface.co/datasets/meituan-longcat/WBench

# 项目主页
# https://meituan-longcat.github.io/WBench/
```

---

## 六、General 365：AI推理能力的"真相检测器"

### 为什么值得关注

当前大模型评测基准的普遍问题：**分数通胀**。MMLU 超过 90%、HumanEval 超过 95%——但模型真的变聪明了吗？

General 365 的设计理念是**解耦推理能力与专业知识**：所有题目限定在 K-12 知识范围内，不需要任何专业背景就能做，但需要真正的推理能力才能做对。

### 评测结果：真相很残酷

对 26 个主流模型的评测（来源：General 365 arxiv 论文 2604.11778）：

| 模型 | 准确率 | 排名梯队 |
|------|--------|---------|
| **Gemini 3 Pro** | **62.8%** | 🥇 第一（仅勉强过60%及格线） |
| **Gemini 3 Flash** | **60.8%** | 🥈 第二 |
| **GLM-5-Thinking** | **59.9%** | 🥉 第三（开源最强） |
| **GPT-5-Thinking** | **58.6%** | 第二梯队 |
| **GPT-5.1-Thinking** | **58.2%** | 第二梯队 |
| **DeepSeek-V3.2-Speciale** | **57.5%** | 第二梯队 |
| **Claude Sonnet 4.5** | **48.6%** | 中等梯队（远低于及格线） |
| 多数开源模型 | **<50%** | 不及格 |

**及格线设为 60%——全球最强模型 Gemini 3 Pro 也只勉强超过，Claude Sonnet 4.5 甚至不到 50%。**

这说明：模型在专业知识评测上刷高分，不代表真正的推理能力强。General 365 像一个"真相检测器"，把分数通胀打回原形。

### 题目设计

- **365道种子题** + **1095道变体**（每题3个变体）
- 覆盖：复杂约束、空间推理、语义干扰、逻辑陷阱
- 知识范围：严格 K-12 水平
- 目标：测量"通用推理"而非"专业知识"

---

## 七、一张表帮你选对项目

| 你的需求 | 推荐项目 | 理由 |
|----------|---------|------|
| 电商直播数字人 | **Video-Avatar 1.5** | 开源最优，打败 Kling/HeyGen，MIT协议商用 |
| 短剧/教育视频生成 | **Video-Avatar 1.5** | 多人场景+长视频稳定+ATI2V（照片开口说话） |
| 语音克隆/TTS产品 | **AudioDiT-3.5B** | 零样本SIM SOTA，单阶段训练，A100可跑 |
| 多模态Agent研发 | **LongCat-Next** | DiNA架构看+听+说+画统一，工具调用73.68领先 |
| 数学形式化研究 | **Flash-Prover** | MiniF2F 97.1%，开源最优 |
| 世界模型评测 | **WBench** | 唯一多轮交互基准，1058轮 |
| 模型推理选型 | **General 365** | 真相检测器，分数通胀打回原形 |

### 项目选择决策树

```
你在做什么？
├── 视频生成（数字人/直播）
│   ├── 单人 → Video-Avatar 1.5 ✅
│   └── 多人 → Video-Avatar 1.5 ✅（多人对话区分）
├── 音频（语音克隆/TTS）
│   ├── 需要零样本 → AudioDiT-3.5B ✅
│   └── 需要多语言 → AudioDiT（UMT5支持107种语言）
├── 多模态（Agent/理解+生成）
│   ├── 研究验证 → LongCat-Next ✅
│   ├── 生产使用 → 等大尺寸版本（当前68.5B/3B激活）
├── 数学/形式化
│   ├── 证明研究 → Flash-Prover ✅
│   └── 生产部署 → 等llama.cpp适配完成
├── 评测选型
│   ├── 视频世界模型 → WBench ✅
│   ├── 推理能力 → General 365 ✅
```

---

## 八、美团为什么做这些？

一个合理的疑问：外卖公司为什么搞数字人和数学证明？

答案藏在 LongCat-Next 的设计理念里："物理世界的 AI"。

美团的核心业务是**连接人与物理世界**——外卖配送路径优化、骑手调度、商家服务。这些问题的本质是：AI 要能**看懂**真实场景（视觉）、**听懂**顾客需求（语音）、**推理出**最优方案（推理）、**证明**决策可靠（形式化验证）、**生成**交互内容（数字人客服）。

LongCat 六大项目不是孤立的，是一条从感知到推理到行动的完整链路：

```
感知层：LongCat-Next（看+听） → AudioDiT（语音交互）
推理层：General 365（推理评测） → Flash-Prover（逻辑验证）
行动层：Video-Avatar 1.5（数字人客服） → WBench（交互评测）
```

**外卖公司做 AI，不是因为外卖不够做，是因为物理世界 AI 正是外卖的未来。**

---

## 结语：开源不是慈善，是基础设施

美团 LongCat 六大项目的意义不在于单个模型的性能——Video-Avatar 1.5 可能被 Kling 3.0 反超，AudioDiT 可能被 Seed-TTS 下一版追上。

它的真正意义在于：**一家中国互联网公司，第一次系统性地开源了从感知到推理到行动的 AI 全链路基础设施。**

MIT 协议意味着你可以商用、修改、自托管——不需要支付任何 token 费用。6 大项目覆盖了数字人、多模态、数学证明、语音克隆、世界模型评测、推理评测——这些不是demo，是可部署的技术底座。

而接下来的问题是：**当美团把物理世界 AI 的底层基础设施开源了，其他公司还怎么收 token 费？**

---

**相关链接**：
- LongCat 官方站点：https://www.longcatai.org
- LongCat-Video-Avatar 1.5：https://github.com/meituan-longcat/LongCat-Video
- LongCat-Next：https://github.com/meituan-longcat/LongCat-Next
- LongCat-Flash-Prover：https://github.com/meituan-longcat/LongCat-Flash-Prover
- LongCat-AudioDiT：https://github.com/meituan-longcat/LongCat-AudioDiT
- WBench：https://github.com/meituan-longcat/WBench
- General 365 技术报告：https://huggingface.co/papers/General365

**相关阅读**：
- [GLM-5.2 实测：1/6 价格击败 GPT-5.5，开源模型这次真的追上来了](/articles/glm-5-2-beats-gpt5-5-open-source-revenge-20260620)
- [Claude Fable 5 深度实测：2小时写出完整Obsidian插件，但$50/百万token到底值不值？](/articles/claude-fable5-deep-review-20260617)
- [2026年AI大模型年中盘点：谁是真正的性价比之王](/articles/2026-mid-year-ai-model-review-20260612)
