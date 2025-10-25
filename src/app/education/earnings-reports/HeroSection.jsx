"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EconomicCalendar() {
  return (
    <section className=" mt-20 ml-30 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Left Content */}
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-6xl font-bold text-[#0A142F] leading-tight">
          Stay updated with the upcoming key earnings reports
        </h2>
        <p className="text-gray-500 mt-6 text-lg leading-relaxed">
          Follow the latest earnings announcements to build your investment strategy with nomo. Our platform provides real-time updates to help you stay informed and make smart decisions.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-flex items-center gap-2 bg-[#0051FF] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#0044d6] transition"
        >
          <span className="bg-white text-[#0051FF] rounded-full w-6 h-6 flex items-center justify-center font-bold">
            m
          </span>
         See the upcoming reports
        </motion.button>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12 md:mt-0 md:w-1/2 flex justify-center mr-20"
      >
        <Image
          src="https://nomotrade.com/_next/image?url=%2Fimages%2Fearnings-reports%2Fhero%2Fhero.avif&w=1920&q=75"
          alt="Economic Calendar Illustration"
          width={600}
          height={400}
          priority
        />
      </motion.div>
    </section>
  );
}
