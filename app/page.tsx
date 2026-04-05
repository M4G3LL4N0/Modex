"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <main className="page-shell">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              The Intelligence Layer<br />
              <span className="gradient-text">for Decisions</span>
            </h1>
            <p className="hero-copy">
              Modex transforms raw scenarios into structured judgment, confidence,
              and action. The first infrastructure for machine-backed operational
              intelligence.
            </p>
            <div className="hero-actions">
              <a href="/dashboard" className="button-primary">
                Open Dashboard
              </a>
              <a href="/technology" className="button-secondary">
                View Technology
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section">
        <div className="container">
          <div className="glass-panel panel-xl">
            <h2 className="section-title">Why This Matters</h2>
            <p className="section-copy">
              Operational decisions remain unstructured and subjective. Humans guess,
              systems react. We're building the infrastructure to assist and augment
              human judgment with machine intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="glass-panel panel-lg">
              <h3 className="panel-title">Input</h3>
              <p className="panel-copy">
                Structured scenario analysis with clear parameters and context.
              </p>
            </div>
            <div className="glass-panel panel-lg">
              <h3 className="panel-title">Prediction</h3>
              <p className="panel-copy">
                Machine-backed reasoning that surfaces insights and patterns.
              </p>
            </div>
            <div className="glass-panel panel-lg">
              <h3 className="panel-title">Outcome</h3>
              <p className="panel-copy">
                Actionable recommendations with confidence scoring and risk analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="glass-panel panel-lg">
              <h3 className="panel-title">Prediction</h3>
              <p className="panel-copy">
                Structured scenario analysis with scored outcomes and confidence
                levels.
              </p>
            </div>
            <div className="glass-panel panel-lg">
              <h3 className="panel-title">Inference</h3>
              <p className="panel-copy">
                Machine-backed reasoning that surfaces insights and patterns.
              </p>
            </div>
            <div className="glass-panel panel-lg">
              <h3 className="panel-title">Learning</h3>
              <p className="panel-copy">
                Outcome-driven improvement that compounds over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Surface */}
      <section className="section">
        <div className="container">
          <div className="glass-panel panel-xl">
            <h2 className="section-title">The Modex Engine</h2>
            <p className="section-copy">
              A real-time decision intelligence layer that transforms operator
              input into structured recommendations.
            </p>
            <div className="engine">
              <div className="metric">
                <span className="metric-label">Prediction Accuracy</span>
                <span className="metric-value">92%</span>
              </div>
              <div className="metric">
                <span className="metric-label">Confidence Threshold</span>
                <span className="metric-value">0.85</span>
              </div>
              <div className="metric">
                <span className="metric-label">Active Scenarios</span>
                <span className="metric-value">142</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long Term Vision */}
      <section className="section">
        <div className="container">
          <div className="glass-panel panel-xl">
            <h2 className="section-title">The Decision Infrastructure</h2>
            <p className="section-copy">
              Modex is building the foundational layer for machine-backed operational
              intelligence. We're creating the platform for structured decision-making
              at scale.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
