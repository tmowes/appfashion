import React, { useState } from 'react'

import { CategoryItemProps } from './types'
import {
  Container,
  RoundedButton,
  CategoryLabel,
  SelectedButton,
} from './styles'

const CategoryItem: React.FC<CategoryItemProps> = ({ color, label }) => {
  const [selected, setSelected] = useState(false)
  return (
    <Container>
      <RoundedButton
        onPress={() => setSelected(prev => !prev)}
        style={{ backgroundColor: color }}
      >
        {selected && <SelectedButton />}
      </RoundedButton>
      <CategoryLabel>{label}</CategoryLabel>
    </Container>
  )
}

export default CategoryItem
