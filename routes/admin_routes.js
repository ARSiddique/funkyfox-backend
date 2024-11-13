const express = require('express')
const router = express.Router()
const { register, login, deleteAuth, getLogins, getSingleLogin, updateAuth, updatePassword, forgetPassword, resetPassword } = require('../controllers/admin_controller')
router.post('/register', register)
router.post('/login', login)
router.get('/getLogin', getLogins)
router.get('/getSLogin/:id', getSingleLogin)
router.put('/updateAuth/:id', updateAuth)
router.delete('/delete/:id', deleteAuth)
router.patch('/updatepassword/:id', updatePassword)
router.post('/admin/forgetPassword', forgetPassword)
router.post('/admin/resetPassword/:token', resetPassword)


module.exports = router 