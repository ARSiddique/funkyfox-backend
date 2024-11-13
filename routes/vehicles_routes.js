const express = require('express')
const { createVehicles, getAllVehicles, getSingleVehicle, updateVehicle, deleteVehicle } = require('../controllers/vehicles_controller')
const vehicalRouter = express.Router()

vehicalRouter.post('/vehicles', createVehicles)
vehicalRouter.get('/vehicles', getAllVehicles)
vehicalRouter.get('/vehicles/:id', getSingleVehicle)
vehicalRouter.patch('/vehicles/:id', updateVehicle)
vehicalRouter.delete('/vehicles/:id', deleteVehicle)




module.exports = vehicalRouter 