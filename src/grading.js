// Normalizes an answer so that comparison ignores case, commas, periods,
// whitespace, and treats em dashes / en dashes / hyphens (and curly / straight quotes) as the same.
export function normalize(text) {
  return (text ?? '')
    .toLowerCase()
    .replace(/[‒–—―−]/g, '-') // figure/en/em dash, minus → hyphen
    .replace(/[‘’]/g, "'") // curly single quotes → straight
    .replace(/[“”]/g, '"') // curly double quotes → straight
    .replace(/[.,]/g, '')
    .replace(/\s+/g, '');
}

export function isCorrect(response, answer) {
  return normalize(response) !== '' && normalize(response) === normalize(answer);
}
