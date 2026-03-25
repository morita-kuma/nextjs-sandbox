export default function About() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '16px' }}>About</h1>
      <p style={{ color: '#a1a1aa', lineHeight: 1.8, fontSize: '1.1rem' }}>
        このページは <code>View Transitions API</code> によるアニメーション付きで表示されています。
        ブラウザネイティブの仕組みで、フルページリロードなしのスムーズな遷移を実現しています。
      </p>
      <p style={{ color: '#a1a1aa', lineHeight: 1.8, fontSize: '1.1rem', marginTop: '16px' }}>
        ライブラリは不要です。<code>next.config.ts</code> に1行追加するだけで有効化できます。
      </p>
    </div>
  );
}
