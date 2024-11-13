const express = require('express')
const { createTrafficFine, getAllTrafficFines, getSingleTrafficFine, updateTrafficFine, deleteTrafficFine } = require('../controllers/traffic_fines_controller')

const trafficFineRouter = express.Router()

trafficFineRouter.post('/trafficFines', createTrafficFine)
trafficFineRouter.get('/trafficFines', getAllTrafficFines)
trafficFineRouter.get('/trafficFines/:id', getSingleTrafficFine)
trafficFineRouter.patch('/trafficFines/:id', updateTrafficFine)
trafficFineRouter.delete('/trafficFines/:id', deleteTrafficFine)




module.exports = trafficFineRouter 