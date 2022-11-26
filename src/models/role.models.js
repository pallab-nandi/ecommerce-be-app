const { DataTypes } = require("sequelize")

module.exports = function(sequelize, Sequelize) {
    const role = sequelize.define('roles', {
        id : {
            type : DataTypes.TINYINT,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })

    return role;
}