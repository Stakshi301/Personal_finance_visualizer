const FinanceModel = require('../model/FinanceModel');

const getFinance = async (req, res) => {
  try {
    const finance = await FinanceModel.find().sort({ date: -1 });
    res.json(finance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postFinance = async (req, res) => {
  const { description, amount } = req.body;
  const finance = new FinanceModel({ description, amount });
  try {
    const newFinance = await finance.save();
    res.status(201).json(newFinance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteFinance = async (req, res) => {
    try {
      // Use _id field here for MongoDB
      const deletedTransaction = await FinanceModel.findByIdAndDelete(req.params.id);
      if (!deletedTransaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      res.json({ message: 'Transaction Deleted' });
    } catch (err) {
      console.error('Error deleting transaction:', err);
      res.status(500).json({ message: 'Server error occurred while deleting transaction' });
    }
  };
  

module.exports = { getFinance, postFinance, deleteFinance };
