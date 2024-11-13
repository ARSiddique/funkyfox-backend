const express = require('express')
const complaintRouter = express.Router()
const { createComplaint, getAllComplaints, getSingleCompaint, updateComplaint, deleteCompaint } = require('../controllers/compalint_report_controller')

complaintRouter.post('/complaints', createComplaint)
complaintRouter.get('/complaints', getAllComplaints)
complaintRouter.get('/complaints/:id',getSingleCompaint )
complaintRouter.put('/complaints/:id', updateComplaint)
complaintRouter.delete('/complaints/:id',deleteCompaint )




module.exports = complaintRouter 