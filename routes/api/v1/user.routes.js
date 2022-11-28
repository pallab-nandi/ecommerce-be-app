const express = require('express');
const userController = require('../../../src/controllers/user.controller');
const userValidator = require('../../../src/validators/user.validator');

const router = express.Router();

//fetching all users
router.get('/all', userController.findAll);

//fetch user by ID
router.get('/:id', [userValidator.userValidID], userController.findOne);

//create user
// router.post('/create', [userValidator.userValidCreateBody], userController.createUser);

//update user by ID
router.put('/:id/update', [userValidator.userValidID], [userValidator.userValidUpdateBody], userController.updateUser);

//delete user by ID
router.delete('/:id/delete', [userValidator.userValidID], userController.deleteUser);


module.exports = router;