import { useState } from "react";
import { motion } from "framer-motion";
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart, Tooltip } from "recharts";
import { TrendingUp, MousePointerClick, BarChart3, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface AnalyticsPanelProps {
  selectedProject?: string | null;
}

const projectAnalytics: Record<string, { videoTitle: string; retention: number[]; avgRetention: string; clicks: string; comparison: string; ctr: string }> = {
  "gamer-lol": {
    videoTitle: "Destaques Virais",
    retention: [100, 88, 75, 70, 65, 58, 52, 48, 45, 42, 38],
    avgRetention: "42,2 min",
    clicks: "1,359",
    comparison: "4,0 - 16",
    ctr: "0,8 fim",
  },
  "financas-fiis": {
    videoTitle: "ANÁLISE FIIs: HGLG11",
    retention: [100, 92, 85, 78, 72, 68, 62, 58, 55, 50, 47],
    avgRetention: "55,1 min",
    clicks: "892",
    comparison: "3,2 - 12",
    ctr: "1,2 fim",
  },
  "thumb-ganchos": {
    videoTitle: "NÃO FAÇA ISSO!",
    retention: [100, 70, 55, 45, 38, 30, 25, 22, 20, 18, 15],
    avgRetention: "12,8 min",
    clicks: "3,201",
    comparison: "8,5 - 24",
    ctr: "2,4 fim",
  },
};

const timeLabels = ["0", "2", "5", "8", "10", "15", "20", "25", "30", "35", "40"];

const AnalyticsPanel = ({ selectedProject }: AnalyticsPanelProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const data = projectAnalytics[selectedProject || "gamer-lol"];

  const chartData = data.retention.map((val, i) => ({
    t: timeLabels[i],
    real: val,
    est: Math.min(val + Math.floor(Math.random() * 8 + 2), 100),
  }));

  const metrics = [
    { label: "RETENÇÃO MÉDIA", value: data.avgRetention, icon: TrendingUp, color: "text-neon-cyan" },
    { label: "CLIQUES EST.", value: data.clicks, icon: MousePointerClick, color: "text-neon-green" },
    { label: "COMPARAS AR", value: data.comparison, icon: BarChart3, color: "text-neon-purple" },
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    toast.loading("Atualizando analytics...", { id: "refresh" });
    setTimeout(() => {
      setRefreshing(false);
      toast.success("Analytics atualizado!", { id: "refresh" });
    }, 1500);
  };

  return (
    <div className="w-64 shrink-0 border-l border-border gradient-card p-3 flex flex-col gap-3 overflow-y-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-display font-bold text-neon-cyan tracking-wider">Análise de Performance</p>
          <p className="text-[8px] text-muted-foreground font-heading">E GESTÃO</p>
        </div>
        <button onClick={handleRefresh} className="p-1 rounded hover:bg-muted transition-colors">
          <RefreshCw className={`w-3 h-3 text-muted-foreground ${refreshing ? "animate-spin" : ""}`} />
        </button>
      </div>

      <p className="text-[9px] text-muted-foreground font-heading">
        Video: <span className="text-foreground font-semibold">{data.videoTitle}</span>
      </p>

      {/* Chart */}
      <div className="rounded-lg border border-border bg-muted/30 p-2">
        <p className="text-[8px] font-display font-bold text-neon-cyan tracking-wider mb-2">RETENÇÃO REAL</p>
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(185, 90%, 50%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(185, 90%, 50%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(270, 80%, 60%)" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="hsl(270, 80%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="t" tick={{ fontSize: 7, fill: 'hsl(260, 10%, 55%)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 7, fill: 'hsl(260, 10%, 55%)' }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip
                contentStyle={{ background: 'hsl(260, 25%, 10%)', border: '1px solid hsl(270, 30%, 20%)', borderRadius: '8px', fontSize: '10px', fontFamily: 'Rajdhani' }}
                labelStyle={{ color: 'hsl(185, 90%, 50%)' }}
              />
              <Area type="monotone" dataKey="real" stroke="hsl(185, 90%, 50%)" fill="url(#cyanGrad)" strokeWidth={1.5} />
              <Area type="monotone" dataKey="est" stroke="hsl(270, 80%, 60%)" fill="url(#purpleGrad)" strokeWidth={1} strokeDasharray="3 3" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-2">
        {metrics.map((m) => (
          <motion.div key={m.label} whileHover={{ x: 4 }} className="flex items-center gap-2 cursor-default">
            <m.icon className={`w-3.5 h-3.5 ${m.color}`} />
            <div>
              <p className="text-[7px] font-display font-bold text-muted-foreground tracking-wider">{m.label}</p>
              <p className="text-[11px] font-heading font-bold text-foreground">{m.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto pt-2 border-t border-border">
        <p className="text-[7px] font-display font-bold text-muted-foreground tracking-wider">CLIQUE EST. C-</p>
        <p className="text-sm font-heading font-bold text-neon-green">{data.ctr}</p>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
