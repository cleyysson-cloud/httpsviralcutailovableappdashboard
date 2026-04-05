import { motion } from "framer-motion";
import { Check, Loader2, Activity, Calculator, Apple, Layers, Music } from "lucide-react";
import { useEffect, useState } from "react";

interface CheckItem {
  icon: typeof Activity;
  text: string;
  status: "done" | "processing";
  delay: number;
}

const PipelineItem = ({ item, index }: { item: CheckItem; index: number }) => {
  const [currentStatus, setCurrentStatus] = useState<"waiting" | "processing" | "done">("waiting");

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStatus("processing"), item.delay * 1000);
    const timer2 = setTimeout(
      () => item.status === "done" && setCurrentStatus("done"),
      (item.delay + 1) * 1000
    );
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [item.delay, item.status]);

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: item.delay, duration: 0.4 }}
      className="flex items-center gap-3 px-3 py-2 rounded-lg border transition-all"
      style={{
        borderColor:
          currentStatus === "done"
            ? "hsl(72 100% 50% / 0.4)"
            : "hsl(220 10% 18%)",
        background:
          currentStatus === "done"
            ? "hsl(72 100% 50% / 0.08)"
            : "hsl(220 12% 12% / 0.5)",
      }}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {currentStatus === "done" ? (
          <Check className="w-3.5 h-3.5" style={{ color: "hsl(72 100% 50%)" }} />
        ) : currentStatus === "processing" ? (
          <Loader2
            className="w-3.5 h-3.5 animate-spin"
            style={{ color: "hsl(14 100% 57%)" }}
          />
        ) : (
          <div className="w-2 h-2 rounded-full" style={{ background: "hsl(220 10% 30%)" }} />
        )}
      </div>

      <item.icon className="w-4 h-4" style={{ color: "hsl(72 100% 50% / 0.7)" }} />

      <span
        className="text-xs flex-1"
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          color:
            currentStatus === "done"
              ? "hsl(60 100% 95%)"
              : "hsl(220 10% 55%)",
        }}
      >
        {item.text}
      </span>

      {currentStatus === "done" && (
        <span
          className="text-[9px] font-bold"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            color: "hsl(72 100% 50%)",
          }}
        >
          [OK]
        </span>
      )}
    </motion.div>
  );
};

const AnalysisPipeline = () => {
  const checks: CheckItem[] = [
    { icon: Activity, text: "Detectando Movimento: 'Agachamento'...", status: "done", delay: 0.2 },
    { icon: Apple, text: "Detectando Alimento: '600g Whey/Whisky'...", status: "done", delay: 0.5 },
    { icon: Calculator, text: "Calculando Macros: 'Calorias/Proteína'...", status: "done", delay: 0.8 },
    { icon: Layers, text: "Gerando Overlays de Stats...", status: "processing", delay: 1.1 },
    { icon: Music, text: "Sincronizando Beat Sync...", status: "processing", delay: 1.4 },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="space-y-1.5"
    >
      {checks.map((item, i) => (
        <PipelineItem key={i} item={item} index={i} />
      ))}
    </motion.div>
  );
};

export default AnalysisPipeline;
