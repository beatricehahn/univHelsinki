/* eslint-disable react/prop-types */
import Part from "./Part";

// renders three Part components
const Content = ({chapters}) => {
    return (
        <div>
            {chapters.map(chapter =>
                <Part key={chapter.id} name={chapter.name} exercises={chapter.exercises} />)}
        </div>
    );
};

export default Content;