import { runLLMDecision } from "./llm";
import { createEmbedding } from "./embedding";

export type PredictionResult = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

export async function runPrediction(
  input: string,
  context?: string
): Promise<PredictionResult> {
  // Create embedding for context
  const embedding = await createEmbedding(input);
  
  // Get structured decision from LLM
  const fullContext = [
    `Input embedding vector: ${JSON.stringify(embedding)}`,
    context,
  ].filter(Boolean).join('\n\n');
  
  const result = await runLLMDecision(input, fullContext);
  
  return {
    score: result.score,
    confidence: result.confidence,
    risk_level: result.risk_level,
    recommendation: result.recommendation,
  };
}
