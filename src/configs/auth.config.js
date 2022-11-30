require('dotenv').config();

module.exports = {
    secret : process.env.AUTH_SECRET,
    expiryAt : process.env.AUTH_EXPIRY
}