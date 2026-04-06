import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { input_id, success } = await req.json();
    
    if (!input_id || success === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase
        .from("outcomes")
        .insert([{ input_id, success }]);

      if (error) {
        console.error("Failed to save outcome:", error);
        throw error;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Outcome tracking failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
