import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    if (!content) {
      return NextResponse.json({ error: "Missing content" }, { status: 400 });
    }

    const supabase = getSupabase();

    const prediction = {
      score: 0.7,
      confidence: 0.8,
      risk_level: "moderate",
      recommendation: "Proceed with caution",
    };

    if (supabase) {
      await supabase.from("inputs").insert([{ content }]);
    }

    return NextResponse.json({ prediction });
  } catch (e) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
