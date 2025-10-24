import React from 'react'
import HeroAbout from '../about-us/HeroAbout'
import Mission from '../about-us/Misson'   
import ThirdSection from '../about-us/ThirdSection'    
import ProblemsSection from './ProblemSection'
import TrustpilotSection from './TrustPilotSection'
import PartnersSection from './PartnerSection'
import SeamlessExperienceSection from './SeamlessExperience'
import TradingViewSection from './TradingViewSection'
import WhyChooseNomo from './WhyChooseNomo'
import WhatSetsUsApart from './WhatSetsUsApart'
import FaqSection from './FaqSection'

const page = () => {
  return (
    <>
    <HeroAbout />
    <Mission />
    <ThirdSection />
    <ProblemsSection />
    <TrustpilotSection />
    <PartnersSection />
    <SeamlessExperienceSection />
    <TradingViewSection />
    <WhyChooseNomo />
    <WhatSetsUsApart />
    <FaqSection />
    </>
  )
}

export default page