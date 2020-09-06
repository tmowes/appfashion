import React, { useState } from 'react'

import { Container, BrandTitle } from './styles'
import { OutfitBrandsSelectorProps } from './types'

const OutfitBrandsSelector: React.FC<OutfitBrandsSelectorProps> = ({
  brand,
}) => {
  const [selected, setSelected] = useState(false)

  return (
    <Container selected={selected} onPress={() => setSelected(prev => !prev)}>
      <BrandTitle selected={selected}>{brand}</BrandTitle>
    </Container>
  )
}

export default OutfitBrandsSelector
