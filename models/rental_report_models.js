const mongoose = require('mongoose')
const RentalReportSchema = new mongoose.Schema({
    startdate: { 
        type: Date, 
        required: true 
    },
    enddate: { 
        type: Date, 
        required: true 
    },
    daysrent: { 
        type: Number, 
        required: true 
    },
    rentalrate_num: { 
        type: Number, 
        required: true 
    },
    totalcost_num: { 
        type: Number, 
        required: true 
    },
    driver:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
    }],
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }]
});
const rentalReportModel = ('RentalReport',RentalReportSchema)
module.exports = rentalReportModel