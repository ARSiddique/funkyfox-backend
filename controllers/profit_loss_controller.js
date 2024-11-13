const authModel = require('../models/admin_model');
const profitLossModel = require('../models/profit_loss_models')

const createProfitLoss = async (req, res) => {
    
    try {
        const { period, incometotal_num, expensetotal_num, profit_num,admin } = req.body;
        
        const profitLoss = await profitLossModel.create({period, incometotal_num, expensetotal_num, profit_num , admin});
        const adminProfitLoss = await authModel.findById(admin)
        adminProfitLoss.ProfitLoss.push(profitLoss._id)
        adminProfitLoss.save()
        res.status(201).json({success:true, adminProfitLoss});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getAllProfitLoss =  async (req, res) => {
    try {
        const profitLossEntries = await profitLossModel.find();
        res.json(profitLossEntries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getSingleProfitLoss = async (req, res) => {
    try {
        const profitLossEntry = await profitLossModel.findById(req.params.id);
        if (profitLossEntry == null) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.json(profitLossEntry);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateProfitLoss =  async (req, res) => {
    const { period, incometotal_num, expensetotal_num, profit_num } = req.body;

    try {
        const updatedEntry = await profitLossModel.findByIdAndUpdate(req.params.id, {
            period,
            incometotal_num,
            expensetotal_num,
            profit_num
        }, { new: true });

        if (!updatedEntry) {
            return res.status(404).json({ message: 'Entry not found' });
        }

        res.json(updatedEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteProfitLoss =  async (req, res) => {
    try {
        const deletedEntry = await profitLossModel.findByIdAndDelete(req.params.id);
        if (!deletedEntry) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.json({ message: 'Entry deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}




module.exports = { createProfitLoss, getAllProfitLoss, getSingleProfitLoss, updateProfitLoss, deleteProfitLoss } 