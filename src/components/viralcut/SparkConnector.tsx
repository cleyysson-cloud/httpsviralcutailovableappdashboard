import { motion } from "framer-motion";
import { Zap, RefreshCw, DollarSign } from "lucide-react";

const SparkConnector = () => {
  return (
    <div className="flex flex-col items-center justify-center relative py-4">
      {/* Data flow lines left */}
      <motion.div
        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, hsl(72 100% 50% / 0.6), transparent 30%, transparent 70%, hsl(14 100% 57% / 0.6))",
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Central spark */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-10"
      >
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full scale-150 opacity-50"
          style={{
            background:
              "radial-gradient(circle, hsl(72 100% 50% / 0.4), hsl(14 100% 57% / 0.2), transparent 70%)",
          }}
        />

        {/* Outer ring */}
        <div
          className="w-20 h-20 rounded-full border-2 flex items-center justify-center relative"
          style={{ borderColor: "hsl(72 100% 50%)" }}
        >
          <motion.div
            className="absolute inset-1 rounded-full border border-dashed opacity-60"
            style={{ borderColor: "hsl(14 100% 57%)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <Zap
            className="w-8 h-8 animate-neon-pulse"
            style={{ color: "hsl(72 100% 50%)" }}
          />

          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full border flex items-center justify-center"
            style={{
              background: "hsl(220 10% 8%)",
              borderColor: "hsl(72 100% 50%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <RefreshCw className="w-2.5 h-2.5" style={{ color: "hsl(72 100% 50%)" }} />
          </motion.div>

          <motion.div
            className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full border flex items-center justify-center"
            style={{
              background: "hsl(220 10% 8%)",
              borderColor: "hsl(14 100% 57%)",
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <DollarSign className="w-2.5 h-2.5" style={{ color: "hsl(14 100% 57%)" }} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SparkConnector;
