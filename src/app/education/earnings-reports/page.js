import React from 'react'
import HeroSection from '../earnings-reports/HeroSection.jsx'
import EarningsReports from '../earnings-reports/EarningReports.jsx'
import CompaniesReportingSoon from './CompaniesReports.jsx'
import EarningsSeason from './EarningsSeason.jsx'
import EarningsHighlights from './EarningsHighlights.jsx'
import InvestCTASection from './InvestCTASection.jsx'
import FundingMethods from './FundingMethods.jsx'
const page = () => {
  return (
    <>
    <HeroSection />
    <EarningsReports />
    <CompaniesReportingSoon />
    <EarningsSeason />
    <EarningsHighlights />
    <InvestCTASection />   
    <FundingMethods /> 
    </>
  )
}

export default page