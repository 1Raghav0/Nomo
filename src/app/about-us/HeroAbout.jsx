"use client";
import Image from "next/image";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { FiPlayCircle } from "react-icons/fi";

export default function NomoSection() {
  return (
    <section className="bg-white w-full flex flex-col items-center mt-30">
      {/* ======= Top Rating Strip ======= */}
      <div className="w-full bg-gray-200 border-b border-gray-200 px-4 flex flex-wrap justify-center items-center gap-3 text-gray-600 text-sm">
        <span className="font-semibold text-gray-800">Great</span>
        <span>4.2 out of 5</span>
        {/* Trustpilot stars image */}
        <Image
          src="/trustpilot-stars.png"
          alt="Trustpilot Rating"
          width={100}
          height={20}
          className="inline-block"
        />
        <span className="font-medium text-gray-800">Rating SCTA</span>
        <Image
          src="/stars-yellow.png"
          alt="Star Rating"
          width={80}
          height={20}
          className="inline-block"
        />
        <span>
          SCTA Score <strong>4.8</strong> | Based on{" "}
          <strong>2024 review</strong>
        </span>
      </div>

      {/* ======= Main Section ======= */}
      <div className="py-15 px-4 md:px-8 lg:px-16 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-3xl max-w-xl md:text-6xl font-extrabold text-center text-gray-900 mb-4">
          <span className="text-blue-600">nomo</span> — trading made simple
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-center text-2xl max-w-3xl mb-10">
          From managing your investments to copy trading other traders, nomo
          provides a seamless experience that empowers you to achieve more with
          your investments.
        </p>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg mb-16 transition duration-200">
          Join us
        </button>

        {/* ======= Cards Section ======= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center items-end w-full max-w-6xl">

          {/* --- Card 1 --- */}
          <div className="bg-[#0B113B] text-white rounded-2xl p-6 flex flex-col justify-between w-full max-w-[260px] h-[380px]">
            <span className="bg-purple-700 text-xs px-3 py-1 rounded-full w-fit mb-4">
              Top of the month
            </span>

            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://nomotrade.com/_next/image?url=%2Fimages%2Fabout-us%2FtradingCard1.avif&w=1080&q=75"
                alt="Alex Choo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">Alex Choo</p>
                <span className="text-xs bg-blue-600 px-2 py-0.5 rounded-md">
                  Best ROI
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm">30D copiers profit</p>
            <p className="text-green-400 text-xl font-bold">$204,033.20</p>
            <div className="mt-3">
              <p className="text-gray-300 text-sm">ROI</p>
              <p className="text-green-400 font-semibold">22.3%</p>
            </div>
          </div>

          {/* --- Card 2 --- */}
          <div className="w-full max-w-[260px] h-[320px]">
            <Image
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Fabout-us%2Fcard2.avif&w=1080&q=75"
              alt="Man using phone"
              width={300}
              height={300}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          {/* --- Card 3 --- */}
          <div className="bg-[#EEF4FF] rounded-2xl p-6 flex flex-col justify-center items-start w-full max-w-[260px] h-[180px]">
            <div className="flex items-start gap-2">
              <HiOutlineHandRaised className="text-3xl text-blue-600 mt-1" />
              <p className="text-gray-800 font-semibold leading-snug text-lg">
                Intelligent social trading is here
              </p>
            </div>
          </div>

          {/* --- Card 4 --- */}
          <div className="bg-[#5E2CED] text-white rounded-2xl p-6 flex flex-col gap-4 w-full max-w-[260px] h-[320px]">
            <h4 className="font-semibold text-lg">Webinars and workshops</h4>

            <div className="bg-white text-gray-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">Exclusive VIP Webinar</p>
                <p className="text-xs text-gray-500">Today, 15:30 - 16:00</p>
              </div>
              <FiPlayCircle className="text-blue-600 text-2xl" />
            </div>

            <div className="bg-green-100 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">
                  Candlesticks Meet Averages
                </p>
                <p className="text-xs text-gray-600">
                  Tomorrow, 16:30 - 17:30
                </p>
              </div>
              <FiPlayCircle className="text-green-700 text-2xl" />
            </div>
          </div>

          {/* --- Card 5 --- */}
          <div className="relative w-full max-w-[260px] h-[380px]">
            <Image
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Fabout-us%2Fcard5.avif&w=1080&q=75"
              alt="Confident trader"
              width={300}
              height={300}
              className="rounded-2xl object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent rounded-2xl">
              <p className="text-white font-semibold text-lg leading-snug">
                Trade with confidence,<br />copy with ease
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
