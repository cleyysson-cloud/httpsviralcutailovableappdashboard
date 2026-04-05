import { motion } from "framer-motion";

const CyborgAthlete = () => {
  return (
    <motion.div
      className="absolute top-20 right-4 z-5 hidden lg:block pointer-events-none"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 0.15, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div
        className="w-64 h-80 rounded-2xl border overflow-hidden"
        style={{
          borderColor: "hsl(72 100% 50% / 0.1)",
          background: "linear-gradient(to bottom, transparent, hsl(220 10% 8%))",
        }}
      />
    </motion.div>
  );
};

export default CyborgAthlete;
