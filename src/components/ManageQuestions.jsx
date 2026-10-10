import { useState } from 'react';
import { getCategories, readImageFile } from '../storage.js';

export default function ManageQuestions({ customQuestions, onChange, onHome }) {
  const [type, setType] = useState('definitions');
  const [category, setCategory] = useState('');
  const [term, setTerm] = useState('');
  const [image, setImage] = useState(null);
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(0);

  const existingCategories = getCategories(type, customQuestions).map((g) => g.category);

  const handleImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return setImage(null);
    try {
      setImage(await readImageFile(file));
    } catch (err) {
      setMessage({ kind: 'error', text: err.message });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const cat = category.trim() || 'Added Questions';
    if (!answer.trim()) return setMessage({ kind: 'error', text: 'Please enter the answer.' });
    if (type === 'definitions' && !term.trim()) return setMessage({ kind: 'error', text: 'Please enter the term.' });
    if (type === 'signals' && !image) return setMessage({ kind: 'error', text: 'Please choose an image.' });

    const question = {
      id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type,
      category: cat,
      answer: answer.trim(),
      ...(type === 'definitions' ? { term: term.trim() } : { image }),
    };
    try {
      onChange([...customQuestions, question]);
    } catch {
      return setMessage({ kind: 'error', text: 'Browser storage is full — try a smaller image or delete some added questions.' });
    }
    setTerm('');
    setImage(null);
    setAnswer('');
    setFileInputKey((k) => k + 1);
    setMessage({ kind: 'ok', text: `Added to "${cat}".` });
  };

  const remove = (id) => {
    if (window.confirm('Delete this question?')) onChange(customQuestions.filter((q) => q.id !== id));
  };

  return (
    <main>
      <header className="page-header">
        <button className="link" onClick={onHome}>← Home</button>
        <h1>Add a Question</h1>
        <p className="muted">Added questions are saved in this browser.</p>
      </header>

      <form className="card form" onSubmit={submit}>
        <div className="toggle">
          {['definitions', 'signals'].map((t) => (
            <button
              type="button"
              key={t}
              className={type === t ? 'active' : 'secondary'}
              onClick={() => { setType(t); setMessage(null); }}
            >
              {t === 'definitions' ? 'Definition' : 'Signal'}
            </button>
          ))}
        </div>

        <label>
          Category
          <input
            list="category-options"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Pick an existing category or type a new one"
          />
          <datalist id="category-options">
            {existingCategories.map((c) => <option key={c} value={c} />)}
          </datalist>
        </label>

        {type === 'definitions' ? (
          <label>
            Term
            <input value={term} onChange={(e) => setTerm(e.target.value)} placeholder="e.g. Interlocking" />
          </label>
        ) : (
          <label>
            Signal image
            <input key={fileInputKey} type="file" accept="image/*" onChange={handleImage} />
            {image && <img className="signal-image preview" src={image} alt="Preview" />}
          </label>
        )}

        <label>
          {type === 'definitions' ? 'Definition (answer)' : 'Signal name (answer)'}
          <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} rows={type === 'definitions' ? 3 : 1} />
        </label>

        {message && <p className={message.kind === 'error' ? 'error' : 'ok'}>{message.text}</p>}
        <button type="submit">Add question</button>
      </form>

      <h2 className="category-heading">Your added questions ({customQuestions.length})</h2>
      {customQuestions.length === 0 && <p className="muted">None yet.</p>}
      {customQuestions.map((q) => (
        <div key={q.id} className="card added-row">
          {q.type === 'signals' ? <img className="thumb" src={q.image} alt="" /> : <strong>{q.term}</strong>}
          <div className="added-info">
            <span className="muted small">{q.type === 'signals' ? 'Signal' : 'Definition'} · {q.category}</span>
            <span>{q.answer}</span>
          </div>
          <button className="danger" onClick={() => remove(q.id)}>Delete</button>
        </div>
      ))}
    </main>
  );
}
