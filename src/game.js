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
function DrawCard(G, ctx) {
  //встроить проверку окончания колоды
  const card = G.deckOnBoard.pop()
  G.players[ctx.currentPlayer].hand.push(card)
}

function PlayCard(G, ctx) {
  console.log('play card')
}

export const Neto = {
  name: 'neto',
  setup: setup,
  turn: { minMoves: 1, maxMoves: 1 },

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
            moves: { DrawCard },
          },
          play: { PlayCard },
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
