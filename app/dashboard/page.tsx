"use client";

import { useState, useEffect } from "react";
import "./dashboard.css";

type PredictionResult = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

export default function DashboardPage() {
  // Add some basic styles inline since we don't have access to the CSS file
  const styles = {
    historyList: {
      marginTop: '16px',
    },
    historyItem: {
      padding: '12px 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      '&:last-child': {
        borderBottom: 'none',
      },
    },
    historyContent: {
      fontSize: '14px',
      opacity: 0.8,
      marginBottom: '8px',
    },
    historyStats: {
      display: 'flex',
      gap: '12px',
      fontSize: '12px',
    },
    historyScore: {
      opacity: 0.6,
    },
    historyOutcome: {
      fontWeight: '500',
      '&.success': {
        color: '#4ade80',
      },
      '&.failure': {
        color: '#f87171',
      },
    },
    emptyState: {
      opacity: 0.6,
      fontSize: '14px',
      textAlign: 'center',
      padding: '16px 0',
    },
    accuracyStats: {
      marginTop: '16px',
      textAlign: 'center',
    },
    accuracyPercent: {
      fontSize: '24px',
      fontWeight: '500',
    },
    accuracyCount: {
      fontSize: '14px',
      opacity: 0.6,
      marginTop: '4px',
    },
  };
  const [input, setInput] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('input') || '';
    }
    return '';
  });
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usage, setUsage] = useState(0);
  const [isPro, setIsPro] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const [accuracy, setAccuracy] = useState<number | null>(null);

  const LIMIT = 5;

  useEffect(() => {
    // Fetch history and accuracy
    async function fetchData() {
      try {
        const [historyRes, accuracyRes] = await Promise.all([
          fetch('/api/history'),
          fetch('/api/accuracy')
        ]);
        
        const historyData = await historyRes.json();
        const accuracyData = await accuracyRes.json();
        
        setHistory(historyData.items || []);
        setAccuracy(accuracyData.accuracy || null);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    fetchData();
  }, []);

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
                  padding: '20px',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: '18px',
                  marginBottom: '12px',
                  fontWeight: '500'
                }}>
                  You've reached your free limit
                </div>
                <div style={{
                  fontSize: '14px',
                  opacity: 0.8,
                  marginBottom: '20px'
                }}>
                  Upgrade to continue improving your decisions
                </div>
                <button 
                  className="button-primary"
                  onClick={() => setIsPro(true)}
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  Upgrade to Pro
                </button>
              </div>
            )}
          </div>

          {/* DECISION LOG */}
          <div className="glass-card panel-lg" style={{ marginTop: 30 }}>
            <h2 className="card-title">Your Decision Log</h2>
            
            {history.length > 0 ? (
              <div className="history-list">
                {history.map((item) => (
                  <div key={item.id} className="history-item">
                    <div className="history-content">
                      {item.input?.content || 'No content'}
                    </div>
                    <div className="history-stats">
                      <div className="history-score">
                        Score: {Math.round((item.prediction?.score || 0) * 100)}%
                      </div>
                      {item.outcome !== undefined && (
                        <div className={`history-outcome ${item.outcome ? 'success' : 'failure'}`}>
                          {item.outcome ? '✅ Correct' : '❌ Incorrect'}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">No decisions logged yet</div>
            )}
          </div>

          {/* ACCURACY */}
          <div className="glass-card panel-lg" style={{ marginTop: 30 }}>
            <h2 className="card-title">Track Your Accuracy</h2>
            <div className="accuracy-stats">
              {accuracy !== null ? (
                <>
                  <div className="accuracy-percent">
                    {Math.round(accuracy * 100)}% correct
                  </div>
                  <div className="accuracy-count">
                    Based on {history.filter(h => h.outcome !== undefined).length} decisions
                  </div>
                </>
              ) : (
                <div className="empty-state">Not enough data to calculate accuracy</div>
              )}
            </div>
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
