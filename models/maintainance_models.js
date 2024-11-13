const mongoose = require('mongoose')
const maintenanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cost_num: {
        type: Number,
        required: true,
    },
    plate_num: {
        type: String,
        required: true,
    },
    vehicles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }
});

const maintainanceModel = mongoose.model('Maintenance', maintenanceSchema)
module.exports = maintainanceModel