import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BudgetVsActualChart = ({ budgetMap, expensesByCategory }) => {
  const categories = Object.keys(budgetMap);
  const budgetData = categories.map((cat) => budgetMap[cat]);
  const actualData = categories.map((cat) => expensesByCategory[cat] || 0);

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Budget',
        data: budgetData,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Actual',
        data: actualData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        text: 'Budget vs. Actual Expenses',
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default BudgetVsActualChart;
