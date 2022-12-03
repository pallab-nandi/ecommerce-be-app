function cartValidID(req, res, next) {
    let id = Number(req.params.id);

    if(!id) {
        console.log('Cart ID is either invalid or not present')
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Cart ID is either invalid or not present'
        }));
    } else next();
}

function cartValidCreateBody(req, res, next) {

    if(!req.body.productID || !req.body.quantity) {
        console.log('Body is invalid or not present')
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Body is invalid or not present'
        }));
    } else next();
}

function cartValidUpdateBody(req, res, next) {

    if(!req.body.productID && !req.body.quantity) {
        console.log('Body is invalid or not present')
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Body is invalid or not present'
        }));
    } else next();
}

module.exports = {
    cartValidID,
    cartValidCreateBody,
    cartValidUpdateBody
}