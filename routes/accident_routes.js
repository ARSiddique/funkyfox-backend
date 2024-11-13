const express = require('express')
const accidentRouter = express.Router()
const { createAccident, getAllAccidents, getSingleAccident, updateAccident, deleteAccident } = require('../controllers/accident_controller')

accidentRouter.post('/accident', createAccident)
accidentRouter.get('/accident', getAllAccidents)
accidentRouter.get('/accident/:id', getSingleAccident)
accidentRouter.patch('/accident/:id', updateAccident)
accidentRouter.delete('/accident/:id', deleteAccident)




module.exports = accidentRouter 