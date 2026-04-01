export function cosineSimilarity(a: number[], b: number[]): number {
  if (!Array.isArray(a) || !Array.isArray(b)) return 0;
  if (a.length !== b.length || a.length === 0) return 0;
  
  // Handle potential NaN values
  a = a.map(x => Number.isFinite(x) ? x : 0);
  b = b.map(x => Number.isFinite(x) ? x : 0);
  
  let dot = 0, magA = 0, magB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}
