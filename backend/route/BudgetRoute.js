// route/BudgetRoute.js
const express = require('express');
const router = express.Router();
const { getBudgets, postBudget,deleteBudget } = require('../controller/BudgetController');

router.get('/', getBudgets);
router.post('/', postBudget);
router.delete('/:id', deleteBudget);

module.exports = router;
