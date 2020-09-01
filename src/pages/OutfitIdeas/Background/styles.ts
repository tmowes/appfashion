import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { BORDER_RADIUS } from '../../OnBoarding/Slide/styles'

const { width } = Dimensions.get('window')

const aspectRatio = 1280 / 1856
const imgHeight = width * aspectRatio * 1.4

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const TopContainer = styled.View`
  flex: 0.4;
  background: #ef713d;
`
export const TopBackground = styled.View`
  flex: 1;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
  background: white;
`
export const ImageContainer = styled.View`
  flex: 0.4;
  overflow: hidden;
`
export const ImageContent = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
  overflow: hidden;
`
export const ImageBackground = styled.Image`
  width: ${width}px;
  height: ${imgHeight}px;
  top: -34px;
`
export const FooterContainer = styled.View`
  flex: 0.2;
  background: #ef713d;
`
export const FooterContent = styled.View`
  flex: 1;
  background: #0c0d34;
  border-top-left-radius: ${BORDER_RADIUS}px;
`

export const BorderTopLeft = styled.View`
  flex: 1;
  background: white;
`
export const BorderBottomRight = styled.View`
  flex: 1;

  background: #0c0d34;
`
