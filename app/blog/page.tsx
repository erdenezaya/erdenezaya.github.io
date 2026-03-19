import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Posts on AI, software engineering, and building with LLMs.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main>
      <div className="page-wrapper">
        <div className="blog-page">
          <h1>Writing</h1>
          <ul className="post-list">
            {posts.map(post => (
              <li key={post.slug}>
                <span className="post-date">{post.date}</span>
                <h3 className="post-list-title">
                  <Link href={`/blog/${post.slug}`} className="post-list-link">
                    {post.title}
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
