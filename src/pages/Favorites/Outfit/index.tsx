import React from 'react'

import { FavoriteOutfitProps } from './types'
import { Container } from './styles'

const Outfit: React.FC<FavoriteOutfitProps> = ({
  color,
  aspectRatio,
  outfitWith,
}) => {
  return (
    <Container
      style={{
        backgroundColor: color,
        width: outfitWith,
        height: outfitWith * aspectRatio,
        marginVertical: 4,
      }}
    />
  )
}

export default Outfit
