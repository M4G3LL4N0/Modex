import { createEmbedding } from "@/lib/engine/embedding";
import { cosineSimilarity } from "@/lib/engine/similarity";
import { getSupabase } from "@/lib/supabase";

type SignalRow = {
  id: string | null;
  type?: string;
  content?: string;
  embedding?: number[];
};

export async function ingestSignal(content: string, type: string) {
  try {
    const safeContent = typeof content === "string" ? content.trim() : "";
    const safeType = typeof type === "string" ? type.trim() : "custom";

    if (!safeContent) {
      return {
        ok: false,
        id: null,
        type: safeType,
        content: safeContent,
        embedding_length: 0,
      };
    }

    const embedding = await createEmbedding(safeContent);
    const supabase = getSupabase();

    if (!supabase) {
      return {
        ok: true,
        id: null,
        type: safeType,
        content: safeContent,
        embedding_length: embedding.length,
      };
    }

    const { data } = await supabase
      .from("signals")
      .insert([
        {
          type: safeType,
          content: safeContent,
          embedding,
        },
      ])
      .select("id")
      .single();

    return {
      ok: true,
      id: data?.id ?? null,
      type: safeType,
      content: safeContent,
      embedding_length: embedding.length,
    };
  } catch {
    return {
      ok: false,
      id: null,
      type,
      content,
      embedding_length: 0,
    };
  }
}

export async function analyzeSignal(content: string) {
  try {
    const safeContent = typeof content === "string" ? content.trim() : "";

    if (!safeContent) {
      return {
        ok: false,
        embedding_size: 0,
        similar_signals: [],
        similarity_scores: [],
      };
    }

    const embedding = await createEmbedding(safeContent);
    const supabase = getSupabase();

    if (!supabase) {
      return {
        ok: true,
        embedding_size: embedding.length,
        similar_signals: [],
        similarity_scores: [],
      };
    }

    const { data } = await supabase
      .from("signals")
      .select("id,type,content,embedding")
      .limit(25);

    const rows = Array.isArray(data) ? (data as SignalRow[]) : [];

    const scored = rows
      .map((row) => {
        const sim = Array.isArray(row.embedding)
          ? cosineSimilarity(embedding, row.embedding)
          : 0;

        return {
          id: row.id ?? null,
          type: row.type,
          content: row.content,
          similarity: sim,
        };
      })
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5);

    return {
      ok: true,
      embedding_size: embedding.length,
      similar_signals: scored,
      similarity_scores: scored.map((x) => x.similarity),
    };
  } catch {
    return {
      ok: false,
      embedding_size: 0,
      similar_signals: [],
      similarity_scores: [],
    };
  }
}

export async function discoverFromSignal(signalId: string) {
  try {
    const supabase = getSupabase();

    if (!supabase || !signalId) {
      return { ok: true, clusters: [] };
    }

    const { data: target } = await supabase
      .from("signals")
      .select("id,type,content,embedding")
      .eq("id", signalId)
      .single();

    if (!target || !Array.isArray(target.embedding)) {
      return { ok: true, clusters: [] };
    }

    const { data } = await supabase
      .from("signals")
      .select("id,type,content,embedding")
      .limit(25);

    const rows = Array.isArray(data) ? (data as SignalRow[]) : [];

    const related = rows
      .filter((row) => row.id !== target.id && Array.isArray(row.embedding))
      .map((row) => ({
        id: row.id ?? null,
        type: row.type,
        content: row.content,
        similarity: cosineSimilarity(target.embedding, row.embedding as number[]),
      }))
      .filter((row) => row.similarity >= 0.6)
      .sort((a, b) => b.similarity - a.similarity);

    return {
      ok: true,
      clusters: [
        {
          center_signal: {
            id: target.id ?? null,
            type: target.type,
            content: target.content,
          },
          related_signals: related,
        },
      ],
    };
  } catch {
    return { ok: false, clusters: [] };
  }
}

export async function runExperiment(experimentType: string, payload: unknown) {
  try {
    const normalizedType =
      typeof experimentType === "string" && experimentType.trim()
        ? experimentType.trim()
        : "custom";

    const content =
      typeof payload === "string"
        ? payload
        : typeof payload === "object" &&
          payload !== null &&
          "content" in payload &&
          typeof (payload as { content?: unknown }).content === "string"
        ? ((payload as { content?: string }).content ?? "")
        : JSON.stringify(payload ?? "");

    const ingested = await ingestSignal(content, normalizedType);
    const analyzed = await analyzeSignal(content);

    return {
      ok: true,
      experiment_type: normalizedType,
      result: {
        ingested,
        analyzed,
      },
    };
  } catch {
    return {
      ok: false,
      experiment_type: experimentType,
      result: null,
    };
  }
}
