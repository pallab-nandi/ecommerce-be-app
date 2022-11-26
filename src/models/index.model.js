const { sequelize } = require('./../connections/sequelize.connection');
const { Sequelize } = require('sequelize');

db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const category = require('./category.model')(sequelize, Sequelize);
const product = require('./product.model')(sequelize, Sequelize);
const user = require('./user.model')(sequelize, Sequelize);
const role = require('./role.models')(sequelize, Sequelize);

db.category = category;
db.product = product;
db.user = user;
db.role = role;

category.hasMany(product, {
    foreignKey : 'categoryID',
    targetKey : 'id'
})

product.belongsTo(category, {
    foreignKey : 'categoryID',
    targetKey : 'id'
})

role.belongsToMany(user, {
    through : 'user_roles',
    foreignKey : 'roleID',
    targetKey : 'id'
})

user.belongsToMany(role, {
    through : 'user_roles',
    foreignKey : 'userID',
    targetKey : 'id'
})

module.exports = db;