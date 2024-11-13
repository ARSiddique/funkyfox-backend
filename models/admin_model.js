const mongoose = require('mongoose')
const AuthSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Name is equired field']
    },
    Email: {
        type: String,
        required: [true, 'Emaiil is required field']
    },
    Password: {
        type: String,
        required: [true, 'Password is required field']
    },
    Phone: {
        type: Number,
        required: [true, 'Phone is required field']
    },
    Image: {
        type: String,
        required: [true, 'Image is equired field']
    },
    Expense:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Expense"
    }],
    Income:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Income"
        
    }],
    ProfitLoss: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "ProfitLoss"

    }]
})
const authModel = mongoose.model('Auth', AuthSchema)
module.exports = authModel
