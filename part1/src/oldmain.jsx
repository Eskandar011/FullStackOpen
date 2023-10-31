import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//hooks
import { useState } from "react";
const root = createRoot(document.getElementById("root"));

const Counter = ({ number }) => {
 return <h1>{number}</h1>;
};

const App = () => {
 const [counter, updateCounter] = useState(0);

 const incrementHandleClick = () => {
  updateCounter(counter + 1);
 };
 const decrementHandleClick = () => {
  updateCounter(counter - 1);
 };
 const resetHandleClick = () => {
  updateCounter(0);
 };

 return (
  <>
   <h2>Magia de React</h2>
   <Counter number={counter} />
   <button onClick={incrementHandleClick}>Incrementar</button>
   <button onClick={decrementHandleClick}>Decrementar</button>
   <button onClick={resetHandleClick}>Reset</button>
  </>
 );
};

root.render(
 <StrictMode>
  <App />
 </StrictMode>
);
