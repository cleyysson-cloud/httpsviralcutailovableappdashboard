import { Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-green/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-pink/5 blur-[120px]" />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Motor de Retenção com IA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Transforme qualquer vídeo em{" "}
            <span className="gradient-hero-text">conteúdo viral</span>
            {" "}com um toque
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 mx-auto lg:mx-0">
            Jump cuts automáticos, legendas dinâmicas, zoom inteligente e memes contextuais. 
            Tudo o que criadores profissionais fazem manualmente — agora em segundos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="neon" size="lg" className="text-base px-8">
              <Zap className="h-5 w-5" />
              Criar Viral Agora
            </Button>
            <Button variant="neonOutline" size="lg" className="text-base px-8">
              <Play className="h-5 w-5" />
              Ver Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-muted-foreground">
            <span>✓ Sem cartão de crédito</span>
            <span>✓ 3 vídeos grátis/dia</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 flex justify-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-2xl gradient-hero opacity-20 blur-2xl scale-105" />
            <img
              src={heroMockup}
              alt="ViralCut AI - Interface de edição de vídeo com IA"
              className="relative rounded-2xl border border-border/50 max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
