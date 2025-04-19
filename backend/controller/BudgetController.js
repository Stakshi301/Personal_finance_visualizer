const BudgetModel = require('../model/BudgetModel');

const getBudgets = async (req, res) => {
  try {
    const budgets = await BudgetModel.find();
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postBudget = async (req, res) => {
  const { category, amount, month } = req.body;
  try {
    const newBudget = new BudgetModel({ category, amount, month });
    await newBudget.save();
    res.status(201).json(newBudget);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deleteBudget = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedBudget = await BudgetModel.findByIdAndDelete(id);
      if (!deletedBudget) {
        return res.status(404).json({ message: 'Budget not found' });
      }
      res.json({ message: 'Budget deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


module.exports = { getBudgets, postBudget,deleteBudget };
