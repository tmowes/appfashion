/* eslint-disable react-hooks/rules-of-hooks */
import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { Dimensions } from 'react-native'
import { SLIDE_HEIGHT, BORDER_RADIUS } from './Slide/styles'

const { width } = Dimensions.get('window')


export const Container = styled.View`
  flex: 1;
  background: white;
`
export const Slider = styled(Animated.View)`
  height: ${SLIDE_HEIGHT};
  border-bottom-right-radius: ${BORDER_RADIUS}px;
`
export const HorizontalScrollView = styled(Animated.ScrollView).attrs({
  horizontal: true,
  snapToInterval: width,
  decelerationRate: 'fast',
  showsHorizontalScrollIndicator: false,
  bounces: false,
})``

export const Footer = styled.View`
  flex: 1;
`
export const BorderTopLeft = styled(Animated.View)`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const FooterWrapper = styled.View`
  flex: 1;
  background: white;
  border-top-left-radius: ${BORDER_RADIUS}px;
`

export const FooterContent = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  border-top-left-radius: ${BORDER_RADIUS}px;
`
export const PaginationContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${BORDER_RADIUS}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
