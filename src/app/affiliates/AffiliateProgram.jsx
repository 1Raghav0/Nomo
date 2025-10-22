import React from "react";
import { FaRegCreditCard, FaLink, FaChartLine } from "react-icons/fa";

const AffiliateProgram = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          How does the <span className="text-blue-600">nomo</span> Affiliate Program work?
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-start text-left hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaRegCreditCard className="text-blue-600 text-xl" />
              </div>
              <div className="text-blue-600 font-bold text-lg">1</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Sign up and apply</h3>
            <p className="text-gray-600 text-sm">
              Join our affiliate program by submitting your application. Our team will assess your eligibility and ensure you meet our criteria.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-start text-left hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaLink className="text-blue-600 text-xl" />
              </div>
              <div className="text-blue-600 font-bold text-lg">2</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Create and share your Affiliate Link</h3>
            <p className="text-gray-600 text-sm">
              Share your unique affiliate link with your audience and grow your community.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-start text-left hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaChartLine className="text-blue-600 text-xl" />
              </div>
              <div className="text-blue-600 font-bold text-lg">3</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Earn up to 70% or $500 CPA</h3>
            <p className="text-gray-600 text-sm">
              Receive up to 70% commission or up to $500 for each user who signs up through your affiliate link and completes the required actions.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
            Become an affiliate
          </button>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProgram;
