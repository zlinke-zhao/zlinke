import ToolsContent from './ToolsContent'
import { tools, categories } from '@/lib/tools'
import { hasReview } from '@/lib/tool-reviews'

export const metadata = {
  title: 'AI工具库',
  description: 'ZLinke智链AI工具库 - 发现最好的AI工具，深度评测与推荐',
  alternates: {
    canonical: '/tools',
  },
}

// Server component: precomputes review availability for each tool
const toolsWithReview = tools.map((tool) => ({
  ...tool,
  hasReview: hasReview(tool.id),
}))

export default function ToolsPage() {
  return <ToolsContent tools={toolsWithReview} categories={categories} />
}
