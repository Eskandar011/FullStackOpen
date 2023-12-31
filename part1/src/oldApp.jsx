import { useState } from "react";

const History = (props) => {
 if (props.allClicks.length === 0) {
  return <div>the app is used by pressing the buttons</div>;
 }

 return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => (
 <button onClick={handleClick}>{text}</button>
);

const App = () => {
 //States------------------------------------------
 //Complex State with an object
 const [left, setLeft] = useState(0);
 const [right, setRight] = useState(0);
 //Complex State with an array
 const [allClicks, setAll] = useState([]);

 //Another State
 const [total, setTotal] = useState(0);

 //----------------------------------------------------
 const handleLeftClick = () => {
  setAll(allClicks.concat("L"));
  const updatedLeft = left + 1;
  setLeft(updatedLeft);
  setTotal(updatedLeft + right);
 };

 const handleRightClick = () => {
  setAll(allClicks.concat("R"));
  const updateRight = right + 1;

  setRight(updateRight);
  setTotal(updateRight + left);
 };

 return (
  <div>
   {left}
   <Button handleClick={handleLeftClick} text="left" />
   <Button handleClick={handleRightClick} text="right" />
   {right}
   <p>{allClicks.join(" ")}</p>
   <p>Total: {total}</p>

   <History allClicks={allClicks} />
  </div>
 );
};

export default App;
