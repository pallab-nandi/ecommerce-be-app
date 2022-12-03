const { Op } = require('sequelize');
const db = require('../models/index.model');

class CartService {
    schema;
    constructor() {
        this.schema = db;
    }

    addCart(cart) {
        return this
        .schema
        .orderItem
        .create(cart);
    }

    updateCartByID(cart, id) {
        return this
        .schema
        .orderItem
        .update(cart, {
            where : {
                id : id
            }
        })
    }

    deleteCartByID(id, status) {
        if(status) {
            return this
            .schema
            .orderItem
            .destroy({
                where : {
                    id : id
                }
            })
        }
    }

    getAllCart(filters, userID) {
        
        let filterObj = this.#buildFilters(filters);

        if(Object.values(filters).length != 0) {
            return this
            .schema
            .orderDetail
            .findAll({
                where : filterObj,
                include : {
                    required : true,
                    model : db.orderItem,
                    where : {
                        userID : userID
                    }
                }
            })
        }

        return this
        .schema
        .orderDetail
        .findAll({
            where : {
                status : {
                    [Op.or] : [1, 2]
                }
            },
            include : {
                required : true,
                model : db.orderItem,
                where : {
                    userID : userID
                }
            }
        })
    }

    createCartDetails(cart) {
        return this
        .schema
        .orderDetail
        .create(cart);
    }

    deleteOrderDetails(id) {
        return this
        .schema
        .orderDetail
        .destroy({
            where : {
                id : id
            }
        })
    }

    updateOrderDetails(cart, id) {
        return this
        .schema
        .orderDetail
        .update(cart, {
            where : {
                id : id
            }
        })
    }

    findCost(id) {
        return this
        .schema
        .product
        .findOne({
            where : {
                id : id
            }
        })
        .then((products) => products.dataValues)
        .then((product) => product.cost)
    }

    findQuantity(id) {
        return this
        .schema
        .orderItem
        .findOne({
            where : {
                id : id
            }
        })
        .then((carts) => carts.dataValues)
        .then((cart) => cart.quantity)
    }

    findProduct(id) {
        return this
        .schema
        .orderItem
        .findOne({
            where : {
                id : id
            }
        })
        .then((orders) => orders.dataValues)
        .then((order) => order.productID)
    }

    #buildFilters(filters) {
        let obj = {};

        if(filters.status == 'all') {
            obj['status'] = {
                [Op.or] : [1, 2, 3]
            }
        } else if(filters.status == 'processed') {
            obj['status'] = 1;
        } else if(filters.status == 'shipped') {
            obj['status'] = 2;
        }

        return obj;
    }
}

let cartService = new CartService();

module.exports = { cartService };