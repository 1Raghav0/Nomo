"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse mt-25 lg:flex-row items-center justify-between bg-[#0066FF] text-white px-6 lg:px-20 py-16 lg:py-28 overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 ml-20 z-10">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          Our free trading <br />
          education is your <br />
          key to success
        </h1>
        <p className="text-lg text-blue-100 mb-8 max-w-lg">
          Explore financial markets, like stocks, indices, economic trends,
          techniques in trading, and different chart types — everything you need
          to start.
        </p>

        {/* Start Learning Button */}
        <button className="bg-[#28A745] hover:bg-[#23923d] text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition">
          <span className="text-xl">Ⓜ️</span> Start learning
        </button>

        {/* Info Boxes */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <div className="bg-[#2E7BFF] rounded-xl p-4 flex items-center gap-3 w-full sm:w-1/2 shadow-md">
            <span className="text-2xl">💵</span>
            <div>
              <p className="font-semibold">$10,000</p>
              <p className="text-sm text-blue-100">test funds for trading</p>
            </div>
          </div>
          <div className="bg-[#2E7BFF] rounded-xl p-4 flex items-center gap-3 w-full sm:w-1/2 shadow-md">
            <span className="text-2xl">🎥</span>
            <div>
              <p className="font-semibold">10+</p>
              <p className="text-sm text-blue-100">platform video tutorials</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0">
        <div className="relative w-[500px] lg:w-[680px]">
          <Image
            src="https://nomotrade.com/_next/image?url=%2Fimages%2Feducation%2Findex-page%2Flearn-hero.avif&w=1920&q=75" // replace with your actual image (e.g., public/hero-person.png)
            alt="Trading Education"
            width={600}
            height={600}
            className="object-contain relative z-10"
          />

          {/* Floating icons animation */}
          {["🟦", "🟥", "🟩", "🟨", "🟪"].map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
