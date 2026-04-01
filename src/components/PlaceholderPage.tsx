import { motion } from "framer-motion";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="flex-1 flex items-center justify-center gradient-card">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Construction className="w-12 h-12 text-neon-purple mx-auto mb-4" />
        <h2 className="text-lg font-display font-bold text-foreground mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground font-heading">{description}</p>
      </motion.div>
    </div>
  );
};

export default PlaceholderPage;
