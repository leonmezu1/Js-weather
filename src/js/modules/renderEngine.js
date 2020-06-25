import * as Ls from './localStorage';

const dateFormat = require('dateformat');

const displayCurrentWeather = (weather) => {
  const timeNow = dateFormat(new Date(), 'dddd, mmmm dS yyyy, h:MM TT');
  const city = document.querySelector('.cityname');
  const country = document.querySelector('.country');
  city.innerText = `${weather.name}`;
  country.innerText = `${weather.sys.country}`;

  const date = document.querySelector('.location .date');
  date.innerText = timeNow;

  const image = document.querySelector('figure img');
  image.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.weather[0].icon}.svg`;

  const temp = document.querySelector('.current-temp');
  temp.innerHTML = `${Math.round(weather.main.temp * 10) / 10}°`;

  const weatherDescription = document.querySelector('.current .weather .description');
  weatherDescription.innerText = weather.weather[0].description;

  const hi = document.querySelector('.hi');
  hi.innerText = `Max. ${weather.main.temp_max}°`;

  const low = document.querySelector('.low');
  low.innerText = `Min. ${weather.main.temp_min}°`;

  const feelsLike = document.querySelector('.feels');
  feelsLike.innerText = `Feels like ${weather.main.feels_like}°`;

  const wind = document.querySelector('.wind .data');

  if (Ls.getSystemLS().system === 'metric') {
    wind.innerText = `${weather.wind.speed} mt/s`;
  } else {
    wind.innerText = `${weather.wind.speed} miles/h`;
  }

  const clouds = document.querySelector('.clouds .data');
  clouds.innerText = `${weather.clouds.all}%`;

  const humidity = document.querySelector('.humidity .data');
  humidity.innerText = `${weather.main.humidity}%`;

  const pressure = document.querySelector('.pressure .data');
  pressure.innerText = `${weather.main.pressure} hPa`;
};

export default displayCurrentWeather;