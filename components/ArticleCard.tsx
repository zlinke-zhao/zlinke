import Link from 'next/link'

interface Article {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  description: string
}

export default function ArticleCard({ article }: { article: Article }) {
  const categoryStyles: Record<string, { bg: string; darkBg: string; text: string; darkText: string }> = {
    '新闻': { bg: 'bg-green-100', darkBg: 'dark:bg-green-900/30', text: 'text-green-700', darkText: 'dark:text-green-400' },
    '评测': { bg: 'bg-blue-100', darkBg: 'dark:bg-blue-900/30', text: 'text-blue-700', darkText: 'dark:text-blue-400' },
    '深度': { bg: 'bg-purple-100', darkBg: 'dark:bg-purple-900/30', text: 'text-purple-700', darkText: 'dark:text-purple-400' },
  }

  const style = categoryStyles[article.category] || { bg: 'bg-gray-100', darkBg: 'dark:bg-gray-800', text: 'text-gray-600', darkText: 'dark:text-gray-400' }

  return (
    <Link href={`/articles/${article.slug}`} className="group">
      <article className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all hover:-translate-y-0.5">
        {/* Color Bar */}
        <div className="h-1.5 gradient-bg" />
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${style.bg} ${style.darkBg} ${style.text} ${style.darkText}`}>
              {article.category}
            </span>
            <time className="text-xs text-gray-400 dark:text-gray-500">{article.date}</time>
          </div>
          <h3 className="font-bold text-lg group-hover:text-primary dark:group-hover:text-blue-400 transition-colors leading-snug mb-2 dark:text-white">
            {article.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {article.description}
          </p>
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
