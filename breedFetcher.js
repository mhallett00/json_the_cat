const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback("Invalid Address", null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length) {
      callback(null, data[0].description);
    } else {
      callback("Invalid breed", null);
    }
  });
};

module.exports = { fetchBreedDescription };