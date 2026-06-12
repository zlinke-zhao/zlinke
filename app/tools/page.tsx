import ToolsContent from './ToolsContent'
import { tools, categories } from '@/lib/tools'
import { hasReview } from '@/lib/tool-reviews'

// Server component: precomputes review availability for each tool
const toolsWithReview = tools.map((tool) => ({
  ...tool,
  hasReview: hasReview(tool.id),
}))

export default function ToolsPage() {
  return <ToolsContent tools={toolsWithReview} categories={categories} />
}
