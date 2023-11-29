import { useState } from "react";

const PersonForm = ({
 addData,
 newName,
 newNumber,
 handleNameChange,
 handleNumberChange,
}) => {
 return (
  <form onSubmit={addData}>
   <div>
    Name: <input value={newName} onChange={handleNameChange} />
   </div>
   <div>
    Phone: <input value={newNumber} onChange={handleNumberChange} />
   </div>
   <div>
    <button type="submit">Add</button>
   </div>
  </form>
 );
};

export default PersonForm;
