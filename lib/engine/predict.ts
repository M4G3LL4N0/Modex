import { createEmbedding } from "./embedding";
import { runLLMDecision } from "./llm";

export type PredictionResult = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

export async function runPrediction(
  input: string
): Promise<PredictionResult> {
  // 1. Create embedding for the input
  const embedding = await createEmbedding(input);

  // 2. Placeholder for fetching similar past inputs (will be JSONB embeddings)
  const similarInputs: Array<{
    id: string;
    content: string;
    embedding: string;
    outcome?: boolean;
  }> = []; // TODO: Implement similarity search
  
  // 3. Prepare context including embedding info
  const context = [
    "Similarity Analysis Context:",
    `- Input embedding created (${embedding.length}d vector)`,
    `- Found ${similarInputs.length} similar historical inputs`,
  ].join("\n");

  // 4. Get structured decision from LLM
  const result = await runLLMDecision(input, context);
  
  return {
    score: result.score,
    confidence: result.confidence,
    risk_level: result.risk_level,
    recommendation: result.recommendation,
  };
}
