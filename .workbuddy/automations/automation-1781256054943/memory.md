# ZLinke 每日工具评测 - 执行记录

## 2026-06-23: GitHub Copilot 深度评测
- **工具**: GitHub Copilot (GitHub/Microsoft)
- **评级**: 4.5/5.0
- **文件**: content/tool-reviews/copilot.md
- **字数**: ~2500字
- **Git提交**: 1037f26 - "review: GitHub Copilot深度评测"
- **核心发现**: Copilot是AI编程市场绝对霸主——2000万用户+470万付费+42%市场份额+90%财富百强采用+$4.5-8.5亿ARR。2026年6月平台化升级（桌面App多Agent并行+SDK GA 6语言+双重沙箱）标志着从代码补全工具到Agent开发平台的质变。Pro版$10/月是三大AI编程工具中最便宜的付费方案。但Agent Mode落后Cursor/Windsurf 1-2个身位，8K上下文窗口严重落后竞品200K，Premium计量机制（GPT-4.5一次=50倍消耗）引发重度用户焦虑。最佳定位：不想换IDE的开发者稳妥之选，追求Agent能力的选Cursor($20/$15)。
- **定价**: Free $0 / Pro $10/月 ($100/年) / Pro+ $39/月 ($390/年) / Business $19/用户/月 / Enterprise $39/用户/月
- **已完成工具**: chatgpt, claude, gemini, midjourney, notion-ai, cursor, runway, perplexity, suno, kimi, doubao, copilot
- **下一步**: stable-diffusion (AI图像生成，第一批次第五位，开源绘画标杆)

## 2026-06-21: Kimi 深度评测
- **工具**: Kimi (月之暗面 Moonshot AI)
- **评级**: 4.3/5.0
- **文件**: content/tool-reviews/kimi.md
- **字数**: ~2300字
- **Git提交**: 4781614 - "review: Kimi深度评测"
- **核心发现**: Kimi是国产长文本处理标杆，K2.6（2026年4月开源）1T参数MoE+256K上下文+300子Agent集群实现从对话工具到Agent OS的进化，SWE-Bench Pro 58.6超越GPT-5.4。中文写作母语级体验无可匹敌。但MAU从3600万峰值断崖跌至约834万（连续四季度下滑），免费版Agent仅约6个/月严重鸡肋，最低付费¥49/月起跳导致价格敏感用户流失。K2.6代码基准测试亮眼但实际开发中仍不如DeepSeek/Claude，多模态只进不出（不支持图像/视频生成）是内容创作场景的硬伤。最佳策略是组合使用而非单独依赖。
- **定价**: Adagio ¥0（Agent约6个/月）/ Andante ¥49/月（30个/月）/ Moderato ¥99/月 / Allegretto ¥199/月 / Allegro ¥699/月；API K2.6 $0.95/$4.00/1M tokens（输入/输出）
- **已完成工具**: chatgpt, claude, gemini, midjourney, notion-ai, cursor, runway, perplexity, suno, kimi
- **下一步**: doubao (国产AI助手，第一批次第三位，1.59亿MAU字节系产品)

## 2026-06-20: Suno AI音乐生成器深度评测
- **工具**: Suno (Suno, Inc.)
- **评级**: 4.5/5.0
- **文件**: content/tool-reviews/suno.md
- **字数**: ~2300字
- **Git提交**: 3f556b5 - "review: Suno AI音乐生成器深度评测"
- **核心发现**: Suno是全球最快最易用的AI音乐生成器，1亿+用户+200万付费订阅+$300M ARR+$54亿估值。v5.5人声首次突破恐怖谷，5分钟从创意到完整歌曲。Pro $8/月含商业权利+全模型+12轨分轨。但黑箱生成(无法控制调性/BPM/曲式)是专业用户致命短板，Suno Studio仍处半成品状态，UMG+Sony诉讼未了结导致商业发行存在法律风险，ToS已从"你拥有它"软化为"用户通常不被视为内容拥有者"。vs Udio对比4-2胜出(工作流/定价/编辑/商业权利领先，人声/曲风覆盖落败)。
- **定价**: Free $0 (50积分/天，v4.5-all) / Pro $10/月 $8年付 (2,500积分/月，全模型，商业权利) / Premier $30/月 $24年付 (10,000积分/月，全模型+Studio)
- **已完成工具**: chatgpt, claude, gemini, midjourney, notion-ai, cursor, runway, perplexity, suno
- **下一步**: kimi (国产AI助手，第一批次第二位)

## 2026-06-19: Perplexity AI 深度评测
- **工具**: Perplexity AI (Perplexity AI, Inc.)
- **评级**: 4.5/5.0
- **文件**: content/tool-reviews/perplexity.md
- **字数**: ~2300字
- **Git提交**: ab0b388 - "review: Perplexity AI深度评测"
- **核心发现**: Perplexity是AI搜索品类定义者，4500万月活+10亿月搜索量，每条答案附带可验证引用是其不可替代的护城河。Deep Research覆盖100+来源生成结构化报告，Model Council支持三模型并行对比，Comet浏览器免费提供AI原生浏览体验。$20/月Pro订阅同时解锁GPT-4/Claude/Gemini多模型访问，性价比碾压单独各家订阅。但Trustpilot 1.6/5的账单投诉记录（累计千条+意外扣费和取消订阅困难）是严重风险信号，中文搜索质量明显弱于英文，Deep Research配额不透明。
- **定价**: Free $0 / Pro $20/月($200/年) / Pro教育 $10/月 / Max $200/月 / Enterprise Pro $40/人/月 / Enterprise Max $325/人/月
- **已完成工具**: chatgpt, claude, gemini, midjourney, notion-ai, cursor, runway, perplexity
- **下一步**: suno (AI音乐生成，首页6大主打全部完成，进入第一批次)

## 2026-06-18: Runway Gen-4 深度评测
- **工具**: Runway Gen-4 (Runway AI, Inc.)
- **评级**: 4.5/5.0
- **文件**: content/tool-reviews/runway.md
- **字数**: ~2000字
- **Git提交**: 7641523 - "review: Runway Gen-4深度评测"
- **核心发现**: Runway 2026年已从单一视频生成器进化为多模型创作平台，Motion Brush是不可替代的杀手功能。Gen-4角色一致性大幅提升但绝对画质被Sora 2超越。多模型集市策略（集成Veo 3.1 + Kling 3.0 Pro + FLUX.2）是最聪明的护城河。对中文创作者不友好（汉服会被画成和风）。免费版几乎没有生产力。
- **定价**: 免费（125一次性积分）/ 标准版 $15/月 / 专业版 $35/月 / 无限版 $95/月 / 企业版 联系销售
- **已完成工具**: chatgpt, claude, gemini, midjourney, notion-ai, cursor, runway
- **下一步**: perplexity (AI搜索工具，首页6大主打最后一款)

## 2026-06-17: Cursor 深度评测
- **工具**: Cursor (Anysphere)
- **评级**: 4.6/5.0
- **文件**: content/tool-reviews/cursor.md
- **字数**: ~2400字
- **Git提交**: 218c14f - "review: Cursor深度评测"
- **核心发现**: Cursor 2026年已是可视化AI编程王者，100万+DAU、$2B+ARR、$293亿估值。Tab预测意图揣测能力业界第一，Agent可自主完成跨文件重构。多模型切换是区别于Copilot的核心优势。Ultra $200/月价格不菲，国内网络门槛和UI精致度是主要短板。Cloud Agents/Browser Use/Design Mode等新功能持续上线。
- **定价**: Hobby免费（2,000次补全+50次慢速请求）/ Pro $20/月 / Pro+ $60/月 / Ultra $200/月 / Teams $40/用户/月
- **已完成工具**: chatgpt, claude, gemini, midjourney, notion-ai, cursor
- **下一步**: runway (AI视频创作，首页6大主打)

## 2026-06-16: Notion AI 深度评测
- **工具**: Notion AI (Notion Labs Inc.)
- **评级**: 4.3/5.0
- **文件**: content/tool-reviews/notion-ai.md
- **字数**: ~2300字
- **Git提交**: fdf7279 - "review: Notion AI深度评测"
- **核心发现**: Notion AI 2026年已从简单写作助手进化为多模型企业搜索平台（16+连接器 + GPT/Claude/Gemini切换）；AI深度嵌入工作空间的理念是最大护城河；写作质量明显落后ChatGPT；Q&A准确性高度依赖知识库质量——脏数据进去不可靠答案出来；完整AI功能锁定在Business方案($20/成员/月)，Free/Plus仅有限试用
- **定价**: Free $0（有限试用）/ Plus $10/月（有限试用）/ Business $20/月（完整AI）/ Enterprise 定制价 / 自定义Agent $10/1000积分
- **已完成工具**: chatgpt, claude, gemini, midjourney, notion-ai
- **下一步**: cursor (AI编程开发，首页6大主打)

## 2026-06-15: Midjourney 深度评测
- **工具**: Midjourney (Midjourney Inc.)
- **评级**: 4.6/5.0
- **文件**: content/tool-reviews/midjourney.md
- **字数**: ~2300字
- **Git提交**: 32a96ac - "review: Midjourney深度评测"
- **核心发现**: V7架构重建美学质量再提升30%，Draft Mode 10倍速度+半成本革了创意探索工作流的命；Omni Reference让角色一致性从几乎不可用变为真正可落地；文字渲染仍是致命短板(1/10)；Web应用全面上线终结Discord唯一入口时代
- **定价**: Basic $10/月 | Standard $30/月 | Pro $60/月 | Mega $120/月（年付8折，无免费试用）
- **已完成工具**: chatgpt, claude, gemini, midjourney
- **下一步**: notion-ai (AI写作工具，首页6大主打之一)

## 2026-06-14: Google Gemini 深度评测
- **工具**: Google Gemini (Google DeepMind)
- **评级**: 4.5/5.0
- **文件**: content/tool-reviews/gemini.md
- **字数**: ~2200字
- **Git提交**: 83cf836 - "review: Google Gemini深度评测"
- **核心发现**: 100万Token上下文+原生视频理解无人能敌，Google Workspace集成是最大护城河；AI Pro $19.99含5TB存储性价比碾压竞品；编程和创意写作落后于Claude/ChatGPT
- **定价**: Free / AI Plus $7.99 / AI Pro $19.99 / AI Ultra $99.99 / Workspace $14/用户
- **已完成工具**: chatgpt, claude, gemini
- **下一步**: midjourney (AI图像生成类最高优先级)

## 2026-06-13: Claude 深度评测
- **工具**: Claude (Anthropic)
- **评级**: 4.7/5.0
- **文件**: content/tool-reviews/claude.md
- **字数**: ~2200字
- **Git提交**: 983c2e2 - "review: Claude深度评测"
- **核心发现**: Claude 编程能力业界第一(SWE-bench 80.9%)，幻觉率最低(~3%)，100万Token上下文
- **价格**: Free / Pro $20/月 / Max $100-200/月
- **已完成工具**: chatgpt, claude
- **下一步**: gemini
