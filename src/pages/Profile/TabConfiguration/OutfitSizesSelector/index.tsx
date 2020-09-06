import React, { useState } from 'react'

import { Container, SizeTitle } from './styles'
import { OutfitSizesSelectorProps } from './types'

const OutfitSizesSelector: React.FC<OutfitSizesSelectorProps> = ({ size }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Container selected={selected} onPress={() => setSelected(prev => !prev)}>
      <SizeTitle selected={selected}>{size}</SizeTitle>
    </Container>
  )
}

export default OutfitSizesSelector
