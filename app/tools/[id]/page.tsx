import { getToolReviewById, getAllToolReviewIds } from '@/lib/tool-reviews'
import { tools } from '@/lib/tools'
import AdSlot from '@/components/AdSlot'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const ids = getAllToolReviewIds()
  return ids.map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const review = getToolReviewById(params.id)
  if (!review) return { title: '评测未找到' }

  return {
    title: review.title,
    description: review.subtitle,
    alternates: {
      canonical: `/tools/${review.id}`,
    },
    openGraph: {
      title: review.title,
      description: review.subtitle,
      type: 'article',
    },
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= Math.round(rating) ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ToolReviewPage({ params }: { params: { id: string } }) {
  const review = getToolReviewById(params.id)
  if (!review) notFound()

  const tool = tools.find((t) => t.id === review.id)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 dark:text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary dark:hover:text-blue-400">首页</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary dark:hover:text-blue-400">工具库</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600 dark:text-gray-300">{review.title}</span>
      </nav>

      {/* Review Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
            评测
          </span>
          <time className="text-sm text-gray-400 dark:text-gray-500">{review.date}</time>
          {review.lastUpdated && (
            <span className="text-xs text-gray-400 dark:text-gray-500">更新于 {review.lastUpdated}</span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 dark:text-white">{review.title}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">{review.subtitle}</p>

        {/* Quick Info Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <StarRating rating={review.rating} />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{review.rating}</span>
          </div>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{review.price}</span>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{review.category}</span>
        </div>

        {/* CTA Button */}
        <a
          href={review.url}
          rel="nofollow sponsored"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          访问官网
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </header>

      {/* Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-xl p-5">
          <h3 className="font-bold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            优势
          </h3>
          <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
            {review.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-xl p-5">
          <h3 className="font-bold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            短板
          </h3>
          <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
            {review.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">-</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ad Top */}
      <AdSlot position="review-top" />

      {/* Review Content */}
      <article
        className="article-content prose max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: review.contentHtml }}
      />

      {/* Ad Bottom */}
      <AdSlot position="review-bottom" />

      {/* Alternatives */}
      {review.alternatives.length > 0 && (
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold mb-6 dark:text-white">同类工具对比</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {review.alternatives.map((alt) => (
              <Link
                key={alt.slug}
                href={`/tools/${alt.slug}`}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold group-hover:text-primary dark:group-hover:text-blue-400 transition-colors dark:text-white">{alt.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{alt.reason}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Tool Data (from tools.ts) */}
      {tool && (
        <section className="mt-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-sm mb-3 dark:text-white">工具信息</h3>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <span className="text-gray-500 dark:text-gray-400">分类</span>
            <span className="dark:text-gray-300">{tool.category}{tool.subCategory ? ` · ${tool.subCategory}` : ''}</span>
            <span className="text-gray-500 dark:text-gray-400">价格</span>
            <span className="dark:text-gray-300">{tool.price}</span>
            {tool.features && (
              <>
                <span className="text-gray-500 dark:text-gray-400">功能标签</span>
                <span className="dark:text-gray-300">{tool.features.join(' / ')}</span>
              </>
            )}
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
