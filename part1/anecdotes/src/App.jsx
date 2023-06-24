import { useState } from 'react'

import CurrentAnecdote from './components/CurrentAnecdote'
import TopAnecdote from './components/TopAnecdote'

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
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  // top is the index of the anecdote with most votes
  const [top, setTop] = useState(-1)
  const [mostVotes, setMostVotes] = useState(0)

  // update vote count and current top anecdote's index
  const handleVote = () => {
    // copy all values from votes array 
    const copy = votes.map(val => val)

    // increment array for this current index
    copy[selected] += 1

    console.log('copy array:', copy)

    // update state of entire votes array
    setVotes(copy)

    // update state of mostVotes by finding the max value in copy array
    const maxVotes = Math.max(...copy)
    setMostVotes(maxVotes)

    console.log('Most votes recorded on any anecdote: ',maxVotes)

    // find index of the anecdote with the highest vote count
    const currTop = copy.indexOf(maxVotes)

    // update state of current top
    setTop(currTop) 

    console.log('Index with highest number of votes is ', currTop)
  }
  
  // this function generates the random number used as the index for anecdotes array
  const generateRandom = () => {
      const min = 0
      const max = Math.floor(anecdotes.length - 1)
      return Math.floor(Math.random() * (max - min + 1) + min)
  }
    
  // renders the next anecdote, randomly determined from anecdotes array
  const handleNext = () => {
    setSelected(generateRandom())
  }

  return (
    <div>
      <CurrentAnecdote anecdotes={anecdotes} selected={selected}/>
      <p>has {votes[selected]} votes</p>

      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next anecdote</button>

      <TopAnecdote anecdotes={anecdotes} top={top} mostVotes={mostVotes}/>
    </div>
  )
}

export default App
