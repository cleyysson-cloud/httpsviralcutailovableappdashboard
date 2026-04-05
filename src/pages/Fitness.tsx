import HexBackground from "@/components/viralcut/HexBackground";
import HeaderBar from "@/components/viralcut/HeaderBar";
import FitnessUploadPanel from "@/components/viralcut/UploadPanel";
import SparkConnector from "@/components/viralcut/SparkConnector";
import AnalysisPipeline from "@/components/viralcut/AnalysisPipeline";
import OutputMonitor from "@/components/viralcut/OutputMonitor";
import CyborgAthlete from "@/components/viralcut/CyborgAthlete";
import ActionButtons from "@/components/viralcut/ActionButtons";
import CryptoTickers from "@/components/viralcut/CryptoTickers";

const Fitness = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "hsl(220 10% 8%)", color: "hsl(60 100% 95%)" }}>
      <HexBackground>
        <CyborgAthlete />
        <CryptoTickers />

        <div className="relative z-10 flex flex-col min-h-screen">
          <HeaderBar />

          {/* Main content area */}
          <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-4 gap-4 max-w-7xl mx-auto w-full">
            {/* Top row: Upload + Spark + Output */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <FitnessUploadPanel />
              <SparkConnector />
              <OutputMonitor />
            </div>

            {/* Pipeline */}
            <div className="max-w-2xl mx-auto w-full">
              <AnalysisPipeline />
            </div>
          </div>

          <ActionButtons />
        </div>
      </HexBackground>
    </div>
  );
};

export default Fitness;
