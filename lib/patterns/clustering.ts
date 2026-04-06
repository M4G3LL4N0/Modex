export type ClusterSignal = {
  id?: string | null;
  type?: string;
  content?: string;
  embedding?: number[];
  similarity?: number;
};

export type SignalCluster = {
  center_signal: ClusterSignal | null;
  related_signals: ClusterSignal[];
  average_similarity: number;
};

export function clusterBySimilarity(
  signals: ClusterSignal[],
  threshold = 0.65
): SignalCluster[] {
  const related = signals.filter(
    (signal) =>
      typeof signal.similarity === "number" && signal.similarity >= threshold
  );

  if (!related.length) return [];

  const averageSimilarity =
    related.reduce((sum, signal) => sum + (signal.similarity ?? 0), 0) /
    related.length;

  return [
    {
      center_signal: related[0] ?? null,
      related_signals: related,
      average_similarity: averageSimilarity,
    },
  ];
}
