function categoryValidID(req, res, next) {

    let id = Number(req.params.id);

    if(!id) {
        console.log('Category ID is invalid');
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Category ID is invalid'
        }))
    } else next();
}

function categoryValidCreateBody(req, res, next) {

    let name = req.body.name;
    let description = req.body.description;

    if(!name || !description) {
        console.log('Either body is absent or invalid');
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Either body is not present or invalid'
        }))
    } else next();
}

function categoryValidUpdateBody(req, res, next) {

    let name = req.body.name;
    let description = req.body.description;

    if(!name && !description) {
        console.log('Either body is absent or invalid');
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Either body is not present or invalid'
        }))
    } else next();
}

module.exports = {
    categoryValidID,
    categoryValidCreateBody,
    categoryValidUpdateBody
}