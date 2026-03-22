import { useState } from "react";
import { Home, FolderOpen, TrendingUp, User, Zap, Scissors, Mic, BarChart3, Gamepad2, Camera, Dumbbell, Car, Utensils, BookOpen, Music } from "lucide-react";
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
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 pb-24">
        {/* Header */}
        <div className="text-center pt-8 pb-4 px-4">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Zap className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
            <h1 className="text-xl font-extrabold tracking-wide">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">ViralCut AI</span>
            </h1>
          </div>
          <p className="text-xs text-white/40 font-medium tracking-wider uppercase">Escolha seu nicho e comece a criar</p>
        </div>

        {/* CTA */}
        <div className="px-4 mb-6">
          <Link
            to="/editor"
            className="block w-full text-center text-sm font-bold uppercase tracking-wider py-3.5 rounded-2xl transition-all duration-300 cta-elite"
          >
            <span className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              Criar Novo Vídeo
            </span>
          </Link>
        </div>

        {/* Nichos - Grid */}
        <div className="px-4">
          <h2 className="text-sm font-extrabold mb-4 tracking-wide">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">10 Nichos Estratégicos</span>
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {nicheCards.map((card) => (
              <Link
                to="/editor"
                key={card.title}
                className="niche-card-elite rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.03] group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${card.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[11px] font-extrabold text-white/90 mb-1 tracking-wide">{card.title}</h3>
                <p className="text-[8px] text-white/35 leading-relaxed font-medium">{card.subtitle}</p>
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
                activeNav === item.id ? "text-purple-400 scale-110" : "text-white/25 hover:text-white/50"
              }`}
            >
              <item.icon className={`w-5 h-5 transition-all ${activeNav === item.id ? "drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]" : ""}`} />
              <span className="text-[9px] font-bold tracking-wider uppercase">{item.label}</span>
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
