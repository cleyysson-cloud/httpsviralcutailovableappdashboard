import { Play, Upload } from "lucide-react";

const UploadPanel = () => {
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
        UPLOAD DO SEU VÍDEO BRUTO (+)
      </h3>

      {/* Upload area */}
      <div
        className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center gap-4 cursor-pointer group transition-colors"
        style={{ borderColor: "hsl(145 63% 49% / 0.3)" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center group-hover:shadow-neon transition-shadow"
          style={{ background: "hsl(210 29% 18%)" }}
        >
          <Play className="w-7 h-7 ml-1" style={{ color: "hsl(145 63% 49%)" }} />
        </div>
        <p className="text-sm text-center leading-relaxed" style={{ color: "hsl(210 10% 55%)" }}>
          Suba o seu vídeo falando sobre
          <br />
          <span className="font-medium" style={{ color: "hsl(150 60% 80%)" }}>finanças/cripto</span>
        </p>
      </div>

      {/* Processing status */}
      <div className="mt-4 flex items-center gap-2 justify-center">
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: "hsl(145 63% 49%)" }}
        />
        <p
          className="text-xs font-medium animate-text-neon-pulse"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(145 63% 49%)" }}
        >
          Processando... Análise Profunda em Tempo Real
        </p>
      </div>
    </div>
  );
};

export default UploadPanel;
