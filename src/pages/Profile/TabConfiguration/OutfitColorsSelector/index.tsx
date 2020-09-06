import React, { useState } from 'react'

import { OutfitColorsSelectorProps } from './types'
import { Container, Ring } from './styles'

const OutfitColorsSelector: React.FC<OutfitColorsSelectorProps> = ({
  color,
}) => {
  const [selected, setSelected] = useState(false)

  return (
    <Container color={color} onPress={() => setSelected(prev => !prev)}>
      {selected && <Ring />}
    </Container>
  )
}

export default OutfitColorsSelector
