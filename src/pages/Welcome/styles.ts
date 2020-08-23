import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { BORDER_RADIUS } from '../OnBoarding/Slide/styles'

export const Container = styled.View`
  flex: 1;
  background: white;
`
export const Slider = styled(Animated.View)`
  flex: 1;
  background: #e8e6e3;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
  align-items: center;
  justify-content: flex-end;
`
export const ImageContainer = styled.Image``
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
  background: #e8e6e3;
`
export const FooterContent = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border-top-left-radius: ${BORDER_RADIUS}px;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
`
export const SubTitle = styled.Text`
  font-size: 24px;
  line-height: 30px;
  font-family: 'SF-Pro-Text-Semibold';
  text-align: center;
  color: #0c0d34;
  margin-bottom: 12px;
`
export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-family: 'SF-Pro-Text-Regular';
  text-align: center;
  color: #0c0d34;
  opacity: 0.7;
  margin-bottom: 40px;
`
