import { useState } from 'react';
import Home from './components/Home.jsx';
import Exam from './components/Exam.jsx';
import ManageQuestions from './components/ManageQuestions.jsx';
import { loadCustomQuestions, saveCustomQuestions } from './storage.js';

export default function App() {
  const [view, setView] = useState({ name: 'home' });
  const [customQuestions, setCustomQuestions] = useState(loadCustomQuestions);

  const updateCustomQuestions = (next) => {
    saveCustomQuestions(next); // throws if storage is full, leaving state unchanged
    setCustomQuestions(next);
  };

  const goHome = () => setView({ name: 'home' });

  return (
    <div className="app">
      {view.name === 'home' && (
        <Home
          onStart={(type, random) => setView({ name: 'exam', type, random, key: Date.now() })}
          onManage={() => setView({ name: 'manage' })}
        />
      )}
      {view.name === 'exam' && (
        <Exam
          key={view.key}
          type={view.type}
          random={view.random}
          customQuestions={customQuestions}
          onHome={goHome}
          onRetake={() => setView({ ...view, key: Date.now() })}
        />
      )}
      {view.name === 'manage' && (
        <ManageQuestions
          customQuestions={customQuestions}
          onChange={updateCustomQuestions}
          onHome={goHome}
        />
      )}
    </div>
  );
}
