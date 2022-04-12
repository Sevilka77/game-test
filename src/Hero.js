import React from 'react'
import styled, { css } from 'styled-components'

const StyledHero = styled.div`
  grid-row: hero;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 30vh;
  filter: grayscale(1);
  ${(props) =>
    props.$type &&
    css`
      filter: grayscale(0);
    `};
`
const StyledCardWrapper = styled.div`
  margin: 0.6em;
  height: 100%;
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
const DiscardCard = styled.div`
  position: absolute;
  right: 0;
  background-color: rgba(255, 0, 0, 0.5);
  padding: 0.1em 0.3em;
  border-radius: 4px;
  :hover {
    background-color: rgba(255, 0, 0, 0.7);
  }
`

const Hero = (props) => {
  const { G, ctx, playerID, moves } = props

  const cardsToRender = G.players[playerID].hand

  const onClick = (id) => moves.Discard(id)

  return (
    <StyledHero $type={ctx.currentPlayer === playerID}>
      {cardsToRender.map((x, index) => (
        <StyledCardWrapper id={'wrapped-card-' + index} key={x.id}>
          {ctx.activePlayers[ctx.currentPlayer] === 'play' && (
            <DiscardCard onClick={() => onClick(x.id)}>X</DiscardCard>
          )}
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
