import React from "react";

const platforms = [
  {
    icon: "https://i.ibb.co/vZZsgdY/mobile-icon.png", // replace with your actual icon URL
    title: "nomo Mobile",
    description: "Enjoy next level trading experience from your phone",
  },
  {
    icon: "https://i.ibb.co/BtNMdYg/web-icon.png", // replace with your actual icon URL
    title: "nomo Web",
    description: "Trade from any device in any popular browser",
  },
  {
    icon: "https://i.ibb.co/M5RkMqC/mt5-icon.png", // replace with your actual icon URL
    title: "nomo MT5",
    description: "Elevate your strategy with advanced trading tools",
  },
];

const VarietyOfPlatforms = () => {
  return (
    <section className="relative w-full bg-[#0B1437] text-white overflow-hidden">
      {/* Content container */}
      <div className="max-w-7xl mx-auto py-16 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Variety of platforms
        </h2>
        <p className="text-gray-400 max-w-2xl mb-12">
          Our user-friendly mobile apps for iOS and Android, as well as our web
          app, make it easy for you to access your account and trade on the go.
        </p>

        <div className="relative w-full min-h-screen overflow-hidden">
  {/* Background Image */}
  <img
    src="/platforms.avif"
    alt="Platforms background"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Platforms Grid */}
  <div className="relative w-full max-w-5xl mx-auto mb-20 z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full p-6">
      {platforms.map((p, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center gap-3 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={p.icon}
            alt={p.title}
            className="w-16 h-16 object-contain mb-2"
          />
          <h3 className="text-lg font-semibold text-blue-400">{p.title}</h3>
          <p className="text-gray-300 text-sm max-w-[250px]">{p.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  <div className="relative bottom-40 z-10 flex justify-center">
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-16 py-3 rounded-lg transition-all duration-300 shadow-lg">
      Join Nomo
    </button>
  </div>
      </div>

      {/* Background image section */}
    </section>
  );
};

export default VarietyOfPlatforms;
