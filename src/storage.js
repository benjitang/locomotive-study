import { definitionCategories, signalCategories } from './data/questions.js';

// Questions added through the app are saved in the browser (localStorage).
const STORAGE_KEY = 'locomotive-study:custom-questions';

export function loadCustomQuestions() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCustomQuestions(questions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
}

// Returns [{ category, questions }] for a type ('definitions' | 'signals'),
// merging built-in questions with custom ones. Custom questions in an existing
// category are appended to it; new categories are appended at the end.
export function getCategories(type, customQuestions) {
  const builtIn = type === 'definitions' ? definitionCategories : signalCategories;
  const groups = builtIn.map((g) => ({
    category: g.category,
    questions: g.questions.map((q) => ({ ...q, type })),
  }));
  for (const q of customQuestions.filter((c) => c.type === type)) {
    let group = groups.find((g) => g.category.toLowerCase() === q.category.toLowerCase());
    if (!group) {
      group = { category: q.category, questions: [] };
      groups.push(group);
    }
    group.questions.push(q);
  }
  return groups.filter((g) => g.questions.length > 0);
}

// Shrinks uploaded images so many of them fit within localStorage limits.
export function readImageFile(file, maxSize = 900) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read the image file.'));
    reader.onload = () => {
      const dataUrl = reader.result;
      if (file.type === 'image/svg+xml') return resolve(dataUrl);
      const img = new Image();
      img.onerror = () => reject(new Error('That file does not look like an image.'));
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/webp', 0.9));
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  });
}
