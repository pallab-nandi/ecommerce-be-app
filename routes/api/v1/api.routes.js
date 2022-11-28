const express = require('express');
const router = express.Router();

const categoryRouter = require('./category.routes');
const productRouter = require('./product.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');

router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);

module.exports = router;