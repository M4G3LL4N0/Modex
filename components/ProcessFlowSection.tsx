const steps = [
  { number: "01", title: "Describe a signal", detail: "Add a text-encoded signal and its experiment context." },
  { number: "02", title: "Compare representations", detail: "Inspect similarity against configured or local demo signals." },
  { number: "03", title: "Review groupings", detail: "Explore clusters and the thresholds used to form them." },
  { number: "04", title: "Plan the next test", detail: "Treat a surfaced pattern as a hypothesis to validate." },
];

export function ProcessFlowSection() {
  return (
    <section className="section" aria-labelledby="process-flow-title">
      <div className="container">
        <div className="section-label">
          <span className="section-label-dot" aria-hidden="true" />
          A bounded experiment flow
        </div>
        <h2 className="section-title" id="process-flow-title">From signal to testable question</h2>
        <p className="section-copy">
          The workflow organizes exploratory comparisons. It does not establish causation,
          diagnose a system, or replace domain-specific validation.
        </p>
        <ol className="process-grid" style={{ marginTop: 32 }}>
          {steps.map((step) => (
            <li className="process-step" key={step.number}>
              <div className="process-number">{step.number}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
