import { motion } from "framer-motion";
import { Zap, X, Save } from "lucide-react";
import { Link } from "react-router-dom";

const ActionButtons = () => {
  return (
    <motion.div
      className="relative z-10 flex items-center justify-between px-4 py-3"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {/* Discard button */}
      <Link
        to="/"
        className="flex items-center gap-2 text-sm font-medium transition-colors"
        style={{ color: "hsl(0 84% 60%)", fontFamily: "'Rajdhani', sans-serif" }}
      >
        <X className="w-4 h-4" />
        Descartar Edição
      </Link>

      {/* Center instruction */}
      <div className="hidden md:flex items-center gap-1.5">
        <Save className="w-3.5 h-3.5" style={{ color: "hsl(220 10% 55%)" }} />
        <span
          className="text-[10px]"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            color: "hsl(220 10% 55%)",
          }}
        >
          Aprovar e Salvar para Galeria (Com Performance e Overlays Fitness)
        </span>
      </div>

      {/* Main CTA */}
      <motion.button
        className="relative flex items-center gap-3 px-6 py-3 rounded-lg text-xs tracking-[0.15em] uppercase overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          fontFamily: "'Orbitron', monospace",
          background: "linear-gradient(135deg, hsl(72 100% 50%), hsl(14 100% 57%))",
          color: "hsl(220 10% 8%)",
          boxShadow: "0 0 20px hsl(72 100% 50% / 0.3), 0 0 40px hsl(72 100% 50% / 0.1)",
        }}
      >
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            background: "radial-gradient(circle at center, hsl(72 100% 80% / 0.5), transparent 70%)",
          }}
        />

        <Zap className="w-5 h-5 relative z-10" />
        <div className="relative z-10 flex flex-col items-start">
          <span className="font-bold">VIRALCUT</span>
          <span className="text-[8px] opacity-80">Validar & Salvar Vídeo Stats</span>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default ActionButtons;
