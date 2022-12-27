const v1Router = require('./v1/api.routes');


module.exports = function(app) {
    app.use('/api/v1', v1Router)
}