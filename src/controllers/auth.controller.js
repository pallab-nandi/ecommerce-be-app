const { authService } = require('../services/auth.service');

function signUp(req, res) {
    
    let user = {};
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    let role = req.body.role

    authService
    .signUp(user, role)
    .then((user) => {
        let returnValues = {};
        returnValues.message = 'User registered successfully';
        returnValues.user = user;
        res.setHeader('content-type', 'application/json');
        res.writeHead(201);
        res.end(JSON.stringify(returnValues))
    })
    .catch((err) => {
        console.log(err);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify({
            'message' : 'Error while creating new user'
        }))
    })
}

module.exports = {
    signUp
}