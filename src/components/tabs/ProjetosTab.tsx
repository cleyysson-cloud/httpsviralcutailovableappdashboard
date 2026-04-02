import { FolderOpen, Play, Clock, Star, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "Corte Podcast #47", status: "Editando", progress: 65, date: "Hoje", starred: true },
  { id: 2, title: "Reel Finanças - FIIs", status: "Pronto", progress: 100, date: "Ontem", starred: false },
  { id: 3, title: "Short Fitness Treino A", status: "Renderizando", progress: 80, date: "22 Mar", starred: true },
  { id: 4, title: "Gameplay Valorant Highlights", status: "Rascunho", progress: 20, date: "20 Mar", starred: false },
  { id: 5, title: "Vlog Lifestyle - Rotina", status: "Editando", progress: 45, date: "18 Mar", starred: false },
];

const statusColor: Record<string, string> = {
  Editando: "text-cyan-400",
  Pronto: "text-emerald-400",
  Renderizando: "text-amber-400",
  Rascunho: "text-white/40",
};

const ProjetosTab = () => (
  <div className="px-4">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-black tracking-[0.12em] uppercase text-white/80">
        Meus Projetos
      </h2>
      <Link
        to="/editor"
        className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
        style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)", color: "rgba(168,130,255,0.9)" }}
      >
        <Plus className="w-3 h-3" /> Novo
      </Link>
    </div>

    <div className="flex flex-col gap-3">
      {projects.map((p) => (
        <Link
          to="/editor"
          key={p.id}
          className="relative rounded-2xl p-3.5 transition-all duration-300 hover:scale-[1.02] group"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(139,92,246,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.15)" }}
            >
              <Play className="w-5 h-5 text-purple-400/70" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xs font-extrabold text-white/90 truncate">{p.title}</h3>
                {p.starred && <Star className="w-3 h-3 text-amber-400 fill-amber-400 flex-shrink-0" />}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[9px] font-bold uppercase tracking-wider ${statusColor[p.status]}`}>{p.status}</span>
                <span className="text-[8px] text-white/20">•</span>
                <span className="text-[9px] text-white/30 flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> {p.date}
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${p.progress}%`,
                    background: p.progress === 100
                      ? "linear-gradient(90deg, rgba(16,185,129,0.8), rgba(52,211,153,0.6))"
                      : "linear-gradient(90deg, rgba(139,92,246,0.8), rgba(6,182,212,0.6))",
                  }}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-6 text-center">
      <p className="text-[9px] text-white/20 uppercase tracking-wider">
        {projects.length} projetos • {projects.filter(p => p.progress === 100).length} concluídos
      </p>
    </div>
  </div>
);

export default ProjetosTab;
