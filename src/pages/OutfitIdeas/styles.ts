import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const Container = styled.View``
export const ImageBgHeader = styled.Image`
  width: ${width}px;
  height: ${height + 220}px;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
`
