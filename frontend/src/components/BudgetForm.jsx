import React, { useState } from 'react';

const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other'];

const BudgetForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    category: categories[0],
    amount: '',
    month: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.month) {
      alert('Please enter all fields');
      return;
    }
    onAdd(formData);
    setFormData({
      category: categories[0],
      amount: '',
      month: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-white">Set Budget</h2>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="month"
        value={formData.month}
        onChange={handleChange}
        placeholder="Month (e.g., April 2025)"
        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Set Budget
      </button>
    </form>
  );
};

export default BudgetForm;
