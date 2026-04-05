import { NextResponse } from "next/server";
import { getSupabase } from "../../../lib/supabase";

export async function GET() {
  try {
    const supabase = getSupabase();

    if (!supabase) {
      return NextResponse.json({ accuracy: 0 });
    }

    const { data: outcomes, error } = await supabase
      .from("outcomes")
      .select("success");

    if (error || !outcomes) {
      return NextResponse.json({ accuracy: 0 });
    }

    const total = outcomes.length;
    const correct = outcomes.filter((o) => o.success).length;
    const accuracy = total > 0 ? correct / total : 0;

    return NextResponse.json({ accuracy });
  } catch {
    return NextResponse.json({ accuracy: 0 });
  }
}
