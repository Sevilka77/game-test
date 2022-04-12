export const PlayCard = (G, ctx) => {
  console.log('Play Card')
  ctx.events.endStage()
}
export const SwapCard = (G, ctx) => {
  console.log('swap card')
  ctx.events.endStage()
  ctx.events.endTurn()
}
export const DrawCard = (G, ctx) => {
  //встроить проверку окончания колоды и проверку типа карты
  const card = G.deckOnBoard.pop()
  G.players[ctx.currentPlayer].hand.push(card)
}
