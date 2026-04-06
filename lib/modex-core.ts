import { embedText } from "@/lib/embeddings";
import { cosineSimilarity } from "@/lib/engine/similarity";
import { getSupabase } from "@/lib/supabase";

export type Signal = {
  id: string;
  type: string;
  content: string;
  embedding: number[];
};

export type SimilarSignal = {
  id: string;
  type?: string;
  content?: string;
  similarity: number;
};

export type SignalCluster = {
  center_signal: Signal | null;
  related_signals: SimilarSignal[];
};

export async function ingestSignal(content: string, type: string) {
  if (!content || !type) {
    return { ok: false, id: null, type, content, embedding_length: 0 };
  }

  try {
    const embedding = await embedText(content);
    const supabase = getSupabase();

    if (!supabase) {
      return { ok: true, id: null, type, content, embedding_length: embedding.length };
    }

    const { data, error } = await supabase
      .from('signals')
      .insert([{ type, content, embedding }])
      .select('id');

    if (error) {
      console.error('Ingest failed:', error);
      return { ok: false, id: null, type, content, embedding_length: embedding.length };
    }

    return { 
      ok: true,
      id: data[0].id,
      type,
      content,
      embedding_length: embedding.length
    };
  } catch (error) {
    console.error('Ingest failed:', error);
    return { ok: false, id: null, type, content, embedding_length: 0 };
  }
}

export async function analyzeSignal(content: string) {
  if (!content) {
    return { 
      ok: false,
      embedding_size: 0,
      similar_signals: [],
      similarity_scores: []
    };
  }

  try {
    const embedding = await embedText(content);
    const supabase = getSupabase();

    if (!supabase) {
      return { 
        ok: true,
        embedding_size: embedding.length,
        similar_signals: [],
        similarity_scores: []
      };
    }

    const { data: signals, error } = await supabase
      .from('signals')
      .select('id, type, content, embedding')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error) {
      console.error('Analyze failed:', error);
      return { 
        ok: false,
        embedding_size: embedding.length,
        similar_signals: [],
        similarity_scores: []
      };
    }

    const similarities = signals.map(signal => ({
      id: signal.id,
      type: signal.type,
      content: signal.content,
      similarity: cosineSimilarity(embedding, signal.embedding)
    })).filter(s => s.similarity > 0.2);

    return {
      ok: true,
      embedding_size: embedding.length,
      similar_signals: similarities,
      similarity_scores: similarities.map(s => s.similarity)
    };
  } catch (error) {
    console.error('Analyze failed:', error);
    return { 
      ok: false,
      embedding_size: 0,
      similar_signals: [],
      similarity_scores: []
    };
  }
}

export async function discoverFromSignal(signalId: string) {
  if (!signalId) {
    return { ok: false, clusters: [] };
  }

  try {
    const supabase = getSupabase();
    
    if (!supabase) {
      return { ok: true, clusters: [] };
    }

    const { data: signals, error } = await supabase
      .from('signals')
      .select('id, type, content, embedding')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error) {
      console.error('Discover failed:', error);
      return { ok: false, clusters: [] };
    }

    const targetSignal = signals.find(s => s.id === signalId);
    if (!targetSignal) {
      return { ok: true, clusters: [] };
    }

    const similarities = signals.map(signal => ({
      id: signal.id,
      type: signal.type,
      content: signal.content,
      similarity: cosineSimilarity(targetSignal.embedding, signal.embedding)
    })).filter(s => s.similarity > 0.5);

    return {
      ok: true,
      clusters: [{
        center_signal: targetSignal,
        related_signals: similarities
      }]
    };
  } catch (error) {
    console.error('Discover failed:', error);
    return { ok: false, clusters: [] };
  }
}
