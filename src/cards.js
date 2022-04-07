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

const card5 = {
  cardId: 5,
  imagePath: '/images/5.png',
  alt: 5,
}
const card6 = {
  cardId: 6,
  imagePath: '/images/6.png',
  alt: 6,
}
const card7 = {
  cardId: 7,
  imagePath: '/images/7.png',
  alt: 7,
}
const deck = [card1, card2, card3, card4, card5, card6, card7]

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
