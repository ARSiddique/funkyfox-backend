const authModel = require('../models/admin_model')
const expenseModel = require('../models/expense_model')
const incomeModel = require('../models/income_model')
const vehicleModel = require('../models/vehicles_models')


const createExpense = async (req, res) => {
    try {
        const { amount_num, date_, category, description, reiptnum_num, paymentmethod , admin, income, vehicle } = req.body
        const expense = await expenseModel.create({ amount_num, date_, category, description, reiptnum_num, paymentmethod, admin, income, vehicle })
        const adminExpense = await authModel.findById(admin)
        adminExpense.Expense.push(expense._id)
        await adminExpense.save()
        const IncomeExpense = await incomeModel.findById(income)
        IncomeExpense.Expense.push(expense._id)
        await IncomeExpense.save()
        const vehicleExpense = await vehicleModel.findById(vehicle)
        vehicleExpense.Expense.push(expense._id)
        await vehicleExpense.save()
        res.status(201).json({ success: true, adminExpense })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getAllExpenses = async (req, res) => {
    try {
        const expenses = await expenseModel.find()
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
const getSingleExpense = async (req, res) => {
    try {
        const expense = await expenseModel.findById(req.params.id)
        // .populate('Income').populate('vehicles')
        if (!expense) return res.status(404).json({ message: 'Expense not found' })
        res.json(expense)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
const updateExpense = async (req, res) => {
    try {
        const { amount_num, date_, category, description, reiptnum_num, paymentmethod } = req.body
        const expense = await expenseModel.findByIdAndUpdate(req.params.id, {
            amount_num, date_, category, description, reiptnum_num, paymentmethod
        }, { new: true })

        if (!expense) return res.status(404).json({ message: 'Expense not found' })
        res.json(expense)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteExpense = async (req, res) => {
    try {
        const expense = await expenseModel.findByIdAndDelete(req.params.id);
        if (!expense) return res.status(404).json({ message: 'Expense not found' })
        res.json({ message: 'Expense deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = { createExpense, getAllExpenses, getSingleExpense, updateExpense, deleteExpense } 