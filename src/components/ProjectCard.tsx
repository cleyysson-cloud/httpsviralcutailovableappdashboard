import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Download, Clock, Plus, X, Check, Eye, Edit3 } from "lucide-react";
import { toast } from "sonner";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  status: "ready" | "editing" | "draft";
  viralScore?: number;
  processingLabel?: string;
  featured?: boolean;
  nicheLabel?: string;
  onStatusChange?: (id: string, status: "ready" | "editing" | "draft") => void;
  onSelect?: (id: string) => void;
  selected?: boolean;
}

const statusConfig = {
  ready: { label: "PRONTO PARA POSTAR", color: "bg-neon-green", textColor: "text-neon-green" },
  editing: { label: "EM EDIÇÃO", color: "bg-neon-yellow", textColor: "text-neon-yellow" },
  draft: { label: "RASCUNHO", color: "bg-neon-blue", textColor: "text-neon-blue" },
};

const ProjectCard = ({
  id, title, subtitle, thumbnail, status,
  viralScore, processingLabel, featured, nicheLabel,
  onStatusChange, onSelect, selected,
}: ProjectCardProps) => {
  const st = statusConfig[status];
  const [showExport, setShowExport] = useState(false);
  const [exporting, setExporting] = useState<string | null>(null);

  const handleExport = (format: string) => {
    setExporting(format);
    toast.loading(`Exportando ${subtitle} em ${format}...`, { id: `export-${id}` });
    setTimeout(() => {
      setExporting(null);
      setShowExport(false);
      toast.success(`${subtitle} exportado com sucesso em ${format}!`, { id: `export-${id}` });
    }, 2000);
  };

  const handleAddBruto = () => {
    toast.info("Selecione o arquivo bruto para upload...");
    if (onStatusChange) {
      setTimeout(() => {
        onStatusChange(id, "editing");
        toast.success("Arquivo bruto adicionado! Status atualizado para EM EDIÇÃO.");
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      onClick={() => onSelect?.(id)}
      className={`rounded-xl overflow-hidden border gradient-card flex flex-col cursor-pointer transition-all ${
        selected
          ? "border-primary/60 glow-purple ring-1 ring-primary/30"
          : "border-border hover:border-primary/30"
      } ${featured ? "min-w-[220px]" : "min-w-[200px]"}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Actions overlay */}
        <div className="absolute top-2 right-2 flex gap-1.5">
          <button
            onClick={(e) => { e.stopPropagation(); onSelect?.(id); }}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
          >
            <Eye className="w-4 h-4 text-neon-cyan" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); toast.info(`Editando "${subtitle}"...`); }}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
          >
            <Edit3 className="w-4 h-4 text-neon-purple" />
          </button>
        </div>

        {/* Viral score */}
        {viralScore && (
          <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 border border-neon-purple/30">
            <Flame className="w-3 h-3 text-neon-yellow" />
            <span className="text-[10px] font-display font-bold text-neon-yellow">{viralScore}</span>
          </div>
        )}

        {/* Niche label */}
        {nicheLabel && (
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30">
            <span className="text-[8px] font-display font-bold text-neon-purple tracking-wider">{nicheLabel}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col gap-1.5">
        <h3 className="text-xs font-heading font-bold text-foreground leading-tight">{subtitle}</h3>
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${st.color}`} />
          <span className={`text-[9px] font-display font-bold ${st.textColor} tracking-wider`}>{st.label}</span>
        </div>

        {/* Viral bar */}
        {viralScore && (
          <div className="w-full h-1 rounded-full bg-muted overflow-hidden mt-1">
            <div className="h-full rounded-full gradient-neon" style={{ width: `${viralScore}%` }} />
          </div>
        )}

        {/* Processing label */}
        {processingLabel && (
          <div className="flex items-center gap-1.5 mt-1">
            <Clock className="w-3 h-3 animate-spin text-neon-cyan" style={{ animationDuration: "3s" }} />
            <span className="text-[9px] text-neon-cyan font-heading font-semibold">{processingLabel}</span>
          </div>
        )}

        {/* Draft add bruto */}
        {status === "draft" && (
          <button
            onClick={(e) => { e.stopPropagation(); handleAddBruto(); }}
            className="flex items-center gap-1 text-[10px] text-neon-cyan font-heading hover:underline mt-auto transition-colors hover:text-neon-purple"
          >
            <Plus className="w-3 h-3" />
            Adicionar Bruto
          </button>
        )}

        {/* Export for ready */}
        {status === "ready" && (
          <div className="mt-auto pt-1.5">
            <AnimatePresence>
              {showExport ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-col gap-1.5 p-2 rounded-lg bg-muted border border-border"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-display font-bold text-muted-foreground tracking-wider">FORMATO:</span>
                    <button onClick={() => setShowExport(false)}>
                      <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {["9:16", "16:9", "1:1", "4:5"].map((fmt) => (
                      <button
                        key={fmt}
                        onClick={() => handleExport(fmt)}
                        disabled={exporting !== null}
                        className={`px-2 py-1 rounded text-[9px] font-display font-bold border transition-all ${
                          exporting === fmt
                            ? "gradient-neon text-primary-foreground border-transparent"
                            : "border-border text-foreground hover:border-primary/40 hover:bg-primary/10"
                        }`}
                      >
                        {exporting === fmt ? <Check className="w-3 h-3 animate-pulse" /> : fmt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowExport(true); }}
                    className="flex items-center gap-1 px-2 py-1 rounded text-[9px] font-display font-bold gradient-neon text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-3 h-3" />
                    QUICK EXPORT
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleExport("9:16"); }}
                    className="text-[9px] text-muted-foreground font-heading border border-border rounded px-1.5 py-0.5 hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    9:16
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleExport("16:9"); }}
                    className="text-[9px] text-muted-foreground font-heading border border-border rounded px-1.5 py-0.5 hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    16:9
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
