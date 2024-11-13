const mongoose = require('mongoose')
const driverSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true
        // unique: true 
    },
    licence_num: { 
        type: String, 
        required: true 

    },
    phone_num: { 
        type: String, 
        required: true 

    },
    address: { 
        type: String, 
        required: true 

    },
    dob: { 
        type: Date, 
        required: true 

    },
    employestatus: { 
        type: String, 
        required: true 

    },
    hiredate: { 
        type: Date, 
        required: true 

    },
    image: { 
        type: String ,
        required: true 


    },
    additionalnotes: { 
        type: String 

    },
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }]
});
const driverModel = mongoose.model('Driver', driverSchema)
module.exports = driverModel