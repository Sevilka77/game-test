import React from 'react'
import './styles/radial.css'

// row of players
const Players = (props) => {
  const { ctx, playerID } = props
  const players = []
  for (let index = 0; index < ctx.numPlayers; index++) {
    const i = parseInt(ctx.playOrder[index])
    players.push(
      <li
        key={props.G.players[i].id + props.G.players[i].name}
        className="player-container radialList clock radius5 f2"
      >
        {props.G.players[i].id}
      </li>
    )
  }

  return (
    <div className="battleground players radial list">
      <div class="radialPivot">...</div>
      <ul
        class="radialList clock radius2 f2"
        role="navigation"
        aria-label="menu items"
      >
        {players}
      </ul>
    </div>
  )
}

export default Players
