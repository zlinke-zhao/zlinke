import Link from 'next/link'

interface Tool {
  id: string
  name: string
  description: string
  category: string
  subCategory?: string
  rating: number
  url: string
  price: string
  features: string[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">{rating}</span>
    </div>
  )
}

export default function ToolCard({ tool }: { tool: Tool }) {
  const categoryStyles: Record<string, { bg: string; darkBg: string; text: string; darkText: string }> = {
    'AI对话助手': { bg: 'bg-blue-100', darkBg: 'dark:bg-blue-900/30', text: 'text-blue-700', darkText: 'dark:text-blue-400' },
    'AI写作工具': { bg: 'bg-pink-100', darkBg: 'dark:bg-pink-900/30', text: 'text-pink-700', darkText: 'dark:text-pink-400' },
    'AI编程开发': { bg: 'bg-cyan-100', darkBg: 'dark:bg-cyan-900/30', text: 'text-cyan-700', darkText: 'dark:text-cyan-400' },
    'AI图像生成': { bg: 'bg-orange-100', darkBg: 'dark:bg-orange-900/30', text: 'text-orange-700', darkText: 'dark:text-orange-400' },
    'AI视频创作': { bg: 'bg-purple-100', darkBg: 'dark:bg-purple-900/30', text: 'text-purple-700', darkText: 'dark:text-purple-400' },
    'AI办公效率': { bg: 'bg-green-100', darkBg: 'dark:bg-green-900/30', text: 'text-green-700', darkText: 'dark:text-green-400' },
    'AI搜索工具': { bg: 'bg-indigo-100', darkBg: 'dark:bg-indigo-900/30', text: 'text-indigo-700', darkText: 'dark:text-indigo-400' },
    'AI音乐音频': { bg: 'bg-rose-100', darkBg: 'dark:bg-rose-900/30', text: 'text-rose-700', darkText: 'dark:text-rose-400' },
  }

  const style = categoryStyles[tool.category] || { bg: 'bg-gray-100', darkBg: 'dark:bg-gray-800', text: 'text-gray-600', darkText: 'dark:text-gray-400' }

  return (
    <Link href={`/tools/${tool.id}`} className="group block">
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all hover:-translate-y-0.5 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{tool.name}</h3>
            {tool.subCategory && (
              <span className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 block">{tool.subCategory}</span>
            )}
          </div>
          <StarRating rating={tool.rating} />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex-1 leading-relaxed">{tool.description}</p>
        {tool.features && tool.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tool.features.slice(0, 4).map((feature) => (
              <span key={feature} className="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded text-xs">
                {feature}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${style.bg} ${style.darkBg} ${style.text} ${style.darkText}`}>
              {tool.category}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">{tool.price}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-primary dark:text-blue-400 font-medium group-hover:underline">
            查看评测
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
