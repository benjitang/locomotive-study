import { useState } from 'react';
import Home from './components/Home.jsx';
import Exam from './components/Exam.jsx';
import AnswerKey from './components/AnswerKey.jsx';
import ManageQuestions from './components/ManageQuestions.jsx';
import {
  loadCustomQuestions,
  saveCustomQuestions,
  loadPracticeSizes,
  savePracticeSizes,
} from './storage.js';

export default function App() {
  const [view, setView] = useState({ name: 'home' });
  const [customQuestions, setCustomQuestions] = useState(loadCustomQuestions);
  const [practiceSizes, setPracticeSizes] = useState(loadPracticeSizes);

  const updateCustomQuestions = (next) => {
    saveCustomQuestions(next); // throws if storage is full, leaving state unchanged
    setCustomQuestions(next);
  };

  const updatePracticeSizes = (next) => {
    savePracticeSizes(next);
    setPracticeSizes(next);
  };

  const goHome = () => setView({ name: 'home' });

  return (
    <div className="app">
      {view.name === 'home' && (
        <Home
          customQuestions={customQuestions}
          practiceSizes={practiceSizes}
          onPracticeSizesChange={updatePracticeSizes}
          onStart={(type, mode) => setView({ name: 'exam', type, mode, key: Date.now() })}
          onAnswerKey={(type) => setView({ name: 'key', type })}
          onManage={() => setView({ name: 'manage' })}
        />
      )}
      {view.name === 'exam' && (
        <Exam
          key={view.key}
          type={view.type}
          mode={view.mode}
          limit={practiceSizes[view.type]}
          customQuestions={customQuestions}
          onHome={goHome}
          onRetake={() => setView({ ...view, key: Date.now() })}
        />
      )}
      {view.name === 'key' && (
        <AnswerKey type={view.type} customQuestions={customQuestions} onHome={goHome} />
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
