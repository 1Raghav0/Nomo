import React from "react";

const AIIndex = () => {
  const benefits = [
    {
      text: "Consistent average returns (6-8% monthly 😱)",
      highlighted: true,
    },
    {
      text: "Diversified, AI-optimized portfolio of top strategies 🏆",
    },
    {
      text: "Minimal risk through constant rebalancing ⚖️",
    },
    {
      text: "Flexibility: withdraw or reconnect anytime 💸",
    },
    {
      text: "Hands-free investing — no manual trading 🤖",
    },
  ];

  return (
    <div className="mx-auto px-4 py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Beta & Powered by AI badges */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <span className="bg-white px-4 py-1 rounded-full text-sm font-semibold text-indigo-600 shadow-md">
          Beta
        </span>
        <span className="text-xs flex items-center gap-1">
          <span className="text-red-500 font-semibold">Powered</span> by{" "}
          <span className="text-green-600 font-semibold">AI</span>
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-extrabold max-w-4xl mx-auto leading-tight mb-3">
        Your personal{" "}
        <span className="text-purple-600">AI portfolio.</span>{" "}
        <span>Powered by the best! ⚡</span>
      </h1>

      {/* Subheading */}
      <p className="text-center max-w-3xl mx-auto text-gray-500 mb-12">
        <span className="font-semibold text-gray-700">nomo AI Index</span> is a
        smart, living portfolio — a constantly optimized selection of trades,
        built by AI trained on the strategies of the top managers on nomo.
      </p>

      <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-20 max-w-6xl mx-auto">
        {/* Left - Avatars and decorations */}
        <div className="relative flex justify-center md:justify-start md:w-1/2">
          {/* Large circles with avatars */}
          <div className="relative w-72 h-72">
            {/* Main big avatar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white shadow-lg overflow-hidden w-28 h-28">
              <img
                src="img-1.avif"
                alt="avatar1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Other smaller avatars */}
            <div className="absolute top-36 left-24 rounded-full border-8 border-white shadow-md overflow-hidden w-26 h-26">
              <img
                src="/img-2.avif"
                alt="avatar2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-12 right-1 rounded-full border-8 border-white shadow-md overflow-hidden w-26 h-26">
              <img
                src="/img-3.avif"
                alt="avatar3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-20 left-1 rounded-full border-8 border-white shadow-md overflow-hidden w-26 h-26">
              <img
                src="/img-4.avif"
                alt="avatar4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 left-10 rounded-full border-8 border-white shadow-md overflow-hidden w-26 h-26">
              <img
                src="/img-5.avif"
                alt="avatar5"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Star shaped decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-100 rounded-2xl opacity-70"></div>

            {/* Sparkles */}
            <div className="absolute top-44 left-40 text-yellow-400 text-xl">✨</div>
            <div className="absolute bottom-24 left-0 text-yellow-400 text-xl">💫</div>
            <div className="absolute top-24 right-12 text-yellow-400 text-xl">🌟</div>
          </div>
        </div>

        {/* Right - Benefits list */}
        <div className="md:w-1/2 flex flex-col">
          <h3 className="font-semibold text-lg mb-6">Key Benefits:</h3>
          <div className="space-y-4">
            {benefits.map(({ text, highlighted }, idx) => (
              <div
                key={idx}
                className={`rounded-lg px-6 py-3 text-sm md:text-base cursor-default ${
                  highlighted
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "border border-blue-400 bg-white text-gray-800"
                }`}
              >
                <strong>
                  {text.split(" ").slice(0, 1).join(" ")}{" "}
                </strong>
                {text.split(" ").slice(1).join(" ")}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer text */}
      <p className="text-center mt-12 text-gray-800 max-w-3xl mx-auto font-semibold">
        We don’t replace traders. <span className="font-bold">We empower them.</span>{" "}
        <span className="text-gray-400 font-normal">
          And give every investor access to their best decisions — in one click. ✔️
        </span>
      </p>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-cyan-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-white"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="none" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="12"
              fill="white"
              fontWeight="bold"
              fontFamily="Arial"
            >
              nm
            </text>
          </svg>
          Invest smarter with nomo AI Index
        </button>
      </div>
    </div>
  );
};

export default AIIndex;
