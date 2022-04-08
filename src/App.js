import React from 'react'
import { Client } from 'boardgame.io/react'
import { Neto } from './game'
import Board from './Board'
import { Local } from 'boardgame.io/multiplayer'

function App() {
  const NetoClient = Client({
    game: Neto,
    board: Board,
    numPlayers: 10,
    multiplayer: Local(),
  })

  return <NetoClient playerID="0" />
}

export default App
