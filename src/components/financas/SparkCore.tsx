import { Zap, DollarSign } from "lucide-react";

const SparkCore = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer rotating ring */}
      <div
        className="absolute w-28 h-28 rounded-full border-2 animate-spark-rotate"
        style={{ borderColor: "hsl(145 63% 49% / 0.3)" }}
      />
      <div
        className="absolute w-24 h-24 rounded-full border animate-spark-rotate"
        style={{
          borderColor: "hsl(145 63% 49% / 0.2)",
          animationDirection: "reverse",
          animationDuration: "6s",
        }}
      />

      {/* Core glow */}
      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center animate-neon-pulse"
        style={{
          background: "linear-gradient(to bottom right, hsl(145 63% 49%), hsl(145 80% 55%))",
        }}
      >
        <Zap className="w-10 h-10" style={{ color: "hsl(210 29% 8%)" }} fill="currentColor" />
        {/* Dollar magnifier icon */}
        <div
          className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center border"
          style={{
            background: "hsl(210 29% 18%)",
            borderColor: "hsl(145 63% 49% / 0.5)",
          }}
        >
          <DollarSign className="w-4 h-4" style={{ color: "hsl(145 63% 49%)" }} />
        </div>
      </div>

      {/* Neon data lines - left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-16 h-[2px] animate-data-flow"
        style={{
          background: "linear-gradient(to left, hsl(145 63% 49%), transparent)",
        }}
      />
      {/* Neon data lines - right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-16 h-[2px] animate-data-flow"
        style={{
          background: "linear-gradient(to right, hsl(145 63% 49%), transparent)",
        }}
      />
    </div>
  );
};

export default SparkCore;
