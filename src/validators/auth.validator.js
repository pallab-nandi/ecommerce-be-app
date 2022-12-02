const { jwtService } = require("../services/jwt.service");
const { userService } = require("../services/user.service");

function isEmailDuplicate(req, res, next) {
    let email = req.body.email;

    userService
    .findUserByEmail(email)
    .then((user) => {
        if(user) {
            console.log('Email is already present');
            res.setHeader('content-type', 'application/json');
            res.writeHead(400);
            res.end(JSON.stringify({
                'message' : 'Email is already present.'
            }))
        } else next();
    })
}

function validEmail(req, res, next) {
    let email = req.body.email;
    let valid = false;

    let parts = email.split('@');
    if(!parts[0].includes(' ') && parts.length == 2 && parts[0] && parts[1]  && parts[1].includes('.')) {
        valid = true;
        let subPart = parts[1].split('.');
        for(let part of subPart) {
            if(!part) valid = false;
        }
    }

    if(!valid) {
        console.log('Email is not valid.');
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Email is not valid. Provide valid email'
        }))
    } else next();
}

function validPassword(req, res, next) {
    let password = req.body.password;
    
    if(password.length < 8) {
        console.log('Password must be minimum 8');
        res.setHeader('content-type', 'applicaiton/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Error! Password length must be minimum of 8'
        }))
    } else next();
}

function verifyJwt(req, res, next) {
    try {
        let token = req.headers['x-access-token'];
        let decoded = jwtService.validateJwt(token);
        if(decoded.validate) {
            req.decodedJwt = decoded.decodedJwt;
            next();
        } else {
            console.log(decoded.message);
            res.setHeader('content-type', 'application/json');
            res.writeHead(401);
            res.end(JSON.stringify({
                message : decoded.message
            }))
        }
    } catch (err) {
        console.log(err.message);
        res.setHeader('content-type', 'application/json');
        res.writeHead(401);
        res.end(JSON.stringify({
            message : 'Unauthorized access'
        }))
    }
}

function isAdmin(req, res, next) {
    if(!req.decodedJwt) {
        res.setHeader('content-type', 'application/json');
        res.writeHead(401);
        res.end(JSON.stringify({
            message: 'Decoded Jwt is not present for check'
        }));
    } else {
        let roles = req.decodedJwt.roles;
        let adminRole = roles.filter((role) => role === 'admin');
        if(adminRole.length == 0) {
            console.log('User not an Admin');
            res.setHeader('content-type', 'application/json');
            res.writeHead(403);
            res.end(JSON.stringify({
                message : 'Unauthorized access'
            }))
        } else next();
    }
}

module.exports = {
    isEmailDuplicate,
    validEmail,
    validPassword,
    verifyJwt,
    isAdmin
}