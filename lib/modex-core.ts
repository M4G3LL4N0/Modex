import { embedText } from "@/lib/embeddings";
import { cosineSimilarity } from "@/lib/engine/similarity";
import { getSupabase } from "@/lib/supabase";

export async function ingestSignal(content: string, type: string) {
  try {
    const embedding = await embedText(content);
    const supabase = getSupabase();

    if (!supabase) {
      return { error: "Supabase client not initialized" };
    }

    const { data, error } = await supabase
      .from('signals')
      .insert([{ type, content, embedding }])
      .select('id');

    if (error) throw error;

    return { 
      id: data[0].id,
      embedding_length: embedding.length
    };
  } catch (error) {
    console.error('Ingest failed:', error);
    return { error: "Ingest failed" };
  }
}

export async function analyzeSignal(content: string) {
  try {
    const embedding = await embedText(content);
    const supabase = getSupabase();

    if (!supabase) {
      return { embedding_size: embedding.length, similar_signals: [], similarity_scores: [] };
    }

    const { data: signals, error } = await supabase
      .from('signals')
      .select('id, embedding');

    if (error) throw error;

    const similarities = signals.map(signal => ({
      id: signal.id,
      similarity: cosineSimilarity(embedding, signal.embedding)
    }));

    return {
      embedding_size: embedding.length,
      similar_signals: similarities.map(s => s.id),
      similarity_scores: similarities.map(s => s.similarity)
    };
  } catch (error) {
    console.error('Analyze failed:', error);
    return { error: "Analyze failed" };
  }
}

export async function discoverFromSignal(signalId: string) {
  try {
    const supabase = getSupabase();
    
    if (!supabase) {
      return { clusters: [] };
    }

    const { data: signals, error } = await supabase
      .from('signals')
      .select('id, embedding');

    if (error) throw error;

    const targetSignal = signals.find(s => s.id === signalId);
    if (!targetSignal) {
      return { clusters: [] };
    }

    const similarities = signals.map(signal => ({
      id: signal.id,
      similarity: cosineSimilarity(targetSignal.embedding, signal.embedding)
    }));

    return {
      clusters: [{
        center: signalId,
        members: similarities
          .filter(s => s.similarity > 0.5)
          .map(s => s.id)
      }]
    };
  } catch (error) {
    console.error('Discover failed:', error);
    return { clusters: [] };
  }
}
