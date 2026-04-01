import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Music, Anchor, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";

const quickLists = {
  musicas: [
    "Synthwave Beats 2026",
    "Lo-Fi Chill Trap",
    "Afrobeats Trending",
    "Funk Remix Pop",
  ],
  ganchos: [
    '"Você sabia que..."',
    '"3 erros que te..."',
    '"Pare de fazer isso..."',
    '"O segredo que ninguém..."',
  ],
};

const PredictivePanel = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSearch = () => {
    if (!query.trim()) return;
    const predictions: Record<string, string> = {
      bitcoin: "🔥 Potencial Viral: ALTA (Use #BTC2026)",
      crypto: "🔥 Potencial Viral: ALTA (Use #Crypto #Web3)",
      fitness: "📈 Crescimento: 120% (Use #FitLife #Treino)",
      receita: "✨ Potencial Viral: MÉDIA (Use #ReceitaFácil)",
    };
    const key = Object.keys(predictions).find((k) =>
      query.toLowerCase().includes(k)
    );
    setResult(
      key
        ? predictions[key]
        : "🔥 Potencial Viral: MÉDIA (Analise as hashtags do nicho)"
    );
  };

  return (
    <div className="space-y-4">
      {/* Predictive Search */}
      <div className="glass-card rounded-xl p-4 neon-border">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={14} className="text-neon-purple" />
          <span className="text-[10px] font-display font-bold text-neon-purple tracking-wider">Previsão de Viralização</span>
          <span className="text-[8px] text-muted-foreground font-heading">(IA Predictive)</span>
        </div>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-9 text-xs font-heading bg-muted/50 border-border"
            placeholder='Ex: "Vou falar sobre Bitcoin"'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        <AnimatePresence>
          {result && (
            <motion.div
              className="mt-2 p-2.5 rounded-lg bg-primary/10 neon-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-[11px] font-heading font-semibold text-foreground">{result}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick lists */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-card rounded-xl p-3 neon-border">
          <div className="flex items-center gap-2 mb-2">
            <Music size={14} className="text-neon-green" />
            <h3 className="text-[10px] font-display font-bold text-neon-green tracking-wider">Músicas em Alta</h3>
          </div>
          <div className="space-y-1.5">
            {quickLists.musicas.map((m, i) => (
              <p key={i} className="text-[10px] font-heading text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                {m}
              </p>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-3 neon-border">
          <div className="flex items-center gap-2 mb-2">
            <Anchor size={14} className="text-neon-yellow" />
            <h3 className="text-[10px] font-display font-bold text-neon-yellow tracking-wider">Ganchos de Ouro</h3>
          </div>
          <div className="space-y-1.5">
            {quickLists.ganchos.map((g, i) => (
              <p key={i} className="text-[10px] font-heading text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                {g}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictivePanel;
