import React from 'react'

const TradeInvest = () => {
  const cards = [
    {
      title: "Discover the power",
      subtitle: "of social investing",
      img: "img-1.avif",
      bg: "bg-white",
    },
    {
      title: "Smart investing",
      subtitle: "into your favourite companies",
      img: "img-3.avif",
      bg: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
    },
    {
      title: "Fast withdrawals & deposits",
      subtitle: "instant or up to 3 hours",
      img: "img-4.avif",
      bg: "bg-gray-100",
    },
    {
      title: "Easy to learn",
      subtitle: "nomo offers you free basic online courses",
      img: "img-5.avif",
      bg: "bg-gray-100",
    },
    {
      title: "Easy to learn",
      subtitle: "nomo offers you free basic online courses",
      img: "img-6.avif",
      bg: "bg-gray-100",
    },
  ];

  // duplicate for infinite scrolling
  const duplicatedCards = [...cards, ...cards];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 overflow-hidden">
      {/* Top Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trade and invest in  <span className="text-blue-600">top markets </span>
          with ease
        </h2>
        <p className="text-gray-500 mt-2">
          Enjoy the simplicity of trading with top-notch security. Invest with confidence, knowing your trades are protected on our reliable platform.
        </p>
      </div>

      {/* Auto-scrolling Cards */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {duplicatedCards.map((card, index) => (
            <div
              key={index}
              className={`min-w-[280px] sm:min-w-[320px] md:min-w-[360px] rounded-2xl shadow-lg pt-4 flex flex-col gap-2 h-96 ${card.bg} transition-transform duration-300 hover:scale-105`}
            >
              <div>
                <h3 className="text-xl font-semibold text-center">{card.title}</h3>
                <p className="text-sm mt-2 opacity-80 text-center">{card.subtitle}</p>
              </div>
              <div className="mt-6 flex justify-center ">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-76 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 25s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default TradeInvest