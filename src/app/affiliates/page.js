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
