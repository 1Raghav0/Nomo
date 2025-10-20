import React from 'react'
import HeroSection from './HeroSection'
import NomoCopyTrading from './NomoCopyTrading'
import CopyTradingSection from './CopyTradingSection'
import FaqSection from './FaqSection'
import CopyTradingBanner from './CopyTradingBanner'
import TradingSteps from './TradingSteps'
import CopyTradingWork from './CopyTradingWork'
import WhyCopyTrading from './WhyCopyTrading'

const page = () => {
  return (
    <>
    <HeroSection />
    <NomoCopyTrading />
    <CopyTradingWork />
    <WhyCopyTrading />
    <CopyTradingSection />
    <FaqSection />
    <CopyTradingBanner />
    <TradingSteps />
    </>
  )
}

export default page