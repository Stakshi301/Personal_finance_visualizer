const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const FinanceModel = mongoose.model('Transaction', FinanceSchema);

module.exports=FinanceModel;