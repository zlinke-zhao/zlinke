'use client'

import ToolCard from '@/components/ToolCard'
import { useState, useMemo } from 'react'

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
  hasReview: boolean
}

interface Props {
  tools: Tool[]
  categories: readonly string[]
}

export default function ToolsContent({ tools, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTools = useMemo(() => {
    let result = activeCategory === '全部'
      ? tools
      : tools.filter((tool) => tool.category === activeCategory)

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase()
      result = result.filter((tool) => {
        const searchableText = [
          tool.name,
          tool.description,
          tool.category,
          tool.subCategory || '',
          tool.id,
          ...tool.features,
        ].join(' ').toLowerCase()
        return searchableText.includes(q)
      })
    }

    return result
  }, [activeCategory, searchQuery, tools])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">AI工具库</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">精选{filteredTools.length}款AI工具推荐，帮你找到最适合的那一款</p>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="搜索工具名称、功能、厂商…"
          className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="清除搜索"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Tips */}
      {searchQuery.trim() && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-4 -mt-2">
          搜索「{searchQuery}」找到 {filteredTools.length} 个结果 — 支持按名称、功能、分类搜索
        </p>
      )}

      {/* Category Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
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
            <ToolCard key={tool.id} tool={tool} hasReview={tool.hasReview} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          {searchQuery ? (
            <>
              <p className="text-lg mb-2">没有找到匹配「{searchQuery}」的工具</p>
              <p className="text-sm">试试其他关键词，或按分类浏览</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('全部') }}
                className="mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                清除所有筛选
              </button>
            </>
          ) : (
            <p className="text-lg">暂无该分类下的工具，稍后我们会陆续补充</p>
          )}
        </div>
      )}
    </div>
  )
}
