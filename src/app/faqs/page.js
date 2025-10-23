import React from 'react'
import FAQPage from './FAQPage'
import ContactSection from './ContactSection'


const page = () => {
  return (
    <>
      <FAQPage />
      <hr className='mx-10 text-gray-300'></hr>
      <ContactSection />
    </>
  )
}

export default page