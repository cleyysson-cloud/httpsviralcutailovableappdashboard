import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export interface TrendCardData {
  id: string;
  niche: string[];
  category: string;
  title: string;
  alert: string;
  image: string;
  metrics: { label: string; value: string; icon: string }[];
  hashtags?: string;
  audio?: string;
  audience?: string;
  filter?: string;
}

interface TrendCardProps {
  data: TrendCardData;
  onUseTrend: () => void;
  onViewExample: () => void;
}

const TrendCard = ({ data, onUseTrend, onViewExample }: TrendCardProps) => {
  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden min-w-[320px] max-w-[380px] flex-shrink-0 neon-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="px-3 pt-3 pb-1">
        <span className="text-[8px] font-display font-bold text-neon-purple tracking-wider">{data.category}</span>
      </div>

      {/* Image + Alert */}
      <div className="relative h-40 mx-3 rounded-lg overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2">
          <p className="text-[10px] font-heading font-bold text-neon-yellow">{data.alert}</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="px-3 py-2 space-y-1.5">
        {data.metrics.map((m, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] font-heading">
            <span>{m.icon}</span>
            <span className="text-muted-foreground">{m.label}:</span>
            <span className="font-semibold text-foreground">{m.value}</span>
          </div>
        ))}

        {data.hashtags && (
          <p className="text-[9px] text-neon-cyan font-heading">Use {data.hashtags}</p>
        )}
        {data.audio && (
          <p className="text-[9px] text-muted-foreground font-heading">🎵 Áudio Sugerido: [{data.audio}]</p>
        )}
        {data.audience && (
          <p className="text-[9px] text-muted-foreground font-heading">🎯 Público Alvo: {data.audience}</p>
        )}
        {data.filter && (
          <p className="text-[9px] text-muted-foreground font-heading">📸 Filtro Sugerido: [{data.filter}]</p>
        )}
      </div>

      {/* Actions */}
      <div className="px-3 pb-3 flex gap-2">
        <Button onClick={onUseTrend} size="sm" className="flex-1 text-[10px] font-display font-bold gradient-neon text-primary-foreground border-0 hover:opacity-90">
          USAR ESSA TENDÊNCIA
        </Button>
        <Button onClick={onViewExample} size="sm" variant="outline" className="flex-1 text-[10px] font-display font-bold">
          VER EXEMPLO
        </Button>
      </div>
    </motion.div>
  );
};

export default TrendCard;
