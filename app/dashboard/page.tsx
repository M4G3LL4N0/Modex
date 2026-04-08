"use client";

import { useEffect, useMemo, useState } from "react";

type ExperimentType =
  | "animal_signal"
  | "fluid_pattern"
  | "material_interaction"
  | "generic_sequence"
  | "custom";

type ExperimentResult = {
  ok?: boolean;
  experiment_type?: string;
  result?: {
    ingested?: {
      ok?: boolean;
      id?: string | null;
      type?: string;
      content?: string;
      embedding_length?: number;
    };
    analyzed?: {
      ok?: boolean;
      embedding_size?: number;
      similar_signals?: Array<{
        id?: string | null;
        type?: string;
        content?: string;
        similarity?: number;
      }>;
      similarity_scores?: number[];
    };
    discovered?: {
      ok?: boolean;
      clusters?: Array<{
        center_signal?: {
          id?: string | null;
          type?: string;
          content?: string;
        } | null;
        related_signals?: Array<{
          id?: string | null;
          type?: string;
          content?: string;
          similarity?: number;
        }>;
        average_similarity?: number;
        hypothesis?: string;
      }>;
    };
  } | null;
};

type LogItem = {
  id: string;
  experimentType: ExperimentType;
  input: string;
  createdAt: string;
};

const EXPERIMENT_LABELS: Record<ExperimentType, string> = {
  animal_signal: "Animal Signals",
  fluid_pattern: "Fluid Patterns",
  material_interaction: "Material Interactions",
  generic_sequence: "Generic Sequences",
  custom: "Custom",
};

const EXPERIMENT_HELP: Record<ExperimentType, string> = {
  animal_signal:
    "Describe an animal sound pattern, signal sequence, or communication behavior.",
  fluid_pattern:
    "Describe a fluid or water behavior pattern, flow event, or interaction.",
  material_interaction:
    "Describe a material interaction, contact pattern, or physical response.",
  generic_sequence:
    "Describe a sequence, repeated event stream, or structured pattern.",
  custom:
    "Describe any unknown system, signal, or interaction you want Modex to analyze.",
};

export default function DashboardPage() {
  const [experimentType, setExperimentType] =
    useState<ExperimentType>("animal_signal");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ExperimentResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const [log, setLog] = useState<LogItem[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialInput = params.get("input");
    if (initialInput) {
      setInput(initialInput);
    }

    const stored = window.localStorage.getItem("modex_experiment_log");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as LogItem[];
        if (Array.isArray(parsed)) {
          setLog(parsed);
        }
      } catch {}
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("modex_experiment_log", JSON.stringify(log));
  }, [log]);

  async function runExperiment() {
    setIsLoading(true);
    setError(null);
    setCopyState("idle");

    try {
      const res = await fetch("/api/experiments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          experimentType,
          payload: {
            content: input,
          },
        }),
      });

      const data = (await res.json()) as ExperimentResult | { error?: string };

      if (!res.ok) {
        setError(
          typeof (data as { error?: string }).error === "string"
            ? (data as { error?: string }).error!
            : "Experiment failed"
        );
        setResult(null);
        return;
      }

      setResult(data as ExperimentResult);

      setLog((prev) => [
        {
          id: `${Date.now()}`,
          experimentType,
          input,
          createdAt: new Date().toISOString(),
        },
        ...prev,
      ].slice(0, 12));
    } catch {
      setError("Failed to run experiment. Please try again.");
      setResult(null);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  async function shareResult() {
    if (!result?.result?.analyzed) return;

    const analyzed = result.result.analyzed;
    const topSimilarity =
      analyzed.similarity_scores && analyzed.similarity_scores.length > 0
        ? Math.max(...analyzed.similarity_scores)
        : 0;

    const clusterCount = result.result.discovered?.clusters?.length ?? 0;

    const shareText = [
      `Modex experiment: ${EXPERIMENT_LABELS[experimentType]}`,
      `Embedding size: ${analyzed.embedding_size ?? 0}`,
      `Similar signals: ${analyzed.similar_signals?.length ?? 0}`,
      `Top similarity: ${Math.round(topSimilarity * 100)}%`,
      `Clusters detected: ${clusterCount}`,
      `Try it: ${window.location.origin}/dashboard`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(shareText);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2000);
    } catch {
      setCopyState("idle");
    }
  }

  const strongestSimilarity = useMemo(() => {
    const scores = result?.result?.analyzed?.similarity_scores ?? [];
    if (!scores.length) return 0;
    return Math.max(...scores);
  }, [result]);

  const topHypothesis = useMemo(() => {
    const clusters = result?.result?.discovered?.clusters ?? [];
    if (!clusters.length) return "No pattern hypothesis yet.";
    return clusters[0]?.hypothesis ?? "No pattern hypothesis yet.";
  }, [result]);

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container nav-row">
          <div className="brand-wrap">
            <div className="brand-mark">MX</div>
            <div>
              <div className="brand-name">MODEX</div>
              <div className="brand-subtitle">Experiment Console</div>
            </div>
          </div>

          <nav className="nav-links">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/technology">
              Technology
            </a>
            <a className="nav-link" href="/investors">
              Investors
            </a>
            <a className="nav-link" href="/dashboard">
              Dashboard
            </a>
          </nav>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="section-label">
            <span className="section-label-dot" />
            Experiment Console
          </div>

          <h1 className="section-title">
            Run machine-learning experiments on real-world signals.
          </h1>

          <p className="section-copy">
            Use Modex to ingest signals, compare patterns, detect clusters, and
            generate early hypotheses across animal, fluid, material, and
            unknown systems.
          </p>

          <div className="split-layout" style={{ marginTop: 30 }}>
            <div className="glass-card panel-lg">
              <div className="eyebrow">Experiment Type</div>

              <div className="feedback-buttons" style={{ marginTop: 16 }}>
                <button
                  className={`button-secondary ${experimentType === "animal_signal" ? "active" : ""}`}
                  onClick={() => setExperimentType("animal_signal")}
                  type="button"
                >
                  Animal Signals
                </button>
                <button
                  className={`button-secondary ${experimentType === "fluid_pattern" ? "active" : ""}`}
                  onClick={() => setExperimentType("fluid_pattern")}
                  type="button"
                >
                  Fluid Patterns
                </button>
                <button
                  className={`button-secondary ${experimentType === "material_interaction" ? "active" : ""}`}
                  onClick={() => setExperimentType("material_interaction")}
                  type="button"
                >
                  Material Interactions
                </button>
                <button
                  className={`button-secondary ${experimentType === "generic_sequence" ? "active" : ""}`}
                  onClick={() => setExperimentType("generic_sequence")}
                  type="button"
                >
                  Generic Sequence
                </button>
                <button
                  className={`button-secondary ${experimentType === "custom" ? "active" : ""}`}
                  onClick={() => setExperimentType("custom")}
                  type="button"
                >
                  Custom
                </button>
              </div>

              <div className="eyebrow" style={{ marginTop: 22 }}>
                Signal Input
              </div>

              <p className="card-copy" style={{ marginTop: 8 }}>
                {EXPERIMENT_HELP[experimentType]}
              </p>

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={EXPERIMENT_HELP[experimentType]}
                className="textarea-box"
                style={{ marginTop: 16 }}
              />

              <div className="button-row" style={{ marginTop: 16 }}>
                <button
                  onClick={runExperiment}
                  disabled={isLoading || !input.trim()}
                  className="button-primary"
                  style={{
                    opacity: isLoading || !input.trim() ? 0.55 : 1,
                    cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                  }}
                  type="button"
                >
                  {isLoading ? "Running Experiment..." : "Run Experiment"}
                </button>

                <button
                  onClick={shareResult}
                  className="button-secondary"
                  type="button"
                  disabled={!result}
                  style={{
                    opacity: result ? 1 : 0.55,
                    cursor: result ? "pointer" : "not-allowed",
                  }}
                >
                  {copyState === "copied" ? "Copied" : "Share Result"}
                </button>
              </div>

              {error ? (
                <div
                  className="glass-card panel"
                  style={{
                    marginTop: 18,
                    borderColor: "rgba(255, 120, 120, 0.22)",
                    background: "rgba(255, 80, 80, 0.08)",
                    color: "#ffd4d4",
                  }}
                >
                  {error}
                </div>
              ) : null}
            </div>

            <div className="stack">
              <div className="glass-card panel-lg">
                <div className="eyebrow">Discovery Summary</div>

                {result?.result ? (
                  <>
                    <div className="card-grid-3" style={{ marginTop: 18 }}>
                      <div className="glass-card panel">
                        <div className="eyebrow">Embedding</div>
                        <div className="card-title" style={{ fontSize: 32 }}>
                          {result.result.analyzed?.embedding_size ?? 0}
                        </div>
                      </div>

                      <div className="glass-card panel">
                        <div className="eyebrow">Similar Signals</div>
                        <div className="card-title" style={{ fontSize: 32 }}>
                          {result.result.analyzed?.similar_signals?.length ?? 0}
                        </div>
                      </div>

                      <div className="glass-card panel">
                        <div className="eyebrow">Clusters</div>
                        <div className="card-title" style={{ fontSize: 32 }}>
                          {result.result.discovered?.clusters?.length ?? 0}
                        </div>
                      </div>
                    </div>

                    <div className="glass-card panel" style={{ marginTop: 18 }}>
                      <div className="eyebrow">Strongest Similarity</div>
                      <p className="card-copy">
                        {Math.round(strongestSimilarity * 100)}%
                      </p>
                    </div>

                    <div className="glass-card panel" style={{ marginTop: 18 }}>
                      <div className="eyebrow">Top Hypothesis</div>
                      <p className="card-copy">{topHypothesis}</p>
                    </div>
                  </>
                ) : (
                  <p className="card-copy" style={{ marginTop: 16 }}>
                    Choose an experiment type, enter a signal description, and
                    let Modex ingest, compare, cluster, and hypothesize.
                  </p>
                )}
              </div>

              <div className="glass-card panel-lg">
                <div className="eyebrow">Your Experiment Log</div>

                {log.length ? (
                  <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
                    {log.map((item) => (
                      <div key={item.id} className="glass-card panel">
                        <div className="eyebrow">
                          {EXPERIMENT_LABELS[item.experimentType]}
                        </div>
                        <p className="card-copy">
                          {item.input.length > 140
                            ? `${item.input.slice(0, 140)}...`
                            : item.input}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="card-copy" style={{ marginTop: 16 }}>
                    No experiments logged yet. Run your first experiment to
                    start building a signal history.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
