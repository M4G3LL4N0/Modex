export async function createEmbedding(input: string): Promise<number[]> {
  // Fallback deterministic embedding if no API key
  if (!process.env.OPENAI_API_KEY) {
    const hash = Array.from(input).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return Array.from({length: 64}, (_, i) => Math.sin(hash + i));
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const res = await client.embeddings.create({
    model: "text-embedding-3-small",
    input,
  });

  return res.data[0].embedding;
}
