import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Upload, Video, ZoomIn, Sparkles, Check, Loader2,
  MessageCircle, ShoppingBag, Hash, X, Zap
} from "lucide-react";

/* ── Floating Icons ── */
const floatingIcons = [
  { emoji: "💄", x: "8%", y: "15%", delay: 0, size: "text-2xl" },
  { emoji: "👠", x: "88%", y: "20%", delay: 1.2, size: "text-3xl" },
  { emoji: "👗", x: "5%", y: "60%", delay: 0.6, size: "text-2xl" },
  { emoji: "💅", x: "92%", y: "55%", delay: 1.8, size: "text-xl" },
  { emoji: "🪞", x: "15%", y: "85%", delay: 2.4, size: "text-2xl" },
  { emoji: "✨", x: "85%", y: "80%", delay: 0.3, size: "text-xl" },
  { emoji: "👜", x: "50%", y: "5%", delay: 1.5, size: "text-2xl" },
];

const FloatingIcons = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {floatingIcons.map((icon, i) => (
      <motion.span
        key={i}
        className={`absolute ${icon.size} opacity-20`}
        style={{ left: icon.x, top: icon.y }}
        animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: icon.delay, ease: "easeInOut" }}
      >
        {icon.emoji}
      </motion.span>
    ))}
  </div>
);

/* ── Upload Zone ── */
const UploadZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`relative rounded-2xl border-2 border-dashed p-6 text-center transition-all duration-300 ${
        isDragging ? "border-[hsl(350,30%,58%)]" : "border-[hsl(350,30%,58%/0.3)] hover:border-[hsl(350,30%,58%/0.5)]"
      }`}
      style={{
        background: isDragging
          ? "hsl(350 30% 58% / 0.1)"
          : "hsl(340 20% 12% / 0.5)",
        boxShadow: isDragging ? "0 0 30px hsl(350 60% 65% / 0.3)" : "none",
      }}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "hsl(350 30% 58% / 0.2)" }}
        >
          <Video className="w-7 h-7" style={{ color: "hsl(350 30% 58%)" }} />
        </div>
        <p className="text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(350 30% 58%)" }}>
          UPLOAD VÍDEO DE LOOK / BELEZA (+)
        </p>
        <p className="text-xs" style={{ color: "hsl(30 15% 60%)" }}>
          Suba o seu vídeo longo de moda/beleza
        </p>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs"
          style={{
            background: "hsl(350 30% 58% / 0.15)",
            border: "1px solid hsl(350 30% 58% / 0.3)",
            color: "hsl(350 30% 58%)",
          }}
        >
          <Upload className="w-4 h-4" /> Selecionar Arquivo
        </button>
        <span className="text-[10px]" style={{ color: "hsl(30 15% 60% / 0.6)" }}>MP4, MOV até 500MB</span>
      </div>
    </motion.div>
  );
};

/* ── Video Preview ── */
const VideoPreview = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4 }}
    className="relative rounded-2xl overflow-hidden aspect-video"
    style={{
      background: "linear-gradient(135deg, hsl(340 20% 8%), hsl(350 25% 14%), hsl(340 20% 10%))",
      border: "1px solid hsl(350 30% 58% / 0.3)",
      boxShadow: "inset 0 0 20px hsl(350 60% 65% / 0.05)",
    }}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center space-y-3">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
          style={{ background: "hsl(350 30% 58% / 0.2)", boxShadow: "0 0 30px hsl(350 60% 65% / 0.3)" }}
        >
          <Sparkles className="w-10 h-10" style={{ color: "hsl(350 30% 58%)" }} />
        </div>
        <p className="text-sm" style={{ color: "hsl(30 15% 60%)" }}>Vídeo Enriquecido (Detail Zoom applied)</p>
      </div>
    </div>

    <motion.div
      animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm"
      style={{ background: "hsl(350 30% 58% / 0.2)", border: "1px solid hsl(350 30% 58% / 0.3)" }}
    >
      <ZoomIn className="w-3.5 h-3.5" style={{ color: "hsl(350 30% 58%)" }} />
      <span className="text-xs font-medium" style={{ color: "hsl(350 30% 58%)" }}>Detail Zoom</span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap"
    >
      <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "hsl(350 30% 58% / 0.8)", color: "hsl(30 30% 96%)" }}>
        Detectando Peça: Vestido Rose Gold ✓
      </span>
      <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "hsl(35 40% 75% / 0.8)", color: "hsl(340 20% 10%)" }}>
        Detectando Maquiagem: Paleta Elegance ✓
      </span>
    </motion.div>
  </motion.div>
);

/* ── Scanner Checks ── */
const checks = [
  { label: "Detectando Peça de Roupa: Vestido Rose Gold", detail: "", status: "done" as const, delay: 0.3 },
  { label: "Detectando Maquiagem: Paleta Elegance", detail: "[OK]", status: "done" as const, delay: 0.6 },
  { label: "Gerando Legenda Dinâmica e Hashtags", detail: "", status: "processing" as const, delay: 0.9 },
  { label: "Aplicando Filtro 'Estética Glow'", detail: "", status: "processing" as const, delay: 1.2 },
];

const ScannerChecks = () => {
  const [statuses, setStatuses] = useState<string[]>(checks.map(() => "waiting"));

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    checks.forEach((c, i) => {
      timers.push(setTimeout(() => setStatuses((s) => { const n = [...s]; n[i] = "processing"; return n; }), c.delay * 1000));
      if (c.status === "done") {
        timers.push(setTimeout(() => setStatuses((s) => { const n = [...s]; n[i] = "done"; return n; }), (c.delay + 1) * 1000));
      }
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="space-y-2">
      <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: "hsl(350 30% 58%)", fontFamily: "'Playfair Display', serif" }}>
        Checks de Edição
      </p>
      {checks.map((c, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-3 py-2 rounded-lg"
          style={{
            background: statuses[i] === "done" ? "hsl(350 30% 58% / 0.08)" : "hsl(340 20% 12% / 0.5)",
            border: `1px solid ${statuses[i] === "done" ? "hsl(350 30% 58% / 0.4)" : "hsl(340 20% 22%)"}`,
          }}
        >
          {statuses[i] === "done" ? (
            <Check className="w-3.5 h-3.5" style={{ color: "hsl(350 30% 58%)" }} />
          ) : statuses[i] === "processing" ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" style={{ color: "hsl(35 40% 75%)" }} />
          ) : (
            <div className="w-2 h-2 rounded-full" style={{ background: "hsl(340 20% 22%)" }} />
          )}
          <span className="text-xs flex-1" style={{ color: statuses[i] === "done" ? "hsl(30 30% 92%)" : "hsl(30 15% 60%)" }}>
            {c.label}
          </span>
          {statuses[i] === "done" && c.detail && (
            <span className="text-[9px] font-bold" style={{ color: "hsl(350 30% 58%)" }}>{c.detail}</span>
          )}
        </div>
      ))}
    </motion.div>
  );
};

/* ── Console Prompt ── */
const ConsolePrompt = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="rounded-2xl p-4 space-y-3"
    style={{
      background: "hsl(340 20% 12% / 0.5)",
      border: "1px solid hsl(350 30% 58% / 0.3)",
      boxShadow: "inset 0 0 20px hsl(350 60% 65% / 0.05)",
    }}
  >
    <div className="flex items-center gap-2">
      <Sparkles className="w-4 h-4" style={{ color: "hsl(35 40% 75%)" }} />
      <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "hsl(35 40% 75%)", fontFamily: "'Playfair Display', serif" }}>
        Console de Comando (Prompt)
      </span>
    </div>
    <p className="text-xs italic" style={{ color: "hsl(30 15% 60%)" }}>
      "Pui, corta as melhores partes do vídeo, o polêmico estilo, e borda o corte com uma legenda que fala sobre o estilo. Aplica um zoom suave nos detalhes."
    </p>
    <div className="flex items-center gap-2">
      <Loader2 className="w-3 h-3 animate-spin" style={{ color: "hsl(350 30% 58%)" }} />
      <span className="text-[10px]" style={{ color: "hsl(350 30% 58%)" }}>
        Analisando e Interpretando Conteúdo (Estética & Tendências)...
      </span>
    </div>
  </motion.div>
);

/* ── Caption Block ── */
const hashtags = ["#ModaRoseGold", "#LookDoDay", "#EstéticaGlow", "#FashionViral", "#BelezaReal", "#OOTD", "#StyleInspo", "#GlamourMode"];

const CaptionBlock = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    className="rounded-2xl p-5 space-y-4"
    style={{
      background: "hsl(340 20% 12% / 0.3)",
      border: "1px solid hsl(350 30% 58% / 0.3)",
      boxShadow: "inset 0 0 20px hsl(350 60% 65% / 0.05)",
    }}
  >
    <p className="text-sm font-semibold" style={{ color: "hsl(350 30% 58%)", fontFamily: "'Playfair Display', serif" }}>
      Legenda & Tags Geradas
    </p>

    <div className="flex gap-3">
      <MessageCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(350 30% 58%)" }} />
      <p className="text-xs leading-relaxed" style={{ color: "hsl(30 30% 92%)" }}>
        ✨ Esse vestido Rose Gold é simplesmente TUDO!
        O caimento perfeito com um toque de glamour que eleva qualquer look.
        Combinei com a paleta Elegance pra um visual completo de arrasar! 💅
      </p>
    </div>

    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <ShoppingBag className="w-4 h-4" style={{ color: "hsl(35 40% 75%)" }} />
        <span className="text-xs font-semibold" style={{ color: "hsl(35 40% 75%)" }}>Produtos Detectados</span>
      </div>
      <ul className="text-xs space-y-1 pl-6" style={{ color: "hsl(30 15% 60%)" }}>
        <li>• Vestido Rose Gold — Smart Closet™</li>
        <li>• Paleta de Maquiagem Elegance — Glow Beauty</li>
        <li>• Salto Alto Champagne — Luxe Steps</li>
      </ul>
    </div>

    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Hash className="w-4 h-4" style={{ color: "hsl(350 30% 58%)" }} />
        <span className="text-xs font-semibold" style={{ color: "hsl(350 30% 58%)" }}>Hashtags de Nicho</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {hashtags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-[10px] font-medium"
            style={{ background: "hsl(350 30% 58% / 0.15)", color: "hsl(350 30% 58%)", border: "1px solid hsl(350 30% 58% / 0.2)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <p className="text-xs" style={{ color: "hsl(35 40% 75%)" }}>
      🔥 CTA: "Comenta aqui qual peça você mais amou! Salva pra não perder essa inspiração 💖"
    </p>
  </motion.div>
);

/* ── Main Page ── */
const ModaBeleza = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden pb-24"
      style={{
        background: "linear-gradient(135deg, hsl(340 20% 8%) 0%, hsl(350 25% 14%) 30%, hsl(340 20% 10%) 60%, hsl(350 30% 12%) 100%)",
        color: "hsl(30 30% 92%)",
      }}
    >
      <FloatingIcons />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: "hsl(350 30% 58%)" }} />
            <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "hsl(350 30% 58%)" }}>
              Scanner de Estética
            </span>
          </div>
          <h1
            className="text-xl font-bold tracking-wider uppercase"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(135deg, hsl(350 30% 58%), hsl(35 40% 75%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            VIRALCUT AI: MODA & BELEZA
          </h1>
          <p className="text-xs" style={{ color: "hsl(30 15% 60%)" }}>
            O Scanner de Estética — Analise looks, detecte peças e gere legendas de vendas automaticamente
          </p>
        </motion.div>

        <UploadZone />
        <ConsolePrompt />
        <VideoPreview />
        <ScannerChecks />
        <CaptionBlock />
      </div>

      {/* Footer bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3"
        style={{
          background: "hsl(340 20% 8% / 0.9)",
          borderTop: "1px solid hsl(350 30% 58% / 0.3)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: "hsl(0 84% 60%)" }}
        >
          <X className="w-4 h-4" />
          Descartar Edição
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs tracking-[0.12em] uppercase font-bold"
          style={{
            background: "linear-gradient(135deg, hsl(350 30% 58%), hsl(35 40% 75%))",
            color: "hsl(340 20% 8%)",
            boxShadow: "0 0 20px hsl(350 60% 65% / 0.3)",
          }}
        >
          <Zap className="w-4 h-4" />
          ✨ Validar & Salvar Look Estético
        </motion.button>
      </div>
    </div>
  );
};

export default ModaBeleza;
