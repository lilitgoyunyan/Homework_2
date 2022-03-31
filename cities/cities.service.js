const NotFoundError = require('../errors/not-found.error');
const citiesRepository = require('./cities.repository');

async function getCityByZipCode(zip) {
    const data = await citiesRepository.getCityDataByZipCode(zip);
    if (data) {
        return data;
    }
    else {
        throw new NotFoundError('No cities found!');
    }
}

module.exports = {
    getCityByZipCode
}