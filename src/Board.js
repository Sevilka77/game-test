import React from 'react'
import './styles/board.css'
import Player from './Player'
import Suspect from './Suspect'

function Board({ playerID, ...props }) {
  return (
    <div className="board">
      <Suspect handID={playerID} gameData={props} />
      <Player handID={playerID} gameData={props} />
    </div>
  )
}

export default Board
