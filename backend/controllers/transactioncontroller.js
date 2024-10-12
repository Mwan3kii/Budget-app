const Transaction = require('../models/transaction');
const catchAsyncError = require('../middleware/catchAsyncErrors');


exports.createTransaction = catchAsyncError (async(req, res, next) => {
    const { name, amount } = req.body;
    console.log("Received data from frontend:", req.body);
    const user = await Transaction.create({
        name,
        amount
    });
});