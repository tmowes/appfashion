import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { LinkContainerProps } from './types'

const variants = {
  primary: css`
    color: #2cb9b0;
  `,
  primaryFilled: css`
    color: #2cb9b0;
    background: #2cb9b01c;
    padding: 4px 8px;
    border-radius: 16px;
  `,
  white: css`
    color: white;
  `,
  default: css`
    color: #0c0d34;
  `,
}

export const Container = styled(RectButton)<LinkContainerProps>`
  ${({ variant }) => css`
    align-items: center;
    background: transparent;
    ${variant && variants[variant]};
  `}
`
export const Label = styled.Text<LinkContainerProps>`
  ${({ variant }) => css`
    font-size: 14px;
    line-height: 16px;
    font-family: 'SF-Pro-Text-Regular';
    text-align: center;
    ${variant && variants[variant]};
    background: transparent;
  `}
`
