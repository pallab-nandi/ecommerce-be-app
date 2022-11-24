const express = require('express');
const categoryController = require('../../../src/controllers/category.controller');

const router = express.Router();

router.get('/all', categoryController.findAll);

module.exports = router;