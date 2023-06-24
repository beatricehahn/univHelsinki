/* eslint-disable react/prop-types */
// renders name and number of exercises of a single part
const Part = ({name, exercises}) => {
    return (
        <p>{name}: {exercises}</p>
    );
};

export default Part;