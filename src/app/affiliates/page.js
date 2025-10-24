<<<<<<< HEAD
import React from "react";
import AffiliateSection from "./AffiliateSection";
import NomoBanner from "./NomoBanner";
import AffiliateProgram from "./AffiliateProgram";
import TradeInvest from "./TradeInvest";

const page = () => {
  return (
    <>
      <AffiliateSection />
      <AffiliateProgram />
      <TradeInvest />
      <NomoBanner />
    </>
  );
};

export default page;
=======
import React from 'react'
import Affiliates from '../affiliates/Affiliates'
import TradeInvest from './TradeInvest'
import AffiliateSteps from './AffiliateSteps'
import LastSection from './LastSection'
const page = () => {
  return (
    <>
    <Affiliates />
    <AffiliateSteps />
    <TradeInvest />
    <LastSection />
    </>
  )
}

export default page
>>>>>>> ec20fa739f1bd568814eb45403f14a7136535ebe
