"use client";

import Link from "next/link";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";

export default function HomePage() {
  return (
    <div>
      <section className="hero-container" data-reveal>
        <div className="hero-backdrop" />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="container hero-inner">
          <div className="hero-copy-wrap">
            <div className="section-label">
              <span className="section-label-dot" />
              Experimental ML · Pattern discovery
            </div>

            <h1 className="hero-title">
              Hidden structure in real-world
              <br />
              signals — made legible
            </h1>

            <p className="hero-copy">
              Modex is an experimental machine learning platform for discovering hidden
              patterns in real-world systems. Ingest signals, embed them, compare
              relationships, cluster similar structures, and generate early hypotheses —
              across domains from bioacoustics to fluids, materials, and unknown signal
              spaces.
            </p>

            <div className="button-row hero-actions">
              <Link className="button-primary" href="/demo">
                Run signal demo
              </Link>
              <Link className="button-secondary" href="/dashboard">
                Explore experiments
              </Link>
              <Link className="button-secondary" href="/technology">
                How it works
              </Link>
            </div>
          </div>

          <div className="motion-card motion-hover-lift hero-panel glass-card panel-lg">
            <div className="eyebrow">Core flow</div>
            <h2 className="card-title">Signal → embedding → similarity → clusters → hypotheses</h2>
            <p className="card-copy">
              Modex is built as a research-facing experimentation engine — not a black-box
              decision product. The console runs ingestion, deterministic fallback embeddings
              when no external keys are present, similarity against stored signals when a
              database is configured, and local structural clustering for offline demos.
            </p>

            <div className="pipeline-steps">
              <div className="pipeline-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <div className="step-title">Ingest</div>
                  <div className="step-description">
                    Bring text-encoded signal descriptions and typed experiment contexts into
                    the pipeline.
                  </div>
                </div>
              </div>
              <div className="pipeline-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <div className="step-title">Embed</div>
                  <div className="step-description">
                    Project signals into a fixed embedding space — deterministic offline or
                    upgradable to hosted models later.
                  </div>
                </div>
              </div>
              <div className="pipeline-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">Discover</div>
                  <div className="step-description">
                    Score similarity, group related structures, and surface concise hypotheses
                    for further experiments.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <div className="slab">
            <div className="section-label">
              <span className="section-label-dot" />
              Thesis
            </div>

            <h2 className="section-title">Pattern discovery, not opinion scoring</h2>

            <p className="section-copy">
              Many real-world systems emit signals that repeat, rhyme, or cluster in ways
              humans barely notice. Modex focuses on representation and comparison — helping
              teams explore structure before committing to a specific scientific story or
              product narrative.
            </p>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <div className="section-label">
            <span className="section-label-dot" />
            Research tracks
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="eyebrow">Animal communication</div>
              <h3 className="card-title">Vocal & behavioral sequences</h3>
              <p className="card-copy">
                Explore recurrent motifs and similarity structure in described calls,
                bursts, and temporal sequences.
              </p>
            </article>

            <article className="feature-card">
              <div className="eyebrow">Fluid / water dynamics</div>
              <h3 className="card-title">Flow & interaction signatures</h3>
              <p className="card-copy">
                Encode narratives of turbulence, waves, and coupling events to compare
                patterns across regimes.
              </p>
            </article>

            <article className="feature-card">
              <div className="eyebrow">Material interactions</div>
              <h3 className="card-title">Contact & response patterns</h3>
              <p className="card-copy">
                Capture how materials meet, wear, resonate, or transition — as structured
                text signals for embedding.
              </p>
            </article>

            <article className="feature-card">
              <div className="eyebrow">Unknown signals</div>
              <h3 className="card-title">Discovery-first workflows</h3>
              <p className="card-copy">
                When the domain is immature, Modex prioritizes clustering and hypotheses you
                can test — not premature labels.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <div className="slab">
            <div className="section-label">
              <span className="section-label-dot" />
              How it works
            </div>

            <h2 className="section-title">An experiment console for signals</h2>

            <p className="section-copy">
              Each run walks the same scientific skeleton: represent the signal, compare it to
              peers, aggregate clusters, and phrase an early hypothesis string you can refine
              with domain experiments.
            </p>

            <div className="process-grid">
              <div className="process-step">
                <div className="process-number">01</div>
                <div className="process-title">Typed experiments</div>
                <p className="process-description">
                  Choose animal, fluid, material, sequence, or custom modes so embeddings and
                  clusters inherit the right framing.
                </p>
              </div>
              <div className="process-step">
                <div className="process-number">02</div>
                <div className="process-title">Similarity graph</div>
                <p className="process-description">
                  When a database is configured, compare against stored signals; otherwise the UI
                  still renders local similarity playgrounds. No paid model key is required.
                </p>
              </div>
              <div className="process-step">
                <div className="process-number">03</div>
                <div className="process-title">Clusters</div>
                <p className="process-description">
                  Group nearby embeddings with transparent thresholds — tuned lower for
                  offline deterministic embeddings.
                </p>
              </div>
              <div className="process-step">
                <div className="process-number">04</div>
                <div className="process-title">Hypothesis line</div>
                <p className="process-description">
                  Surface a concise interpretation tier (strong / possible / weak pattern) to
                  steer your next measurement — not to replace lab validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <div className="motion-card motion-hover-lift glass-card panel-lg">
            <div className="grid-2">
              <div>
                <div className="eyebrow">Technology</div>
                <h2 className="card-title">Composable ML primitives</h2>
                <p className="card-copy">
                  Next.js API routes wrap a thin orchestration layer (`modex-core`) over
                  embeddings, cosine similarity, clustering, and discovery helpers. Swap in
                  richer models when you are ready — the pipeline stays the same.
                </p>
                <div className="button-row" style={{ marginTop: 24 }}>
                  <Link className="button-primary" href="/technology">
                    Read architecture
                  </Link>
                </div>
              </div>
              <div className="motion-card motion-hover-lift glass-card panel">
                <div className="eyebrow">Investor narrative</div>
                <p className="card-copy">
                  Modex sits upstream of vertical SaaS: cross-domain discovery infrastructure
                  with a credible experiment UX and a path toward richer modalities (audio,
                  time-series) when datasets attach.
                </p>
                <div className="button-row" style={{ marginTop: 20 }}>
                  <Link className="button-secondary" href="/investor">
                    View thesis
                  </Link>
                  <Link className="button-secondary" href="/updates">
                    Roadmap notes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <div className="slab" style={{ textAlign: "center" }}>
            <div className="section-label">
              <span className="section-label-dot" />
              Next step
            </div>
            <h2 className="section-title">Open the experiment console</h2>
            <p className="section-copy" style={{ maxWidth: 560, margin: "0 auto" }}>
              Run a typed experiment, inspect embeddings and clusters, and export the session
              log from your browser — no auth required for the MVP shell.
            </p>
            <div
              className="button-row"
              style={{
                marginTop: 36,
                justifyContent: "center",
                gap: 20,
              }}
            >
              <Link className="button-primary" href="/dashboard">
                Launch dashboard
              </Link>
              <Link className="button-secondary" href="/about">
                About Modex
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProcessFlowSection />
      <ProductHonestyNote status="demo" />
    </div>
  );
}
