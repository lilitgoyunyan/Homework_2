const express = require('express');
const citiesService = require('./cities.service');
const AsyncHandler = require('express-async-handler')
const route = express.Router();

route.get('/:zipCode', AsyncHandler(async(req, res) => {
    const zip = req.params.zipCode;
    const result = await citiesService.getCityByZipCode(zip);
    res.send(result);
}))

module.exports = route;