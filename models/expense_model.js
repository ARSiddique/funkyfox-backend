const mongoose = require('mongoose')
const expenseSchema = new mongoose.Schema({
    amount_num: {
        type: Number,
        required: [true,'amount_num is required']
    },
    date_: {
        type: Date,
        required: [true,'date is required']
    },
    category: {
        type: String,
        required: [true,'category is required']
    },
    description: {
        type: String,
        required: [true,'description is required']

    },
    reiptnum_num: {
        type: Number,
        required: [true,'receipt_num is required']
    },
    paymentmethod: {
        type: String,
        required: [true,'payment_method is required']
    },
    Income:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Income"
    }],
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }]

})
const expenseModel = mongoose.model('Expense', expenseSchema)
module.exports = expenseModel