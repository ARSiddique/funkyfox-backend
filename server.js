require('dotenv').config()
const express = require("express")

const connectDB = require('./database/db')
const router = require('./routes/admin_routes')
const incomeRouter = require('./routes/income_routes')
const expenseRouter = require('./routes/expense_routes')
const profit_lossRouter = require('./routes/profit_loss_routes')
const driverRouter = require("./routes/driver_routes")
const vehiclesRouter = require('./routes/vehicles_routes')
const accidentRouter = require('./routes/accident_routes')
const rental_reportRouter = require('./routes/rental_report_routes')
const complaintRouter = require('./routes/compalint_report_routes')
const maintainanceRouter = require('./routes/maintainance_routes')
const financial_reportRouter = require('./routes/financial_report_routes')
const operational_reportRouter = require('./routes/operational_report_routes')
const traffic_finesRouter = require('./routes/traffic_fines_routes')
const maintainance_activityRouter = require('./routes/maintainance_activity_routes')


const app = express()
const port = process.env.PORT
connectDB()
app.use(express.json())
app.use('/api/auth', router)
app.use('/api/income', incomeRouter)
app.use('/api/expense', expenseRouter)
app.use('/api/accident', accidentRouter)
app.use('/api/compaint', complaintRouter)
app.use('/api/driver', driverRouter)
app.use('/api/financialReport', financial_reportRouter)
app.use('/api/profitLoss', profit_lossRouter)
app.use('/api/rentalReport', rental_reportRouter)
app.use('/api/maintainanceActivity', maintainance_activityRouter)


app.use('/api/maintatinance', maintainanceRouter)
app.use('/api/operationalReport', operational_reportRouter)
app.use('/api/vehicles', vehiclesRouter)
app.use('/api/trafficFine', traffic_finesRouter)


app.listen(port, () => {
    console.log(`app is listening and up on port : ${port}`)
})


