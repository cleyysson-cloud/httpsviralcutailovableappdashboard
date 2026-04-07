import { useState, useRef } from "react";
import { Home, FolderOpen, TrendingUp, User, Zap, Upload, FileText, Search, ChevronRight, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ProjetosTab from "@/components/tabs/ProjetosTab";
import TendenciasTab from "@/components/tabs/TendenciasTab";
import PerfilTab from "@/components/tabs/PerfilTab";

// Images
import antesFrustration from "@/assets/antes-frustration.jpg";
import depoisSucesso from "@/assets/depois-sucesso.jpg";
import depoisFamilia from "@/assets/depois-familia.jpg";
import cerebroIA from "@/assets/cerebro-ia.png";
import nicheBase from "@/assets/niche-base.jpg";
import nichePodcast from "@/assets/niche-podcast.jpg";
import nicheFinancas from "@/assets/niche-financas.jpg";
import nicheGamer from "@/assets/niche-gamer.jpg";
import nicheLifestyle from "@/assets/niche-lifestyle.jpg";
import nicheFitness from "@/assets/niche-fitness.jpg";
import nicheMoto from "@/assets/niche-moto.jpg";
import nicheGastro from "@/assets/niche-gastro.jpg";
import nicheEducacao from "@/assets/niche-educacao.jpg";
import nicheMusica from "@/assets/niche-musica.jpg";

const nicheCards = [
  { title: "A BASE", subtitle: "Cortes Rápidos & Jump Cuts | Legendas Dinâmicas | Beat Sync", image: nicheBase, route: "/editor" },
  { title: "PODCAST & CORTES", subtitle: "Multicam Inteligente | Destaque de Voz | Sincronização", image: nichePodcast, route: "/podcast" },
  { title: "FINANÇAS & FIIs", subtitle: "Tickers em Tempo Real | Gráficos Neon | Ativos de Valor", image: nicheFinancas, route: "/financas" },
  { title: "GAMER & TECH", subtitle: "Gameplay Integrado | Realce de FPS & RGB | Beat Sync", image: nicheGamer, route: "/editor" },
  { title: "LIFESTYLE & VLOG", subtitle: "Direção Semântica por Prompt | Zoom Suave | Estética Clean", image: nicheLifestyle, route: "/editor" },
  { title: "SAÚDE & FITNESS", subtitle: "Scanner de Macros & Calorias | Contador de Repetições | Performance Stats", image: nicheFitness, route: "/fitness" },
  { title: "MOTO & AUTO", subtitle: "Telemetria de Game | Motion Blur | Análise de Aceleração", image: nicheMoto, route: "/moto" },
  { title: "GASTRONOMIA", subtitle: "Close-ups Automáticos | Cor Vibrante | Receitas Dinâmicas", image: nicheGastro, route: "/gastronomia" },
  { title: "CAPAS DE VÍDEOS", subtitle: "Thumbnails com IA | Design Automático | CTR Otimizado", image: nicheEducacao, route: "/editor" },
  { title: "MODA & BELEZA", subtitle: "Looks Dinâmicos | Color Grading | Transições Suaves", image: nicheMusica, route: "/moda-beleza" },
];

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Store file reference and navigate to editor
      const url = URL.createObjectURL(file);
      sessionStorage.setItem("pendingVideoUrl", url);
      sessionStorage.setItem("pendingVideoName", file.name);
      setShowUploadModal(false);
      navigate("/editor");
    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden" style={{ background: "#050505" }}>
      {/* Background image layer */}
      <div className="fixed inset-0 z-0">
        <img src="/images/bg-dashboard.jpg" alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.3) 50%, rgba(5,5,5,0.7) 100%)" }} />
      </div>
      {/* Ambient neon glow on top of bg */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full opacity-40" style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.35) 0%, rgba(168,85,247,0.15) 30%, transparent 65%)" }} />
        <div className="absolute top-0 left-[-100px] w-[500px] h-[600px] rounded-full opacity-30" style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(236,72,153,0.3) 0%, transparent 60%)" }} />
        <div className="absolute top-0 right-[-100px] w-[500px] h-[600px] rounded-full opacity-30" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(236,72,153,0.25) 0%, transparent 60%)" }} />
      </div>

      <div className="relative z-10 pb-28">
        {/* ===== HEADER TITLE ===== */}
        <div className="text-center pt-5 pb-3 px-4">
          <h1 className="text-sm md:text-xl font-black tracking-[0.1em] uppercase font-heading">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              VIRALCUT AI: NOVA GERAÇÃO
            </span>
            <span className="text-white/40 mx-2">|</span>
            <span className="text-white/60">O SISTEMA TOTAL DE AUTORIDADE</span>
          </h1>
        </div>

        {activeNav === "home" && (
          <>
            {/* ===== ANTES / DEPOIS SECTION ===== */}
            <div className="px-3 mb-4">
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {/* ANTES - FRUSTRAÇÃO */}
                <div className="relative rounded-2xl overflow-hidden group" style={{ border: "none", background: "transparent" }}>
                  <img src={antesFrustration} alt="Antes - Frustração" className="w-full h-32 md:h-44 object-cover brightness-75 saturate-50" style={{ maskImage: "linear-gradient(to bottom, black 40%, transparent 100%), linear-gradient(to right, black 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%), linear-gradient(to right, black 50%, transparent 100%)", maskComposite: "intersect", WebkitMaskComposite: "destination-in" as any }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="text-xs md:text-base font-extrabold tracking-widest uppercase text-red-400 block" style={{ textShadow: "0 0 12px rgba(239,68,68,0.7), 0 2px 4px rgba(0,0,0,0.8)" }}>ANTES</span>
                    <span className="text-[10px] md:text-xs font-extrabold text-red-300/90 uppercase tracking-wider" style={{ textShadow: "0 0 8px rgba(239,68,68,0.5), 0 2px 4px rgba(0,0,0,0.8)" }}>Frustração</span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[9px] md:text-[11px] font-bold text-white/80 uppercase tracking-wide" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.9)" }}>Complexo e Demorado</p>
                  </div>
                </div>

                {/* DEPOIS - SUCESSO (center) */}
                <div className="relative rounded-2xl overflow-hidden group" style={{ border: "none", background: "transparent" }}>
                  <img src={depoisSucesso} alt="Depois - Sucesso" className="w-full h-32 md:h-44 object-cover brightness-110 saturate-110" style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="text-xs md:text-base font-extrabold tracking-widest uppercase text-emerald-400 block" style={{ textShadow: "0 0 12px rgba(16,185,129,0.7), 0 2px 4px rgba(0,0,0,0.8)" }}>DEPOIS</span>
                    <span className="text-[10px] md:text-xs font-extrabold text-emerald-300/90 uppercase tracking-wider" style={{ textShadow: "0 0 8px rgba(16,185,129,0.5), 0 2px 4px rgba(0,0,0,0.8)" }}>Sucesso</span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[9px] md:text-[11px] font-bold text-white/90 uppercase tracking-wide" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.9)" }}>Rápido e Viral</p>
                  </div>
                </div>

                {/* DEPOIS - SUCESSO (family) */}
                <div className="relative rounded-2xl overflow-hidden group" style={{ border: "none", background: "transparent" }}>
                  <img src={depoisFamilia} alt="Depois - Família" className="w-full h-32 md:h-44 object-cover brightness-110" style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 100%), linear-gradient(to left, black 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%), linear-gradient(to left, black 50%, transparent 100%)", maskComposite: "intersect", WebkitMaskComposite: "destination-in" as any }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="text-xs md:text-base font-extrabold tracking-widest uppercase text-purple-400 block" style={{ textShadow: "0 0 12px rgba(168,85,247,0.7), 0 2px 4px rgba(0,0,0,0.8)" }}>DEPOIS</span>
                    <span className="text-[10px] md:text-xs font-extrabold text-purple-300/90 uppercase tracking-wider" style={{ textShadow: "0 0 8px rgba(168,85,247,0.5), 0 2px 4px rgba(0,0,0,0.8)" }}>Sucesso</span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[9px] md:text-[11px] font-bold text-white/90 uppercase tracking-wide" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.9)" }}>Autoridade Total</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== GREETING + SEARCH ===== */}
            <div className="px-4 mb-4 text-center">
              <p className="text-xs md:text-sm text-white/50 font-medium mb-3">
                Olá, <span className="text-cyan-400 font-bold">Cleysson</span>, qual o pilar de autoridade de hoje?
              </p>
              <div className="max-w-md mx-auto relative">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(139,92,246,0.2)", backdropFilter: "blur(12px)" }}>
                  <span className="text-purple-400/60 text-xs">|</span>
                  <span className="text-[10px] text-white/30 flex-1">Converse com o Cérebro IA ou pesquise módulos...</span>
                  <Search className="w-4 h-4 text-white/20" />
                </div>
              </div>
            </div>

            {/* ===== CÉREBRO IA CENTRAL ===== */}
            <div className="flex flex-col items-center mb-5 px-4">
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 mb-3 font-heading">VIRALCUT AI: CÉREBRO INTEGRADO</p>

              <div className="relative w-36 h-36 md:w-48 md:h-48 mb-4">
                <div className="absolute inset-[-20px] rounded-full brain-glow-outer" />
                <div className="absolute inset-[-10px] rounded-full brain-glow-mid" />
                <img src={cerebroIA} alt="Cérebro IA" className="absolute inset-0 w-full h-full object-contain brain-icon-pulse" style={{ filter: "drop-shadow(0 0 30px rgba(139,92,246,0.5)) drop-shadow(0 0 60px rgba(6,182,212,0.3))" }} />
                <div className="absolute inset-[-8px] rounded-full border border-purple-500/15 animate-spin-slow" />
                <div className="absolute inset-[-16px] rounded-full border border-cyan-500/10 animate-spin-reverse" />
              </div>

              <div className="flex gap-2 w-full max-w-sm mb-3">
                <button onClick={() => setShowUploadModal(true)} className="flex-1 flex items-center justify-center gap-1.5 text-[9px] font-bold py-2.5 rounded-xl tracking-wide text-white/50 hover:text-white/90 transition-all" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.15)", backdropFilter: "blur(8px)" }}>
                  <Upload className="w-3.5 h-3.5" />
                  Carregar Vídeo Completo (IA Analysis)
                </button>
                <button onClick={() => navigate("/editor")} className="flex-1 flex items-center justify-center gap-1.5 text-[9px] font-bold py-2.5 rounded-xl tracking-wide text-white/50 hover:text-white/90 transition-all" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.15)", backdropFilter: "blur(8px)" }}>
                  <FileText className="w-3.5 h-3.5" />
                  Gerar por Roteiro Master
                </button>
              </div>

              <button
                onClick={() => setShowUploadModal(true)}
                className="w-full max-w-sm text-center text-xs font-black uppercase tracking-[0.12em] py-3.5 rounded-2xl transition-all duration-300 block"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,240,240,0.9))",
                  color: "#0a0a0a",
                  boxShadow: "0 0 25px rgba(139,92,246,0.3), 0 0 50px rgba(6,182,212,0.15), 0 4px 15px rgba(0,0,0,0.3)"
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  Criar Novo Vídeo de Autoridade
                </span>
              </button>
            </div>

            {/* ===== NICHO ESTRATÉGICO ===== */}
            <div>
              <div className="flex items-center justify-between mb-3 px-4">
                <h2 className="text-xs md:text-sm font-black tracking-[0.12em] uppercase font-heading text-white/80">
                  Nicho Estratégico
                </h2>
                <span className="text-[8px] text-white/30 uppercase tracking-wider flex items-center gap-1">
                  Arraste para ver mais <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              <div
                className="flex gap-3 overflow-x-auto pb-4 pl-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
              >
                {nicheCards.map((card) => (
                  <div
                    key={card.title}
                    onClick={() => navigate(card.route)}
                    className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group snap-start"
                    style={{
                      minWidth: "160px",
                      width: "160px",
                      height: "200px",
                      flexShrink: 0,
                      border: "1px solid rgba(139,92,246,0.2)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 15px rgba(139,92,246,0.08)"
                    }}
                  >
                    <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all" />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: "inset 0 0 20px rgba(139,92,246,0.3), 0 0 25px rgba(139,92,246,0.2)" }} />
                    <div className="relative z-10 h-full flex flex-col justify-end p-3">
                      <h3 className="text-[10px] font-black text-white uppercase tracking-wider mb-1 font-heading" style={{ textShadow: "0 0 10px rgba(139,92,246,0.5)" }}>
                        {card.title}
                      </h3>
                      <p className="text-[7px] text-white/50 leading-relaxed font-medium">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
                <div style={{ minWidth: "16px", flexShrink: 0 }} />
              </div>
            </div>
          </>
        )}

        {activeNav === "projetos" && <ProjetosTab />}
        {activeNav === "tendencias" && <TendenciasTab />}
        {activeNav === "perfil" && <PerfilTab />}
      </div>

      {/* ===== BOTTOM NAV ===== */}
      <nav className="fixed bottom-0 left-0 right-0 z-50" style={{ background: "rgba(5,5,5,0.9)", borderTop: "1px solid rgba(139,92,246,0.12)", backdropFilter: "blur(24px)" }}>
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

      {/* ===== UPLOAD MODAL ===== */}
      {showUploadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}>
          <div className="relative w-[90%] max-w-lg rounded-2xl p-6" style={{ background: "rgba(15,15,15,0.95)", border: "1px solid rgba(139,92,246,0.3)", boxShadow: "0 0 60px rgba(139,92,246,0.15)" }}>
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-sm font-black uppercase tracking-[0.12em] text-white/90 mb-1 font-heading">Criar Novo Vídeo</h2>
            <p className="text-[10px] text-white/40 mb-5">Selecione ou arraste seu vídeo para começar a edição com IA</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full aspect-video rounded-xl border-2 border-dashed border-purple-500/30 hover:border-purple-400/60 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer"
              style={{ background: "rgba(139,92,246,0.05)" }}
            >
              <Upload className="h-10 w-10 text-purple-400/60" />
              <div className="text-center">
                <p className="text-xs font-bold text-white/70">Arraste ou clique para enviar</p>
                <p className="text-[10px] text-white/30 mt-1">MP4, MOV, AVI — até 500MB</p>
              </div>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
