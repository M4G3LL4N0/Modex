import OpenAI from "openai";

export async function createEmbedding(input: string): Promise<number[]> {
  if (!input) return Array.from({length: 64}, () => 0);

  // Deterministic fallback
  const hash = Array.from(input).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const fallback = Array.from({length: 64}, (_, i) => Math.sin(hash + i));

  // Optional OpenAI if available
  if (process.env.OPENAI_API_KEY) {
    try {
      const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const res = await client.embeddings.create({
        model: "text-embedding-3-small",
        input,
      });

      return res.data[0].embedding;
    } catch (error) {
      console.error("OpenAI embedding failed, using fallback:", error);
    }
  }

  return fallback;
}
