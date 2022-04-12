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

export const Analysis = (G, ctx) => {
  //Посмотреть карты на руке соседа
}
export const Axe = (G, ctx) => {
  //Убрать карантин на себе или соседнем игроке, или убрать дверь между
}

export const BarredDoor = (G, ctx) => {
  //Установить дверь слеа или справа
}

export const SwapCardOther = (G, ctx) => {
  // Поменяться одной картой с любым игрокм
}

export const ShowCardsSosedu = (G, ctx) => {
  // Показать карты соседу
}
export const SwapCardDeck = (G, ctx) => {
  // Поменять карту с руки на верхнюю колоды.Ход заканчивается
}

export const ChangePlaces = (G, ctx) => {
  // Поменяться с соседним игроком местами, проверка на дверь и карантин
}

export const FlameThrower = (G, ctx) => {
  // Убить игрока
}

export const Forgetfull = (G, ctx) => {
  // Сбросить 3 карты и взять 3 новые.
}
export const ChangePlacesOther = (G, ctx) => {
  // Поменяться с любым игроком если он не на карантине
}
