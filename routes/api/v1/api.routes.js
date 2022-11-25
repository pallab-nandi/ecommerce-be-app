const express = require('express');
const router = express.Router();

const categoryRouter = require('./category.routes');
const productRouter = require('./product.routes');
const userRouter = require('./user.routes');

router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/user', userRouter);

module.exports = router;