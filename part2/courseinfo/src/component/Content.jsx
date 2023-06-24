/* eslint-disable react/prop-types */
import Part from "./Part";

// renders three Part components
const Content = ({courses}) => {
    return (
        <div>
            <Part name={courses[0].name} exercises={courses[0].exercises} />
            <Part name={courses[1].name} exercises={courses[1].exercises} />
            <Part name={courses[2].name} exercises={courses[2].exercises} />
        </div>
    );
};

export default Content;