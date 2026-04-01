import { Home, FolderOpen, TrendingUp, User } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { id: "home", name: "Home", icon: Home },
  { id: "projetos", name: "Projetos", icon: FolderOpen },
  { id: "tendencias", name: "Tendências", icon: TrendingUp },
  { id: "perfil", name: "Perfil", icon: User },
];

interface BottomNavProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border backdrop-blur-xl" style={{ background: "rgba(10,8,20,0.9)" }}>
      <div className="flex items-center justify-around py-2 px-4 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              whileTap={{ scale: 0.9 }}
              className={`relative flex flex-col items-center gap-1 px-4 py-1.5 rounded-lg transition-all ${
                isActive ? "text-neon-cyan" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className={`w-5 h-5 ${isActive ? "drop-shadow-[0_0_8px_hsl(185,90%,50%)]" : ""}`} />
              <span className="text-[8px] font-heading font-bold tracking-[0.15em] uppercase">{tab.name}</span>
              {isActive && (
                <motion.div
                  className="absolute -bottom-0 h-0.5 w-8 rounded-full bg-neon-cyan"
                  layoutId="bottomNavActive"
                  style={{ boxShadow: "0 0 10px hsl(185, 90%, 50%)" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
