export const metadata = {
  title: 'Cookie 政策',
  description: 'ZLinke 智链 Cookie 政策 - 了解本站如何使用 Cookie 及如何管理您的偏好',
  alternates: {
    canonical: '/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">Cookie 政策</h1>
      <p className="text-sm text-gray-400 mb-8">最后更新：2026 年 9 月 24 日</p>

      <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">

        <p>
          本 Cookie 政策说明 <strong className="text-gray-800 dark:text-white">ZLinke（智链）</strong>（以下简称"本站"）如何使用 Cookie 及类似技术。
          当您继续浏览本站时，即表示您同意我们按照本政策使用 Cookie。
        </p>

        {/* 1. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">一、什么是 Cookie</h2>
          <p className="text-sm">
            Cookie 是您访问网站时由浏览器存储在设备上的小型文本文件。它能帮助网站记住您的偏好（如主题模式）、
            维持登录状态、分析流量，以及向您展示相关广告。类似技术还包括本地存储（Local Storage）和像素标签（Pixel）。
          </p>
        </div>

        {/* 2. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">二、我们使用的 Cookie 类型</h2>
          <div className="space-y-3 text-sm">
            <div className="border-l-2 border-green-400 pl-3">
              <h3 className="font-semibold text-gray-700 dark:text-gray-200">必要 Cookie（Essential）</h3>
              <p className="mt-1">用于网站基础功能，如主题切换、页面导航。这类 Cookie 无法关闭，否则网站将无法正常运行。</p>
            </div>
            <div className="border-l-2 border-blue-400 pl-3">
              <h3 className="font-semibold text-gray-700 dark:text-gray-200">分析 Cookie（Analytics）</h3>
              <p className="mt-1">用于统计访问量、用户行为，帮助我们改进内容。例如 Google Analytics 4。</p>
            </div>
            <div className="border-l-2 border-purple-400 pl-3">
              <h3 className="font-semibold text-gray-700 dark:text-gray-200">广告 Cookie（Advertising）</h3>
              <p className="mt-1">用于向您展示个性化或非个性化广告，并衡量广告效果。例如 Google AdSense。</p>
            </div>
          </div>
        </div>

        {/* 3. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">三、第三方 Cookie</h2>
          <p className="text-sm mb-3">本站集成的第三方服务可能在其自身政策下设置 Cookie：</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong className="text-gray-800 dark:text-white">Google AdSense</strong>：用于展示广告并基于您的浏览历史投放个性化广告。
              您可在 <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google 广告设置</a> 中管理广告偏好或停用个性化广告。
            </li>
            <li>
              <strong className="text-gray-800 dark:text-white">Google Analytics 4</strong>：用于匿名流量分析。
              您可在 <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google Analytics 停用插件</a> 中选择退出。
            </li>
          </ul>
        </div>

        {/* 4. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">四、如何管理 Cookie</h2>
          <p className="text-sm">
            您可以通过浏览器设置随时清除、阻止或管理 Cookie。常见浏览器操作路径：
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
            <li>Chrome：设置 → 隐私和安全 → Cookie 及其他网站数据</li>
            <li>Edge / Firefox / Safari：均在"隐私"或"偏好设置"中提供类似选项</li>
          </ul>
          <p className="text-sm mt-3">
            请注意：禁用必要 Cookie 可能导致部分功能无法正常使用。
          </p>
        </div>

        {/* 5. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">五、政策更新</h2>
          <p className="text-sm">
            本 Cookie 政策更新时将在此页面发布，并更新顶部"最后更新"日期。如与
            <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">隐私政策</a>
            存在冲突，以隐私政策为准。
          </p>
        </div>

      </div>
    </div>
  )
}
