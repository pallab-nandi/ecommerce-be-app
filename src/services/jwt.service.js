const jwt = require('jsonwebtoken');
const authConfig = require('../configs/auth.config');

class JwtService {

    createJwtToken(payload) {
        let token = jwt.sign(payload, 
            authConfig.secret,
            {
                expiresIn : authConfig.expiryAt
            });
        return `Bearer ${token}`;
    }

    validateJwt(token) {
        if(token && token.includes('Bearer')) {
            token = token.substring(7, token.length);
            let decoded = jwt.verify(token, authConfig.secret);
            return {
                validate : true,
                decodedJwt : decoded
            }
        }
        return {
            validate : false,
            message : 'Token is not present'
        }
    }
}

let jwtService = new JwtService();
module.exports = { jwtService };