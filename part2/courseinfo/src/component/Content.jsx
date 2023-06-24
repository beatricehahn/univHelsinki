/* eslint-disable react/prop-types */
import Part from "./Part";

// renders three Part components
const Content = ({chapters}) => {
    return (
        <div>
            <Part name={chapters[0].name} exercises={chapters[0].exercises} />
            <Part name={chapters[1].name} exercises={chapters[1].exercises} />
            <Part name={chapters[2].name} exercises={chapters[2].exercises} />
        </div>
    );
};

export default Content;