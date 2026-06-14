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

## SEO & 变现状态
- Google Search Console: ✅ 已验证通过（2026-06-14）
- sitemap.xml: ✅ 已上线（50 URLs）
- robots.txt: ✅ 已上线
- Google AdSense: ✅ 已审核通过，广告代码已接入
  - Ad client: ca-pub-1019611632171859
  - Ad slot: 8367513551（自动广告 + 展示广告单元）
  - 广告位：article-top, article-bottom, sidebar-top, sidebar-bottom, review-top, review-bottom
- Bing Webmaster: ❌ 未提交

## 已发布文章
- AI Agent 入门实战指南 (2026-06-13): LangChain 1.x + LangGraph + 和风天气 API
