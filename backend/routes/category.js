const express = require('express');
const router = express.Router();

const { createCategory, getCategories, categoryDetails } = require('../controllers/categorycontroller');

router.route('/category').post(createCategory);
router.route('/home').get(getCategories);
router.route('/home/:id').get(categoryDetails);


module.exports = router;