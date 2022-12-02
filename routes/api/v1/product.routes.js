const express = require('express');
const productController = require('../../../src/controllers/product.controller');
const productValidator = require('../../../src/validators/product.validator');
const authValidator = require('../../../src/validators/auth.validator');

const router = express.Router();

//fetching all products
router.get('/all', productController.findAll);

//fetch product by ID
router.get('/:id', [productValidator.productValidID], productController.findOne);

//creating product
router.post('/create', [productValidator.productValidCreateBody, authValidator.verifyJwt, authValidator.isAdmin], productController.createProduct);

//update product by ID
router.put('/:id/update', [productValidator.productValidID, productValidator.productValidUpdateBody, authValidator.verifyJwt, authValidator.isAdmin], productController.updateProduct);

//delete product by ID
router.delete('/:id/delete', [productValidator.productValidID, authValidator.verifyJwt, authValidator.isAdmin], productController.deleteProductByID);

module.exports = router;