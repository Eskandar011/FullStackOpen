import { useState } from "react";
import Country from "./Country";
import countriesServices from "../services/countries";

const Countries = ({ countries, search }) => {
 const [country, setCountry] = useState([]);
 const [show, setShow] = useState(false);

 const listCountries = countries.map((country) =>
  country.name.common.toLowerCase()
 );
 const listCountriesToShow = listCountries.filter((country) =>
  country.includes(search)
 );

 function showCountryInfo(name) {
  countriesServices.getCountry(name).then((result) => {
   setCountry(result);
  });
  console.log(country);
  setTimeout(() => {
   setShow(true);
  }, 1000);
 }

 if (listCountriesToShow.length === 1) {
  let [countryObj] = countries.filter(
   (country) => country.name.common.toLowerCase() === listCountriesToShow[0]
  );

  return (
   <>
    <Country country={countryObj} />
   </>
  );
 }

 return (
  <>
   {listCountriesToShow.length > 10
    ? `Too many matches, specify another filter`
    : listCountriesToShow.map((countryName, index) => (
       <div key={index}>
        <span>Country: {countryName}</span>
        <button onClick={() => showCountryInfo(countryName)}>show</button>
       </div>
      ))}
   <div>{show ? <Country country={country} /> : ""}</div>
  </>
 );
};

export default Countries;
