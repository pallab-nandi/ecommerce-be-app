const { DataTypes } = require("sequelize")

module.exports = function(sequelize, Sequelize) {
    const orderDetail = sequelize.define('orderDetails', {
        id : {
            type : DataTypes.TINYINT,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        orderID : {
            type : DataTypes.TINYINT,
            allowNull : false
        },
        total : {
            type : DataTypes.DECIMAL,
            allowNull : false
        },
        status : {
            type : DataTypes.TINYINT,
            allowNull : false
        }
    }, {
        tableName : 'orderDetails'
    })

    return orderDetail;
}