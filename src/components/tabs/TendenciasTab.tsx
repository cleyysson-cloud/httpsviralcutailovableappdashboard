import { TrendingUp, Flame, Eye, ThumbsUp, BarChart3, ArrowUpRight } from "lucide-react";

const trends = [
  { title: "Hook nos 3 primeiros segundos", category: "RETENÇÃO", growth: "+340%", hot: true },
  { title: "Zoom + Beat Drop sincronizado", category: "EDIÇÃO", growth: "+280%", hot: true },
  { title: "Storytelling em 60s", category: "ROTEIRO", growth: "+195%", hot: false },
  { title: "Split-screen React Content", category: "FORMATO", growth: "+160%", hot: false },
  { title: "Legendas com emoji dinâmico", category: "ENGAJAMENTO", growth: "+145%", hot: true },
];

const stats = [
  { icon: Eye, label: "Views Médias", value: "48.2K", change: "+22%" },
  { icon: ThumbsUp, label: "Engajamento", value: "12.8%", change: "+5.4%" },
  { icon: BarChart3, label: "Retenção", value: "67%", change: "+8%" },
];

const TendenciasTab = () => (
  <div className="px-4">
    <h2 className="text-sm font-black tracking-[0.12em] uppercase text-white/80 mb-4">
      Tendências Virais
    </h2>

    {/* Stats row */}
    <div className="grid grid-cols-3 gap-2 mb-5">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl p-3 text-center"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.12)", backdropFilter: "blur(12px)" }}
        >
          <s.icon className="w-4 h-4 text-purple-400/60 mx-auto mb-1.5" />
          <p className="text-sm font-black text-white/90">{s.value}</p>
          <p className="text-[8px] text-white/30 uppercase tracking-wider mb-1">{s.label}</p>
          <span className="text-[9px] font-bold text-emerald-400">{s.change}</span>
        </div>
      ))}
    </div>

    {/* Trending topics */}
    <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 mb-3">
      🔥 EM ALTA AGORA
    </p>

    <div className="flex flex-col gap-2.5">
      {trends.map((t, i) => (
        <div
          key={t.title}
          className="flex items-center gap-3 rounded-2xl p-3 transition-all hover:scale-[1.01]"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${t.hot ? "rgba(239,68,68,0.15)" : "rgba(139,92,246,0.1)"}`,
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-black"
            style={{ background: "rgba(139,92,246,0.1)", color: "rgba(168,130,255,0.8)" }}
          >
            #{i + 1}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <h3 className="text-[11px] font-extrabold text-white/90 truncate">{t.title}</h3>
              {t.hot && <Flame className="w-3 h-3 text-orange-400 flex-shrink-0" />}
            </div>
            <span className="text-[8px] font-bold uppercase tracking-wider text-purple-400/60">{t.category}</span>
          </div>
          <div className="flex items-center gap-0.5 text-emerald-400">
            <ArrowUpRight className="w-3 h-3" />
            <span className="text-[10px] font-black">{t.growth}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-5 text-center">
      <p className="text-[9px] text-white/20 uppercase tracking-wider flex items-center justify-center gap-1">
        <TrendingUp className="w-3 h-3" /> Atualizado em tempo real pela IA
      </p>
    </div>
  </div>
);

export default TendenciasTab;
