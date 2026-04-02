import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { input_id, success } = await req.json();

    const supabase = getSupabase();

    if (supabase) {
      await supabase.from("outcomes").insert([
        {
          input_id,
          success,
        },
      ]);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false });
  }
}
