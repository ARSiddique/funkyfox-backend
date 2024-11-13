const express = require('express')
const financialReportRouter = express.Router()
const { createFinancialReport, getAllFinancialReport, getSingleFinancialReport, updateFinancialReport, deleteFinancialReport } = require('../controllers/financial_report_controller')

financialReportRouter.post('/financialreport', createFinancialReport)
financialReportRouter.get('/financialreport', getAllFinancialReport)
financialReportRouter.get('/financialreport/:id', getSingleFinancialReport)
financialReportRouter.patch('/financialreport/:id', updateFinancialReport)
financialReportRouter.delete('/financialreport/:id', deleteFinancialReport)

module.exports = financialReportRouter 