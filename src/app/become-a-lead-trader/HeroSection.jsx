import Image from "next/image";

export default function BecomeLeadTraderSection() {
  return (
    <section className="text-center mt-20 py-20 px-6 md:px-16 bg-white">
      {/* Heading */}
      <h2 className="text-4xl md:text-7xl font-bold text-[#0D1A3B] mb-6">
        Become a Lead Trader <br />
        at{" "}
        <span className="text-[#0059FF]">
          nomo
        </span>
        <span className="inline-block ml-2 align-middle">🚀</span>
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
        nomo is a cutting-edge <span className="font-semibold text-gray-700">social trading platform</span> designed to support traders and copiers in achieving their financial goals. 
        Our <span className="font-semibold text-gray-700">lead trader program</span> is open to individuals with diverse trading strategies across 
        <span className="font-semibold text-gray-700"> forex, commodities, stocks, cryptocurrencies, and indices</span>. 
        By sharing your strategies, you can attract copiers to follow your trades and earn additional income.
      </p>

      {/* Button */}
      <button className="bg-[#0059FF] text-white font-semibold rounded-xl px-6 py-3 flex items-center justify-center mx-auto shadow-md hover:bg-[#0048D6] transition">
        <Image
          src="/images/nomo-icon.png"
          alt="nomo"
          width={20}
          height={20}
          className="mr-2"
        />
        Become a lead trader now
      </button>

      {/* Illustration */}
      <div className=" flex justify-center">
        <Image
          src="https://nomotrade.com/images/become-a-lead-trader/hero/hero.avif"
          alt="Lead Trader Illustration"
          width={900}
          height={400}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
