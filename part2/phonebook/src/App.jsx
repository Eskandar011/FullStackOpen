//Hooks
import { useState, useEffect } from "react";

//Services
import personsService from "./services/persons";
//Components
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import SNotification from "./components/SNotification";
import ENotification from "./components/ENotification";

const App = () => {
 //Person Names
 const [persons, setPersons] = useState([]);

 //State for input
 const [newName, setNewName] = useState("");
 const [newNumber, setNewNumber] = useState("");
 const [filter, setFilter] = useState("");
 const [successMessage, setSuccessMessage] = useState(null);
 const [errorMessage, setErrorMessage] = useState(null);

 useEffect(() => {
  personsService.getAll().then((persons) => {
   setPersons(persons);
  });
 }, [persons]);

 const addData = (e) => {
  e.preventDefault();
  const newPerson = { name: newName, number: newNumber };
  if (newPerson.name === "" || newPerson.number === "") {
   return alert(`Enter a name or a number valid`);
  } else {
   const result = persons.find(
    ({ name, number }) => name === newName || number === newNumber
   );
   if (result) {
    console.log(result);
    if (
     window.confirm(
      `${result.name} is already added to phonebook, replace the old number with the new one?`
     )
    ) {
     personsService
      .update(result.id, newPerson)
      .then((returnedPerson) => {
       setPersons(
        persons.map((person) =>
         result.id != person.id ? person : returnedPerson
        )
       );
       setSuccessMessage(
        `Update ${returnedPerson.name} with the number ${returnedPerson.number}`
       );
       setTimeout(() => {
        setSuccessMessage(null);
       }, 5000);
      })
      .catch((error) => {
       setErrorMessage(
        `Information of'${newPerson.name}' was already deleted from server`
       );
       setPersons(
        persons.map((person) =>
         result.id != person.id ? person : returnedPerson
        )
       );
      });
    }
   } else {
    personsService.create(newPerson).then((returnedPerson) => {
     setPersons([...persons, returnedPerson]);
     setNewName("");
     setNewNumber("");
     setSuccessMessage(`Added ${returnedPerson.name}`);
     setTimeout(() => {
      setSuccessMessage(null);
     }, 5000);
    });
   }
  }
 };

 const removeData = (person) => {
  if (window.confirm(`Delete ${person.name}`)) {
   personsService.remove(person.id);
  }
 };

 const handleNameChange = (event) => {
  setNewName(event.target.value);
 };
 const handleNumberChange = (event) => {
  setNewNumber(event.target.value);
 };
 const handleFilterChange = (event) => {
  setFilter(event.target.value);
 };

 const filterPerson = persons.filter((person) =>
  person.name.toLowerCase().includes(filter.toLowerCase())
 );

 return (
  <div>
   <h2>Phonebook</h2>
   <SNotification message={successMessage} />
   <ENotification message={errorMessage} />
   <Filter handle={handleFilterChange} />
   <h3>Add a new</h3>
   <PersonForm
    addData={addData}
    handleNameChange={handleNameChange}
    handlePhoneChange={handleNumberChange}
   />
   <h2>Numbers</h2>
   <Persons filterPerson={filterPerson} removeData={removeData} />
  </div>
 );
};

export default App;
