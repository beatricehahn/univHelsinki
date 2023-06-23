// This component displays extracted statistics
const Statistics = ({clicks}) => {

    if (clicks.total === 0) {
        return (
            <p>No statistics available</p>
        )
    } 
    return (
        <div>
            <h1>Statistics</h1>
            <p>good {clicks.good}</p>
            <p>neutral {clicks.neutral}</p>
            <p>bad {clicks.bad}</p>
            <p>all {clicks.total}</p>
            <p>average {(clicks.good-clicks.bad)/ clicks.total}</p>
            <p>positive {clicks.good/(clicks.total) * 100} %</p>
        </div>
    )
    
}

export default Statistics