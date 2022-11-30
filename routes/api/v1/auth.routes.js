const express = require('express');
const authController = require('../../../src/controllers/auth.controller');
const userValidator = require('../../../src/validators/user.validator');
const authValidator = require('../../../src/validators/auth.validator');

const router = express.Router();

//SignUp
router.post('/signUp', [userValidator.userValidCreateBody, authValidator.isEmailDuplicate, authValidator.validEmail, authValidator.validPassword], authController.signUp);

//LogIn
router.post('/login', authController.signIn);

module.exports = router;