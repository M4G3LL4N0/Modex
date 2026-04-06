import { NextResponse } from "next/server";
import { discoverFromSignal } from '@/lib/modex-core';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body || typeof body !== 'object' || !body.signalId) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const result = await discoverFromSignal(body.signalId);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
