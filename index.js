const express = require('express');
const app = express();
const serverConfig = require('./src/configs/server.config');
const bodyParser = require('body-parser');
const db = require('./src/models/index.model');

app.use(bodyParser.json());

db.sequelize.sync({ force : true })
.then(async () => {
    await db.initData();
    console.log('Database Initialized Successfully');
})

require('./routes/api/index.routes')(app);


app.get('/', (req, res) => {
    res.send('Hello, World!');
})


app.listen(serverConfig.PORT, () => {
    console.log('Application is running in PORT :',serverConfig.PORT);
})