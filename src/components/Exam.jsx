import { useEffect, useMemo, useState } from 'react';
import { getCategories } from '../storage.js';
import { isCorrect } from '../grading.js';

function formatTime(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const MODE_LABELS = { ordered: 'Ordered', random: 'Random', practice: 'Practice Test' };

// mode: 'ordered' (grouped with headings), 'random' (all shuffled, no headings),
// or 'practice' (shuffled, no headings, limited to `limit` questions).
export default function Exam({ type, mode, limit, customQuestions, onHome, onRetake }) {
  // Sections are fixed for the life of this exam (re-shuffled on retake).
  const sections = useMemo(() => {
    const groups = getCategories(type, customQuestions);
    if (mode === 'ordered') return groups;
    const shuffled = shuffle(groups.flatMap((g) => g.questions));
    return [{ category: null, questions: mode === 'practice' ? shuffled.slice(0, limit) : shuffled }];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const allQuestions = sections.flatMap((s) => s.questions);

  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [startTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);

  // Timer ticks until the exam is submitted; it starts over whenever the exam is re-mounted.
  useEffect(() => {
    if (submitted) return;
    const tick = () => setElapsed(Math.floor((Date.now() - startTime) / 1000));
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [submitted, startTime]);

  // Warn before closing or reloading the tab mid-exam.
  useEffect(() => {
    if (submitted) return;
    const warn = (e) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [submitted]);

  const leave = () => {
    const message = submitted
      ? 'Leave this test? Your results will not be saved.'
      : 'Leave this test? Your answers and timer will be lost.';
    if (window.confirm(message)) onHome();
  };
  const [overrides, setOverrides] = useState(() => new Set());

  const autoCorrect = (q) => isCorrect(responses[q.id], q.answer);
  const correctCount = allQuestions.filter((q) => autoCorrect(q) || overrides.has(q.id)).length;
  const total = allQuestions.length;
  const percent = total ? Math.round((correctCount / total) * 100) : 0;

  const submit = () => {
    const blank = allQuestions.filter((q) => !(responses[q.id] ?? '').trim()).length;
    if (blank && !window.confirm(`You left ${blank} question${blank > 1 ? 's' : ''} blank. Submit anyway?`)) return;
    setElapsed(Math.floor((Date.now() - startTime) / 1000));
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleOverride = (id) =>
    setOverrides((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const title = `${type === 'definitions' ? 'Definitions' : 'Signals'} — ${MODE_LABELS[mode]}`;
  let number = 0;

  return (
    <main>
      <header className="page-header exam-header">
        <div className="exam-topbar">
          <button className="link" onClick={leave}>← Home</button>
          <span className={`timer ${submitted ? 'stopped' : ''}`} aria-label="Elapsed time">
            ⏱ {formatTime(elapsed)}
          </span>
        </div>
        <h1>{title}</h1>
        {submitted && (
          <div className={`score ${percent >= 80 ? 'pass' : 'fail'}`}>
            <span className="score-big">{percent}%</span>
            <span>{correctCount} / {total} correct</span>
            {overrides.size > 0 && <span className="muted small">({overrides.size} manually marked correct)</span>}
          </div>
        )}
      </header>

      {total === 0 && <p className="muted">No questions yet. Add some from the home page.</p>}

      {sections.map((section) => (
        <section key={section.category ?? 'all'}>
          {section.category && <h2 className="category-heading">{section.category}</h2>}
          {section.questions.map((q) => {
            number += 1;
            const auto = autoCorrect(q);
            const overridden = overrides.has(q.id);
            const status = !submitted ? '' : auto ? 'correct' : overridden ? 'overridden' : 'wrong';
            return (
              <div key={q.id} className={`question ${status}`}>
                <div className="question-prompt">
                  <span className="question-number">{number}.</span>
                  {type === 'definitions' ? (
                    <span className="term">{q.term}</span>
                  ) : (
                    <img className="signal-image" src={q.image} alt={`Signal ${number}`} />
                  )}
                </div>
                <textarea
                  value={responses[q.id] ?? ''}
                  onChange={(e) => setResponses({ ...responses, [q.id]: e.target.value })}
                  readOnly={submitted}
                  rows={type === 'definitions' ? 3 : 1}
                  placeholder={type === 'definitions' ? 'Type the definition…' : 'Name this signal…'}
                />
                {submitted && !auto && (
                  <div className="feedback">
                    <div className="correct-answer"><strong>Correct answer:</strong> {q.answer}</div>
                    <label className="override">
                      <input type="checkbox" checked={overridden} onChange={() => toggleOverride(q.id)} />
                      Mark as correct (e.g. spelling mistake)
                    </label>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      ))}

      <div className="exam-actions">
        {!submitted ? (
          total > 0 && <button onClick={submit}>Submit</button>
        ) : (
          <>
            <button onClick={onRetake}>Retake</button>
            <button className="secondary" onClick={leave}>Home</button>
          </>
        )}
      </div>
    </main>
  );
}
