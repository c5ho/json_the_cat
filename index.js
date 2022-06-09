const { fetchBreedDescription } = require('./breedFetcher');

const searchBreed =  process.argv.slice(2).join(' ');

fetchBreedDescription(searchBreed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});
