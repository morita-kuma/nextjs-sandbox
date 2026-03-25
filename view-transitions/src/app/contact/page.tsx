export default function Contact() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '16px' }}>Contact</h1>
      <p style={{ color: '#a1a1aa', lineHeight: 1.8, fontSize: '1.1rem' }}>
        View Transitions はレイアウト（ナビゲーションバー）を保持したまま、
        ページコンテンツ部分だけをアニメーションで切り替えます。
      </p>
      <p style={{ color: '#a1a1aa', lineHeight: 1.8, fontSize: '1.1rem', marginTop: '16px' }}>
        Chrome / Edge で動作します。非対応ブラウザではアニメーションなしの通常遷移にフォールバックします。
      </p>
    </div>
  );
}
