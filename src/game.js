import { deck, shuffleDeck } from './cards'

export const Neto = {
  name: 'neto',
  setup: prepareGame,
}

function prepareGame() {
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

    briscola: null,
    deckOnBoard: shuffleDeck(deck),
    evaluated: false,
    winner: 0,
    loser: 1,
    middle: [],
    previousRound: [],
  }
}
