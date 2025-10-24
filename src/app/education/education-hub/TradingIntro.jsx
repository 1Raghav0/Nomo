import Image from "next/image";

export default function TradingIntro() {
  const cards = [
    {
      title: "Beginner's corner",
      icon: "https://nomotrade.com/_next/image?url=%2Fimages%2Feducation%2Findex-page%2Fintro%2Fstairs.avif&w=256&q=75",
    },
    {
      title: "Understanding the markets",
      icon: "https://nomotrade.com/_next/image?url=%2Fimages%2Feducation%2Findex-page%2Fintro%2Fmarkets.avif&w=256&q=75",
    },
    {
      title: "Trading strategy and analysis",
      icon: "https://nomotrade.com/_next/image?url=%2Fimages%2Feducation%2Findex-page%2Fintro%2Fanalysis.avif&w=256&q=75",
    },
    {
      title: "Platform tutorials",
      icon: "https://nomotrade.com/_next/image?url=%2Fimages%2Feducation%2Findex-page%2Fintro%2Ftutorials.avif&w=256&q=75",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a23] mb-3">
        Your introduction into trading
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-14">
        Find essential tips on personal finance, stocks, commodities and more,
        all in a simple, easy-to-use spot.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-3xl bg-[#F8FAFD] p-10 flex flex-col items-center justify-center hover:bg-[#E5E9F3] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="mb-8">
              <Image
                src={card.icon}
                alt={card.title}
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-[#0a0a23] leading-snug">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
