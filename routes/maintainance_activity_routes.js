const express = require('express')
const maintainanceActivityRouter = express.Router()
const { createMaintainanceActivity, getAllMaintainanceActivities, updateMaintainanceActivity, deleteMaintainanceActivity, getSingleMaintainanceActivity } = require('../controllers/maintainance_activitycontroller')

maintainanceActivityRouter.post('/maintainanceActivity', createMaintainanceActivity)
maintainanceActivityRouter.get('/maintainanceActivity', getAllMaintainanceActivities)
maintainanceActivityRouter.get('/maintainanceActivity/:id', getSingleMaintainanceActivity)
maintainanceActivityRouter.patch('/maintainanceActivity/:id', updateMaintainanceActivity)
maintainanceActivityRouter.delete('/maintainanceActivity/:id', deleteMaintainanceActivity)




module.exports = maintainanceActivityRouter ;