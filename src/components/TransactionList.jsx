import React, { useState } from 'react';

function TransactionList({ transactions, onDelete }) {
  const [filter, setFilter] = useState('all');

  const filteredTransactions = transactions.filter(t => {
    if (filter === 'income') return t.type === 'income';
    if (filter === 'expense') return t.type === 'expense';
    return true;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h2 className="text-lg font-semibold text-gray-700">History</h2>
        <div className="flex bg-gray-100 p-1 rounded-lg w-full sm:w-auto">
          {['all', 'income', 'expense'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`flex-1 sm:flex-none px-3 py-1 text-xs font-medium rounded-md capitalize transition-all ${
                filter === type ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {filteredTransactions.length === 0 ? (
        <div className="text-center py-12 text-gray-400 border border-dashed border-gray-200 rounded-xl">
          No transactions recorded yet.
        </div>
      ) : (
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
          {filteredTransactions.map((t) => (
            <div key={t.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100 group">
              <div className="flex flex-col">
                <span className="font-medium text-gray-800 text-sm sm:text-base">{t.text}</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] bg-white text-gray-500 px-2 py-0.5 rounded border border-gray-200">{t.category}</span>
                  <span className="text-[11px] text-gray-400">{t.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-semibold text-sm sm:text-base ${t.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
                </span>
                <button onClick={() => onDelete(t.id)} className="text-gray-400 hover:text-rose-600 text-sm font-medium">
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;