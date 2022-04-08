import React from 'react'
import './styles/board.css'
import Hero from './Hero'
import Players from './Players'

const Board = (props) => {
  return (
    <div className="board">
      <Players {...props} />
      <Hero {...props} />
    </div>
  )
}

export default Board
