import { NextResponse } from "next/server";
import { runExperiment } from "@/lib/experiments";

type ExperimentRequest = {
  experimentType?: string;
  payload?: unknown;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as ExperimentRequest | null;

    const experimentType =
      typeof body?.experimentType === "string" ? body.experimentType.trim() : "";

    if (!experimentType) {
      return NextResponse.json(
        { error: "Missing experimentType" },
        { status: 400 }
      );
    }

    const result = await runExperiment(experimentType, body?.payload ?? null);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Experiments route failed" },
      { status: 500 }
    );
  }
}
