const request = require('request');

const catBreedURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];


request(catBreedURL, (error, response, body) =>{
  if (error) {
    console.log('invalid URL');
    return;
  }
  const data = JSON.parse(body);
  if (data.length) {
    console.log(data[0].description);
  } else {
    console.log('invalid breed');
  }
});