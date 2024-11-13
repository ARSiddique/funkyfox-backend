const express = require('express')
const { createOperationalReport, getAllOperationalReport, getSingleOperationalReport, updateOperationalReport, deleteOperationalReport } = require('../controllers/operational_report_controller')
const operationalReportRouter = express.Router()

operationalReportRouter.post('/operationalReport', createOperationalReport)
operationalReportRouter.get('/operationalReport', getAllOperationalReport)
operationalReportRouter.get('/operationalReport/:id', getSingleOperationalReport)
operationalReportRouter.patch('/operationalReport/:id', updateOperationalReport)
operationalReportRouter.delete('/operationalReport/:id', deleteOperationalReport)




module.exports = operationalReportRouter 