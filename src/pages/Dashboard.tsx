import { useState } from "react";
import { Home, FolderOpen, TrendingUp, User, Zap, Scissors, Mic, BarChart3, Gamepad2, Camera, Dumbbell, Car, Utensils, BookOpen, Music, Brain, Upload, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const nicheCards = [
  { title: "A BASE", subtitle: "Cortes Rápidos & Jump Cuts | Legendas Dinâmicas | Beat Sync", icon: Scissors, gradient: "from-blue-500 to-indigo-600" },
  { title: "PODCAST & CORTES", subtitle: "Multicam Inteligente | Destaque de Voz | Sincronização", icon: Mic, gradient: "from-pink-500 to-rose-600" },
  { title: "FINANÇAS & FIIs", subtitle: "Tickers em Tempo Real | Gráficos Neon | Ativos de Valor", icon: BarChart3, gradient: "from-emerald-400 to-green-600" },
  { title: "GAMER & TECH", subtitle: "Gameplay Integrado | Realce de FPS & RGB | Beat Sync", icon: Gamepad2, gradient: "from-cyan-400 to-blue-600" },
  { title: "LIFESTYLE & VLOG", subtitle: "Direção Semântica por Prompt | Zoom Suave | Estética Clean", icon: Camera, gradient: "from-amber-400 to-orange-500" },
  { title: "SAÚDE & FITNESS", subtitle: "Scanner de Macros & Calorias | Contador de Repetições | Stats", icon: Dumbbell, gradient: "from-red-500 to-rose-600" },
  { title: "MOTO & AUTO", subtitle: "Telemetria de Game | Motion Blur | Análise de Aceleração", icon: Car, gradient: "from-violet-500 to-purple-600" },
  { title: "GASTRONOMIA", subtitle: "Close-ups Automáticos | Cor Vibrante | Receitas Dinâmicas", icon: Utensils, gradient: "from-yellow-400 to-amber-600" },
  { title: "EDUCAÇÃO", subtitle: "Quadro Inteligente | Slides Animados | Resumos com IA", icon: BookOpen, gradient: "from-teal-400 to-cyan-600" },
  { title: "MÚSICA & DJ", subtitle: "Waveform Visual | Beat Drop Sync | Transições Rítmicas", icon: Music, gradient: "from-fuchsia-500 to-pink-600" },
];

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="min-h-screen text-white relative" style={{ background: "#050505" }}>
      {/* Ambient glow backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[200px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 pb-24">
        {/* Header */}
        <div className="text-center pt-8 pb-2 px-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-6 h-6 text-cyan-400" style={{ filter: "drop-shadow(0 0 12px rgba(6,182,212,0.7))" }} />
            <h1 className="text-xl font-extrabold tracking-wide font-heading">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">ViralCut AI</span>
            </h1>
          </div>
          <p className="text-[10px] text-white/30 font-medium tracking-[0.2em] uppercase">Nova Geração de Edição Viral</p>
        </div>

        {/* Before / After Section */}
        <div className="px-4 mt-4 mb-5">
          <div className="grid grid-cols-2 gap-3">
            {/* ANTES */}
            <div className="rounded-2xl p-3 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(239,68,68,0.15)", backdropFilter: "blur(12px)" }}>
              <div className="absolute inset-0 opacity-5" style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.1), transparent)" }} />
              <div className="relative">
                <span className="text-[8px] font-bold tracking-[0.15em] uppercase text-red-400/70 mb-2 block">❌ Antes</span>
                <div className="w-full h-16 rounded-lg mb-2 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}>
                  <span className="text-[18px]">😩</span>
                </div>
                <p className="text-[9px] text-white/30 font-semibold leading-tight">Complexo e Demorado</p>
              </div>
            </div>

            {/* DEPOIS */}
            <div className="rounded-2xl p-3 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(16,185,129,0.2)", backdropFilter: "blur(12px)" }}>
              <div className="absolute inset-0 opacity-5" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.1), transparent)" }} />
              <div className="relative">
                <span className="text-[8px] font-bold tracking-[0.15em] uppercase text-emerald-400/70 mb-2 block">✅ Depois</span>
                <div className="w-full h-16 rounded-lg mb-2 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0f3460, #533483)" }}>
                  <span className="text-[18px]">🚀</span>
                </div>
                <p className="text-[9px] text-white/30 font-semibold leading-tight">Rápido e Viral</p>
              </div>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <div className="px-4 mb-4 text-center">
          <p className="text-[11px] text-white/40 font-medium">Olá, <span className="text-cyan-400/80">Creator</span>, qual o pilar de autoridade de hoje?</p>
        </div>

        {/* AI Brain Sphere */}
        <div className="flex flex-col items-center mb-5 px-4">
          <div className="relative w-28 h-28 mb-3">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full brain-glow-outer" />
            {/* Mid glow ring */}
            <div className="absolute inset-2 rounded-full brain-glow-mid" />
            {/* Inner sphere */}
            <div className="absolute inset-4 rounded-full" style={{
              background: "radial-gradient(circle at 35% 35%, rgba(139,92,246,0.4), rgba(6,182,212,0.3), rgba(139,92,246,0.15))",
              border: "1px solid rgba(139,92,246,0.3)",
              boxShadow: "0 0 30px rgba(139,92,246,0.2), 0 0 60px rgba(6,182,212,0.1), inset 0 0 20px rgba(139,92,246,0.15)"
            }} />
            {/* Brain icon */}
            <Brain className="absolute top-1/2 left-1/2 w-8 h-8 text-purple-300 brain-icon-pulse" style={{ filter: "drop-shadow(0 0 10px rgba(139,92,246,0.6))" }} />
            {/* Orbit ring */}
            <div className="absolute inset-[-4px] rounded-full border border-purple-500/10 animate-spin-slow" />
            <div className="absolute inset-[-10px] rounded-full border border-cyan-500/5 animate-spin-reverse" />
          </div>
          <h2 className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/50 mb-3 font-heading">Cérebro Integrado</h2>

          {/* Action buttons */}
          <div className="flex gap-2 w-full max-w-xs">
            <Link to="/editor" className="flex-1 flex items-center justify-center gap-1.5 text-[9px] font-bold py-2.5 rounded-xl tracking-wide glass-btn-sm text-white/50 hover:text-white/80 transition-all">
              <Upload className="w-3.5 h-3.5" />
              Carregar Vídeo
            </Link>
            <Link to="/editor" className="flex-1 flex items-center justify-center gap-1.5 text-[9px] font-bold py-2.5 rounded-xl tracking-wide glass-btn-sm text-white/50 hover:text-white/80 transition-all">
              <FileText className="w-3.5 h-3.5" />
              Roteiro Master
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="px-4 mb-6">
          <Link
            to="/editor"
            className="block w-full text-center text-[11px] font-extrabold uppercase tracking-[0.15em] py-3.5 rounded-2xl transition-all duration-300 cta-elite"
          >
            <span className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              Criar Novo Vídeo de Autoridade
            </span>
          </Link>
        </div>

        {/* Nichos - Horizontal Scroll */}
        <div className="px-4">
          <h2 className="text-[10px] font-extrabold mb-3 tracking-[0.15em] uppercase font-heading">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">10 Pilares Estratégicos</span>
          </h2>

          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
            {nicheCards.map((card) => (
              <Link
                to="/editor"
                key={card.title}
                className="niche-card-elite rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.03] group snap-start flex-shrink-0"
                style={{ width: "150px" }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${card.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} style={{ boxShadow: "0 0 15px rgba(139,92,246,0.15)" }}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[10px] font-extrabold text-white/90 mb-1 tracking-wide font-heading">{card.title}</h3>
                <p className="text-[8px] text-white/30 leading-relaxed font-medium">{card.subtitle}</p>
              </Link>
            ))}
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
                activeNav === item.id ? "text-purple-400 scale-110" : "text-white/20 hover:text-white/40"
              }`}
            >
              <item.icon className={`w-5 h-5 transition-all ${activeNav === item.id ? "drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]" : ""}`} />
              <span className="text-[8px] font-bold tracking-[0.15em] uppercase">{item.label}</span>
              {activeNav === item.id && (
                <div className="w-1 h-1 rounded-full bg-purple-400" style={{ boxShadow: "0 0 8px rgba(139,92,246,0.9)" }} />
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
