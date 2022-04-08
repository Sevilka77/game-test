import React, { useState } from 'react'
import Modal from './Modal/Modal'

const Player = ({ G, ctx, playerID, moves, i }) => {
  const player = G.players[i]
  const hand = player.hand

  const [modalActive, setModalActive] = useState(false)
  return (
    <div>
      <span onClick={() => setModalActive(true)}>{player.id}</span>
      <Modal active={modalActive} setActive={setModalActive}>
        <div
          className="villain-hand"
          id={hand.length === 2 ? 'villain-two-cards' : 'villain-other-cards'}
        >
          {hand.map((x, index) => (
            <div
              className="card-wrapper"
              id={'wrapped-card-' + index}
              key={x.id}
            >
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
      </Modal>
    </div>
  )
}

export default Player
