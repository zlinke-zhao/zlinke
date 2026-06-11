'use client'

import ToolCard from '@/components/ToolCard'
import { tools, categories } from '@/lib/tools'
import { useState } from 'react'

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('全部')

  const filteredTools = activeCategory === '全部'
    ? tools
    : tools.filter((tool) => tool.category === activeCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">AI工具库</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">精选{filteredTools.length}款AI工具推荐，帮你找到最适合的那一款</p>

      {/* Category Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat, i) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          <p className="text-lg">暂无该分类下的工具，稍后我们会陆续补充</p>
        </div>
      )}
    </div>
  )
}
