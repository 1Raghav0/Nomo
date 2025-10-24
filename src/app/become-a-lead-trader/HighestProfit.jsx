"use client";
import Image from "next/image";

export default function LeadersSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1A3B] mb-3">
          Leaders with Highest Profit for Copiers{" "}
          <span className="inline-block align-middle text-2xl">💹</span>
        </h2>
        <p className="text-gray-500 text-base max-w-2xl mx-auto">
          Strategies that have the highest number of total investors’ funds invested:
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden">
          <div className="bg-gradient-to-b from-[#FFF8F2] to-white p-5 border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Image
                  src="https://nomotrade.com/_next/image?url=%2Fimages%2Fcopy-the-best%2Fperforming%2Fcard1.avif&w=128&q=75"
                  alt="user1"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#0D1A3B] text-base">
                    IotalInvest
                  </h3>
                  <p className="text-sm text-gray-500">1450 Followers</p>
                </div>
              </div>
              <button className="bg-[#0059FF] text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#0048D6] transition">
                Copy
              </button>
            </div>
            <p className="text-xs text-green-600 mt-2 font-medium">↑ +1.8%</p>
          </div>

          <div className="p-5 border-b">
            <div className="flex justify-between text-[#0D1A3B] font-semibold mb-1">
              <p className="text-green-600 text-base">87,521.12 USD</p>
              <p className="text-base">86%</p>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <p>Profit for copiers</p>
              <p>ROI</p>
            </div>
          </div>

          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                📈 1
              </span>
              <span className="text-xs bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-md font-medium">
                High-frequency
              </span>
            </div>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              👤132/150
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden">
          <div className="bg-gradient-to-b from-[#F2F8FF] to-white p-5 border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Image
                  src="https://nomotrade.com/_next/image?url=%2Fimages%2Fcopy-the-best%2Fperforming%2Fcard2.avif&w=128&q=75"
                  alt="user2"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#0D1A3B] text-base">
                    ZetaZenith
                  </h3>
                  <p className="text-sm text-gray-500">720 Followers</p>
                </div>
              </div>
              <button className="bg-[#0059FF] text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#0048D6] transition">
                Copy
              </button>
            </div>
            <p className="text-xs text-red-500 mt-2 font-medium">↓ -1.2%</p>
          </div>

          <div className="p-5 border-b">
            <div className="flex justify-between text-[#0D1A3B] font-semibold mb-1">
              <p className="text-green-600 text-base">43,679.5 USD</p>
              <p className="text-base">78%</p>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <p>Profit for copiers</p>
              <p>ROI</p>
            </div>
          </div>

          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                📊 1
              </span>
              <span className="text-xs bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-md font-medium">
                Profit-generator
              </span>
            </div>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              👤115/150
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden">
          <div className="bg-gradient-to-b from-[#FFF7EE] to-white p-5 border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Image
                  src="https://nomotrade.com/_next/image?url=%2Fimages%2Fcopy-the-best%2Fperforming%2Fcard3.avif&w=128&q=75"
                  alt="user3"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#0D1A3B] text-base">
                    GammaGains
                  </h3>
                  <p className="text-sm text-gray-500">980 Followers</p>
                </div>
              </div>
              <button className="bg-[#0059FF] text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#0048D6] transition">
                Copy
              </button>
            </div>
            <p className="text-xs text-green-600 mt-2 font-medium">↑ +0.9%</p>
          </div>

          <div className="p-5 border-b">
            <div className="flex justify-between text-[#0D1A3B] font-semibold mb-1">
              <p className="text-green-600 text-base">123,767.43 USD</p>
              <p className="text-base">82%</p>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <p>Profit for copiers</p>
              <p>ROI</p>
            </div>
          </div>

          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                📈 1
              </span>
              <span className="text-xs bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-md font-medium">
                Best ROI
              </span>
            </div>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              👤105/150
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center">
        <button className="bg-[#0059FF] text-white px-7 py-3 rounded-lg font-semibold text-base flex items-center gap-2 shadow-md hover:bg-[#0048D6] transition">
          💼 Become a lead trader
        </button>
      </div>
    </section>
  );
}
