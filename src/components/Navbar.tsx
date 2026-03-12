import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">
            ViralCut<span className="text-primary">AI</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Recursos</a>
          <a href="#presets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Presets</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Preços</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="neonOutline" size="sm">Entrar</Button>
          <Button variant="neon" size="sm">Começar Grátis</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
