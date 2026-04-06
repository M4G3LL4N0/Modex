export async function createEmbedding(input: string): Promise<number[]> {
  if (typeof input !== 'string') {
    return Array(64).fill(0);
  }
  if (!input) return Array.from({length: 64}, () => 0);

  // Stable deterministic fallback
  const hash = Array.from(input).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return Array.from({length: 64}, (_, i) => {
    // Use hash + position to generate stable value between -1 and 1
    const seed = hash * (i + 1);
    return Math.sin(seed % 1000) * 0.5; // Scale to [-0.5, 0.5] range
  });
}
