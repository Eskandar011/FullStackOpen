import axios from "axios";
const urlBase = "https://studies.cs.helsinki.fi/restcountries/api";
function getAll() {
 let request = axios.get(`${urlBase}/all`);
 return request.then((response) => response.data);
}

function getCountry(name) {
 let request = axios.get(`${urlBase}/name/${name}`);
 return request.then((response) => response.data);
}
export default { getAll, getCountry };
