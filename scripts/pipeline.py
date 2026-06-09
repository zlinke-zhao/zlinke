#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ZLinke 内容自动化 Pipeline
每天自动生成AI科技文章，推送到GitHub触发Vercel部署

使用方式:
  python pipeline.py              # 生成今天的3篇文章
  python pipeline.py --category 新闻  # 只生成新闻类
  python pipeline.py --count 5    # 生成5篇
"""

import os
import sys
import json
import re
import subprocess
from datetime import datetime, timezone, timedelta
from pathlib import Path

# Windows下强制UTF-8输出
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

# 时区：中国时间 UTC+8
CST = timezone(timedelta(hours=8))

# 项目路径
PROJECT_DIR = Path(__file__).parent.parent
CONTENT_DIR = PROJECT_DIR / "content" / "articles"

# 文章分类和对应的关键词
CATEGORIES = {
    "新闻": {
        "keywords": ["AI发布", "新模型", "融资", "收购", "政策", "突破", "发布", "上线", "开源"],
        "template": "news",
        "weight": 0.4,  # 40% 新闻
    },
    "评测": {
        "keywords": ["AI工具", "对比", "评测", "测评", "哪个好", "替代", "推荐"],
        "template": "review",
        "weight": 0.4,  # 40% 评测
    },
    "深度": {
        "keywords": ["趋势", "未来", "影响", "分析", "行业", "就业", "创业", "投资"],
        "template": "deep",
        "weight": 0.2,  # 20% 深度
    },
}


def get_today_topics():
    """
    获取今天的文章主题。
    在实际运行中，这里会调用搜索引擎/API获取最新热点。
    当前版本使用预设主题列表+日期轮转。
    """
    # 新闻主题池（持续更新）
    news_topics = [
        ("OpenAI发布GPT-5：推理能力大幅提升", ["OpenAI", "GPT-5", "AI模型"]),
        ("Google Gemini 2.0正式发布，多模态能力升级", ["Google", "Gemini", "多模态"]),
        ("Anthropic推出Claude 4：编程能力质的飞跃", ["Anthropic", "Claude", "AI编程"]),
        ("苹果Apple Intelligence全面集成Siri", ["苹果", "Siri", "AI助手"]),
        ("Meta开源Llama 4：参数规模再创新高", ["Meta", "Llama", "开源模型"]),
        ("微软Copilot+PC发布：AI原生操作系统时代来临", ["微软", "Copilot", "AI PC"]),
        ("字节跳动豆包大模型API降价90%", ["字节跳动", "豆包", "AI价格"]),
        ("NVIDIA发布B300 GPU：AI训练速度提升3倍", ["NVIDIA", "GPU", "AI硬件"]),
        ("Sora正式开放使用：AI视频生成进入平民时代", ["OpenAI", "Sora", "AI视频"]),
        ("中国AI芯片取得突破：华为昇腾910C量产", ["华为", "昇腾", "AI芯片"]),
    ]

    # 评测主题池
    review_topics = [
        ("2026年最强AI编程工具评测：Cursor vs Copilot vs Windsurf", ["AI编程", "Cursor", "Copilot"], 
         [{"name": "Cursor", "url": "https://cursor.sh"}, {"name": "GitHub Copilot", "url": "https://github.com/features/copilot"}]),
        ("AI绘画工具终极对比：Midjourney vs DALL-E vs Stable Diffusion", ["AI绘画", "Midjourney", "DALL-E"],
         [{"name": "Midjourney", "url": "https://midjourney.com"}, {"name": "DALL-E", "url": "https://openai.com/dall-e"}]),
        ("ChatGPT vs Claude vs 文心一言：中文写作谁最强？", ["AI写作", "ChatGPT", "Claude", "文心一言"],
         [{"name": "ChatGPT Plus", "url": "https://chat.openai.com"}, {"name": "Claude Pro", "url": "https://claude.ai"}]),
        ("2026年最佳AI搜索引擎：Perplexity vs SearchGPT vs 秘塔", ["AI搜索", "Perplexity", "SearchGPT"],
         [{"name": "Perplexity Pro", "url": "https://perplexity.ai"}, {"name": "SearchGPT", "url": "https://chatgpt.com"}]),
        ("Notion AI vs Obsidian AI：知识管理工具AI功能对比", ["AI笔记", "Notion", "Obsidian"],
         [{"name": "Notion AI", "url": "https://notion.so"}, {"name": "Obsidian", "url": "https://obsidian.md"}]),
        ("AI视频生成工具评测：Runway vs Pika vs Kling", ["AI视频", "Runway", "Pika"],
         [{"name": "Runway", "url": "https://runwayml.com"}, {"name": "Pika", "url": "https://pika.art"}]),
        ("2026年免费AI工具Top 10：不花钱也能用好AI", ["免费AI", "工具推荐"],
         [{"name": "ChatGPT Free", "url": "https://chat.openai.com"}, {"name": "Claude Free", "url": "https://claude.ai"}]),
        ("AI客服机器人对比：Dify vs FastGPT vs Coze", ["AI客服", "Dify", "Coze"],
         [{"name": "Dify", "url": "https://dify.ai"}, {"name": "Coze", "url": "https://coze.com"}]),
    ]

    # 深度主题池
    deep_topics = [
        ("AI编程的下一步：从辅助工具到自主开发者", ["AI编程", "Cursor", "趋势分析"]),
        ("2026年AI行业就业报告：哪些岗位正在消失？哪些在增长？", ["AI就业", "职业转型", "趋势"]),
        ("RAG技术全面解析：如何让AI拥有你的私有知识", ["RAG", "知识库", "AI应用"]),
        ("AI Agent元年：从聊天机器人到自主智能体", ["AI Agent", "自动化", "趋势"]),
        ("大模型本地部署指南：保护数据隐私的AI方案", ["本地AI", "隐私", "部署"]),
        ("AI创业避坑指南：2026年还有哪些机会？", ["AI创业", "机会", "避坑"]),
    ]

    # 根据日期选择不同的主题（避免每天都是一样的）
    day_of_year = datetime.now(CST).timetuple().tm_yday

    result = {}

    # 选择新闻
    news_idx = day_of_year % len(news_topics)
    result["新闻"] = {
        "title": news_topics[news_idx][0],
        "tags": news_topics[news_idx][1],
        "affiliates": [],
    }

    # 选择评测
    review_idx = day_of_year % len(review_topics)
    result["评测"] = {
        "title": review_topics[review_idx][0],
        "tags": review_topics[review_idx][1],
        "affiliates": review_topics[review_idx][2],
    }

    # 选择深度
    deep_idx = day_of_year % len(deep_topics)
    result["深度"] = {
        "title": deep_topics[deep_idx][0],
        "tags": deep_topics[deep_idx][1],
        "affiliates": [],
    }

    return result


# 中文标题 → 英文slug映射表（防止URL中出现中文导致404）
SLUG_MAP = {
    "2026年最强AI编程工具评测：Cursor vs Copilot vs Windsurf": "cursor-vs-copilot-vs-windsurf",
    "AI绘画工具终极对比：Midjourney vs DALL-E vs Stable Diffusion": "midjourney-vs-dalle-vs-sd",
    "ChatGPT vs Claude vs 文心一言：中文写作谁最强？": "chatgpt-vs-claude-vs-wenxin",
    "2026年最佳AI搜索引擎：Perplexity vs SearchGPT vs 秘塔": "perplexity-vs-searchgpt-vs-mita",
    "Notion AI vs Obsidian AI：知识管理工具AI功能对比": "notion-ai-vs-obsidian-ai",
    "AI视频生成工具评测：Runway vs Pika vs Kling": "runway-vs-pika-vs-kling",
    "2026年免费AI工具Top 10：不花钱也能用好AI": "free-ai-tools-top10",
    "AI客服机器人对比：Dify vs FastGPT vs Coze": "dify-vs-fastgpt-vs-coze",
    "OpenAI发布GPT-5：推理能力大幅提升": "openai-gpt5-release",
    "Google Gemini 2.0正式发布，多模态能力升级": "google-gemini2-release",
    "Anthropic推出Claude 4：编程能力质的飞跃": "claude4-release",
    "苹果Apple Intelligence全面集成Siri": "apple-intelligence-siri",
    "Meta开源Llama 4：参数规模再创新高": "meta-llama4-open-source",
    "微软Copilot+PC发布：AI原生操作系统时代来临": "microsoft-copilot-plus-pc",
    "字节跳动豆包大模型API降价90%": "bytedance-doubao-price-cut",
    "NVIDIA发布B300 GPU：AI训练速度提升3倍": "nvidia-b300-gpu",
    "Sora正式开放使用：AI视频生成进入平民时代": "sora-public-access",
    "中国AI芯片取得突破：华为昇腾910C量产": "huawei-ascend-910c",
    "AI编程的下一步：从辅助工具到自主开发者": "ai-coding-future",
    "2026年AI行业就业报告：哪些岗位正在消失？哪些在增长？": "ai-employment-report-2026",
    "RAG技术全面解析：如何让AI拥有你的私有知识": "rag-technology-guide",
    "AI Agent元年：从聊天机器人到自主智能体": "ai-agent-era-begins",
    "大模型本地部署指南：保护数据隐私的AI方案": "local-llm-deployment-guide",
    "AI创业避坑指南：2026年还有哪些机会？": "ai-startup-pitfalls-2026",
}


def generate_slug(title: str) -> str:
    """将标题转为URL友好的英文slug（避免中文URL导致404）"""
    # 优先查映射表
    if title in SLUG_MAP:
        return SLUG_MAP[title]

    # 对于未映射的标题，移除所有非ASCII字符，保留英文部分
    slug = re.sub(r'[^\w\s-]', '', title)
    # 只保留英文字母、数字、连字符
    slug = re.sub(r'[^a-zA-Z0-9\s-]', '', slug)
    slug = re.sub(r'[\s_]+', '-', slug.strip())
    slug = slug[:50].rstrip('-')
    # 如果slug太短或为空（纯中文标题），用时间戳
    if len(slug) < 5:
        slug = f"article-{datetime.now(CST).strftime('%Y%m%d%H%M%S')}"
    return slug


def generate_article_markdown(category: str, topic: dict, date_str: str) -> str:
    """
    生成文章的Markdown内容。
    
    注意：在实际自动化运行中，这里应该调用AI模型（GPT/Claude）来生成高质量内容。
    当前版本生成结构化的模板文章，包含SEO优化的meta信息。
    
    使用方式：
    1. 手动运行：先用此脚本生成骨架，再手动润色
    2. 接入AI：替换此函数中的内容生成逻辑，调用AI API
    """

    title = topic["title"]
    tags = topic["tags"]
    affiliates = topic.get("affiliates", [])

    # 生成frontmatter
    affiliates_yaml = ""
    if affiliates:
        affiliates_yaml = "\naffiliates:\n"
        for aff in affiliates:
            affiliates_yaml += f'  - name: "{aff["name"]}"\n    url: "{aff["url"]}"\n'

    frontmatter = f"""---
title: "{title}"
date: "{date_str}"
category: "{category}"
tags: {json.dumps(tags, ensure_ascii=False)}
description: "{title}。ZLinke智链为您带来最新AI工具资讯和深度评测。"\
{affiliates_yaml}
---"""

    # 根据分类生成不同结构的文章模板
    if category == "新闻":
        body = generate_news_body(title, tags)
    elif category == "评测":
        body = generate_review_body(title, tags, affiliates)
    else:  # 深度
        body = generate_deep_body(title, tags)

    return f"{frontmatter}\n\n{body}"


def generate_news_body(title: str, tags: list) -> str:
    """生成新闻类文章模板"""
    return f"""# {title}

> 本文由ZLinke智链AI自动生成，最新AI资讯每日更新。

## 事件概述

{title}。这一消息在AI行业引起了广泛关注，以下是我们整理的关键信息。

## 核心要点

- **影响范围**：这一变化将影响AI行业的多个细分领域
- **技术亮点**：在关键技术指标上实现了显著提升
- **市场反应**：业内专家普遍认为这是行业发展的里程碑

## 技术分析

从技术角度来看，此次更新在以下几个方面值得关注：

1. **性能提升**：核心能力指标较上一代有显著进步
2. **应用场景**：覆盖了更多实际使用场景
3. **生态兼容**：与现有工具链的兼容性良好

## 行业影响

这一变化对AI行业意味着什么？

- 对开发者：新的工具和能力将提高开发效率
- 对企业：更多的AI应用场景变得可行
- 对用户：更强大的AI体验即将到来

## ZLinke点评

作为AI工具发现站，ZLinke将持续关注这一动态，并第一时间为您带来深度评测和使用指南。

---

*关注ZLinke智链，发现最好的AI工具。每日更新AI行业资讯。*
"""


def generate_review_body(title: str, tags: list, affiliates: list) -> str:
    """生成评测类文章模板"""
    # 生成联盟推荐区
    affiliate_section = ""
    if affiliates:
        affiliate_section = "\n## 🎯 专属推荐\n\n"
        for aff in affiliates:
            affiliate_section += f'- [**{aff["name"]}** - 立即体验]({aff["url"]}) ← 联盟链接\n'
        affiliate_section += "\n> 通过以上链接注册，您支持了我们的内容创作，感谢！\n"

    tools = [t for t in tags if t not in ["AI编程", "AI写作", "AI绘画", "AI搜索", "AI视频", "AI笔记", "AI客服", "AI对话", "AI营销", "免费AI", "工具推荐", "AI工具"]]

    comparison_table = ""
    if len(tools) >= 2:
        # 使用HTML表格，避免Markdown表格渲染混乱
        comparison_table = '\n## 对比表格\n\n<table class="w-full text-sm border-collapse">\n<thead>\n<tr class="bg-gray-50">\n<th class="border px-3 py-2 text-left">特性</th>\n'
        for tool in tools:
            comparison_table += f'<th class="border px-3 py-2 text-center">{tool}</th>\n'
        comparison_table += '</tr>\n</thead>\n<tbody>\n'
        for feature in ["易用性", "功能丰富度", "性价比", "中文支持", "API可用性"]:
            comparison_table += '<tr>\n'
            comparison_table += f'<td class="border px-3 py-2">{feature}</td>\n'
            for _ in tools:
                comparison_table += '<td class="border px-3 py-2 text-center">★★★★☆</td>\n'
            comparison_table += '</tr>\n'
        comparison_table += '</tbody>\n</table>\n'

    return f"""# {title}

> ZLinke智链深度评测，帮你选到最适合的AI工具。

## 评测背景

在AI工具快速迭代的今天，选择一款适合自己的工具变得越来越重要。今天我们来深度对比{title.split('：')[-1] if '：' in title else '这些主流工具'}。
{affiliate_section}
## 工具介绍

{chr(10).join(f'### {tool}{chr(10)}{chr(10)}作为当前市场上最受关注的AI工具之一，{tool}在各自领域都有着独特的优势。' for tool in tools[:3]) if tools else '### 工具概览\n\n这些工具各有特色，下面我们来逐一分析。'}
{comparison_table}
## 使用建议

根据不同的使用场景，我们的推荐如下：

- **新手入门**：建议从免费版开始体验
- **专业用户**：推荐订阅Pro版本获取完整功能
- **团队协作**：选择支持多人协作的方案

## 总结

选择AI工具没有绝对的最优解，关键是找到适合自己需求的那一款。ZLinke会持续更新评测内容，帮助你在AI工具的海洋中找到最优选。

---

*关注ZLinke智链，发现最好的AI工具。深度评测每周更新。*
"""


def generate_deep_body(title: str, tags: list) -> str:
    """生成深度分析类文章模板"""
    return f"""# {title}

> ZLinke智链深度分析，洞察AI行业趋势与机遇。

## 引言

{title}——这是当前AI行业最受关注的话题之一。在这篇文章中，我们将从多个维度进行深入分析。

## 现状分析

当前AI行业正处于快速变革期。从技术突破到商业落地，每一个环节都在发生深刻变化。

### 技术层面

- 大模型能力持续提升，成本持续下降
- AI Agent成为新的技术范式
- 多模态融合趋势明显

### 商业层面

- AI SaaS订阅模式成为主流
- 垂直领域AI工具涌现
- 开源与闭源的边界在模糊

## 关键趋势

1. **AI民主化**：越来越多的人和公司能够使用和部署AI
2. **专业化**：通用AI工具之外，垂直领域工具正在崛起
3. **自动化**：从AI辅助到AI自主执行，自动化程度持续提高

## 对普通用户的影响

这些变化对你意味着什么？

- **更多选择**：AI工具的种类和数量都在增长
- **更低门槛**：使用AI的成本在持续降低
- **更高效率**：AI工具能帮你做更多事情

## 未来展望

展望未来6-12个月，我们预计：

- AI工具的价格将继续下降
- 中文AI体验将持续改善
- 更多AI工具将支持自动化工作流

## ZLinke建议

面对这些变化，我们的建议是：

1. 保持学习，跟上AI工具的最新发展
2. 选择2-3个核心工具深耕，而不是什么都试
3. 关注ZLinke，我们帮你筛选最有价值的AI工具

---

*关注ZLinke智链，发现最好的AI工具。深度分析每周更新。*
"""


def create_article(category: str, topic: dict) -> str:
    """创建一篇文章，返回文件路径"""
    today = datetime.now(CST).strftime("%Y-%m-%d")
    slug = generate_slug(topic["title"])

    # 添加日期后缀避免slug冲突
    slug = f"{slug}-{datetime.now(CST).strftime('%Y%m%d')}"

    markdown = generate_article_markdown(category, topic, today)

    filepath = CONTENT_DIR / f"{slug}.md"
    filepath.write_text(markdown, encoding="utf-8")

    print(f"  ✅ 创建文章: {category} - {topic['title']}")
    print(f"     文件: {filepath.name}")
    return str(filepath)


def push_to_github():
    """推送新文章到GitHub，触发Vercel自动部署"""
    try:
        # 检查是否有变更
        result = subprocess.run(
            ["git", "status", "--porcelain"],
            cwd=str(PROJECT_DIR),
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
        )

        if not result.stdout or not result.stdout.strip():
            print("  ℹ️ 没有新内容需要推送")
            return False

        # 添加所有新文章
        subprocess.run(["git", "add", "content/articles/"], cwd=str(PROJECT_DIR), check=True)

        # 提交
        today = datetime.now(CST).strftime("%Y-%m-%d")
        commit_msg = f"content: auto generate {today} AI news"
        subprocess.run(["git", "commit", "-m", commit_msg], cwd=str(PROJECT_DIR), check=True)

        # 推送
        subprocess.run(["git", "push", "origin", "main"], cwd=str(PROJECT_DIR), check=True)

        print(f"  🚀 推送成功！Vercel将自动部署")
        return True

    except subprocess.CalledProcessError as e:
        print(f"  ❌ Git操作失败: {e}")
        return False


def run_pipeline(category_filter: str = None, count: int = 3):
    """执行完整的Pipeline"""
    print("=" * 60)
    print(f"🤖 ZLinke 内容自动化 Pipeline")
    print(f"📅 {datetime.now(CST).strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)

    # Step 1: 获取今日主题
    print("\n📋 Step 1: 获取今日主题...")
    topics = get_today_topics()

    # Step 2: 生成文章
    print("\n✍️ Step 2: 生成文章...")
    created_files = []

    for category, topic in topics.items():
        if category_filter and category != category_filter:
            continue

        filepath = create_article(category, topic)
        created_files.append(filepath)

    # Step 3: 推送到GitHub
    print("\n🚀 Step 3: 推送到GitHub...")
    pushed = push_to_github()

    # 总结
    print("\n" + "=" * 60)
    print(f"✅ Pipeline 完成！")
    print(f"   生成文章: {len(created_files)}篇")
    print(f"   推送状态: {'成功' if pushed else '无需推送/失败'}")
    if pushed:
        print(f"   🌐 预计1-2分钟后可在 zlinke.top 查看")
    print("=" * 60)

    return created_files


if __name__ == "__main__":
    # 解析命令行参数
    category = None
    count = 3

    args = sys.argv[1:]
    for i, arg in enumerate(args):
        if arg == "--category" and i + 1 < len(args):
            category = args[i + 1]
        elif arg == "--count" and i + 1 < len(args):
            count = int(args[i + 1])

    run_pipeline(category_filter=category, count=count)
