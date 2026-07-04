export const metadata = {
  title: '联系我们',
  description: '联系 ZLinke 智链 - 内容合作、商务合作、工具推荐、问题反馈',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">联系我们</h1>
      <p className="text-sm text-gray-400 mb-8">有任何问题或合作需求，欢迎随时联系</p>

      <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">

        {/* 联系邮箱 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">📧 电子邮箱</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-1 rounded text-xs font-medium shrink-0">QQ 邮箱</span>
              <a href="mailto:451085427@qq.com" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                451085427@qq.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-medium shrink-0">Gmail</span>
              <a href="mailto:zlinke001@gmail.com" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                zlinke001@gmail.com
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            建议优先使用 QQ 邮箱，回复速度更快。我们承诺在 <strong className="text-gray-600 dark:text-gray-300">7 个工作日内</strong> 回复您的邮件。
          </p>
        </div>

        {/* 合作类型 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">🤝 合作类型</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">内容合作</h3>
              <p className="text-sm mt-1">
                欢迎 AI 工具厂商、开发者提供产品测评机会。我们坚持独立评测，不因合作影响评分结论。
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">商务合作</h3>
              <p className="text-sm mt-1">
                广告投放、赞助内容、联盟营销合作。赞助内容会在文章开头明确标注。
              </p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">工具推荐</h3>
              <p className="text-sm mt-1">
                发现了好用的 AI 工具？欢迎推荐给我们，经过评测后可能收录到工具库。
              </p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">问题反馈</h3>
              <p className="text-sm mt-1">
                文章有错误？链接失效？数据过时？请告知我们，确认后会在 48 小时内修正。
              </p>
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">❓ 常见问题</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                Q：你们接受付费好评吗？
              </h3>
              <p className="text-sm">
                不接受。所有评测基于真实使用体验。付费合作内容会在文章开头明确标注「赞助内容」。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                Q：文章中的代码可以直接使用吗？
              </h3>
              <p className="text-sm">
                可以。所有代码示例均经过测试，可实际运行。使用时请替换为您自己的 API Key。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                Q：如何订阅更新通知？
              </h3>
              <p className="text-sm">
                在页面底部订阅栏输入邮箱即可，我们会定期发送精选 AI 资讯。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                Q：你们的文章多久更新一次？
              </h3>
              <p className="text-sm">
                每周发布 2-3 篇新文章。已有文章会根据行业变化不定期更新，更新日期标注在文章开头。
              </p>
            </div>
          </div>
        </div>

        {/* 其他入口 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">🔗 相关页面</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <a href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">→ 关于我们</a>
            <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">→ 隐私政策</a>
            <a href="/articles" className="text-blue-600 dark:text-blue-400 hover:underline">→ 文章列表</a>
            <a href="/tools" className="text-blue-600 dark:text-blue-400 hover:underline">→ AI 工具库</a>
          </div>
        </div>

      </div>
    </div>
  )
}
