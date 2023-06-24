/* eslint-disable react/prop-types */
// total renders the total number of exercises
const Total = ({chapters}) => {
    return (
        <p>Number of exercises: 
            {
                chapters[0].exercises +
                chapters[1].exercises +
                chapters[2].exercises
            }
        </p>
    )
};

export default Total;