import React from 'react'
import styled from 'styled-components'

const StyledCardWrapper = styled.div`
  grid-row: cardsonboard;
  justify-self: center;
  height: 30vh;
  filter: drop-shadow(1vh -1vh 4px rgb(0, 0, 0, 0.4));
`
const StyledImgWrapper = styled.img`
  object-fit: contain;
  height: 100%;
  border-radius: 30px;
`
const CardsOnBoard = (props) => {
  const remainingCards = props.G.deckOnBoard
  const topCard = remainingCards[remainingCards.length - 1]
  const onClick = () => props.moves.DrawCard()
  return (
    <StyledCardWrapper id={'wrapped-card-' + topCard.id} key={topCard.id}>
      <StyledImgWrapper
        src={topCard.imageBackside}
        key={topCard.alt.charCodeAt(1) + topCard.alt.charCodeAt(2)}
        style={topCard.props}
        onClick={() => onClick()}
      />
    </StyledCardWrapper>
  )
}

export default CardsOnBoard
