import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

// Posts live in _posts/ with Jekyll-style YYYY-MM-DD-slug.md filenames
const postsDir = path.join(process.cwd(), '_posts')

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

function toSlug(filename: string): string {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '')
}

function toDate(filename: string, frontmatter: Record<string, unknown>): string {
  if (frontmatter.date) return String(frontmatter.date).slice(0, 10)
  const m = filename.match(/^(\d{4}-\d{2}-\d{2})/)
  return m ? m[1] : ''
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const { data } = matter(fs.readFileSync(path.join(postsDir, filename), 'utf8'))
      return {
        slug:        toSlug(filename),
        title:       data.title       ?? toSlug(filename),
        date:        toDate(filename, data),
        description: data.description ?? data.excerpt ?? '',
        categories:  Array.isArray(data.categories) ? data.categories : [],
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getAllSlugs(): string[] {
  return getAllPosts().map(p => p.slug)
}

export function getPost(slug: string): Post {
  if (!fs.existsSync(postsDir)) throw new Error(`Post not found: ${slug}`)
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  const filename = files.find(f => toSlug(f) === slug)
  if (!filename) throw new Error(`Post not found: ${slug}`)

  const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
  const { data, content } = matter(raw)
  const contentHtml = marked(content) as string
  return {
    slug,
    title:       data.title       ?? slug,
    date:        toDate(filename, data),
    description: data.description ?? data.excerpt ?? '',
    categories:  Array.isArray(data.categories) ? data.categories : [],
    contentHtml,
  }
}
