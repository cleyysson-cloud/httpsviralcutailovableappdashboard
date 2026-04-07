import { motion } from "framer-motion";
import { useState } from "react";
import {
  Zap, X, Upload, Video, Check, Loader2,
  Coffee, MapPin, Heart, Sparkles, ZoomIn, Save
} from "lucide-react";
import vloggerCyborg from "@/assets/vlogger-cyborg.jpg";

/* ── Analysis Pipeline ── */
const steps = [
  { icon: "✈️", label: "Detectando: Cena de Avião...", status: "done" as const },
  { icon: "☕", label: "Detectando: Cena de Café...", status: "done" as const },
  { icon: "🎙️", label: "Detectando: Fala sobre Roteiro...", status: "done" as const },
  { icon: "🎬", label: "Gerando Cortes 'Smart Zoom & Pan'...", status: "done" as const },
  { icon: "📹", label: "Gerando Vídeo Vlog...", status: "processing" as const },
];

const AnalysisPipeline = () => (
  <div className="flex flex-col gap-2">
    {steps.map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.15, duration: 0.4 }}
        className="flex items-center gap-3 text-sm"
        style={{ fontFamily: "'Share Tech Mono', monospace" }}
      >
        <span className="text-lg">{step.icon}</span>
        <span className="flex-1" style={{ color: "hsl(43 30% 90%)" }}>{step.label}</span>
        {step.status === "done" ? (
          <span className="flex items-center gap-1 font-bold" style={{ color: "hsl(43 76% 52%)" }}>
            <Check size={14} /> [OK]
          </span>
        ) : (
          <span className="flex items-center gap-1" style={{ color: "hsl(40 10% 55%)" }}>
            <Loader2 size={14} className="animate-spin" /> [Processando]
          </span>
        )}
      </motion.div>
    ))}
  </div>
);

/* ── Upload Panel ── */
const UploadPanel = () => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-xl border overflow-hidden"
      style={{
        background: "hsl(40 8% 12% / 0.85)",
        borderColor: "hsl(43 76% 52% / 0.4)",
        boxShadow: "0 8px 32px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(43 76% 52% / 0.1)",
      }}
    >
      <div
        className="px-4 py-2.5 border-b flex items-center gap-2"
        style={{ borderColor: "hsl(43 76% 52% / 0.3)", background: "hsl(43 76% 52% / 0.05)" }}
      >
        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(43 76% 52%)" }} />
        <span
          className="text-[10px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Orbitron', monospace", color: "hsl(43 76% 52%)" }}
        >
          Carregar Fontes Brutas
        </span>
      </div>
      <div className="p-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
          className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center gap-3 cursor-pointer transition-colors`}
          style={{
            borderColor: isDragging ? "hsl(43 76% 52%)" : "hsl(43 76% 52% / 0.4)",
            background: isDragging ? "hsl(43 76% 52% / 0.1)" : "hsl(40 8% 18% / 0.5)",
          }}
        >
          <div
            className="w-14 h-14 rounded-lg flex items-center justify-center"
            style={{ background: "hsl(43 76% 52% / 0.1)", border: "1px solid hsl(43 76% 52% / 0.3)" }}
          >
            <Video className="w-7 h-7" style={{ color: "hsl(43 76% 52%)" }} />
          </div>
          <p className="text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "'Orbitron', monospace", color: "hsl(43 76% 52%)" }}>
            UPLOAD VLOG COMPLETO (+)
          </p>
          <p className="text-xs" style={{ color: "hsl(40 10% 55%)" }}>
            Suba o seu vídeo longo de viagem/rotina
          </p>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs"
            style={{ background: "hsl(43 76% 52% / 0.15)", border: "1px solid hsl(43 76% 52% / 0.3)", color: "hsl(43 76% 52%)" }}
          >
            <Upload className="w-4 h-4" /> Selecionar Arquivo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 py-2 mt-3 rounded-md border"
          style={{ borderColor: "hsl(43 76% 52% / 0.3)", background: "hsl(43 76% 52% / 0.05)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "hsl(43 76% 52%)" }} />
          <span className="text-[10px] tracking-wider" style={{ fontFamily: "'Share Tech Mono', monospace", color: "hsl(43 76% 52%)" }}>
            Analisando e Interpretando Conteúdo (Semântica)
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ── Command Bar ── */
const CommandBar = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="rounded-xl p-4 space-y-3 relative overflow-hidden"
    style={{
      background: "hsl(40 8% 12% / 0.85)",
      border: "1px solid hsl(43 76% 52% / 0.3)",
      boxShadow: "inset 0 0 20px hsl(43 76% 52% / 0.05)",
    }}
  >
    <div className="flex items-center gap-2">
      <Sparkles className="w-4 h-4" style={{ color: "hsl(43 80% 65%)" }} />
      <span className="text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "'Orbitron', monospace", color: "hsl(43 80% 65%)" }}>
        Console de Comando de Direção (Prompt)
      </span>
    </div>
    <p className="text-xs italic" style={{ color: "hsl(40 10% 55%)", fontFamily: "'Rajdhani', sans-serif" }}>
      "Pui, corta as melhores cenas de viagem, destaca os cafés e a fala do roteiro. Aplica smart zoom nos detalhes e sincroniza com uma trilha cine."
    </p>
    <div className="absolute bottom-0 left-0 right-0 h-px" style={{
      background: "linear-gradient(90deg, transparent 0%, hsl(43 76% 52% / 0.4) 50%, transparent 100%)",
      backgroundSize: "200% 100%",
      animation: "data-flow 2s linear infinite",
    }} />
  </motion.div>
);

/* ── Output Monitor ── */
const OutputMonitor = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 }}
    className="rounded-xl overflow-hidden relative"
    style={{
      border: "1px solid hsl(43 76% 52% / 0.3)",
      boxShadow: "0 0 15px hsl(43 76% 52% / 0.1)",
    }}
  >
    {/* Preview area */}
    <div className="aspect-video relative" style={{ background: "linear-gradient(135deg, hsl(40 10% 8%), hsl(40 8% 15%))" }}>
      <img src={vloggerCyborg} alt="Vlog Preview" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
            style={{ background: "hsl(43 76% 52% / 0.2)", boxShadow: "0 0 30px hsl(43 76% 52% / 0.3)" }}
          >
            <ZoomIn className="w-8 h-8" style={{ color: "hsl(43 76% 52%)" }} />
          </div>
          <p className="text-sm" style={{ color: "hsl(40 10% 55%)", fontFamily: "'Rajdhani', sans-serif" }}>
            Vídeo Enriquecido (Smart Zoom applied)
          </p>
        </div>
      </div>

      {/* Subtitle overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-4 right-4"
      >
        <div className="px-3 py-2 rounded-lg backdrop-blur-sm text-center" style={{ background: "hsl(0 0% 0% / 0.6)" }}>
          <p className="text-xs italic" style={{ color: "hsl(43 30% 90%)" }}>
            "...então, sobre o roteiro, a gente..."
          </p>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute top-3 left-3 flex flex-col gap-2"
      >
        <div className="flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-sm" style={{ background: "hsl(43 76% 52% / 0.2)", border: "1px solid hsl(43 76% 52% / 0.3)" }}>
          <Coffee size={12} style={{ color: "hsl(43 76% 52%)" }} />
          <span className="text-[10px]" style={{ color: "hsl(43 76% 52%)" }}>Café</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-sm" style={{ background: "hsl(43 76% 52% / 0.2)", border: "1px solid hsl(43 76% 52% / 0.3)" }}>
          <MapPin size={12} style={{ color: "hsl(43 76% 52%)" }} />
          <span className="text-[10px]" style={{ color: "hsl(43 76% 52%)" }}>Viagem</span>
        </div>
      </motion.div>

      {/* Ticker */}
      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-sm" style={{ background: "hsl(0 0% 0% / 0.5)", border: "1px solid hsl(43 76% 52% / 0.2)" }}>
        <span className="text-[9px]" style={{ color: "hsl(43 76% 52%)", fontFamily: "'Share Tech Mono', monospace" }}>ETH/USD: 3,920.00</span>
      </div>
    </div>

    {/* Hashtags bar */}
    <div className="px-4 py-3 flex flex-wrap gap-2" style={{ background: "hsl(40 8% 12%)", borderTop: "1px solid hsl(43 76% 52% / 0.2)" }}>
      {["#VlogCine", "#TravelContent", "#LifestyleViral", "#DayInMyLife", "#ContentCreator"].map((tag) => (
        <span key={tag} className="px-2 py-0.5 rounded-full text-[10px]" style={{ background: "hsl(43 76% 52% / 0.15)", color: "hsl(43 76% 52%)", border: "1px solid hsl(43 76% 52% / 0.2)" }}>
          {tag}
        </span>
      ))}
      <div className="flex items-center gap-1 ml-auto">
        <Heart size={12} style={{ color: "hsl(43 76% 52%)" }} />
        <span className="text-[10px]" style={{ color: "hsl(43 76% 52%)" }}>2.4K</span>
      </div>
    </div>
  </motion.div>
);

/* ── Main Page ── */
const Lifestyle = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden pb-24"
      style={{
        background: "linear-gradient(135deg, hsl(40 10% 8%) 0%, hsl(40 8% 12%) 50%, hsl(40 10% 8%) 100%)",
        color: "hsl(43 30% 90%)",
      }}
    >
      {/* Circuit pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(43 76% 52% / 0.05) 1px, transparent 1px), radial-gradient(circle at 80% 20%, hsl(43 76% 52% / 0.03) 1px, transparent 1px), radial-gradient(circle at 50% 80%, hsl(43 76% 52% / 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px, 80px 80px, 100px 100px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: "hsl(43 76% 52%)" }} />
            <span className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Orbitron', monospace", color: "hsl(43 76% 52%)" }}>
              O Diretor de IA
            </span>
          </div>
          <h1
            className="text-xl font-bold tracking-wider uppercase"
            style={{
              fontFamily: "'Orbitron', monospace",
              background: "linear-gradient(135deg, hsl(43 76% 52%), hsl(43 80% 65%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ViralCut AI: Lifestyle & Vlog
          </h1>
          <p className="text-xs" style={{ color: "hsl(40 10% 55%)", fontFamily: "'Rajdhani', sans-serif" }}>
            O Diretor de IA — Cortes smart zoom, detecção de cenas e edição cinematográfica automática
          </p>
        </motion.div>

        {/* Sync indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: "hsl(43 76% 52% / 0.1)", border: "1px solid hsl(43 76% 52% / 0.2)" }}>
            <Loader2 size={12} className="animate-spin" style={{ color: "hsl(43 76% 52%)" }} />
            <span className="text-[10px]" style={{ fontFamily: "'Share Tech Mono', monospace", color: "hsl(43 76% 52%)" }}>⟳ Sincronização</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full" style={{ background: "hsl(43 76% 52% / 0.1)", border: "1px solid hsl(43 76% 52% / 0.2)" }}>
            <span className="text-[10px]" style={{ fontFamily: "'Share Tech Mono', monospace", color: "hsl(43 80% 65%)" }}>BTC/USD: 68,420</span>
          </div>
        </motion.div>

        <CommandBar />
        <UploadPanel />

        {/* The Spark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center py-4"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "hsl(43 76% 52% / 0.15)",
              boxShadow: "0 0 15px hsl(43 76% 52% / 0.4)",
              animation: "pulse-gold 2s ease-in-out infinite",
            }}
          >
            <Zap className="w-10 h-10" style={{ color: "hsl(43 76% 52%)" }} />
          </div>
        </motion.div>

        <AnalysisPipeline />
        <OutputMonitor />
      </div>

      {/* Footer bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3"
        style={{
          background: "hsl(40 10% 8% / 0.9)",
          borderTop: "1px solid hsl(43 76% 52% / 0.3)",
          backdropFilter: "blur(16px)",
        }}
      >
        <button
          onClick={() => window.location.href = "/"}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: "hsl(0 72% 50%)", fontFamily: "'Rajdhani', sans-serif" }}
        >
          <X className="w-4 h-4" />
          Descartar Edição
        </button>

        <div className="hidden md:flex items-center gap-1.5">
          <Save className="w-3.5 h-3.5" style={{ color: "hsl(40 10% 55%)" }} />
          <span className="text-[10px]" style={{ fontFamily: "'Rajdhani', sans-serif", color: "hsl(40 10% 55%)" }}>
            Aprovar e Salvar para Galeria (Com Comando e Edição Vlog Cine)
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 px-6 py-3 rounded-xl text-sm tracking-wider uppercase font-bold"
          style={{
            fontFamily: "'Orbitron', monospace",
            background: "linear-gradient(135deg, hsl(43 76% 52%), hsl(43 80% 65%), hsl(43 70% 35%))",
            color: "hsl(40 10% 8%)",
            boxShadow: "0 0 15px hsl(43 76% 52% / 0.4)",
            animation: "pulse-gold 2s ease-in-out infinite",
          }}
        >
          <Zap size={20} fill="currentColor" />
          ViralCut AI — Validar & Salvar Vlog Cine
        </motion.button>
      </div>
    </div>
  );
};

export default Lifestyle;
