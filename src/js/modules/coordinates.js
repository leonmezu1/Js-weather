import Weather from './weather';

const showPosition = (position) => {
  const locatedWeather = Weather();
  locatedWeather.getWeatherWithCoordinates(position.coords.latitude, position.coords.longitude);
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
};

export default getLocation;