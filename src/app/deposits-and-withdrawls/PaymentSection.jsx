"use client";
import React, { useState } from 'react';
import {
  FaCcVisa,
  FaCcMastercard,
  FaUniversity,
  FaMoneyBillAlt,
  FaBitcoin,
} from 'react-icons/fa';
import { SiBinance, SiPaysafecard, SiOxxo } from 'react-icons/si';

// Payment method → Icon component map
const paymentIcons = {
  'Visa': <FaCcVisa className="text-blue-600 text-4xl" />,
  'MasterCard': <FaCcMastercard className="text-red-600 text-4xl" />,
  'Binance Pay': <SiBinance className="text-yellow-400 text-4xl" />,
  'Crypto': <FaBitcoin className="text-orange-500 text-4xl" />,
  'Bank Transfer': <FaUniversity className="text-gray-700 text-4xl" />,
  'Pago Fácil': <FaMoneyBillAlt className="text-pink-500 text-4xl" />,
  'Rapipago': <FaMoneyBillAlt className="text-purple-500 text-4xl" />,
};

const paymentOptions = {
  Global: ['Binance Pay', 'Crypto'],
  Argentina: ['Visa', 'MasterCard', 'Pago Fácil', 'Rapipago', 'Bank Transfer'],
  Bolivia: ['Binance Pay', 'Crypto', 'Visa', 'OXXO', 'Bank Transfer'],
  Chile: ['Visa', 'Crypto', 'Bank Transfer'],
  Uruguay: ['Crypto', 'Bank Transfer'],
  Peru: ['Visa', 'MasterCard', 'Pago Fácil', 'Rapipago', 'Bank Transfer'],
  Colombia: ['Binance Pay', 'Crypto', 'Visa', 'OXXO', 'Bank Transfer'],
  Costa: ['Visa', 'Crypto', 'Bank Transfer'],
  Dominican: ['Crypto', 'Bank Transfer'],
  Ecuador: ['Visa', 'MasterCard', 'Pago Fácil', 'Rapipago', 'Bank Transfer'],
  Guatemala: ['Binance Pay', 'Crypto', 'Visa', 'OXXO', 'Bank Transfer'],
  Mexico: ['Visa', 'Crypto', 'Bank Transfer'],
  Panama: ['Crypto', 'Bank Transfer'],
};

const countries = [
  "Global", "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Dominican Republic",
  "Ecuador", "Guatemala", "Mexico", "Panama", "Peru", "Uruguay"
];

const PaymentSection = () => {
  const [selectedCountry, setSelectedCountry] = useState('Global');

  const getPaymentMethods = (country) => {
    return paymentOptions[country] || paymentOptions['Global'];
  };

  return (
    <div className="bg-white py-16 px-4 text-center">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        <span role="img" aria-label="rocket">🚀</span> Fast, secure, and convenient <span className="text-blue-600">payments</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        We provide a variety of trusted payment methods tailored to your region, ensuring seamless deposits and withdrawals with maximum security.
      </p>

      {/* Countries */}
      <div className='flex items-center justify-center mb-10'>
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl">
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => setSelectedCountry(country)}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              selectedCountry === country
                ? 'bg-blue-100 text-blue-600 border-blue-600 font-medium'
                : 'bg-gray-100 text-gray-700 border-transparent'
            }`}
          >
            {country}
          </button>
        ))}
      </div>
      </div>
      

      {/* Payment Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {getPaymentMethods(selectedCountry).map((method, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 w-72 shadow-sm hover:shadow-md transition text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              {paymentIcons[method] || <FaMoneyBillAlt className="text-gray-400 text-4xl" />}
            </div>

            {/* Title */}
            <div className="text-xl font-semibold mb-2">{method}</div>

            {/* Description */}
            <p className="text-sm text-gray-600">
              {method === 'Binance Pay'
                ? 'Instant and secure crypto transfers in Binance ecosystem.'
                : method === 'Crypto'
                ? 'Secure blockchain-based payments using cryptocurrencies.'
                : method === 'Visa' || method === 'MasterCard'
                ? 'Widely accepted card payments for fast deposits.'
                : method === 'Pago Fácil' || method === 'Rapipago'
                ? 'Cash payments via local partners in your region.'
                : method === 'OXXO'
                ? 'In-store cash payments at OXXO locations.'
                : method === 'Bank Transfer'
                ? 'Transfer directly from your bank securely.'
                : method === 'Cash Paysafecard'
                ? 'Pay using prepaid vouchers without a bank account.'
                : 'Trusted payment option.'}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
        Get started
      </button>
    </div>
  );
};

export default PaymentSection;
