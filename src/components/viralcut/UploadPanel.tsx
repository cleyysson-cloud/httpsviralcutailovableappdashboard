import { motion } from "framer-motion";
import { Dumbbell, UtensilsCrossed, Upload, CheckSquare } from "lucide-react";
import { useState } from "react";

const UploadCard = ({
  icon: Icon,
  title,
  subtitle,
  delay,
}: {
  icon: typeof Dumbbell;
  title: string;
  subtitle: string;
  delay: number;
}) => {
  const [uploaded, setUploaded] = useState(false);

  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      onClick={() => setUploaded(!uploaded)}
      className="relative cursor-pointer group rounded-lg border p-4 transition-all"
      style={{
        background: "linear-gradient(145deg, hsl(220 12% 14% / 0.9), hsl(220 12% 8% / 0.95))",
        borderColor: "hsl(72 60% 25%)",
      }}
    >
      {/* Neon border glow on hover */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ boxShadow: "0 0 20px hsl(72 100% 50% / 0.3), 0 0 40px hsl(72 100% 50% / 0.1)" }}
      />

      <div className="flex flex-col items-center gap-2 text-center">
        <div
          className="w-14 h-14 rounded-lg border flex items-center justify-center"
          style={{
            background: "hsl(72 100% 50% / 0.1)",
            borderColor: "hsl(72 60% 25%)",
          }}
        >
          <Icon className="w-7 h-7" style={{ color: "hsl(72 100% 50%)" }} />
        </div>

        <div className="flex items-center gap-1.5">
          <CheckSquare
            className={`w-4 h-4 ${uploaded ? "text-primary" : "text-muted-foreground"}`}
            style={{ color: uploaded ? "hsl(72 100% 50%)" : "hsl(220 10% 55%)" }}
          />
          <span
            className="text-xs tracking-wider uppercase"
            style={{
              fontFamily: "'Orbitron', monospace",
              color: "hsl(72 100% 50%)",
            }}
          >
            {title}
          </span>
        </div>

        <p
          className="text-xs"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            color: "hsl(220 10% 55%)",
          }}
        >
          {subtitle}
        </p>

        {!uploaded && (
          <div className="flex items-center gap-1 mt-1" style={{ color: "hsl(220 10% 55%)" }}>
            <Upload className="w-3 h-3" />
            <span className="text-[10px]" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              Clique para upload
            </span>
          </div>
        )}
        {uploaded && (
          <span
            className="text-[10px]"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: "hsl(72 100% 50%)",
            }}
          >
            ✅ Arquivo carregado
          </span>
        )}
      </div>
    </motion.div>
  );
};

const FitnessUploadPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
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
          background: "hsl(72 100% 50% / 0.05)",
        }}
      >
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: "hsl(72 100% 50%)" }}
        />
        <span
          className="text-[10px] tracking-[0.2em] uppercase"
          style={{
            fontFamily: "'Orbitron', monospace",
            color: "hsl(72 100% 50%)",
          }}
        >
          Carregar Fontes Brutas
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <UploadCard
            icon={Dumbbell}
            title="Upload Vídeo Treino (+)"
            subtitle="Suba o vídeo do seu exercício/treino"
            delay={0.3}
          />
          <UploadCard
            icon={UtensilsCrossed}
            title="Upload Vídeo Receita (+)"
            subtitle="Suba o vídeo da sua refeição/dieta"
            delay={0.5}
          />
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 py-2 rounded-md border"
          style={{
            borderColor: "hsl(72 60% 25%)",
            background: "hsl(72 100% 50% / 0.05)",
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "hsl(72 100% 50%)" }}
          />
          <span
            className="text-[10px] tracking-wider"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: "hsl(72 100% 50%)",
            }}
          >
            Analisando Movimento e Macros (Em Tempo Real)
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FitnessUploadPanel;
