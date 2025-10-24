import Image from "next/image";

export default function TradingViewSection() {
  return (
    <section className="flex justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#07112B] text-white rounded-3xl p-10 w-full max-w-7xl shadow-lg">
        
        {/* LEFT SECTION */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Advanced charts powered <br /> by{" "}
            <span className="text-[#3B82F6]">TradingView</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Discover nomo&apos;s seamless trading experience powered by{" "}
            <span className="text-[#3B82F6]">TradingView&apos;s</span> advanced charting tools. Stay ahead of the market
            with intuitive features for precise analysis and informed decision-making.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative mt-10 md:mt-0 flex items-center">
          {/* Lightning gradient icon */}
          <div className="absolute -left-16 opacity-80">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
              <path
                d="M40 10 L70 50 H50 L60 90 L20 45 H40 Z"
                stroke="url(#grad)"
                strokeWidth="4"
                fill="none"
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="100" y2="100">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* TradingView Logo */}
          <div className="flex items-center space-x-3 ml-20">
            <Image
              src="/tv-icon.png"
              alt="TradingView Icon"
              width={60}
              height={60}
              className="object-contain"
            />
            <h3 className="text-4xl font-bold">TradingView</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
