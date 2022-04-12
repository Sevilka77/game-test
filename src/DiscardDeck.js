import React from 'react'
import styled from 'styled-components'
const StyledCardWrapper = styled.div`
  margin: 0.6em;
  height: 30vh;
  transform: rotate(90deg);
  filter: drop-shadow(1vh -1vh 4px rgb(0, 0, 0, 0.4));
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
const StyledImgWrapper = styled.img`
  object-fit: contain;
  height: 100%;
  border-radius: 4px;
`

const DiscardDeck = (props) => {
  if (props.G.discardDeckOnBoard.length < 1) {
    return
  }
  const remainingCards = props.G.discardDeckOnBoard
  const topCard = remainingCards[remainingCards.length - 1]

  return (
    <StyledCardWrapper id={'wrapped-card-' + topCard.id} key={topCard.id}>
      <StyledImgWrapper
        src={topCard.imageBackside}
        key={topCard.alt.charCodeAt(1) + topCard.alt.charCodeAt(2)}
        style={topCard.props}
      />
    </StyledCardWrapper>
  )
}

export default DiscardDeck
