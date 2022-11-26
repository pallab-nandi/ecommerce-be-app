const express = require('express');
const productController = require('../../../src/controllers/product.controller');
const productValidator = require('../../../src/validators/product.validator');

const router = express.Router();

//fetching all products
router.get('/all', productController.findAll);

//fetch product by ID
router.get('/:id', [productValidator.productValidID], productController.findOne);

//creating product
router.post('/create', [productValidator.productValidCreateBody], productController.createProduct);

//update product by ID
router.put('/:id/update', [productValidator.productValidID], [productValidator.productValidUpdateBody], productController.updateProduct);

//delete product by ID
router.delete('/:id/delete', [productValidator.productValidID], productController.deleteProductByID);

module.exports = router;