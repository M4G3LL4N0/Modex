"use client";

import { useEffect, useRef, useState } from "react";
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
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Make better decisions</h1>
            <p className="hero-copy">
              Modex turns real-world scenarios into structured judgment, confidence, and action.
            </p>
            <div className="hero-input">
              <textarea
                className="textarea-box"
                placeholder="Should I take this job?\nShould I invest in this?\nShould I text her again?"
                ref={inputRef}
              />
              <button 
                className="button-primary"
                onClick={handleSubmit}
              >
                Analyze my decision
              </button>
            </div>
            <p className="hero-subtext">
              Used for decisions across business, relationships, and risk.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
