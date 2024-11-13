const maintainanceActivityModel = require('../models/maintainance_activity_models')
const vehicleModel = require('../models/vehicles_models')


const createMaintainanceActivity = async (req, res) => {
    try {
        const { description, date, cost_num, duration, serviceprovider, states, vehicle } = req.body
        const newMaintenance = await maintainanceActivityModel.create({ description, date, cost_num, duration, serviceprovider, states, vehicle })
        const vehicleMaintainanceActivity = await vehicleModel.findById(vehicle)
        vehicleMaintainanceActivity.vehicles.push(newMaintenance._id)
        vehicleMaintainanceActivity.save()
        res.status(201).json({ success: true, newMaintenance })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllMaintainanceActivities = async (req, res) => {
    try {
        const maintenance = await maintainanceActivityModel.find()
        res.status(200).json(maintenance)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getSingleMaintainanceActivity = async (req, res) => {
    try {
        const maintenance = await maintainanceActivityModel.findById(req.params.id)
        if (!maintenance) {
            return res.status(404).json({ error: 'Maintenance activity not found' })
        }
        res.status(200).json(maintenance)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateMaintainanceActivity = async (req, res) => {
    try {
        const updatedMaintenance = await maintainanceActivityModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedMaintenance) {
            return res.status(404).json({ error: 'Maintenance activity not found' })
        }
        res.status(200).json(updatedMaintenance)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteMaintainanceActivity = async (req, res) => {
    try {
        const deletedMaintenance = await maintainanceActivityModel.findByIdAndDelete(req.params.id)
        if (!deletedMaintenance) {
            return res.status(404).json({ error: 'Maintenance activity not found' })
        }
        res.status(200).json({ message: 'Maintenance activity deleted' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = { createMaintainanceActivity, getAllMaintainanceActivities, getSingleMaintainanceActivity, updateMaintainanceActivity, deleteMaintainanceActivity } 