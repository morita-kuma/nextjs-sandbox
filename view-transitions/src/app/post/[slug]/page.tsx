import Link from 'next/link';
import { ViewTransition } from 'react';

const posts: Record<string, { title: string; date: string; tag: string; color: string; body: string }> = {
  'nextjs-16': {
    title: 'Next.js 16 がリリース',
    date: '2026-02-24',
    tag: 'Next.js',
    color: '#818cf8',
    body: 'Next.js 16 では React 19 が正式にサポートされ、Turbopack がデフォルトのバンドラーになりました。App Router のパフォーマンスも大幅に改善され、Server Components のレンダリングが最大60%高速化されています。また、新しい Adapters API によりデプロイプラットフォームごとのカスタマイズが可能になりました。',
  },
  'typescript-7': {
    title: 'TypeScript 7.0 の新機能まとめ',
    date: '2026-02-10',
    tag: 'TypeScript',
    color: '#3178c6',
    body: 'TypeScript 7.0 ではコンパイラが Go で書き直され、ビルド速度が10倍以上高速化されました。型推論の精度も向上し、より複雑な型パターンを正確に推論できるようになっています。また、新しい型演算子やデコレータの改善も含まれています。',
  },
  'react-19': {
    title: 'React 19 と Server Components',
    date: '2026-01-15',
    tag: 'React',
    color: '#58c4dc',
    body: 'React 19 では Server Components が安定版になり、use() フックや Server Actions が正式にサポートされました。また、ドキュメントメタデータの直接レンダリングや、スタイルシートの優先度制御など、開発者体験を大きく改善する機能が多数追加されています。',
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Link href="/" style={{ fontSize: '0.85rem', color: '#71717a', display: 'inline-block', marginBottom: '24px' }}>
        ← Back to posts
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <span style={{ fontSize: '0.8rem', color: '#71717a' }}>{post.date}</span>
        <ViewTransition name={`post-tag-${slug}`}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', color: post.color, fontWeight: 600, border: `1px solid ${post.color}33`, borderRadius: '4px', padding: '2px 8px' }}>
            {post.tag}
          </span>
        </ViewTransition>
      </div>

      <ViewTransition name={`post-title-${slug}`}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, display: 'inline-block' }}>
          {post.title}
        </h1>
      </ViewTransition>

      <ViewTransition enter="auto" update="none">
        <div style={{ color: '#a1a1aa', lineHeight: 1.9, fontSize: '1rem', borderTop: '1px solid #27272a', paddingTop: '24px', marginTop: '32px' }}>
          {post.body}
        </div>
      </ViewTransition>
    </div>
  );
}
