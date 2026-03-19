import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDir = path.join(process.cwd(), 'posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  categories: string[]
}

export interface Post extends PostMeta {
  contentHtml: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const { data } = matter(fs.readFileSync(path.join(postsDir, fileName), 'utf8'))
      return {
        slug,
        title: data.title ?? '',
        date: data.date ? String(data.date).slice(0, 10) : '',
        description: data.description ?? '',
        categories: data.categories ?? [],
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''))
}

export function getPost(slug: string): Post {
  const fullPath = path.join(postsDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const contentHtml = marked(content) as string
  return {
    slug,
    title: data.title ?? '',
    date: data.date ? String(data.date).slice(0, 10) : '',
    description: data.description ?? '',
    categories: data.categories ?? [],
    contentHtml,
  }
}
