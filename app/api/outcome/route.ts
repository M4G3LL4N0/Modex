import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { input_id, success, actual_outcome, notes } = await req.json();

  if (!input_id) {
    return NextResponse.json({ error: "Missing input_id" }, { status: 400 });
  }

  // Get the prediction for this input
  const { data: prediction } = await supabase
    .from("predictions")
    .select("score")
    .eq("input_id", input_id)
    .single();

  if (!prediction) {
    return NextResponse.json(
      { error: "No prediction found for this input" },
      { status: 400 }
    );
  }

  // Calculate prediction accuracy
  const predictionAccuracy = Math.abs(prediction.score - (success ? 1 : 0));

  // Insert outcome with accuracy
  const { data } = await supabase.from("outcomes").insert([
    {
      input_id,
      success,
      actual_outcome,
      notes,
      prediction_accuracy: predictionAccuracy,
    },
  ]);

  return NextResponse.json({ success: true, data });
}
