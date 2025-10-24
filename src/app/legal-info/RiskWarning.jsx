import React from "react";

export default function RiskWarning() {
  return (
    <section className="bg-white text-[#5f6368] px-6 md:px-24 py-16 leading-relaxed">
      {/* Risk Warning */}
      <div className="max-w-3xl mx-auto mb-14">
        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#0a1633] mb-4">
          Risk warning
        </h2>
        <p className="text-[16px] mb-5">
          Trading leveraged instruments like derivatives carries significant risk to your capital and
          may not be suitable for all investors. Before trading, ensure you understand and accept
          these risks based on your investment goals and experience. If necessary, seek
          independent advice to make well-informed decisions. A comprehensive understanding of
          all risks related to margin trading is essential.
        </p>
        <p className="text-[16px]">
          Please ensure a thorough comprehension of the risks and take appropriate measures to
          manage them. Refer to our detailed Risk Disclosure Notice for comprehensive information.
        </p>
      </div>

      {/* Geographical Restrictions */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#0a1633] mb-4">
          Geographical restrictions
        </h2>
        <p className="text-[16px] mb-8">
          The information on this site is not intended for residents of Afghanistan, Albania, Algeria,
          Angola, Australia, Bahrain, Bangladesh, Barbados, Belarus, Benin, Bhutan, Bosnia and
          Herzegovina, Botswana, Brazil, Burkina Faso, Burundi, Cambodia, Cameroon, Cabo Verde,
          Central African Republic, Chad, China, Comoros, Congo DR, Crimea region, Cuba, Djibouti,
          Egypt, Eritrea, Ethiopia, Fiji, Gabon, Ghana, Guinea, Haiti, Iran, Iraq, Jamaica, Jordan,
          Kenya, Kosovo, Kuwait, Laos, Lebanon, Liberia, Libya, Macedonia FYR, Madagascar,
          Malawi, Maldives, Mali, Morocco, Myanmar, Namibia, Nepal, Niger, Nigeria, North Korea,
          Northern Cyprus, Oman, Pakistan, Palau, Puerto Rico, Qatar, Russia, Rwanda, Somalia,
          Senegal, South Sudan, Sudan and Darfur, Syria, Tanzania, Togo, Trinidad & Tobago,
          Tunisia, Tuvalu, the United Kingdom, the USA, Vanuatu, Vatican City, Yemen, Zambia, and
          Zimbabwe, or for use by any person in any country or jurisdiction where such distribution
          or use would be contrary to local law or regulation.
        </p>
      </div>
       
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#0a1633] mb-4">
          Legal information
        </h2>
        <p className="text-[16px]">
            The “Website” (https://nomotrade.com) is owned and operated by Nomo Trade Limited, an International Business Company number 2023-00509 in Saint Lucia. The registered office is situated at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, LC01 401, Saint Lucia.
        </p>
      </div>
    </section>
  );
}
