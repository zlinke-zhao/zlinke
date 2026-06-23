export const metadata = {
  title: '关于',
  description: 'ZLinke 智链 - 你的AI工具发现站。深度评测、真实对比、专业推荐。',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">关于 ZLinke 智链</h1>
      <p className="text-sm text-gray-400 mb-8">最后更新：2026 年 6 月 23 日</p>

      <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">

        {/* 网站使命 */}
        <p>
          <strong className="text-gray-800 dark:text-white">ZLinke（智链）</strong>是你的 AI 工具发现站。
          我们深度评测各类 AI 工具，提供真实对比和专业推荐，帮你在 AI 时代选对工具、用好工具。
        </p>

        {/* 数据统计 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">18+</div>
            <div className="text-xs text-gray-500 mt-1">深度文章</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">12+</div>
            <div className="text-xs text-gray-500 mt-1">工具评测</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
            <div className="text-xs text-gray-500 mt-1">实测验证</div>
          </div>
        </div>

        {/* 我们是谁 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">我们是谁</h2>
          <p className="text-sm">
            ZLinke 由一群 AI 应用开发者和科技爱好者创建于 2026 年。我们不是媒体搬运工——
            每篇文章都基于 <strong className="text-gray-800 dark:text-white">亲手写代码、真实调用 API、逐行验证结果</strong> 的第一手体验。
          </p>
          <p className="text-sm mt-3">
            我们的团队成员来自软件开发、数据分析和产品运营领域，深耕 AI 工具链 5 年以上。
            正因为我们自己就是 AI 工具的重度用户，所以更懂开发者和创作者真正需要什么。
          </p>
        </div>

        {/* 内容编辑流程 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">内容编辑流程</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium shrink-0">① 选题</span>
              <p className="text-sm">追踪 AI 行业最新动态，筛选对读者有实际价值的话题</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2 py-1 rounded text-xs font-medium shrink-0">② 实测</span>
              <p className="text-sm">亲手写代码测试，记录真实数据，不做纸上谈兵</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-medium shrink-0">③ 写作</span>
              <p className="text-sm">结构化呈现测试结果，附完整可运行代码</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-1 rounded text-xs font-medium shrink-0">④ 核查</span>
              <p className="text-sm">数据交叉验证、代码逐行审查、结论逻辑检查</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-1 rounded text-xs font-medium shrink-0">⑤ 发布</span>
              <p className="text-sm">双格式发布：网站 Markdown + 公众号 HTML，同步上线</p>
            </div>
          </div>
        </div>

        {/* 我们的内容 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">我们的内容</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-medium shrink-0">新闻</span>
              <p className="text-sm">追踪 AI 行业最新动态，让你不错过任何重要变化</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium shrink-0">评测</span>
              <p className="text-sm">深度对比 AI 工具的功能、价格和使用体验，给出真实建议</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2 py-1 rounded text-xs font-medium shrink-0">深度</span>
              <p className="text-sm">分析 AI 行业趋势，洞察技术发展方向</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-1 rounded text-xs font-medium shrink-0">教程</span>
              <p className="text-sm">从入门到实战，附完整可运行代码的 AI 开发指南</p>
            </div>
          </div>
        </div>

        {/* 为什么信任我们 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">为什么信任我们</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-500 shrink-0">✓</span>
              <p><strong className="text-gray-800 dark:text-white">代码真实可运行</strong>——所有代码示例均经过测试，可直接复制使用</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 shrink-0">✓</span>
              <p><strong className="text-gray-800 dark:text-white">数据有据可查</strong>——定价、性能数据来自官方文档，注明来源和查询日期</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 shrink-0">✓</span>
              <p><strong className="text-gray-800 dark:text-white">评测独立客观</strong>——不接受付费好评，合作内容明确标注</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 shrink-0">✓</span>
              <p><strong className="text-gray-800 dark:text-white">持续更新维护</strong>——文章随行业变化更新，过期内容及时下架</p>
            </div>
          </div>
        </div>

        {/* 免责声明 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">免责声明</h2>
          <p className="text-sm">
            本站部分链接为联盟营销链接（Affiliate Link）。如果你通过这些链接购买产品，我们可能获得少量佣金，
            这不会增加你的购买成本。所有推荐基于真实评测，不受佣金影响。
          </p>
        </div>

        {/* 联系我们 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">联系我们</h2>
          <p className="text-sm">
            有任何问题或合作需求，欢迎通过以下方式联系：
          </p>
          <div className="space-y-2 mt-3">
            <p className="text-sm">
              QQ 邮箱：<a href="mailto:451085427@qq.com" className="text-blue-600 dark:text-blue-400 hover:underline">451085427@qq.com</a>
            </p>
            <p className="text-sm">
              Gmail：<a href="mailto:zlinke001@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">zlinke001@gmail.com</a>
            </p>
            <p className="text-sm mt-3">
              → 更详细的联系方式请访问 <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">联系我们</a> 页面
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
