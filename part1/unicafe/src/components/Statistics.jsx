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

            <table>
                <tbody>
                    <tr>
                        <StatisticLine text='good:' value={good} />  
                    </tr>
                    <tr>
                        <StatisticLine text='neutral:' value={neutral} />
                    </tr>
                    <tr>
                        <StatisticLine text='bad:' value={bad} />
                    </tr>
                    <tr>
                        <StatisticLine text='total:' value={total} /> 
                    </tr>
                    <tr>
                        <StatisticLine text='average:' value={(good-bad)/ total} />
                    </tr>
                    <tr>
                        <StatisticLine text='positive:' value={`${good/(total) * 100} %`} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}

export default Statistics