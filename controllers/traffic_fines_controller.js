const driverModel = require('../models/driver_model')
const trafficFineModel = require('../models/traffic_fines_models')
const vehicleModel = require('../models/vehicles_models')

const createTrafficFine = async (req, res) => {
    // const { amount, date, description, location } = req.body 
    try {
        const{ amount, date, description, location, driver, vehicle} = req.body
        const newFine = await trafficFineModel.create({ amount, date, description, location, driver, vehicle}) 
        const driverTrafficFine = await driverModel.findById(driver)
        driverTrafficFine.driver.push(newFine._id)
        driverTrafficFine.save()
        const vehicleTrafficFine = await vehicleModel.findById(vehicle)
        vehicleTrafficFine.vehicles.push(newFine._id)
        vehicleTrafficFine.save()
        res.status(201).json({success:true, newFine}) 
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
}
const getAllTrafficFines = async (req, res) => {
    try {
        const fines = await trafficFineModel.find() 
        res.json(fines) 
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}
const getSingleTrafficFine = async (req, res) => {
    try {
        const fine = await trafficFineModel.findById(req.params.id)
        // .populate('vehicles').populate('driver')
        if (fine) {
            res.json(fine)
        } else {
            res.status(404).json({ message: 'Fine not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateTrafficFine = async (req, res) => {
    const { amount, date, description, location } = req.body 
    try {
        const fine = await trafficFineModel.findById(req.params.id) 
        if (fine) {
            fine.amount = amount !== undefined ? amount : fine.amount 
            fine.date = date !== undefined ? date : fine.date 
            fine.description = description !== undefined ? description : fine.description 
            fine.location = location !== undefined ? location : fine.location 
            await fine.save() 
            res.json(fine) 
        } else {
            res.status(404).json({ message: 'Fine not found' }) 
        }
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
}
const deleteTrafficFine = async (req, res) => {
    try {
        const fine = await trafficFineModel.findById(req.params.id) 
        if (fine) {
            await fine.remove() 
            res.json({ message: 'Fine deleted' }) 
        } else {
            res.status(404).json({ message: 'Fine not found' }) 
        }
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

module.exports = { createTrafficFine, getAllTrafficFines, getSingleTrafficFine, updateTrafficFine, deleteTrafficFine } 