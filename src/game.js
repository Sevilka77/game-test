import { shuffleDeck } from './cards'
import { initializeGame } from './initializer'
import { SelectCard, DrawCard, Discard } from './moves'
import { TurnOrder } from 'boardgame.io/core'

const setup = ({ numPlayers }) => {
  const { deck, players } = initializeGame(numPlayers)
  return {
    players: players,
    briscola: null,
    deckOnBoard: shuffleDeck(deck),
    discardDeckOnBoard: [],
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
    // ждем когда все нажмут что готоыв
    pregame: {
      next: 'main',
    },
    //Фаза время признаний, показываем всем карты по очереди
    //(пока берем карту из колоды, т.к. показ карт еще не сделали)
    revelations: {
      turn: {
        order: TurnOrder.ONCE,
        minMoves: 1,
        maxMoves: 1,
      },
      moves: { DrawCard },
      next: 'main',
    },
    //играем
    main: {
      turn: {
        activePlayers: { currentPlayer: 'draw' },
        stages: {
          draw: {
            moves: { DrawCard },
            next: 'play',
          },
          play: {
            moves: { SelectCard, Discard },
            next: 'swap',
          },
          swap: { minMoves: 1, maxMoves: 1, moves: { SelectCard } },
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
