import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const content =
      typeof body?.content === "string" ? body.content.trim() : "";

    if (!content) {
      return NextResponse.json(
        { error: "Missing content" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      embedding_size: 0,
      similar_signals: [],
      similarity_scores: [],
    });
  } catch {
    return NextResponse.json(
      { error: "Analyze route failed" },
      { status: 500 }
    );
  }
}
