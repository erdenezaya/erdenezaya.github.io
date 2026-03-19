import type { Metadata } from 'next'
import { getAllSlugs, getPost } from '@/lib/posts'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = getPost(slug)
    return { title: post.title, description: post.description }
  } catch {
    return {}
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  let post
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }

  return (
    <main>
      <div className="page-wrapper">
        <article className="post-page">
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta-line">
              <time dateTime={post.date}>{post.date}</time>
              {post.categories.length > 0 && (
                <span style={{ color: 'var(--text-faint)' }}>
                  {post.categories.join(', ')}
                </span>
              )}
            </div>
          </header>
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>
    </main>
  )
}
