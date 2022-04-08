import React from 'react'

const Hero = (props) => {
  const { G, ctx, playerID } = props

  const cardsToRender = G.players[playerID].hand

  return (
    <div
      className={
        ctx.currentPlayer === playerID ? 'hero-hand-green' : 'hero-hand'
      }
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
export default Hero
