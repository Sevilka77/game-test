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
export const Neto = {
  name: 'neto',
  setup: setup,
  phases: {
    draw: {
      moves: {},
      onBegin: () => {},
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
