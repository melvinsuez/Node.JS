const express = require('express');
const bodyParser = require ('body-parser')

const app = express();

const routes = require ('./routes');
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/tasks', routes);

app.listen(3000, () => {
    console.log('servidor arrancado');
});