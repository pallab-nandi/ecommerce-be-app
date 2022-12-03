const express = require('express');
const cartController = require('../../../src/controllers/cart.controller');
const cartValidator = require('../../../src/validators/cart.validator');
const authValidator = require('../../../src/validators/auth.validator');

const router = express.Router();

//add Cart
router.post('/add', [cartValidator.cartValidCreateBody, authValidator.verifyJwt], cartController.addCart);

//fetching Cart
router.get('/view', [authValidator.verifyJwt], cartController.getCart);

//update Cart
router.put('/:id', [cartValidator.cartValidID, cartValidator.cartValidUpdateBody, authValidator.verifyJwt], cartController.updateCart);

//delete Cart
router.delete('/:id', [cartValidator.cartValidID, authValidator.verifyJwt], cartController.deleteCartByID);

module.exports = router;