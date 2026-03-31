export function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  
  return dotProduct / (magnitudeA * magnitudeB);
}

export async function findSimilarInputs(
  embedding: number[], 
  limit: number = 3
): Promise<{ content: string; outcome?: boolean }[]> {
  const { data: inputs } = await supabase
    .from("inputs")
    .select("content, embedding, predictions ( outcomes ( success ) )")
    .order("created_at", { ascending: false })
    .limit(10);

  if (!inputs) return [];

  // Calculate similarities and sort
  const withSimilarity = inputs.map(input => ({
    ...input,
    similarity: cosineSimilarity(embedding, input.embedding)
  }));

  // Get top N most similar
  const topSimilar = withSimilarity
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit);

  return topSimilar.map(input => ({
    content: input.content,
    outcome: input.predictions?.[0]?.outcomes?.[0]?.success
  }));
}
