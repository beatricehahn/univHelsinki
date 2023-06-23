import { useState } from 'react'

import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  // votes object for each anecdote
  const [votes, setVotes] = useState(
    {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0
    }
  )

  const handleVote = () => {
    const copy = {...votes}
    copy[selected] += 1

    setVotes(copy)
    console.log('votes', votes[selected])
  }

  const generateRandom = () => {
    const min = Math.ceil(0)
    const max = Math.floor(anecdotes.length - 1)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleNext = () => {
    setSelected(generateRandom())
  }

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <br />
      <h4>has {votes[selected]} votes</h4>

      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next anecdote</button>
    </div>
  )
}

export default App
