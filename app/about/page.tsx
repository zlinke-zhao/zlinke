export const metadata = {
  title: '关于',
  description: 'ZLinke智链 - 你的AI工具发现站',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">关于 ZLinke 智链</h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          <strong className="text-gray-800">ZLinke（智链）</strong>是你的AI工具发现站。
          我们深度评测各类AI工具，提供真实对比和专业推荐，帮你在AI时代选对工具。
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">我们的内容</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium shrink-0">新闻</span>
              <p className="text-sm">追踪AI行业最新动态，让你不错过任何重要变化</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium shrink-0">评测</span>
              <p className="text-sm">深度对比AI工具的功能、价格和使用体验，给出真实建议</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium shrink-0">深度</span>
              <p className="text-sm">分析AI行业趋势，洞察技术发展方向</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">免责声明</h2>
          <p className="text-sm">
            本站部分链接为联盟营销链接（Affiliate Link）。如果你通过这些链接购买产品，我们可能获得少量佣金，
            这不会增加你的购买成本。所有推荐基于真实评测，不受佣金影响。
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">联系我们</h2>
          <p className="text-sm">
            有任何问题或合作需求，欢迎通过以下方式联系：
          </p>
          <p className="text-sm mt-2">
            邮箱：<span className="text-primary">hello@zlinke.top</span>
          </p>
        </div>
      </div>
    </div>
  )
}
