import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { input_id, success, actual_outcome, notes } = await req.json();

    if (!input_id) {
      return NextResponse.json({ error: "Missing input_id" }, { status: 400 });
    }

    // 1. Get the prediction for this input
    const { data: prediction, error: predictionError } = await supabase
      .from("predictions")
      .select("score")
      .eq("input_id", input_id)
      .single();

    if (predictionError || !prediction) {
      return NextResponse.json(
        { error: "No prediction found for this input" },
        { status: 400 }
      );
    }

    // 2. Calculate accuracy
    const accuracy = success ? prediction.score : 1 - prediction.score;

    // 3. Insert outcome with accuracy
    const { error: insertError } = await supabase.from("outcomes").insert([
      {
        input_id,
        success,
        actual_outcome,
        notes,
        prediction_accuracy: accuracy,
      },
    ]);

    if (insertError) {
      throw new Error(insertError.message);
    }

    // 4. Return success with accuracy
    return NextResponse.json({ 
      success: true,
      accuracy
    });

  } catch (error) {
    console.error("Outcome error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to record outcome" },
      { status: 500 }
    );
  }
}
