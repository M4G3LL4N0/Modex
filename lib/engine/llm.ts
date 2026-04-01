import { openai } from "./openai";

export type LLMDecision = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

export async function runLLMDecision(input: string, context: string): Promise<LLMDecision> {
  try {
    const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview", // Updated to latest model
    messages: [
      {
        role: "system",
        content: `You are a machine intelligence decision engine. Output structured JSON with:
- score (0-1): likelihood of success
- confidence (0-1): certainty in prediction
- risk_level (low/moderate/high): risk assessment
- recommendation: actionable advice
Context: ${context}`,
      },
      {
        role: "user",
        content: input,
      },
    ],
    response_format: { type: "json_object" },
  });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error("No content in LLM response");
    }

    const result = JSON.parse(content);
    
    // Validate response structure
    if (typeof result.score !== 'number' || 
        typeof result.confidence !== 'number' ||
        !['low','moderate','high'].includes(result.risk_level) ||
        typeof result.recommendation !== 'string') {
      throw new Error("Invalid LLM response format");
    }

    return result as LLMDecision;
  } catch (error) {
    console.error("LLM Error:", error);
    // Return safe fallback
    return {
      score: 0.5,
      confidence: 0.5,
      risk_level: "moderate",
      recommendation: "Unable to generate recommendation at this time"
    };
  }
}
