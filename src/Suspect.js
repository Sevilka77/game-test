import React from 'react'

export default function Suspect({ gameData, handID }) {
  const hero = handID
  // const { currentPlayer } = gameData.ctx
  const p0cards = gameData.G.player_0.cards
  const p1cards = gameData.G.player_1.cards
  //const p2cards = gameData.G.player_3.cards
  //const p3cards = gameData.G.player_4.cards

  const suspectCardsToRender = !parseFloat(hero) ? p1cards : p0cards
  return (
    <div
      className="villain-hand"
      id={
        suspectCardsToRender.length === 2
          ? 'villain-two-cards'
          : 'villain-other-cards'
      }
    >
      {suspectCardsToRender.map((x, index) => (
        <div className="card-wrapper" id={'wrapped-card-' + index} key={x.id}>
          <div className="transform-wrapper">
            <img
              className="villain-playing-card"
              src={x.imageBackside}
              key={x.alt.charCodeAt(1) + x.alt.charCodeAt(2)}
              style={x.props}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
