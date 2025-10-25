"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaHourglassHalf } from "react-icons/fa6";

export default function InvestCTASection() {
  return (
    <section className="bg-[#0056fb] rounded-3xl mx-auto max-w-6xl mt-16 px-6 sm:px-10 py-12 sm:py-16 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left content */}
        <div className="text-white md:w-[45%] space-y-6">
          <h1 className="text-[2.5rem] sm:text-[3rem] font-bold leading-tight">
            Do you want to <br /> start investing <br /> online?
          </h1>

          <button className="flex items-center gap-3 bg-white text-black font-medium px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0056fb] text-white font-bold text-sm">
              m
            </span>
            Begin investing in a smarter way
            <FiArrowRight className="text-[#0056fb] w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-sm text-white/90">
            <FaHourglassHalf className="text-yellow-300 w-4 h-4" />
            Registration takes less than 1 minute
          </div>
        </div>

        {/* Right image */}
        <div className="relative md:w-[50%] flex justify-center">
          <Image
            src="https://nomotrade.com/_next/image?url=%2Fimages%2Fcopy-the-best%2Fstart-investing%2Fimg.avif&w=828&q=75"
            alt="Invest Mockup"
            width={500}
            height={400}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
