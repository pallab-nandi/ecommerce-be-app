const { authService } = require('../services/auth.service');

function signUp(req, res) {
    
    let user = {};
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    let role = req.body.role

    return authService
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

function signIn(req, res) {

    let email = req.body.email;
    let password = req.body.password

    return authService
    .signIn(email, password)
    .then((authRes) => {
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({
            'message' : "User loggedIn successfully",
            authRes
        }))
    })
    .catch((err) => {
        res.setHeader('content-type', 'application/json');
        if(!err.errorCode) {
            err.errorCode = 500;
            err.message = 'Error while signIn'
        }
        res.writeHead(err.errorCode);
        res.end(JSON.stringify({
            message : err.message
        }));
    })
}

module.exports = {
    signUp,
    signIn
}