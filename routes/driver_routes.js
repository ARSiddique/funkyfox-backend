const express = require('express')
const driverRouter = express.Router()
const { createDriver, getAllDrivers, getSingleDriver, updateDriver, deleteDriver } = require('../controllers/driver_controller')

driverRouter.post('/driver', createDriver)
driverRouter.get('/driver', getAllDrivers)
driverRouter.get('/driver/:id', getSingleDriver)
driverRouter.patch('/driver/:id', updateDriver)
driverRouter.delete('/driver/:id', deleteDriver)




module.exports = driverRouter 