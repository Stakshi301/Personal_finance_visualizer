import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart = ({ transactions }) => {
  const categoryData = {};

  transactions.forEach((t) => {
    categoryData[t.category] = (categoryData[t.category] || 0) + parseFloat(t.amount);
  });

  const data = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: 'Category Expenses',
        data: Object.values(categoryData),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Category Expenses</h2>
      <Pie data={data} />
    </div>
  );
};

export default CategoryPieChart;
