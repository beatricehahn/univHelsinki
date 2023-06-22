/* eslint-disable react/prop-types */
// renders name and number of exercises of a single part
const Part = ({part, exercise}) => {
    return (
        <p>{part}: {exercise}</p>
    );
};

export default Part;