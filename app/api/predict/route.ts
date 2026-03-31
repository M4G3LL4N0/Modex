import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { runPrediction } from "@/lib/engine/predict";

export async function POST(req: Request) {
  const { content, user_id } = await req.json();

  if (!content) {
    return NextResponse.json({ error: "Missing content" }, { status: 400 });
  }

  // Generate embedding
  const embedding = await createEmbedding(content);

  // Store input with embedding
  const { data: input } = await supabase
    .from("inputs")
    .insert([{ content, user_id, embedding }])
    .select()
    .single();

  // Run prediction
  const result = await runPrediction(content);

  // Store prediction
  await supabase.from("predictions").insert([
    {
      input_id: input.id,
      score: result.score,
      confidence: result.confidence,
      risk_level: result.risk_level,
      recommendation: result.recommendation,
    },
  ]);

  return NextResponse.json({
    input,
    prediction: result,
  });
}
