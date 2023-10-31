const Filter = ({ handle }) => {
 return (
  <div>
   <p>Filter</p>
   Shown with: <input type="text" onChange={handle} />
  </div>
 );
};

export default Filter;
