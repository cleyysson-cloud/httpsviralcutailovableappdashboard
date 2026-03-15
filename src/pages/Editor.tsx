import { useState, useRef } from "react";
import { Zap, Upload, Scissors, Type, ZoomIn, Volume2, Smile, Music, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const tools = [
  { icon: Scissors, label: "Jump Cuts" },
  { icon: Type, label: "Legendas" },
  { icon: ZoomIn, label: "Zoom" },
  { icon: Volume2, label: "Auto-Ducking" },
  { icon: Smile, label: "Memes" },
  { icon: Music, label: "SFX" },
];

const Editor = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setFileName(file.name);
    }
  };

  const handleExport = () => {
    if (videoSrc) {
      const a = document.createElement("a");
      a.href = videoSrc;
      a.download = "ViralCutAI_Editado.mp4";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-border/50 px-4 h-14">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Zap className="h-5 w-5 text-primary" />
          <span className="font-heading text-lg font-bold">
            ViralCut<span className="text-secondary">AI</span>
          </span>
          {fileName && (
            <span className="ml-4 text-sm text-muted-foreground truncate max-w-[200px]">{fileName}</span>
          )}
        </div>
        <Button
          variant="neon"
          size="sm"
          disabled={!videoSrc}
          onClick={handleExport}
          className="gap-2"
        >
          <Download className="h-4 w-4" />
          Exportar
        </Button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-16 md:w-20 border-r border-border/50 flex flex-col items-center py-4 gap-2 shrink-0">
          {tools.map((tool) => (
            <button
              key={tool.label}
              disabled={!videoSrc}
              className="flex flex-col items-center justify-center gap-1 w-12 h-12 md:w-16 md:h-16 rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
              title={tool.label}
            >
              <tool.icon className="h-5 w-5" />
              <span className="text-[10px] leading-none hidden md:block">{tool.label}</span>
            </button>
          ))}
        </aside>

        {/* Main area */}
        <main className="flex-1 flex items-center justify-center p-4">
          {!videoSrc ? (
            /* Upload zone */
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full max-w-lg aspect-video rounded-xl border-2 border-dashed border-border hover:border-primary/50 bg-card flex flex-col items-center justify-center gap-4 transition-colors cursor-pointer"
            >
              <Upload className="h-12 w-12 text-muted-foreground" />
              <div className="text-center">
                <p className="font-heading text-lg font-semibold">Arraste ou clique para enviar</p>
                <p className="text-sm text-muted-foreground mt-1">MP4, MOV, AVI — até 500MB</p>
              </div>
            </button>
          ) : (
            /* Video player */
            <div className="w-full max-w-3xl">
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                className="w-full rounded-xl border border-border bg-black"
              />
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </main>
      </div>
    </div>
  );
};

export default Editor;
