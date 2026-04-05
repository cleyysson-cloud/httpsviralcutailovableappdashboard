import { motion } from "framer-motion";

const tickers = [
  { symbol: "BTC/USD", value: "67,842.50", change: "+2.4%", positive: true },
  { symbol: "ETH/USD", value: "3,421.80", change: "+1.8%", positive: true },
  { symbol: "HGLG11", value: "162.45", change: "-0.3%", positive: false },
];

const CryptoTickers = () => {
  return (
    <motion.div
      className="absolute top-14 right-4 z-10 space-y-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      {tickers.map((t, i) => (
        <motion.div
          className="flex items-center gap-2 px-2 py-0.5 rounded border text-[8px]"
          key={t.symbol}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ delay: 1.7 + i * 0.15 }}
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            background: "hsl(220 12% 10% / 0.7)",
            borderColor: "hsl(72 60% 25% / 0.3)",
          }}
        >
          <span style={{ color: "hsl(72 100% 50%)" }}>{t.symbol}</span>
          <span style={{ color: "hsl(60 100% 95% / 0.7)" }}>{t.value}</span>
          <span style={{ color: t.positive ? "hsl(72 100% 50%)" : "hsl(0 84% 60%)" }}>
            {t.change}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CryptoTickers;
