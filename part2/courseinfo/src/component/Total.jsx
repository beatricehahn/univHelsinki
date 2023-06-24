/* eslint-disable react/prop-types */
// total renders the total number of exercises
const Total = ({chapters}) => {
    const total = chapters.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0
    );
    
    return (
        <h3>Total of {total} exercises </h3>
    )
};

export default Total;