export const metadata = {
  title: '免责声明',
  description: 'ZLinke 智链免责声明 - 内容准确性、联盟营销披露、第三方链接及风险提示',
  alternates: {
    canonical: '/disclaimer',
  },
}

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">免责声明</h1>
      <p className="text-sm text-gray-400 mb-8">最后更新：2026 年 9 月 24 日</p>

      <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">

        <p>
          本声明适用于 <strong className="text-gray-800 dark:text-white">ZLinke（智链）</strong>（以下简称"本站"，域名 zlinke.top）的全部内容。
          访问或使用本站，即表示您已阅读并理解以下免责条款。
        </p>

        {/* 1. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">一、内容准确性</h2>
          <p className="text-sm">
            本站内容基于撰写时的公开信息与作者的实际体验整理，力求准确、客观、及时。
            但 AI 工具的功能、价格、政策变化迅速，本站<strong className="text-gray-800 dark:text-white">不保证所有信息永久准确或最新</strong>。
            在使用任何工具、产品或服务前，请以官方信息为准。
          </p>
        </div>

        {/* 2. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">二、联盟营销披露</h2>
          <p className="text-sm">
            本站部分链接为<strong className="text-gray-800 dark:text-white">联盟营销链接（Affiliate Link）</strong>。
            如果您通过这些链接注册、购买产品或服务，我们可能获得少量佣金，这<strong className="text-gray-800 dark:text-white">不会增加您的任何购买成本</strong>。
            所有推荐均基于真实评测与独立判断，不受佣金影响；任何赞助或合作内容都会在文中明确标注。
          </p>
        </div>

        {/* 3. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">三、第三方链接与产品</h2>
          <p className="text-sm">
            本站可能包含指向第三方网站、产品或服务的链接与评价。本站与这些第三方无隶属关系（除非明确说明），
            <strong className="text-gray-800 dark:text-white">不对第三方产品的可用性、质量、安全性或合规性作任何担保</strong>，
            也不对因使用第三方服务产生的任何后果承担责任。
          </p>
        </div>

        {/* 4. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">四、投资与交易风险提示</h2>
          <p className="text-sm">
            本站部分内容可能涉及加密货币、投资、交易等话题，<strong className="text-gray-800 dark:text-white">仅供信息参考，不构成任何投资建议或要约</strong>。
            任何投资均有风险，价格可能剧烈波动，您应基于自身独立判断并自行承担全部风险，
            必要时请咨询持牌专业人士。本站不对任何投资损益负责。
          </p>
        </div>

        {/* 5. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">五、责任限制</h2>
          <p className="text-sm">
            在法律允许的最大范围内，本站运营方不对因访问、使用或无法使用本站内容而导致的任何直接、间接、
            偶然或后果性损失承担责任。本站内容按"现状"提供，不附带任何明示或默示担保。
          </p>
        </div>

        {/* 6. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">六、联系我们</h2>
          <p className="text-sm">
            如对本声明有任何疑问，请通过 <span className="text-blue-500">zlinke001@gmail.com</span> 联系我们。
          </p>
        </div>

      </div>
    </div>
  )
}
