import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { OutfitColorsSelectorProps } from './types'

export const Container = styled(RectButton)<OutfitColorsSelectorProps>`
  background: ${({ color }) => color};
  height: 32px;
  width: 32px;
  border-radius: 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
`
export const Ring = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: 1px solid white;
`
