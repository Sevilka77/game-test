import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import Players from './Players'

const BoardWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: grid;
  grid-template-rows:
    [players] 2fr
    [hero] 1fr;
  background: linear-gradient(
    53deg,
    rgba(82, 78, 144, 1) 0%,
    rgba(71, 145, 59, 1) 63%,
    rgba(56, 76, 80, 1) 100%
  );
`
const Board = (props) => {
  return (
    <BoardWrapper>
      <Players {...props} />
      <Hero {...props} />
    </BoardWrapper>
  )
}

export default Board

/* <Players {...props} />
<Hero {...props} /> */
