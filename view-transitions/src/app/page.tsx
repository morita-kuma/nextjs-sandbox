export default function Home() {
  return (
    <div>
      <h1>🏠 Home</h1>
      <p>
        Next.js 16.2 の <code>View Transitions API</code> デモです。
        上のナビゲーションをクリックすると、ページコンテンツがフェードアニメーションで滑らかに切り替わります。
      </p>
      <p style={{ marginTop: '16px' }}>
        ナビゲーションバーは <code>&lt;ViewTransition&gt;</code> の外にあるため、遷移の影響を受けずそのまま表示され続けます。
      </p>
    </div>
  );
}
