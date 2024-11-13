const financialReportModel = require('../models/financial_report_model')  
const createFinancialReport = async (req, res) => {
    try {
        const { income_num, expense_num, operation_expense, profitability, gronprofit} = req.body

        const report = await financialReportModel.create({ income_num, expense_num, operation_expense, profitability, gronprofit})  
        res.status(201).json({success:true, report})  
    } catch (error) {
        res.status(400).json({ error: error.message })  
    }
}

const getAllFinancialReport =  async (req, res) => {
    try {
        const reports = await financialReportModel.find()  
        res.json(reports)  
    } catch (error) {
        res.status(500).json({ error: error.message })  
    }
}

const getSingleFinancialReport =  async (req, res) => {
    try {
        const report = await financialReportModel.findById(req.params.id)  
        if (!report) return res.status(404).json({ error: 'Report not found' })  
        res.json(report)  
    } catch (error) {
        res.status(500).json({ error: error.message })  
    }
}

const updateFinancialReport =  async (req, res) => {
    try {
        const report = await financialReportModel.findByIdAndUpdate(req.params.id, req.body, { new: true })  
        if (!report) return res.status(404).json({ error: 'Report not found' })  
        res.json(report)  
    } catch (error) {
        res.status(400).json({ error: error.message })  
    }
}

const deleteFinancialReport = async (req, res) => {
    try {
        const report = await financialReportModel.findByIdAndDelete(req.params.id)  
        if (!report) return res.status(404).json({ error: 'Report not found' })  
        res.json({ message: 'Report deleted successfully' })  
    } catch (error) {
        res.status(500).json({ error: error.message })  
    }
}

module.exports = {createFinancialReport,getAllFinancialReport,getSingleFinancialReport,updateFinancialReport,deleteFinancialReport}