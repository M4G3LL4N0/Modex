import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runLLMDecision(input: string, context: string) {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Return JSON with score (0-1), confidence (0-1), risk_level (low/moderate/high), recommendation.",
      },
      {
        role: "user",
        content: `Input: ${input}\nContext: ${context}`,
      },
    ],
  });

  const text = res.choices[0].message.content || "{}";

  try {
    const parsed = JSON.parse(text);

    return {
      score: Math.max(0, Math.min(1, parsed.score ?? 0.5)),
      confidence: Math.max(0, Math.min(1, parsed.confidence ?? 0.5)),
      risk_level: parsed.risk_level ?? "moderate",
      recommendation: parsed.recommendation ?? "No recommendation",
    };
  } catch {
    return {
      score: 0.5,
      confidence: 0.5,
      risk_level: "moderate",
      recommendation: "Fallback response",
    };
  }
}
