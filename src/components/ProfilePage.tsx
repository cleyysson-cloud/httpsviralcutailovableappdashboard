import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings, CreditCard, Sliders, FolderOpen, Cloud, MessageCircle,
  User, Pencil, Shield, ChevronRight, Download, Upload
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import cyborgProfile from "@/assets/cyborg-profile.png";
import cyborgAvatar from "@/assets/cyborg-avatar.jpg";

const menuItems = [
  { id: "info", name: "Informações Básicas", icon: User },
  { id: "assinatura", name: "Assinatura Creator", icon: CreditCard },
  { id: "edicao", name: "Preferências de Edição", icon: Sliders },
  { id: "nicho", name: "Nicho Estratégico (10)", icon: FolderOpen },
  { id: "cloud", name: "Ativos & Cloud Sync", icon: Cloud },
  { id: "suporte", name: "Suporte & Comunidade", icon: MessageCircle },
];

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("info");
  const [configs, setConfigs] = useState({
    videoQuality: true,
    legendStyles: true,
    beatSync: false,
    beatSensitivity: [45],
    customProfiles: true,
    syncTemplates: true,
    syncDownloads: false,
  });

  const toggleConfig = (key: keyof typeof configs) => {
    setConfigs((prev) => ({ ...prev, [key]: !prev[key] }));
    toast.success("Configuração atualizada!", { duration: 1200 });
  };

  return (
    <motion.div
      className="flex-1 flex overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Left sidebar menu */}
      <div className="w-56 shrink-0 border-r border-border gradient-card p-3 space-y-1 overflow-y-auto">
        <p className="text-[9px] font-display font-bold text-muted-foreground tracking-wider mb-3">Navegação de Ajustes</p>
        {menuItems.map((item, i) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[11px] font-heading font-semibold transition-all ${
                isActive
                  ? "bg-primary/15 text-neon-purple neon-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.name}
              {isActive && <ChevronRight className="w-3 h-3 ml-auto text-neon-purple" />}
            </motion.button>
          );
        })}
      </div>

      {/* Right content area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 border-b border-border">
          <p className="text-[8px] font-display font-bold text-muted-foreground tracking-wider">Perfil IA | Otimizado</p>
          <h1 className="text-sm font-display font-bold text-neon-purple tracking-wider mt-1">
            VIRALCUT AI: CENTRAL DE CONFIGURAÇÕES DE PERFIL
          </h1>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            className="p-4 space-y-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {/* Info Section */}
            <div className="flex items-start gap-4">
              <div className="relative">
                <img src={cyborgAvatar} alt="Avatar" className="w-16 h-16 rounded-xl object-cover border border-primary/30" />
                <button
                  onClick={() => toast.info("Modo de edição de perfil ativado!")}
                  className="absolute -bottom-1 -right-1 p-1.5 rounded-md bg-muted hover:bg-primary/20 transition-colors border border-border"
                >
                  <Pencil className="w-3 h-3 text-muted-foreground" />
                </button>
              </div>
              <div>
                <h2 className="text-lg font-heading font-bold text-foreground">Cleysson</h2>
                <p className="text-[10px] font-display text-neon-purple tracking-wider">Creator Level 8: VISIONÁRIO</p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[8px] font-display font-bold gradient-neon text-primary-foreground tracking-wider">
                  Premium Active
                </span>
              </div>
            </div>

            {/* Smart folders count */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-muted/30">
              <span className="text-2xl font-display font-bold text-neon-cyan">12</span>
              <span className="text-[10px] font-heading text-muted-foreground">Pastas Inteligentes</span>
            </div>

            {/* Subscription */}
            <div className="p-3 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-[10px] font-display font-bold text-neon-purple tracking-wider">Assinatura Creator ✦</p>
              <p className="text-[9px] text-muted-foreground mt-1">Plano Atual</p>
            </div>

            {/* Technical configs */}
            <div className="space-y-3">
              <p className="text-[10px] font-display font-bold text-muted-foreground tracking-wider">Configurações Técnicas (10 Pilares)</p>

              {[
                { key: "videoQuality" as const, label: "Qualidade de Vídeo (4K/HD)", desc: "Priorizar qualidade máxima" },
                { key: "legendStyles" as const, label: "Estilos de Legenda", desc: "Preferência de estilos automáticos" },
                { key: "beatSync" as const, label: "Beat Sync", desc: "Sensibilidade de sincronização" },
                { key: "customProfiles" as const, label: "Custom AI Profiles", desc: "Perfis customizados de IA" },
              ].map((config) => (
                <div key={config.key} className="flex items-center justify-between p-2.5 rounded-lg border border-border">
                  <div>
                    <p className="text-[11px] font-heading font-semibold text-foreground">{config.label}</p>
                    <p className="text-[9px] text-muted-foreground">{config.desc}</p>
                  </div>
                  <Switch
                    checked={configs[config.key] as boolean}
                    onCheckedChange={() => toggleConfig(config.key)}
                  />
                </div>
              ))}

              {configs.beatSync && (
                <div className="px-3">
                  <p className="text-[9px] text-muted-foreground mb-2">Sensibilidade: {configs.beatSensitivity[0]}%</p>
                  <Slider
                    value={configs.beatSensitivity}
                    onValueChange={(val) => setConfigs(prev => ({ ...prev, beatSensitivity: val }))}
                    max={100}
                    step={1}
                  />
                </div>
              )}
            </div>

            {/* Cloud Storage */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-display font-bold text-neon-cyan tracking-wider">Gestão de Ativos & Cloud</p>
                <button
                  onClick={() => toast.info("Abrindo configurações de cloud...")}
                  className="p-1 rounded hover:bg-muted transition-colors"
                >
                  <Upload className="w-3 h-3 text-muted-foreground" />
                </button>
              </div>

              <div className="p-3 rounded-lg border border-border">
                <p className="text-[10px] font-heading font-semibold text-foreground">Armazenamento Cloud</p>
                <p className="text-[9px] text-muted-foreground mb-2">2,50 GB / 10 GB</p>
                <Progress value={25} className="h-1.5" />
              </div>

              {[
                { key: "syncTemplates" as const, label: "Sync Templates / Thumbnails", desc: "Sincronizar templates automaticamente" },
                { key: "syncDownloads" as const, label: "Sync Downloads", desc: "Sincronizar downloads na nuvem" },
              ].map((config) => (
                <div key={config.key} className="flex items-center justify-between p-2.5 rounded-lg border border-border">
                  <div>
                    <p className="text-[11px] font-heading font-semibold text-foreground">{config.label}</p>
                    <p className="text-[9px] text-muted-foreground">{config.desc}</p>
                  </div>
                  <Switch
                    checked={configs[config.key] as boolean}
                    onCheckedChange={() => toggleConfig(config.key)}
                  />
                </div>
              ))}
            </div>

            <div className="text-center py-4">
              <p className="text-[10px] font-display font-bold text-neon-purple tracking-wider neon-text-glow">
                ✦ Seu Perfil de Autoridade Está Otimizado ✦
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
