"use client";
import Image from "next/image";

export default function WhyChooseNomo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold text-[#0A0F2C] mb-12">
          Why choose <span className="text-blue-600">nomo?</span>
        </h2>

        {/* Grid with equal column height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 h-full">
            {/* Trader Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-3">
                <Image
                  src="/profile.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-800">Miklsontrade</p>
                  <p className="text-sm text-gray-400">Spots left 125/150</p>
                </div>
                <div className="ml-auto text-sm text-gray-500">
                  Risk score{" "}
                  <span className="text-green-500 font-semibold">2</span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-3 flex gap-3">
                <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
                  30d ROI 76%
                </span>
                <span className="text-sm text-gray-600">
                  Profit sharing <b>5%</b>
                </span>
              </div>

              <p className="text-sm text-gray-700 mt-2">
                Average trade <b>$1,193.04</b>
              </p>

              {/* Modes */}
              <div className="flex gap-2 mt-4 bg-gray-50 rounded-xl p-2">
                <button className="flex-1 py-2 text-sm text-gray-500 font-medium bg-white rounded-lg shadow-sm">
                  Smart mode
                </button>
                <button className="flex-1 py-2 text-sm text-gray-800 font-semibold bg-white rounded-lg shadow-sm">
                  Advanced mode
                </button>
              </div>

              {/* Investment Multiplier */}
              <div className="mt-5">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Investment multiplier
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  Choose how much would you like to invest in each copied trade
                  compared to the lead trader
                </p>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white text-sm font-medium py-3 rounded-xl">
                    Equal x1
                  </button>
                  <button className="flex-1 bg-white border text-sm text-gray-600 py-3 rounded-xl">
                    Double x2
                  </button>
                  <button className="flex-1 bg-white border text-sm text-gray-600 py-3 rounded-xl">
                    Triple x3
                  </button>
                </div>
              </div>
            </div>

            {/* Easy Section */}
            <div className="flex-1 bg-white p-4 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                For both beginners and seasoned traders, nomo makes trading
                straightforward. Our platform is designed to simplify the
                complexities of the market, ensuring a smooth journey for
                everyone.
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-6 h-full">
            {/* Security Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <span className="text-blue-600 text-lg">🔒</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    2-factor authentication
                  </p>
                  <p className="text-sm text-gray-500">
                    Your account is protected with 2FA
                  </p>
                </div>
              </div>
              <div className="bg-red-100 text-red-600 mt-3 rounded-lg text-center py-2 text-sm font-medium">
                Disable 2FA
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Secure
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Security is paramount at nomo. With us, you maintain full
                  control of your investments. We prioritize robust security
                  measures, giving you peace of mind.
                </p>
              </div>
            </div>

            {/* Stop Loss Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800 mb-2">
                  Stop loss <span className="text-red-500 font-semibold">-10%</span>
                </p>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {["None", "-10%", "-50%", "-100%", "Custom"].map((item) => (
                    <button
                      key={item}
                      className={`text-sm px-3 py-1 border rounded-lg ${
                        item === "-10%"
                          ? "bg-gray-100 text-gray-800"
                          : "text-gray-500"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between items-center border-t pt-3 text-sm">
                  <div>
                    <p className="text-gray-500">Target price</p>
                    <p className="font-medium">158.24</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Profit amount</p>
                    <p className="font-medium text-red-500">-12.46</p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Powerful
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Unlock the full potential of trading with nomo. Our platform
                  boasts advanced features, empowering you to navigate the
                  market with precision and intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 h-full">
            {/* Investment Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Investment
                </h4>
                <div className="flex justify-between items-center border rounded-xl p-3">
                  <span className="text-gray-500 text-lg">$</span>
                  <p className="text-sm text-gray-400">
                    Available <b>$102,493.00</b>
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Fast</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Experience optimal speed with nomo. Our platform ensures swift
                  and efficient trade executions for an exceptional trading
                  experience.
                </p>
              </div>
            </div>

            {/* Trade Size Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Trade size
                </h4>
                <div className="flex justify-between items-center border rounded-xl p-3">
                  <span className="text-gray-800 font-medium text-base">
                    1 shares
                  </span>
                  <p className="text-sm text-gray-400">
                    Available <b>$102,493.00</b>
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Interactive
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Engage with your trades like never before at nomo. Our
                  platform is designed to make every interaction enjoyable and
                  exciting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
