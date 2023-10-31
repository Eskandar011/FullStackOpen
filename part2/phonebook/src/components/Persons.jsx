const Persons = ({ filterPerson, removeData }) => {
 return (
  <ul>
   {filterPerson.map((person) => (
    <li key={person.id}>
     {person.name} {person.number}
     <button
      onClick={() => {
       removeData(person);
      }}
     >
      Delete
     </button>
    </li>
   ))}
  </ul>
 );
};

export default Persons;
