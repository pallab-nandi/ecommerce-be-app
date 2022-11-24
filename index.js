const express = require('express');
const app = express();
const serverConfig = require('./src/configs/server.config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./routes/api/index.routes')(app);


app.get('/', (req, res) => {
    res.send('Hello, World!');
})


app.listen(serverConfig.PORT, () => {
    console.log('Application is running in PORT :',serverConfig.PORT);
})