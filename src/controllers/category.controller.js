const { executeWithSync } = require('../connections/sequelize.connection');
const { categoryService } = require('../services/category.service');

function findAll(req, res) {
    executeWithSync(
        categoryService
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
    )
}

module.exports = {
    findAll
}