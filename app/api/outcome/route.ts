import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function POST(req: Request) {
  try {
    // Validate request
    if (!req.body) {
      return NextResponse.json(
        { error: "Request body is required" },
        { status: 400 }
      );
    }

    const { input_id, success, actual_outcome, notes } = await req.json().catch(() => ({}));

    if (!input_id || typeof input_id !== 'string') {
      return NextResponse.json(
        { error: "Valid input_id string is required" },
        { status: 400 }
      );
    }

    if (typeof success !== 'boolean') {
      return NextResponse.json(
        { error: "Valid success boolean is required" },
        { status: 400 }
      );
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
        prediction_accuracy: parseFloat(accuracy.toFixed(4)), // Store as float with 4 decimal places
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
