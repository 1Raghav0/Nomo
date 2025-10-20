import React from "react";

const NomoCopyTrading = () => {
  return (
    <>
    <section>
      <div className="bg-white py-12 px-6 md:px-16 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* left Image*/}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Main Image */}
          <img
            src="./man.avif"
            alt="People trading together"
            className="rounded-xl shadow-lg w-full max-w-xl object-cover"
          />
        </div>

        {/* right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is {""}
            <span className="text-blue-500">nomo </span>
            copytrading?
          </h2>

          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Step into the simplicity of trading with copytrading – it's as easy
            as 1-2-3! <br />
            Choose expert traders, and like magic, your investments mirror their
            every move automatically!
          </p>

          <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Discover more assets
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
        {/* Card 1 */}
        <div className="bg-pink-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Copy traders who trade Stocks, Commodities & more
            </h3>
            <div className="flex items-ceter justify-end">
              <img
              src="./img-1.avif"
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover text-right"
            />
            </div>
            
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Copy traders who trade Stocks, Commodities & more
            </h3>
            <div className="flex items-ceter justify-end">
              <img
              src="./img-1.avif"
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover text-right"
            />
            </div>
            
          </div>
        </div>

        {/* Card 3 (Image Card) */}
        <div className="bg-green-50 rounded-2xl p-8 shadow-sm flex flex-col justify-between text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Copy traders who trade Stocks, Commodities & more
            </h3>
            <div className="flex items-ceter justify-end">
              <img
              src="./img-1.avif"
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover text-right"
            />
            </div>
            
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
};

export default NomoCopyTrading;
