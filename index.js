const { fetchBreedDescription } = require('./breedFetcher');

const searchBreed =  process.argv.slice(2).join(' ');

fetchBreedDescription(searchBreed, (error, description) => { //the fn call for fetchBreed Description, which also includes a callback fn inline with (error, description) parameters
  
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});
