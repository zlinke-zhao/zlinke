# ZLinke 项目长期记忆

## 品牌与身份
- **网站/赚钱飞轮**: zlinke.top（中文名：智链）
- **公众号名称**: 召阳科技观察
- **公众号作者**: 雄关漫道
- **内容定位**: AI 应用开发实战指南，真实可运行代码

## 技术栈
- Next.js 14 + Static Export 构建静态网站
- 部署在 Vercel（GitHub 自动触发）
- 内容管理：Markdown 源文件 + 公众号 HTML 双版本

## 关键约定
- 文章代码必须真实可运行，禁止模拟/造假
- 代码示例优先使用 DeepSeek API（OpenAI 兼容格式）
- 中文城市名调用 API 时必须做 urllib.parse.quote() URL 编码
- 公众号 HTML 代码块存在 NBSP（U+00A0）污染风险，从 .md 源文件复制更可靠
- 文章尾部标识统一用"本文首发于ZLinke · 智链"（不再用"AI赚钱飞轮"）
- 公众号代码块不能用 `<pre>` + white-space:pre（微信编辑器会剥离导致乱排版），必须用 `<section>` + 每行 `<p>` + `&nbsp;` 缩进 + `<span>` 语法高亮
- 公众号文章不放外链（微信不支持外部链接跳转），相关阅读区直接删除
- 公众号表格 `<th>` 必须显式设置 `background: #4a90d9; color: #fff;`（蓝底白字），否则微信编辑器默认样式会让表头文字变灰白看不清

## SEO & 变现状态
- Google Search Console: ✅ 已验证通过（2026-06-14）
- sitemap.xml: ✅ 已上线（49 URLs，2026-07-07 更新：新增ElevenLabs文章，补入缺失工具页，移除薄文章）
- robots.txt: ✅ 已上线
- Google AdSense: ⚠️ 账号状态：使用中（2026-07-16 赵生截图确认），但尚未完成收款信息+网站关联
  - Ad client: ca-pub-1019611632171859（当前主账号，与 AdSense 后台截图一致：pub-1019611632171859）
  - 客户 ID: 1654036530
  - Ad slot: 8367513551（自动广告 + 展示广告单元）
  - 广告位：article-top, article-bottom, sidebar-top, sidebar-bottom, review-top, review-bottom
  - 关键新发现（2026-07-16 赵生截图）：AdSense 后台"账号信息"显示账号状态为"使用中"，发布商ID为 pub-1019611632171859；顶部提示"要开启创收，需添加收款信息并关联您的网站"。此前"重复账号"提示，可能是因当前账号已存在、再次申请时触发；当前账号状态正常，优先完成设置
  - 地址验证：赵生已填地址验证表格，Google 提示寄 PIN 码信到住址，但信件未收到。需在 AdSense 后台"收款→地址验证"处理（重发 PIN 或替代验证）
  - "5748-1606-4350-2723"是**付款账号 ID**（不是银行卡号），与 AdSense 后台收款信息页截图一致，对应发布商 ID pub-1019611632171859；**不存在账号冲突**
  - 下一步：①网站内容质量已扩充（见下"内容质量修复进展"）②**内容达标后可重新提交 AdSense 网站审核**（赵生手动在 AdSense 后台 zlinke.top 详情页点"申请审核"）③处理地址验证 PIN 码（收款→地址验证，申请重发或替代验证）
  - 已修复 2026-06-22：①创建 /privacy-policy 页面（含 GA/AdSense/Vercel 第三方披露） ②下架 gpt5-announcement 短文（重命名为 .md.draft 隐藏） ③修复横评文章场景三的逻辑漏洞
  - 已修复 2026-06-23：④新增 /contact 页面（双邮箱+4种合作类型+FAQ） ⑤扩充 /about 页面（数据统计+团队介绍+5步编辑流程+信任承诺）
  - 已修复 2026-06-27：⑥sitemap.xml 工具URL从77个降至17个（仅含真实评测页），消除Google内容农场判定
  - 已修复 2026-07-07：⑦隐藏薄内容文章 ai-writing-tools-2026.md→.draft ⑧移动敏感规划文件 tool-review-priority.md→项目根目录 ⑨发布 ElevenLabs 深度评测文章（约12KB），填补10天内容断更 ⑩重建 sitemap 补入缺少的 elevenlabs/heygen/replit 工具页
  - 联系邮箱：451085427@qq.com（QQ）+ zlinke001@gmail.com（Gmail）
  - 内容质量修复进展（2026-07-16）：已将 3 篇最薄文章扩充至 8KB+ —— google-gemini2-release（4.6KB→14.1KB，含真实可运行Gemini API代码）、ai-startup-pitfalls（7.5KB→10.7KB）、wechat-ai-ecosystem（7.8KB→10.9KB）。现 content/articles 全部 ≥8KB，已 commit 08aa1fa。剩余待办：保持每周 2-3 篇拉长时间跨度（站点仅1个月龄是硬伤）；内容达标后可再次提交 AdSense 网站审核
  - 诊断结论（2026-07-16）：技术侧全部正确（线上ads.txt正常返回、本地三处ID一致、广告位齐全）。账号状态"使用中"，收款/广告设置/网站所有权验证均已完成。赵生反馈**已多次提交网站审核均被退回（每次有邮件原因）**。2026-07-07 最新邮件（5533.eml）原文明确说明："经审核，您的申请需要稍作调整，才能获得批准……内容不足或质量欠佳之类的问题很常见，而且不难解决。"——**根因已确定为：内容不足/质量欠佳**。当前账号（pub-1019611632171859）状态正常，不存在账号冲突，"5748-1606-4350-2723"是付款账号 ID，与 pub-1019611632171859 配套。治本关键：针对性提升网站内容质量与数量，再重新提交审核。主要风险点：站点仅1个月龄、.top 域名信任度较低、部分文章偏短（如 google-gemini2-release-20260610.md 仅 4.6KB）
- Google Analytics 4: ✅ 已接入（G-DGJEW18B8B），2026-06-14
- Bing Webmaster: ❌ 未提交

## 已发布文章
- ElevenLabs 深度实测 (2026-07-07): $5亿ARR语音AI帝国实测，TTS/克隆/配音/API全拆解，含积分避坑指南和G2 vs Trustpilot评分分裂分析
- Canva AI 深度评测 (2026-06-27): Magic Studio全功能实测，265M用户平台AI能力真的够用吗？
- 国产大模型免费API横评 (2026-06-22): 智谱GLM/豆包/DeepSeek/通义千问四大免费API全面对比+代码实测+选型决策树+避坑指南
- 美团LongCat开源全家桶解读 (2026-06-21): 6大项目（Video-Avatar 1.5/Next(DiNA)/Flash-Prover/AudioDiT/WBench/General 365）逐个拆解+上手指南+选择决策树
- GLM-5.2 深度实测 (2026-06-20): GLM-5.2以1/6成本击败GPT-5.5，FrontierSWE距Opus 4.8仅1%，含完整API接入教程+价格测算
- SpaceX 600亿收购Cursor (2026-06-19): 交易深度解读+AI编程工具终局分析
- Kimi K2.7 工作台Agent指南 (2026-06-18): Kimi桌面端Agent实操教程
- Claude Fable 5 深度实测 (2026-06-17): 2h写Obsidian插件实测+$50/M token性价比分析
- TRAE SOLO 实测 (2026-06-15): 字节TRAE SOLO模式3个实测案例 + vs Cursor/Copilot横评
- 618 AI购物助手实测对比 (2026-06-14): 千问/豆包/京言/拼多多四大AI购物助手实测
- AI Agent 入门实战指南 (2026-06-13): LangChain 1.x + LangGraph + 和风天气 API

## 自动化任务
- "ZLinke每周运营助手" (automation-1781011611147): 每周一8:00 网站健康检查 + 文章方向建议 + 本周工具评测推荐（2026-06-23从每日改为每周）
- "ZLinke每日新AI工具搜集" (automation-1781253539827): 2026-07-16 起改为「聚焦版·1款/天」——优先收录AI工作台/桌面智能体，须附真实体验笔记，上限1款/天（原4款/天）
- "ZLinke文章更新巡检" (automation-1784166420252): 每2周扫描 content/articles + content/tool-reviews，列出发布满1-2个月待更新文章，只出清单不擅自改线上
