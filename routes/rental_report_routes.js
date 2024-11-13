const express = require('express')
const { createRentalReport, getAllRentalReports, getSingleRentalReport, updateRentalReport, deleteRentalReport } = require('../controllers/rental_report_controller')

const  rentalReportRouter = express.Router()

 rentalReportRouter.post('/rentalReport', createRentalReport)
 rentalReportRouter.get('/rentalReport', getAllRentalReports)
 rentalReportRouter.get('/rentalReport/:id', getSingleRentalReport)
 rentalReportRouter.patch('/rentalReport/:id', updateRentalReport)
 rentalReportRouter.delete('/rentalReport/:id', deleteRentalReport)




module.exports =  rentalReportRouter 