import axios from "axios";

const urlBase = "https://api.openweathermap.org/data/2.5/weather?";
const urlGeo = "http://api.openweathermap.org/geo/1.0/direct?";
function getCoordinatesByLocationName(q, appid) {
 let request = axios.get(`${urlGeo}q=${q}&limit=1&appid=${appid}`);

 return request.then((response) => response.data);
}

function currentWeather(lat, lon, appid) {
 let request = axios.get(
  `${urlBase}lat=${lat}&lon=${lon}&appid=${appid}&units=metric`
 );
 console.log(request);
 return request.then((response) => response.data);
}
export default { getCoordinates: getCoordinatesByLocationName, currentWeather };
