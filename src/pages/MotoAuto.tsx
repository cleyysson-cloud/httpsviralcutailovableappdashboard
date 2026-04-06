import { Bike, Car, Zap, X, ChevronRight, Upload, CheckSquare, BarChart3, Gauge, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import cyborgPilot from "@/assets/cyborg-pilot.png";
import roadFootage from "@/assets/road-footage.jpg";

const processingEntries = [
  { text: "Detectando Aceleração: 'Corte de Giro'...", status: "ok" },
  { text: "Detectando Fala: 'A caminho da entrega'...", status: "ok" },
  { text: "Calculando Adrenalina: 'Curva/Velocidade'...", status: "ok" },
  { text: "Gerando Overlays de Telemetria...", status: "processing" },
  { text: "Gerando Vídeo de Piloto...", status: "processing" },
];

const MotoAuto = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 10%) 50%, hsl(14 20% 10%) 100%)",
        color: "hsl(40 10% 90%)",
      }}
    >
      {/* Circuit texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(14 100% 57% / 0.3) 1px, transparent 1px),
            linear-gradient(hsl(14 100% 57% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header Bar */}
      <header
        className="relative z-10 border-b backdrop-blur-md"
        style={{
          background: "hsl(0 0% 8% / 0.9)",
          borderColor: "hsl(30 60% 25%)",
        }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-center">
          <h1
            className="text-sm md:text-lg font-black tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span style={{ color: "hsl(14 100% 57%)", textShadow: "0 0 20px hsl(14 100% 57% / 0.5)" }}>
              ViralCut AI:
            </span>{" "}
            <span style={{ color: "hsl(40 10% 90%)" }}>Cyborg Driver/Rider</span>
            <span style={{ color: "hsl(0 0% 45%)" }}> | </span>
            <span style={{ color: "hsl(72 100% 50%)", textShadow: "0 0 15px hsl(72 100% 50% / 0.4)" }}>
              O Scanner de Estética
            </span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Panel - Upload Area */}
          <div className="lg:col-span-4 space-y-4">
            <div
              className="border rounded-xl p-5"
              style={{
                background: "hsl(0 0% 12%)",
                borderColor: "hsl(30 60% 25%)",
              }}
            >
              <h2
                className="text-sm font-bold uppercase tracking-widest mb-4 text-center"
                style={{ fontFamily: "'Orbitron', sans-serif", color: "hsl(40 10% 90%)" }}
              >
                Carregar Fontes Brutas
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {/* Upload On-Board */}
                <button
                  className="flex flex-col items-center border-2 border-dashed rounded-xl p-4 transition-all group"
                  style={{ borderColor: "hsl(14 100% 57% / 0.3)" }}
                >
                  <Bike className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" style={{ color: "hsl(14 100% 57%)" }} />
                  <div className="flex items-center gap-1 mb-1">
                    <CheckSquare className="w-3 h-3" style={{ color: "hsl(72 100% 50%)" }} />
                    <span className="text-[10px] font-bold">Upload Vídeo On-Board (+)</span>
                  </div>
                  <span className="text-[8px]" style={{ color: "hsl(0 0% 45%)" }}>
                    Suba o vídeo da sua câmera de capacete/painel
                  </span>
                  <Upload className="w-4 h-4 mt-2" style={{ color: "hsl(0 0% 40%)" }} />
                </button>

                {/* Upload Externo */}
                <button
                  className="flex flex-col items-center border-2 border-dashed rounded-xl p-4 transition-all group"
                  style={{ borderColor: "hsl(14 100% 57% / 0.3)" }}
                >
                  <Car className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" style={{ color: "hsl(14 100% 57%)" }} />
                  <div className="flex items-center gap-1 mb-1">
                    <CheckSquare className="w-3 h-3" style={{ color: "hsl(72 100% 50%)" }} />
                    <span className="text-[10px] font-bold">Upload Vídeo Externo (+)</span>
                  </div>
                  <span className="text-[8px]" style={{ color: "hsl(0 0% 45%)" }}>
                    Suba o vídeo da sua câmera externa
                  </span>
                  <Upload className="w-4 h-4 mt-2" style={{ color: "hsl(0 0% 40%)" }} />
                </button>
              </div>
            </div>
            <p
              className="text-center text-xs italic"
              style={{ fontFamily: "'Share Tech Mono', monospace", color: "hsl(0 0% 45%)" }}
            >
              Analisando Movimento e Adrenalina (On the Road)
            </p>
          </div>

          {/* Center - Cyborg Pilot */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative">
              <img
                src={cyborgPilot}
                alt="Cyborg Pilot - ViralCut AI"
                className="w-64 md:w-80 lg:w-96"
                width={768}
                height={1024}
                style={{ filter: "drop-shadow(0 0 30px hsl(14 100% 57% / 0.4))" }}
              />
              {/* Energy Orb */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-16 h-16 rounded-full flex items-center justify-center border-2 animate-pulse"
                style={{
                  background: "hsl(14 100% 57% / 0.2)",
                  borderColor: "hsl(14 100% 57%)",
                }}
              >
                <Zap className="w-8 h-8" style={{ color: "hsl(14 100% 57%)" }} />
              </div>
            </div>
          </div>

          {/* Right Panel - Video Preview & Stats */}
          <div className="lg:col-span-4 space-y-4">
            {/* Video Preview */}
            <div
              className="border rounded-xl overflow-hidden"
              style={{ borderColor: "hsl(30 60% 25%)" }}
            >
              <div className="p-3" style={{ background: "hsl(0 0% 12%)" }}>
                <p className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "hsl(14 100% 57%)" }}>
                  Vídeo Enriquecido (Performance Stats applied)
                </p>
              </div>
              <div className="relative">
                <img
                  src={roadFootage}
                  alt="Road footage preview"
                  className="w-full h-40 object-cover"
                  width={1280}
                  height={720}
                  loading="lazy"
                />
                {/* HUD Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <span
                    className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded"
                    style={{ background: "hsl(14 100% 57% / 0.8)", color: "white" }}
                  >
                    90kg Whey
                  </span>
                  <span
                    className="absolute bottom-8 left-2 right-2 text-[8px] font-medium px-2 py-1 rounded"
                    style={{ background: "hsl(0 0% 0% / 0.7)", color: "hsl(40 10% 90%)" }}
                  >
                    ...então, para bater os 20 de entregas...
                  </span>
                  <span
                    className="absolute top-2 right-2 text-[8px] font-bold px-2 py-0.5 rounded animate-pulse"
                    style={{ background: "hsl(0 72% 51%)", color: "white" }}
                  >
                    REC
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Panel */}
            <div
              className="border rounded-xl p-4"
              style={{ background: "hsl(0 0% 12%)", borderColor: "hsl(30 60% 25%)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4" style={{ color: "hsl(14 100% 57%)" }} />
                <h3 className="text-xs font-black uppercase tracking-wider">DADOS DE PILOTAGEM</h3>
              </div>
              <p className="text-[10px] italic mb-3" style={{ color: "hsl(0 0% 45%)" }}>(Viagem Noturna)</p>

              <div className="space-y-3">
                {/* Hype Bar */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span style={{ color: "hsl(0 0% 55%)" }}>Hype Barra:</span>
                    <span className="font-bold" style={{ color: "hsl(14 100% 57%)" }}>80%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "hsl(0 0% 20%)" }}>
                    <div className="h-full rounded-full" style={{ width: "80%", background: "linear-gradient(90deg, hsl(14 100% 57%), hsl(30 100% 50%))" }} />
                  </div>
                </div>

                {/* Speed */}
                <div className="flex items-center gap-2 text-[10px]">
                  <Gauge className="w-3 h-3" style={{ color: "hsl(14 100% 57%)" }} />
                  <span style={{ color: "hsl(0 0% 55%)" }}>Velocidade Média:</span>
                  <span className="font-bold" style={{ color: "hsl(72 100% 50%)" }}>65 km/h</span>
                </div>

                {/* Route */}
                <div className="flex items-center gap-2 text-[10px]">
                  <MapPin className="w-3 h-3" style={{ color: "hsl(14 100% 57%)" }} />
                  <span style={{ color: "hsl(0 0% 55%)" }}>Rota Delivery:</span>
                  <span className="font-bold" style={{ color: "hsl(72 100% 50%)" }}>75% Concluída</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Log */}
        <div className="mt-6 max-w-3xl mx-auto">
          <div
            className="border rounded-xl p-4"
            style={{
              background: "hsl(0 0% 10%)",
              borderColor: "hsl(30 60% 25%)",
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            <div className="space-y-2">
              {processingEntries.map((entry, i) => (
                <div key={i} className="flex items-center gap-3 text-xs">
                  {entry.status === "ok" ? (
                    <CheckSquare className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "hsl(72 100% 50%)" }} />
                  ) : (
                    <Zap className="w-3.5 h-3.5 flex-shrink-0 animate-pulse" style={{ color: "hsl(14 100% 57%)" }} />
                  )}
                  <span style={{ color: "hsl(0 0% 60%)" }}>{entry.text}</span>
                  {entry.status === "ok" ? (
                    <span className="ml-auto font-bold" style={{ color: "hsl(72 100% 50%)" }}>[OK]</span>
                  ) : (
                    <span className="ml-auto font-bold animate-pulse" style={{ color: "hsl(14 100% 57%)" }}>[Processando]</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-20 border-t backdrop-blur-md"
        style={{
          background: "hsl(0 0% 5% / 0.9)",
          borderColor: "hsl(30 60% 25%)",
        }}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: "hsl(0 0% 55%)",
            }}
          >
            <X className="w-4 h-4" />
            Descartar Edição
          </Link>

          <button
            className="flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              background: "hsl(14 100% 57%)",
              color: "hsl(0 0% 8%)",
              boxShadow: "0 0 25px hsl(14 100% 57% / 0.4)",
            }}
          >
            <Zap className="w-5 h-5" />
            ViralCut — Validar & Salvar Vídeo Piloto
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default MotoAuto;
