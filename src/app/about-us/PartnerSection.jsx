export default function PartnersSection() {
  const partners = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/8/81/MetaTrader_5_logo.png",
      name: "MetaTrader",
      description:
        "A world-renowned platform for advanced trading, offering powerful tools and features for both beginners and experienced traders.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/TradingView_Logo.png",
      name: "TradingView",
      description:
        "Trusted by traders globally, TradingView provides advanced charting tools and real-time market data to help you make informed decisions.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/PayRetailers_logo.png",
      name: "PayRetailers",
      description:
        "A secure, reliable payment solution that makes deposits and withdrawals seamless, fast, and accessible.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/4ON_logo.png",
      name: "4ON Payments",
      description:
        "A cutting-edge payment platform ensuring fast, secure, and hassle-free transactions, making your trading experience smoother.",
    },
  ];

  return (
    <section className="bg-[#f7faff] py-16 px-6 md:px-20 text-center">
      {/* HEADING */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#0b132a] mb-3">
        <span className="text-[#0063F7] font-bold">Powered by </span>
        leading global fintech companies
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-10">
        We partner with some of the most trusted names in the industry to provide
        you with the best trading experience:
      </p>

      {/* PARTNER CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-start text-left border border-gray-100"
          >
            {/* LOGO */}
            <div className="flex justify-center items-center h-14 mb-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 w-auto object-contain"
              />
            </div>

            {/* NAME */}
            <h3 className="text-[#0b132a] font-semibold text-lg mb-2">
              {partner.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
