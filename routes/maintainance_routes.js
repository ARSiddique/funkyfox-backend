const express = require('express')
const { createMaintainance, getAllMaintainance, getSingleMaintainance, updateMaintainance, deleteMaintainance } = require('../controllers/maintainance_controller')
const maintainanceRouter = express.Router()

maintainanceRouter.post('/maintainance', createMaintainance)
maintainanceRouter.get('/maintainance', getAllMaintainance)
maintainanceRouter.get('/maintainance/:id', getSingleMaintainance)
maintainanceRouter.patch('/maintainance/:id', updateMaintainance)
maintainanceRouter.delete('/maintainance/:id', deleteMaintainance)




module.exports = maintainanceRouter 