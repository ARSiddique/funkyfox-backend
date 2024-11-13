const mongoose = require('mongoose')
const DeductionSchema = new mongoose.Schema({
    reason: {
        type: String,
        require: [true, 'Reason is required']
    },
    amount_num: {
        type: Number,
        require: [true, 'Amount is required']
    },
    description: {
        type: String,
        require: [true, 'description is required']
    }

});
const IncomeSchema = new mongoose.Schema({
    amount_num: {
        type: Number,
        required: [true, 'Amount is equired field']
    },
    date: {
        type: Date,
        default: Date.now,
        required: [true, 'Date is required field']
    },
    service: {
        type: String,
        required: [true, 'Service is required field']
    },
    deductions:
    {
        DeductionSchema
    },
    driver: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
    }],
    vehicles:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }]



})
const incomeModel = mongoose.model('Income', IncomeSchema)
module.exports = incomeModel