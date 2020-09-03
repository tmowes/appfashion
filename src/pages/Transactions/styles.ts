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
export const ChartContent = styled.View`
  padding: 16px 20px 0;
`
export const ChartTitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
export const SpendContainer = styled.View``
export const SpendTitle = styled.Text`
  font-size: 12px;
  line-height: 18px;

  font-family: 'SF-Pro-Text-Semibold';
  text-transform: uppercase;
  color: #0c0d34;
  opacity: 0.4;
`
export const SpendValue = styled.Text`
  font-size: 28px;
  line-height: 34px;
  font-family: 'SF-Pro-Text-Semibold';
  text-transform: uppercase;
  color: #0c0d34;
`
export const TimeFilterContainer = styled.View``
export const FooterContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 96px;
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
