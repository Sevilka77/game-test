import React from 'react'
import './styles/board.css'
import Hero from './Hero'
import Players from './Players'
import Suspect from './Suspect'

function Board({ playerID, ...props }) {
  return (
    <div className="board">
      <Players {...props} />
      <Hero handID={playerID} gameData={props} />
    </div>
  )
}

export default Board
