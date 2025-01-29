import React from 'react';
import Navbar from '../../common/navbar';
interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
}

const transactions: Transaction[] = [
  { id: 1, date: '2025-01-28', description: 'Salary', amount: 1500.0 },
  { id: 2, date: '2025-01-27', description: 'Electricity Bill', amount: -200.0 },
  { id: 3, date: '2025-01-26', description: 'Groceries', amount: -50.0 },
  { id: 4, date: '2025-01-25', description: 'Dining Out', amount: -30.0 },
  { id: 5, date: '2025-01-24', description: 'Freelance Work', amount: 400.0 }
];

function Dashboard() {
  return (
    <div className="h-[100vh] relative bg-[#f9fafc]">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6  bg-white shadow-lg sm:rounded-lg ">
        <h2 className="text-2xl font-bold mb-4 text-center font-bold">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2 border border-gray-300 text-sm font-semibold" scope="col">
                  Date
                </th>
                <th className="text-left px-4 py-2 border border-gray-300 text-sm font-semibold" scope="col">
                  Description
                </th>
                <th className="text-right px-4 py-2 border border-gray-300 text-sm font-semibold" scope="col">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions ? (
                transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50 focus-within:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300 text-sm" role="cell">
                      {new Date(transaction.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm" role="cell">
                      {transaction.description}
                    </td>
                    <td
                      className={`px-4 py-2 border border-gray-300 text-sm text-right ${
                        transaction.amount < 0 ? 'text-red-500' : 'text-green-500'
                      }`}
                      role="cell"
                    >
                      {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </tbody>
          </table>
        </div>
        <div className="text-sm text-gray-500 mt-4 text-center">Showing {transactions.length} transactions</div>
      </div>
    </div>
  );
}

export default Dashboard;
