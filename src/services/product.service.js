const { Op } = require('sequelize');
const { category } = require('../models/index.model');
const db = require('../models/index.model');

class ProductService {
    schema;
    constructor() {
        this.schema = db.product;
    }

    getProducts(filters) {

        let filterObj = this.#buildFilters(filters);

        if(Object.values(filters).length != 0) {
            return this
            .schema
            .findAll({
                where : filterObj,
                include : [{
                    required : true,
                    model : db.category
                }]
            })
        }
        
        return this
        .schema
        .findAll({
            include : [{
                required : true,
                model : db.category
            }]
        });
    }

    getProductByID(ids) {
        ids = Object.values(ids);
        return this
        .schema
        .findOne({
            where : {
                id : {
                    [Op.or] : ids
                }
            },
            include : [{
                required : true,
                model : db.category
            }]
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

    #buildFilters(filters) {
        let obj = {};

        if(Number(filters.maxPrice) && Number(filters.minPrice)) {
            obj['cost'] = {
                [Op.and] : [
                    {
                        [Op.lte] : Number(filters.maxPrice)
                    },
                    {
                        [Op.gte] : Number(filters.minPrice)
                    }
                ]
            }
        }else if(Number(filters.maxPrice)) {
            obj['cost'] = {
                [Op.lte] : Number(filters.maxPrice)
            }
        }else if(Number(filters.minPrice)) {
            obj['cost'] = {
                [Op.gte] : Number(filters.minPrice)
            }
        }

        if(Number(filters.categoryID)) {
            obj['categoryID'] = Number(filters.categoryID)
        }

        return obj;
    }
}

const productService = new ProductService();

module.exports = { productService };