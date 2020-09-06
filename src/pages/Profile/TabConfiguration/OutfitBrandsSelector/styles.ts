import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { BrandsSelectorProps } from './types'

export const Container = styled(RectButton)<BrandsSelectorProps>`
  height: 32px;
  padding: 0 16px;
  border-radius: 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  background: #f4f0ef;
  ${({ selected }) =>
    selected &&
    css`
      background: #2cb9b0;
    `}
`
export const BrandTitle = styled.Text<BrandsSelectorProps>`
  font-size: 14px;
  font-family: 'SF-Pro-Text-Regular';
  text-align: center;
  color: #0c0d34;
  ${({ selected }) =>
    selected &&
    css`
      color: white;
    `}
`
