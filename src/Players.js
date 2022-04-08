import React, { useState } from 'react'
import './styles/radial.css'
import CardsOnBoard from './CardsOnBoard'

// row of players
const Players = (props) => {
  const { ctx, playerID } = props

  const players = []
  for (let index = 0; index < ctx.numPlayers; index++) {
    const i = parseInt(ctx.playOrder[index])
    players.push(
      <li
        key={props.G.players[i].id + props.G.players[i].name}
        className="player-container"
      >
        <span className="displace radius15 ">
          Игрок {props.G.players[i].id}
        </span>
      </li>
    )
  }
  for (let i = 0; i < parseInt(playerID); i++) {
    players.push(players.shift())
  }

  return (
    <div className="battleground players radial list radius10">
      <CardsOnBoard {...props} />
      <ul
        className="radialList clock  f2 "
        role="navigation"
        aria-label="menu items"
      >
        {players}
      </ul>
    </div>
  )
}

export default Players
