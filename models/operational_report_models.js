const mongoose = require('mongoose')
const operationalReportSchema = new mongoose.Schema({
    fleetUtilization: { 
        type: Number, 
        required: true 
    },
    driverPerformance: { 
        type: Number, 
        required: true 
    },
    tripEfficiency: { 
        type: Number, 
        required: true 
    },
    comments: { 
        type: String 
    },
    reportDate: { 
        type: Date, 
        default: Date.now 
    },
});

const oprationalReportModel = mongoose.model('OPerationalReport', operationalReportSchema)
module.exports = oprationalReportModel