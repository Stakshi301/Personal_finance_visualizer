import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransitionForm';
import TransactionList from './components/TransitionList';
import MonthlyExpensesChart from './components/MonthlyExpensesChart';
import CategoryPieChart from './components/MonthlyExpensesChart';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';
import Dashboard from './components/Dashboard';
import './index.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [transactionsRes, budgetsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/transactions'),
          axios.get('http://localhost:5000/api/budgets'),
        ]);
        setTransactions(transactionsRes.data);
        setBudgets(budgetsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddTransaction = async (transaction) => {
    try {
      const res = await axios.post('http://localhost:5000/api/transactions', transaction);
      setTransactions([...transactions, res.data]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/transactions/${id}`);
      setTransactions(transactions.filter((t) => t._id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const handleAddBudget = async (budget) => {
    try {
      const res = await axios.post('http://localhost:5000/api/budgets', budget);
      setBudgets([...budgets, res.data]);
    } catch (error) {
      console.error('Error adding budget:', error);
    }
  };

  const handleDeleteBudget = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/budgets/${id}`);
      setBudgets((prevBudgets) => prevBudgets.filter((budget) => budget._id !== id));
    } catch (error) {
      console.error('Error deleting budget:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black animate-gradient-x text-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Expense Tracker</h1>
        <Dashboard transactions={transactions} budgets={budgets} />
        <TransactionForm onAdd={handleAddTransaction} />
        <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
        <MonthlyExpensesChart transactions={transactions} />
        <CategoryPieChart transactions={transactions} />
        <BudgetForm onAdd={handleAddBudget} />
        <BudgetList budgets={budgets} onDelete={handleDeleteBudget} />
      </div>
    </div>
  );
};

export default App;