import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { embedText } from '@/lib/embeddings';

interface IngestRequest {
  type: 'text' | 'audio' | 'sequence';
  content: string;
}

export async function POST(req: Request) {
  const { type, content } = await req.json() as IngestRequest;

  if (!type || !content) {
    return NextResponse.json(
      { error: 'Missing type or content' },
      { status: 400 }
    );
  }

  try {
    const embedding = await embedText(content);
    const supabase = getSupabase();

    if (!supabase) {
      return NextResponse.json(
        { error: 'Supabase client not initialized' },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from('signals')
      .insert([
        {
          type,
          content,
          embedding,
        }
      ])
      .select('id');

    if (error) throw error;

    return NextResponse.json({
      id: data[0].id,
      embedding_length: embedding.length,
    });

  } catch (error) {
    console.error('Ingestion failed:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
