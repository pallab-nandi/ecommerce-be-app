const db = require('../models/index.model');

class ProductService {
    schema;
    constructor() {
        this.schema = db.product;
    }

    getProducts() {
        return this
        .schema
        .findAll();
    }

    getProductByID(id) {
        return this
        .schema
        .findOne({
            where : {
                id : id
            }
        })
    }

    createProduct(product) {
        return this
        .schema
        .create(product)
    }

    updateProductByID(product, id) {
        return this
        .schema
        .update(product, {
            where : {
                id : id
            }
        })
    }

    deleteProductByID(id) {
        return this
        .schema
        .destroy({
            where : {
                id : id
            }
        })
    }
}

const productService = new ProductService();

module.exports = { productService };