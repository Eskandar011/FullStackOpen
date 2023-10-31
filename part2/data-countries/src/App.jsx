import { useState, useEffect } from "react";
import countriesServices from "./services/countries";

import Countries from "./components/Countries";
const App = () => {
 //States
 const [countries, setCountries] = useState([]);
 //State for Search
 const [search, setSearch] = useState("");
 //Variable

 useEffect(() => {
  countriesServices.getAll().then((countries) => {
   setCountries(countries);
  });
 }, []);

 const handleSearch = (event) => {
  setSearch(event.target.value);
 };

 return (
  <div>
   <h1>Data Countries</h1>
   <h3>Search</h3>
   <label htmlFor="search">Find Countries</label>
   <input id="search" type="text" onChange={handleSearch} />
   <h3>Countries</h3>
   <Countries countries={countries} search={search} />
  </div>
 );
};

export default App;
