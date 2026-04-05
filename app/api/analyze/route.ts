import { NextResponse } from "next/server";
import { createEmbedding } from "@/lib/engine/embedding";

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

    const embedding = await createEmbedding(content);
    
    return NextResponse.json({
      embedding_size: embedding.length,
      similar_signals: [],
      similarity_scores: [],
    });
  } catch (error) {
    console.error("Analyze failed:", error);
    return NextResponse.json(
      { error: "Analyze route failed" },
      { status: 500 }
    );
  }
}
