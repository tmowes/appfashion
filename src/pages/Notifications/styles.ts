import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { BORDER_RADIUS } from '../OnBoarding/Slide/styles'

const { width } = Dimensions.get('window')

const aspectRatio = 1280 / 1856
const imgHeight = width * aspectRatio * 1.25

export const Container = styled.View`
  flex: 1;
  background: white;
`

export const FooterContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 288px;
`

export const FooterWrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-top-left-radius: ${BORDER_RADIUS}px;
  overflow: hidden;
`

export const ImageBgHeader = styled.Image`
  width: ${width}px;
  height: ${imgHeight + 20}px;
  top: -10px;
`
