// import React from "react";

// const TryTradingSection = () => {
//   return (
//     <>
//     <section className="p-8 ">
//         <div
//       className="relative flex flex-col items-center justify-between text-center px-6 py-16 md:py-24 rounded-xl overflow-hidden min-h-screen"
//       style={{
//         backgroundColor: "#0052FF",
//         backgroundImage:
//           "url('./img-3.avif')", // You can replace this with your own background pattern
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Content */}
//       <div className="max-w-2xl mx-auto text-white z-10">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Try trading with nomo, risk-free!
//         </h2>
//         <p className="text-base md:text-lg opacity-90 leading-relaxed">
//           Every new nomo account comes with a $10,000 virtual portfolio,
//           allowing you to practice trading across all the financial markets our
//           platform offers in real time. Easily switch between the demo and live
//           trading modes whenever you like to train your trading skills.
//         </p>
//       </div>

//       {/* CTA Button */}
//       <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition flex items-center gap-2 cursor-pointer">
//         <span>Try trading now</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="currentColor"
//           className="w-4 h-4"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//         </svg>
//       </button>

//       {/* Optional: glowing overlay or gradient effect */}
//       <div className="absolute inset-0 bg-blue-700/20 backdrop-blur-[1px]"></div>
//     </div>
//     </section>
    
//     </>
    
//   );
// };

// export default TryTradingSection;


import React from "react";

const TryTradingSection = () => {
  return (
    <section className="p-8">
      <div
        className="flex flex-col items-center justify-between text-center px-6 py-16 md:py-24 rounded-xl overflow-hidden min-h-screen"
        style={{
          backgroundColor: "#0052FF",
          backgroundImage: "url('./img-3.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Content */}
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try trading with nomo, risk-free!
          </h2>
          <p className="text-base md:text-lg opacity-90 leading-relaxed mb-8">
            Every new nomo account comes with a $10,000 virtual portfolio,
            allowing you to practice trading across all the financial markets
            our platform offers in real time. Easily switch between demo and
            live trading modes whenever you like to train your trading skills.
          </p>

          {/* CTA Button */}
          
        </div>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:text-white hover:bg-blue-800 transition cursor-pointer">
            <span>Try trading now</span>
          </button>
      </div>
    </section>
  );
};

export default TryTradingSection;
