import autocomplete from './autocomplete';

const queryBox = document.getElementById('myInput');

const getSystemLS = () => {
  const system = localStorage.getItem('weatherUnitSystem') === null ? { system: 'metric' } : JSON.parse(localStorage.getItem('weatherUnitSystem'));
  return system;
};

const setSystemLS = (unit) => {
  localStorage.setItem('weatherUnitSystem', JSON.stringify(unit));
};


const loadCities = async () => {
  const data = await fetch('../src/data/citiesOfTheWorld.txt')
    .then((res) => res.text())
    .then((data) => data.split(','));
  autocomplete(queryBox, data);
};

export { getSystemLS, setSystemLS, loadCities };