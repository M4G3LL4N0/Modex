"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type PredictionResult = {
  score: number;
  confidence: number;
  risk_level: "low" | "moderate" | "high";
  recommendation: string;
};

type PredictionInput = {
  id: string;
  content: string;
};

type Prediction = {
  input: PredictionInput;
  prediction: PredictionResult;
  outcome?: {
    success: boolean;
    actual_outcome: string;
  };
};

export default function DashboardPage() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPrediction, setCurrentPrediction] = useState<Prediction | null>(null);
  const [history, setHistory] = useState<Prediction[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/history');
        if (!response.ok) throw new Error('Failed to fetch history');
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error('History fetch error:', error);
      }
    };
    fetchHistory();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: input }),
      });

      if (!response.ok) throw new Error("Prediction failed");

      const data = await response.json();
      setCurrentPrediction(data);
      setHistory(prev => [data, ...prev].slice(0, 10));
      setInput("");
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Failed to make prediction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[540px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(71,113,255,0.20),rgba(71,113,255,0.04),transparent_68%)] blur-3xl" />
      
      <Header />
      
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">New Prediction</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your input for prediction..."
                  rows={4}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isLoading ? "Processing..." : "Predict"}
                </button>
              </form>
            </div>

            {currentPrediction && (
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-4">Prediction Result</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Score</span>
                    <span className="font-mono text-white">
                      {(currentPrediction.prediction.score * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Confidence</span>
                    <span className="font-mono text-white">
                      {(currentPrediction.prediction.confidence * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Risk Level</span>
                    <span className={`font-mono ${
                      currentPrediction.prediction.risk_level === 'high' ? 'text-red-400' :
                      currentPrediction.prediction.risk_level === 'moderate' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {currentPrediction.prediction.risk_level}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-blue-200 mb-2">Recommendation</h3>
                    <p className="text-white">{currentPrediction.prediction.recommendation}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="glass-panel p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Prediction History</h2>
            <div className="space-y-4">
              {history.length > 0 ? (
                history.map((item) => (
                  <div 
                    key={item.input.id} 
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <p 
                      className="text-white line-clamp-2 mb-2 cursor-pointer"
                      onClick={() => setCurrentPrediction(item)}
                    >
                      {item.input.content}
                    </p>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-blue-200">
                        Score: {(item.prediction.score * 100).toFixed(0)}%
                      </span>
                      <span className={`
                        ${item.prediction.risk_level === 'high' ? 'text-red-400' :
                          item.prediction.risk_level === 'moderate' ? 'text-yellow-400' :
                          'text-green-400'}
                      `}>
                        {item.prediction.risk_level}
                      </span>
                    </div>
                    {item.outcome && (
                      <div className="text-xs mt-2">
                        <span className={item.outcome.success ? 'text-green-400' : 'text-red-400'}>
                          {item.outcome.success ? '✓ Success' : '✗ Failure'}
                        </span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-white/50 italic">No predictions yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
