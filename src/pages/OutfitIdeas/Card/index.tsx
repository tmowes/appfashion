import React from 'react'
import { Dimensions } from 'react-native'

import { mixColor, usePanGestureHandler, mix } from 'react-native-redash'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { add, interpolate, Extrapolate } from 'react-native-reanimated'
import { CardProps } from './types'
import { Container, CardContainer, ImageCard } from './styles'

import { useSpring } from './Animations'

const { width: wWidth } = Dimensions.get('window')
const width = wWidth * 0.8
const height = width * (425 / 294)

const Card: React.FC<CardProps> = ({ position, onSwipe, source, step }) => {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler()
  const backgroundColor: any = mixColor(position, '#c9e9e7', '#74bcb8')
  const translateYOffset = mix(position, 0, -50)
  const scale = mix(position, 1, 0.9)
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  })
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  })
  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    }),
  )
  return (
    <Container>
      <PanGestureHandler {...gestureHandler}>
        <CardContainer
          style={{
            backgroundColor,
            height,
            width,
            transform: [{ translateY }, { translateX }, { scale }],
          }}
        >
          <ImageCard
            {...{ source }}
            style={{ transform: [{ scale: imageScale }] }}
          />
          {/* <Text>{position}</Text> */}
        </CardContainer>
      </PanGestureHandler>
    </Container>
  )
}

export default Card
// #74bcb8
// #a0d5d2
// #c9e9e7
