const axios = require('axios');

let result;

async function getCityDataByZipCode(zip) {
    result = await axios.get("https://api.zippopotam.us/us/" + zip);
    return `${result.data["places"][0]['place name']},
             ${result.data["places"][0]['state abbreviation']},
            ${result.data['country']}`;

}

module.exports = {
    getCityDataByZipCode
}
