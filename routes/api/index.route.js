const v1Router = require('./v1/route.api');


module.exports = function(app) {
    app.use('/ecomm/api/v1', v1Router)
}