import Weather from './weather';

const showPosition = (position) => {
  const locatedWeather = Weather();
  locatedWeather.getWeatherWithCoordinates(position.coords.latitude, position.coords.longitude);
};

const getLocation = (callback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  callback();
};

export default getLocation;