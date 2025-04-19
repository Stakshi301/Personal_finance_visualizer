import React, { useState } from 'react';

const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other'];

const TransactionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    amount: '',
    date: '',
    description: '',
    category: categories[0],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.date || !formData.description) {
      alert('Please fill in all fields');
      return;
    }
    onAdd(formData);
    setFormData({
      amount: '',
      date: '',
      description: '',
      category: categories[0],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl text-white font-semibold text-center mb-4">Add Transaction</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="amount" className="block text-sm text-gray-300">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="date" className="block text-sm text-gray-300">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="description" className="block text-sm text-gray-300">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="category" className="block text-sm text-gray-300">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
