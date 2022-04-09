import React from 'react'
import styled, { css } from 'styled-components'

const StyledHero = styled.div`
  grid-row: hero;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 30vh;
  animation-name: indicator-villain-turn;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  filter: grayscale(1);
  ${(props) =>
    props.$type &&
    css`
      filter: grayscale(0);
    `};
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

const Hero = (props) => {
  const { G, ctx, playerID } = props

  const cardsToRender = G.players[playerID].hand

  return (
    <StyledHero $type={ctx.currentPlayer === playerID}>
      {cardsToRender.map((x, index) => (
        <StyledCardWrapper id={'wrapped-card-' + index} key={x.id}>
          <StyledImgWrapper
            src={x.imagePath}
            alt={x.alt}
            key={x.alt}
            style={x.props}
          ></StyledImgWrapper>
        </StyledCardWrapper>
      ))}
    </StyledHero>
  )
}
export default Hero
