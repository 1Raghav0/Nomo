import React from 'react';

const PriceTable = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-200 text-gray-800">
              <th className="p-4 text-left">Plan</th>
              <th className="p-4 text-left">Starter</th>
              <th className="p-4 text-left">Bronze</th>
              <th className="p-4 text-left">Silver</th>
              <th className="p-4 text-left">Gold</th>
              <th className="p-4 text-left">Diamond</th>
              <th className="p-4 text-left">Crystal Black</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 font-semibold">Net deposits $</td>
              <td className="p-4">-</td>
              <td className="p-4">7 250</td>
              <td className="p-4">1 000</td>
              <td className="p-4">5 000</td>
              <td className="p-4">20 000</td>
              <td className="p-4">50 000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-4 font-semibold">Welcome bonus 50%</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Withdrawal fee</td>
              <td className="p-4">5$</td>
              <td className="p-4">4$</td>
              <td className="p-4">3$</td>
              <td className="p-4">2$</td>
              <td className="p-4">1$</td>
              <td className="p-4">0$</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-4 font-semibold">Spread</td>
              <td className="p-4">Standard spread</td>
              <td className="p-4">Standard spread</td>
              <td className="p-4">Low spread</td>
              <td className="p-4">Extra-low spread</td>
              <td className="p-4">Minimum spread</td>
              <td className="p-4">Minimum spread</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Max leaders to copy</td>
              <td className="p-4">1</td>
              <td className="p-4">3</td>
              <td className="p-4">10</td>
              <td className="p-4">unlimited</td>
              <td className="p-4">unlimited</td>
              <td className="p-4">unlimited</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-4 font-semibold">Training course</td>
              <td className="p-4">1 lesson</td>
              <td className="p-4">full access</td>
              <td className="p-4">full access</td>
              <td className="p-4">full access</td>
              <td className="p-4">full access</td>
              <td className="p-4">full access</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Profitable investments simulator</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-4 font-semibold">Lot calculator</td>
              <td className="p-4">—</td>
              <td className="p-4">—</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
              <td className="p-4">✔</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Ninja RSI trading system</td>
              <td className="p-4">5$</td>
              <td className="p-4">—</td>
              <td className="p-4">—</td>
              <td className="p-4">—</td>
              <td className="p-4">—</td>
              <td className="p-4">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
