const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
    if (error) {
      return callback("Invalid Address", null);
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
