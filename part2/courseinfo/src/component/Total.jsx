/* eslint-disable react/prop-types */
// total renders the total number of exercises
const Total = ({chapters}) => {
    let sum = 0;
    for (let i = 0; i < chapters.length; i++ ) {
        sum += chapters[i].exercises
    }
    
    return (
        <h3>Total of {sum} exercises </h3>
    )
};

export default Total;