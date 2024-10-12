const express = require('express');
const router = express.Router();

const { createTransaction } = require('../controllers/transactioncontroller');

router.route('/home/:id').post(createTransaction);

module.exports = router;