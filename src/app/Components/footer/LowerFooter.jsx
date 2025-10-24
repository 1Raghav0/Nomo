import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white overflow-hidden">
      {/* Top Content Section */}
      <div className="w-7xl mx-auto px-4 text-gray-700 text-md leading-relaxed ">
        <p>© Nomo Trade Ltd 2025. All rights reserved.</p><br/>

        <p>
          The “Website” (
          <a
            href="https://nomotrade.com"
            className="text-blue-600 underline hover:text-blue-700"
          >
            https://nomotrade.com
          </a>
          ) is owned and operated by Nomo Trade Limited, an International
          Business Company number 2023-00509 in Saint Lucia. The registered
          office is situated at Ground Floor, The Sotheby Building, Rodney
          Village, Rodney Bay, Gros-Islet, LC01 401, Saint Lucia.
        </p>
        <br/>

        <p className="font-semibold text-gray-800">Risk Warning:</p>
        <p>
          Trading leveraged instruments like derivatives carries significant
          risk to your capital and may not be suitable for all investors. Before
          trading, ensure you understand and accept these risks based on your
          investment goals and experience. If necessary, seek independent advice
          to make well-informed decisions. A comprehensive understanding of all
          risks related to margin trading is essential.
        </p>

        <p>
          Please ensure a thorough comprehension of the risks and take
          appropriate measures to manage them. Refer to our detailed Risk
          Disclosure Notice for comprehensive information.
        </p>
        <br/>

        <p className="font-semibold text-gray-800">Geographical Restrictions:</p>
        <p>
          The information on this site is not intended for residents of
          Afghanistan, Albania, Algeria, Angola, Australia, Bahrain, Bangladesh,
          Barbados, Benin, Bhutan, Bosnia and Herzegovina, Botswana, Brazil,
          Burkina Faso, Burundi, Cambodia, Cameroon, Cabo Verde, Central African
          Republic, Chad, China, Comoros, Congo DR, Crimea region, Cuba,
          Djibouti, Egypt, Eritrea, Ethiopia, Fiji, Gabon, Ghana, Guinea, Haiti,
          Iran, Iraq, Jamaica, Jordan, Kenya, Kosovo, Kuwait, Laos, Lebanon,
          Liberia, Libya, Macedonia FYR, Madagascar, Malawi, Maldives, Mali,
          Morocco, Myanmar, Namibia, Nepal, Niger, Nigeria, North Korea, Oman,
          Pakistan, Palau, Puerto Rico, Qatar, Russia, Rwanda, Somalia, Senegal,
          South Sudan, Sudan and Darfur, Syria, Tanzania, Togo, Trinidad &
          Tobago, Tunisia, Tuvalu, the United Kingdom, the USA, Vanuatu, Vatican
          City, Yemen, Zambia, and Zimbabwe, or for use by any person in any
          country or jurisdiction where such distribution or use would be
          contrary to local law or regulation.
        </p>

        <hr className="mt-20 " />

        <div className="mt-6 flex-col sm:flex-row sm:items-center sm:justify-start gap-4 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-15 h-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1.5 9l10.5 7 10.5-7L12 2zm0 18l-9-6V9l9 6 9-6v5l-9 6z" />
              </svg>
            </div>
            <span className="text-lg">
              Trust, security, and reliability are at the core of our platform’s
              foundation.
            </span>
          </div>

          <div className="flex items-center">
            <div className="w-15 h-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 17l-5-5 1.41-1.41L11 14.17l6.59-6.58L19 9l-8 8z" />
              </svg>
            </div>
            <span className="text-lg   text-gray-400"> SSL secure</span>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Image */}
      <div className="w-full overflow-hidden mt-[-4rem]">
        {/* Replace src below with your image path */}
        <img
          src="https://nomotrade.com/_next/image?url=%2Fimages%2Findex%2Ffooter%2Ffooter-banner.avif&w=1920&q=75"
          alt="Footer Decorative"
          className="w-full object-cover"
        />
      </div>
    </footer>
  );
}