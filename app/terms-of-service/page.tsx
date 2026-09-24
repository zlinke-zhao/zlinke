export const metadata = {
  title: '服务条款',
  description: 'ZLinke 智链服务条款 - 使用本站服务所须遵守的条款与条件',
  alternates: {
    canonical: '/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">服务条款</h1>
      <p className="text-sm text-gray-400 mb-8">最后更新：2026 年 9 月 24 日</p>

      <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">

        <p>
          欢迎访问 <strong className="text-gray-800 dark:text-white">ZLinke（智链）</strong>（以下简称"本站"，域名 zlinke.top）。
          在访问或使用本站提供的任何服务之前，请仔细阅读以下条款。当您访问本站或使用其服务时，即表示您已阅读、理解并同意接受本服务条款的约束。
        </p>

        {/* 1. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">一、使用资格</h2>
          <p className="text-sm">
            本站主要面向成年用户。您声明并保证：在您所在司法管辖区，您已达到法定成年年龄，或已获得法定监护人的同意使用本站。
            您对使用本站服务所产生的所有行为及后果承担全部责任。
          </p>
        </div>

        {/* 2. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">二、知识产权</h2>
          <p className="text-sm">
            本站所发布的所有原创内容（包括但不限于文章、评测、教程、代码、图表、标识及设计）的著作权及相关权利均归本站运营方所有，
            受《中华人民共和国著作权法》及相关国际版权条约保护。
          </p>
          <p className="text-sm mt-3">
            您可以在注明出处的前提下，出于非商业目的分享本站内容的链接。未经书面许可，
            <strong className="text-gray-800 dark:text-white">不得对本站内容进行复制、修改、再发布、出售或用于任何商业用途</strong>。
          </p>
        </div>

        {/* 3. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">三、用户行为规范</h2>
          <p className="text-sm">您同意在使用本站时不从事以下行为：</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
            <li>发布或传播违法、骚扰性、诽谤性、淫秽或侵犯他人权利的内容</li>
            <li>试图未经授权访问、干扰或破坏本站服务器及网络系统</li>
            <li>使用自动化脚本（爬虫、机器人）对本站进行过度抓取或造成服务负担</li>
            <li>滥用本站提供的联系、订阅或评论功能</li>
          </ul>
        </div>

        {/* 4. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">四、第三方服务与链接</h2>
          <p className="text-sm">
            本站可能包含指向第三方网站或服务的链接，或集成第三方服务（如 Google AdSense、Google Analytics、Vercel 等）。
            本站对这些第三方的内容、隐私政策及服务条款不承担责任，您访问第三方前应自行查阅其相关政策。
          </p>
        </div>

        {/* 5. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">五、免责声明</h2>
          <p className="text-sm">
            本站内容按"现状"提供，不附带任何明示或默示担保。在法律允许的最大范围内，
            本站不对因使用或无法使用本站内容而导致的任何直接或间接损失承担责任。详见
            <a href="/disclaimer" className="text-blue-600 dark:text-blue-400 hover:underline">免责声明</a>。
            本站部分文章涉及投资、交易等内容，仅供信息参考，不构成投资建议。
          </p>
        </div>

        {/* 6. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">六、条款变更</h2>
          <p className="text-sm">
            本站保留随时修改本服务条款的权利。变更后的条款将在本页面发布并更新顶部"最后更新"日期。
            如您在本条款变更后继续使用本站，即视为接受变更后的条款。
          </p>
        </div>

        {/* 7. */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">七、联系我们</h2>
          <p className="text-sm">
            如对本服务条款有任何疑问，请通过以下邮箱联系：
          </p>
          <p className="text-sm mt-3">
            Gmail：<span className="text-blue-500">zlinke001@gmail.com</span>
          </p>
        </div>

      </div>
    </div>
  )
}
