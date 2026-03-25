import Link from 'next/link';
import { ViewTransition } from 'react';

export const metadata = {
  title: 'View Transitions Demo — Next.js 16.2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#0a0a0a', color: '#ededed' }}>
        <style>{`
          ::view-transition-old(*) { animation: vt-fade-out 200ms ease-out; }
          ::view-transition-new(*) { animation: vt-fade-in 200ms ease-in; }
          @keyframes vt-fade-out { from { opacity: 1; } to { opacity: 0; } }
          @keyframes vt-fade-in { from { opacity: 0; } to { opacity: 1; } }
          @media (prefers-reduced-motion: reduce) {
            ::view-transition-old(*), ::view-transition-new(*) { animation: none !important; }
          }
          a { color: #818cf8; text-decoration: none; font-weight: 600; transition: color 0.15s; }
          a:hover { color: #a5b4fc; }
          code { background: #27272a; color: #c4b5fd; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
        `}</style>
        <nav style={{ display: 'flex', gap: '24px', padding: '20px 32px', borderBottom: '1px solid #27272a', background: '#111' }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <ViewTransition>
          <main style={{ padding: '48px 32px', maxWidth: '800px' }}>
            {children}
          </main>
        </ViewTransition>
      </body>
    </html>
  );
}
