import React, { useState } from 'react'
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils'
import Modal from './Modal/Modal'

const player = () => {
  const [modalActive, setModalActive] = useState(true)
  return (
    <div>
      <Modal active={modalActive} setActive={setModalActive}>
        player
      </Modal>
    </div>
  )
}

export default player
