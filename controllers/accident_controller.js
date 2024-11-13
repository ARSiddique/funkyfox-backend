const accidentModel = require('../models/accident_model');
const driverModel = require('../models/driver_model');
const vehicleModel = require('../models/vehicles_models');

const createAccident = async (req, res) => {
    try {
        const { date, numb_num, location, description, damage, injuries, driver, vehicle } = req.body
        const accident = await accidentModel.create({date, numb_num, location, description, damage,injuries, driver, vehicle
        })
        const accidentedDriver = await driverModel.findById(driver)
        accidentedDriver.driver.push(accident._id)
        accidentedDriver.save()
        const accidentedVehicle = await vehicleModel.findById(vehicle)
        accidentedVehicle.vehicle.push(accident._id)
        accidentedVehicle.save()
        res.status(201).json({
            success: true,
            accident
        })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

const getAllAccidents = async (req, res) => {
    try {
        const accidents = await accidentModel.find()
        res.json(accidents)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getSingleAccident = async (req, res) => {
    try {
        const accident = await accidentModel.findById(req.params.id)
        // .populate('driver').populate('vehicle')
        if (!accident) return res.status(404).json({ message: 'Accident not found' })
        res.json(accident)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateAccident = async (req, res) => {
    try {
        const updatedAccident = await accidentModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedAccident) return res.status(404).json({ message: 'Accident not found' })
        res.json(updatedAccident)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
const deleteAccident = async (req, res) => {
    try {
        const deletedAccident = await accidentModel.findByIdAndDelete(req.params.id)
        if (!deletedAccident) return res.status(404).json({ message: 'Accident not found' })
        res.json({ message: 'Accident deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

module.exports = { createAccident, getAllAccidents, getSingleAccident, updateAccident, deleteAccident };
