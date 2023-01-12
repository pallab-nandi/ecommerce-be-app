const express = require('express');
const app = express();
const serverConfig = require('./src/configs/server.config');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./src/models/index.model');

app.use(bodyParser.json());

db.sequelize.sync({ force : true })
.then(async () => {
    await db.initData();
    console.log('Database Initialized Successfully');
})

require('./routes/api/index.routes')(app);


app.get('/', (req, res) => {
    console.log('Hello, World');
    res.status(200).sendFile(path.join(__dirname,'./src/public/index.html'));
})


app.listen(serverConfig.PORT, () => {
    console.log('Application is running in PORT :',serverConfig.PORT);
})