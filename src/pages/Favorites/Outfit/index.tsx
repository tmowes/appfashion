import React from 'react'
import { Text } from 'react-native'

import { FavoriteOutfitProps } from './types'
import { Container } from './styles'

const Outfit: React.FC<FavoriteOutfitProps> = ({ color, aspectRatio }) => {
  return (
    <Container style={{ backgroundColor: color }}>
      <Text>{aspectRatio}</Text>
    </Container>
  )
}

export default Outfit
