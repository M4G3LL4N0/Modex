import { NextResponse } from 'next/server';
import { ingestSignal } from '@/lib/modex-core';

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

  const result = await ingestSignal(content, type);
  
  if ('error' in result) {
    return NextResponse.json(
      { error: result.error },
      { status: 500 }
    );
  }

  return NextResponse.json(result);
}
