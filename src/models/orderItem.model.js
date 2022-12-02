const { DataTypes } = require("sequelize")

module.exports = function(sequelize, Sequelize) {
    const orderItem = sequelize.define('orderItems', {
        id : {
            type : DataTypes.TINYINT,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        userID : {
            type : DataTypes.TINYINT,
            allowNull : false
        },
        productID : {
            type : DataTypes.TINYINT,
            allowNull : false
        },
        quantity : {
            type : DataTypes.TINYINT,
            allowNull : false
        }
    }, {
        tableName : 'orderItems'
    })

    return orderItem;
}