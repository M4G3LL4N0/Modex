export type PredictionResult = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

// Simple v1 scoring engine (replace later with ML)
export function runPrediction(input: string): PredictionResult {
  const lengthScore = Math.min(input.length / 200, 1);

  const keywordRisk =
    input.includes("risk") || input.includes("uncertain") ? 0.3 : 0;

  const score = Math.max(0.2, Math.min(0.9, lengthScore - keywordRisk));

  const confidence = 0.6 + Math.random() * 0.3;

  let risk_level: PredictionResult["risk_level"] = "low";
  if (score < 0.4) risk_level = "high";
  else if (score < 0.65) risk_level = "moderate";

  const recommendation =
    score > 0.7
      ? "Proceed. Strong signal."
      : score > 0.5
      ? "Proceed with caution. Validate assumptions."
      : "High risk. Re-evaluate before acting.";

  return {
    score,
    confidence,
    risk_level,
    recommendation,
  };
}
