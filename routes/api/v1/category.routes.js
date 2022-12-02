const express = require('express');
const categoryController = require('../../../src/controllers/category.controller');
const categoryValidator = require('../../../src/validators/category.validator');
const authValidator = require('../../../src/validators/auth.validator');

const router = express.Router();

//fetch all categories
router.get('/all', categoryController.findAll);

//fetch category by its ID
router.get('/:id',[categoryValidator.categoryValidID], categoryController.findOne);

//create a new category
router.post('/create', [categoryValidator.categoryValidCreateBody, authValidator.verifyJwt, authValidator.isAdmin], categoryController.createCategory);

//update a existed category
router.put('/:id/update', [categoryValidator.categoryValidID, categoryValidator.categoryValidUpdateBody, authValidator.verifyJwt, authValidator.isAdmin], categoryController.updateCategory);

//delete a category by its ID
router.delete('/:id/delete', [categoryValidator.categoryValidID, authValidator.verifyJwt, authValidator.isAdmin], categoryController.deleteCategory);

module.exports = router;