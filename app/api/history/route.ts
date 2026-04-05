import { NextResponse } from "next/server";
import { getSupabase } from "../../../lib/supabase";

export type HistoryItem = {
  id: string;
  input?: {
    id?: string;
    content?: string;
  };
  prediction?: {
    score: number;
    confidence: number;
    risk_level: "low" | "moderate" | "high";
    recommendation: string;
  };
  outcome?: {
    success?: boolean;
  } | null;
};

export async function GET() {
  try {
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json(
        { items: [] },
        { status: 200 }
      );
    }

    const { data: predictions, error } = await supabase
      .from("predictions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);

    if (error || !predictions) {
      return NextResponse.json({ items: [] });
    }

    const items: HistoryItem[] = predictions.map((prediction: any) => ({
      id: String(prediction.id),
      prediction: {
        score: typeof prediction.score === "number" ? prediction.score : 0,
        confidence:
          typeof prediction.confidence === "number"
            ? prediction.confidence
            : 0,
        risk_level:
          prediction.risk_level === "low" ||
          prediction.risk_level === "moderate" ||
          prediction.risk_level === "high"
            ? prediction.risk_level
            : "moderate",
        recommendation:
          typeof prediction.recommendation === "string"
            ? prediction.recommendation
            : "",
      },
    }));

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] });
  }
}
