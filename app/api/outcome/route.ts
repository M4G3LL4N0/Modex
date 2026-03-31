import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { input_id, success, actual_outcome, notes } = await req.json();

  if (!input_id) {
    return NextResponse.json({ error: "Missing input_id" }, { status: 400 });
  }

  const { data } = await supabase.from("outcomes").insert([
    {
      input_id,
      success,
      actual_outcome,
      notes,
    },
  ]);

  return NextResponse.json({ success: true, data });
}
