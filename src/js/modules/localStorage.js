// eslint-disable-next-line import/no-cycle
import autocomplete from './autocomplete';

const queryBox = document.getElementById('myInput');

const setSystemLS = (unit) => {
  localStorage.setItem('weatherUnitSystem', JSON.stringify(unit));
};

const getSystemLS = () => {
  const system = localStorage.getItem('weatherUnitSystem') === null ? { system: 'metric' } && setSystemLS({ system: 'metric' }) : JSON.parse(localStorage.getItem('weatherUnitSystem'));
  return system;
};

const loadCities = async () => {
  const data = await fetch('../dist/data/citiesOfTheWorld.txt')
    .then((res) => res.text())
    .then((data) => data.split(','));
  autocomplete(queryBox, data);
};

export {
  getSystemLS, setSystemLS, loadCities, queryBox,
};