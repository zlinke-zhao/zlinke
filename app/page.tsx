import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import ToolCard from '@/components/ToolCard'
import Newsletter from '@/components/Newsletter'
import { getAllArticles } from '@/lib/articles'
import { tools } from '@/lib/tools'

export default function Home() {
  const articles = getAllArticles()
  const latestArticles = articles.slice(0, 3)
  const featuredTools = tools.slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="gradient-bg text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            发现最好的<span className="text-yellow-300">AI工具</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            深度评测、真实对比、专业推荐 — 帮你在AI时代选对工具
          </p>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="搜索AI工具、评测文章..."
              className="w-full px-5 py-3 pr-12 rounded-xl text-gray-800 bg-white/95 backdrop-blur shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              readOnly
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">最新文章</h2>
          <Link href="/articles" className="text-primary hover:text-primary-dark font-medium text-sm">
            查看全部 →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">热门AI工具</h2>
            <Link href="/tools" className="text-primary hover:text-primary-dark font-medium text-sm">
              查看全部 →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <Newsletter />
      </section>
    </>
  )
}
