/* eslint-disable no-param-reassign */
import React, { useState } from 'react'

import { FavoriteOutfitProps } from './types'
import { Container } from './styles'
import RoundedIconButton from '../../../components/RoundedIconButton'

const Outfit: React.FC<FavoriteOutfitProps> = ({ outfit, outfitWith }) => {
  const [selectedOutfit, setSelectedOutfit] = useState(false)
  return (
    <Container
      onPress={() => {
        setSelectedOutfit(prev => !prev)
        outfit.selected = !outfit.selected
      }}
      style={{
        backgroundColor: outfit.color,
        width: outfitWith,
        height: outfitWith * outfit.aspectRatio,
        marginVertical: 4,
      }}
    >
      {selectedOutfit && (
        <RoundedIconButton
          onPress={() => true}
          name="check"
          color="white"
          backgroundColor="#2cb9b0"
          size={24}
        />
      )}
    </Container>
  )
}

export default Outfit
