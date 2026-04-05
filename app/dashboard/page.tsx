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

  const [historyItems, setHistoryItems] = useState<any[]>([]);
  const [systemAccuracy, setSystemAccuracy] = useState<number | null>(null);

  async function fetchHistory() {
    try {
      const res = await fetch("/api/history");
      const data = await res.json();
      setHistoryItems(data.items || []);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  }

  async function handleFeedback(correct: boolean) {
    try {
      await fetch("/api/outcome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prediction_id: result?.id,
          success: correct,
        }),
      });

      // Refresh accuracy
      fetchAccuracy();
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    }
  }

  async function fetchAccuracy() {
    try {
      const res = await fetch("/api/accuracy");
      const data = await res.json();
      setSystemAccuracy(data.accuracy);
    } catch (error) {
      console.error("Failed to fetch accuracy:", error);
    }
  }

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

      <section className="section" style={{ paddingTop: 72, paddingBottom: 0 }}>
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

          <div className="stack" style={{ marginTop: 48, gap: 32 }}>
            <div className="split-layout" style={{ gap: 32 }}>
            <div className="glass-card panel-lg">
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
                <div className="glass-card panel" style={{ 
                  marginTop: 18,
                  borderColor: "rgba(255, 120, 120, 0.12)",
                  background: "rgba(255, 80, 80, 0.04)",
                  color: "var(--muted)"
                }}>
                  <p className="card-copy" style={{ margin: 0 }}>
                    {error.includes("failed") ? error : `Unable to analyze scenario: ${error}`}
                  </p>
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
                      {feedbackError && (
                        <div className="error-message" style={{ marginTop: 8 }}>
                          {feedbackError}
                        </div>
                      )}
                    </div>

                    <div className="glass-card panel" style={{ marginTop: 18 }}>
                      <div className="eyebrow">Recommendation</div>
                      <p className="card-copy">{result.recommendation}</p>
                      
                      <div className="feedback-buttons" style={{ marginTop: 16 }}>
                        <button
                          className="button-secondary"
                          onClick={() => handleFeedback(true)}
                        >
                          Correct
                        </button>
                        <button
                          className="button-secondary"
                          onClick={() => handleFeedback(false)}
                          style={{ marginLeft: 8 }}
                        >
                          Incorrect
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div style={{ marginTop: 16 }}>
                    <p className="card-copy" style={{ color: 'var(--muted-2)' }}>
                      {isLoading 
                        ? "Analyzing scenario..." 
                        : "Describe a scenario to get a machine-backed prediction."}
                    </p>
                    {isLoading && (
                      <div style={{
                        marginTop: 12,
                        height: 2,
                        background: 'var(--border)',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: '100%',
                          height: '100%',
                          background: 'white',
                          animation: 'loading 2s ease-in-out infinite'
                        }}></div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="glass-card panel-lg">
                <div className="eyebrow">System Status</div>
                <div className="system-stats">
                  <div className="system-stat">
                    <span className="stat-label">System Accuracy</span>
                    <span className="stat-value">
                      {systemAccuracy !== null 
                        ? `${Math.round(systemAccuracy * 100)}%`
                        : "Calculating..."}
                    </span>
                  </div>
                </div>
                
                <p className="card-copy" style={{ marginTop: 16 }}>
                  This system learns from every outcome. Your feedback improves its accuracy.
                </p>
              </div>
            </div>

            <div className="glass-card panel-lg" style={{ marginTop: 32 }}>
              <div className="eyebrow">Recent Scenarios</div>
              
              <div className="history-list">
                {historyItems.map((item) => (
                  <div key={item.id} className="history-item glass-card panel">
                    <div className="history-preview">
                      {item.input_text?.slice(0, 100) || "No input text"}...
                    </div>
                    <div className="history-stats">
                      <div className="history-stat">
                        <span className="stat-label">Score</span>
                        <span className="stat-value">
                          {Math.round((item.score || 0) * 100)}%
                        </span>
                      </div>
                      <div className="history-stat">
                        <span className="stat-label">Confidence</span>
                        <span className="stat-value">
                          {Math.round((item.confidence || 0) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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
