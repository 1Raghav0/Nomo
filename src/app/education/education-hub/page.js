import React from 'react'
import HeroSection from './HeroSection.jsx'
import TradingIntro from './TradingIntro.jsx'
import HighImpactive from './HighImpactive.jsx'
import EarningsReports from './EarningReports.jsx'
import MostPopular from './MostPopular.jsx'
import InvestorSection from './InvestorSection.jsx'
const page = () => {
  return (
    <>
    <HeroSection />
    <TradingIntro />
    <HighImpactive />
    <EarningsReports />
    <MostPopular />
    <InvestorSection />
    </>
  )
}

export default page