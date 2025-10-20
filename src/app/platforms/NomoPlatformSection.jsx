import React from 'react';

const NomoPlatformSection = () => {
  return (
    <section className="w-full bg-white mt-10">
      {/* Top Content */}
      <div className="text-center px-4 md:px-10 pt-12 md:pt-20">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          One account,
          <br></br>
          <span className="text-blue-600"> unlimited opportunities</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
          Trade effortlessly with <span className="font-semibold text-blue-600">nomo</span>. Access both <span className="font-semibold text-blue-600">nomo Web</span> and <span className="font-semibold text-blue-600">MT5</span> with a single account and unlock your full trading potential.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-10 md:mt-16 px-4">
        <img 
          src="/hero.avif" 
          alt="nomo platform" 
          className="w-full max-w-4xl h-auto"
        />
      </div>

      {/* Bottom Content */}
      <div className="bg-blue-600 text-white mt-10 md:mt-16 py-10 flex items-center justify-between px-10">
        <p className="max-w-4xl text-left md:text-lg leading-relaxed">
          With <span className="font-bold">nomo</span>, you don’t need to choose between platforms.
          Use your <span className="font-bold">nomo</span> account to trade via 
          <span className="font-bold"> nomo Web</span> or <span className="font-bold">MT5</span> — whichever fits your style.
          Whether you’re just getting started or ready for advanced tools, 
          <span className="font-bold"> nomo</span> gives you seamless access to both platforms with just one account.
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition">
          Register now
        </button>
      </div>
    </section>
  );
};

export default NomoPlatformSection;
