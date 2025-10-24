import Image from "next/image";
import React from "react";

const AffiliateHero = () => {
  return (
    <>
    <section className="w-full bg-white py-16 px-6 mx-20 mt-20 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 rounded-3xl">
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Partner with <br /> a Rapidly Growing <br /> Broker
        </h1>
        <p className="text-gray-500 text-lg mt-5">
          Monetize your audience with{" "}
          <span className="text-blue-600 font-medium">nomo.</span> Content
          creators, influencers, and platforms earn commissions on the community
          they bring to nomo.
        </p>

        <button className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Image
            src="https://nomotrade.com/_next/image?url=%2Fimages%2Faffiliates%2Fhero.avif&w=1920&q=75"
            alt="nomo icon"
            width={20}
            height={20}
          />
          Become an affiliate
        </button>

        {/* Ratings */}
        <div className="mt-10 flex flex-wrap gap-6">
          {/* Rating Card */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-5 w-64">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="https://nomotrade.com/images/academy/discover/hero/rating.avif"
                alt="Rating SCTA"
                width={40}
                height={40}
              />
              <p className="font-semibold text-gray-800">Rating SCTA</p>
            </div>
            <p className="text-sm text-gray-500">
              SCTA Score <span className="font-semibold">4.8</span> | Based on{" "}
              <span className="font-semibold">2024</span> reviews
            </p>
            <div className="flex mt-2 text-yellow-400">
              {"★★★★★"}
            </div>
          </div>

          {/* Award Card */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-5 w-64">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="https://nomotrade.com/images/academy/index/hero/heroCard1.avif"
                alt="Award"
                width={40}
                height={40}
              />
              <p className="font-semibold text-gray-800 leading-tight">
                Best Educational Platform 2023
                <br />
                <span className="text-sm text-gray-500">SCTA Awards</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 relative flex justify-center">
        <div className="bg-gray-50 rounded-[2rem] p-10 relative">
          <Image
            src="https://nomotrade.com/_next/image?url=%2Fimages%2Faffiliates%2Fhero.avif&w=1920&q=75"
            alt="Affiliate Broker"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
    <div className="w-full mt-12 lg:mt-16 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 min-w-max animate-scroll">
          <div className="bg-blue-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-gray-200 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-green-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-purple-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
          <div className="bg-orange-100 px-5 py-3 rounded-xl font-medium whitespace-nowrap w-68">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <span>Demate Account</span>
                    <span className="bg-amber-300 px-2 rounded-sm">Free</span>
                </div>
                <div>
                    <p className="text-sm">Practice with $100</p>
                </div>
            </div>
          </div>
        </div>
        </div>
        </>
  );
};

export default AffiliateHero;
