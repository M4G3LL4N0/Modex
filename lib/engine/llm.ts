import { getClient } from "./embedding";

export type LLMDecision = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

function normalizeRiskLevel(level: string): "low" | "moderate" | "high" {
  const lower = level.toLowerCase();
  if (lower.includes("high")) return "high";
  if (lower.includes("moderate") || lower.includes("medium")) return "moderate";
  return "low";
}

function clamp(value: number): number {
  return Math.max(0, Math.min(1, value));
}

export async function runLLMDecision(
  input: string, 
  context: string
): Promise<LLMDecision> {
  try {
    const response = await getClient().chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a decision engine. Respond ONLY with valid JSON containing:
- score (0-1): success likelihood
- confidence (0-1): prediction certainty  
- risk_level (low|moderate|high)
- recommendation: string
Context:\n${context}`
        },
        { role: "user", content: input }
      ],
      response_format: { type: "json_object" }
    });

    const content = response.choices[0]?.message?.content;
    if (!content) throw new Error("Empty LLM response");

    const result = JSON.parse(content) as Partial<LLMDecision>;
    
    // Validate and normalize response
    const safeResult: LLMDecision = {
      score: clamp(typeof result.score === 'number' ? result.score : 0.5),
      confidence: clamp(typeof result.confidence === 'number' ? result.confidence : 0.5),
      risk_level: result.risk_level ? normalizeRiskLevel(result.risk_level) : "moderate",
      recommendation: typeof result.recommendation === 'string' 
        ? result.recommendation 
        : "No recommendation available"
    };

    return safeResult;
  } catch (error) {
    console.error("LLM Error:", error);
    return {
      score: 0.5,
      confidence: 0.5,
      risk_level: "moderate",
      recommendation: "System temporarily unavailable"
    };
  }
}
