import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleData {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  description: string
  affiliates?: { name: string; url: string }[]
  contentHtml: string
}

export function getArticleBySlug(slug: string): ArticleData | null {
  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = remark().use(remarkGfm).use(html, { sanitize: false }).processSync(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    category: data.category || '',
    tags: data.tags || [],
    description: data.description || '',
    affiliates: data.affiliates || [],
    contentHtml,
  }
}

export function getAllArticles(): ArticleData[] {
  if (!fs.existsSync(articlesDirectory)) return []

  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: data.category || '',
        tags: data.tags || [],
        description: data.description || '',
        affiliates: data.affiliates || [],
        contentHtml: '', // Skip HTML conversion for list pages
      }
    })

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getArticlesByCategory(category: string): ArticleData[] {
  return getAllArticles().filter((a) => a.category === category)
}
