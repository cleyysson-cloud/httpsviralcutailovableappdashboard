import { useState, useRef } from "react";
import { Home, FolderOpen, TrendingUp, User, ChevronLeft, ChevronRight, Upload, FileText, Zap, Play, Scissors, Mic, BarChart3, Gamepad2, Camera, Dumbbell, Car } from "lucide-react";
import { Link } from "react-router-dom";

const nicheCards = [
  {
    title: "A BASE",
    subtitle: "Cortes Rápidos & Jump Cuts | Legendas Dinâmicas | Beat Sync",
    icon: Scissors,
    gradient: "from-blue-600/40 to-purple-600/40",
    border: "border-blue-500/30",
  },
  {
    title: "PODCAST & CORTES",
    subtitle: "Multicam Inteligente | Destaque de Voz | Sincronização",
    icon: Mic,
    gradient: "from-pink-600/40 to-red-600/40",
    border: "border-pink-500/30",
  },
  {
    title: "FINANÇAS & FIIs",
    subtitle: "Tickers em Tempo Real | Gráficos Neon | Ativos de Valor",
    icon: BarChart3,
    gradient: "from-green-600/40 to-emerald-600/40",
    border: "border-green-500/30",
  },
  {
    title: "GAMER & TECH",
    subtitle: "Gameplay Integrado | Realce de FPS & RGB | Beat Sync",
    icon: Gamepad2,
    gradient: "from-cyan-600/40 to-blue-600/40",
    border: "border-cyan-500/30",
  },
  {
    title: "LIFESTYLE & VLOG",
    subtitle: "Direção Semântica por Prompt | Zoom Suave | Estética Clean",
    icon: Camera,
    gradient: "from-amber-600/40 to-orange-600/40",
    border: "border-amber-500/30",
  },
  {
    title: "SAÚDE & FITNESS",
    subtitle: "Scanner de Macros & Calorias | Contador de Repetições | Performance Stats",
    icon: Dumbbell,
    gradient: "from-red-600/40 to-rose-600/40",
    border: "border-red-500/30",
  },
  {
    title: "MOTO & AUTO",
    subtitle: "Telemetria de Game | Motion Blur | Análise de Aceleração",
    icon: Car,
    gradient: "from-violet-600/40 to-purple-600/40",
    border: "border-violet-500/30",
  },
];

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white relative overflow-hidden">
      {/* Ambient neon glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-purple-600/8 blur-[150px] rounded-full" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-cyan-500/8 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-700/6 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 pb-24">
        {/* Header - Title */}
        <div className="text-center py-4 px-4">
          <h1 className="text-sm md:text-base font-bold tracking-widest uppercase">
            <span className="text-purple-400">ViralCut AI:</span>{" "}
            <span className="text-white/90">Nova Geração | O Sistema Total de Autoridade</span>
          </h1>
        </div>

        {/* Before/After Section */}
        <div className="grid grid-cols-3 gap-3 px-4 mb-6">
          {/* ANTES */}
          <div className="relative rounded-xl overflow-hidden border border-red-500/20 bg-gradient-to-b from-red-900/20 to-[#0a0a14] p-3">
            <div className="absolute top-2 left-2 z-10">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider italic">Antes</span>
              <p className="text-[10px] text-red-300/80 font-semibold">FRUSTRAÇÃO</p>
            </div>
            <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/80 mt-8 flex items-center justify-center border border-white/5">
              <div className="text-center">
                <div className="text-3xl mb-1 grayscale opacity-60">😤</div>
                <p className="text-[9px] text-gray-400">Edição manual</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2 font-medium">COMPLEXO E DEMORADO</p>
          </div>

          {/* CENTER - Monitor with Brain */}
          <div className="relative rounded-xl overflow-hidden border border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-[#0a0a14] p-3">
            <p className="text-[10px] text-purple-300/80 text-center mb-2">
              Olá, <span className="text-cyan-400 font-semibold">Cleysson</span>, qual o pilar de autoridade de hoje?
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-2 bg-white/5 border border-purple-500/20 rounded-full px-3 py-1.5 mb-3">
              <span className="text-[9px] text-gray-400 flex-1">Converse com o Cérebro IA ou pesquise módulos...</span>
              <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>

            <p className="text-[8px] text-purple-400 font-bold text-center uppercase tracking-wider mb-2">
              ViralCut AI: Cérebro Integrado
            </p>

            {/* Plasma Brain Sphere */}
            <div className="relative flex items-center justify-center my-3">
              <div className="brain-sphere w-20 h-20 rounded-full relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/40 via-purple-500/60 to-pink-500/40 animate-spin-slow" />
                <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-blue-600/30 via-purple-600/50 to-cyan-400/30 animate-pulse" />
                <div className="absolute inset-2 rounded-full bg-[#0a0a14]/60 backdrop-blur-sm" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(139,92,246,0.4),0_0_80px_rgba(6,182,212,0.2)]" />
                <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              </div>

              {/* Side action buttons */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                <button className="flex items-center gap-1 bg-purple-500/10 border border-purple-500/20 rounded-md px-1.5 py-1 hover:bg-purple-500/20 transition-all group">
                  <Upload className="w-2.5 h-2.5 text-purple-400" />
                  <span className="text-[7px] text-purple-300">Carregar</span>
                </button>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                <button className="flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/20 rounded-md px-1.5 py-1 hover:bg-cyan-500/20 transition-all group">
                  <FileText className="w-2.5 h-2.5 text-cyan-400" />
                  <span className="text-[7px] text-cyan-300">Roteiro</span>
                </button>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/editor"
              className="block mt-2 w-full text-center bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-[10px] font-bold py-2 rounded-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              Criar Novo Vídeo de Autoridade
            </Link>
          </div>

          {/* DEPOIS */}
          <div className="relative rounded-xl overflow-hidden border border-green-500/20 bg-gradient-to-b from-green-900/15 to-[#0a0a14] p-3">
            <div className="absolute top-2 right-2 z-10 text-right">
              <span className="text-xs font-bold text-green-400 uppercase tracking-wider italic">Depois</span>
              <p className="text-[10px] text-green-300/80 font-semibold">SUCESSO</p>
            </div>
            <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-800/30 to-green-900/30 mt-8 flex items-center justify-center border border-green-500/10">
              <div className="text-center">
                <div className="text-3xl mb-1">🎉</div>
                <p className="text-[9px] text-green-300/80">Viral pronto!</p>
              </div>
            </div>
            <p className="text-[10px] text-green-300/80 text-center mt-2 font-medium">RÁPIDO E VIRAL</p>
          </div>
        </div>

        {/* Nicho Estratégico */}
        <div className="px-4 mb-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-purple-400">Nicho Estratégico</span>
          </h2>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/30 transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 text-purple-300" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-6 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {nicheCards.map((card) => (
                <div
                  key={card.title}
                  className={`niche-card flex-shrink-0 w-48 snap-start rounded-xl border ${card.border} bg-gradient-to-b ${card.gradient} to-[#0a0a14]/90 p-4 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]`}
                >
                  <div className="aspect-video rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                    <card.icon className="w-8 h-8 text-purple-300/80" />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-[9px] text-gray-400 leading-relaxed">{card.subtitle}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/30 transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4 text-purple-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a14]/95 backdrop-blur-xl border-t border-purple-500/20">
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
              className={`flex flex-col items-center gap-1 transition-all ${
                activeNav === item.id
                  ? "text-purple-400 scale-110"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <item.icon className={`w-5 h-5 ${activeNav === item.id ? "drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]" : ""}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
              {activeNav === item.id && (
                <div className="w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
