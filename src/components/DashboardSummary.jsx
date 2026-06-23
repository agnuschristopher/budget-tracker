import React from 'react';

function DashboardSummary({ balance, income, expenses }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Balance</span>
        <span className={`text-3xl font-bold mt-2 ${balance >= 0 ? 'text-gray-900' : 'text-red-600'}`}>
          ${balance.toFixed(2)}
        </span>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between border-l-4 border-emerald-500">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Income</span>
        <span className="text-3xl font-bold mt-2 text-emerald-600">+${income.toFixed(2)}</span>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between border-l-4 border-rose-500">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Expenses</span>
        <span className="text-3xl font-bold mt-2 text-rose-600">-${expenses.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default DashboardSummary;