require('dotenv').config();

module.exports = {
    HOST : process.env.DB_HOST,
    USER : process.env.DB_USER,
    PASSWORD : process.env.DB_PASSWORD,
    DB : process.env.DB_NAME,
    dialect : 'mysql',
    pool : {
        min : 0,
        max : 5,
        acquire : 30000,
        idle : 10000
    }
}