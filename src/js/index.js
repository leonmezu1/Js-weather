
import '../styles/styles.scss';
import * as Ls from './modules/localStorage';
import getLocation from './modules/coordinates';

document.addEventListener('DOMContentLoaded', Ls.loadCities);
document.addEventListener('DOMContentLoaded', getLocation());
