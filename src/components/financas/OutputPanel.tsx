const OutputPanel = () => {
  return (
    <div
      className="rounded-xl p-6 w-full max-w-sm backdrop-blur-sm"
      style={{
        background: "linear-gradient(145deg, hsl(210 25% 14% / 0.9), hsl(210 29% 10% / 0.95))",
        border: "1px solid hsl(145 63% 49% / 0.4)",
        boxShadow: "0 0 20px hsl(145 63% 49% / 0.3), 0 0 60px hsl(145 63% 49% / 0.1)",
      }}
    >
      <h3
        className="text-sm font-bold tracking-wider mb-4 text-center"
        style={{ fontFamily: "'Orbitron', sans-serif", color: "hsl(150 60% 80%)" }}
      >
        ÁREA DE VALIDAÇÃO DO VÍDEO PRONTO
      </h3>

      {/* Video preview mock */}
      <div
        className="relative rounded-lg overflow-hidden aspect-video border"
        style={{
          background: "hsl(210 34% 10%)",
          borderColor: "hsl(145 63% 49% / 0.2)",
        }}
      >
        {/* Simulated video frame */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "linear-gradient(to br, hsl(210 34% 10%), hsl(210 29% 18%))",
          }}
        >
          <div
            className="w-12 h-12 rounded-full border flex items-center justify-center"
            style={{
              background: "hsl(210 29% 18%)",
              borderColor: "hsl(145 63% 49% / 0.3)",
            }}
          >
            <div
              className="w-6 h-6 rounded-full"
              style={{ background: "hsl(210 10% 55% / 0.4)" }}
            />
          </div>
        </div>

        {/* Overlay: caption */}
        <div
          className="absolute bottom-0 left-0 right-0 p-2 backdrop-blur-sm"
          style={{ background: "hsl(240 10% 4% / 0.8)" }}
        >
          <p className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <span style={{ color: "hsl(210 10% 55%)" }}>...olha só o </span>
            <span className="font-bold" style={{ color: "hsl(145 63% 49%)" }}>HGLG11</span>
            <span style={{ color: "hsl(210 10% 55%)" }}>, um FII de logística...</span>
          </p>
        </div>

        {/* Mini chart overlay top-right */}
        <div
          className="absolute top-2 right-2 px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1"
          style={{ background: "hsl(240 10% 4% / 0.7)" }}
        >
          <svg width="40" height="16" viewBox="0 0 40 16">
            <polyline
              points="0,14 8,10 16,12 24,6 32,8 40,2"
              fill="none"
              stroke="hsl(145 63% 49%)"
              strokeWidth="2"
            />
          </svg>
          <span className="text-[10px] font-bold" style={{ color: "hsl(145 63% 49%)" }}>
            ↑ 2.3%
          </span>
        </div>
      </div>

      {/* Crypto overlay */}
      <div className="mt-3 flex items-center gap-3 justify-center">
        <p className="text-[10px]" style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(210 10% 55%)" }}>
          o mercado de{" "}
          <span className="font-bold" style={{ color: "hsl(150 60% 80%)" }}>Cripto</span>{" "}
          está aquecendo, especialmente o{" "}
          <span className="font-bold" style={{ color: "hsl(145 63% 49%)" }}>Bitcoin</span>.
        </p>
      </div>

      <div className="mt-2 flex items-center gap-3 justify-center">
        <span
          className="text-[10px] px-2 py-0.5 rounded"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            background: "hsl(210 25% 14%)",
            color: "hsl(145 80% 55%)",
          }}
        >
          ₿ BTC/USD: 68,400.00
        </span>
        <span
          className="text-[10px] px-2 py-0.5 rounded"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            background: "hsl(210 25% 14%)",
            color: "hsl(145 80% 55%)",
          }}
        >
          ⟠ ETH/USD: 3,920.00
        </span>
      </div>
    </div>
  );
};

export default OutputPanel;
