import React from 'react'
import HeroSection from './HeroSection'
import TradeSection from './TradeSection'
import ZeroCommission from './ZeroCommission'
import TradeInvest from './TradeInvest'
import FundingMethods from './FundingMethods'
import TryTradingSection from './TryTradingSection'
import FaqSection from './FaqSection'
import CopyTradingBanner from './CopyTradingBanner'

const page = () => {
  return (
    <>
    <div className='mt-10'>
        <HeroSection />
        <TradeSection />
        <ZeroCommission />
        <TradeInvest />
        <FundingMethods />
        <TryTradingSection />
        <FaqSection />
        <CopyTradingBanner />
    </div>
    
    </>
  )
}

export default page