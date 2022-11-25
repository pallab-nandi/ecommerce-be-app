const { sequelize } = require('./../connections/sequelize.connection');
const { Sequelize } = require('sequelize');

db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const category = require('./category.model')(sequelize, Sequelize);
const product = require('./product.model')(sequelize, Sequelize);
const user = require('./user.model')(sequelize, Sequelize);

db.category = category;
db.product = product;
db.user = user;

module.exports = db;