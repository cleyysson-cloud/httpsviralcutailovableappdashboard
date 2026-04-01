import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown, Mic, TrendingUp, Gamepad2, Sparkles,
  Heart, Bike, Cookie, Image, Shirt, ChevronRight
} from "lucide-react";

const niches = [
  { id: "base", name: "A BASE", icon: Crown },
  { id: "podcast", name: "PODCAST", icon: Mic },
  { id: "financas", name: "FINANÇAS", icon: TrendingUp },
  { id: "gamer", name: "GAMER", icon: Gamepad2 },
  { id: "lifestyle", name: "LIFESTYLE", icon: Sparkles },
  { id: "saude", name: "SAÚDE", icon: Heart },
  { id: "moto", name: "MOTO", icon: Bike },
  { id: "doces", name: "DOCES", icon: Cookie },
  { id: "thumbnail", name: "THUMBNAIL", icon: Image },
  { id: "moda", name: "MODA", icon: Shirt },
];

interface NicheSidebarProps {
  activeNiche: string;
  onNicheChange: (id: string) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const NicheSidebar = ({ activeNiche, onNicheChange, collapsed, onToggleCollapse }: NicheSidebarProps) => {
  return (
    <motion.div
      className="shrink-0 border-r border-border flex flex-col gradient-card overflow-hidden"
      animate={{ width: collapsed ? 56 : 208 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-3 flex items-center justify-between border-b border-border">
        {!collapsed && (
          <div>
            <p className="text-[10px] font-display font-bold text-neon-purple tracking-wider">Smart Niche Folders</p>
            <p className="text-[8px] text-muted-foreground font-heading">(10 PILARES)</p>
          </div>
        )}
        <button onClick={onToggleCollapse} className="p-1 rounded hover:bg-muted transition-colors">
          <ChevronRight className={`w-4 h-4 transition-transform ${collapsed ? "" : "rotate-180"}`} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-2 space-y-0.5 px-1.5">
        {niches.map((niche, i) => {
          const isActive = activeNiche === niche.id;
          return (
            <motion.button
              key={niche.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onNicheChange(niche.id)}
              whileTap={{ scale: 0.95 }}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-heading font-semibold transition-all ${
                isActive
                  ? "bg-primary/15 text-neon-purple neon-border neon-text-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <niche.icon className="w-4 h-4 shrink-0" />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    className="whitespace-nowrap overflow-hidden"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                  >
                    {niche.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default NicheSidebar;
