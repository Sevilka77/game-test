import { shuffleDeck } from './cards'
import { initializeGame } from './initializer'

const setup = ({ numPlayers }) => {
  const { deck, players } = initializeGame(numPlayers)
  return {
    players: players,
    briscola: null,
    deckOnBoard: shuffleDeck(deck),
    evaluated: false,
    winner: 0,
    loser: 1,
    middle: [],
    previousRound: [],
  }
}
const DrawCard = (G, ctx) => {
  //встроить проверку окончания колоды и проверку типа карты
  const card = G.deckOnBoard.pop()
  G.players[ctx.currentPlayer].hand.push(card)
  console.log('Play Card')
  ctx.events.endStage()
}

const PlayCard = (G, ctx) => {
  console.log('Play Card')
  ctx.events.endStage()
}
const SwapCard = (G, ctx) => {
  console.log('swap card')
  ctx.events.endStage()
  ctx.events.endTurn()
}

export const Neto = {
  name: 'neto',
  setup: setup,

  phases: {
    // ждем когда все нажмут что готоыв
    pregame: {
      next: 'main',
    },
    //играем
    main: {
      turn: {
        activePlayers: { currentPlayer: 'draw' },
        stages: {
          draw: {
            minMoves: 1,
            maxMoves: 1,
            moves: { DrawCard },
            next: 'play',
          },
          play: { minMoves: 1, maxMoves: 1, moves: { PlayCard }, next: 'swap' },
          swap: { minMoves: 1, maxMoves: 1, moves: { SwapCard } },
        },
      },
      start: true,
    },
  },
}

/* function prepareGame(ctx) {
  const deck = initializeDeck(ctx.numPlayers)
  return {
    player_0: {
      cards: [],
      picked: [],
      played: null,
    },

    player_1: {
      cards: [],
      picked: [],
      played: null,
    },
    player_2: {
      cards: [],
      picked: [],
      played: null,
    },
    player_3: {
      cards: [],
      picked: [],
      played: null,
    },
    briscola: null,
    deck: deck,
    deckOnBoard: shuffleDeck(deck),
    evaluated: false,
    winner: 0,
    loser: 1,
    middle: [],
    previousRound: [],
  }
} */
