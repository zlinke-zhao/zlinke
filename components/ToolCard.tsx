interface Tool {
  id: string
  name: string
  description: string
  category: string
  rating: number
  url: string
}

export default function ToolCard({ tool }: { tool: Tool }) {
  const categoryColors: Record<string, string> = {
    'AI写作': 'bg-pink-100 text-pink-700',
    'AI编程': 'bg-cyan-100 text-cyan-700',
    'AI绘画': 'bg-orange-100 text-orange-700',
    'AI对话': 'bg-blue-100 text-blue-700',
    'AI营销': 'bg-green-100 text-green-700',
    'AI设计': 'bg-purple-100 text-purple-700',
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-shadow flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-lg">{tool.name}</h3>
        <div className="flex items-center gap-1 text-accent text-sm">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-medium">{tool.rating}</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-4 flex-1 leading-relaxed">{tool.description}</p>
      <div className="flex items-center justify-between">
        <span className={`px-2 py-0.5 rounded text-xs font-medium ${categoryColors[tool.category] || 'bg-gray-100 text-gray-600'}`}>
          {tool.category}
        </span>
        <a
          href={tool.url}
          rel="nofollow sponsored"
          target="_blank"
          className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
        >
          查看详情 →
        </a>
      </div>
    </div>
  )
}
