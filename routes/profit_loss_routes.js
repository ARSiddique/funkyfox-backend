const express = require('express')
const { createProfitLoss, getAllProfitLoss, getSingleProfitLoss, updateProfitLoss, deleteProfitLoss } = require('../controllers/profit_loss_controller')

const profitLossRouter = express.Router()

profitLossRouter.post('/profitLoss', createProfitLoss)
profitLossRouter.get('/profitLoss', getAllProfitLoss)
profitLossRouter.get('/profitLoss/:id', getSingleProfitLoss)
profitLossRouter.patch('/profitLoss/:id', updateProfitLoss)
profitLossRouter.delete('/profitLoss/:id', deleteProfitLoss)




module.exports = profitLossRouter 