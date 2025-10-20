// "use client";
// import React, { useState } from 'react';

// const AssetTypes = () => {
//   // State to manage the active tab
//   const [activeTab, setActiveTab] = useState('Forex');

//   // Content for each tab
//   const tabContent = {
//     Forex: {
//       title: 'Forex',
//       description: 'Trade major currency pairs like EUR/USD or exotic ones like USD/MXN — profit from global currency shifts in a 24/7 market.',
//       image: './img-1.avif',  // Replace with actual image path
//     },
//     Commodities: {
//       title: 'Commodities',
//       description: 'Trade commodities like gold, silver, and oil. Diversify your portfolio with these tangible assets.',
//       image: 'path-to-commodities-image.jpg',  // Replace with actual image path
//     },
//     Stocks: {
//       title: 'Stocks',
//       description: 'Invest in global companies’ stocks. Trade major indices or single stocks with instant access.',
//       image: 'path-to-stocks-image.jpg',  // Replace with actual image path
//     },
//     Crypto: {
//       title: 'Crypto',
//       description: 'Dive into the world of cryptocurrency. Trade Bitcoin, Ethereum, and other digital currencies with ease.',
//       image: 'path-to-crypto-image.jpg',  // Replace with actual image path
//     },
//     Indices: {
//       title: 'Indices',
//       description: 'Trade global indices like the S&P 500, Nasdaq, and FTSE 100 — track the performance of major market sectors.',
//       image: 'path-to-indices-image.jpg',  // Replace with actual image path
//     },
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="text-center">
//         <h2 className="text-3xl font-semibold text-blue-600">One account – 6 asset types</h2>
//         <p className="mt-4 text-gray-700 text-lg">
//           Diversify your investments across a wide range of assets: forex, commodities, stocks, crypto, and indices. With nomo, you can trade all these markets from one platform.
//         </p>
//       </div>

//       {/* Tab Filter Section */}
//       <div className="mt-8 flex justify-center space-x-8">
//         {['Forex', 'Commodities', 'Stocks', 'Crypto', 'Indices'].map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 text-lg font-medium ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Display Content for Active Tab */}
//       <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold text-blue-600">{tabContent[activeTab].title}</h3>
//           <p className="mt-4 text-gray-700">{tabContent[activeTab].description}</p>
//           <div className="mt-6 flex justify-center items-center">
//             <img src={tabContent[activeTab].image} alt={tabContent[activeTab].title} className="w-32 h-32 object-cover rounded-full" />
//           </div>
//         </div>

//         {/* Optional: Additional content can go here, e.g., buttons, links */}
//         <div className="mt-6 md:mt-0 bg-blue-50 p-6 rounded-lg shadow-lg flex items-center justify-center">
//           <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700">
//             Start now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssetTypes;


"use client";
import React, { useState } from 'react';

const AssetTypes = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('Forex');

  // Content for each tab
  const tabContent = {
    Forex: {
      title: 'Forex',
      description: 'Trade major currency pairs like EUR/USD or exotic ones like USD/MXN — profit from global currency shifts in a 24/7 market.',
      image: './img-1.avif',  // Replace with actual image path
    },
    Commodities: {
      title: 'Commodities',
      description: 'Trade commodities like gold, silver, and oil. Diversify your portfolio with these tangible assets.',
      image: './img-1.avif',  // Replace with actual image path
    },
    Stocks: {
      title: 'Stocks',
      description: 'Invest in global companies’ stocks. Trade major indices or single stocks with instant access.',
      image: './img-1.avif',  // Replace with actual image path
    },
    Crypto: {
      title: 'Crypto',
      description: 'Dive into the world of cryptocurrency. Trade Bitcoin, Ethereum, and other digital currencies with ease.',
      image: './img-1.avif',  // Replace with actual image path
    },
    Indices: {
      title: 'Indices',
      description: 'Trade global indices like the S&P 500, Nasdaq, and FTSE 100 — track the performance of major market sectors.',
      image: './img-1.avif',  // Replace with actual image path
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-blue-600">One account – 6 asset types</h2>
        <p className="mt-4 text-gray-700 text-lg">
          Diversify your investments across a wide range of assets: forex, commodities, stocks, crypto, 
          <br></br>
          and indices. With nomo, you can trade all these markets from one platform.
        </p>
      </div>

      {/* Tab Filter Section - Replacing images with Start buttons */}
      <div className="mt-8 flex justify-center space-x-8">
        {['Forex', 'Commodities', 'Stocks', 'Crypto', 'Indices'].map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer ${activeTab === tab ? 'border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab)}
          >
            <button
              className={`px-4 py-2 text-lg font-medium ${activeTab === tab ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600`}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      {/* Display Content for Active Tab */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6">
          <h3 className="text-3xl font-semibold text-blue-600 mt-20">{tabContent[activeTab].title}</h3>
          <p className="mt-4 text-gray-700">{tabContent[activeTab].description}</p>
          <div className="mt-6 flex items-center">
            <button className="bg-blue-600 text-white py-2 px-10 rounded-lg text-lg font-semibold hover:bg-blue-700">
            Start now
          </button>
          </div>
        </div>


        <div className="mt-6 md:mt-0 p-6 flex items-center justify-center">
          <img
              src={tabContent[activeTab].image}
              alt={tabContent[activeTab].title}
              className="w-full h-full rounded-lg shadow-md object-cover"
            />
          {/* <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700">
            Start now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AssetTypes;
