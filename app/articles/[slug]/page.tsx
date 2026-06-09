import { getArticleBySlug, getAllArticles } from '@/lib/articles'
import AdSlot from '@/components/AdSlot'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: '文章未找到' }
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      tags: article.tags,
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const allArticles = getAllArticles()
  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  const categoryColors: Record<string, string> = {
    '新闻': 'bg-green-100 text-green-700',
    '评测': 'bg-blue-100 text-blue-700',
    '深度': 'bg-purple-100 text-purple-700',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary">首页</Link>
        <span className="mx-2">/</span>
        <Link href="/articles" className="hover:text-primary">文章</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'}`}>
            {article.category}
          </span>
          <time className="text-sm text-gray-400">{article.date}</time>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{article.title}</h1>
        <p className="text-lg text-gray-500">{article.description}</p>
      </header>

      {/* Affiliate Links */}
      {article.affiliates && article.affiliates.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <p className="text-sm font-medium text-blue-800 mb-3">文中推荐的工具（专属优惠链接）：</p>
          <div className="flex flex-wrap gap-3">
            {article.affiliates.map((aff: { name: string; url: string }, i: number) => (
              <a
                key={i}
                href={aff.url}
                rel="nofollow sponsored"
                target="_blank"
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                {aff.name} →
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Ad Top */}
      <AdSlot position="article-top" />

      {/* Article Content */}
      <article
        className="article-content prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {/* Ad Bottom */}
      <AdSlot position="article-bottom" />

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-6">相关文章</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((a) => (
              <Link key={a.slug} href={`/articles/${a.slug}`} className="group">
                <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                  <span className="text-xs text-primary font-medium">{a.category}</span>
                  <h3 className="font-semibold mt-1 group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{a.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <div className="mt-12">
        <Newsletter />
      </div>
    </div>
  )
}
