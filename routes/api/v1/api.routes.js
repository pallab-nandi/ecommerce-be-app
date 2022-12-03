const express = require('express');
const router = express.Router();

const categoryRouter = require('./category.routes');
const productRouter = require('./product.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const cartRouter = require('./cart.routes');

router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/cart', cartRouter);

module.exports = router;