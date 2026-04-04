export default function Page() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="container">

          <h1 className="hero-title">
            Machine intelligence<br />
            <span className="gradient-text">for decisions.</span>
          </h1>

          <p className="hero-copy">
            Modex is building a decision intelligence layer that transforms raw
            scenarios into scored judgment, confidence, and action.
          </p>

          <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
            <a href="/dashboard" className="button-primary">Open Dashboard</a>
            <a href="/technology" className="button-secondary">View Tech</a>
          </div>

        </div>
      </section>
    </main>
  );
}
