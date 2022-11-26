const { Sequelize } = require('sequelize');
const dbConfig = require('./../configs/db.config');

function createConnection() {
    const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        define : {
            timestamps : false
        },
        pool : dbConfig.pool
    })

    sequelize.authenticate().then(() => {
        console.log('Connected Successfully');
    }).catch((err) => {
        console.log('Error while connecting',err);
    })

    return { sequelize };
}

const { sequelize } = createConnection();

module.exports = { sequelize };