import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { BORDER_RADIUS } from '../../pages/OnBoarding/Slide/styles'

const { width, height } = Dimensions.get('window')

const aspectRatio = 1280 / 1856
const imgHeight = width * aspectRatio * 1.25
const HEADER_HEIGHT = (imgHeight * 0.61) / 1.4

export const Container = styled.View`
  height: ${height}px;
  background: white;
`
export const HeaderWrapper = styled.View`
  height: ${HEADER_HEIGHT}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  overflow: hidden;
`
export const ImageBgHeader = styled.Image`
  width: ${width}px;
  height: ${imgHeight}px;
`
export const ImageBgHeaderRadius = styled.Image`
  width: ${width}px;
  height: ${imgHeight}px;
  position: absolute;
  top: -${HEADER_HEIGHT}px;
  left: 0;
  right: 0;
  bottom: 0;
`
export const ContentWrapper = styled.View`
  flex: 1;
  background: #0c0d34;
  overflow: hidden;
`
export const ContentContainer = styled.View`
  flex: 1;
  background: white;
  padding: 64px 32px;
  border-radius: ${BORDER_RADIUS}px;
  border-top-left-radius: 0;
  justify-content: space-evenly;
`
export const FooterContent = styled.View`
  height: 80px;
  background: #0c0d34;
`
