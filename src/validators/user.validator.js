function userValidID(req, res, next) {
    let id = Number(req.params.id);

    if(!id) {
        console.log('User ID is either invalid or not present')
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'User ID is either invalid or not present'
        }));
    } else next();
}

function userValidCreateBody(req, res, next) {

    if(
        !req.body.name ||
        !req.body.email ||
        !req.body.password
    ) {
        console.log('Body is invalid or not present')
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            'message' : 'Body is invalid or not present'
        }));
    } else next();
}

function userValidUpdateBody(req, res, next) {

    if(
        !req.body.name &&
        !req.body.email &&
        !req.body.password
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
    userValidID,
    userValidCreateBody,
    userValidUpdateBody
}