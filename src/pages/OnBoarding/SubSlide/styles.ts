import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const SUBSLIDE_WIDTH = width

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 48px;
  width: ${SUBSLIDE_WIDTH}px;
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
