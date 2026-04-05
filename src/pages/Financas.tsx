import { Zap, X } from "lucide-react";
import { Link } from "react-router-dom";
import UploadPanel from "@/components/financas/UploadPanel";
import OutputPanel from "@/components/financas/OutputPanel";
import SparkCore from "@/components/financas/SparkCore";
import AnalysisChecks from "@/components/financas/AnalysisChecks";
import TickerBar from "@/components/financas/TickerBar";

const Financas = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(210 15% 8%) 0%, hsl(210 34% 10%) 30%, hsl(145 30% 15%) 70%, hsl(210 15% 8%) 100%)",
        color: "hsl(150 80% 75%)",
      }}
    >
      {/* Circuit texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(145 63% 49% / 0.3) 1px, transparent 1px),
            linear-gradient(hsl(145 63% 49% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header */}
      <header
        className="relative z-10 border-b backdrop-blur-md"
        style={{
          background: "hsl(240 10% 4% / 0.5)",
          borderColor: "hsl(145 63% 49% / 0.2)",
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <h1
            className="text-center text-sm md:text-base font-bold tracking-widest"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="animate-text-neon-pulse" style={{ color: "hsl(145 63% 49%)" }}>
              VIRALCUT AI:
            </span>{" "}
            <span style={{ color: "hsl(150 60% 80%)" }}>
              FINANÇAS INTELIGENTES | ANÁLISE PROFUNDA E OVERLAY DE DADOS
            </span>
          </h1>
        </div>
        <div className="container mx-auto px-4 py-2">
          <TickerBar />
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Panels layout */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Top row: Upload + Spark + Output */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 w-full">
            <UploadPanel />

            <div className="flex-shrink-0">
              <SparkCore />
            </div>

            <OutputPanel />
          </div>

          {/* Analysis checks belt */}
          <div className="w-full max-w-lg">
            <AnalysisChecks />
          </div>
        </div>
      </main>

      {/* Bottom bar */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-20 border-t backdrop-blur-md"
        style={{
          background: "hsl(240 10% 4% / 0.8)",
          borderColor: "hsl(145 63% 49% / 0.2)",
        }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Discard button */}
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "hsl(0 72% 51%)" }}
          >
            <X className="w-4 h-4" />
            Descartar Edição
          </Link>

          {/* Center text */}
          <p
            className="hidden md:block text-xs text-center"
            style={{ color: "hsl(210 10% 55%)" }}
          >
            Aprovar e Salvar para Galeria (Com Overlays Financeiros)
          </p>

          {/* Main CTA */}
          <button
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs md:text-sm font-bold tracking-wider transition-colors animate-neon-pulse"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              background: "hsl(145 63% 49%)",
              color: "hsl(210 29% 8%)",
            }}
          >
            <Zap className="w-5 h-5" fill="currentColor" />
            VALIDAR & SALVAR VÍDEO INTELIGENTE
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Financas;
