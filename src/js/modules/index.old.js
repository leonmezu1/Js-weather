/* /* eslint-disable func-names
/* eslint-disable consistent-return

import '../styles/styles.scss';

const queryBox = document.getElementById('myInput');

const queryURL = (query, system) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=${system}`;
  return url;
};


function dateBuilder(d) {
  const months =
  ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function displayResults(weather) {
  const city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const now = new Date();
  const date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  const temp = document.querySelector('.current .temp');
  temp.innerHTML = `${weather.main.temp}<span>°C</span>`;

  const weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText = weather.weather[0].main;

  const hilow = document.querySelector('.hi-low');
  hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;
}

const getWeather = async (location, system) => {
  fetch(queryURL(location, system)).then((response) => response.json()).then((data) => {
    const {
      main, name, sys, weather,
    } = data;
    displayResults(data);
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

  /*     console.log(data);
  }).catch(() => {
  });
};

const autocomplete = (inp, arr) => {
  let currentFocus;

  const removeActive = (x) => {
    for (let i = 0; i < x.length; i += 1) {
      x[i].classList.remove('autocomplete-active');
    }
  };

  const addActive = (x) => {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add('autocomplete-active');
  };

  const closeAllLists = (elmnt) => {
    const x = document.getElementsByClassName('autocomplete-items');
    for (let i = 0; i < x.length; i += 1) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  };

  inp.addEventListener('input', () => {
    let b; let i; const val = this.value;
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    const a = document.createElement('DIV');
    a.setAttribute('id', `${this.id}autocomplete-list`);
    a.setAttribute('class', 'autocomplete-items');
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i += 1) {
      if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        b = document.createElement('DIV');
        b.innerHTML = `<strong>${arr[i].substr(0, val.length)}</strong>`;
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += `<input type='hidden' value='${arr[i]}'>`;
        b.addEventListener('click', () => {
          inp.value = this.getElementsByTagName('input')[0].value;
          getWeather(queryBox.value, 'metric');
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener('keydown', (e) => {
    let x = document.getElementById(`${this.id}autocomplete-list`);
    if (x) x = x.getElementsByTagName('div');
    if (e.keyCode === 40) {
      currentFocus += 1;
      addActive(x);
    } else if (e.keyCode === 38) {
      currentFocus -= 1;
      addActive(x);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  document.addEventListener('click', (e) => {
    closeAllLists(e.target);
  });
};

async function reverseGeocoding(position) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${googleKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const indexNew = data.results[0].address_components.findIndex(addressComponent
    => addressComponent.types.includes('administrative_area_level_2'));
  const cityName = data.results[0].address_components[indexNew].short_name;
  /*   const cityPlaceId = data.results[0].place_id;
  getWeather(cityName, 'metric');
/*   const url2 = 'https://maps.googleapis.com/maps/api/place/details/json?fields=photo&place_id=ChIJPVRqJxoDMI4RqnA_jgYiCj4&key=AIzaSyCzRFGSBJD_PqLLKaen5PzoyhCdjmV4R9M';
 *//*   const response2 = await fetch(url2);
/*   const data2 = await response2.json();
}

async function getWeatherAndInfo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(reverseGeocoding);
  }
}

const loadCities = async () => {
  const data = await fetch('../src/data/citiesOfTheWorld.txt')
    .then((res) => res.text())
    .then((data) => data.split(','));
  autocomplete(queryBox, data);
};

document.addEventListener('DOMContentLoaded', getWeatherAndInfo);
document.addEventListener('DOMContentLoaded', loadCities);
 */