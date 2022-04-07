import { initializeDeck, shuffleDeck } from './cards'

export const Neto = {
  name: 'neto',
  setup: (ctx) => prepareGame(ctx),
  phases: {
    draw: {
      moves: {},
      onBegin: (G) => {
        G.player_0.cards = G.deckOnBoard.splice(G.deckOnBoard.length - 4, 4)
        G.player_1.cards = G.deckOnBoard.splice(G.deckOnBoard.length - 4, 4)
      },
      start: true,
    },
  },
}

function prepareGame(ctx) {
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
    deckOnBoard: shuffleDeck(deck),
    evaluated: false,
    winner: 0,
    loser: 1,
    middle: [],
    previousRound: [],
  }
}
