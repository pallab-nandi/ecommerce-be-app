const { DataTypes } = require("sequelize")

module.exports = function(sequelize, Sequelize) {
    const category = sequelize.define('categories', {
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
        description : {
            type : DataTypes.STRING,
        }
    }, {
        tableName : 'categories'
    })

    return category;
}