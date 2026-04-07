import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Zap, Link, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import podcastHost from "@/assets/podcast-host.png";

const Index = () => {
  const [clipCount, setClipCount] = useState([10]);
  const [podcastLink, setPodcastLink] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "hsl(0 0% 5%)" }}>
      {/* Circuit board SVG pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L40 10 L40 40" fill="none" stroke="hsl(24 100% 55%)" strokeWidth="0.5" />
            <path d="M60 20 L90 20 L90 80" fill="none" stroke="hsl(24 100% 55%)" strokeWidth="0.5" />
            <circle cx="50" cy="60" r="3" fill="hsl(24 100% 55%)" />
            <circle cx="60" cy="50" r="3" fill="hsl(24 100% 55%)" />
            <circle cx="70" cy="60" r="2" fill="hsl(24 100% 55%)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Floating + watermarks */}
      {[
        { top: "15%", left: "60%", delay: "0s" },
        { top: "25%", right: "15%", delay: "1s" },
        { top: "45%", left: "55%", delay: "2s" },
        { top: "70%", right: "25%", delay: "0.5s" },
        { top: "35%", right: "8%", delay: "1.5s" },
      ].map((pos, i) => (
        <span
          key={i}
          className="absolute text-6xl font-bold animate-float-plus select-none pointer-events-none"
          style={{ ...pos, color: "hsl(24 100% 55% / 0.08)", animationDelay: pos.delay }}
        >
          +
        </span>
      ))}

      {/* Podcast host image */}
      <div className="absolute right-0 bottom-0 w-[45%] max-w-[500px] pointer-events-none" style={{
        maskImage: "linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to top, black 0%, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%)",
        WebkitMaskComposite: "destination-in" as any,
        maskComposite: "intersect",
      }}>
        <img
          src={podcastHost}
          alt="Apresentador de Podcast"
          width={768}
          height={1024}
          className="w-full h-auto opacity-40"
        />
      </div>

      {/* Header */}

      <header className="relative z-10 pt-8 pb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black tracking-wider" style={{ color: "hsl(24 100% 55%)" }}>
          VIRALCUT AI
        </h1>
        <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase" style={{ color: "hsl(0 0% 60%)" }}>
          Podcast — Cortes & Storytelling
        </p>
      </header>

      {/* Main content area — monitor frame */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 mt-4">
        <div className="rounded-[2rem] border-2 p-6 md:p-8" style={{
          borderColor: "hsl(24 60% 25%)",
          background: "linear-gradient(135deg, hsl(0 0% 10% / 0.85), hsl(0 0% 6% / 0.9))",
          boxShadow: "0 0 60px hsl(24 100% 55% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.04)"
        }}>
          <div className="max-w-xl mx-auto">
            {/* Panel 1 — Reference */}
            <div className="rounded-xl border p-5 space-y-5" style={{
              borderColor: "hsl(24 50% 20%)",
              background: "hsl(0 0% 8% / 0.8)"
            }}>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold" style={{
                  background: "hsl(24 100% 55%)", color: "hsl(0 0% 100%)"
                }}>1</span>
                <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: "hsl(0 0% 85%)" }}>
                  Entrada de Referência
                </h2>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase" style={{ color: "hsl(24 100% 55%)" }}>
                  <Link className="w-4 h-4" />
                  Colar Link do Podcast
                </label>
                <Input
                  value={podcastLink}
                  onChange={(e) => setPodcastLink(e.target.value)}
                  placeholder="Cole o link do podcast viral que você quer cortar"
                  className="border-none text-sm placeholder:text-xs"
                  style={{
                    background: "hsl(0 0% 14%)",
                    color: "hsl(0 0% 90%)",
                  }}
                />
              </div>

              {/* Clip count selector */}
              <div className="space-y-3">
                <label className="text-xs font-semibold tracking-wider uppercase block" style={{ color: "hsl(24 100% 55%)" }}>
                  Quantos clipes viral você quer extrair?
                </label>
                <Slider
                  value={clipCount}
                  onValueChange={setClipCount}
                  min={1}
                  max={15}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] px-1" style={{ color: "hsl(0 0% 45%)" }}>
                  {Array.from({ length: 15 }, (_, i) => (
                    <span
                      key={i + 1}
                      className="w-5 text-center font-semibold transition-colors"
                      style={{
                        color: clipCount[0] === i + 1 ? "hsl(24 100% 55%)" : "hsl(0 0% 45%)",
                        fontSize: clipCount[0] === i + 1 ? "12px" : "10px",
                      }}
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-center font-medium" style={{ color: "hsl(24 80% 65%)" }}>
                Extraindo <span className="font-black text-sm" style={{ color: "hsl(24 100% 55%)" }}>{clipCount[0]}</span> cortes de alta retenção
              </p>
            </div>

            {/* Action button */}
            <div className="flex justify-end mt-8 mb-12">
              <Button
                size="lg"
                className="animate-pulse-glow rounded-2xl px-8 py-6 text-base font-black tracking-wider uppercase gap-3 border-0"
                style={{
                  background: "linear-gradient(135deg, hsl(24 100% 50%), hsl(24 80% 35%))",
                  color: "white",
                  boxShadow: "0 0 40px hsl(24 100% 55% / 0.4)"
                }}
                disabled={!podcastLink}
              >
                <Zap className="w-5 h-5" fill="white" />
                Gerar Cortes Clonados
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* Bottom bar */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-20 border-t backdrop-blur-md"
        style={{
          background: "hsl(0 0% 4% / 0.8)",
          borderColor: "hsl(24 100% 55% / 0.2)",
        }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "hsl(0 72% 51%)" }}
          >
            <X className="w-4 h-4" />
            Descartar Edição
          </button>

          <p
            className="hidden md:block text-xs text-center"
            style={{ color: "hsl(0 0% 55%)" }}
          >
            Aprovar e Salvar para Galeria (Com Cortes de Podcast)
          </p>

          <button
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs md:text-sm font-bold tracking-wider transition-colors animate-pulse-glow"
            style={{
              background: "hsl(24 100% 50%)",
              color: "hsl(0 0% 100%)",
            }}
          >
            <Zap className="w-5 h-5" fill="currentColor" />
            VALIDAR & SALVAR CORTES
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
