import { openai } from "./openai";

export async function createEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    input: text,
    model: "text-embedding-3-small",
  });
  
  return response.data[0].embedding;
}
