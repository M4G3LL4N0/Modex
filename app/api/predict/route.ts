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

    const prediction: PredictionResult = {
      score: 0.7,
      confidence: 0.8,
      risk_level: "moderate",
      recommendation: "Proceed with caution",
    };

    if (supabase) {
      await supabase.from("inputs").insert([{ content }]);
    }

    return NextResponse.json({ prediction });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
