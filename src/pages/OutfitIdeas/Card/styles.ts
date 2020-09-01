import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`
export const CardContainer = styled(Animated.View)`
  /* background: #c9e9e7; */
  border-radius: 16px;
  overflow: hidden;
`
// #74bcb8
// #a0d5d2
// #c9e9e7

export const ImageCard = styled(Animated.Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: undefined;
  height: undefined;
`
