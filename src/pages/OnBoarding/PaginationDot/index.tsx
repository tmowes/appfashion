import React from 'react'

import { interpolate, Extrapolate } from 'react-native-reanimated'
import { Container } from './styles'
import { PaginationDotProps } from './types'

const PaginationDot: React.FC<PaginationDotProps> = ({
  index,
  currentIndex,
}) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: Extrapolate.CLAMP,
  })
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.75, 1, 0.75],
    extrapolate: Extrapolate.CLAMP,
  })
  return <Container style={{ opacity, transform: [{ scale }] }} />
}

export default PaginationDot
