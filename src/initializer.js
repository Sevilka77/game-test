import { cards, shuffleDeck } from './cards'

function initializeDeck(num) {
  const deckEvent = []
  const deckPanic = []
  cards.forEach((c) => {
    for (let i = 0; i < c.count[num]; i++) {
      c.type === 'notpanic'
        ? deckEvent.push({
            id: 0,
            title: c.title,
            imagePath: c.imagePath,
            imageBackside: c.imageBackside,
            alt: c.alt,
            on: c.on,
            action: c.action,
            type: c.type,
            description: c.description,
          })
        : deckPanic.push({
            id: 0,
            title: c.title,
            imagePath: c.imagePath,
            imageBackside: c.imageBackside,
            alt: c.alt,
            on: c.on,
            action: c.action,
            type: c.type,
            description: c.description,
          })
    }
  })
  //return deck.map((c, idx) => ({ ...c, id: idx }))
  return
}

export const initializeGame = (numPlayers) => {
  const deck = initializeDeck(numPlayers)
  const players = []
  shuffleDeck(deck)

  //give each player cards
}
