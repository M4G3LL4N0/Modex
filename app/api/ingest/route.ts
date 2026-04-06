import { NextResponse } from 'next/server';
import { ingestSignal } from '../../../lib/modex-core.js';

export async function POST(req: Request) {
  try {
    const { type, content } = await req.json();
    
    if (!type || !content) {
      return NextResponse.json(
        { error: 'Missing type or content' },
        { status: 400 }
      );
    }

    const result = await ingestSignal(content, type);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Ingest failed:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
