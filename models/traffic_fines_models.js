const mongoose = require('mongoose');

const trafficFineSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }],
    driver: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
    }]
});

const trafficFineModel = ('TrraficFine', trafficFineSchema)
module.exports = trafficFineModel
