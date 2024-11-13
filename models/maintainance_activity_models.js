const mongoose = require('mongoose');

const MaintenanceActivitySchema = new mongoose.Schema({
    description: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    cost_num: { 
        type: Number, 
        required: true 
    },
    duration: { 
        type: Number, 
        required: true 
    },
    serviceprovider: { 
        type: String, 
        required: true 
    },
    states: { 
        type: String, 
        required: true 
    },
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }]
});

const maintainanceActivityModel = mongoose.model('MaintenanceActivity', MaintenanceActivitySchema);

module.exports = maintainanceActivityModel;