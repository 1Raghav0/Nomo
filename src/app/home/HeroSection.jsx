// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 relative overflow-hidden">
      
//       {/* LEFT SIDE */}
//       <div className="lg:w-1/2 w-full space-y-6">
//         <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//           Powered by AI
//         </span>

//         <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//           Discover smarter,{" "}
//           <span className="text-purple-600">simpler investing</span>
//         </h1>

//         <p className="text-gray-600 max-w-md">
//           A fully AI-managed portfolio built from the strategies of nomo’s top traders.
//           Steady profits. One-click simplicity.
//         </p>

//         <div>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
//             Try nomo AI Index
//           </button>
//           <p className="text-sm text-gray-500 mt-2">
//             Registration takes less than 1 minute
//           </p>
//         </div>

//         {/* Bottom auto-scroll cards */}
//         <div className="mt-10 overflow-x-auto scrollbar-hide">
//           <div className="flex gap-4 min-w-max animate-scroll">
//             <div className="bg-blue-100 px-5 py-3 rounded-md font-medium">10+ Fast Payment Methods</div>
//             <div className="bg-orange-100 px-5 py-3 rounded-md font-medium">Personal Advisor 24/7</div>
//             <div className="bg-purple-100 px-5 py-3 rounded-md font-medium">Steady Profits</div>
//             <div className="bg-green-100 px-5 py-3 rounded-md font-medium">One Click Simplicity</div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center relative">
//         <img
//           src="/img.webp"
//           alt="Hero Illustration"
//           className="max-w-full lg:max-w-md"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";

const HeroSection = () => {
  return (
    <>
    <section className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 lg:pt-24 relative overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 w-full space-y-6">
        {/* Badge */}
        <div className="flex gap-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          New
        </span>
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent px-3 py-1 rounded-full text-md font-semibold">
  Powered by AI
</span>

        </div>
        

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Discover smarter,{" "}
          <span className="text-purple-600">simpler investing</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-md">
          A fully AI-managed portfolio built from the strategies of nomo’s top traders.
          Steady profits. One-click simplicity.
        </p>

        {/* CTA Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
            Try nomo AI Index
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Registration takes less than 1 minute
          </p>
        </div>
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
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 w-full h-[450px] mt-12 lg:mt-0 flex justify-center relative">
        <img
          src="/img.webp"
          alt="Hero Illustration"
          className="max-w-full lg:max-w-md"
        />
      </div>

      {/* BOTTOM SCROLL SECTION */}
      
    </section>

    {/* <div className="w-full mt-12 overflow-x-auto scrollbar-hide lg:hidden">
  <div className="flex gap-4 min-w-max animate-scroll">
    <div className="bg-blue-100 px-5 py-3 rounded-md font-medium whitespace-nowrap">
      10+ Fast Payment Methods
    </div>
    <div className="bg-orange-100 px-5 py-3 rounded-md font-medium whitespace-nowrap">
      Personal Advisor 24/7
    </div>
    <div className="bg-purple-100 px-5 py-3 rounded-md font-medium whitespace-nowrap">
      Steady Profits
    </div>
    <div className="bg-green-100 px-5 py-3 rounded-md font-medium whitespace-nowrap">
      One Click Simplicity
    </div>
    <div className="bg-pink-100 px-5 py-3 rounded-md font-medium whitespace-nowrap">
      Smart AI Indexing
    </div>
  </div>
</div> */}

    </>
    
  );
};

export default HeroSection;
