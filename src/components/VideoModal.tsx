import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const VideoModal = ({ isOpen, onClose, title }: VideoModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass-card rounded-2xl p-6 max-w-md w-full mx-4 neon-border"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-display font-bold text-foreground">{title}</h3>
              <button onClick={onClose} className="p-1 rounded hover:bg-muted transition-colors">
                <X size={18} className="text-muted-foreground" />
              </button>
            </div>

            <div className="aspect-video rounded-lg bg-muted/50 border border-border flex items-center justify-center">
              <div className="text-center">
                <Play size={40} className="text-neon-purple mx-auto mb-2" />
                <p className="text-[10px] text-muted-foreground font-heading">Vídeo de Referência</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
