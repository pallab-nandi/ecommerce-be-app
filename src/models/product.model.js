const { DataTypes } = require("sequelize")

module.exports = function(sequelize, Sequelize) {
    const product = sequelize.define('products', {
        id : {
            type : DataTypes.TINYINT,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        categoryID : {
            type : DataTypes.TINYINT,
            allowNull : false
        },
        description : {
            type : DataTypes.STRING
        },
        cost : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    }, {
        tableName : 'products'
    })

    return product;
}