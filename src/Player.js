import React from 'react'

export default function Player({ gameData, handID }) {
  const hero = handID
  const { currentPlayer } = gameData.ctx

  const cardsToRender = gameData.G.players[handID].hand

  return (
    <div
      className={currentPlayer === hero ? 'hero-hand-green' : 'hero-hand'}
      id={cardsToRender.length === 2 ? 'hero-two-cards' : 'hero-other-cards'}
    >
      {cardsToRender.map((x, index) => (
        <div className="card-wrapper" id={'wrapped-card-' + index} key={x.id}>
          <div className="transform-wrapper">
            <img
              className="hero-playing-card"
              src={x.imagePath}
              alt={x.alt}
              key={x.alt}
              style={x.props}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
