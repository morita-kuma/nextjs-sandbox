import Link from 'next/link';
import { ViewTransition } from 'react';

const posts = [
  { slug: 'nextjs-16', title: 'Next.js 16 がリリース', date: '2026-02-24', tag: 'Next.js', color: '#818cf8' },
  { slug: 'typescript-7', title: 'TypeScript 7.0 の新機能まとめ', date: '2026-02-10', tag: 'TypeScript', color: '#3178c6' },
  { slug: 'react-19', title: 'React 19 と Server Components', date: '2026-01-15', tag: 'React', color: '#58c4dc' },
];

export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '24px' }}>Posts</h1>
      {posts.map((post) => (
        <Link key={post.slug} href={`/post/${post.slug}`} className="post-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#71717a' }}>{post.date}</span>
            <ViewTransition name={`post-tag-${post.slug}`}>
              <span style={{ display: 'inline-block', fontSize: '0.7rem', color: post.color, fontWeight: 600, border: `1px solid ${post.color}33`, borderRadius: '4px', padding: '2px 8px' }}>
                {post.tag}
              </span>
            </ViewTransition>
          </div>
          <ViewTransition name={`post-title-${post.slug}`}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ededed', margin: 0, display: 'inline-block' }}>
              {post.title}
            </h2>
          </ViewTransition>
        </Link>
      ))}
    </div>
  );
}
