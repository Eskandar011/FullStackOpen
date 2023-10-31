import { useState, useEffect } from "react";
import weatherService from "../services/weather";
const api_key = import.meta.env.VITE_SOME_KEY;

const Weather = ({ capitalName }) => {
 const [weather, setWeather] = useState(null);
 useEffect(() => {
  weatherService.getCoordinates(capitalName, api_key).then(([result]) => {
   let lat = result.lat;
   let lon = result.lon;

   weatherService.currentWeather(lat, lon, api_key).then((result) => {
    setWeather(result);
   });
  });
 }, [capitalName]);

 return weather ? (
  <div>
   <h2>Weather in {capitalName}</h2>
   <p>Temperature: {weather.main.temp} °C</p>
   <p>Weather: {weather.weather[0].main}</p>
   <img
    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt="xd"
   ></img>
   <p>Wind {weather.wind.speed} m/s</p>
  </div>
 ) : (
  ""
 );
};

export default Weather;
