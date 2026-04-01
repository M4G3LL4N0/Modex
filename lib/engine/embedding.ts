import OpenAI from "openai";

let openai: OpenAI | null = null;

function getClient(): OpenAI {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required");
  }
  if (!openai) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }
  return openai;
}

export async function createEmbedding(text: string): Promise<number[]> {
  if (!text?.trim()) {
    throw new Error("Text cannot be empty");
  }

  try {
    const response = await getClient().embeddings.create({
      input: text,
      model: "text-embedding-3-small",
    });
    
    if (!response.data?.[0]?.embedding) {
      throw new Error("No embedding returned");
    }
    return response.data[0].embedding;
  } catch (error) {
    console.error("Embedding Error:", error);
    // Return zero vector matching expected dimensions
    return Array(1536).fill(0);
  }
}
