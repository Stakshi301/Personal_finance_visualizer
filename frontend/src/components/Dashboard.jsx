import React from 'react';
import BudgetVsActualChart from './BudgetVsActualChart';
import CategoryPieChart from './CategoryPieChart';
import SpendingInsights from './SpendingInsights';

const Dashboard = ({ transactions, budgets, totalIncome }) => {
  const totalExpenses = transactions.reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const budgetMap = budgets.reduce((map, b) => {
    map[b.category] = parseFloat(b.amount);
    return map;
  }, {});

  const expensesByCategory = transactions.reduce((map, t) => {
    map[t.category] = (map[t.category] || 0) + parseFloat(t.amount);
    return map;
  }, {});

  const categories = Object.keys(budgetMap);
  const budgetData = categories.map((cat) => budgetMap[cat]);
  const actualData = categories.map((cat) => expensesByCategory[cat] || 0);
  const expenses = categories.map((cat) => expensesByCategory[cat] || 0);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Dashboard</h2>
      <p className="text-white mb-6">Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category} className="p-4 bg-gray-800 rounded-lg shadow">
            <p className="text-white">{category}</p>
            <p className="text-gray-400">
              Spent ${expensesByCategory[category]?.toFixed(2) || 0} / Budget ${budgetMap[category]}
            </p>
          </li>
        ))}
      </ul>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-8">
    <BudgetVsActualChart
      budgetMap={budgetMap}
      expensesByCategory={expensesByCategory}
    />
  </div>

      <div className="mt-8">
        <CategoryPieChart categories={categories} expenses={expenses} />
      </div>
      <div className="mt-8">
        <SpendingInsights totalIncome={totalIncome} totalExpenses={totalExpenses} />
      </div>
    </div>
  );
};

export default Dashboard;


