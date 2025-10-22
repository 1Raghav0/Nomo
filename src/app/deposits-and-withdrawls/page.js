import React from 'react'
import HeroSection from './HeroSection'
import PaymentSection from './PaymentSection'
import PaymentOptions from './PaymentOptions'
import NomoBanner from './NomoBanner'

const page = () => {
  return (
    <>
    <HeroSection />
    <PaymentSection />
    <PaymentOptions />
    <NomoBanner />
    </>
  )
}

export default page