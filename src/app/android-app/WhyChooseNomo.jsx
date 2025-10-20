import React from "react";

const WhyChooseNomo = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Why choose <span className="text-blue-600">nomo</span>?
      </h2>

      <div className="flex gap-8">
        <div className="p-6 rounded-2xl shadow-sm  bg-gray-100 hover:shadow-md transition">
          <img src="./img-2.avif" alt="2FA Mockup" className="mb-8 h-[500px]" />
          <h3 className="text-lg font-semibold mb-3">Easy</h3>
          <p className="text-gray-600">
            For both beginners and seasoned traders, nomo makes trading
            straightforward. Our platform is designed to simplify the
            complexities of the market, ensuring a smooth journey for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Secure */}
          <div className="p-6 rounded-2xl shadow-sm  bg-gray-100 hover:shadow-md transition">
            <img
              src="img-3.avif"
              alt="2FA Mockup"
              className="mb-4 h-44 w-full"
            />
            <h3 className="text-lg font-semibold mb-3">Secure</h3>
            <p className="text-gray-600">
              Security is paramount at nomo. With us, you maintain full control
              of your investments. We prioritize robust security measures,
              giving you peace of mind.
            </p>
          </div>

          {/* Fast */}
          <div className="p-6 rounded-2xl shadow-sm  bg-gray-100 hover:shadow-md transition">
            <img
              src="img-4.avif"
              alt="Fast Trading Mockup"
              className="h-44 w-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">Fast</h3>

            <p className="text-gray-600">
              Experience optimal speed with nomo. Our platform ensures swift and
              efficient trade executions for an exceptional trading experience.
            </p>
          </div>

          {/* Interactive */}
          <div className="p-6 rounded-2xl shadow-sm  bg-gray-100 hover:shadow-md transition">
            <img
              src="img-5.avif"
              alt="Interactive Trade Mockup"
              className="h-44 w-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">Interactive</h3>
            <p className="text-gray-600">
              Engage with your trades like never before at nomo. Our platform is
              designed to make every interaction enjoyable and exciting.
            </p>
          </div>

          {/* Copy Trading */}
          <div className="p-6 rounded-2xl shadow-sm  bg-gray-100 hover:shadow-md transition">
            <img
              src="img-5.avif"
              alt="Copy Trade Mockup"
              className="h-44 w-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">Powerful</h3>
            <p className="text-gray-600 mb-4">
              Set up a limit per trade to adjust the investment size in case a
              lead trader opens large trades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNomo;
