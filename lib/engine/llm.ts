import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type LLMDecision = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

export async function runLLMDecision(input: string, context: string): Promise<LLMDecision> {
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

  const result = JSON.parse(response.choices[0].message.content || "{}");
  return result as LLMDecision;
}
