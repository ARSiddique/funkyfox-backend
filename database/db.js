const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DataBase connted successfully")
    } catch (error) {
        console.log("Error Ouccred")
    }
}
module.exports = connectDB