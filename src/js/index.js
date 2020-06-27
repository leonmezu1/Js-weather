
import '../styles/styles.scss';
import * as Ls from './modules/localStorage';
import getLocation from './modules/coordinates';
import watchToggle from './modules/toggler';

document.addEventListener('DOMContentLoaded', Ls.loadCities);
document.addEventListener('DOMContentLoaded', getLocation);
document.addEventListener('DOMContentLoaded', watchToggle);
