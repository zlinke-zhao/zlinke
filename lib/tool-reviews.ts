import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const reviewsDirectory = path.join(process.cwd(), 'content/tool-reviews')

export interface ToolReview {
  id: string
  title: string
  date: string
  category: string
  rating: number
  price: string
  subtitle: string
  url: string
  pros: string[]
  cons: string[]
  alternatives: { name: string; slug: string; reason: string }[]
  contentHtml: string
  // Extra fields from frontmatter
  coverImage?: string
  lastUpdated?: string
}

export function getToolReviewById(id: string): ToolReview | null {
  const fullPath = path.join(reviewsDirectory, `${id}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = remark().use(remarkGfm).use(html, { sanitize: false }).processSync(content)
  const contentHtml = processedContent.toString()

  return {
    id: data.id || id,
    title: data.title || '',
    date: data.date || '',
    category: data.category || '',
    rating: data.rating || 4.0,
    price: data.price || '',
    subtitle: data.subtitle || '',
    url: data.url || '',
    pros: data.pros || [],
    cons: data.cons || [],
    alternatives: data.alternatives || [],
    contentHtml,
    coverImage: data.coverImage,
    lastUpdated: data.lastUpdated,
  }
}

export function getAllToolReviewIds(): string[] {
  if (!fs.existsSync(reviewsDirectory)) return []
  return fs.readdirSync(reviewsDirectory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}

export function getAllToolReviews(): ToolReview[] {
  return getAllToolReviewIds()
    .map((id) => {
      const fullPath = path.join(reviewsDirectory, `${id}.md`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        id: data.id || id,
        title: data.title || '',
        date: data.date || '',
        category: data.category || '',
        rating: data.rating || 4.0,
        price: data.price || '',
        subtitle: data.subtitle || '',
        url: data.url || '',
        pros: data.pros || [],
        cons: data.cons || [],
        alternatives: data.alternatives || [],
        contentHtml: '',
        coverImage: data.coverImage,
        lastUpdated: data.lastUpdated,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

/** Check if a tool has a review page */
export function hasReview(toolId: string): boolean {
  return fs.existsSync(path.join(reviewsDirectory, `${toolId}.md`))
}
