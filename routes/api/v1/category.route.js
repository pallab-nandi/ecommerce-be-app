const categoryController = require('./../../../src/controllers/category.controller');

module.exports = function(app) {

    //fetching all categories
    app.get('/ecomm/api/v1/categories', categoryController.findAll);
    
}