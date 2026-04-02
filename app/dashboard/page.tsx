"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);

  async function runPrediction() {
    const res = await fetch("/api/predict", {
      method: "POST",
      body: JSON.stringify({ content: input }),
    });

    const data = await res.json();
    setResult(data);
  }

  return (
    <main className="min-h-screen bg-[#06070b] text-white p-10">
      <h1 className="text-3xl mb-6">Dashboard</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-4 bg-black border border-white/20"
        placeholder="Enter scenario..."
      />

      <button
        onClick={runPrediction}
        className="mt-4 bg-white text-black px-4 py-2 rounded"
      >
        Run
      </button>

      {result && (
        <pre className="mt-6 bg-black p-4 border border-white/20">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  );
}
