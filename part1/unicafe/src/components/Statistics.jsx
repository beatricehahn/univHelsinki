/* eslint-disable react/prop-types */

import StatisticLine from "./StatisticLine"

// This component displays extracted statistics
const Statistics = ({clicks}) => {
    const { good, neutral, bad, total} = clicks

    if (total === 0) {
        return (
            <p>No statistics available</p>
        )
    } 
    return (
        <div>
            <h2>Statistics</h2>

            <StatisticLine text='good:' value={good} />
            <StatisticLine text='neutral:' value={neutral} />
            <StatisticLine text='bad:' value={bad} />
            <StatisticLine text='total:' value={total} />
            <StatisticLine text='average:' value={(good-bad)/ total} />
            <StatisticLine text='positive:' value={`${good/(total) * 100} %`} />
        </div>
    )
    
}

export default Statistics