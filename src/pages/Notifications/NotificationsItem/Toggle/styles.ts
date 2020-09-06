import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { ToggleProps } from './types'

export const Container = styled(RectButton)<ToggleProps>`
  width: 50px;
  height: 28px;
  border-radius: 14px;
  justify-content: center;
  background: #d5c3bb;
  ${({ active }) =>
    active &&
    css`
      background: #2cb9b0;
    `}
`
export const Switcher = styled.View<ToggleProps>`
  margin: 2px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: white;
  align-self: flex-start;
  ${({ active }) =>
    active &&
    css`
      align-self: flex-end;
    `}
`
