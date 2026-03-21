import { useState, useRef } from "react";
import { Home, FolderOpen, TrendingUp, User, ChevronLeft, ChevronRight, Upload, FileText, Zap, Scissors, Mic, BarChart3, Gamepad2, Camera, Dumbbell, Car } from "lucide-react";
import { Link } from "react-router-dom";
import beforeImg from "@/assets/before-frustration.jpg";
import afterImg from "@/assets/after-success.jpg";

const nicheCards = [
  {
    title: "A BASE",
    subtitle: "Cortes Rápidos & Jump Cuts | Legendas Dinâmicas | Beat Sync",
    icon: Scissors,
    accentColor: "from-blue-500 to-indigo-600",
    glowColor: "shadow-blue-500/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  },
  {
    title: "PODCAST & CORTES",
    subtitle: "Multicam Inteligente | Destaque de Voz | Sincronização",
    icon: Mic,
    accentColor: "from-pink-500 to-rose-600",
    glowColor: "shadow-pink-500/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
  },
  {
    title: "FINANÇAS & FIIs",
    subtitle: "Tickers em Tempo Real | Gráficos Neon | Ativos de Valor",
    icon: BarChart3,
    accentColor: "from-emerald-400 to-green-600",
    glowColor: "shadow-emerald-500/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
  },
  {
    title: "GAMER & TECH",
    subtitle: "Gameplay Integrado | Realce de FPS & RGB | Beat Sync",
    icon: Gamepad2,
    accentColor: "from-cyan-400 to-blue-600",
    glowColor: "shadow-cyan-500/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
  },
  {
    title: "LIFESTYLE & VLOG",
    subtitle: "Direção Semântica por Prompt | Zoom Suave | Estética Clean",
    icon: Camera,
    accentColor: "from-amber-400 to-orange-500",
    glowColor: "shadow-amber-500/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
  },
  {
    title: "SAÚDE & FITNESS",
    subtitle: "Scanner de Macros & Calorias | Contador de Repetições | Performance Stats",
    icon: Dumbbell,
    accentColor: "from-red-500 to-rose-600",
    glowColor: "shadow-red-500/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
  },
  {
    title: "MOTO & AUTO",
    subtitle: "Telemetria de Game | Motion Blur | Análise de Aceleração",
    icon: Car,
    accentColor: "from-violet-500 to-purple-600",
    glowColor: "shadow-violet-500/20",
    borderGlow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
  },
];

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: "#050505" }}>
      {/* Deep ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[700px] h-[500px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }} />
        <div className="absolute top-[-50px] right-[-100px] w-[600px] h-[500px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }} />
        {/* Central purple radial behind monitor */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-40" style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, rgba(88,28,135,0.05) 40%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 pb-28">
        {/* Header Title */}
        <div className="text-center py-5 px-4">
          <h1 className="text-xs md:text-sm font-extrabold tracking-[0.25em] uppercase">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">ViralCut AI:</span>{" "}
            <span className="text-white/70 font-medium tracking-[0.2em]">Nova Geração | O Sistema Total de Autoridade</span>
          </h1>
        </div>

        {/* Before / Brain / After */}
        <div className="grid grid-cols-3 gap-3 px-4 mb-8">
          {/* ANTES */}
          <div className="glass-card-red relative rounded-2xl overflow-hidden p-3 group">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="mb-2">
                <span className="text-[11px] font-black text-red-400 uppercase tracking-[0.15em] italic">Antes</span>
                <p className="text-[9px] text-red-300/60 font-bold uppercase tracking-wider">Frustração</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-red-500/10 group-hover:border-red-500/20 transition-all">
                <img src={beforeImg} alt="Antes - Edição complexa e demorada" className="w-full aspect-video object-cover grayscale-[30%] opacity-80 group-hover:opacity-90 transition-all" />
              </div>
              <p className="text-[9px] text-red-400/60 text-center mt-2 font-bold uppercase tracking-wider">Complexo e Demorado</p>
            </div>
          </div>

          {/* CENTER - Brain */}
          <div className="glass-card-purple relative rounded-2xl overflow-hidden p-3">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <p className="text-[9px] text-white/50 text-center mb-1.5 font-medium">
                Olá, <span className="text-cyan-400 font-bold">Cleysson</span>, qual o pilar de autoridade de hoje?
              </p>

              {/* Search */}
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 mb-2 backdrop-blur-sm">
                <span className="text-[8px] text-white/30 flex-1 font-medium">Converse com o Cérebro IA...</span>
                <svg className="w-3 h-3 text-purple-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>

              <p className="text-[7px] text-purple-400/80 font-black text-center uppercase tracking-[0.2em] mb-2">
                Cérebro Integrado
              </p>

              {/* Plasma Brain */}
              <div className="relative flex items-center justify-center my-2">
                {/* Side buttons */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                  <button className="glass-btn-sm flex items-center gap-1 px-1.5 py-1 rounded-lg hover:scale-105 transition-transform">
                    <Upload className="w-2.5 h-2.5 text-purple-300" />
                    <span className="text-[6px] text-purple-200/80 font-semibold">Carregar</span>
                  </button>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                  <button className="glass-btn-sm flex items-center gap-1 px-1.5 py-1 rounded-lg hover:scale-105 transition-transform">
                    <FileText className="w-2.5 h-2.5 text-cyan-300" />
                    <span className="text-[6px] text-cyan-200/80 font-semibold">Roteiro</span>
                  </button>
                </div>

                {/* The Sphere */}
                <div className="brain-sphere-container w-[72px] h-[72px] relative">
                  {/* Outer glow rings */}
                  <div className="absolute inset-[-12px] rounded-full brain-glow-outer" />
                  <div className="absolute inset-[-6px] rounded-full brain-glow-mid" />
                  {/* Rotating gradient layers */}
                  <div className="absolute inset-0 rounded-full animate-spin-slow opacity-80" style={{ background: "conic-gradient(from 0deg, rgba(6,182,212,0.5), rgba(139,92,246,0.6), rgba(236,72,153,0.4), rgba(6,182,212,0.5))" }} />
                  <div className="absolute inset-[3px] rounded-full animate-spin-reverse opacity-60" style={{ background: "conic-gradient(from 180deg, rgba(139,92,246,0.4), rgba(6,182,212,0.5), rgba(168,85,247,0.3), rgba(139,92,246,0.4))" }} />
                  {/* Inner core */}
                  <div className="absolute inset-[6px] rounded-full backdrop-blur-md" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(5,5,5,0.8) 70%)" }} />
                  {/* Center icon */}
                  <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-cyan-300 brain-icon-pulse drop-shadow-[0_0_12px_rgba(6,182,212,0.9)]" />
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/editor"
                className="block mt-3 w-full text-center text-[9px] font-black uppercase tracking-wider py-2.5 rounded-xl transition-all duration-300 cta-elite"
              >
                Criar Novo Vídeo de Autoridade
              </Link>
            </div>
          </div>

          {/* DEPOIS */}
          <div className="glass-card-green relative rounded-2xl overflow-hidden p-3 group">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="mb-2 text-right">
                <span className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.15em] italic">Depois</span>
                <p className="text-[9px] text-emerald-300/60 font-bold uppercase tracking-wider">Sucesso</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
                <img src={afterImg} alt="Depois - Sucesso viral" className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-all duration-500" />
              </div>
              <p className="text-[9px] text-emerald-400/60 text-center mt-2 font-bold uppercase tracking-wider">Rápido e Viral</p>
            </div>
          </div>
        </div>

        {/* Nicho Estratégico */}
        <div className="px-4 mb-6">
          <h2 className="text-base font-extrabold mb-5 tracking-wide">
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Nicho Estratégico</span>
          </h2>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full glass-btn flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-4 h-4 text-white/70" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-8 snap-x snap-mandatory py-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {nicheCards.map((card) => (
                <div
                  key={card.title}
                  className={`niche-card-elite flex-shrink-0 w-44 snap-start rounded-2xl p-4 cursor-pointer transition-all duration-500 ${card.borderGlow}`}
                >
                  {/* Icon area with gradient */}
                  <div className={`aspect-video rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${card.accentColor} opacity-20 relative overflow-hidden`}>
                    <card.icon className="w-8 h-8 text-white relative z-10 opacity-100" style={{ opacity: 1 }} />
                  </div>
                  <h3 className="text-[11px] font-extrabold text-white/90 mb-1 tracking-wide">{card.title}</h3>
                  <p className="text-[8px] text-white/40 leading-relaxed font-medium">{card.subtitle}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full glass-btn flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bottom-nav-glass">
        <div className="flex items-center justify-around py-3 px-4 max-w-lg mx-auto">
          {[
            { id: "home", icon: Home, label: "Home" },
            { id: "projetos", icon: FolderOpen, label: "Projetos" },
            { id: "tendencias", icon: TrendingUp, label: "Tendências" },
            { id: "perfil", icon: User, label: "Perfil" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
                activeNav === item.id
                  ? "text-purple-400 scale-110"
                  : "text-white/25 hover:text-white/50"
              }`}
            >
              <item.icon className={`w-5 h-5 transition-all ${activeNav === item.id ? "drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]" : ""}`} />
              <span className="text-[9px] font-bold tracking-wider uppercase">{item.label}</span>
              {activeNav === item.id && (
                <div className="w-1 h-1 rounded-full bg-purple-400" style={{ boxShadow: "0 0 8px rgba(139,92,246,0.9), 0 0 16px rgba(139,92,246,0.4)" }} />
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
