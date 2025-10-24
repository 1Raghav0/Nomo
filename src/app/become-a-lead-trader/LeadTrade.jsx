import Image from "next/image";

export default function WhoIsLeadTraderSection() {
  return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-16 rounded-3xl mx-6 md:mx-20 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1A3B] mb-6">
            Who is a{" "}
            <span className="text-[#0059FF]">nomo</span> Lead Trader?
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
            A <span className="font-semibold text-gray-800">“lead trader”</span> is a trader on nomo who shares their trading strategy, allowing others to copy their trades. 
            Each trade action performed by the lead trader is{" "}
            <span className="font-bold text-gray-800">automatically copied</span>{" "}
            to the accounts of the copiers who follow them, enabling copiers to benefit from the lead trader's decisions.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💡</span>
              <p className="text-lg font-semibold text-gray-900">
                Ready to get started?
              </p>
            </div>

            <button className="bg-[#0059FF] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center shadow-md hover:bg-[#0048D6] transition">
              <Image
                src=""
                alt="nomo"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign up at nomo
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src="https://nomotrade.com/images/become-a-lead-trader/who-is-lead/copy-paste.jpg"
            alt="Lead Trader Copy Paste Illustration"
            width={600}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
