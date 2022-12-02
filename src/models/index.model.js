const { sequelize } = require('./../connections/sequelize.connection');
const { Sequelize } = require('sequelize');

db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const category = require('./category.model')(sequelize, Sequelize);
const product = require('./product.model')(sequelize, Sequelize);
const user = require('./user.model')(sequelize, Sequelize);
const role = require('./role.models')(sequelize, Sequelize);
const orderDetail = require('./orderDetail.model')(sequelize, Sequelize);
const orderItem = require('./orderItem.model')(sequelize, Sequelize);
const orderStatus = require('./orderStatus.model')(sequelize, Sequelize);

db.category = category;
db.product = product;
db.user = user;
db.role = role;
db.orderDetail = orderDetail;
db.orderItem = orderItem;
db.orderStatus = orderStatus;

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

orderStatus.hasMany(orderDetail, {
    foreignKey : 'status',
    targetKey : 'id'
})

orderDetail.belongsTo(orderStatus, {
    foreignKey : 'status',
    targetKey : 'id'
})

user.hasMany(orderItem, {
    foreignKey : 'userID',
    targetKey : 'id'
})

orderItem.belongsTo(user, {
    foreignKey : 'userID',
    targetKey : 'id'
})

product.hasMany(orderItem, {
    foreignKey : 'productID',
    targetKey : 'id'
})

orderItem.belongsTo(product, {
    foreignKey : 'productID',
    targetKey : 'id'
})

orderItem.hasOne(orderDetail, {
    foreignKey : 'orderID',
    targetKey : 'id'
})

orderDetail.belongsTo(orderItem, {
    foreignKey : 'orderID',
    targetKey : 'id'
})

const data = require('../../data/index.data');

const roleData = data.roleData();
const userData = data.userData();
const categoryData = data.categoryData();
const productData = data.productData();
const orderStatusData = data.orderStatusData();
const orderItemsData = data.orderItemsData();
const orderDetailsData = data.orderDetailsData();

function initData() {
    return role
    .bulkCreate(roleData)
    .then(() => {
        console.log('Roles table data initialized');
        return user
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
    .then(() => {
        return category
        .bulkCreate(categoryData)
        .then(() => {
            console.log('Category table data initialized');
            return product
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
    })
    .then(() => {
        return orderStatus
        .bulkCreate(orderStatusData)
        .then(() => {
            console.log('Order Status Data initialized');
        })
        .catch((err) => {
            console.log('Error while data initializing', err);
        })
    })
    .then(() => {
        return orderItem
        .bulkCreate(orderItemsData)
        .then(() => {
            console.log('Order Items Data initialized');
            return orderDetail
            .bulkCreate(orderDetailsData)
            .then(() => {
                console.log('Order Details data initialized');
            })
            .catch((err) => {
                console.log('Error while initializing order details',err);
            })
        })
        .catch((err) => {
            console.log('Error while initializing order details',err);
        })
    })
    .catch((err) => {
        console.log("Error while initializing Role Data", err);
    })  
}

db.initData = initData;

module.exports = db;