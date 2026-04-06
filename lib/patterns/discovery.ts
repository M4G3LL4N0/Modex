import { cosineSimilarity } from "../engine/similarity.js";
import {
  clusterBySimilarity,
  type ClusterSignal,
} from "./clustering.js";

export type DiscoveryCluster = {
  center_signal: ClusterSignal | null;
  related_signals: ClusterSignal[];
  average_similarity: number;
  hypothesis: string;
};

export type DiscoveryResult = {
  clusters: DiscoveryCluster[];
};

function getHypothesis(avg: number): string {
  if (avg >= 0.85) return "strong recurring pattern";
  if (avg >= 0.65) return "possible pattern";
  return "weak/no clear pattern";
}

export function discoverPatterns(
  target: ClusterSignal | null,
  candidates: ClusterSignal[]
): DiscoveryResult {
  if (!target || !Array.isArray(target.embedding)) {
    return { clusters: [] };
  }

  const scored = candidates
    .filter(
      (candidate) =>
        candidate.id !== target.id && Array.isArray(candidate.embedding)
    )
    .map((candidate) => ({
      ...candidate,
      similarity: cosineSimilarity(target.embedding!, candidate.embedding!),
    }));

  const baseClusters = clusterBySimilarity(scored, 0.65);

  return {
    clusters: baseClusters.map((cluster) => ({
      center_signal: target,
      related_signals: cluster.related_signals,
      average_similarity: cluster.average_similarity,
      hypothesis: getHypothesis(cluster.average_similarity),
    })),
  };
}
