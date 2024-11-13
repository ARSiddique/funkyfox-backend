const operationalReportModel = require('../models/operational_report_models')
const createOperationalReport = async (req, res) => {
    try {
        const{ fleetUtilization, driverPerformance, tripEfficiency, comments, reportDate} = req.body
        const newReport = await operationalReportModel.create({ fleetUtilization, driverPerformance, tripEfficiency, comments, reportDate})  
        res.status(201).json({success:true, newReport}) 
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
}
const getAllOperationalReport =  async (req, res) => {
    try {
        const reports = await operationalReportModel.find() 
        res.json(reports) 
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

const getSingleOperationalReport = async (req, res) => {
    try {
        const report = await operationalReportModel.findById(req.params.id) 
        if (!report) return res.status(404).json({ message: 'Report not found' }) 
        res.json(report) 
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

const updateOperationalReport = async (req, res) => {
    try {
        const updatedReport = await operationalReportModel.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
        if (!updatedReport) return res.status(404).json({ message: 'Report not found' }) 
        res.json(updatedReport) 
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
}

const deleteOperationalReport = async (req, res) => {
    try {
        const deletedReport = await operationalReportModel.findByIdAndDelete(req.params.id) 
        if (!deletedReport) return res.status(404).json({ message: 'Report not found' }) 
        res.json({ message: 'Report deleted successfully' }) 
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}



module.exports = { createOperationalReport, getAllOperationalReport, getSingleOperationalReport, updateOperationalReport, deleteOperationalReport } 