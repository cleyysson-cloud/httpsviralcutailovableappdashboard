import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "para sempre",
    features: [
      { text: "3 vídeos por dia", included: true },
      { text: "Presets Clean e Dynamic", included: true },
      { text: "Exportação em 720p", included: true },
      { text: "Marca d'água ViralCut", included: true },
      { text: "Preset Brain Rot", included: false },
      { text: "Exportação 4K", included: false },
      { text: "Postagem agendada", included: false },
    ],
    buttonVariant: "neonOutline" as const,
    buttonText: "Começar Grátis",
  },
  {
    name: "Pro",
    price: "R$ 29",
    period: "/mês",
    popular: true,
    features: [
      { text: "Vídeos ilimitados", included: true },
      { text: "Todos os 3 presets", included: true },
      { text: "Exportação em 1080p e 4K", included: true },
      { text: "Sem marca d'água", included: true },
      { text: "Biblioteca de músicas premium", included: true },
      { text: "Memes exclusivos curados", included: true },
      { text: "Postagem agendada", included: true },
    ],
    buttonVariant: "neon" as const,
    buttonText: "Assinar Pro",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Planos que <span className="gradient-hero-text">cabem no bolso</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comece grátis e faça upgrade quando estiver pronto para viralizar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary/50 bg-card box-glow-green"
                  : "border-border bg-card/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Recomendado
                  </span>
                </div>
              )}

              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-heading font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <Check className="h-4 w-4 text-primary shrink-0" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                    )}
                    <span className={f.included ? "text-foreground/80" : "text-muted-foreground/50"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.buttonVariant} className="w-full" size="lg">
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
