import { Scissors, Type, ZoomIn, Volume2, SmilePlus, Sparkles } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Jump Cuts Automáticos",
    description: "Remove silêncios e pausas mortas automaticamente, mantendo apenas os trechos de fala ativa.",
    color: "text-primary",
  },
  {
    icon: Type,
    title: "Legendas Dinâmicas",
    description: "Legendas estilo Hormozi com destaque palavra por palavra, geradas via Whisper AI.",
    color: "text-secondary",
  },
  {
    icon: ZoomIn,
    title: "Zoom Dinâmico",
    description: "Punch-ins automáticos que criam sensação de câmera viva e evitam fadiga visual.",
    color: "text-accent",
  },
  {
    icon: Volume2,
    title: "Auto-Ducking",
    description: "Volume da trilha reduzido automaticamente quando há fala, garantindo clareza.",
    color: "text-primary",
  },
  {
    icon: SmilePlus,
    title: "Memes Contextuais",
    description: "GIFs relevantes do Giphy inseridos nos momentos de ênfase do seu vídeo.",
    color: "text-secondary",
  },
  {
    icon: Sparkles,
    title: "SFX Inteligentes",
    description: "Efeitos sonoros (woosh, pop) adicionados automaticamente nas transições.",
    color: "text-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            O <span className="text-primary text-glow-green">Motor de Retenção</span> completo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todas as técnicas que criadores profissionais usam — aplicadas automaticamente pelo pipeline de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300"
            >
              <feature.icon className={`h-10 w-10 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
