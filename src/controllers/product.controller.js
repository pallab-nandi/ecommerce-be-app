const { productService } = require('../services/product.service');

function findAll(req, res) {

    let filters = req.query;

    productService
        .getProducts(filters)
        .then((products) => products.map((product) => product.dataValues))
        .then((product) => {
            console.log('All products are fetched successfully', product);
            let returnValues = {};
            returnValues.message = 'All products are fetched successfully';
            returnValues.product = product;
            res.setHeader('content-type', 'applciation/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValues));
        })
        .catch((err) => {
            console.log('Error while fetching products', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while fetching products'
            }))
        })
}

function findOne(req, res) {

    let ids = req.params;

    productService
        .getProductByID(ids)
        .then((product) => product.dataValues)
        .then((product) => {
            console.log('Product fetched by ID successfully', product);
            let returnValues = {};
            returnValues.message = 'Product fetched successfully by ID';
            returnValues.product = product;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValues));
        })
        .catch((err) => {
            console.log('Error while fetching the product', err);
            res.setHeader('content-type', 'appliction/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while fetching the product'
            }))
        })
}

function createProduct(req, res) {

    let product = {};
    product.categoryID = req.body.categoryID;
    product.name = req.body.name;
    product.description = req.body.description;
    product.cost = req.body.cost;

    productService
        .createProduct(product)
        .then((product) => product.dataValues)
        .then((product) => {
            console.log('New Product created successfully', product);
            let returnValues = {};
            returnValues.message = 'New Product created successfully';
            returnValues.product = product;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValues));
        })
        .catch((err) => {
            console.log('Error while creating product', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while creating product'
            }))
        })
}

function updateProduct(req, res) {

    let product = {};
    product.categoryID = req.body.categoryID;
    product.name = req.body.name;
    product.description = req.body.description;
    product.cost = req.body.cost;

    let id = req.params.id;

    productService
        .updateProductByID(product, id)
        .then((product) => product.dataValues)
        .then((product) => {
            console.log('Product updated successfully', product);
            let returnValues = {};
            returnValues.message = 'Product Updated Successfully';
            returnValues.product = product;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValues));
        })
        .catch((err) => {
            console.log('Error while updating product', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while updating product'
            }))
        })
}

function deleteProductByID(req, res) {
    
    let id = req.params.id;

    productService
        .deleteProductByID(id)
        .then((product) => product.dataValues)
        .then((product) => {
            console.log('Product deleted Successfully', product);
            let returnValues = {};
            returnValues.message = 'Product deleted successfully';
            returnValues.product = product;
            res.setHeader('content-type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(returnValues));
        })
        .catch((err) => {
            console.log('Error while deleting product', err);
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({
                'message' : 'Error while deleting product'
            }))
        })
}

module.exports = {
    findAll,
    findOne,
    updateProduct,
    createProduct,
    deleteProductByID
}