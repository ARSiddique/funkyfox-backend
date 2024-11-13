const authModel = require('../models/admin_model');
const driverModel = require('../models/driver_model');
const incomeModel = require('../models/income_model');
const vehicleModel = require('../models/vehicles_models');
const createIncome = async (req, res) => {
    try {
        const { amount_num, date, service, deductions,admin, driver, vehicles} = req.body
        const newIncome = await incomeModel.create({ amount_num, date, service, deductions,admin, driver, vehicles })
        const adminIncome = await authModel.findById(admin)
        adminIncome.Income.push(newIncome._id)
        adminIncome.save()
        const driverIncome = await driverModel.findById(driver)
        driverIncome.driver.push(newIncome._id)
        driverIncome.save()
        const vehicleIncome = await vehicleModel.findById(vehicle)
        vehicleIncome.vehicles.push(newIncome._id)
        vehicleIncome.save()
        res.status(201).json({ success: true, adminIncome })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};
const getAllIncomes = async (req, res) => {
    try {
        const incomes = await incomeModel.find()
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getSingleIncome = async (req, res) => {
    try {
        const income = await incomeModel.findById(req.params.id)
        // .populate('driver').populate('vehicles')
        if (income) {
            res.status(200).json(income)
        } else {
            res.status(404).json({ message: "Income not found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateIncome = async (req, res) => {
    try {
        const updatedIncome = await incomeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedIncome) {
            res.status(200).json(updatedIncome)
        } else {
            res.status(404).json({ message: "Income not found" })
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const delelteIncome = async (req, res) => {
    try {
        const deletedIncome = await incomeModel.findByIdAndDelete(req.params.id);
        if (deletedIncome) {
            res.status(200).json({ message: "Income deleted" })
        } else {
            res.status(404).json({ message: "Income not found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createIncome, getAllIncomes, getSingleIncome, updateIncome, delelteIncome } 