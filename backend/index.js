const express=require('express');
const app=express();
require('dotenv').config();
const ConnectDb=require('./config/db');
const PORT = (process.env.PORT)||3000;
const route=require('./route/FinanceRoute');
const budgetRoute=require('./route/BudgetRoute')
const cors = require('cors');

app.use(express.json())
app.use(cors());

ConnectDb();

app.use('/api/transactions',route);
app.use('/api/budgets', budgetRoute);

app.listen(PORT,()=>{
    console.log(`listening ${PORT}` );
})