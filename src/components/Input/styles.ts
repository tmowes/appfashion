import styled, { css } from 'styled-components/native'
import { ContainerProps } from './types'

export const Container = styled.View<ContainerProps>`
  ${({ borderColor }) => css`
    margin: 0 0 8px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #8a8d90;
    border: 1px solid ${borderColor};
  `}
`
export const ValidContainer = styled.View`
  margin: 0 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
`
