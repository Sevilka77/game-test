import React, { useEffect } from 'react'
import './styles/board.css'
import Hero from './Hero'
import Players from './Players'
import Suspect from './Suspect'

const Board = (props) => {
  return (
    <div className="board">
      <Players {...props} />
      <Hero {...props} />
    </div>
  )
}

export default Board
