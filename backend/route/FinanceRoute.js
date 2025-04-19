const express=require('express');
const route=express.Router();
const{getFinance,postFinance,deleteFinance}=require('../controller/FinanceController');

route.get('/',getFinance);
route.post('/',postFinance);
route.delete('/:id',deleteFinance);

module.exports=route;