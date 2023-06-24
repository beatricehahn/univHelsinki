import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({course}) => {    
    const { title, chapters } = course
    return (
        <div>
            <Header title={title} />
            <Content chapters={chapters} />
            <Total chapters={chapters}/>
        </div>
    );
};

export default Course;