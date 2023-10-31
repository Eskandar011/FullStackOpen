import { useState } from "react";

const Button = ({ onClick, text }) => {
 return <button onClick={onClick}>{text}</button>;
};

const Table = (props) => {
 const [good, neutral, bad, all, average, positive] = props.data;

 return (
  <>
   <table>
    <tbody>
     <tr>
      <td>good</td>
      <td>{good}</td>
     </tr>
     <tr>
      <td>neutral</td>
      <td>{neutral}</td>
     </tr>
     <tr>
      <td>bad</td>
      <td>{bad}</td>
     </tr>
     <tr>
      <td>all</td>
      <td>{all}</td>
     </tr>
     <tr>
      <td>average</td>
      <td>{average}</td>
     </tr>
     <tr>
      <td>positive</td>
      <td>{positive}%</td>
     </tr>
    </tbody>
   </table>
  </>
 );
};
const Statistics = (props) => {
 const data = props.stats;
 console.log(data);
 return (
  <>
   <Table data={data} />
  </>
 );
};

const App = () => {
 // save clicks of each button to its own state
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);

 let all = good + neutral + bad;
 let average = ((good - bad) / all).toFixed(1);
 let positive = ((good / all) * 100).toFixed(1);

 const handleClickGood = () => {
  setGood(good + 1);
 };
 const handleClickNeutral = () => {
  setNeutral(neutral + 1);
 };
 const handleClickBad = () => {
  setBad(bad + 1);
 };

 return (
  <div>
   <h1>give feedback</h1>
   <Button onClick={handleClickGood} text="good" />
   <Button onClick={handleClickNeutral} text="neutral" />
   <Button onClick={handleClickBad} text="bad" />
   <div>
    <h1>Statisc</h1>
    {all === 0 ? (
     "No feedback given"
    ) : (
     <Statistics stats={[good, neutral, bad, all, average, positive]} />
    )}
   </div>
  </div>
 );
};

export default App;
