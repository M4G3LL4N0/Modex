"use client";

import { useState } from "react";

type PredictionResult = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

"use client";

export default function DashboardPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function runPrediction() {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: input }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Prediction failed");
        setResult(null);
        return;
      }

      setResult(data.prediction ?? null);
    } catch {
      setError("Something went wrong");
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="page-shell">

      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="section-label">
            <span className="section-label-dot" />
            Dashboard
          </div>

          <h1 className="section-title">Run a machine-backed scenario.</h1>
          <p className="section-copy">
            Enter a decision context and receive a score, confidence level, risk framing,
            and recommendation from the Modex engine.
          </p>

          <div className="grid-2" style={{ marginTop: 48, gap: 48 }}>
            <div className="glass panel-xl">
              <div className="eyebrow">Scenario Input</div>

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe the decision, operator context, or scenario..."
                className="textarea-box"
                style={{ marginTop: 16 }}
              />

              <div className="button-row" style={{ marginTop: 16 }}>
                <button
                  onClick={runPrediction}
                  disabled={isLoading || !input.trim()}
                  className="button-primary"
                  style={{
                    opacity: isLoading || !input.trim() ? 0.55 : 1,
                    cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  {isLoading ? "Running..." : "Run Prediction"}
                </button>

                <a className="button-secondary" href="/">
                  Back Home
                </a>
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
                <div className="eyebrow">Latest Result</div>

                {result ? (
                  <>
                    <div className="card-grid-3" style={{ marginTop: 18 }}>
                      <div className="glass-card panel">
                        <div className="eyebrow">Score</div>
                        <div className="card-title" style={{ fontSize: 34 }}>
                          {Math.round(result.score * 100)}%
                        </div>
                      </div>

                      <div className="glass-card panel">
                        <div className="eyebrow">Confidence</div>
                        <div className="card-title" style={{ fontSize: 34 }}>
                          {Math.round(result.confidence * 100)}%
                        </div>
                      </div>

                      <div className="glass-card panel">
                        <div className="eyebrow">Risk</div>
                        <div className="card-title" style={{ fontSize: 34 }}>
                          {result.risk_level}
                        </div>
                      </div>
                    </div>

                    <div className="glass-card panel" style={{ marginTop: 18 }}>
                      <div className="eyebrow">Recommendation</div>
                      <p className="card-copy">{result.recommendation}</p>
                    </div>
                  </>
                ) : (
                  <p className="card-copy" style={{ marginTop: 16 }}>
                    No prediction yet. Submit a scenario to preview the decision layer.
                  </p>
                )}
              </div>

              <div className="glass-card panel-lg">
                <div className="eyebrow">System Status</div>
                <p className="card-copy">
                  This is the first operator-facing Modex surface. The next layer is richer memory,
                  historical outcomes, stronger analytics, and more adaptive inference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>Modex — A Noaerth Ecosystem Venture</div>
          <nav className="nav-links">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/technology">Technology</a>
            <a className="nav-link" href="/investors">Investors</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
