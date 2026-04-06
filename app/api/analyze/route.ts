import { NextResponse } from "next/server";
import { analyzeSignal } from '@/lib/modex-core';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const content = typeof body?.content === "string" ? body.content.trim() : "";

    if (!content) {
      return NextResponse.json(
        { error: "Missing content" },
        { status: 400 }
      );
    }

    const result = await analyzeSignal(content);
    
    if ('error' in result) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Analyze failed:", error);
    return NextResponse.json(
      { error: "Analyze failed" },
      { status: 500 }
    );
  }
}
