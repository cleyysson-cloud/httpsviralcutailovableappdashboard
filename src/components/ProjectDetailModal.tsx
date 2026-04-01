import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Edit3, Trash2, Share2, BarChart3 } from "lucide-react";
import { toast } from "sonner";

interface ProjectDetailModalProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    status: "ready" | "editing" | "draft";
    viralScore?: number;
    nicheLabel?: string;
  } | null;
  onClose: () => void;
  onStatusChange: (id: string, status: "ready" | "editing" | "draft") => void;
}

const statusOptions: Array<{ value: "ready" | "editing" | "draft"; label: string; color: string }> = [
  { value: "ready", label: "Pronto para Postar", color: "bg-neon-green" },
  { value: "editing", label: "Em Edição", color: "bg-neon-yellow" },
  { value: "draft", label: "Rascunho", color: "bg-neon-blue" },
];

const ProjectDetailModal = ({ project, onClose, onStatusChange }: ProjectDetailModalProps) => {
  if (!project) return null;

  const handleAction = (action: string) => {
    toast.success(`${action} - "${project.subtitle}"`);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg rounded-2xl border border-border gradient-card overflow-hidden"
        >
          {/* Header image */}
          <div className="relative h-48">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            <button onClick={onClose} className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
              <X className="w-4 h-4 text-foreground" />
            </button>
            {project.viralScore && (
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 border border-neon-yellow/30">
                <span className="text-xs font-display font-bold text-neon-yellow">🔥 {project.viralScore}%</span>
              </div>
            )}
          </div>

          <div className="p-4 space-y-4">
            {/* Title */}
            {project.nicheLabel && (
              <span className="text-[9px] font-display font-bold text-neon-purple tracking-wider">{project.nicheLabel}</span>
            )}
            <h2 className="text-lg font-heading font-bold text-foreground">{project.subtitle}</h2>

            {/* Status options */}
            <div>
              <p className="text-[9px] font-display font-bold text-muted-foreground tracking-wider mb-2">Status do Projeto</p>
              <div className="flex gap-2">
                {statusOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      onStatusChange(project.id, opt.value);
                      toast.success(`Status alterado para "${opt.label}"`);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-heading font-semibold border transition-all ${
                      project.status === opt.value
                        ? "border-primary/40 bg-primary/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-primary/20 hover:text-foreground"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${opt.color}`} />
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: Download, label: "Exportar", action: "Exportando" },
                { icon: Edit3, label: "Editar", action: "Abrindo editor" },
                { icon: Share2, label: "Compartilhar", action: "Link copiado" },
                { icon: BarChart3, label: "Analytics", action: "Abrindo analytics" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => handleAction(btn.action)}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <btn.icon className="w-4 h-4 text-neon-cyan" />
                  <span className="text-[8px] font-heading font-semibold text-muted-foreground">{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
