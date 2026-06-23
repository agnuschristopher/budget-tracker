import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !amount || parseFloat(amount) <= 0) return;

    onAdd({
      id: Date.now(),
      text: text.trim(),
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toLocaleDateString()
    });

    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Description</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g., Grocery, Salary"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Amount ($)</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Type</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setType('expense')}
            className={`py-2 rounded-lg font-medium text-sm border transition-all ${
              type === 'expense' ? 'bg-rose-50 border-rose-500 text-rose-700 shadow-xs' : 'border-gray-200 text-gray-600'
            }`}
          >
            Expense
          </button>
          <button
            type="button"
            onClick={() => setType('income')}
            className={`py-2 rounded-lg font-medium text-sm border transition-all ${
              type === 'income' ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-xs' : 'border-gray-200 text-gray-600'
            }`}
          >
            Income
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="General">General</option>
          <option value="Food">Food & Dining</option>
          <option value="Housing">Housing/Rent</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Salary">Salary/Inflow</option>
          <option value="Utilities">Utilities</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-xs transition-colors">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;