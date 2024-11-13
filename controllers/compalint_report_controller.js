const compaintModel = require("../models/compalint_report_model")
const driverModel = require("../models/driver_model")
const vehicleModel = require("../models/vehicles_models")

const createComplaint = async (req, res) => {
    try {
        const { complaintState, isIssuesFound, resolutionDate, reportDate, comments,driver,vehicle } = req.body

        const newComplaint = await compaintModel.create({ complaintState, isIssuesFound, resolutionDate, reportDate, comments,driver,vehicle })

        const driverComplaint = await driverModel.findById(driver)
        driverComplaint.driver.push(newComplaint._id)
        driverComplaint.save()

        const vehicleComplaint = await vehicleModel.findById(vehicle)
        vehicleComplaint.vehicles.push(newComplaint._id)
        vehicleComplaint.save()
        

        res.status(201).json({ success: true, newComplaint})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
const getAllComplaints = async (req, res) => {
    try {
        const complaints = await compaintModel.find()
        res.status(200).json(complaints)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
const getSingleCompaint = async (req, res) => {
    try {
        const complaint = await compaintModel.findById(req.params.id)
        // .populate('driver').populate('vehicles')
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' })
        }
        res.status(200).json(complaint)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
const updateComplaint = async (req, res) => {
    try {
        const complaint = await compaintModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' })
        }
        res.status(200).json(complaint)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
const deleteCompaint = async (req, res) => {
    try {
        const complaint = await compaintModel.findByIdAndDelete(req.params.id)
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' })
        }
        res.status(200).json({ message: 'Complaint deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports = {createComplaint,getAllComplaints,getSingleCompaint,updateComplaint,deleteCompaint}