const PersonForm = ({ addData, handleNameChange, handlePhoneChange }) => {
 return (
  <form onSubmit={addData}>
   <div>
    Name: <input onChange={handleNameChange} />
   </div>
   <div>
    Phone: <input onChange={handlePhoneChange} />
   </div>
   <div>
    <button type="submit">Add</button>
   </div>
  </form>
 );
};

export default PersonForm;
