"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Page() {
  const router = useRouter();

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
      {/* Cinematic Hero Section */}
      <section className="hero-container">
        <div className="hero-backdrop" />
        <div className="hero-content container">
          <div className="hero-mark">MX</div>
          <h1 className="hero-headline">
            <span className="hero-gradient">Discover Hidden Structure</span>
            <span className="hero-subline">in Complex Systems</span>
          </h1>
          <p className="hero-description">
            Modex is an experimental intelligence platform that identifies
            recurring patterns across animal communication, fluid dynamics, 
            material interactions, and unknown signal spaces.
          </p>
          <div className="hero-actions">
            <button className="hero-button primary" onClick={() => router.push('/dashboard')}>
              Launch Experiments
            </button>
            <button className="hero-button secondary" onClick={() => router.push('/dashboard')}>
              Research Console
            </button>
          </div>
        </div>
      </section>

      {/* Premium Thesis Slab */}
      <section className="slab-container">
        <div className="slab-content container">
          <div className="slab-header">
            <h2 className="slab-title">The Modex Engine</h2>
            <p className="slab-description">
              An end-to-end system for experimental discovery through machine intelligence
            </p>
          </div>
          <div className="slab-grid">
            <div className="slab-card">
              <h3 className="slab-card-title">Ingest</h3>
              <p className="slab-card-description">
                Accept signals from any domain in structured or unstructured formats
              </p>
            </div>
            <div className="slab-card">
              <h3 className="slab-card-title">Embed</h3>
              <p className="slab-card-description">
                Transform signals into comparable representations using deterministic embedding
              </p>
            </div>
            <div className="slab-card">
              <h3 className="slab-card-title">Compare</h3>
              <p className="slab-card-description">
                Measure similarity between embedded signals across domains and modalities
              </p>
            </div>
            <div className="slab-card">
              <h3 className="slab-card-title">Cluster</h3>
              <p className="slab-card-description">
                Identify recurring patterns through unsupervised clustering
              </p>
            </div>
            <div className="slab-card">
              <h3 className="slab-card-title">Hypothesize</h3>
              <p className="slab-card-description">
                Generate testable models and predictions about system structure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Tracks - Premium Blocks */}
      <section className="research-container">
        <div className="research-content container">
          <div className="research-header">
            <h2 className="research-title">Research Tracks</h2>
            <p className="research-description">
              Focused exploration areas for discovering fundamental patterns
            </p>
          </div>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-card-header">
                <div className="research-card-icon">AX</div>
                <h3 className="research-card-title">Animal Communication</h3>
              </div>
              <p className="research-card-description">
                Analyze and compare vocalizations, gestures, and behavioral patterns across species
              </p>
              <div className="research-card-metrics">
                <div className="research-metric">
                  <span className="metric-value">1,024+</span>
                  <span className="metric-label">Signals</span>
                </div>
                <div className="research-metric">
                  <span className="metric-value">256+</span>
                  <span className="metric-label">Patterns</span>
                </div>
              </div>
            </div>

      <section className="section">
        <div className="container">
          <div className="glass-card panel-xl">
            <h2 className="section-title">The Modex Engine</h2>
            <p className="section-copy">
              Modex ingests signals from complex systems, embeds them into comparable representations,
              detects patterns through clustering, and generates testable hypotheses about underlying structure.
            </p>
            <div className="system-stats" style={{ marginTop: 32 }}>
              <div className="metric">
                <div className="metric-label">Ingest</div>
                <div className="metric-value">Signals</div>
              </div>
              <div className="metric">
                <div className="metric-label">Embed</div>
                <div className="metric-value">Representations</div>
              </div>
              <div className="metric">
                <div className="metric-label">Compare</div>
                <div className="metric-value">Relationships</div>
              </div>
              <div className="metric">
                <div className="metric-label">Cluster</div>
                <div className="metric-value">Patterns</div>
              </div>
              <div className="metric">
                <div className="metric-label">Hypothesize</div>
                <div className="metric-value">Structure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Experiment Domains</h2>
          <div className="grid-2">
            <div className="system-panel">
              <div className="eyebrow">Research Domain</div>
              <h3 className="card-title">Animal Communication</h3>
              <p className="card-copy">
                Analyze and compare vocalizations, gestures, and behavioral patterns across species.
              </p>
              <div className="metric" style={{ marginTop: 24 }}>
                <div className="metric-label">Signals</div>
                <div className="metric-value">256+</div>
              </div>
            </div>
            <div className="system-panel">
              <div className="eyebrow">Research Domain</div>
              <h3 className="card-title">Fluid Dynamics</h3>
              <p className="card-copy">
                Model and predict water flow, turbulence, and complex fluid interactions.
              </p>
              <div className="metric" style={{ marginTop: 24 }}>
                <div className="metric-label">Patterns</div>
                <div className="metric-value">128+</div>
              </div>
            </div>
            <div className="system-panel">
              <div className="eyebrow">Research Domain</div>
              <h3 className="card-title">Material Interactions</h3>
              <p className="card-copy">
                Study how materials behave under stress, heat, and environmental conditions.
              </p>
              <div className="metric" style={{ marginTop: 24 }}>
                <div className="metric-label">Clusters</div>
                <div className="metric-value">64+</div>
              </div>
            </div>
            <div className="system-panel">
              <div className="eyebrow">Research Domain</div>
              <h3 className="card-title">Unknown Signals</h3>
              <p className="card-copy">
                Discover patterns in unstructured, novel, or poorly understood signal spaces.
              </p>
              <div className="metric" style={{ marginTop: 24 }}>
                <div className="metric-label">Hypotheses</div>
                <div className="metric-value">32+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">How Modex Works</h2>
          <div className="system-stats">
            <div className="metric">
              <div className="metric-label">Ingest</div>
              <div className="metric-value">Signals</div>
            </div>
            <div className="metric">
              <div className="metric-label">Embed</div>
              <div className="metric-value">Representations</div>
            </div>
            <div className="metric">
              <div className="metric-label">Compare</div>
              <div className="metric-value">Relationships</div>
            </div>
            <div className="metric">
              <div className="metric-label">Cluster</div>
              <div className="metric-value">Patterns</div>
            </div>
            <div className="metric">
              <div className="metric-label">Hypothesize</div>
              <div className="metric-value">Structure</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">The Modex Platform</h2>
          <div className="glass-card panel-xl">
            <div className="grid-2">
              <div>
                <h3 className="card-title">Experimental Discovery</h3>
                <p className="card-copy">
                  Modex provides a unified surface for running experiments across domains,
                  comparing results, and generating insights about complex systems.
                </p>
              </div>
              <div className="system-stats">
                <div className="metric">
                  <div className="metric-label">Signals</div>
                  <div className="metric-value">1,024+</div>
                </div>
                <div className="metric">
                  <div className="metric-label">Clusters</div>
                  <div className="metric-value">256+</div>
                </div>
                <div className="metric">
                  <div className="metric-label">Hypotheses</div>
                  <div className="metric-value">128+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Long-Term Vision</h2>
          <p className="section-copy">
            Modex aims to become the platform for experimental discovery across domains,
            helping researchers and practitioners uncover hidden structure in complex systems
            through machine learning and pattern detection.
          </p>
        </div>
      </section>
    </main>
  );
}
