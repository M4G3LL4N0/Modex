"use client";

import { useState } from "react";
import "./dashboard.css";

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
  const [usage, setUsage] = useState(0);
  const [isPro, setIsPro] = useState(false);

  const LIMIT = 5;

  async function runPrediction() {
    if (!isPro && usage >= LIMIT) return;

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
      setUsage((u) => u + 1);
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
              <div className="brand-subtitle">Decision Intelligence</div>
            </div>
          </div>

          <nav className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/technology" className="nav-link">Technology</a>
            <a href="/investors" className="nav-link">Investors</a>
          </nav>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 80 }}>
        <div className="container">

          <h1 className="section-title">Run a scenario</h1>
          <p className="section-copy">
            Describe a decision. Modex will evaluate it with score, confidence, and guidance.
          </p>

          {/* INPUT */}
          <div className="glass-card panel-lg" style={{ marginTop: 30 }}>
            <textarea
              className="textarea-box"
              placeholder="Describe your situation..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
              <button
                onClick={runPrediction}
                disabled={!input || isLoading || usage >= LIMIT}
                className="button-primary"
                style={{ opacity: usage >= LIMIT ? 0.5 : 1 }}
              >
                {usage >= LIMIT
                  ? "Limit reached"
                  : isLoading
                  ? "Running..."
                  : "Run Prediction"}
              </button>
            </div>

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.6 }}>
              {isPro ? 'Pro user' : `${usage}/${LIMIT} free runs used`}
            </div>

            {usage >= LIMIT && (
              <div
                className="glass-card panel"
                style={{
                  marginTop: 16,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                <div style={{ marginBottom: 8 }}>Upgrade to Pro to continue</div>
                <button 
                  className="button-primary"
                  onClick={() => setIsPro(true)}
                  style={{ width: '100%' }}
                >
                  Upgrade
                </button>
              </div>
            )}
          </div>

          {/* RESULT */}
          <div style={{ marginTop: 30 }}>
            {error && (
              <div className="glass-card panel">{error}</div>
            )}

            {result && (
              <div className="glass-card panel-lg">
                <h2 className="card-title">Decision Analysis</h2>

                {/* Score Explanation */}
                <div className="card-section">
                  <h3 className="section-title">What this means</h3>
                  <p className="section-copy">
                    Your scenario scored {Math.round(result.score * 100)}%, indicating it's{' '}
                    {result.score > 0.7 ? 'highly favorable' : result.score > 0.4 ? 'moderately favorable' : 'low favorability'}.
                    With {Math.round(result.confidence * 100)}% confidence, we're{' '}
                    {result.confidence > 0.8 ? 'very certain' : result.confidence > 0.5 ? 'fairly certain' : 'somewhat uncertain'} about this assessment.
                  </p>
                </div>

                {/* Risk Interpretation */}
                <div className="card-section">
                  <h3 className="section-title">Risk Interpretation</h3>
                  <p className="section-copy">
                    The {result.risk_level} risk level suggests{' '}
                    {result.risk_level === 'high' ? 'significant potential challenges' :
                     result.risk_level === 'moderate' ? 'manageable risks with proper planning' :
                     'minimal expected complications'}.
                  </p>
                </div>

                {/* Suggested Action */}
                <div className="card-section">
                  <h3 className="section-title">Suggested Action</h3>
                  <p className="section-copy">
                    {result.recommendation}
                  </p>
                </div>

                {/* Metrics Summary */}
                <div className="metrics-summary">
                  <div className="metric">
                    <div className="metric-label">Score</div>
                    <div className="metric-value">{Math.round(result.score * 100)}%</div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">Confidence</div>
                    <div className="metric-value">{Math.round(result.confidence * 100)}%</div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">Risk</div>
                    <div className="metric-value">{result.risk_level}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
