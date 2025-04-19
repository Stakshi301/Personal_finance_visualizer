import React from 'react';

const SpendingInsights = ({ totalIncome = 0, totalExpenses = 0 }) => {
  const savings = totalIncome - totalExpenses;
  const savingsPercentage =
    totalIncome > 0 ? ((savings / totalIncome) * 100).toFixed(2) : '0.00';

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-8 text-white">
      <h3 className="text-xl font-semibold mb-4">Spending Insights</h3>
      <p className="mb-2">Total Income: ₹{totalIncome.toFixed(2)}</p>
      <p className="mb-2">Total Expenses: ₹{totalExpenses.toFixed(2)}</p>
      <p className="mb-2">
        Savings: ₹{savings.toFixed(2)} ({savingsPercentage}%)
      </p>
    </div>
  );
};

export default SpendingInsights;
