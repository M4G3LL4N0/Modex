import { openai } from "./openai";

export async function createEmbedding(text: string): Promise<number[]> {
  if (!text || typeof text !== 'string') {
    throw new Error("Invalid text input for embedding");
  }

  try {
    const response = await openai.embeddings.create({
    input: text,
    model: "text-embedding-3-small",
  });
  
    if (!response.data?.[0]?.embedding) {
      throw new Error("No embedding returned from API");
    }
    return response.data[0].embedding;
  } catch (error) {
    console.error("Embedding Error:", error);
    // Return a zero vector as fallback
    return Array(1536).fill(0);
  }
}
