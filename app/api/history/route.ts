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
    // Fetch predictions with joined input and outcome data
    const { data, error } = await supabase
      .from("predictions")
      .select(`
        id,
        created_at,
        score,
        confidence,
        risk_level,
        recommendation,
        inputs!inner(
          id,
          content,
          created_at
        ),
        outcomes(
          success,
          actual_outcome,
          notes,
          prediction_accuracy
        )
      `)
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      throw new Error(error.message);
    }

    // Map data to structured response
    const history = data.map((item) => ({
      id: item.id,
      created_at: item.created_at,
      input: {
        id: item.inputs.id,
        content: item.inputs.content,
        created_at: item.inputs.created_at,
      },
      prediction: {
        score: item.score,
        confidence: item.confidence,
        risk_level: item.risk_level,
        recommendation: item.recommendation,
      },
      outcome: item.outcomes?.[0] ? {
        success: item.outcomes[0].success,
        actual_outcome: item.outcomes[0].actual_outcome,
        notes: item.outcomes[0].notes,
        prediction_accuracy: item.outcomes[0].prediction_accuracy,
      } : undefined,
    }));

    return NextResponse.json(history);
    
  } catch (error) {
    console.error("History error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch history" },
      { status: 500 }
    );
  }
}
