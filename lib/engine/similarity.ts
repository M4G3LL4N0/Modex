export function cosineSimilarity(a: number[], b: number[]): number {
  if (!Array.isArray(a) || !Array.isArray(b)) return 0;
  
  const len = Math.min(a.length, b.length);
  if (len === 0) return 0;

  // Clean vectors
  const cleanA = a.slice(0, len).map(x => Number.isFinite(x) ? x : 0);
  const cleanB = b.slice(0, len).map(x => Number.isFinite(x) ? x : 0);

  let dot = 0, magA = 0, magB = 0;
  
  for (let i = 0; i < len; i++) {
    dot += cleanA[i] * cleanB[i];
    magA += cleanA[i] * cleanA[i];
    magB += cleanB[i] * cleanB[i];
  }

  const magnitude = Math.sqrt(magA) * Math.sqrt(magB);
  return magnitude > 0 ? dot / magnitude : 0;
}
