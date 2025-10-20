import React from "react";

const methods = [
  { name: "VISA", logo: "/visa.svg" },
  { name: "MasterCard", logo: "/mastercard.svg" },
  { name: "Binance Pay", logo: "/binancepay.svg" },
  { name: "Bitcoin", logo: "/bitcoin.svg" },
  { name: "Tether", logo: "/tether.svg" },
  { name: "AMEX", logo: "/amex.svg" },
  { name: "SPEI", logo: "/spei.svg" },
  { name: "CoDi", logo: "/codi.svg" },
  { name: "Khipu", logo: "/khipu.svg" },
  { name: "PagoFacil", logo: "/pagofacil.svg" },
  { name: "PSE", logo: "/pse.svg" },
  { name: "Mercado Libre", logo: "/mercadolibre.svg" },
  { name: "Efecty", logo: "/efecty.svg" },
  { name: "Nequi", logo: "/nequi.svg" },
  { name: "OXXO", logo: "/oxxo.svg" },
  { name: "Local bank transfers", logo: "/banktransfer.svg" },
];

export default function FundingMethods() {
  return (
    <section className="w-full py-12 bg-gray-100 flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Choose any of the{" "}
        <span className="text-blue-600">funding methods</span> and get started
      </h2>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 w-full max-w-5xl px-4">
        {methods.map((method, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex justify-center items-center h-16 sm:h-20"
          >
            <img
              src={method.logo}
              alt={method.name}
              className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>

      <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl px-16 py-3 transition-all shadow">
        Get started
      </button>
    </section>
  );
}
