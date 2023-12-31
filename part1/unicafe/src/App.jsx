import { useState } from 'react'

import Statistics from './components/Statistics'
import Button from './components/Button'

import './App.css'

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, 
    neutral: 0,
    bad: 0,
    total: 0
  })

  const handleGood = () => 
    setClicks({
      ...clicks,
      good: clicks.good + 1, 
      total: clicks.total + 1,
    })

  const handleNeutral = () => 
    setClicks({
      ...clicks, 
      neutral: clicks.neutral + 1, 
      total: clicks.total + 1
    })
  const handleBad = () => 
    setClicks({
      ...clicks, 
      bad: clicks.bad + 1, 
      total: clicks.total + 1
    })

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='good' handler={handleGood} />
      <Button text='neutral' handler={handleNeutral} />
      <Button text='bad' handler={handleBad} />

      <br/>

      <Statistics clicks={clicks}/>

    </div>
  )
}

export default App
