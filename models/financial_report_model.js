const mongoose = require('mongoose')
const financialReportSchema = new mongoose.Schema({
    income_num: { 
        type: Number, 
        required: true 
    },
    expense_num: { 
        type: Number, 
        required: true 
    },
    operation_expense: { 
        type: Number, 
        required: true 
    },
    profitability: { 
        type: Number, 
        required: true 
    },
    gronprofit: { 
        type: Number, 
        required: true 
    }
})
const financialReportModel = mongoose.model('FinancialReport', financialReportSchema)
module.exports = financialReportModel