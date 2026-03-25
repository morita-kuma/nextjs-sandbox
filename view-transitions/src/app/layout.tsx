import Link from 'next/link';
import { ViewTransition } from 'react';
import './globals.css';

export const metadata = {
  title: 'View Transitions Demo — Next.js 16.2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <ViewTransition>
          <main>{children}</main>
        </ViewTransition>
      </body>
    </html>
  );
}
