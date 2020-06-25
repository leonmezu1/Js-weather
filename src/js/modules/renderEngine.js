const dateFormat = require('dateformat');

const displayCurrentWeather = (weather) => {
  console.log(weather);
  const timeNow = dateFormat(new Date(), 'dddd, mmmm dS yyyy, h:MM TT');
  const city = document.querySelector('.cityname');
  const country = document.querySelector('.country');
  city.innerText = `${weather.name}`;
  country.innerText = `${weather.sys.country}`;

  const date = document.querySelector('.location .date');
  date.innerText = timeNow;

  const temp = document.querySelector('.current-temp');
  temp.innerHTML = `${weather.main.temp}°`;

  const weatherDescription = document.querySelector('.current .weather .description');
  weatherDescription.innerText = weather.weather[0].main;

  const hi = document.querySelector('.hi');
  hi.innerText = `Max. ${weather.main.temp_max}°`;

  const low = document.querySelector('.low');
  low.innerText = `Min. ${weather.main.temp_min}°`;

  const feelsLike = document.querySelector('.feels');
  feelsLike.innerText = `Feels like ${weather.main.feels_like}°`;

  const wind = document.querySelector('.wind .data');
  wind.innerText = `${weather.wind.speed}`;

  const clouds = document.querySelector('.clouds .data');
  clouds.innerText = `${weather.clouds.all}`;

  const humidity = document.querySelector('.humidity .data');
  humidity.innerText = `${weather.main.humidity}`;

  const pressure = document.querySelector('.pressure .data');
  pressure.innerText = `${weather.main.pressure}`;
};

export default displayCurrentWeather;