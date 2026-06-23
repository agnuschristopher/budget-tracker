import React, { useState, useEffect } from 'react';
import DashboardSummary from './components/DashboardSummary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState(() => {
    const localData = localStorage.getItem('budget_transactions');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('budget_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expenses;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-indigo-600 text-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">FinTrack</h1>
          <p className="text-sm bg-indigo-700 px-3 py-1 rounded-full hidden sm:block">Smart Budgeting</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
        <DashboardSummary balance={balance} income={income} expenses={expenses} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Add New Transaction</h2>
            <TransactionForm onAdd={addTransaction} />
          </div>

          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;