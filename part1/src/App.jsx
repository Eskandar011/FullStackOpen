const Header = (props) => {
  console.log(props.course.name);
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  const parts = props.course.parts;
  return parts.map((element) => (
    <>
      <Part part={element} />
    </>
  ));
};
const Part = (props) => {
  const part = props.part;

  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  const parts = props.course.parts;
  return (
    <>
      <p>
        Number of exercises{" "}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
