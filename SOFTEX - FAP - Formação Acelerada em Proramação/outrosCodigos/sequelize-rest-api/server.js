const express = require('express');
const bodyParser = require('bosy-parser');
const controller = require('./controller');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.setEncoding('Hello world!'));

app.use('/users', controller.users);
app.listen(port, () => console.log('Example app listening on port port!'))