"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (inputRef.current?.value) {
      router.push(`/dashboard?input=${encodeURIComponent(inputRef.current.value)}`);
    }
  };

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
      <section className="hero-section">
        <div className="hero-backdrop" />
        <div className="container">
          <div className="hero-content">
            <div className="brand-mark">MX</div>
            <h1 className="hero-title">
              Experimental Intelligence<br />
              for Complex Systems
            </h1>
            <p className="hero-copy">
              Modex is a machine learning research platform that discovers<br />
              hidden patterns in signals, behaviors, and interactions.
            </p>
            <div className="hero-actions">
              <button 
                className="button-primary"
                onClick={() => router.push('/dashboard')}
              >
                Explore Experiments
              </button>
              <button
                className="button-secondary"
                onClick={() => router.push('/dashboard')}
              >
                Open Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What Modex Is</h2>
          <p className="section-copy">
            Modex ingests signals from complex systems, embeds them into comparable representations,
            detects patterns through clustering, and generates testable hypotheses about underlying structure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Experiment Domains</h2>
          <div className="grid-2">
            <div className="glass-card panel-lg">
              <h3 className="card-title">Animal Communication</h3>
              <p className="card-copy">
                Analyze and compare vocalizations, gestures, and behavioral patterns across species.
              </p>
            </div>
            <div className="glass-card panel-lg">
              <h3 className="card-title">Fluid Dynamics</h3>
              <p className="card-copy">
                Model and predict water flow, turbulence, and complex fluid interactions.
              </p>
            </div>
            <div className="glass-card panel-lg">
              <h3 className="card-title">Material Interactions</h3>
              <p className="card-copy">
                Study how materials behave under stress, heat, and environmental conditions.
              </p>
            </div>
            <div className="glass-card panel-lg">
              <h3 className="card-title">Unknown Signals</h3>
              <p className="card-copy">
                Discover patterns in unstructured, novel, or poorly understood signal spaces.
              </p>
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
