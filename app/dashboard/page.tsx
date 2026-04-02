"use client";

import { useState } from "react";

type PredictionResult = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

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
      <header className="site-header">
        <div className="container nav-row">
          <div className="brand-wrap">
            <div className="brand-mark">MX</div>
            <div>
              <div className="brand-name">MODEX</div>
              <div className="brand-subtitle">Noaerth Ecosystem Venture</div>
            </div>
          </div>

          <nav className="nav-links">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/technology">Technology</a>
            <a className="nav-link" href="/investors">Investors</a>
            <a className="nav-link" href="/dashboard">Dashboard</a>
          </nav>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="section-label">
            <span className="section-label-dot" />
            Dashboard
          </div>

          <h1 className="section-title">Run a machine-backed scenario.</h1>
          <p className="section-copy">
            Submit a scenario to the Modex engine and receive a score, confidence estimate,
            risk level, and recommendation.
          </p>

          <div className="split-layout" style={{ marginTop: 28 }}>
            <div className="glass-card panel-lg">
              <div className="eyebrow">Scenario Input</div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe the decision, scenario, or operating context..."
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
                    color: "#ffcaca",
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
                    <div className="card-grid-3" style={{ marginTop: 16 }}>
                      <div className="glass-card panel">
                        <div className="eyebrow">Score</div>
                        <div className="card-title" style={{ fontSize: 32 }}>
                          {Math.round(result.score * 100)}%
                        </div>
                      </div>

                      <div className="glass-card panel">
                        <div className="eyebrow">Confidence</div>
                        <div className="card-title" style={{ fontSize: 32 }}>
                          {Math.round(result.confidence * 100)}%
                        </div>
                      </div>

                      <div className="glass-card panel">
                        <div className="eyebrow">Risk</div>
                        <div className="card-title" style={{ fontSize: 32 }}>
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
                    No prediction yet. Run a scenario to see output.
                  </p>
                )}
              </div>

              <div className="glass-card panel-lg">
                <div className="eyebrow">System Status</div>
                <p className="card-copy">
                  This dashboard is the first operator-facing layer of Modex.
                  Next steps are richer history, feedback loops, and stronger prediction memory.
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
