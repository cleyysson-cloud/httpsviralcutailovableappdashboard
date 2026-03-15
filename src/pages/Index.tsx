import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="border-b border-border/50 bg-background">
        <div className="container flex h-14 items-center">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-heading text-lg font-bold">
              ViralCut<span className="text-secondary">AI</span>
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 pt-24 pb-16">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-center leading-tight">
          <span className="gradient-hero-text">Transforme Vídeos</span>
          <br />
          <span className="text-foreground">em </span>
          <span className="gradient-hero-text">Virais</span>
        </h1>
        <p className="mt-6 max-w-md text-center text-muted-foreground">
          O motor de retenção automático que aplica edição profissional com um único clique.
        </p>

        {/* CTA Card */}
        <div className="mt-12 w-full max-w-lg rounded-xl border border-border bg-card p-8 text-center box-glow-pink">
          <Zap className="mx-auto h-10 w-10 text-primary mb-4" />
          <h2 className="font-heading text-2xl font-bold">Criar Vídeo Viral</h2>
          <p className="mt-2 text-sm text-muted-foreground">Comece agora com um clique</p>
          <Link
            to="/editor"
            className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Começar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16 text-center">
          <div>
            <span className="block font-heading text-3xl font-bold text-primary text-glow-green">4</span>
            <span className="text-sm text-muted-foreground">Motores de IA</span>
          </div>
          <div>
            <span className="block font-heading text-3xl font-bold text-secondary text-glow-pink">3</span>
            <span className="text-sm text-muted-foreground">Presets</span>
          </div>
          <div>
            <span className="block font-heading text-3xl font-bold text-accent">1</span>
            <span className="text-sm text-muted-foreground">Clique</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
