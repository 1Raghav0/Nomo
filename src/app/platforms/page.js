import React from 'react'
import NomoPlatformSection from './NomoPlatformSection'
import NomoWebInfoSection from './NomoWebInfoSection'
import MT5Card from './MT5Card'
import ChooseNomoSection from './ChooseNomoSection'
import FaqSection from './FaqSection'

const page = () => {
  return (
    <>
    <NomoPlatformSection />
    <NomoWebInfoSection />
    <MT5Card />
    <ChooseNomoSection />
    <FaqSection />
    </>
  )
}

export default page