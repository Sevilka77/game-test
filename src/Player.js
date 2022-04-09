import React, { useState } from 'react'
import Modal from './Modal/Modal'
import styled from 'styled-components'

const StyledHand = styled.div`
  display: inline-flex;
  height: 30vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation-name: indicator-villain-turn;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
`
const StyledCardWrapper = styled.div`
  padding: 10px;
  height: 100%;
  filter: drop-shadow(1vh -1vh 4px rgb(0, 0, 0, 0.4));
`
const StyledImgWrapper = styled.img`
  object-fit: contain;
  height: 100%;
  border-radius: 30px;
`
const StyledPlayerInfo = styled.span`
  position: relative;
  min-width: 2.5rem;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: #79bd9a;
  border: 1px solid #cff09e;
`
const StyledParent = styled.div``

const Player = ({ G, ctx, playerID, moves, i }) => {
  const player = G.players[i]
  const hand = player.hand

  const [modalActive, setModalActive] = useState(false)
  return (
    <StyledParent key={player.id}>
      <StyledPlayerInfo onClick={() => setModalActive(true)}>
        {player.id}
      </StyledPlayerInfo>
      <Modal active={modalActive} setActive={setModalActive} key={player.id}>
        <StyledHand key={player.id}>
          {hand.map((x, index) => (
            <StyledCardWrapper id={'wrapped-card-' + index} key={x.id}>
              <StyledImgWrapper
                src={x.imageBackside}
                key={x.alt.charCodeAt(1) + x.alt.charCodeAt(2) + x.id}
                style={x.props}
              />
            </StyledCardWrapper>
          ))}
        </StyledHand>
      </Modal>
    </StyledParent>
  )
}

export default Player
