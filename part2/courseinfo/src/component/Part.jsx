/* eslint-disable react/prop-types */
// renders name and number of exercises of a single part
const Part = (props) => {
    return (
        <p>{props.name}: {props.exercises}</p>
    );
};

export default Part;