const { userService } = require('../services/user.service');

function findAll(req, res) {
    return userService
        .findAll()
        .then((users) => users.map((user) => user.dataValues))
        .then((user) => {
            console.log('All users fetched successfully', user);
            let returnValues = {};
            returnValues.message = 'All users fetched successfully';
            returnValues.user = user;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValues))
        })
        .catch((err) => {
            console.log('Error while fetching all users', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while fetching all users'
            }))
        })
}

function findOne(req, res) {

    let id = req.params.id;

    return userService
        .findOne(id)
        .then((user) => user.dataValues)
        .then((user) => {
            console.log('User fetched successfully', user);
            let returnValues = {};
            returnValues.message = 'User fetched successfully';
            returnValues.user = user;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValues))
        })
        .catch((err) => {
            console.log('Error while fetching this user', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while fetching this user'
            }))
        })
}

function createUser(req, res) {

    let user = {};
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    
    return userService
        .createUser(user)
        .then((user) => user.dataValues)
        .then((user) => {
            console.log('User created successfully', user);
            let returnValues = {};
            returnValues.message = 'User created successfully';
            returnValues.user = user;
            res.setHeader('content-type', 'application/json');
            res.writeHead(201);
            res.end(JSON.stringify(returnValues))
        })
        .catch((err) => {
            console.log('Error while creating user', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while creating user'
            }))
        })
}

function updateUser(req, res) {

    let user = {};
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    let id = req.params.id;

    return userService
        .updateUser(user, id)
        .then((user) => user.dataValues)
        .then((user) => {
            console.log('User updated successfully', user);
            let returnValues = {};
            returnValues.message = 'User updated successfully';
            returnValues.user = user;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValues))
        })
        .catch((err) => {
            console.log('Error while updating user', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while updating user'
            }))
        })
}

function deleteUser(req, res) {

    let id = req.params.id;

    return userService
        .deleteUser(id)
        .then((user) => user.dataValues)
        .then((user) => {
            console.log('User deleted successfully', user);
            let returnValues = {};
            returnValues.message = 'User deleted successfully';
            returnValues.user = user;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValues))
        })
        .catch((err) => {
            console.log('Error while deleting user', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while deleting user'
            }))
        })
}

module.exports = {
    findAll,
    findOne,
    createUser,
    updateUser,
    deleteUser
}