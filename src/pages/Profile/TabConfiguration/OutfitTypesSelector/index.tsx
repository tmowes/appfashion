import React, { useState } from 'react'

import { Container, TypeTitle } from './styles'
import { OutfitTypesSelectorProps } from './types'

const OutfitTypesSelector: React.FC<OutfitTypesSelectorProps> = ({ type }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Container selected={selected} onPress={() => setSelected(prev => !prev)}>
      <TypeTitle selected={selected}>{type}</TypeTitle>
    </Container>
  )
}

export default OutfitTypesSelector
