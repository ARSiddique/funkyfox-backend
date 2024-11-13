const mongoose = require('mongoose')
const profitLossSchema = new mongoose.Schema({
    period: {
         type: String, 
         required: true 
        },
    incometotal_num: { 
        type: Number, 
        required: true 
    },
    expensetotal_num: { 
        type: Number, 
        required: true 
    },
    profit_num: { 
        type: Number, 
        required: true 
    }
});

const profitLossModel = mongoose.model('ProfitLoss', profitLossSchema)
module.exports = profitLossModel