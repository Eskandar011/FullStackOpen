import Part from "./Part";
const Content = (props) => {
 const [part1, part2, part3] = props.course.parts;
 console.log(part1);

 return (
  <div>
   <Part part={part1} />
   <Part part={part2} />
   <Part part={part3} />
  </div>
 );
};

export default Content;
