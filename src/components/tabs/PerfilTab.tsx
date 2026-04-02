import { User, Crown, Video, Eye, TrendingUp, Settings, LogOut, ChevronRight } from "lucide-react";

const menuItems = [
  { icon: Video, label: "Meus Vídeos", value: "23" },
  { icon: Eye, label: "Views Totais", value: "1.2M" },
  { icon: TrendingUp, label: "Taxa de Crescimento", value: "+34%" },
];

const settingsItems = [
  { icon: Settings, label: "Configurações" },
  { icon: LogOut, label: "Sair da Conta" },
];

const PerfilTab = () => (
  <div className="px-4">
    {/* Profile card */}
    <div
      className="rounded-2xl p-5 mb-5 text-center"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.15)", backdropFilter: "blur(12px)" }}
    >
      <div
        className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.2))",
          border: "2px solid rgba(139,92,246,0.3)",
          boxShadow: "0 0 25px rgba(139,92,246,0.2)",
        }}
      >
        <User className="w-8 h-8 text-purple-300/80" />
      </div>
      <h2 className="text-base font-black text-white/90 mb-0.5">Cleysson</h2>
      <div className="flex items-center justify-center gap-1.5 mb-3">
        <Crown className="w-3.5 h-3.5 text-amber-400" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80">Plano Pro</span>
      </div>
      <p className="text-[9px] text-white/30 uppercase tracking-wider">Membro desde Mar 2026</p>
    </div>

    {/* Stats */}
    <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 mb-3">ESTATÍSTICAS</p>
    <div className="flex flex-col gap-2 mb-5">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 rounded-xl p-3"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.1)" }}
        >
          <item.icon className="w-4 h-4 text-purple-400/60" />
          <span className="flex-1 text-xs font-bold text-white/70">{item.label}</span>
          <span className="text-xs font-black text-white/90">{item.value}</span>
        </div>
      ))}
    </div>

    {/* Settings */}
    <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 mb-3">CONTA</p>
    <div className="flex flex-col gap-2">
      {settingsItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 rounded-xl p-3 w-full text-left transition-all hover:scale-[1.01]"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.1)" }}
        >
          <item.icon className="w-4 h-4 text-white/30" />
          <span className="flex-1 text-xs font-bold text-white/50">{item.label}</span>
          <ChevronRight className="w-3.5 h-3.5 text-white/20" />
        </button>
      ))}
    </div>
  </div>
);

export default PerfilTab;
