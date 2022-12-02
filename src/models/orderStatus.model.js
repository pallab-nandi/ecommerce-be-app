const { DataTypes } = require("sequelize")

module.exports = function(sequelize, Sequelize) {
    const orderStatus = sequelize.define('orderStatus', {
        id : {
            type : DataTypes.TINYINT,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        status : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {
        tableName : 'orderStatus'
    })

    return orderStatus;
}