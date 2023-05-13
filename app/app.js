const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');

const routesUser = require('./routes/user');
const routesStand = require('./routes/stand');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser());
app.use(express.static('public'));
app.use('/user', routesUser);
app.use('/stand', routesStand);

app.get('/', (req, res) => {
    res.status(200).send('Hello world !');
});

app.listen(port, () => {
    console.log('Server listen on http://localhost:5000');
});