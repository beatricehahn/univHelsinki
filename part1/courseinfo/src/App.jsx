import Header from './component/Header';
import Content from './component/Content';
import Total from './component/Total';

const App = () => {
  const title = 'Half Stack application development';

  const courses = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header title={title}/>
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  );
};

export default App;