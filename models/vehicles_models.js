const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    model: { 
        type: String, 
        required: true 
    },
    plate_num: { 
        type: String, 
        required: true, 
        unique: true 
    },
    lastservicedate: { 
        type: Date, 
        required: true 
    },
    totalmileage: { 
        type: Number, 
        required: true 
    },
    mileage: { 
        type: Number, 
        required: true 
    },
    maintainance: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Maintenance"
    }],
    trafficfine: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TrraficFine"
    }],
    Accident: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accident"
    }],
    Income: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Income"
    }],
    driver: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
    }],
    
});

const vehicleModel = mongoose.model('Vehicle', vehicleSchema);
module.exports = vehicleModel;