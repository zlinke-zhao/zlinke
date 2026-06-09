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
  const categoryColors: Record<string, string> = {
    '新闻': 'bg-green-100 text-green-700',
    '评测': 'bg-blue-100 text-blue-700',
    '深度': 'bg-purple-100 text-purple-700',
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group">
      <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
        {/* Color Bar */}
        <div className="h-1.5 gradient-bg" />
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'}`}>
              {article.category}
            </span>
            <time className="text-xs text-gray-400">{article.date}</time>
          </div>
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors leading-snug mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {article.description}
          </p>
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
