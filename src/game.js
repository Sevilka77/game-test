import { initializeDeck, shuffleDeck } from './cards'

export const Neto = {
  name: 'neto',
  setup: prepareGame,

  phases: {
    draw: {
      moves: {},
      onBegin: (G) => {
        G.player_0.cards = G.deckOnBoard.splice(G.deckOnBoard.length - 4, 4)
      },
      start: true,
    },
  },
}

function prepareGame() {
  const deck = initializeDeck()
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
    deck: initializeDeck(),
    deckOnBoard: shuffleDeck(deck),
    evaluated: false,
    winner: 0,
    loser: 1,
    middle: [],
    previousRound: [],
  }
}
