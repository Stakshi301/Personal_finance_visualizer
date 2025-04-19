
import React from 'react';

const BudgetList = ({ budgets, onDelete }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Budgets</h2>
      <ul className="space-y-4">
        {budgets.map((b) => (
          <li key={b._id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow">
            <div>
              <p className="text-white font-medium">{b.category}</p>
              <p className="text-gray-400 text-sm">{b.month}</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-green-400 font-semibold">${b.amount}</p>
              <button
                onClick={() => onDelete(b._id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;
