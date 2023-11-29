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
 const [filter, setFilter] = useState("");
 const [newName, setNewName] = useState("");
 const [newNumber, setNewNumber] = useState("");
 const [successMessage, setSuccessMessage] = useState(null);
 const [errorMessage, setErrorMessage] = useState(null);

 //Variables

 useEffect(() => {
  personsService.getAll().then((persons) => {
   setPersons(persons);
  });
 }, []);

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
       setNewName("");
       setNewNumber("");
       setSuccessMessage(
        `Update ${returnedPerson.name} with the number ${returnedPerson.number}`
       );
       setTimeout(() => {
        setSuccessMessage(null);
       }, 5000);
      })
      .catch((error) => {
       // this is the way to access the error message
       setErrorMessage(error.response.data.error);
       setTimeout(() => {
        setErrorMessage(null);
       }, 5000);
      });
    }
   } else {
    personsService
     .create(newPerson)
     .then((returnedPerson) => {
      setPersons([...persons, returnedPerson]);
      setNewName("");
      setNewNumber("");
      setSuccessMessage(`Added ${returnedPerson.name}`);
      setTimeout(() => {
       setSuccessMessage(null);
      }, 5000);
     })
     .catch((error) => {
      // this is the way to access the error message
      setErrorMessage(error.response.data.error);
      setTimeout(() => {
       setErrorMessage(null);
      }, 5000);
     });
   }
  }
 };

 const removeData = (personToRemove) => {
  if (window.confirm(`Delete ${personToRemove.name}`)) {
   personsService.remove(personToRemove.id);

   const newPersons = persons.filter(
    (person) => personToRemove.id !== person.id
   );

   setPersons(newPersons);
   setSuccessMessage(`Deleted ${personToRemove.name}`);
   setTimeout(() => {
    setSuccessMessage(null);
   }, 5000);
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
    newName={newName}
    newNumber={newNumber}
    handleNameChange={handleNameChange}
    handleNumberChange={handleNumberChange}
   />
   <h2>Numbers</h2>
   <Persons filterPerson={filterPerson} removeData={removeData} />
  </div>
 );
};

export default App;
