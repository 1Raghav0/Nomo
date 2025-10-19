import AIIndex from "./AIIndex";
import AiIndexComponent from "./AiIndexComponent";
import AISection from "./AISection";
import CopyTradingBanner from "./CopyTradingBanner";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import InvestmentSteps from "./InvestmentSteps";
// import Roadmap from "./Roadmap";


export default function AIIndexPage() {
  return (
    <main>
        <HeroSection />
        <AIIndex />
        <InvestmentSteps />
        <AiIndexComponent />
        <AISection />
                {/* <Roadmap /> */}
        <FaqSection />
        <CopyTradingBanner />
    </main>
  );
}