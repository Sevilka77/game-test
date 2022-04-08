import { cards, shuffleDeck } from './cards'

function initializeDeck(num) {
  const deck = []
  cards.forEach((c) => {
    for (let i = 0; i < c.count[num]; i++) {
      deck.push({
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
  return deck.map((c, idx) => ({ ...c, id: idx }))
}

export const initializeGame = (numPlayers) => {
  const tempDeck = initializeDeck(numPlayers)
  const players = []
  const deckEvent = []
  const deckPanic = []
  const deck = []
  tempDeck.forEach((c) => {
    ;(c.type === 'notpanic') & (c.title !== 'Infected')
      ? deckEvent.push(c)
      : deckPanic.push(c)
  })
  shuffleDeck(deckEvent)
  //give each player cards
  for (let i = 0; i < numPlayers; i++) {
    players.push({
      name: '',
      hand: [
        { ...deckEvent.pop() },
        { ...deckEvent.pop() },
        { ...deckEvent.pop() },
        { ...deckEvent.pop() },
      ],
      picked: [],
      played: null,
      id: `${i}`,
    })
  }
  deck.push(...deckEvent, ...deckPanic)
  return { deck, players }
}
