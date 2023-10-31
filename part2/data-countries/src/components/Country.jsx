import Weather from "./Weather";
const Country = ({ country }) => {
 const languages = Object.entries(country.languages);
 return (
  <>
   <h1>{country.name.common}</h1>
   <p>capital {country.capital}</p>
   <p>area {country.area}</p>
   <h2>Languages</h2>
   <ul>
    {languages.map(([key, language]) => (
     <li key={key}>{language}</li>
    ))}
   </ul>
   <h2>Flag</h2>
   <img src={country.flags.png} alt="XD" />
   <Weather capitalName={country.capital} />
  </>
 );
};

export default Country;
