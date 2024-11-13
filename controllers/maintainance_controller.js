const maintainanceModel = require('../models/maintainance_models')
const vehicleModel = require('../models/vehicles_models')
const createMaintainance = async (req, res) => {
    try {
        const { date, description, cost_num, plate_num, vehicle } = req.body
        const maintenance = await maintainanceModel.create({ date, description, cost_num, plate_num, vehicle })
        const vehicleMaintainance = await vehicleModel.findById(vehicle)
        vehicleMaintainance.vehicles.push(maintenance._id)
        vehicleMaintainance.save()
        res.status(201).json({ success: true, maintenance })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getAllMaintainance = async (req, res) => {
    try {
        const maintenanceRecords = await maintainanceModel.find()
        res.status(200).json(maintenanceRecords)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getSingleMaintainance = async (req, res) => {
    try {
        const maintenance = await maintainanceModel.findById(req.params.id)
        if (!maintenance) return res.status(404).json({ error: 'Record not found' })
        res.status(200).json(maintenance)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const updateMaintainance = async (req, res) => {
    try {
        const { date, description, cost_num, plate_num } = req.body
        const maintenance = await maintainanceModel.findByIdAndUpdate(
            req.params.id,
            { date, description, cost_num, plate_num },
            { new: true }
        )
        if (!maintenance) return res.status(404).json({ error: 'Record not found' })
        res.status(200).json(maintenance)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const deleteMaintainance = async (req, res) => {
    try {
        const maintenance = await maintainanceModel.findByIdAndDelete(req.params.id)
        if (!maintenance) return res.status(404).json({ error: 'Record not found' })
        res.status(200).json({ message: 'Record deleted successfully' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { createMaintainance, getAllMaintainance, getSingleMaintainance, updateMaintainance, deleteMaintainance } 