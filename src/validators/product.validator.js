function productValidID(req, res, next) {
    let id = Number(req.params.id);

    if(!id) {
        console.log('Product ID is either invalid or not present')
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Product ID is either invalid or not present'
        }));
    } else next();
}

function productValidCreateBody(req, res, next) {

    if(
        !req.body.categoryID ||
        !req.body.name ||
        !req.body.description ||
        !req.body.cost
    ) {
        console.log('Body is invalid or not present')
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Body is invalid or not present'
        }));
    } else next();
}

function productValidUpdateBody(req, res, next) {

    if(
        !req.body.categoryID &&
        !req.body.name &&
        !req.body.description &&
        !req.body.cost
    ) {
        console.log('Body is invalid or not present')
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Body is invalid or not present'
        }));
    } else next();
}

module.exports = {
    productValidID,
    productValidCreateBody,
    productValidUpdateBody
}