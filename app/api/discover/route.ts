import { NextResponse } from "next/server";
import { discoverFromSignal } from '@/lib/modex-core';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { signalId } = await req.json();
    
    if (!signalId) {
      return NextResponse.json(
        { error: "Missing signalId" },
        { status: 400 }
      );
    }

    const result = await discoverFromSignal(signalId);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Discover failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
