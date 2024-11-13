const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    complaintState: {
        type: String,
        required: true,
    },
    isIssuesFound: {
        type: Boolean,
        required: true,
    },
    resolutionDate: {
        type: Date,
    },
    reportDate: {
        type: Date,
        default: Date.now,
    },
    comments: {
        type: String,
        required: false,
    },
    driver:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
    }],
    vehicles:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }]
})
const complaintModel = mongoose.model('Complaint', complaintSchema);
module.exports = complaintModel