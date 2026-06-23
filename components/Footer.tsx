import Link from 'next/link'
import Newsletter from './Newsletter'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <span className="text-2xl font-bold text-white">ZLinke</span>
              <span className="text-xs text-gray-500 ml-2">智链</span>
            </Link>
            <p className="text-sm leading-relaxed">
              发现最好的AI工具。深度评测、真实对比、专业推荐。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">快速导航</h3>
            <div className="space-y-2 text-sm">
              <Link href="/articles" className="block hover:text-white transition-colors">文章</Link>
              <Link href="/tools" className="block hover:text-white transition-colors">AI工具库</Link>
              <Link href="/about" className="block hover:text-white transition-colors">关于我们</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">联系我们</Link>
              <Link href="/privacy-policy" className="block hover:text-white transition-colors">隐私政策</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-3">订阅科技日报</h3>
            <p className="text-sm mb-3">每日精选AI资讯，直达邮箱</p>
            <Newsletter compact />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} ZLinke. All rights reserved.</p>
          <p className="text-xs">
            本站部分链接为联盟营销链接，详见
            <Link href="/about" className="text-gray-300 hover:text-white ml-1">免责声明</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
