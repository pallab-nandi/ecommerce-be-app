const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

function userData() {
    let userData = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.data.json'), 'utf-8'));
    userData.map((user) => {
        user.password = bcrypt.hashSync(user.password, 8);
    })
    return userData;
}

function categoryData() {
    let categoryData = JSON.parse(fs.readFileSync(path.join(__dirname, 'categories.data.json'), 'utf-8'));
    return categoryData;
}

function productData() {
    let productData = JSON.parse(fs.readFileSync(path.join(__dirname, 'products.data.json'), 'utf-8'));
    return productData;
}

function roleData() {
    let roleData = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles.data.json'), 'utf-8'));
    return roleData;
}

module.exports = {
    userData,
    categoryData,
    productData,
    roleData
}