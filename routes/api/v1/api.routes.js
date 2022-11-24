const express = require('express');
const router = express.Router();

const categoryRouter = require('./category.routes');
const productRouter = require('./product.routes');

router.use('/category', categoryRouter);
router.use('/product', productRouter);

module.exports = router;