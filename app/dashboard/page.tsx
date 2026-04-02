"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function runPrediction() {
    if (!input.trim()) {
      setError("Please enter a scenario");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        body: JSON.stringify({ content: input }),
      });

      if (!res.ok) {
        throw new Error("Failed to get prediction");
      }

      const data = await res.json();
      setResult(data.prediction);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#06070b] text-white">
      <Header />
      <div className="p-10">
      <h1 className="text-3xl mb-6">Dashboard</h1>

      <div className="max-w-3xl mx-auto">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 bg-black/20 border border-white/10 rounded-lg focus:border-white/20 focus:ring-0"
          placeholder="Enter scenario..."
          rows={5}
        />

        <button
          onClick={runPrediction}
          disabled={isLoading}
          className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Analyzing..." : "Run Prediction"}
        </button>

        {error && (
          <div className="mt-4 text-red-400 text-sm">{error}</div>
        )}

        {result && (
          <div className="mt-6 glass-panel p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="text-sm text-white/60">Prediction</div>
                <div className="text-lg font-medium">{result.recommendation}</div>
              </div>
              <div className="text-sm text-white/60">
                Confidence: {(result.confidence * 100).toFixed(0)}%
              </div>
            </div>
            <div className="mt-4 text-sm text-white/60">
              Risk Level: <span className="capitalize">{result.risk_level}</span>
            </div>
          </div>
        )}
      </div>
      </div>
      <Footer />
    </main>
  );
}
