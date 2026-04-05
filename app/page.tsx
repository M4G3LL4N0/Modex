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
              Stop Guessing.<br />
              <span className="gradient-text">Start Scoring Decisions.</span>
            </h1>
            <p className="hero-copy">
              Modex turns real-world scenarios into structured judgment, confidence, and action.
            </p>
            <div className="hero-input">
              <textarea
                className="textarea-box"
                placeholder="Describe your situation..."
              />
              <a href="/dashboard" className="button-primary">
                Analyze
              </a>
            </div>
            <p className="hero-subtext">
              Used for decisions across business, relationships, and risk.
            </p>
          </div>
        </div>
      </section>

      {/* Product Surface */}
      <section className="section">
        <div className="container">
          <div className="glass-panel panel-xl">
            <h2 className="section-title">How It Works</h2>
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
    </main>
  );
}
