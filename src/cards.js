const card1 = {
  cardId: 1,
  imagePath: '/images/1.png',
  alt: 1,
}
const card2 = {
  cardId: 2,
  imagePath: '/images/2.png',
  alt: 2,
}
const card3 = {
  cardId: 3,
  imagePath: '/images/3.png',
  alt: 3,
}
const card4 = {
  cardId: 4,
  imagePath: '/images/4.png',
  alt: 4,
}

const deck = [card1, card2, card3, card4]

function shuffleDeck(deck) {
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  return deck
}
export { deck, shuffleDeck }
