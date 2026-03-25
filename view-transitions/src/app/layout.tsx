import Link from 'next/link';

export const metadata = {
  title: 'View Transitions Demo — Next.js 16.2',
};

const posts = [
  { slug: 'view-transitions', title: 'View Transitions APIがNext.jsに登場', date: '2026-03-18', author: 'るい', color: '#818cf8' },
  { slug: 'react-compiler', title: 'React Compilerで自動メモ化', date: '2026-03-15', author: 'かい', color: '#34d399' },
  { slug: 'v0-update', title: 'v0の最新アップデートを試す', date: '2026-03-10', author: 'そら', color: '#c084fc' },
];

// レイアウトからpostsをエクスポートして子ページでも使えるようにする
export { posts };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#0a0a0a', color: '#ededed' }}>
        <style>{`
          /* 共有要素トランジション: 位置・サイズを自動補間 */
          ::view-transition-group(*) {
            animation-duration: 300ms;
            animation-timing-function: ease-in-out;
          }
          @media (prefers-reduced-motion: reduce) {
            ::view-transition-group(*) { animation-duration: 0ms !important; }
          }
          a { color: #818cf8; text-decoration: none; font-weight: 600; transition: color 0.15s; }
          a:hover { color: #a5b4fc; }
          .post-card {
            display: block;
            border: 1px solid #27272a;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 12px;
            background: #1a1a1a;
            transition: border-color 0.15s;
            text-decoration: none;
          }
          .post-card:hover { border-color: #3f3f46; }
        `}</style>
        <nav style={{ display: 'flex', gap: '24px', padding: '20px 32px', borderBottom: '1px solid #27272a', background: '#111' }}>
          <Link href="/">Blog</Link>
        </nav>
        <main style={{ padding: '48px 32px', maxWidth: '700px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
