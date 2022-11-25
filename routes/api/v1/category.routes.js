const express = require('express');
const categoryController = require('../../../src/controllers/category.controller');

const router = express.Router();

//fetch all categories
router.get('/all', categoryController.findAll);

//fetch category by its ID
router.get('/:id', categoryController.findOne);

//create a new category
router.post('/create', categoryController.createCategory);

//update a existed category
router.post('/:id/update', categoryController.updateCategory);

//delete a category by its ID
router.delete('/:id/delete', categoryController.deleteCategory);

module.exports = router;