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
function Draw3Cards(G, ctx) {
  DrawCard(G, ctx)
  DrawCard(G, ctx)
  DrawCard(G, ctx)
}

export const Neto = {
  name: 'neto',
  setup: setup,
  turn: { minMoves: 1, maxMoves: 1 },
  phases: {
    //фазы игры, берем карту из колоды,если взяли панику, переходить в фазу игры, и сразу играем панику
    draw: {
      moves: { DrawCard, Draw3Cards },
      start: true,
    },
    //играем карту
    playCard: {},
    //меняемся картами
    swapCards: {},
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
