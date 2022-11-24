const express = require('express');
const productController = require('../../../src/controllers/product.controller');

const router = express.Router();

//fetching all products
router.get('/all', productController.findAll);

//fetch product by ID
router.get('/:id', productController.findOne);

//creating product
router.post('/create', productController.createProduct);

//update product by ID
router.post('/:id/update', productController.updateProduct);

//delete product by ID
router.delete('/:id/delete', productController.deleteProductByID);

module.exports = router;