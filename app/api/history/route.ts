import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export type HistoryItem = {
  id: string;
  created_at: string;
  input: {
    id: string;
    content: string;
    created_at: string;
  };
  prediction: {
    score: number;
    confidence: number;
    risk_level: string;
    recommendation: string;
  };
  outcome?: {
    success: boolean;
    actual_outcome: string;
    notes: string;
    prediction_accuracy: number;
  };
};

export async function GET() {
  try {
    const { data: predictions, error: predictionsError } = await supabase
      .from("predictions")
      .select("id, created_at, score, confidence, risk_level, recommendation, input_id")
      .order("created_at", { ascending: false })
      .limit(50);

    if (predictionsError) throw new Error(predictionsError.message);
    if (!predictions) return NextResponse.json([]);

    // Get related inputs
    const inputIds = predictions.map(p => p.input_id);
    const { data: inputs, error: inputsError } = await supabase
      .from("inputs")
      .select("id, content, created_at")
      .in("id", inputIds);

    if (inputsError) throw new Error(inputsError.message);

    // Get related outcomes
    const { data: outcomes, error: outcomesError } = await supabase
      .from("outcomes")
      .select("prediction_id, success, actual_outcome, notes, prediction_accuracy")
      .in("prediction_id", predictions.map(p => p.id));

    if (outcomesError) throw new Error(outcomesError.message);

    // Combine the data
    const history = predictions.map(prediction => {
      const input = inputs?.find(i => i.id === prediction.input_id);
      const outcome = outcomes?.find(o => o.prediction_id === prediction.id);

      return {
        id: prediction.id,
        created_at: prediction.created_at,
        input: input ? {
          id: input.id,
          content: input.content,
          created_at: input.created_at,
        } : undefined,
        prediction: {
          score: prediction.score,
          confidence: prediction.confidence,
          risk_level: prediction.risk_level,
          recommendation: prediction.recommendation,
        },
        outcome: outcome ? {
          success: outcome.success,
          actual_outcome: outcome.actual_outcome,
          notes: outcome.notes,
          prediction_accuracy: outcome.prediction_accuracy,
        } : undefined,
      };
    });

    return NextResponse.json(history);

  } catch (error) {
    console.error("History error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch history" },
      { status: 500 }
    );
  }
}
