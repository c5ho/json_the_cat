const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  
  request(URL, (error, response, body) => {
    if (error) {
      return callback(error, null); //returns the error via callback if one occurred, since there isn't a second paramater, we can leave it blank or put null
    }
    
    const foundBreed = JSON.parse(body);  //foundBreed is the cat object(s) of the searched cat breed

    if (foundBreed.length === 0) {
      return callback(null, 'This breed was not found in this database.');
    }
    //if search string is not specific enough and multiple search results are returned, it will only return description of the first breed that satisfies the string (eg. American -> American Bobtail instead of American Curl)
    return callback(null, foundBreed[0].description);
  });
};

module.exports = { fetchBreedDescription };