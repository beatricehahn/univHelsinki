/* eslint-disable react/prop-types */
// total renders the total number of exercises
const Total = ({courses}) => {
    return (
        <p>Number of exercises: 
        {
            courses[0].exercises +
            courses[1].exercises +
            courses[2].exercises
        }
        </p>
    )
};

export default Total;