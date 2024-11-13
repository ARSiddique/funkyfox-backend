const driverModel = require("../models/driver_model")
const vehicleModel = require("../models/vehicles_models")

const createDriver = async (req, res) => {
    try {
        const { name, email, licence_num, phone_num, address, dob, employestatus, hiredate, image, additionalnotes, vehicle } = req.body
        const newDriver = await driverModel.create({ name, email, licence_num, phone_num, address, dob, employestatus, hiredate, image, additionalnotes, vehicle })
        const driverVehicle = await vehicleModel.findById(vehicle)
        driverVehicle.driver.push(newDriver._id)
        driverVehicle.save()
        res.status(201).json({ success: true, newDriver })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllDrivers = async (req, res) => {
    try {
        const drivers = await driverModel.find()
        res.json(drivers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getSingleDriver = async (req, res) => {
    try {
        const driver = await driverModel.findById(req.params.id).populate('vehicles')
        if (!driver) return res.status(404).json({ message: 'Driver not found' })
        res.json(driver)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateDriver = async (req, res) => {
    try {
        const updatedDriver = await driverModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedDriver) return res.status(404).json({ message: 'Driver not found' })
        res.json(updatedDriver)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteDriver = async (req, res) => {
    try {
        const deletedDriver = await driverModel.findByIdAndDelete(req.params.id)
        if (!deletedDriver) return res.status(404).json({ message: 'Driver not found' })
        res.json({
            message: 'Driver deleted'
        })
    } catch (error) {
        res.status(400).json({ message: error.msg })
    }
}

module.exports = { createDriver, getAllDrivers, getSingleDriver, updateDriver, deleteDriver }