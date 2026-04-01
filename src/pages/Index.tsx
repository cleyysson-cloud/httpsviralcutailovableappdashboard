import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import NicheSidebar from "@/components/NicheSidebar";
import ProjectCard from "@/components/ProjectCard";
import AnalyticsPanel from "@/components/AnalyticsPanel";
import BottomNav from "@/components/BottomNav";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import PlaceholderPage from "@/components/PlaceholderPage";
import ProfilePage from "@/components/ProfilePage";

import cyborgAvatar from "@/assets/cyborg-avatar.jpg";
import cyborgManager from "@/assets/cyborg-manager.png";
import thumbGamer from "@/assets/thumb-gamer.jpg";
import thumbFinancas from "@/assets/thumb-financas-project.jpg";
import thumbThumbnail from "@/assets/thumb-thumbnail.jpg";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  status: "ready" | "editing" | "draft";
  viralScore?: number;
  processingLabel?: string;
  niche: string;
  nicheLabel: string;
}

const initialProjects: Project[] = [
  {
    id: "gamer-lol",
    title: "Gamer & Tech",
    subtitle: "CAMPEONATO DE LOL: Destaques Virais",
    thumbnail: thumbGamer,
    status: "ready",
    viralScore: 88,
    niche: "gamer",
    nicheLabel: "Gamer & Tech",
  },
  {
    id: "financas-fiis",
    title: "Finanças & FIIs",
    subtitle: "ANÁLISE FIIs: HGLG11",
    thumbnail: thumbFinancas,
    status: "editing",
    processingLabel: "IA Processing",
    niche: "financas",
    nicheLabel: "Finanças & FIIs",
  },
  {
    id: "thumb-ganchos",
    title: "Thumbnail Master",
    subtitle: "NÃO FAÇA ISSO! (Ganchos)",
    thumbnail: thumbThumbnail,
    status: "draft",
    niche: "thumbnail",
    nicheLabel: "Thumbnail Master",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("projetos");
  const [activeNiche, setActiveNiche] = useState("gamer");
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const filteredProjects = projects.filter((p) => p.niche === activeNiche);
  const featuredProject = filteredProjects[0];
  const otherProjects = filteredProjects.slice(1);

  const handleStatusChange = useCallback((id: string, status: "ready" | "editing" | "draft") => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  }, []);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    if (tab === "home") setActiveTab("projetos");
  }, []);

  const handleOpenModal = useCallback((id: string) => {
    const project = projects.find((p) => p.id === id);
    if (project) setModalProject(project);
  }, [projects]);

  return (
    <div className="h-screen flex flex-col bg-background circuit-pattern overflow-hidden">
      {/* Top bar */}
      <header className="shrink-0 h-12 border-b border-border flex items-center px-4 gap-3 gradient-card">
        <motion.div
          className="w-7 h-7 rounded-lg gradient-neon flex items-center justify-center font-display text-xs font-bold text-primary-foreground cursor-pointer"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          V
        </motion.div>
        <h1 className="text-[10px] font-display font-bold text-neon-purple tracking-[0.15em] neon-text-glow">
          VIRALCUT AI: CENTRAL DE ATIVOS DE AUTORIDADE
        </h1>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "projetos" ? (
            <motion.div
              className="flex-1 flex overflow-hidden"
              key="projetos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Niche Sidebar */}
              <NicheSidebar
                activeNiche={activeNiche}
                onNicheChange={setActiveNiche}
                collapsed={sidebarCollapsed}
                onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
              />

              {/* Projects area */}
              <div className="flex-1 flex flex-col overflow-hidden p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h2 className="text-xs font-display font-bold text-neon-cyan tracking-wider cyan-text-glow">
                      Galeria de Projetos de Performance
                    </h2>
                    <p className="text-[9px] text-muted-foreground font-heading mt-0.5">
                      {filteredProjects.length} projeto(s)
                    </p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {filteredProjects.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-center py-12">
                      <div>
                        <p className="text-sm font-heading text-muted-foreground">Nenhum projeto neste nicho ainda.</p>
                        <p className="text-[10px] text-muted-foreground mt-1">Selecione outro nicho ou crie um novo projeto.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Featured project */}
                      {featuredProject && (
                        <motion.div
                          key={featuredProject.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          onClick={() => handleOpenModal(featuredProject.id)}
                          className={`rounded-xl overflow-hidden border gradient-card cursor-pointer transition-all hover:glow-purple ${
                            selectedProject === featuredProject.id
                              ? "border-primary/60 glow-purple"
                              : "border-primary/30 hover:border-primary/50"
                          }`}
                        >
                          <div className="flex flex-col md:flex-row">
                            <div className="relative w-full md:w-72 h-40 overflow-hidden">
                              <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                src={featuredProject.thumbnail === thumbGamer ? cyborgAvatar : featuredProject.thumbnail}
                                alt={featuredProject.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80" />
                            </div>
                            <div className="flex-1 p-4 flex flex-col justify-between">
                              <div>
                                <span className="text-[8px] font-display font-bold text-neon-purple tracking-wider">{featuredProject.nicheLabel}</span>
                                <h3 className="text-sm font-heading font-bold text-foreground mt-1">
                                  <span className="text-neon-cyan">{featuredProject.subtitle.split(":")[0]}:</span>
                                  <span className="text-foreground">{featuredProject.subtitle.split(":")[1]}</span>
                                </h3>
                                <p className="text-[10px] font-heading text-muted-foreground mt-1">
                                  {featuredProject.status === "ready" ? "Pronto para Postar" :
                                   featuredProject.status === "editing" ? "Em Edição" : "Rascunho"}
                                </p>
                              </div>
                              <div className="flex items-center gap-3 mt-3">
                                {featuredProject.viralScore && (
                                  <span className="text-[10px] font-display font-bold text-neon-yellow">
                                    🔥 Potencial Viral: {featuredProject.viralScore}%
                                  </span>
                                )}
                                {featuredProject.status === "ready" && (
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toast.loading("Exportando...", { id: "feat-export" });
                                        setTimeout(() => toast.success("Exportado com sucesso!", { id: "feat-export" }), 2000);
                                      }}
                                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-display font-bold gradient-neon text-primary-foreground hover:opacity-90 transition-opacity tracking-wider"
                                    >
                                      QUICK EXPORT
                                    </button>
                                    {["9:16", "16:9"].map((fmt) => (
                                      <button
                                        key={fmt}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toast.loading(`Exportando em ${fmt}...`, { id: `fmt-${fmt}` });
                                          setTimeout(() => toast.success(`Exportado em ${fmt}!`, { id: `fmt-${fmt}` }), 1500);
                                        }}
                                        className="text-[10px] text-muted-foreground font-heading border border-border rounded px-1.5 py-0.5 hover:border-primary/40 hover:text-foreground transition-colors"
                                      >
                                        {fmt}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Other projects */}
                      {otherProjects.length > 0 && (
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                          {otherProjects.map((project) => (
                            <ProjectCard
                              key={project.id}
                              {...project}
                              onSelect={handleOpenModal}
                              onStatusChange={handleStatusChange}
                              selected={selectedProject === project.id}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-border flex items-center justify-between">
                  <p className="text-[8px] font-display text-muted-foreground tracking-wider">Arquivamento IA | Cloud Sync</p>
                </div>
              </div>

              {/* Analytics Panel */}
              <AnalyticsPanel selectedProject={selectedProject || featuredProject?.id} />
            </motion.div>
          ) : activeTab === "perfil" ? (
            <motion.div
              className="flex-1 flex"
              key="perfil"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ProfilePage />
            </motion.div>
          ) : (
            <motion.div
              className="flex-1 flex"
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <PlaceholderPage
                title={activeTab === "tendencias" ? "Tendências IA" : "Home"}
                description={activeTab === "tendencias" ? "Painel de tendências em desenvolvimento..." : "Dashboard principal em desenvolvimento..."}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Nav */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default Index;
