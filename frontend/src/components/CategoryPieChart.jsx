import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const CategoryPieChart = ({ categories, expenses }) => {
  if (!categories || !expenses || categories.length === 0 || expenses.length === 0) {
    return <p>No data available for the pie chart.</p>;
  }

  const data = {
    labels: categories,
    datasets: [
      {
        data: expenses,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#E7E9ED',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Category-wise Expense Distribution',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default CategoryPieChart;
