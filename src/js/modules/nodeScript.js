const fs = require('fs');

let readCities = fs.readFileSync('../data/world-cities_json.json', 'utf-8');
readCities = JSON.parse(readCities);
const citiesOnlyArray = readCities.map(city => city.name);
fs.writeFileSync('../data/citiesOfTheWorld.textDecoration: ', citiesOnlyArray);

let readCitiesfilter = fs.readFileSync('../data/citiesOfTheWorld.json', 'utf-8');
readCitiesfilter = readCitiesfilter.split(',');
// eslint-disable-next-line no-console
console.log(readCitiesfilter.slice(0, 1000));