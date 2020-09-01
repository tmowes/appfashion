import React from 'react'

import { categories } from './data'
import CategoryItem from './CategoryItem'
import { Container, ScrollContainer } from './styles'

const Categories: React.FC = () => {
  return (
    <Container>
      <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(({ id, color, label }) => (
          <CategoryItem key={id} {...{ color, label }} />
        ))}
      </ScrollContainer>
    </Container>
  )
}

export default Categories
