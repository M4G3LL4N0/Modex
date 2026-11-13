type ProductHonestyNoteProps = { status: "demo" | "prototype" | "live" };

const STATUS_LABELS: Record<ProductHonestyNoteProps["status"], string> = {
  demo: "Interactive demonstration",
  prototype: "Prototype",
  live: "Live product",
};

export function ProductHonestyNote({ status }: ProductHonestyNoteProps) {
  return (
    <section className="section" aria-label="Product status">
      <div className="container">
        <p className="section-copy" style={{ margin: 0 }}>
          <strong>{STATUS_LABELS[status]}.</strong> Modex is experimental. Demonstration
          outputs are exploratory signals for further testing, not validated scientific
          conclusions or decision advice.
        </p>
      </div>
    </section>
  );
}
