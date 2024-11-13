const mongoose = require('mongoose')
const accidentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    numb_num: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    damage: {
        type: String,
        required: true
    },
    injuries: {
        type: String,
        required: true
    },
    // expense: { 
    //     type: Number, 
    //     required: true 
    // },
    driver: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
    }],
    vehicle: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }]
});
const accidentModel = mongoose.model('Accident', accidentSchema)
module.exports = accidentModel