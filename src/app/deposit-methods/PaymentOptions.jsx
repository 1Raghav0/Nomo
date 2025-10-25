import React from 'react';

const PaymentOptions = () => {
  return (
    <>
    <div className="bg-white px-6 py-16">
      <div className="max-w-screen-xl mx-auto space-y-8">
        {/* Title and Features */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center"><span className='text-blue-500'>Why choose </span>our payment options?</h2>
          <div className="flex justify-center gap-12">
            <div className="flex bg-gray-100 px-4 py-4 rounded-xl gap-4">
              <span className="text-green-500 text-xl">✔️</span>
              <span className="ml-2 text-gray-600">Instant or same-day deposits and withdrawals</span>
            </div>
            <div className="flex bg-gray-100 px-4 py-4 rounded-xl gap-4">
              <span className="text-green-500 text-xl">✔️</span>
              <span className="ml-2 text-gray-600">No hidden fees – transparent and fair transactions</span>
            </div>
            <div className="flex bg-gray-100 px-4 py-4 rounded-xl gap-4">
              <span className="text-green-500 text-xl">✔️</span>
              <span className="ml-2 text-gray-600">Multiple methods to suit your preferences</span>
            </div>
            <div className="flex bg-gray-100 px-4 py-4 rounded-xl gap-4">
              <span className="text-green-500 text-xl">✔️</span>
              <span className="ml-2 text-gray-600">Secure processing with leading financial institutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='bg-blue-600 text-center px-6 py-10'>
            {/* Payment Providers */}
        <div className="">
          <h3 className="text-3xl font-semibold text-white pb-4">Trusted payment providers:</h3>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center justify-center bg-blue-500 text-white rounded-lg py-2 px-4">
              <span className="font-bold">4on</span> Payments
            </div>
            <div className="flex items-center text-lg justify-center bg-blue-500 text-white rounded-lg py-2 px-4">
              <span className="font-bold">R</span> Pay Retailers
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-white text-xl">
          <p>Enjoy smooth and secure transactions while focusing on what matters – your trading success! 🚀</p>
        </div>
        </div>
    </>
    
  );
};

export default PaymentOptions;
