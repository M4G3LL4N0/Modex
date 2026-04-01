import { NextResponse } from "next/server";
import { createEmbedding } from "@/lib/engine/embedding";
import { cosineSimilarity } from "@/lib/engine/similarity";
import { supabase } from "@/lib/supabase";
import { runLLMDecision } from "@/lib/engine/llm";

export async function POST(req: Request) {
  try {
    const { content, user_id } = await req.json();

    if (!content) {
      return NextResponse.json({ error: "Missing content" }, { status: 400 });
    }

    // 1. Generate embedding
    const embedding = await createEmbedding(content);

    // 2. Insert input with embedding
    const { data: input, error: insertError } = await supabase
      .from("inputs")
      .insert([{ content, user_id, embedding }])
      .select()
      .single();

    if (insertError || !input) {
      throw new Error(insertError?.message || "Failed to insert input");
    }

    // 3. Fetch last 25 inputs
    const { data: recentInputs, error: fetchError } = await supabase
      .from("inputs")
      .select("id, content, embedding, outcome")
      .order("created_at", { ascending: false })
      .limit(25);

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    // 4. Compute similarity and select top 5
    const inputsWithSimilarity = recentInputs
      .filter(i => i.id !== input.id) // Exclude current input
      .map(i => ({
        ...i,
        similarity: cosineSimilarity(embedding, i.embedding)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5);

    // 5. Build context string
    const context = inputsWithSimilarity
      .map((input, i) => 
        `Similar input #${i + 1}:\n` +
        `Content: ${input.content}\n` +
        `Outcome: ${input.outcome !== undefined ? (input.outcome ? 'Success' : 'Failure') : 'Unknown'}\n`
      )
      .join('\n');

    // 6. Run LLM decision
    const prediction = await runLLMDecision(content, context);

    // 7. Store prediction
    const { error: predictionError } = await supabase
      .from("predictions")
      .insert([
        {
          input_id: input.id,
          score: prediction.score,
          confidence: prediction.confidence,
          risk_level: prediction.risk_level,
          recommendation: prediction.recommendation,
        },
      ]);

    if (predictionError) {
      throw new Error(predictionError.message);
    }

    return NextResponse.json({
      input,
      prediction,
    });

  } catch (error) {
    console.error("Prediction error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Prediction failed" },
      { status: 500 }
    );
  }
}
