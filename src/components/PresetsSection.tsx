import { Sparkles, Flame, Brain } from "lucide-react";

const presets = [
  {
    name: "Clean",
    icon: Sparkles,
    subtitle: "Tutoriais & Educação",
    description: "Jump cuts suaves, legendas brancas discretas, sem zoom ou memes. Ideal para conteúdo educativo profissional.",
    features: ["Jump Cuts (silêncio > 600ms)", "Legendas brancas", "Auto-Ducking", "Sem zoom", "Sem memes"],
    borderClass: "border-primary/30 hover:border-primary/60",
    iconColor: "text-primary",
    badgeClass: "bg-primary/10 text-primary",
  },
  {
    name: "Dynamic",
    icon: Flame,
    subtitle: "Vlogs & Lifestyle",
    description: "Equilíbrio perfeito entre profissionalismo e engajamento. Zoom suave, memes ocasionais e legendas coloridas.",
    features: ["Jump Cuts (silêncio > 400ms)", "Legendas coloridas", "Zoom a cada 6s", "Memes ocasionais", "SFX em transições"],
    borderClass: "border-secondary/30 hover:border-secondary/60",
    iconColor: "text-secondary",
    badgeClass: "bg-secondary/10 text-secondary",
    popular: true,
  },
  {
    name: "Brain Rot",
    icon: Brain,
    subtitle: "Humor & Entretenimento",
    description: "Máxima estimulação sensorial. Cortes agressivos, zoom frequente, memes em toda parte. Feito para viralizar.",
    features: ["Jump Cuts (silêncio > 200ms)", "Legendas animadas", "Zoom a cada 3s (120%)", "Memes frequentes", "SFX em tudo"],
    borderClass: "border-accent/30 hover:border-accent/60",
    iconColor: "text-accent",
    badgeClass: "bg-accent/10 text-accent",
  },
];

const PresetsSection = () => {
  return (
    <section id="presets" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Escolha a <span className="text-secondary text-glow-pink">intensidade</span> do seu viral
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Três presets que controlam o nível de agressividade dos efeitos de retenção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {presets.map((preset) => (
            <div
              key={preset.name}
              className={`relative rounded-xl border ${preset.borderClass} bg-card/50 backdrop-blur-sm p-8 transition-all duration-300`}
            >
              {preset.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-secondary-foreground">
                    Mais Popular
                  </span>
                </div>
              )}

              <preset.icon className={`h-10 w-10 ${preset.iconColor} mb-4`} />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{preset.name}</h3>
              <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 mb-4 ${preset.badgeClass}`}>
                {preset.subtitle}
              </span>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{preset.description}</p>

              <ul className="space-y-2">
                {preset.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className={`h-1.5 w-1.5 rounded-full ${preset.iconColor} bg-current`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresetsSection;
