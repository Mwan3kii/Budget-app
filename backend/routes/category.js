const express = require('express');
const router = express.Router();

const { createCategory } = require('../controllers/categorycontroller');

router.route('/category').post(createCategory);


module.exports = router;