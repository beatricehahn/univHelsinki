import Header from './component/Header';
import Content from './component/Content';
import Total from './component/Total';

const App = () => {
  const course = {
    title: 'Half Stack application development',
    chapters: [
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
    ]
  }

  return (
    <div>
      <Header title={course.title}/>
      <Content courses={course.chapters} />
      <Total courses={course.chapters} />
    </div>
  );
};

export default App;