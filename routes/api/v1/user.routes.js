const express = require('express');
const userController = require('../../../src/controllers/user.controller');

const router = express.Router();

//fetching all users
router.get('/all', userController.findAll);

//fetch user by ID
router.get('/:id', userController.findOne);

//create user
router.post('/create', userController.createUser);

//update user by ID
router.post('/:id/update', userController.updateUser);

//delete user by ID
router.delete('/:id/delete', userController.deleteUser);


module.exports = router;