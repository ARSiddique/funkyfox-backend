const driverModel = require('../models/driver_model')
const vehiclesModel = require('../models/vehicles_models')

const createVehicles = async (req, res) => {
    try {
        const { name, model, plate_num, lastservicedate, totalmileage, mileage, driver } = req.body
        const vehicle = await vehiclesModel.create({ name, model, plate_num, lastservicedate, totalmileage, mileage, driver })
        const driverVehicle = await driverModel.findById(driver)
        driverVehicle.driver.push(vehicle._id)
        driverVehicle.save()
        res.status(201).json({
            success: true, vehicle
        })
    } catch (error) {

        res.status(400).json({ message: error.message })

    }
}
const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await vehiclesModel.find()
        res.send(vehicles)
    } catch (error) {
        res.status(500).send()
    }
}
const getSingleVehicle = async (req, res) => {
    try {
        const vehicle = await vehiclesModel.findById(req.params.id).populate('maintainance').populate('trafficfine').populate('Accident').populate('Income').populate('driver')
        if (!vehicle) {
            return res.status(404).send()
        }
        res.send(vehicle)
    } catch (error) {
        res.status(500).send()
    }
}
const updateVehicle = async (req, res) => {
    try {
        const vehicle = await vehiclesModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!vehicle) {
            return res.status(404).send()
        }
        res.send(vehicle)
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteVehicle = async (req, res) => {
    try {
        const vehicle = await vehiclesModel.findByIdAndDelete(req.params.id)
        if (!vehicle) {
            return res.status(404).send()
        }
        res.send(vehicle)
    } catch (error) {
        res.status(500).send()
    }
}


module.exports = { createVehicles, getAllVehicles, getSingleVehicle, updateVehicle, deleteVehicle } 