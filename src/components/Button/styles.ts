import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { ButtonContainerProps } from './types'

const variants = {
  primary: css`
    background: #2cb9b0;
    color: white;
  `,
  default: css`
    background: #0c0d3411;
    color: #0c0d34;
  `,
}

export const Container = styled(RectButton)<ButtonContainerProps>`
  ${({ variant }) => css`
    height: 48px;
    width: 256px;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    ${variant && variants[variant]};
  `}
`
export const Label = styled.Text<ButtonContainerProps>`
  ${({ variant }) => css`
    font-size: 16px;
    line-height: 24px;
    font-family: 'SF-Pro-Text-Regular';
    text-align: center;
    ${variant && variants[variant]};
    background: transparent;
  `}
`
