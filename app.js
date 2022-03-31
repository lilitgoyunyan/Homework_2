const express = require('express');
const app = express();
const citiesController = require('./cities/cities.controller')

const port = 3000;

app.listen(port, () => {
    console.log("Running...");
})

app.use('/cities', citiesController);