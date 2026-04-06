import { Upload, Flame, Utensils, Zap, Database, X } from "lucide-react";
import { Link } from "react-router-dom";

const Gastronomia = () => {
  return (
    <div
      className="min-h-screen p-6 font-sans selection:bg-yellow-500 selection:text-black"
      style={{ background: "#050505", color: "#E8C48C" }}
    >
      {/* Header */}
      <header className="text-center mb-10">
        <h1
          className="text-sm tracking-[0.3em] font-bold mb-2"
          style={{ color: "hsl(0 0% 40%)" }}
        >
          VIRALCUT AI: CYBORG CHEF GOURMET | O SCANNER DE ESTÉTICA
        </h1>
        <div
          className="h-[1px] w-full opacity-30"
          style={{
            background:
              "linear-gradient(to right, transparent, #E8C48C, transparent)",
          }}
        />
      </header>

      {/* Main Frame */}
      <main
        className="max-w-6xl mx-auto border-2 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
        style={{
          borderColor: "rgba(232,196,140,0.2)",
          background: "rgba(0,0,0,0.4)",
          boxShadow: "0 0 50px rgba(232,196,140,0.1)",
        }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Database className="absolute top-10 left-10 w-40 h-40" />
          <Flame className="absolute bottom-10 right-10 w-40 h-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
          {/* Left Panel — Upload */}
          <div className="space-y-6">
            <div
              className="border p-6 rounded-2xl shadow-lg"
              style={{
                background: "#1A1A1A",
                borderColor: "rgba(232,196,140,0.3)",
              }}
            >
              <h2 className="text-lg font-bold mb-6 text-center">
                CARREGAR FONTES BRUTAS
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="flex flex-col items-center justify-center border-2 border-dashed p-4 rounded-xl transition-all group"
                  style={{ borderColor: "rgba(232,196,140,0.4)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(232,196,140,0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <Upload className="mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold">
                    UPLOAD VÍDEO DOCE (+)
                  </span>
                </button>
                <button
                  className="flex flex-col items-center justify-center border-2 border-dashed p-4 rounded-xl transition-all group"
                  style={{ borderColor: "rgba(232,196,140,0.4)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(232,196,140,0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <Utensils className="mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold">
                    UPLOAD VÍDEO SALGADO (+)
                  </span>
                </button>
              </div>
            </div>

            {/* Status */}
            <p
              className="text-xs text-center italic"
              style={{ color: "rgba(232,196,140,0.6)" }}
            >
              Analisando Textura e ASMR (On the Plate)
            </p>
          </div>

          {/* Center — Cyborg Chef Core */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-[-20px] rounded-full animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,196,140,0.15) 0%, transparent 70%)",
                }}
              />
              {/* Inner ring */}
              <div
                className="absolute inset-[-10px] rounded-full animate-spin"
                style={{
                  border: "1px solid rgba(232,196,140,0.15)",
                  animationDuration: "12s",
                }}
              />
              <Zap
                size={80}
                className="relative z-10"
                style={{
                  color: "#E8C48C",
                  filter:
                    "drop-shadow(0 0 15px rgba(232,196,140,0.8)) drop-shadow(0 0 30px rgba(232,196,140,0.4))",
                }}
              />
            </div>
            <span
              className="mt-4 text-[10px] font-black tracking-[0.3em] uppercase px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(232,196,140,0.15)",
                border: "1px solid rgba(232,196,140,0.3)",
                color: "#E8C48C",
              }}
            >
              $ POWER SCANNER
            </span>
          </div>

          {/* Right Panel — Output / Stats */}
          <div className="space-y-4">
            <div
              className="border p-5 rounded-2xl shadow-lg"
              style={{
                background: "#1A1A1A",
                borderColor: "rgba(232,196,140,0.3)",
              }}
            >
              <h2 className="text-sm font-bold mb-4 tracking-wider">
                VIDEO ENRIQUECIDO (PERFORMANCE STATS)
              </h2>

              {/* Detection checks */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span style={{ color: "rgba(232,196,140,0.7)" }}>
                    DETECTANDO TEXTURA:
                  </span>
                  <span className="font-bold text-emerald-400">[OK]</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span style={{ color: "rgba(232,196,140,0.7)" }}>
                    CALCULANDO MACROS:
                  </span>
                  <span className="font-bold text-emerald-400">[OK]</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <p className="text-[10px] mb-2" style={{ color: "rgba(232,196,140,0.5)" }}>
                  Gerando Video de Chef... [Processando]
                </p>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(232,196,140,0.1)" }}
                >
                  <div
                    className="h-full rounded-full animate-pulse"
                    style={{
                      width: "65%",
                      background:
                        "linear-gradient(90deg, #E8C48C, #c9a672)",
                    }}
                  />
                </div>
              </div>

              {/* Nutritional data */}
              <div
                className="border rounded-xl p-3 text-center"
                style={{ borderColor: "rgba(232,196,140,0.2)" }}
              >
                <p
                  className="text-[10px] font-bold tracking-wider uppercase mb-1 italic"
                  style={{ color: "rgba(232,196,140,0.6)" }}
                >
                  DADOS NUTRICIONAIS (Receita Gourmet)
                </p>
                <p className="text-xs font-bold" style={{ color: "#ca8a04" }}>
                  Calorias Totais:{" "}
                  <span className="text-sm font-black">700 kcal</span> |
                  Proteína:{" "}
                  <span className="text-sm font-black">150g</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom bar */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-20 border-t backdrop-blur-md"
        style={{
          background: "rgba(5,5,5,0.9)",
          borderColor: "rgba(232,196,140,0.2)",
        }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "hsl(0 72% 51%)" }}
          >
            <X className="w-4 h-4" />
            Descartar Edição
          </Link>

          <p
            className="hidden md:block text-xs text-center"
            style={{ color: "rgba(232,196,140,0.4)" }}
          >
            Aprovar e Salvar para Galeria de Projetos | © 2026 Método Cleysson
          </p>

          <button
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs md:text-sm font-bold tracking-wider transition-all"
            style={{
              background: "#E8C48C",
              color: "#050505",
              boxShadow: "0 0 20px rgba(232,196,140,0.4)",
            }}
          >
            <Zap className="w-5 h-5" fill="currentColor" />
            VALIDAR & SALVAR
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Gastronomia;
