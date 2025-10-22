import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-white mt-10">
      {/* Top Content */}
      <div className="text-center px-4 md:px-10 pt-12 md:pt-20">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Deposits and withdrawals
        </h2>
        <p className="text-gray-600 mt-4 max-w-4xl mx-auto text-base md:text-lg">
          Manage your funds seamlessly with nomo's diverse payment options. From cards to bank transfers, enjoy swift and secure deposits and withdrawals. Trade confidently and conveniently with
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-10 md:mt-16 px-4">
        <img 
          src="/depositsAndWithdrawals.avif" 
          alt="deposits And Withdrawals" 
          className="w-full max-w-4xl h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
