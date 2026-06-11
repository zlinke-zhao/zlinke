import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import ToolCard from '@/components/ToolCard'
import Newsletter from '@/components/Newsletter'
import { getAllArticles } from '@/lib/articles'
import { tools } from '@/lib/tools'

export default function Home() {
  const articles = getAllArticles()
  const latestArticles = articles.slice(0, 3)
  // 从每个分类各取一款代表性工具，展示多样性
  const featuredTools = [
    tools.find(t => t.category === 'AI对话助手'),  // ChatGPT
    tools.find(t => t.category === 'AI写作工具'),   // Notion AI
    tools.find(t => t.category === 'AI编程开发'),   // Cursor
    tools.find(t => t.category === 'AI图像生成'),   // Midjourney
    tools.find(t => t.category === 'AI视频创作'),   // Runway
    tools.find(t => t.category === 'AI搜索工具'),   // Perplexity
  ].filter((t): t is NonNullable<typeof t> => t !== null)

  return (
    <>
      {/* Hero — 吸收设计稿布局元素 */}
      <section className="gradient-bg text-white py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Value Proposition */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            每日更新AI工具评测
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            选对AI工具的人<br />
            <span className="text-yellow-300">先富起来</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            深度评测、真实对比、专业推荐 — 不再在海量AI工具中迷失方向
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/tools"
              className="px-8 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              探索工具库 →
            </Link>
            <Link
              href="/articles"
              className="px-8 py-3.5 bg-white/15 backdrop-blur text-white font-semibold rounded-xl border border-white/30 hover:bg-white/25 transition-colors"
            >
              阅读评测文章
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold">{tools.length}+</div>
              <div className="text-sm text-blue-200 mt-1">AI工具</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">{articles.length}+</div>
              <div className="text-sm text-blue-200 mt-1">评测文章</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">8</div>
              <div className="text-sm text-blue-200 mt-1">工具分类</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold dark:text-white">最新文章</h2>
          <Link href="/articles" className="text-primary dark:text-blue-400 hover:text-primary-dark font-medium text-sm">
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
      <section className="bg-white dark:bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold dark:text-white">热门AI工具</h2>
            <Link href="/tools" className="text-primary dark:text-blue-400 hover:text-primary-dark font-medium text-sm">
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
