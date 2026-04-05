import { motion } from "framer-motion";
import gymBg from "@/assets/gym-background.jpg";

interface HexBackgroundProps {
  children: React.ReactNode;
}

const HexBackground = ({ children }: HexBackgroundProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "hsl(220 10% 8%)" }}>
      {/* Base gym background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${gymBg})` }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(220 10% 4% / 0.85), hsl(220 12% 8% / 0.7), hsl(14 80% 10% / 0.6), hsl(72 60% 8% / 0.7))",
        }}
      />

      {/* Circuit grid pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(72 100% 50% / 0.05) 1px, transparent 1px),
            linear-gradient(hsl(72 100% 50% / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hex pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 55,15 55,37 30,50 5,37 5,15' fill='none' stroke='%23CCFF0015' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated scan line */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, hsl(72 100% 50%), transparent)" }}
          animate={{ y: ["-100%", "100vh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating hexagons */}
      {[
        { top: "10%", left: "5%", delay: 0 },
        { top: "30%", right: "8%", delay: 0.5 },
        { bottom: "20%", left: "10%", delay: 1 },
        { top: "60%", right: "15%", delay: 1.5 },
        { top: "15%", right: "30%", delay: 2 },
        { bottom: "40%", left: "25%", delay: 2.5 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ ...pos }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, delay: pos.delay, repeat: Infinity }}
        >
          <svg width="40" height="35" viewBox="0 0 60 52" className="opacity-20">
            <polygon
              points="30,2 55,15 55,37 30,50 5,37 5,15"
              fill="none"
              stroke="hsl(72 100% 50%)"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}

      {children}
    </div>
  );
};

export default HexBackground;
