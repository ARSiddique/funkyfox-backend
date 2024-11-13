const rentalReportModel = require('../models/rental_report_models')
const vehicleModel = require('../models/vehicles_models')
const createRentalReport = async (req, res) => {
    try {
        const { startdate, enddate, daysrent, rentalrate_num, totalcost_num, driver, vehicles } = req.body
        const report = await rentalReportModel.create({ startdate, enddate, daysrent, rentalrate_num, totalcost_num, driver, vehicles })
        const driverRentalReport = await driverModel.findById(driver)
        driverRentalReport.driver.push(report._id)
        driverRentalReport.save()
        const vehicleRentalReport = await vehicleModel.findById(vehicle)
        vehicleRentalReport.vehicles.push(report._id)
        vehicleRentalReport.save()
        res.status(201).json({ success: true, report })
    } catch (error) {
        res.status(400).json({ message: err.message })
    }
}

const getAllRentalReports = async (req, res) => {
    try {
        const reports = await rentalReportModel.find()
        res.status(200).send(reports)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getSingleRentalReport = async (req, res) => {
    try {
        const report = await rentalReportModel.findById(req.params.id)
        // .populate('driver').populate('vehicles')
        if (!report) {
            return res.status(404).send()
        }
        res.status(200).send(report)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateRentalReport = async (req, res) => {
    try {
        const report = await rentalReportModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!report) {
            return res.status(404).send()
        }
        res.status(200).send(report)
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteRentalReport = async (req, res) => {
    try {
        const report = await rentalReportModel.findByIdAndDelete(req.params.id)
        if (!report) {
            return res.status(404).send()
        }
        res.status(200).send(report)
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = { createRentalReport, getAllRentalReports, getSingleRentalReport, updateRentalReport, deleteRentalReport } 