import React from 'react'

const CardsOnBoard = (props) => {
  const remainingCards = props.G.deckOnBoard
  const topCard = remainingCards[remainingCards.length - 1]
  return (
    <div
      className="radialPivot card-wrapper"
      id={'wrapped-card-' + topCard.id}
      key={topCard.id}
    >
      <img
        className="hero-playing-card"
        src={topCard.imageBackside}
        key={topCard.alt.charCodeAt(1) + topCard.alt.charCodeAt(2)}
        style={topCard.props}
      />
    </div>
  )
}

export default CardsOnBoard
