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

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <a href="/dashboard" className="button-primary">
              Open Dashboard
            </a>
            <a href="/technology" className="button-secondary">
              View Tech
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
