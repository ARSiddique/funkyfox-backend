const express = require('express')
const incomeRouter = express.Router()
const { createIncome, getAllIncomes, getSingleIncome, updateIncome, delelteIncome } = require('../controllers/income_controller')

incomeRouter.post('/income', createIncome)
incomeRouter.get('/income', getAllIncomes)
incomeRouter.get('/income/:id', getSingleIncome)
incomeRouter.patch('/income/:id', updateIncome)
incomeRouter.delete('/income/:id', delelteIncome)




module.exports = incomeRouter 