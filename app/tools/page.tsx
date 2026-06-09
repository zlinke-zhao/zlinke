import ToolCard from '@/components/ToolCard'
import { tools, categories } from '@/lib/tools'

export const metadata = {
  title: 'AI工具库',
  description: '精选AI工具推荐 — 写作、编程、绘画、设计、营销，一站式发现最适合你的AI工具',
}

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">AI工具库</h1>
      <p className="text-gray-500 mb-8">精选AI工具推荐，帮你找到最适合的那一款</p>

      {/* Category Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat, i) => (
          <a
            key={cat}
            href={`#${cat}`}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              i === 0
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </a>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}
