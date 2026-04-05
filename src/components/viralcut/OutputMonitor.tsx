import { motion } from "framer-motion";
import { Play, Heart, Timer, TrendingUp } from "lucide-react";
import outputPreview from "@/assets/output-preview.jpg";

const OutputMonitor = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative rounded-xl border overflow-hidden"
      style={{
        background: "linear-gradient(145deg, hsl(220 12% 12% / 0.85), hsl(220 12% 6% / 0.9))",
        borderColor: "hsl(72 60% 25%)",
        boxShadow: "0 8px 32px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(72 100% 50% / 0.1)",
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-2.5 border-b flex items-center gap-2"
        style={{
          borderColor: "hsl(72 60% 25%)",
          background: "hsl(14 100% 57% / 0.08)",
        }}
      >
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: "hsl(14 100% 57%)" }}
        />
        <span
          className="text-[10px] tracking-[0.15em] uppercase"
          style={{
            fontFamily: "'Orbitron', monospace",
            color: "hsl(14 100% 57%)",
          }}
        >
          Vídeo Enriquecido (Performance Stats applied)
        </span>
      </div>

      <div className="p-3 space-y-3">
        {/* Video preview */}
        <div className="relative rounded-lg overflow-hidden border aspect-video" style={{ borderColor: "hsl(72 60% 25%)" }}>
          <img
            src={outputPreview}
            alt="Output video preview with performance stats overlay"
            className="w-full h-full object-cover"
          />

          {/* Overlay stats */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
          />

          {/* Play button */}
          <motion.div
            className="absolute top-2 right-2 w-8 h-8 rounded-full border flex items-center justify-center"
            style={{
              background: "hsl(220 10% 8% / 0.8)",
              borderColor: "hsl(72 100% 50%)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Play className="w-3 h-3 ml-0.5" style={{ color: "hsl(72 100% 50%)" }} />
          </motion.div>

          {/* Caption overlay */}
          <motion.div
            className="absolute bottom-2 left-2 right-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div
              className="px-2 py-1 rounded text-[10px]"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                background: "hsl(220 10% 8% / 0.85)",
              }}
            >
              <span style={{ color: "hsl(60 100% 95%)" }}>...então, para bater os </span>
              <span className="font-bold" style={{ color: "hsl(72 100% 50%)" }}>600g</span>
              <span style={{ color: "hsl(60 100% 95%)" }}> de macros...</span>
            </div>
          </motion.div>

          {/* Mini stat badges */}
          <motion.div
            className="absolute top-2 left-2 flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div
              className="px-1.5 py-0.5 rounded text-[8px] border"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                color: "hsl(72 100% 50%)",
                background: "hsl(220 10% 8% / 0.8)",
                borderColor: "hsl(72 100% 50% / 0.3)",
              }}
            >
              600g Whey
            </div>
          </motion.div>
        </div>

        {/* Nutritional data */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="rounded-lg border p-3 space-y-2"
          style={{
            borderColor: "hsl(72 60% 25%)",
            background: "hsl(220 12% 10% / 0.6)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3 h-3" style={{ color: "hsl(14 100% 57%)" }} />
            <span
              className="text-[9px] tracking-wider uppercase"
              style={{
                fontFamily: "'Orbitron', monospace",
                color: "hsl(14 100% 57%)",
              }}
            >
              Dados Nutricionais (Dose 600g):
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Calorias Total", value: "780 kcal", icon: Heart },
              { label: "Proteína Total", value: "150g", icon: TrendingUp },
              { label: "Carboidrato", value: "100g", icon: Timer },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-2 rounded border"
                style={{
                  borderColor: "hsl(72 100% 50% / 0.2)",
                  background: "hsl(220 12% 12% / 0.5)",
                }}
              >
                <stat.icon
                  className="w-3 h-3 mx-auto mb-1"
                  style={{ color: "hsl(72 100% 50%)" }}
                />
                <p
                  className="text-[10px] font-bold"
                  style={{
                    fontFamily: "'Orbitron', monospace",
                    color: "hsl(72 100% 50%)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-[8px]" style={{ color: "hsl(220 10% 55%)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OutputMonitor;
