/* eslint-disable no-unused-expressions */

import * as Ls from './localStorage';
import getLocation from './coordinates';
import Weather from './weather';

const toggle = document.getElementById('unit-switch');
const weatherToggle = Weather();

const watchToggle = () => {
  const toggleEvent = () => {
    toggle.checked ? Ls.setSystemLS({ system: 'imperial' }) : Ls.setSystemLS({ system: 'metric' });
    Ls.queryBox.value === '' ? getLocation() : weatherToggle.getWeatherQuery(Ls.queryBox.value);
  };
  toggle.addEventListener('click', toggleEvent);
};

export default watchToggle;