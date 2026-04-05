import { NextResponse } from "next/server";
import { getSupabase } from "../../../lib/supabase";

import { PredictionResult } from "../../../lib/engine/predict";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const content =
      typeof body?.content === "string" ? body.content.trim() : "";

    if (!content) {
      return NextResponse.json(
        { error: "Missing content" },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    // TODO: Replace with actual prediction logic
    const prediction: PredictionResult = {
      score: 0.7,
      confidence: 0.8,
      risk_level: "moderate",
      recommendation: "Proceed with caution",
    };

    if (supabase) {
      const { data, error } = await supabase
        .from("predictions")
        .insert([
          {
            input_text: content,
            score: prediction.score,
            confidence: prediction.confidence,
            risk_level: prediction.risk_level,
            recommendation: prediction.recommendation,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Failed to save prediction:", error);
      }
    }

    return NextResponse.json({ prediction });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
