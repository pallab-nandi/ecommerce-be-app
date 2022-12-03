const { cartService } = require("../services/cart.service");

function addCart(req, res) {
    
    let cart = {};
    cart.userID = req.decodedJwt.id;
    cart.productID = req.body.productID;
    cart.quantity = req.body.quantity;
    
    cartService
    .addCart(cart)
    .then((cart) => cart.dataValues)
    .then(async (cart) => {
        let cost = await cartService.findCost(cart.productID);
        let total = Number(cost) * Number(cart.quantity);
        let status = 1
        let cartObj = {
            orderID : cart.id,
            total : total,
            status : status
        }

        return cartService
        .createCartDetails(cartObj)
    })
    .then(() => {
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({
            message : 'Cart added successfully'
        }))
    })
    .catch((err) => {
        console.log('Error while adding cart', err);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify({
            message : 'Error while adding cart'
        }))
    })
}

function getCart(req, res) {
    let filters = req.query;
    let userID = req.decodedJwt.id;

    cartService
    .getAllCart(filters, userID)
    .then((carts) => {
        console.log('All carts fetched successfully');
        let returnValues = {};
        returnValues.message = 'All carts items fetched';
        returnValues.grandTotal = carts.reduce((sum, items) => sum + Number(items.total),0);
        returnValues.carts = carts;
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(returnValues));
    })
    .catch((err) => {
        console.log('Error while fetching carts', err);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify({
            'message' : 'Error while fetching error'
        }))
    })
}

function updateCart(req, res) {

    let id = req.params.id;

    let cart = {};
    cart.productID = req.body.productID;
    cart.quantity = req.body.quantity;

    cartService
    .updateCartByID(cart, id)
    .then(async (cart) => {
        let prodID = await cartService.findProduct(id);
        let cost = await cartService.findCost(prodID);
        let quantity = await cartService.findQuantity(id);
        let total = Number(cost) * Number(quantity);

        let cartObj = {
            orderID : cart.id,
            total : total
        }

        cartService.updateOrderDetails(cartObj, id);
    })
    .then(() => {
        console.log('Cart updated successfully');
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({
            message : 'Cart updated successfully'
        }))
    })
    .catch((err) => {
        console.log('Error while updating cart', err);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify({
            message : 'Error while updating cart'
        }))
    })
}

function deleteCartByID(req, res) {
    let status = req.query.delete;
    let id = req.params.id;

    cartService
    .deleteCartByID(id, status)
    .then(() => {
        cartService
        .deleteOrderDetails(id)
    })
    .then(() => {
        console.log('Cart deleted successfully');
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({
            message : 'Cart discarded successfully'
        }))
    })
    .catch((err) => {
        console.log('Error while deleting', err);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify({
            message : 'Error while deleting cart'
        }))
    })
}

module.exports = {
    addCart,
    getCart,
    updateCart,
    deleteCartByID
}