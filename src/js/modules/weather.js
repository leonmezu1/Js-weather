import * as Ls from './localStorage';
import fetchResponse from './fetchApi';
import displayCurrentWeather from './renderEngine';

const Weather = () => {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/';
  const metricUnits = '&units=metric';
  const imperialUnits = '&units=imperial';
  const apiKey = '&appid=b9d786489eff73f5cec702d51ff7bba6';


  const getWeatherQuery = async (cityQuery) => {
    const now = 'weather?';
    const forecast = 'forecast?';
    const city = `q=${cityQuery}`;
    const locationString = city;

    const unitString = Ls.getSystemLS().system === 'metric' ? metricUnits : imperialUnits;
    const CurrentWeatherUrl = baseUrl + now + locationString + unitString + apiKey;
    const ForecastUrl = baseUrl + forecast + locationString + unitString + apiKey;

    const currentWeather = await fetchResponse(CurrentWeatherUrl);
    /* const forecastWeather = await fetchResponse(ForecastUrl); */
    displayCurrentWeather(currentWeather);
    return [currentWeather];
  };

  const getWeatherWithCoordinates = async (lat, lon) => {
    const now = 'weather?';
    const forecast = 'forecast?';
    const currentLocation = `lat=${lat}&lon=${lon}`;
    const locationString = currentLocation;

    const unitString = Ls.getSystemLS().system === 'metric' ? metricUnits : imperialUnits;
    const CurrentWeatherUrl = baseUrl + now + locationString + unitString + apiKey;
    const ForecastUrl = baseUrl + forecast + locationString + unitString + apiKey;

    const currentWeather = await fetchResponse(CurrentWeatherUrl);
    /* const forecastWeather = await fetchResponse(ForecastUrl); */
    displayCurrentWeather(currentWeather);
    return [currentWeather];
  };
  return {
    getWeatherQuery, getWeatherWithCoordinates,
  };
};

export default Weather;