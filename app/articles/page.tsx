import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import AdSlot from '@/components/AdSlot'

export const metadata = {
  title: '文章',
  description: 'AI工具评测、科技新闻、深度分析 — ZLinke智链文章列表',
}

const categories = ['全部', '新闻', '评测', '深度']

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">文章</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">AI工具评测、科技新闻、深度分析</p>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
        {categories.map((cat) => (
          <a
            key={cat}
            href={`#${cat}`}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              cat === '全部'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </a>
        ))}
      </div>

      <div className="flex gap-8">
        {/* Article Grid */}
        <div className="flex-1">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <AdSlot position="sidebar-top" />
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 mt-6">
            <h3 className="font-bold mb-3 dark:text-white">热门标签</h3>
            <div className="flex flex-wrap gap-2">
              {['ChatGPT', 'Claude', 'AI写作', 'AI编程', 'AI绘画', 'SaaS', 'OpenAI', 'Gemini'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <AdSlot position="sidebar-bottom" />
        </aside>
      </div>
    </div>
  )
}
