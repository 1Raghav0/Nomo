import React from "react";

const ThirdSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* 1️⃣ First Block */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Fabout-us%2Fmission%2Fimg-2.avif&w=640&q=75" // replace with your image path
              alt="VC Fund Building"
              className="rounded-2xl w-full h-[350px] object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900">
              Backed by a leading private{" "}
              <span className="text-blue-600">VC Fund</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Our platform is supported by a trusted private VC fund, providing
              the financial strength to deliver continuous growth and
              innovation.
            </p>
          </div>
        </div>

        {/* 2️⃣ Second Block */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900">
              Funds are kept in{" "}
              <span className="text-blue-600">segregated bank accounts</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Your funds are securely stored in segregated accounts, separate
              from company funds, ensuring they are fully protected.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Fabout-us%2Fmission%2Fimg-bank.avif&w=640&q=75" // replace with your image path
              alt="Bank Building"
              className="rounded-2xl w-full h-[350px] object-cover"
            />
          </div>
        </div>

         {/* 1️⃣ Third Block */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://nomotrade.com/_next/image?url=%2Fimages%2Fabout-us%2Fmission%2Fimg-3.avif&w=640&q=75" // replace with your image path
              alt="VC Fund Building"
              className="rounded-2xl w-full h-[350px] object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900">
              SSl{" "}
              <span className="text-blue-600">encryption</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              We use SSL encryption to protect your personal and financial data, ensuring a safe and secure trading environment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThirdSection;
