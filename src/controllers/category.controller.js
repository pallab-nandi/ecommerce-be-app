const { categoryService } = require('../services/category.service');

function findAll(req, res) {
    return categoryService
        .getCategories()
        .then((categories) => categories.map((category) => category.dataValues))
        .then((category) => {
            console.log('All categories are fetched', category);
            let returnValue = {};
            returnValue.message = 'All categories are fetched successfully';
            returnValue.category = category;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValue));
        })
        .catch((err) => {
            console.log('Error while fetching categories', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while fetching categories'
            }))
        })
}

function findOne(req, res) {

    let id = req.params.id;

    return categoryService
        .getCategoryByID(id)
        .then((category) => category.dataValues)
        .then((category) => {
            console.log('Category fetched by ID', category);
            let returnValue = {}
            returnValue.message = 'Category fetched by ID';
            returnValue.category = category;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValue))
        })
        .catch((err) => {
            console.log('Error while fetching category', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while fetching category'
            }))
        })
}

function createCategory(req, res) {

    let category = {};
    category.name = req.body.name;
    category.description = req.body.description;

    return categoryService
        .createCategory(category)
        .then((category) => category.dataValues)
        .then((category) => {
            console.log('New category created', category);
            let returnValue = {};
            returnValue.message = 'New category created succesfully'
            returnValue.category = category;
            res.setHeader('content-type', 'application/json');
            res.writeHead(201);
            res.end(JSON.stringify(returnValue));
        })
        .catch((err) => {
            console.log('Error while creating category', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while creating category'
            }))
        })
}

function updateCategory(req, res) {

    let category = {};
    category.name = req.body.name;
    category.description = req.body.description;

    let id = req.params.id

    return categoryService
        .updateCategoryByID(category, id)
        .then((category) => category.dataValues)
        .then((category) => {
            console.log('Category updated successfully', category);
            let returnValue = {};
            returnValue.message = 'Category updated successfully';
            returnValue.category = category;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValue));
        })
        .catch((err) => {
            console.log('Error while updating category', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while updating category'
            }))
        })
}

function deleteCategory(req, res) {

    let id = req.params.id;

    return categoryService
        .deleteCategoryByID(id)
        .then((category) => category.dataValues)
        .then((category) => {
            console.log('Category deleted successfully', category);
            let returnValue = {};
            returnValue.message = 'Category deleted successfully';
            returnValue.category = category;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValue))
        })
        .catch((err) => {
            console.log("Error while deleting category", err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while deleting category'
            }))
        })
}

module.exports = {
    findAll,
    findOne,
    createCategory,
    updateCategory,
    deleteCategory
}