import {
  analyzeSignal,
  discoverFromSignal,
  ingestSignal,
} from "../modex-core";

function payloadToContent(payload: unknown): string {
  if (typeof payload === "string") return payload;

  if (
    typeof payload === "object" &&
    payload !== null &&
    "content" in payload &&
    typeof (payload as { content?: unknown }).content === "string"
  ) {
    return (payload as { content: string }).content;
  }

  return JSON.stringify(payload ?? {});
}

export async function runExperiment(
  experimentType: string,
  payload: unknown
) {
  try {
    const normalizedType =
      typeof experimentType === "string" && experimentType.trim()
        ? experimentType.trim()
        : "custom";

    const content = payloadToContent(payload);

    const ingested = await ingestSignal(content, normalizedType);
    const analyzed = await analyzeSignal(content);

    let discovered = { ok: true, clusters: [] as unknown[] };

    if (ingested?.id) {
      discovered = await discoverFromSignal(ingested.id);
    }

    return {
      ok: true,
      experiment_type: normalizedType,
      result: {
        ingested,
        analyzed,
        discovered,
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
