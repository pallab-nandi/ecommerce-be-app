const { DataTypes } = require("sequelize")

module.exports = function(sequelize, Sequelize) {
    const user = sequelize.define('users', {
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
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {
        tableName : 'users'
    })

    return user
}