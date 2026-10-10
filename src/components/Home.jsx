const MODES = [
  { type: 'definitions', random: false, title: 'Definitions — Ordered', blurb: 'Grouped by category with headings, in a fixed order.' },
  { type: 'definitions', random: true, title: 'Definitions — Random', blurb: 'Shuffled, no headings. Simulates the real exam.' },
  { type: 'signals', random: false, title: 'Signals — Ordered', blurb: 'Grouped by category with headings, in a fixed order.' },
  { type: 'signals', random: true, title: 'Signals — Random', blurb: 'Shuffled, no headings. Simulates the real exam.' },
];

export default function Home({ onStart, onManage }) {
  return (
    <main>
      <header className="page-header">
        <h1>LIRR Locomotive Engineer Study</h1>
        <p className="muted">Pick a practice test to begin.</p>
      </header>

      <div className="mode-grid">
        {MODES.map((m) => (
          <button key={m.title} className="mode-card" onClick={() => onStart(m.type, m.random)}>
            <span className="mode-title">{m.title}</span>
            <span className="muted">{m.blurb}</span>
          </button>
        ))}
      </div>

      <div className="home-footer">
        <button className="secondary" onClick={onManage}>+ Add / manage questions</button>
      </div>
    </main>
  );
}
