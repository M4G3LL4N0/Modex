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
              Machine Intelligence<br />
              <span className="gradient-text">for Decisions</span>
            </h1>
            <p className="hero-copy">
              Modex is building the operating layer for machine-backed judgment,
              prediction, and adaptive intelligence.
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

      {/* System Thesis */}
      <section className="section">
        <div className="container">
          <div className="glass-panel panel-xl">
            <h2 className="section-title">The Decision Layer</h2>
            <p className="section-copy">
              Modex transforms raw scenarios into scored judgment, confidence,
              and action. We're building the infrastructure for machine-backed
              operational intelligence.
            </p>
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
                <span>Prediction Accuracy</span>
                <span>92%</span>
              </div>
              <div className="metric">
                <span>Confidence Threshold</span>
                <span>0.85</span>
              </div>
              <div className="metric">
                <span>Active Scenarios</span>
                <span>142</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Expansion */}
      <section className="section">
        <div className="container">
          <div className="glass-panel panel-xl">
            <h2 className="section-title">Infrastructure for Intelligence</h2>
            <p className="section-copy">
              Modex is evolving from a product into a platform - the foundation
              for machine-backed operational systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
