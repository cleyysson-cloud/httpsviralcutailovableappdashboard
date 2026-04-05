const TickerBar = () => {
  const tickers = [
    { symbol: "BTC/USD", value: "68,400.00", change: "+2.4%" },
    { symbol: "HGLG11", value: "172.50", change: "+1.1%" },
    { symbol: "ETH/USD", value: "3,920.00", change: "+3.7%" },
    { symbol: "BTGG11", value: "172.50", change: "+0.8%" },
  ];

  return (
    <div className="flex items-center gap-4 overflow-x-auto py-1" style={{ scrollbarWidth: "none" }}>
      {tickers.map((t) => (
        <div
          key={t.symbol}
          className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono whitespace-nowrap"
          style={{
            background: "hsl(210 25% 14% / 0.8)",
            border: "1px solid hsl(145 63% 49% / 0.2)",
          }}
        >
          <span className="font-bold" style={{ color: "hsl(145 63% 49%)" }}>{t.symbol}</span>
          <span className="text-white/70">/</span>
          <span className="text-white/80">{t.value}</span>
          <span className="font-bold" style={{ color: "hsl(145 80% 55%)" }}>{t.change}</span>
        </div>
      ))}
    </div>
  );
};

export default TickerBar;
