import { NextResponse } from "next/server";
import { analyzeSignal } from '@/lib/modex-core';

export async function POST(req: Request) {
  try {
    const { content } = await req.json();
    
    if (!content) {
      return NextResponse.json(
        { error: "Missing content" },
        { status: 400 }
      );
    }

    const result = await analyzeSignal(content);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Analyze failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
