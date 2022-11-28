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

const data = require('../../data/index.data');

const roleData = data.roleData();
const userData = data.userData();
const categoryData = data.categoryData();
const productData = data.productData();

function initData() {
    role
    .bulkCreate(roleData)
    .then(() => {
        console.log('Roles table data initialized');
        user
        .bulkCreate(userData)
        .then((users) => users.map((user) => {        
            if(user.name == 'Pallab Nandi') {
                user.setRoles([1, 2]);
            } else user.setRoles([2]);
        }))
        .then(() => {
            console.log('User table data initialized');
        })
        .catch((err) => {
            console.log("Error while initializing User Data", err);
        })
    })
    .catch((err) => {
        console.log("Error while initializing Role Data", err);
    })

    category
    .bulkCreate(categoryData)
    .then(() => {
        console.log('Category table data initialized');
        product
        .bulkCreate(productData)
        .then(() => {
            console.log('Product table data initialized');
        })
        .catch((err) => {
            console.log("Error while initializing Product Data", err);
        })
    })
    .catch((err) => {
        console.log("Error while initializing Category Data", err);
    })
}

db.initData = initData;

module.exports = db;