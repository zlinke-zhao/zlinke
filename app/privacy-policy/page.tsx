export const metadata = {
  title: '隐私政策',
  description: 'ZLinke 智链隐私政策 - 了解我们如何收集、使用和保护您的数据',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">隐私政策</h1>
      <p className="text-sm text-gray-400 mb-8">最后更新：2026 年 6 月 22 日</p>

      <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">

        <p>
          <strong className="text-gray-800 dark:text-white">ZLinke（智链）</strong>（以下简称"本站"，域名 zlinke.top）非常重视您的隐私。
          本隐私政策说明我们在您访问本站时收集哪些信息、如何使用这些信息，以及您享有的权利。
          请在使用本站前仔细阅读本政策。
        </p>

        {/* 1. 信息收集 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">一、我们收集哪些信息</h2>
          <div className="space-y-4 text-sm">

            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">1.1 您主动提供的信息</h3>
              <p>
                当您订阅我们的邮件通讯时，我们会收集您的邮箱地址。我们仅用于发送您订阅的内容，不会将其用于其他目的或分享给第三方。
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">1.2 自动收集的信息</h3>
              <p>
                当您访问本站时，我们的服务器和第三方分析工具会自动收集以下信息：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>浏览器类型与版本、操作系统、设备类型</li>
                <li>访问的页面 URL、来源页面（Referrer）、停留时间</li>
                <li>大致的地理位置（基于 IP 地址，仅精确到城市级别）</li>
                <li>访问时间与访问频次</li>
              </ul>
              <p className="mt-2">这些信息经过匿名化处理，不与您的个人身份直接关联。</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">1.3 Cookie 的使用</h3>
              <p>本站使用 Cookie 及类似技术来记住您的偏好（如深色/浅色模式）并提供分析数据。您可以通过浏览器设置随时禁用 Cookie，但部分功能可能受到影响。</p>
            </div>

          </div>
        </div>

        {/* 2. 信息使用 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">二、我们如何使用收集的信息</h2>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li><strong>提供和改善服务</strong>：分析用户行为以优化网站内容和用户体验</li>
            <li><strong>发送通讯</strong>：向订阅用户发送邮件通知和科技日报</li>
            <li><strong>安全防护</strong>：检测异常访问行为，保护网站安全</li>
            <li><strong>合规要求</strong>：遵守适用的法律法规</li>
          </ul>
          <p className="text-sm mt-3">我们<strong>不会</strong>出售、出租或交易您的个人信息。</p>
        </div>

        {/* 3. 第三方服务 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">三、第三方服务</h2>
          <p className="text-sm mb-4">本站使用以下第三方服务，它们可能通过 Cookie 收集匿名数据。各服务均有独立的隐私政策，建议您查阅：</p>

          <div className="space-y-3">
            <div className="border-l-2 border-blue-400 pl-3">
              <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Google Analytics 4</h3>
              <p className="text-xs mt-1">用于分析网站流量和用户行为。Google 可能使用 Cookie 来收集匿名化的使用数据。了解详情：<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google 隐私政策</a></p>
            </div>

            <div className="border-l-2 border-purple-400 pl-3">
              <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Google AdSense</h3>
              <p className="text-xs mt-1">用于展示广告。Google 及其合作伙伴可能使用 Cookie 根据您的访问历史投放广告。您可以在 <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google 广告设置</a> 中管理个性化广告偏好。第三方供应商和广告联盟也可能使用 Cookie 来衡量广告效果。</p>
            </div>

            <div className="border-l-2 border-green-400 pl-3">
              <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Vercel</h3>
              <p className="text-xs mt-1">本站托管于 Vercel 平台，Vercel 会收集服务器日志（IP 地址、请求时间等）用于安全和运维目的。</p>
            </div>
          </div>
        </div>

        {/* 4. 联盟营销披露 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">四、联盟营销披露</h2>
          <p className="text-sm">
            本站部分文章中包含联盟营销链接（Affiliate Link）。如果您通过这些链接购买产品或服务，我们可能获得少量佣金，这不会增加您的购买成本。
            所有推荐均基于真实评测，不受佣金影响。联盟收入用于维持网站运营和内容创作。
          </p>
        </div>

        {/* 5. 用户权利 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">五、您的权利</h2>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li><strong>访问权</strong>：您有权了解我们收集了您的哪些数据</li>
            <li><strong>更正权</strong>：您有权要求更正不准确的信息</li>
            <li><strong>删除权</strong>：您可以随时要求我们删除您的订阅信息</li>
            <li><strong>退订权</strong>：每封通讯邮件底部均包含退订链接，您可随时取消订阅</li>
            <li><strong>Cookie 管理权</strong>：您可通过浏览器设置管理或禁用 Cookie</li>
          </ul>
        </div>

        {/* 6. 儿童隐私 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">六、儿童隐私</h2>
          <p className="text-sm">
            本站面向成年用户，不针对 13 岁以下儿童。我们不会故意收集儿童的个人信息。如果您认为我们无意中收集了儿童数据，请联系我们删除。
          </p>
        </div>

        {/* 7. 政策更新 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">七、政策更新</h2>
          <p className="text-sm">
            本隐私政策可能不时更新。更新后的政策将在本页面发布，并更新页面顶部的"最后更新"日期。重大变更时，我们会在网站显著位置通知用户。
          </p>
        </div>

        {/* 8. 联系我们 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">八、联系我们</h2>
          <p className="text-sm">
            如果您对本隐私政策有任何疑问、建议或需要行使您的数据权利，请通过以下方式联系我们：
          </p>
          <p className="text-sm mt-3">
            邮箱：<span className="text-blue-500">zlinke001@gmail.com</span>
          </p>
          <p className="text-sm mt-1">
            我们将在收到您的请求后 7 个工作日内予以回复。
          </p>
        </div>

      </div>
    </div>
  )
}
