export default function About() {
  return (
    <div>
      <h1>📖 About</h1>
      <p>
        このページは <code>View Transitions API</code> によるアニメーション付きで表示されています。
        ブラウザネイティブの仕組みで、フルページリロードなしのスムーズな遷移を実現しています。
      </p>
      <p style={{ marginTop: '16px' }}>
        ライブラリは不要です。<code>next.config.ts</code> に1行追加するだけで有効化できます。
      </p>
    </div>
  );
}
