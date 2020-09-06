import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { GenderSelectorProps } from './types'

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 32,
})``
export const TitleInfo = styled.Text`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 18px;
  font-family: 'SF-Pro-Text-Regular';
  color: #0c0d34;
  opacity: 0.4;
`
export const GenderContent = styled.View`
  flex-direction: row;
`
export const GenderButton = styled(RectButton)<GenderSelectorProps>`
  margin-right: 8px;
  height: 32px;
  width: 96px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: #f4f0ef;
  ${({ selected }) =>
    selected &&
    css`
      background: #2cb9b0;
    `}
`
export const GenderText = styled.Text<GenderSelectorProps>`
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
