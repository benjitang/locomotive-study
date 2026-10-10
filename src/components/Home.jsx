import { useState } from 'react';
import { getCategories } from '../storage.js';

const TYPES = [
  { type: 'definitions', label: 'Definitions' },
  { type: 'signals', label: 'Signals' },
];

export default function Home({ customQuestions, practiceSizes, onPracticeSizesChange, onStart, onAnswerKey, onManage }) {
  const counts = Object.fromEntries(
    TYPES.map(({ type }) => [
      type,
      getCategories(type, customQuestions).reduce((sum, g) => sum + g.questions.length, 0),
    ])
  );

  // Kept as text so the box can be cleared while typing; saved only when it's a valid number.
  const [drafts, setDrafts] = useState(() => ({ ...practiceSizes }));
  const setSize = (type, value) => {
    setDrafts({ ...drafts, [type]: value });
    const n = Math.floor(Number(value));
    if (n >= 1) onPracticeSizesChange({ ...practiceSizes, [type]: n });
  };

  return (
    <main>
      <header className="page-header">
        <h1>LIRR Locomotive Engineer Study</h1>
        <p className="muted">Pick a practice test to begin.</p>
      </header>

      {TYPES.map(({ type, label }) => {
        const practiceCount = Math.min(practiceSizes[type], counts[type]);
        const modes = [
          { mode: 'practice', title: 'Practice Test', blurb: `${practiceCount} random questions, no headings. Like the real exam.` },
          { mode: 'random', title: 'Random', blurb: `All ${counts[type]} questions shuffled, no headings.` },
          { mode: 'ordered', title: 'Ordered', blurb: 'All questions grouped by category with headings.' },
        ];
        return (
          <section key={type} className="home-section">
            <h2 className="category-heading">{label}</h2>
            <div className="mode-grid">
              {modes.map((m) => (
                <button key={m.mode} className="mode-card" onClick={() => onStart(type, m.mode)}>
                  <span className="mode-title">{label} — {m.title}</span>
                  <span className="muted">{m.blurb}</span>
                </button>
              ))}
              <button className="mode-card key-card" onClick={() => onAnswerKey(type)}>
                <span className="mode-title">{label} — Answer Key</span>
                <span className="muted">Every question with its answer, by category.</span>
              </button>
            </div>
          </section>
        );
      })}

      <section className="card settings">
        <h2>Practice test length</h2>
        <p className="muted small">Number of questions in each practice test. If it's more than the questions available, all of them are used.</p>
        <div className="settings-row">
          {TYPES.map(({ type, label }) => (
            <label key={type}>
              {label}
              <input
                type="number"
                min="1"
                value={drafts[type]}
                onChange={(e) => setSize(type, e.target.value)}
                onBlur={() => setDrafts({ ...drafts, [type]: practiceSizes[type] })}
              />
              <span className="muted small">{counts[type]} available</span>
            </label>
          ))}
        </div>
      </section>

      <div className="home-footer">
        <button className="secondary" onClick={onManage}>+ Add / manage questions</button>
      </div>
    </main>
  );
}
