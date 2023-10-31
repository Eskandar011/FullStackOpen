import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const Course = ({ course }) => {
 const { name, id, parts } = course;
 return (
  <div>
   <Header name={name} />
   <Content parts={parts} />
   <Total parts={parts} />
  </div>
 );
};

export default Course;
