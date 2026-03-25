export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '16px' }}>Home</h1>
      <p style={{ color: '#a1a1aa', lineHeight: 1.8, fontSize: '1.1rem' }}>
        Next.js 16.2 の <code>View Transitions API</code> デモです。
        上のナビゲーションをクリックすると、ページコンテンツがフェードアニメーションで滑らかに切り替わります。
      </p>
      <p style={{ color: '#a1a1aa', lineHeight: 1.8, fontSize: '1.1rem', marginTop: '16px' }}>
        ナビゲーションバーは <code>&lt;ViewTransition&gt;</code> の外にあるため、遷移の影響を受けずそのまま表示され続けます。
      </p>
    </div>
  );
}
