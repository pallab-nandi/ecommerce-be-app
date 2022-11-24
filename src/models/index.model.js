const { sequelize } = require('./../connections/sequelize.connection');
const { Sequelize } = require('sequelize');

db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const category = require('./category.model')(sequelize, Sequelize);
const product = require('./product.model')(sequelize, Sequelize);

db.category = category;
db.product = product;

module.exports = db;