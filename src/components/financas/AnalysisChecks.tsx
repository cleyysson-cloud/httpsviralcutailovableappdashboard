import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const AnalysisChecks = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  const checks = [
    { text: "Detectando termo: 'HGLG11'.", icon: "📊" },
    { text: "Detectando termo: 'Bitcoin'.", icon: "₿" },
    { text: "Detectando termo: 'Cripto'.", icon: "🏦" },
    { text: "Gerando Legenda Dinâmica.", icon: "✨" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= checks.length) return prev;
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [checks.length]);

  return (
    <div className="w-full max-w-lg space-y-2">
      {checks.map((check, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all"
          style={{
            background: i < visibleCount ? "hsl(145 63% 49% / 0.08)" : "hsl(210 25% 14% / 0.5)",
            border: `1px solid ${i < visibleCount ? "hsl(145 63% 49% / 0.3)" : "hsl(210 25% 14% / 0.3)"}`,
            opacity: i <= visibleCount ? 1 : 0.3,
            animation: i < visibleCount ? "check-appear 0.4s ease-out" : "none",
          }}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            {i < visibleCount ? (
              <Check className="w-3 h-3" style={{ color: "hsl(145 63% 49%)" }} />
            ) : (
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "hsl(210 10% 55% / 0.5)" }}
              />
            )}
          </div>
          <span
            className="text-xs flex-1"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: i < visibleCount ? "hsl(150 60% 80%)" : "hsl(210 10% 55%)",
            }}
          >
            {check.text}
          </span>
          <span className="text-sm">{check.icon}</span>
          {i < visibleCount && (
            <span
              className="text-[10px] font-bold"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "hsl(145 63% 49%)",
              }}
            >
              [OK]
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnalysisChecks;
