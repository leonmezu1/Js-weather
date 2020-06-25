// eslint-disable-next-line import/no-cycle
import * as Ls from './localStorage';
import fetchResponse from './fetchApi';
import displayCurrentWeather from './renderEngine';

require('dotenv').config();

const Weather = () => {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/';
  const metricUnits = '&units=metric';
  const imperialUnits = '&units=imperial';
  const apiKey = process.env.API_KEY;


  const getWeatherQuery = async (cityQuery) => {
    const now = 'weather?';
    const city = `q=${cityQuery}`;
    const locationString = city;

    const unitString = Ls.getSystemLS().system === 'metric' ? metricUnits : imperialUnits;
    const CurrentWeatherUrl = baseUrl + now + locationString + unitString + apiKey;

    const currentWeather = await fetchResponse(CurrentWeatherUrl);
    displayCurrentWeather(currentWeather);
    return [currentWeather];
  };

  const getWeatherWithCoordinates = async (lat, lon) => {
    const now = 'weather?';
    const currentLocation = `lat=${lat}&lon=${lon}`;
    const locationString = currentLocation;

    const unitString = Ls.getSystemLS().system === 'metric' ? metricUnits : imperialUnits;
    const CurrentWeatherUrl = baseUrl + now + locationString + unitString + apiKey;

    const currentWeather = await fetchResponse(CurrentWeatherUrl);
    displayCurrentWeather(currentWeather);
    return [currentWeather];
  };
  return {
    getWeatherQuery, getWeatherWithCoordinates,
  };
};

export default Weather;