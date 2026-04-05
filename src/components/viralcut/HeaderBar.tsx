import { motion } from "framer-motion";

const HeaderBar = () => {
  return (
    <motion.div
      className="relative z-10 border-b px-4 py-3"
      style={{
        background: "hsl(220 10% 8% / 0.8)",
        borderColor: "hsl(72 100% 50% / 0.2)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h1
          className="text-sm md:text-lg tracking-[0.3em] uppercase text-center"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          <span
            className="animate-neon-pulse"
            style={{ color: "hsl(72 100% 50%)" }}
          >
            ViralCut AI:
          </span>{" "}
          <span style={{ color: "hsl(60 100% 95%)" }}>Cyborg Athlete</span>
          <span style={{ color: "hsl(220 10% 55%)" }}> | </span>
          <span style={{ color: "hsl(14 100% 57%)" }}>O Scanner de Estética</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default HeaderBar;
