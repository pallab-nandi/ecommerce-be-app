const express = require('express');
const categoryController = require('../../../src/controllers/category.controller');
const categoryValidator = require('../../../src/validators/category.validator');

const router = express.Router();

//fetch all categories
router.get('/all', categoryController.findAll);

//fetch category by its ID
router.get('/:id',[categoryValidator.categoryValidID], categoryController.findOne);

//create a new category
router.post('/create', [categoryValidator.categoryValidCreateBody], categoryController.createCategory);

//update a existed category
router.post('/:id/update', [categoryValidator.categoryValidID], [categoryValidator.categoryValidUpdateBody], categoryController.updateCategory);

//delete a category by its ID
router.delete('/:id/delete', [categoryValidator.categoryValidID], categoryController.deleteCategory);

module.exports = router;