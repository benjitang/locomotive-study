import { getCategories } from '../storage.js';

export default function AnswerKey({ type, customQuestions, onHome }) {
  const groups = getCategories(type, customQuestions);
  const total = groups.reduce((sum, g) => sum + g.questions.length, 0);
  let number = 0;

  return (
    <main>
      <header className="page-header">
        <button className="link" onClick={onHome}>← Home</button>
        <h1>{type === 'definitions' ? 'Definitions' : 'Signals'} — Answer Key</h1>
        <p className="muted">{total} questions in {groups.length} categories.</p>
      </header>

      {groups.map((group) => (
        <section key={group.category}>
          <h2 className="category-heading">{group.category}</h2>
          {group.questions.map((q) => {
            number += 1;
            return (
              <div key={q.id} className="question key-item">
                <div className="question-prompt">
                  <span className="question-number">{number}.</span>
                  {type === 'definitions' ? (
                    <span className="term">{q.term}</span>
                  ) : (
                    <img className="signal-image" src={q.image} alt={q.answer} />
                  )}
                </div>
                <div className="correct-answer">{q.answer}</div>
              </div>
            );
          })}
        </section>
      ))}
    </main>
  );
}
