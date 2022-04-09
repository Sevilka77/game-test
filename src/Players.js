import React from 'react'
import CardsOnBoard from './CardsOnBoard'
import Player from './Player'
import styled from 'styled-components'

const PlayersWrapper = styled.div`
  grid-row: players;
  display: grid;
  grid-template-rows:
    [turnplayers] 1fr
    [cardsonboard] 1fr;
  justify-content: center;
`
const FlexWrapper = styled.div`
  grid-row: turnplayers;
  display: flex;
  justify-content: center;
`
// row of players
const Players = (props) => {
  const { ctx } = props

  const players = []
  for (let index = 0; index < ctx.numPlayers; index++) {
    const i = parseInt(ctx.playOrder[index])
    players.push(<Player {...props} i={i} />)
  }
  /*  for (let i = 0; i < parseInt(playerID); i++) {
    players.push(players.shift())
  }
  уже не надо, было для радиального меню.
 */
  return (
    <PlayersWrapper>
      <FlexWrapper> {players}</FlexWrapper>

      <CardsOnBoard {...props} />
    </PlayersWrapper>
  )
}

export default Players
