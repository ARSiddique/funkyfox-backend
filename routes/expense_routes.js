const express = require('express')
const expenseRouter = express.Router()
const { createExpense, getAllExpenses, getSingleExpense, updateExpense, deleteExpense } = require('../controllers/expense_controller')

expenseRouter.post('/expense', createExpense)
expenseRouter.get('/expense', getAllExpenses)
expenseRouter.get('/expense/:id', getSingleExpense)
expenseRouter.patch('/expense/:id', updateExpense)
expenseRouter.delete('/expense/:id', deleteExpense)




module.exports = expenseRouter 