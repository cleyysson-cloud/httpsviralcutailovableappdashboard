import { motion } from "framer-motion";
import {
  Layers, Mic, DollarSign, Gamepad2, Sparkles,
  Heart, Bike, Cookie, Image, Shirt
} from "lucide-react";

export type NicheId =
  | "base" | "podcast" | "financas" | "gamer" | "lifestyle"
  | "saude" | "moto" | "doces" | "thumbnail" | "moda";

interface Pillar {
  id: NicheId;
  label: string;
  icon: React.ElementType;
}

const pillars: Pillar[] = [
  { id: "base", label: "A Base", icon: Layers },
  { id: "podcast", label: "Podcast", icon: Mic },
  { id: "financas", label: "Finanças", icon: DollarSign },
  { id: "gamer", label: "Gamer", icon: Gamepad2 },
  { id: "lifestyle", label: "Lifestyle", icon: Sparkles },
  { id: "saude", label: "Saúde", icon: Heart },
  { id: "moto", label: "Moto", icon: Bike },
  { id: "doces", label: "Doces", icon: Cookie },
  { id: "thumbnail", label: "Thumbnail", icon: Image },
  { id: "moda", label: "Moda", icon: Shirt },
];

interface NicheFilterProps {
  activeNiche: NicheId | null;
  onSelect: (id: NicheId) => void;
}

const NicheFilter = ({ activeNiche, onSelect }: NicheFilterProps) => {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide">
      {pillars.map((p) => {
        const isActive = activeNiche === p.id;
        const Icon = p.icon;
        return (
          <motion.button
            key={p.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(p.id)}
            className={`flex flex-col items-center gap-1 px-2 py-3 rounded-lg transition-all duration-200 shrink-0 ${
              isActive
                ? "bg-primary/20 neon-border glow-purple"
                : "hover:bg-muted"
            }`}
          >
            <Icon size={20} className={isActive ? "text-neon-purple" : "text-muted-foreground"} />
            <span className={`text-[8px] font-heading font-bold tracking-wider ${
              isActive ? "text-neon-purple" : "text-muted-foreground"
            }`}>
              {p.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default NicheFilter;
