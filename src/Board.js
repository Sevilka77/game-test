import React from 'react'
import './styles/board.css'
import Player from './Player'

function Board({ playerID, ...props }) {
  return (
    <div className="board">
      <Player handID={playerID} gameData={props} />
    </div>
  )
}

export default Board
